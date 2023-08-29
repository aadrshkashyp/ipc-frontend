import axios from 'axios';

export const fetchIPC = () => async (dispatch) => {
  const response = await axios.get('http://localhost:5960/api/ipc');
  dispatch({ type: 'FETCH_IPC', payload: response.data });
};

export const addIPC = (ipcData) => async (dispatch) => {
  const response = await axios.post('http://localhost:5960/api/ipc', ipcData);
  dispatch({ type: 'ADD_IPC', payload: response.data });
};

export const deleteIPC = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:5960/api/ipc/${id}`);
  dispatch({ type: 'DELETE_IPC', payload: id });
};

export const updateIPC = (id, newDescription) => async dispatch => {
  try {
    const res = await axios.put(`http://localhost:5960/api/ipc/${id}`, { description: newDescription });
    dispatch({
      type: 'UPDATE_IPC',
      payload: res.data
    });
  } catch (error) {
    console.error(error);
    // Handle error appropriately
  }
};
