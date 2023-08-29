import React from 'react';

const IPCModal = ({ isVisible, ipcCode, ipcDescription, onClose }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>IPC Code: {ipcCode}</h2>
        <p>Description: {ipcDescription}</p>
      </div>
    </div>
  );
};

export default IPCModal;
