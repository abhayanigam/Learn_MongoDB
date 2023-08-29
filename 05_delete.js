db.inventory.deleteMany({});

db.inventory.deleteMany({ status: "A" });

db.inventory.deleteOne({ status: "D" });
