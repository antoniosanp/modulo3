let notas = [3,5,3,5,6];

function masUno(x){
    
    return x + 1;
}


let nuevasNotas = notas.map( x => masUno(x))

console.log(notas)
console.log(nuevasNotas)