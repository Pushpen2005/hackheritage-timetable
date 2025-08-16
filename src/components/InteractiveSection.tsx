
import { useState } from 'react';

const InteractiveSection: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");

  const handleAnimatedClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setToast("Action completed!");
      setTimeout(() => setToast(""), 2000);
    }, 1500);
  };

  return (
    <div className="space-y-4">
      {/* Animated Button */}
      <button
        className={`px-4 py-2 bg-blue-500 text-white rounded transition-transform duration-300 hover:scale-105 flex items-center gap-2`}
        onClick={handleAnimatedClick}
        disabled={loading}
      >
        {loading ? (
          <span className="animate-spin h-5 w-5 border-2 border-white border-t-blue-400 rounded-full inline-block"></span>
        ) : (
          <span>Animated Action</span>
        )}
      </button>

      {/* Modal Dialog */}
      <button
        className="px-4 py-2 bg-green-500 text-white rounded"
        onClick={() => setShowModal(true)}
      >
        Show Modal
      </button>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-lg font-bold mb-2">Modal Title</h2>
            <p>This is a modal dialog. Click outside or below to close.</p>
            <button
              className="mt-4 px-4 py-2 bg-gray-300 rounded"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Toggle Info Section */}
      <button
        className="px-4 py-2 bg-purple-500 text-white rounded"
        onClick={() => setVisible(!visible)}
      >
        {visible ? 'Hide Info' : 'Show Info'}
      </button>
      {visible && (
        <div className="mt-4 p-4 bg-gray-100 rounded shadow">
          <h2 className="text-lg font-bold mb-2">Interactive Info</h2>
          <p>This section can be shown or hidden by clicking the button above.</p>
        </div>
      )}

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded shadow-lg animate-fade-in">
          {toast}
        </div>
      )}
    </div>
  );
};

export default InteractiveSection;
