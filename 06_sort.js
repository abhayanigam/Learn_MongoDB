db.inventory.find().limit(1); // Limits the number of documents in the output to 1.
db.inventory.find().limit(2); // Limits the number of documents in the output to 2.

db.inventory.find().skip(1); // Skips the 1st document.
db.inventory.find().skip(2); // Skips the 2nd document.

db.inventory.find().sort({ qty: 1 }); // sort in asc order.

db.inventory.find().sort({ qty: -1 }); // sort in desc order.

// Using Pagination using mongoDB find and limit
// 1 to 10
// no. = 8 // Number of blogs per page

db.blogs.find.skip((pageNo - 1) * no).limit(no);

// pageNo. = 1
db.blogs.find.skip(0).limit(8);

// pageNo. = 2
db.blogs.find.skip((2 - 1) * 8).limit(8);
