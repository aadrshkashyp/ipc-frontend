import React, { useState } from 'react';
import IPCModal from './IPCModal';
import { useSelector } from 'react-redux';

const IPCSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [foundIPC, setFoundIPC] = useState(null);
  
  const ipcList = useSelector(state => state.ipcList);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    const ipc = ipcList.find(item => item.code === searchTerm);

    if (ipc) {
      setFoundIPC(ipc);
      setModalVisible(true);
    } else {
      alert("IPC Code not found.");
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div className='inline-search'>
      <input 
        className="neu-input"
        type="text" 
        value={searchTerm} 
        onChange={handleChange} 
        placeholder="Search IPC Code..." 
      />
      <button className="neu-button" onClick={handleSearch}>Search</button>
      <IPCModal
        isVisible={modalVisible}
        ipcCode={foundIPC ? foundIPC.code : ''}
        ipcDescription={foundIPC ? foundIPC.description : ''}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default IPCSearch;
