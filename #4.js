function createXmasTree(height) {
  let tree = "";
  let trunk = "";

  for (let i = 0; i < height; i++) {
    for (let s = 1; s < height - i; s++) {
      if (i === 0) trunk += "_";
      tree += "_";
    }
    for (let symbol = 0; symbol <= i; symbol++) {
      if (i === 0) trunk += "#";
      if (symbol === 0) {
        tree += "*";
      } else {
        tree += "**";
      }
    }
    for (let s = 1; s < height - i; s++) {
      if (i === 0) trunk += "_";
      tree += "_";
    }
    tree += "\n";
  }
  tree += trunk;
  tree += "\n";
  tree += trunk;
  return tree;
}

console.log(createXmasTree(5));
