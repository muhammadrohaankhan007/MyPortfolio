'use client';

export default function PixelAvatar({ className = '' }: { className?: string }) {
  return (
    <div className={`relative group flex flex-col items-center justify-center ${className}`}>
      {/* Ambient Studio Violet Lighting Behind Avatar */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-[#a880f5]/25 via-[#c9aeff]/15 to-transparent rounded-[14px] blur-xl opacity-70 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

      {/* 14px Radius Pixel Art Card Display */}
      <div className="relative w-full aspect-square max-w-[250px] rounded-[14px] bg-[#10131f] border border-[#a880f5]/25 p-3.5 shadow-2xl flex flex-col items-center justify-between overflow-hidden">
        
        {/* Faint 34px Grid Pattern in Avatar Card */}
        <div 
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #a880f5 1px, transparent 1px), linear-gradient(to bottom, #a880f5 1px, transparent 1px)`,
            backgroundSize: '16px 16px',
          }}
        />

        {/* Top Tech Meta Bar (JetBrains Mono) */}
        <div className="w-full flex items-center justify-between text-[10px] font-mono text-[#a880f5] relative z-10">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a880f5] animate-pulse" />
            <span className="font-semibold tracking-wider">DEV // 32-BIT</span>
          </div>
          <span className="text-stone-400 dark:text-slate-500 tracking-widest text-[9px]">ID: MRK-007</span>
        </div>

        {/* Original Character 32-Bit Pixel-Art Illustration */}
        {/* Features: Glasses, Dark Hair, Over-Ear Headphones, and Hoodie */}
        <div className="relative z-10 my-auto flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
          <svg
            viewBox="0 0 32 32"
            className="w-40 h-40 sm:w-44 sm:h-44 drop-shadow-[0_8px_20px_rgba(168,128,245,0.3)]"
            style={{ shapeRendering: 'crispEdges' }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="hoodieGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1e1836" />
                <stop offset="100%" stopColor="#0f111d" />
              </linearGradient>
              <linearGradient id="glassesGleam" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#a880f5" />
                <stop offset="100%" stopColor="#c9aeff" />
              </linearGradient>
            </defs>

            {/* Over-Ear Headphones - Headband arching over head */}
            <rect x="10" y="2" width="12" height="2" fill="#58408a" />
            <rect x="8" y="3" width="3" height="3" fill="#3a2860" />
            <rect x="21" y="3" width="3" height="3" fill="#3a2860" />

            {/* Dark Hair - Volume, Texture & Spikes */}
            <rect x="11" y="4" width="10" height="3" fill="#090a12" />
            <rect x="12" y="3" width="8" height="2" fill="#141726" />
            <rect x="10" y="5" width="12" height="4" fill="#090a12" />
            <rect x="9" y="7" width="3" height="5" fill="#141726" />
            <rect x="8" y="9" width="2" height="4" fill="#090a12" />

            {/* Hair - Fringe & Front Locks */}
            <rect x="18" y="5" width="5" height="3" fill="#141726" />
            <rect x="21" y="7" width="2" height="3" fill="#090a12" />

            {/* Face / Skin Base (Warm tone profile/3-quarter) */}
            <rect x="12" y="8" width="8" height="7" fill="#f6c28b" />
            <rect x="14" y="15" width="7" height="3" fill="#e0a36e" />
            <rect x="16" y="17" width="4" height="2" fill="#c98553" />

            {/* Stylish Modern Glasses (Angular Frames + Reflective Lens) */}
            {/* Frame Base */}
            <rect x="13" y="9" width="9" height="4" fill="#090a12" />
            <rect x="21" y="10" width="2" height="3" fill="#090a12" />
            {/* Reflective Lenses */}
            <rect x="14" y="10" width="3" height="2" fill="url(#glassesGleam)" />
            <rect x="18" y="10" width="3" height="2" fill="url(#glassesGleam)" />
            {/* Specular White Gleam */}
            <rect x="14" y="10" width="1" height="1" fill="#ffffff" />
            <rect x="18" y="10" width="1" height="1" fill="#ffffff" />
            {/* Bridge */}
            <rect x="17" y="10" width="1" height="1" fill="#090a12" />

            {/* Nose & Mouth profile */}
            <rect x="21" y="13" width="1" height="2" fill="#e0a36e" />
            <rect x="18" y="16" width="2" height="1" fill="#b06c3b" />

            {/* Over-Ear Headphones - Large Padded Earcups */}
            {/* Left Earcup */}
            <rect x="8" y="10" width="4" height="6" fill="#a880f5" />
            <rect x="9" y="11" width="2" height="4" fill="#251745" />
            <rect x="7" y="11" width="2" height="4" fill="#6b46c1" />
            <rect x="9" y="12" width="1" height="2" fill="#c9aeff" />

            {/* Neck */}
            <rect x="13" y="18" width="4" height="3" fill="#c98553" />

            {/* Hoodie - High Collar, Drawstrings & Shoulders */}
            {/* Hoodie Collar Arch */}
            <rect x="10" y="20" width="11" height="4" fill="#2d224d" />
            <rect x="11" y="21" width="9" height="3" fill="#1e1836" />
            <rect x="14" y="22" width="3" height="3" fill="#0f111d" />

            {/* Hoodie Body & Shoulders */}
            <rect x="6" y="24" width="19" height="8" fill="url(#hoodieGrad)" />
            <rect x="4" y="26" width="23" height="6" fill="#10131f" />

            {/* Lilac Accent Seams & Drawstrings on Hoodie */}
            <rect x="13" y="23" width="1" height="6" fill="#a880f5" />
            <rect x="17" y="23" width="1" height="6" fill="#a880f5" />
            <rect x="13" y="29" width="1" height="1" fill="#c9aeff" />
            <rect x="17" y="29" width="1" height="1" fill="#c9aeff" />

            {/* Shoulder Seam Highlights */}
            <rect x="6" y="24" width="2" height="2" fill="#58408a" />
            <rect x="23" y="24" width="2" height="2" fill="#58408a" />
          </svg>
        </div>

        {/* Bottom Tag */}
        <div className="w-full flex items-center justify-between pt-2 border-t border-[#a880f5]/15 text-[10px] font-mono">
          <span className="text-[#a880f5] font-semibold tracking-wide">AUDIO // SYNCED</span>
          <span className="text-stone-400 dark:text-slate-400">HQ 32-BIT</span>
        </div>

        {/* 14px Radius Corner Marks */}
        <span className="absolute top-2 left-2 text-[9px] font-mono text-[#a880f5]/40 pointer-events-none">⌜</span>
        <span className="absolute top-2 right-2 text-[9px] font-mono text-[#a880f5]/40 pointer-events-none">⌝</span>
        <span className="absolute bottom-2 left-2 text-[9px] font-mono text-[#a880f5]/40 pointer-events-none">⌞</span>
        <span className="absolute bottom-2 right-2 text-[9px] font-mono text-[#a880f5]/40 pointer-events-none">⌟</span>
      </div>
    </div>
  );
}
