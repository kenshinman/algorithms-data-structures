function calculateTotalSalesWithTax(products, taxRate) {
  return products.reduce((acc, item) => {
    const totalLinePrice = item.price * item.quantity;
    const itemTax = totalLinePrice * (taxRate / 100);
    const totalLineWithTax = totalLinePrice + itemTax;
    return parseFloat(acc + totalLineWithTax);
  }, 0);
}

module.exports = calculateTotalSalesWithTax;
