// Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.

function contarOvejas(ovejas) {
    const ovejasFiltradas = []
    ovejas.map((element)=> {
        // = const numero = 1 entonces const numero vale 1
        //== o === comparar ej: 1 === 1: verdadero : 1 === 3> falso
        /*
        'letra'.includes('l')
        true
        */
        if (element.color === "rojo" && element.name.toLowerCase().includes('n') && element.name.toLowerCase().includes('a')) {
            ovejasFiltradas.push(element)
        }
    })
    return ovejasFiltradas
}

const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
]

console.log(contarOvejas(ovejas))