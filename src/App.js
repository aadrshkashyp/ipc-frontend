import React from 'react';
import IPCList from './components/IPCList';
import IPCForm from './components/IPCForm';
import IPCSearch from './components/IPCSearch';

function App() {
  return (
    <div className="App">
      <h1>Indian IPC Code Manager</h1>
      <IPCSearch />
      <IPCForm />
      <IPCList />
    </div>
  );
}

export default App;
