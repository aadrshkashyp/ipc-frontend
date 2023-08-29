import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchIPC } from '../actions/ipcActions';
import IPCItem from './IPCItem';

const IPCList = () => {
  const dispatch = useDispatch();
  const ipcList = useSelector(state => state.ipcList);

  useEffect(() => {
    dispatch(fetchIPC());
  }, [dispatch]);

  return (
    <div className="neu-box">
      {ipcList.map((ipc) => (
        <IPCItem key={ipc._id} ipc={ipc} />
      ))}
    </div>
  );
};

export default IPCList;
