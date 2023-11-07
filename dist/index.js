"use strict";
let mensaje = "hola Mundo";
mensaje = "chanchito feliz";
mensaje = "chau mundo";
console.log(mensaje);
console.log(typeof []);
let extincionDinosaurios = 76000000;
let dinosaurioFavorito = "Triceratops";
let extintos = true;
function chanchitoFeliz(config) {
    return config * config;
}
console.log(chanchitoFeliz(23));
let animales = ["chanchito", "perrito", "conejito"];
let nums = [1, 2, 3];
let checks = [];
let nums2 = [];
let animalesMayuscula = animales.map((x) => x.toUpperCase());
console.log(animalesMayuscula);
let tupla = [1, "chanchito feliz"];
const chica = "s";
const mediana = "m";
const grande = "l";
const extraGrande = "xl";
var Talla;
(function (Talla) {
    Talla["Chica"] = "s";
    Talla["Mediana"] = "m";
    Talla["Grande"] = "l";
    Talla["ExtraGrande"] = "xl";
})(Talla || (Talla = {}));
const variable1 = Talla.Grande;
console.log(variable1);
const estado = 2;
const objeto = {
    id: 1,
    nombre: "",
    talla: Talla.Mediana,
    direccion: {
        numero: 123,
        calle: "Siempre Viva",
        pais: "U.S.A.",
    },
};
objeto.nombre = "Carlitos";
console.log(objeto);
//# sourceMappingURL=index.js.map