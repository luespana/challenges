function daysToXmas(date) {
  const xMas = new Date("Dec 25, 2021 00:00:00");
  return Math.ceil((xMas - date) / (1000 * 60 * 60 * 24));
}

const date1 = new Date("Dec 25, 2021 00:00:00");
console.log(daysToXmas(date1));

// La función Math.ceil() devuelve el entero mayor o igual más próximo a un número dado
