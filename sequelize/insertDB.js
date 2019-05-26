"use strict"
const Sequelize = require('sequelize');
const User = require('./model/user.js');
const db_name = 'test';
const db_user = process.env.DB_USER_NAME;
const db_pass = process.env.DB_PASS;
if(db_user == null || db_pass == null){
  console.log("Pleace set ENV DB_USER_NAME or DB_PASS");
  return;
}
const sequelize = new Sequelize(db_name, db_user, db_pass, {
  host: 'localhost',
  dialect: 'mysql'
});
let user = User(sequelize);
// 接続確認用
sequelize.authenticate()
.then(()=>{
  console.log('Success test connection');
  // 挿入するデータ
  let inputUser = {
    name: 'Test',
    age: 22
  };
  return user.create(inputUser);
})
.then((res)=>{
  // 複数ユーザー挿入
  let inputUsers = [{
    name: 'Yamada',
    age: 10
  },{
    name: 'Saitama',
    age: 32
  }];
  return user.bulkCreate(inputUsers);
})
.then((res)=>{
  sequelize.close();
})
.catch((error)=>{
  console.log('Failure test connection', error);
});
