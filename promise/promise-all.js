"use stuct";

// promise
let server = "http://localhost:5000";
let request = require('request-promise');
let pathes = ['/test1','/test2','/test3','/test4','/test5'];
let promise_list = [];

for(let i=0; i<pathes.length; i++){
  promise_list.push(request(server+pathes[i]));
}

Promise.all(promise_list)
.then((res)=>{
  console.log(res);
})
.catch((e)=>{
  console.log(e);
});
