let mensaje: string = "hola Mundo";

mensaje = "chanchito feliz";

mensaje = "chau mundo";

console.log(mensaje);

console.log(typeof []);

let extincionDinosaurios = 76_000_000;
let dinosaurioFavorito = "Triceratops";
let extintos = true;

function chanchitoFeliz(config: number) {
  return config * config;
}
console.log(chanchitoFeliz(23));

let animales: string[] = ["chanchito", "perrito", "conejito"];
let nums: number[] = [1, 2, 3];
let checks: boolean[] = [];
let nums2: Array<number> = [];

let animalesMayuscula = animales.map((x) => x.toUpperCase());
console.log(animalesMayuscula);

let tupla: [number, string] = [1, "chanchito feliz"];

const chica = "s";
const mediana = "m";
const grande = "l";
const extraGrande = "xl";

// PascalCase
enum Talla {
  Chica = "s",
  Mediana = "m",
  Grande = "l",
  ExtraGrande = "xl",
}

const variable1 = Talla.Grande;

console.log(variable1);

const enum LoadingStates {
  Idle,
  Loading,
  Success,
  Error,
}

const estado = LoadingStates.Success;

type Direccion = {
  numero: number;
  calle: string;
  pais: string;
};

type Persona = {
  readonly id: number;
  nombre: string;
  talla: Talla;
  direccion: Direccion;
};

const objeto: Persona = {
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
