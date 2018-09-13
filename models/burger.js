const orm = require("./config/orm.js");

// Find all the burgers unserved.
orm.selectAll("burger_name", "burger_served");

// Find a burger in the burgerHistory table by an burger_served false.
orm.insertOne("burgerHistory", "burger_name", false);

//  update burgerHistory table
orm.updateOne("buyer_name", "buyer_id", "buyers", "pets");
