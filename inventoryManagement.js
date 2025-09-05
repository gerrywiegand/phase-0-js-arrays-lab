// Write your code here
let products = ['laptop', 'phone', 'headphones', 'monitor']

function logFirstProduct(first) {
  first= products[0]
 console.log(first)
}

function addProduct(name){
  
  products.push (name)
}
 addProduct("bean")
 console.log (products)

 function updateProductName (number, id){
  
  products[number]= id
 }
updateProductName(1, 'smartphone')
console.log(products)

function removeLastProduct() {
products.pop()
}
removeLastProduct()
console.log(products)


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
