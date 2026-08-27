import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
}) => {
  const sizeMap = {
    sm: { img: 'w-8 h-8', text: 'text-sm' },
    md: { img: 'w-10 h-10', text: 'text-base' },
    lg: { img: 'w-14 h-14', text: 'text-xl' },
    xl: { img: 'w-20 h-20', text: 'text-2xl' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Official Uploaded Logo */}
      <div
        className={`relative ${currentSize.img} rounded-xl overflow-hidden shadow-sm flex items-center justify-center flex-shrink-0 bg-white border border-[#E9E7E0]`}
      >
        <img
          src="/images/logo.jpg"
          alt="General Pet Shop"
          className="w-full h-full object-contain"
          onError={(e) => {
            // Fallback if direct path needs relative prefix
            const target = e.currentTarget;
            if (target.src.indexOf('./images/logo.jpg') === -1) {
              target.src = './images/logo.jpg';
            }
          }}
        />
      </div>

      {/* Clean Brand Typography - Just the Logo & "Pet Shop" as requested */}
      {showText && (
        <div className="flex items-center gap-1.5">
          <span className={`font-black tracking-tight text-[#2D2D2D] ${currentSize.text}`}>
            General
          </span>
          <span className="inline-flex items-center px-1.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-[#FFF9F0] text-[#2D6A4F] border border-[#F4A261]/50">
            Pet Shop
          </span>
        </div>
      )}
    </div>
  );
};

