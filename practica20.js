'use strict'

let vehicle = {
    marca: "Hyundai",
    modelo: "jeep",
    ageFabrication: "2020",
    age: "2008",
    color: "verde",
    matricula: true,
}

function validarTaxi(vehicle) {
    let currenteYear = 2023;
    let years= currenteYear - vehicle.ageFabrication;
    
    if(years <= 10) {
         return true;

    } else {
        return false;

    }
}

let result = validarTaxi(vehicle)
alert("la prueba fue " + result);