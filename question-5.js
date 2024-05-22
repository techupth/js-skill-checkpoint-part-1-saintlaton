// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "SALE50";
// เริ่มเขียนโค้ดตรงนี้

let totalPrice = 0;
function calculateTotalPrice(products, promotionCode) {
  for (let i = 0; i < products.length; i++) {
    if (promotionCode === "SALE20") {
      totalPrice =
        totalPrice +
        (products[i]["price"] - products[i]["price"] * 0.2) *
          products[i]["quantity"];
    } else if (promotionCode === "SALE50") {
      totalPrice =
        totalPrice +
        (products[i]["price"] - products[i]["price"] * 0.5) *
          products[i]["quantity"];
    } else {
      totalPrice = totalPrice + products[i]["price"] * products[i]["quantity"];
    }
  }
  return totalPrice;
}

console.log(calculateTotalPrice(products, promotionCode));
