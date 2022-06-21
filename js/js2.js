// Declara array vacío:
const paises = [];
// Clase que crea nuevo país:
class creaPais {
    constructor(id,pais,bandera,emoji,permiso,estadiaSimple,costoSimple,estadiaMultiple,costoMuliple,costoResidencia) {
        this.id = id;
        this.pais = pais;
        this.bandera = bandera;
        this.emoji = emoji;
        this.permiso = permiso;
        this.estadiaSimple = estadiaSimple;
        this.costoSimple = costoSimple;
        this.estadiaMultiple = estadiaMultiple;
        this.costoMultiple = costoMuliple;
        this.costoResidencia = costoResidencia;
    }
}
// Crea nuevas clases con datos de cada país:
let argentina = new creaPais(1,"Argentina","argentina.svg","🇦🇷","no requerirás",90,0,90,0,250);
let bolivia = new creaPais(2,"Bolivia","bolivia.svg","🇧🇴","no requerirás",90,0,90,0,149);
let brasil = new creaPais(3,"Brasil","brasil.svg","🇧🇷","no requerirás",90,0,90,0,100);
let colombia = new creaPais(4,"Colombia","colombia.svg","🇨🇴","no requerirás",90,0,90,0,282);
let ecuador = new creaPais(5,"Ecuador","ecuador.svg","🇪🇨","no requerirás",90,0,90,0,450);
let guyana = new creaPais(6,"Guyana","guyana.svg","🇬🇾","no requerirás",90,0,90,0,140);
let paraguay = new creaPais(7,"Paraguay","paraguay.svg","🇵🇾","no requerirás",90,0,90,0,288);
let peru = new creaPais(8,"Perú","peru.svg","🇵🇪", "no requerirás",90,0,90,0,80);
let surinam = new creaPais(9,"Surinam","surinam.svg","🇸🇷","requerirás",90,40,90,60,210);
let ttobago = new creaPais(10,"Trinidad y Tobago","trinidad-tobago.svg","🇹🇹","no requerirás",90,0,90,0,160);
let uruguay = new creaPais(11,"Uruguay","uruguay.svg","🇺🇾","no requerirás",90,0,90,0,65);
let venezuela = new creaPais(12,"Venezuela","venezuela.svg","🇻🇪","requerirás",90,50,"N/A","N/A",60);
// Agrega los países al array:
paises.push(argentina,bolivia,brasil,colombia,ecuador,guyana,paraguay,peru,surinam,ttobago,uruguay,venezuela);
// Función que ejecuta el desafío:
function entrada() {
    // Solicita ingresar número asociado a la nacionalidad del usuario:
    let pais = prompt("Ingresa el número asociado a tu nacionalidad:\n[1] ARGENTINA\n[2] BOLIVIA\n[3] BRASIL\n[4] COLOMBIA\n[5] ECUADOR\n[6] GUYANA\n[7] PARAGUAY\n[8] PERÚ\n[9] SURINAM\n[10] TRINIDAD Y TOBAGO\n[11]URUGUAY\n[12] VENEZUELA");
    // Verifica que el prompto no este vacío, sea un número, y que el número no sea menor a 1 o mayor a 12:
    while (pais === "" || isNaN(pais) || pais == 0 || pais > 12) {
        alert("¡Debes ingresar un número! (del 1 al 12)");
        pais = prompt("Ingresa el número asociado a tu nacionalidad:\n[1] ARGENTINA\n[2] BOLIVIA\n[3] BRASIL\n[4] COLOMBIA\n[5] ECUADOR\n[6] GUYANA\n[7] PARAGUAY\n[8] PERÚ\n[9] SURINAM\n[10] TRINIDAD Y TOBAGO\n[11]URUGUAY\n[12] VENEZUELA");
    }
    // El número asociado a cada nacionalidad corresponde a la propiedad id en cada objeto.
    // Se define una constante que busque el objeto según el Id
    const buscarId = paises.find(elpais => elpais.id == pais);
    // Si el país es Surinam - id 9 - (casos de excepción) muestra un texto específico
    if(pais == 9)
    {
        alert("Si deseas viajar a Chile con pasaporte de " + buscarId.pais + " " + buscarId.emoji + " " + buscarId.permiso.toUpperCase() + " de autorización previa o visa para ingresar al país, salvo que seas titular de residencia permanente vigente en Colombia, México o Perú, en cuyo caso estarás exento del requisito de autorización previa o visa (Alianza del Pacífico).\n\nVigencia permiso de turismo simple: " + buscarId.estadiaSimple + " días.\n" + "Costo permiso de turismo simple: US$" + buscarId.costoSimple + ".\n" + "Vigencia permiso de turismo múltiple: " + buscarId.estadiaMultiple + " días.\n" + "Costo permiso de turismo múltiple: US$" + buscarId.costoMultiple + ".\n" + "\n\nEl costo de un permiso de residencia en Chile es de CLP$" + costo(buscarId.costoResidencia) + ".");
    }
    // Si el país es Venezuela - id 12 - (casos de excepción) muestra un texto específico
    else if(pais == 12){
        alert("Si deseas viajar a Chile con pasaporte de " + buscarId.pais + " " + buscarId.emoji + " " + buscarId.permiso.toUpperCase() + " de autorización previa o visa para ingresar al país, salvo que seas titular de residencia permanente vigente en Argentina, en cuyo caso estarás exento del requisito de autorización previa o visa.\n\nVigencia permiso de turismo simple: " + buscarId.estadiaSimple + " días.\n" + "Costo permiso de turismo simple: US$" + buscarId.costoSimple + ".\n" + "\n\nEl costo de un permiso de residencia en Chile es de CLP$" + costo(buscarId.costoResidencia) + ".");
    }
    // Si se trata de cualquier otro país, muestra el siguiente texto:
    else {
        alert("Si deseas viajar a Chile con pasaporte de " + buscarId.pais + " " + buscarId.emoji + " " + buscarId.permiso.toUpperCase() + " de autorización previa o visa para ingresar al país.\n\nVigencia permiso de turismo simple: " + buscarId.estadiaSimple + " días.\n" + "Costo permiso de turismo simple: US$" + buscarId.costoSimple + ".\n" + "Vigencia permiso de turismo múltiple: " + buscarId.estadiaMultiple + " días.\n" + "Costo permiso de turismo múltiple: US$" + buscarId.costoMultiple + ".\n" + "\n\nEl costo de un permiso de residencia en Chile es de CLP$" + costo(buscarId.costoResidencia) + ".");
    }
}
// Función que calcula el costo del permiso de residencia temporal en pesos chilenos (CLP$)
function costo(valor) {
    return parseInt(valor) * 866; // CLP$866 = USD$1 
}
// Ejecuta la función:
entrada();
