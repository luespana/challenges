function manufacture(gifts, materials) {
  function hasAllLetters(element, materials) {
    const arrayElement = element.split("");
    return arrayElement.every((letter) => materials.includes(letter));
  }

  const realGifts = [];
  for (let i = 0; i < gifts.length; i++) {
    const element = gifts[i];
    if (hasAllLetters(element, materials)) {
      realGifts.push(element);
    }
  }
  return realGifts;
}
