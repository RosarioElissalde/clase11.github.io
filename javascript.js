let helado = 300
let topping = "Kinder"
let precio
let precioFinal

    
if (topping == "Oreo") { 
        precio=10;
        precioFinal= precio+helado;
        console.log ("El helado cuesta $" + precioFinal)}

        else if (topping == "KitKat") { 
    precio=15;
    precioFinal= precio+helado;
    console.log ("El helado cuesta $" + precioFinal)}

    else if (topping == "Kinder") { 
    precio=25;
    precioFinal= precio+helado;
    console.log ("El helado cuesta $" + precioFinal)}

    else { console.log ("No tenemos este topping")
}

let expr= "Pescado"
switch (expr) {
    case "Carne": console.log ("Bebida recomendada: Vino Tinto");
break;
case "Pescado": console.log ("Bebida recomendada: Vino blanco");
break;
case "Verdura": console.log ("Bebida recomendada: Agua");
break;
default: console.log ("Elija carne, pescado o verdura")
}

let platos = ["Carne", "Pescado", "Verdura"];
console.log ("Usted encargó " + platos[1]);

platos.push("Pasta");

for (let i=0; i<platos.length; i++){
    console.log (platos[i]);
}



let platos2 = ["Carne", "Pescado", "Verdura"];
console.log ("Usted encargó " + platos[1]);

let elementoEliminado = platos2.pop();
console.log ("Elemento eliminado: " + elementoEliminado);

for (let i=0; i<platos2.length; i++){
    console.log (platos2[i]);
}


let numero = 0;
while (numero < 11) {
    console.log ("El " + numero + " es mas chico que 11");
    numero++
}