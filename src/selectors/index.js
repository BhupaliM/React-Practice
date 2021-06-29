export function getRecordList(store) {
  var arr = []
  for (var each_record in store.userData.recordByIDs) {
    for (var id in store.userData.recordByIDs[each_record]) {
      arr.push({ ...store.userData.recordByIDs[each_record][id], id })
    }
  }
  return arr
}
