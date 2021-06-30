import { ADD_RECORD, DELETE_RECORD, EDIT_RECORD } from '../constants/actionTypes.js';
const initialState = {
  recordByIDs: [],
  currentFields: {}
}

const userData = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECORD: {
      const { id, data } = action.payload;
      return {
        ...state,
        recordByIDs: [
          ...state.recordByIDs,
          {
            ...data,
            id: id
          }
        ],
        currentFields: {}
      }
    }

    case DELETE_RECORD: {
      return {
        ...state,
        recordByIDs: state.recordByIDs.filter((record) => record.id !== action.payload)
      }
    }

    case EDIT_RECORD: {
      return {
        ...state,
        currentFields: state.recordByIDs.filter((record) => record.id === action.payload)[0],
        recordByIDs: state.recordByIDs.filter((record) => record.id !== action.payload)
      }
    }

    default:
      return state;
  }
};

export default userData;