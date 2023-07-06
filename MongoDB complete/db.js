// db.js
const { MongoClient } = require('mongodb');

let dbConnection;
let uri = 'mongodb+srv://griffinstanui14:<Griffins@2005>@griffins-nodejs.ofcc78u.mongodb.net/'

module.exports = {
  connectToDb: () => {
    return MongoClient.connect(uri)//('mongodb://127.0.0.1:27017/bookstore')
      .then((client) => {
        dbConnection = client.db();
      })
      .catch((err) => {
        console.error('Error connecting to database:', err);
        throw err;
      });
  },
  getDb: () => dbConnection,
};


// const { MongoClient } = require('mongodb')

// let dbConnection

// module.exports = {
//     connectToDb:(cb) => {
//         MongoClient.connect('mongodb://localhost:27017/bookstore')
//             .then((client) => {
//                 dbConnection = client.db()
//                 return cb()
//             })
//             .catch(err => {
//                 console.log(err)
//                 return cb(err)
//             })
//     },
//     getDb: () => dbConnection
// }