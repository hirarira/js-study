"use strict"

let server = "http://localhost:5000";
let request = require('request-promise');
let path = ['/test1','/test2','/test3','/test4','/test5'];

// promiseを使う方法
function test_promise(idx){
  return new Promise((resolve, reject)=>{
    request(server+path[idx])
    .then((res)=>{
      resolve(res);
    })
    .catch((e)=>{
      reject(e);
    });
  });
}

// 単体で使う場合
request(server+path[0])
.then((res)=>{
  console.log(res);
  return test_promise(1);
})
.then((res)=>{
  console.log(res);
});


