
import React from 'react';

const MenuList: React.FC = () => {
  const menuItems = [
    { 
      label: 'Profile', 
      icon: <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /> 
    },
    { 
      label: 'Deposit records', 
      icon: <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /> 
    },
    { 
      label: 'Withdrawal records', 
      icon: <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /> 
    },
    { 
      label: 'Setting', 
      icon: <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /> 
    }
  ];

  return (
    <div className="bg-white rounded-[16px] shadow-sm overflow-hidden">
      {menuItems.map((item, idx) => (
        <div key={idx} className={`flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-gray-50 active:bg-gray-100 transition-colors ${idx !== menuItems.length - 1 ? 'border-b border-gray-100' : ''}`}>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 text-gray-400">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  {item.icon}
                </g>
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700">{item.label}</span>
          </div>
          <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
