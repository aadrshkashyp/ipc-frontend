const initialState = [];

const ipcReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_IPC':
      return action.payload;
    case 'ADD_IPC':
      return [action.payload, ...state];
    case 'DELETE_IPC':
      return state.filter((ipc) => ipc._id !== action.payload);
    case 'UPDATE_IPC':
      return state.map(ipc => 
        ipc._id === action.payload._id ? action.payload : ipc);
    default:
      return state;
  }
};

export default ipcReducer;
