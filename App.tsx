
import React, { useState } from 'react';
import Header from './components/Header';
import FeatureRow from './components/FeatureRow';
import MenuList from './components/MenuList';
import BottomNav from './components/BottomNav';
import ModalDialog from './components/ModalDialog';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const username = "Mohamed8468";

  return (
    <div className="flex justify-center min-h-screen bg-[#F7F8FA] relative">
      {/* Main Content with conditional blur - reduced blur from blur-sm to blur-[2px] */}
      <div className={`w-full max-w-[430px] min-w-[360px] bg-[#F7F8FA] relative pb-24 transition-all duration-300 ${isModalOpen ? 'blur-[2px] pointer-events-none' : ''}`}>
        {/* Header Section including Account Details */}
        <Header 
          username={username} 
          invitationCode="804461" 
          balance="7278.3027"
        />

        {/* Action Shortcuts Section (Teams, Record, etc) */}
        <div className="px-4 -mt-4 relative z-10">
          <FeatureRow />
        </div>

        {/* Settings Menu List */}
        <div className="px-4 mt-4">
          <MenuList />
        </div>

        {/* Fixed Bottom Navigation */}
        <BottomNav activeTab="Mine" />
      </div>

      {/* Centered Modal Dialog */}
      {isModalOpen && (
        <ModalDialog 
          username={username} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </div>
  );
};

export default App;
