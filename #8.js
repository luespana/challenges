function maxProfit(prices) {
  const half = Math.ceil(prices.length / 2);
  //   console.log(half);
  const leftHalf = prices.splice(0, half);
  const rightHalf = prices.splice(-leftHalf);
  //   console.log(leftHalf);
  //   console.log(rightHalf);

  const buyPrice = Math.min(...leftHalf);
  const sellPrice = Math.max(...rightHalf);

  const profit = sellPrice - buyPrice;
  if (profit <= 0) return -1;
  return profit;
}

const pricesBtc = [1, 1, 1, 1];
console.log(maxProfit(pricesBtc));
