import { ADD_RECORD, DELETE_RECORD, EDIT_RECORD } from "../constants/actionTypes";

let nextID = 0

export function addRecord(data) {
  return {
    type: ADD_RECORD,
    payload: {
      id: ++nextID,
      data: data
    }
  }
}

export const deleteRecord = id => ({
  type: DELETE_RECORD,
  payload: id
});

export const editRecord = id => ({
  type: EDIT_RECORD,
  payload: id
})