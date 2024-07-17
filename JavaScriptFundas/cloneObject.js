const userDetails = {
    name: "John Doe",
    age: 14,
    verified: false
};

const newUser = userDetails;
console.log("newUser:",newUser);
newUser.name = "Alexander Cloe";
console.log("newUser:",newUser);
console.log("userDetails:",userDetails);
console.log(`name changed in userDetails as well, that's why JS 
provides below three methods for cloning the object.`);
userDetails.name = "John Doe";
console.log("userDetails.name = \"John Doe\";", newUser);
// Spread Method
let clone1 = { ...userDetails };
console.log("let clone1 = { ...userDetails }:\n",clone1);

// Object.assign() Method
let clone2 = Object.assign({}, userDetails);
console.log("let clone2 = Object.assign({}, userDetails):\n",clone2);

// JSON.parse() Method
let clone3 = JSON.parse(JSON.stringify(userDetails));
console.log("let clone3 = JSON.parse(JSON.stringify(userDetails)):\n",clone3);
