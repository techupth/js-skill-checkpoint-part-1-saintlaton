// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];

//วนloopเช็ค
//ตัวที่มาวนลูปต้องมาแทนที่0ก่อน
//ลูปถัดไปค่านั้นต้องมาเช็คว่าค่าน้อยกว่าค่าก่อนหน้ารึเปล่า ถ้าใช่ก็ assignค่าเข้าไปใหม่่

// เริ่มเขียนโค้ดตรงนี้
let minQuantityFruits = inventory[0]["quantity"];
for (let i = 0; i < inventory.length; i++) {
  if (inventory[i]["quantity"] < minQuantityFruits) {
    minQuantityFruits = inventory[i]["quantity"];
    console.log(
      `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${inventory[i]["name"]} ${minQuantityFruits}`
    );
  }
  // } else if (inventory[i]["quantity"] < minQuantityFruits) {
  //   minQuantityFruits = minQuantityFruits;
  // }
}

// console.log(minQuantityFruits);
// console.log(inventory.length)
