const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => {
    console.log("Connection successful..");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/RelationDemo");
}

// create a schema for order
const orderSchema = new Schema({
  item: String,
  price: Number,
});

// create a schema for customer
const customerSchema = new Schema({
  name: String,
  age: Number,
  email: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

// ✅ Middleware added correctly
// customerSchema.pre("findOneAndDelete", async function () {
//   console.log("PRE middleware - before deleting customer");
// });

customerSchema.post("findOneAndDelete", async function (customer) {
  if(customer.orders.length)
  {
  let res= await   Order.deleteMany({_id:{ $in: customer.orders} });
  console.log(res);
  }
});

// create models
const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// add customer
const addCustomer = async () => {
  let newCustomer = new Customer({
    name: "Vishal Shalake",
    age: 23,
    email: "vishal@gmail.com",
  });

  let newOrder = new Order({
    item: "Pav Bhaji",
    price: 50,
  });

  // save the order first
  await newOrder.save();

  // push order id to customer
  newCustomer.orders.push(newOrder._id);

  await newCustomer.save();
  console.log("Customer and order saved successfully!");
};

// addCustomer();

// delete a customer
const custDel = async () => {
  let result = await Customer.findByIdAndDelete("68e5f1f5ffe1a95cf174490b");
  console.log("Customer deleted from database..");
  console.log(result);
};

custDel();



// const addOrder=async()=>{
//   let res= await Order.insertMany([
//         {
//             item:"pohe",
//             price:25,
//         },
//         {
//             item:"idali",
//             price:45,
//         },
//         {
//             item:"samosa",
//             price:20,
//         }
//    ] );
//    console.log(res);
// }

// addOrder();

