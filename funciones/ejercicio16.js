//Escriba una función que se llame facturacion() La función tiene que recibir como parámetro el monto de un producto ,
//  y el medio de pago : C (tarjeta de crédito), E
//(efectivo) y D (tarjeta de débito). Si el monto del producto es menor a $200 no se aplicará ningún descuento. 
// Si el monto a pagar es entre $200 y $400 se aplicará un descuento del 30% si el medio de pago es efectivo, 
// 20% si se realiza con débito y 10% con tarjeta de crédito. Para montos mayores a $400, el descuento es del 
// 40% sin importar el medio de pago La función deberá retornar el monto final a pagar.


function facturacion( monto , metodoDePago) {


    const descuentoEfectivo = 0.30;
    const descuentoDebito = 0.20;
    const descuentoCredito = 0.10;
    const descuento = 0.40

     const e = 'efectivo';
    const d = 'debito';
    const c = 'credito';

    if(monto >= 200 && monto <= 400){
        if(metodoDePago === e){
        

           total = (monto * (1 - descuentoEfectivo)) 
        }else if (metodoDePago === d){

            total =   (monto * (1- descuentoDebito))
        }else if (metodoDePago == c){

            total =  (monto * ( 1 - descuentoCredito))
        }

        
    }else if (monto > 400){

        (monto * (1- descuento))
    }

    return total

    
}

console.log(facturacion( 300 , 'efectivo'))