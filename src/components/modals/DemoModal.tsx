import React from 'react';

interface DemoModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

const DemoModal: React.FC<DemoModalProps> = ({ showModal, setShowModal }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-gray-900/80 backdrop-blur-sm absolute inset-0" onClick={() => setShowModal(false)} />
      <div className="relative bg-gray-800 p-8 rounded-lg max-w-lg w-full m-4">
        <h2 className="text-2xl font-bold mb-4">Book a Demo</h2>
        {/* Add your demo booking form here */}
      </div>
    </div>
  );
};

export default DemoModal; 