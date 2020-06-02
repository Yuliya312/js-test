const initArr = [
  {fullName : {surname : 'xxx', firstName : 'yyy', middleName: 'zzz'}}, 
  {fullName : {surname : 'XXX', firstName : 'YYY', middleName: 'ZZZ'}}
]// - масив об'єктів

const rull = {fullName : {surname : true, firstName : true, middleName: false}}; //- правило перетворень
const local = {"fullName.surname" : "Прізвище", "fullName.middleName" : "По-батькові"}; //- локалізації

// [{name : "Прізвище", value1 : "xxx", value2 : "XXX"}, {name : "firstName", value1 : "yyy", value2 : "YYY"}] //- результат

function localization(arr, rull, local) {
  let rullKeys = null;
  let rullEntries = null;
  let rullInner = null;
  let localRull = null;
  let noLocalRull = null;
  let localItem = {};
  let noLocal = {};
  for (rullKey in rull) {
    if (Object.getPrototypeOf(rull[rullKey]) === Object.prototype) {
      rullInner = rull[rullKey];
      rullKeys = Object.keys(rull[rullKey]);
      localKeys = Object.keys(local);
    }
  }
  let rullIsTrue = rullKeys.filter((key, i) => {
    return rullInner[key] === true;
  })

  let res = [];
  arr.forEach((item, i) => {
    
    let itemKey = Object.keys(item)[0];
    console.log(rullIsTrue);

    rullIsTrue.forEach(rullKey => {
      for (localKey in local) {
        if (itemKey + "." + rullKey === localKey) {
          localItem.name = local[localKey];
          localRull = rullKey;
        } else {
          noLocal.name = rullKey;
          noLocalRull = rullKey;
        }
      }
    })

    localItem[`value${i + 1}`] = item[itemKey][localRull];
    noLocal[`value${i + 1}`] = item[itemKey][noLocalRull];
  })
  res.push(localItem);
  res.push(noLocal);

  console.log(res);
  return res;
}

localization(initArr, rull, local);
