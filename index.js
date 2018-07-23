var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
    return Object.assign({},object, { [key] : value});
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
<<<<<<< HEAD
    var newObj = Object.assign({},object);
    delete newObj[key];
    return newObj;
=======
  var object = object[key];
  var newObj = Object.assign({},object);
  newObj;
  delete newObj[key];
>>>>>>> 63d8a5b9f2cd9e983acec33c25abba07f1ed5016
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
