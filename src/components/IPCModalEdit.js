import React, { useState } from 'react';

const IPCModalEdit = ({ isVisible, ipcCode, ipcDescription, onUpdate, onClose }) => {
  const [newDescription, setNewDescription] = useState(ipcDescription);

  const handleUpdate = () => {
    onUpdate(ipcCode, newDescription);
    onClose();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Edit IPC Code: {ipcCode}</h2>
        <input 
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <button onClick={handleUpdate}>Update</button>
      </div>
    </div>
  );
};

export default IPCModalEdit;
