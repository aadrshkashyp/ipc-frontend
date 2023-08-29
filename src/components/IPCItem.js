import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteIPC, updateIPC } from '../actions/ipcActions';
import IPCModalEdit from './IPCModalEdit';

const IPCItem = ({ ipc }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteIPC(ipc._id));
  };

  const handleEdit = () => {
    setModalVisible(true);
  };

  const handleUpdate = (code, newDescription) => {
    dispatch(updateIPC(ipc._id, newDescription));
    setModalVisible(false);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="neu-box" >
      <h2>{ipc.code}</h2>
      <p>{ipc.description}</p>
      <button className="neu-button" onClick={handleDelete}>Delete</button>
      <button className="neu-button" onClick={handleEdit}>Edit</button>
      <IPCModalEdit
        isVisible={modalVisible}
        ipcCode={ipc.code}
        ipcDescription={ipc.description}
        onUpdate={handleUpdate}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default IPCItem;
