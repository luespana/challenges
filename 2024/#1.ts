function findFirstRepeated(gifts: number[]): number {
  const seenIds: number[] = [];
  for (let i = 0; i < gifts.length; i++) {
    const element = gifts[i];
    if (seenIds.includes(element)) {
      // devuelo id repetido
      return element;
    } else {
      // agregarlo a la lista
      seenIds.push(element);
    }
  }
  return -1;
}
