const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'instagram',
    password: 'vijay@777'
});  

//to insert data in table using placeholder 
// let q = "insert into `user` (id, username, email, password) values ?";
// let users = [
//     ["124b","Ajay","Ajay@124","Ajay@124"],
//     ["124c","Ramesh","Ramesh@123","Ramesh@123"]
// ];

// // ✅ Important: wrap `users` inside another array
// connection.query(q, [users], (err, result) => {
//     if (err) {
//         console.error("Query error:", err);
//         return;
//     }
//     console.log("Inserted rows:", result.affectedRows);
// });

//to generate fake data using faker 
let fakeData = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password()
  ];
};

let q = "INSERT INTO user (id, username, email, password) VALUES ?";
let data = [];

for (let i = 0; i < 100; i++) {
  data.push(fakeData());
}

connection.query(q, [data], (err, result) => {
  if (err) {
    console.error("Query error:", err);
    return;
  }
  console.log("Inserted rows:", result.affectedRows);
  connection.end();  // <-- end only after query finishes
});


