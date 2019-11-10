'use strict';
const index = require('./index.js');
let input = {
  "input": 20
}
index.test01(input)
.then((res)=>{
  console.log(res);
  return index.test02(input);
})
.then((res)=>{
  console.log(res);
});
