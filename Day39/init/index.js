const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../modules/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  // 1. Clear out all old, bad data
  await Listing.deleteMany({});

  // 2. Add an owner property to each listing (replace with your actual owner ID if needed)
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: '66e1e8122320b9e8427f4d4a' // A placeholder owner ID
  }));
  
  // 3. Insert the fresh, correctly structured data
  await Listing.insertMany(initData.data);
  console.log("Data was initialized successfully!");
};

initDB().then(() => {
  mongoose.connection.close(); // Close the connection after the script is done
});