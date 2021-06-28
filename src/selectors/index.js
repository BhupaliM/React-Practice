export const getRecordByID = (store, id) => ({ ...store.userData.recordByIDs[id], id })

export const getRecordList = store => store.userData.allIDs.map(id => getRecordByID(store, id))

export const getCurrentFields = store => store.userData.currentFields