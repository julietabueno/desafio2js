//Desafio 2

//Declaro la funcion dividir
const dividir = (num1, num2) => num1 / num2

//declro las variables
const valorBtc = 4951255.45
const valorEth = 284295.28
const valorDai = 239
const valorUsdc = 239.29
let resultado = ''

do {//Pido al usuario que ingrese la cantidad de $ que desea invertir y que moneda quiere comprar
    pesos = ParseFloat(prompt("Ingrese la cantidad de pesos que desea Invertir"));
    crypto = prompt("Ingrese la cryptomoneda que desea adquirir: BTC, ETH, DAI o USDC").toLowerCase();

    //Pido otro monto si no es un numero
    if (isNaN(pesos)) {
        alert("Por favor ingrese un monto válido.")
    }
    // pido que ingrese nuevamente la cryptomoneda
    if ((crypto != "btc") && (crypto != "eth") && (crypto != "dai") && (crypto != "usdc")) {
        alert("Por favor ingrese una cryptomoneda válida.")
    }
    //hago la cuenta de la moneda
    switch (crypto) {
        case "btc":
            alert(`Usted va a comprar ${dividir(pesos, valorBtc)} ${crypto}`)
            break
        case "eth":
            alert(`Usted va a comprar ${dividir(pesos, valorEth)} ${crypto}`)
            break
        case "dai":
            alert(`Usted va a comprar ${dividir(pesos, valorDai)} ${crypto}`)
            break
        case "usdc":
            alert(`Usted va a comprar ${dividir(pesos, valorUsdc)} ${crypto}`)
            break
        default:
            alert("La compra no pudo ser realizada")
    }

} while (pesos >= 0);