// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];

let totalPriceAllFriuts = 0;
// เริ่มเขียนโค้ดตรงนี้
inventory[0]["quantity"] = 200;
inventory.push({ name: "Orange", price: 20, quantity: 300 });
console.log(inventory);

for (let i = 0; i < inventory.length; i++) {
  totalPriceAllFriuts =
    totalPriceAllFriuts + inventory[i]["price"] * inventory[i]["quantity"];
}

console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${totalPriceAllFriuts} บาท`);
