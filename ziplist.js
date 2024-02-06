function main(arr1, arr2){
  const result = [];
  let length = arr1.length + arr2.length
    for(let i=0;i<length.length; i++){
      result.push(arr1[i]);
      result.push(arr2[i]);
    }
  console.log("Hello!")
  console.log(length)
  return result;
}

console.log(main(['a', 'b', 'c'], [1, 2, 3]));
