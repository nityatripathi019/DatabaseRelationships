const mongoose = require("mongoose");
const { Schema } = mongoose;

main().then(() => {
    console.log("database connection made successfully");
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relation');
}
// One to few /Approach first
const userSchema = new Schema({
    username: String,
    addresses: [
        {
            _id: false,
            location: String,
            city: String,
        }
    ]
})

const User = mongoose.model("User", userSchema);

const addUsers = async () => {
    let user1 = new User({
        username: "Rohit Sharma",
        addresses: [
            {

                location: "2218 Baker Street",
                city: "London"
            }
        ]
    })

    user1.addresses.push({ location: "P32 WallStreet", city: "London" });
    await user1.save().then((res) => console.log(res)).catch((err) => console.log(err));
}

addUsers();

