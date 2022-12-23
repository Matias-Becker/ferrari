const comprarProductos = () => {
    let producto="";
    let precio=0;
    let cantidad=0;
    let seguirComprando=false;
    let totalCompra=0;
    let cuotas=0;

    do {
        producto= prompt("¿Quiere comprar remera, gorra o zapatillas?","Ej: gorra");
        cantidad= parseInt(prompt("¿Que cantidad quiere comprar?"));

        const cantidadValidada=validarCantidad(cantidad);

        switch(producto){
            case"remera":
                precio=1000
                break;
            case"gorra":
                precio=700
                break;
            case"zapatillas":
                precio=3000
                break;
            default:
                alert("Alguno de los datos ingresados es incorrecto");
                precio=0;
                cantidad=0;
        }
        totalCompra+= precio*cantidadValidada;
        seguirComprando=confirm("¿Quiere agregar otro producto?");
    } while (seguirComprando);

    calcularEnvio(totalCompra);
    
    cuotas= prompt("¿Quiere pagar en 1, 8 o 12 cuotas?");
    
    switch(cuotas){
        case"1":
            alert("El valor final es $"+totalCompra);
            break;
        case"8":
            totalCompra=(totalCompra/8)+100;
            alert("El valor final es 8 cuotas de $"+totalCompra);
            break;
        case"12":
            totalCompra=(totalCompra/12)+150;
            alert("El valor final es 12 cuotas de $"+totalCompra);
            break;
        default:
            alert("Alguno de los datos ingresados es incorrecto");
    }
};

const validarCantidad=(cantidad)=>{
    while(Number.isNaN(cantidad) || cantidad===0){
        if(cantidad!==0){
            alert("Debe agregar un numero");
        }else{
            alert("Debe agregar un número distinto de cero");
        }
        cantidad=parseInt(prompt("¿Que cantidad quiere comprar?"));
    }
    return cantidad;
};

const calcularEnvio=(totalCompra)=>{
    let tieneEnvio=confirm("¿Quiere envío a domocilio?");

    if(tieneEnvio && totalCompra>=2000){
        alert("Tenes envio gratis. El valor de tu compra es $"+totalCompra);
    } else if(tieneEnvio && totalCompra<2000 && totalCompra!==0){
        totalCompra=totalCompra+500;
        alert("El envio cuesta $500. El valor total de tu compra es $"+totalCompra);
    } else{
        alert("El valor de la compra es $"+totalCompra);
    }
    return totalCompra;
};

comprarProductos();