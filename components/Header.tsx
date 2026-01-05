
import React from 'react';

interface HeaderProps {
  username: string;
  invitationCode: string;
  balance: string;
}

const Header: React.FC<HeaderProps> = ({ username, invitationCode, balance }) => {
  return (
    <div className="bg-gradient-to-r from-[#9B4A4E] to-[#7C4A50] text-white pt-10 pb-16 px-6">
      {/* Top Icons Row */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          {/* Avatar Container - Five Pentagon Geometric Pattern */}
          <div className="w-16 h-16 rounded-full overflow-hidden bg-white flex items-center justify-center shadow-md border border-white/10">
            <svg viewBox="0 0 100 100" className="w-[85%] h-[85%]">
              {/* Pentagon helper: points="50,5 95,38 78,92 22,92 5,38" */}
              
              {/* Top Red Pentagon */}
              <polygon 
                points="50,15 68,28 61,50 39,50 32,28" 
                fill="#EF5350" 
                transform="translate(0, -10)"
              />
              
              {/* Top Right Yellow Pentagon */}
              <polygon 
                points="50,15 68,28 61,50 39,50 32,28" 
                fill="#FFCA28" 
                transform="rotate(72, 50, 50) translate(0, -10)"
              />
              
              {/* Bottom Right Purple Pentagon */}
              <polygon 
                points="50,15 68,28 61,50 39,50 32,28" 
                fill="#AB47BC" 
                transform="rotate(144, 50, 50) translate(0, -10)"
              />
              
              {/* Bottom Left Blue Pentagon */}
              <polygon 
                points="50,15 68,28 61,50 39,50 32,28" 
                fill="#29B6F6" 
                transform="rotate(216, 50, 50) translate(0, -10)"
              />
              
              {/* Top Left Green Pentagon */}
              <polygon 
                points="50,15 68,28 61,50 39,50 32,28" 
                fill="#66BB6A" 
                transform="rotate(288, 50, 50) translate(0, -10)"
              />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold uppercase tracking-tight">{username}</h2>
              <span className="bg-[#F5B400] text-white text-[10px] px-1.5 py-0.5 rounded-sm font-bold italic">VIP 0</span>
            </div>
            <p className="text-sm opacity-90 mt-0.5 font-medium">Invitation code: {invitationCode}</p>
          </div>
        </div>
        <button className="mt-1">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" strokeWidth="2" />
            <path strokeLinecap="round" strokeWidth="2" d="M8 12h8m-8-3h8m-8 6h5" />
          </svg>
        </button>
      </div>

      {/* Account Balance and Actions */}
      <div className="flex justify-between items-center mt-8">
        <div>
          <h3 className="text-sm font-medium opacity-90 mb-1">My Account</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-xs font-semibold">USDT</span>
            <span className="text-2xl font-bold tracking-tight">{balance}</span>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col items-center gap-1">
            <button className="w-14 h-14 bg-[#F5F5F5] rounded-[20px] flex items-center justify-center shadow-sm">
               <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none">
                 <defs>
                   <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                     <stop offset="0%" stopColor="#1F6AE1" />
                     <stop offset="100%" stopColor="#0B4DB8" />
                   </linearGradient>
                 </defs>
                 <rect x="3" y="6" width="18" height="12" rx="3" fill="url(#blueGradient)" />
                 <path d="M21 10H17V14H21V10Z" fill="white" fillOpacity="0.3" />
                 <circle cx="18" cy="12" r="1.5" fill="white" />
               </svg>
            </button>
            <span className="text-xs font-medium">Deposit</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <button className="w-14 h-14 bg-[#F5F5F5] rounded-[20px] flex items-center justify-center shadow-sm">
               <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none">
                 <rect x="3" y="6" width="18" height="12" rx="3" fill="url(#blueGradient)" />
                 <rect x="5" y="9" width="4" height="3" rx="1" fill="white" fillOpacity="0.4" />
                 <rect x="5" y="14" width="8" height="1.5" rx="0.5" fill="white" fillOpacity="0.4" />
               </svg>
            </button>
            <span className="text-xs font-medium">Withdrawal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
