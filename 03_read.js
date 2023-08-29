db.inventory.find({}); // Fetch all documents

db.inventory.find({ qty: 90 });

db.inventory.find({ tags: { $in: ["red", "D"] } });

//AND
db.inventory.find({ status: "A", qty: { $lt: 30 } });

//OR
db.inventory.find({
  status: "A",
  $or: [{ qty: { $lt: 30 } }, { item: /^p/ }],
});

db.inventory.findOne({ status: "A", qty: { $lt: 30 } });
