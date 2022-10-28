function groupBy(collection, it) {
    const acumulator = {}
    collection.map(element =>{
        let prop = typeof it === "function" ? it (element) : element[it]
        acumulator[prop] = acumulator[prop] ? acumulator[prop].concat(element)  : [element]
    })
    return acumulator
  }


console.log(groupBy([6.1, 4.2, 6.3], Math.floor)) // { 6: [6.1, 6.3], 4: [4.2] }
groupBy(['one', 'two', 'three'], 'length') // { 3: ['one', 'two'], 5: ['three'] 
groupBy([{age: 23}, {age: 24}], 'age') // { 23: [{age: 23}], 24: [{age: 24}] }