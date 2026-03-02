export function Sum(x,y){
    return (x + y)
}

export function Subtract(x,y){
    return (x - y)
}

export function isEven(number){
    return number % 2 === 0
}

export function Divide(x,y) {
    if(y === 0) {
        throw new Error("Não pode ser 0.");
        
    }
    return x / y
}