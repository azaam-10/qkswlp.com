
import React from 'react';

const FeatureRow: React.FC = () => {
  const features = [
    { 
      label: 'Teams', 
      color: '#F9A825',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#FFA726">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c0-4.418 3.582-8 8-8s8 3.582 8 8" />
        </svg>
      )
    },
    { 
      label: 'Record', 
      color: '#4DB6AC',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#26A69A">
          <path d="M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" />
          <path d="M8 7h8M8 11h8M8 15h5" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    { 
      label: 'Wallet management', 
      color: '#E57373',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="#EF5350" />
          <path d="M7 14l3-3 4 4 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    { 
      label: 'Invite friends', 
      color: '#64B5F6',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#42A5F5">
          <path d="M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" />
          <path d="M4 8l8 5 8-5" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm py-4 flex justify-between items-center px-1">
      {features.map((item, idx) => (
        <div key={idx} className="flex-1 flex flex-col items-center gap-1 cursor-pointer active:scale-95 transition-transform">
          <div className="w-10 h-10 flex items-center justify-center">
            {item.icon}
          </div>
          <span className="text-[10px] text-center font-bold text-gray-500 leading-tight">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FeatureRow;
