const mongoose = require("mongoose");
const { Schema } = mongoose;

main().then(() => {
    console.log("connection made successfully");
}).catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const orderSchema = new Schema({
    item: String,
    price: Number,
})

const customerSchema = new Schema({
    name: String,
    order: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order",
        }
    ]
})

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// const addCustomers = async () => {
//     let cust1 = new Customer({
//         name: 'Rahul kumar',
//     });

//     let order1 = await Order.findOne({ item: "Chips" });
//     let order2 = await Order.findOne({ item: "Samosa" });

//     cust1.order.push(order1);
//     cust1.order.push(order2);

//     let result = await cust1.save();
//     console.log(result);
// }
// addCustomers();

const findCustomer = async () => {
    // let result = await Customer.find({});
    // console.log(result);

    let result = await Customer.find({}).populate("order");
    console.log(result[0]);
}
// findCustomer();
//output terminal me to full object jayega mongoose me but hm mongodb db dekhenge to waha sirf items ki object id jayegi naki whole object

//populate in mongoose : isse hm jo database me object id data stored hota h uske through hm whole data ko fetch kr skte h


// const addOrders = async () => {
//     let res = await Order.insertMany([
//         { item: "Samosa", price: 15 },
//         { item: "Chips", price: 10 },
//         { item: "ColdDrink", price: 40 },
//         { item: "DairyMilk", price: 100 }
//     ])
//     console.log(res);
// }

// addOrders();

//adding customer in database customer in database 
const addCust = async () => {
    let newCust = new Customer({
        name: "karan Arjun"
    })

    let newOrder = new Order({
        item: "Pizza",
        price: 250
    })

    newCust.order.push(newOrder);

    await newCust.save();
    await newOrder.save();
    console.log("added new customer");
}

addCust();