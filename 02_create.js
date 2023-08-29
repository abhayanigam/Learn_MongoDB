db.inventory.insertOne({
  item: "canvas",
  qty: 100,
  tags: ["cotton"],
  size: { h: 28, w: 35.5, uom: "cm" },
});

db.inventory.insertMany([
  {
    item: "canvas2",
    qty: 500,
    tags: ["cotton"],
    size: { h: 28, w: 3.5, uom: "cm" },
  },
  {
    item: "canvas3",
    qty: 10,
    tags: ["silk"],
    size: { h: 20, w: 35.5, uom: "cm" },
  },
  {
    item: "canvas4",
    qty: 200,
    tags: ["khadi"],
    size: { h: 280, w: 35.5, uom: "cm" },
  },
]);

db.inventory.insertMany([
  { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
  {
    item: "notebook",
    qty: 50,
    size: { h: 8.5, w: 11, uom: "in" },
    status: "A",
  },
  { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
  {
    item: "planner",
    qty: 75,
    size: { h: 22.85, w: 30, uom: "cm" },
    status: "D",
  },
  {
    item: "postcard",
    qty: 45,
    size: { h: 10, w: 15.25, uom: "cm" },
    status: "A",
  },
]);
