"""Gera public/og-cover.jpg, o card que WhatsApp, Telegram e Facebook mostram
quando o link do site e colado numa conversa.

    pip install Pillow
    python tools/og-preview.py          # rodar da raiz do repositorio

A Outfit (a mesma dos titulos do site) e baixada do Google Fonts na primeira
vez e fica em tools/fonts/, que nao vai para o repositorio.

Isto NAO faz parte do build do Vite; o script so existe para reconstruir a
imagem quando a arte, a foto ou a chamada mudarem.

Ao trocar a imagem por outra, manter as tres regras que o WhatsApp cobra:
JPEG ou PNG (o crawler dele nao renderiza WebP), 1200x630 e abaixo de 300 KB.
"""
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os, re, sys, urllib.request

AQUI  = os.path.dirname(os.path.abspath(__file__))
FONTS = os.path.join(AQUI, "fonts")
W, H  = 1200, 630

# paleta do site (Hero.tsx / index.css)
GREEN_DARK = ( 27,  67,  50)   # #1B4332
AMBER      = (244, 162,  97)   # #F4A261
DARK       = ( 12,  20,  16)
WA_BG      = ( 37, 211, 102)   # #25D366
WA_FG      = (  8,  36,  15)
WHITE      = (255, 255, 255)

CSS = "https://fonts.googleapis.com/css2?family=Outfit:wght@600;700;800"

FACHADA = "src/assets/images/fachada-general-petshop.jpg"
LOGO    = "images/logo.jpg"


def baixa_fontes():
    """Puxa os pesos da Outfit do Google Fonts, uma vez so."""
    os.makedirs(FONTS, exist_ok=True)
    if all(os.path.exists(f"{FONTS}/Outfit-{p}.ttf") for p in (600, 700, 800)):
        return
    req = urllib.request.Request(CSS, headers={"User-Agent": "Mozilla/5.0"})
    css = urllib.request.urlopen(req).read().decode()
    for peso, url in re.findall(
            r"font-weight:\s*(\d+);.*?src:\s*url\((https://\S+?\.ttf)\)", css, re.S):
        alvo = f"{FONTS}/Outfit-{peso}.ttf"
        if not os.path.exists(alvo):
            urllib.request.urlretrieve(url, alvo)
            print("baixado", alvo)


def f(peso, tam):
    return ImageFont.truetype(f"{FONTS}/Outfit-{peso}.ttf", tam)


# ------------------------------------------------------------------ fundo
def fundo(path, offset=0.30):
    """Recorta a foto numa faixa 1200x630, cobrindo sem deformar.

    A fachada e um retrato; offset escolhe a altura da faixa. 0.30 pega a
    faixa do letreiro e a vitrine, e descarta a calcada.
    """
    im = Image.open(path).convert("RGB")
    sc = max(W / im.width, H / im.height)
    im = im.resize((round(im.width * sc), round(im.height * sc)), Image.LANCZOS)
    x = (im.width - W) // 2
    y = min(max(int(im.height * offset), 0), im.height - H)
    return im.crop((x, y, x + W, y + H))


def _suave(t):
    t = max(0.0, min(1.0, t))
    return t * t * (3 - 2 * t)


def escurecer(im, a0=250, a1=30, ini=0.30, fim=0.86, geral=34):
    """Verde quase solido na esquerda, abrindo para a foto na direita."""
    ramp = Image.new("L", (W, 1))
    p = ramp.load()
    for x in range(W):
        p[x, 0] = round(a0 + (a1 - a0) * _suave((x / W - ini) / (fim - ini)))
    im = Image.composite(Image.new("RGB", (W, H), GREEN_DARK), im, ramp.resize((W, H)))
    # veu geral leve: segura o lado direito para o card nao estourar
    return Image.blend(im, Image.new("RGB", (W, H), DARK), geral / 255)


# ------------------------------------------------------------------ pecas
def espacado(d, xy, texto, fonte, cor, tracking):
    """A logotipia do site usa letter-spacing; o Pillow nao tem, entao vai
    letra por letra."""
    x, y = xy
    for ch in texto:
        d.text((x, y), ch, font=fonte, fill=cor)
        x += d.textlength(ch, font=fonte) + tracking
    return x - xy[0]


