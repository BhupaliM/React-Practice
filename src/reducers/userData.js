import { ADD_RECORD, DELETE_RECORD, EDIT_RECORD } from '../constants/actionTypes.js';
const initialState = {
  allIDs: [],
  recordByIDs: {},
  currentFields: {}
}

const userData = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECORD: {
      const { id, data } = action.payload;
      return {
        ...state,
        allIDs: [...state.allIDs, id],
        recordByIDs: {
          ...state.recordByIDs,
          [id]: data,
        },
        currentFields: {}
      }
    }

    case DELETE_RECORD: {
      return {
        ...state,
        allIDs: state.allIDs.filter((index) => index !== action.payload)
      }
    }

    case EDIT_RECORD: {
      return {
        ...state,
        allIDs: state.allIDs.filter((index) => index !== action.payload),
        currentFields: state.recordByIDs[action.payload],
      }
    }

    default:
      return state;
  }
};

export default userData;