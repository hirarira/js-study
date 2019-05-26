const Sequelize = require('sequelize');
module.exports = function(sequelize){
  return sequelize.define('user', {
    // フィールド名
    id: {
        // フィールドの型
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: Sequelize.TEXT,
    age: Sequelize.INTEGER
  }, {
    // モデル名をそのままテーブル名として使う
    freezeTableName: true,
    timestamps: false
  });
}
