const _ = require('lodash');

const items =[1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);





















// const {readFile, writeFile} =require('fs')

// readFile('./content/first.txt','utf8', (err,result) => {
//   if (err) {
//     console.log(err)
//     return
//   } 
//   console.log(result);
  
// })

