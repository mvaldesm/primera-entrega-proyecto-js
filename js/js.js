/* 

    Primera entrega proyecto JS
    Alumno: Marco Valdés
    Tabla permisos Ministerio Relaciones Exteriores de Chile: https://serviciosconsulares.cl/tramites/site/artic/20190220/asocfile/20190220161313/cuadro_de_aranceles_y_vistos_de_turismo_2020.pdf

*/

/*  paises -> Array de objetos con los datos de cada país - 12 por ahora  
    estadiaSimple = vigencia del permiso de permanencia transitoria simple
    costoSimple = costo del permiso de permanencia transitoria simple
    estadiaMultiple = vigencia del permiso de permanencia transitoria múltiple
    costoMultiple = vigencia del permiso de permanencia transitoria múltiple
    costoResidencia = costo de un permiso de residencia temporal en Chile según nacionalidad
*/
const paises = [
    {
        id: 1,
        pais: "Argentina",
        bandera: "argentina.svg",
        emoji: "🇦🇷",
        permiso: "no requerirás",
        estadiaSimple: 90,
        costoSimple: 0,
        estadiaMultiple: 90,
        costoMultiple: 0,
        costoResidencia: 250
    },
    {
        id: 2,
        pais: "Bolivia",
        bandera: "bolivia.svg",
        emoji:"🇧🇴",
        permiso: "no requerirás",
        estadiaSimple: 90,
        costoSimple: 0,
        estadiaMultiple: 90,
        costoMultiple: 0,
        costoResidencia: 149
    },
    {
        id: 3,
        pais: "Brasil",
        bandera: "brasi.svg",
        emoji: "🇧🇷",
        permiso: "no requerirás",
        estadiaSimple: 90,
        costoSimple: 0,
        estadiaMultiple: 90,
        costoMultiple: 0,
        costoResidencia: 100
    },
    {
        id: 4,
        pais: "Colombia",
        bandera: "colombia.svg",
        emoji: "🇨🇴",
        permiso: "no requerirás",
        estadiaSimple: 90,
        costoSimple: 0,
        estadiaMultiple: 90,
        costoMultiple: 0,
        costoResidencia: 282
    },
    {
        id: 5,
        pais: "Ecuador",
        bandera: "ecuador.svg",
        emoji: "🇪🇨",
        permiso: "no requerirás",
        estadiaSimple: 90,
        costoSimple: 0,
        estadiaMultiple: 90,
        costoMultiple: 0,
        costoResidencia: 450
    },
    {
        id: 6,
        pais: "Guyana",
        bandera: "guyana.svg",
        emoji: "🇬🇾",
        permiso: "no requerirás",
        estadiaSimple: 90,
        costoSimple: 0,
        estadiaMultiple: 90,
        costoMultiple: 0,
        costoResidencia: 140
    },
    {
        id: 7,
        pais: "Paraguay",
        bandera: "paraguay.svg",
        emoji: "🇵🇾",
        permiso: "no requerirás",
        estadiaSimple: 90,
        costoSimple: 0,
        estadiaMultiple: 90,
        costoMultiple: 0,
        costoResidencia: 288
    },
    {
        id: 8,
        pais: "Perú",
        bandera: "peru.svg",
        emoji: "🇵🇪",
        permiso: "no requerirás",
        estadiaSimple: 90,
        costoSimple: 0,
        estadiaMultiple: 90,
        costoMultiple: 0,
        costoResidencia: 80
    },
    {
        id: 9,
        pais: "Surinam",
        bandera: "surinam.svg",
        emoji: "🇸🇷",
        permiso: "requerirás", /* Exento del requisito VISTUR para ingresar a Chile de nacionales de Surinam con residencia permanente en países de la Alianza del Pacífico (Colombia-México-Perú) a contar del 30 junio 2016 */
        estadiaSimple: 90,
        costoSimple: 40,
        estadiaMultiple: 90,
        costoMultiple: 60,
        costoResidencia: 210
    },
    {
        id: 10,
        pais: "Trinidad y Tobago",
        bandera: "trinidad-tobago.svg",
        emoji: "🇹🇹",
        permiso: "no requerirás",
        estadiaSimple: 90,
        costoSimple: 0,
        estadiaMultiple: 90,
        costoMultiple: 0,
        costoResidencia: 160
    },
    {
        id: 11,
        pais: "Uruguay",
        bandera: "uruguay.svg",
        emoji: "🇺🇾",
        permiso: "no requerirás",
        estadiaSimple: 90,
        costoSimple: 0,
        estadiaMultiple: 90,
        costoMultiple: 0,
        costoResidencia: 65
    },
    {
        id: 12,
        pais: "Venezuela",
        bandera: "venezuela.svg",
        emoji: "🇻🇪",
        permiso: "requerirás", /* Exento del requisito VISTUR para ingresar a Chile si se es titular de Residencia Definitiva en Argentina */
        estadiaSimple: 90,
        costoSimple: 50,
        estadiaMultiple: "N/A",
        costoMultiple: "N/A",
        costoResidencia: 60
    }
    
]

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
        this.costoMuliple = costoMuliple;
        this.costoResidencia = costoResidencia;

    }
}

// Función que calcula el costo del permiso de residencia temporal en pesos chilenos (CLP$)
function costo(valor) {
    return valor * 866; // CLP$866 = USD$1 
}

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
// Ejecuta la función:
entrada();
