import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addIPC } from '../actions/ipcActions';

const IPCForm = () => {
  const [ipc, setIPC] = useState({ code: '', description: '' });
  const dispatch = useDispatch();
  const ipcList = useSelector((state) => state.ipcList);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setIPC({ ...ipc, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const duplicate = ipcList.some((existingIpc) => existingIpc.code === ipc.code);
    if (duplicate) {
      alert('This IPC code already exists.');
      return;
    }
    
    if (ipc.code && ipc.description) {
      dispatch(addIPC(ipc));
      setIPC({ code: '', description: '' });
    } else {
      alert("Both fields are required");
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input 
        className="neu-input"
        type="number" 
        name="code" 
        value={ipc.code}
        onChange={handleChange} 
        placeholder="Code" 
      />
      <textarea
        className="neu-input"
        name="description"
        rows="4"
        cols="50"
        value={ipc.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <button className="neu-button"  type="submit">Add IPC</button>
    </form>
  );
};

export default IPCForm;
