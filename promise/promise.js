"use stuct";

// promise
let server = "http://localhost:5000";
let request = require('request-promise');
let pathes = ['/test1','/test2','/test3','/test4','/test5'];
let result = [];

request(server+pathes[0])
.then((res)=>{
  result.push(res);
  return request(server+pathes[1]);
})
.then((res)=>{
  result.push(res);
  return request(server+pathes[2]);
})
.then((res)=>{
  result.push(res);
  return request(server+pathes[3]);
})
.then((res)=>{
  result.push(res);
  return request(server+pathes[4]);
})
.then((res)=>{
  result.push(res);
  console.log(result);
})
.catch((e)=>{
  console.log(e);
});
