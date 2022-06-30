//Desafio 2

//declaro las variables
let pesos, crypto, valorC

//creo la funcion para sacar el precio de la moneda para dividir los $
const calculo = (pesos, valorC) => pesos / valorC;

do {
    pesos = parseFloat(prompt("Ingrese la cantidad de pesos que desea Invertir"));

    //Pido otro monto si no es un numero
    if (isNaN(pesos)) {
        alert("Por favor ingrese un monto válido.")
    }

    crypto = (prompt("Ingrese la cryptomoneda que desea adquirir: BTC, ETH o USDC")).toLowerCase();

    // pido que ingrese nuevamente la cryptomoneda si no es valida
    if ((crypto != "btc") && (crypto != "eth") && (crypto != "usdc")) {
        alert("Por favor ingrese una cryptomoneda válida.")
    }
    //le doy un valor a cada crypto
    switch (crypto) {
        case "btc":
            valorC = 4951255.45
            break
        case "eth":
            valorC = 284295.28
            break
        case "usdc":
            valorC = 239
            break
        default:
            alert("La compra no pudo ser realizada")
    }

} while (pesos >= 0) {


    //Me da el mensaje de cuanto puedo comprar de la moneda elegida
    alert(`Usted esta por comprar ${calculo(pesos, valorC)} ${(crypto).toUpperCase()}`)
}
