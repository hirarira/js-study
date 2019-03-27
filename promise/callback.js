"use stuct";

// callback
let server = "http://localhost:5000";
let request = require('request');
let pathes = ['/test1','/test2','/test3','/test4','/test5'];
let result = [];
request.get(server+pathes[0],(err, response, body)=>{
  result.push(body);
  request.get(server+pathes[1],(err, response, body)=>{
    result.push(body);
    request.get(server+pathes[2],(err, response, body)=>{
      result.push(body);
      request.get(server+pathes[3],(err, response, body)=>{
        result.push(body);
        request.get(server+pathes[4],(err, response, body)=>{
          result.push(body);
          console.log(result);
        });
      });
    });
  });
});