def pilula(d, x, y, texto, fonte, cor_texto, borda=None, fill=None,
           padx=26, alt=54):
    larg = d.textlength(texto, font=fonte) + padx * 2
    d.rounded_rectangle([x, y, x + larg, y + alt], radius=alt // 2,
                        fill=fill, outline=borda, width=0 if fill else 2)
    cx = fonte.getbbox("Ag")
    d.text((x + padx, y + (alt - (cx[3] - cx[1])) / 2 - cx[1]), texto,
           font=fonte, fill=cor_texto)
    return larg


def selo(path, lado=112, moldura=5, raio=26):
    """Recorta o mascote do logo quadrado e devolve um selo arredondado com
    borda branca, do jeito que o header do site mostra a marca."""
    im = Image.open(path).convert("RGB")
    l = im.width
    im = im.crop((int(l * .30), int(l * .17), int(l * .72), int(l * .59)))
    interno = lado - moldura * 2
    im = im.resize((interno, interno), Image.LANCZOS)

    selo = Image.new("RGBA", (lado, lado), (0, 0, 0, 0))
    d = ImageDraw.Draw(selo)
    d.rounded_rectangle([0, 0, lado - 1, lado - 1], radius=raio, fill=WHITE)

    mask = Image.new("L", (interno, interno), 0)
    ImageDraw.Draw(mask).rounded_rectangle(
        [0, 0, interno - 1, interno - 1], radius=raio - moldura, fill=255)
    selo.paste(im, (moldura, moldura), mask)
    return selo


def sombra(camada, desfoque=10, forca=0.62, desce=4):
    """Sombra preta desfocada tirada do proprio recorte da camada de texto."""
    a = camada.getchannel("A").filter(ImageFilter.GaussianBlur(desfoque))
    a = a.point(lambda v: int(v * forca))
    s = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    s.putalpha(a)
    fora = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    fora.paste(s.crop((0, 0, W, H - desce)), (0, desce))
    return fora


# ------------------------------------------------------------------ card
def card():
    im = escurecer(fundo(FACHADA)).convert("RGBA")

    txt = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(txt)
    X = 62                                       # margem esquerda de tudo

    # cabecalho: marca, e onde fica
    mark = selo(LOGO)
    txt.alpha_composite(mark, (X, 44))
    XT = X + mark.width + 24
    espacado(d, (XT, 52), "GENERAL", f(800, 52), WHITE, 2)
    espacado(d, (XT + 2, 112), "PET SHOP", f(700, 26), WHITE, 10)
    d.text((XT + 2, 148), "Parque São Paulo, Cascavel PR",
           font=f(600, 23), fill=AMBER)

    # manchete: a promessa da home, com o diferencial em ambar
    y, lh = 232, 64
    for trecho, cor in (("Banho e tosa sem sedação,", WHITE),
                        ("veterinária e táxi pet", AMBER),
                        ("no mesmo lugar.", WHITE)):
        d.text((X, y), trecho, font=f(800, 52), fill=cor)
        y += lh

    # pilulas do que nao cabe na manchete
    x = X
    for t in ("Rações e acessórios", "Toalhas esterilizadas"):
        x += pilula(d, x, 442, t, f(600, 25), WHITE,
                    borda=(255, 255, 255, 150)) + 14

    # chamada
    pilula(d, X, 520, "Agende no WhatsApp", f(700, 26), WA_FG,
           fill=WA_BG, padx=30, alt=58)

    im.alpha_composite(sombra(txt))
    im.alpha_composite(txt)
    return im.convert("RGB")


if __name__ == "__main__":
    baixa_fontes()
    saida = sys.argv[1] if len(sys.argv) > 1 else "public/og-cover.jpg"
    im = card()
    im.save(saida, "JPEG", quality=86, optimize=True, progressive=False)
    kb = os.path.getsize(saida) // 1024
    print(f"{saida}  {im.width}x{im.height}  {kb} KB")
    if kb > 300:
        print("ATENCAO: acima de 300 KB, o WhatsApp pode nao montar o card grande")
