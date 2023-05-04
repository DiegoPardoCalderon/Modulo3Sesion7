//console.log("Funciones Cadena de Caracteres")
//var nombreApellido = prompt("Ingrese su Nombre y Apellidos")

//ReplaceAll
//console.log(nombreApellido.replaceAll(" ",""))
//console.log(nombreApellido.replaceAll("o","1"))
//console.log(nombreApellido.replaceAll("Carlos", "Luis"))

//Replace
//console.log(nombreApellido.replace("Carlos", "Luis"))

//Trim
//console.log(nombreApellido.trim())

//TrimStart
//console.log(nombreApellido.trimStart())

//TrimEnd
//console.log(nombreApellido.trimEnd())

//var numero = prompt("ingrese un numero...");

//Ejemplo de separador numerico
//var numero2 = 1_500_000
//console.log(numero2);

//Ejemplo de condiciones con separador numerico
//if(numero >1_000_000){
   // alert("El numero es mayor a 1 millon.");
    
//}else{
  //  alert("El numero es menor o igual a 1 millon");
//}

//Operador de fusion nula
var colaboradores = [
    { 
        rut: '12345678-9', 
        nombre: "Maria Morales", 
        departamento: "Talento Humano", 
        jornada: "completa",
        fecha_ingreso: "2021-01-16",
        direccion: {
            region: 'Bio-Bio',
            comuna: 'Hualpen',
        },
        salario:{
            salario_bruto:1_800_000,
            retenciones: {
                AFP: 1_200,
                SALUD: 1_500,
        },
        salario_neto: 1_797_300
    }, 
    },   
    { rut: '22334455-3', nombre: "Jose Medina", departamento: "Informatica", jornada:"Medio Tiempo"},
    { rut: '33421456-0', nombre: "Carlos Lopez"},//caso undefined
    { rut: '55667788-1', nombre: "Pedro Molina", departamento: "", jornada:"Completa"},//caso cadena vacia
    { rut: '54567288-1', nombre: "Juan Pavez", departamento: null }//caso valor null
]
// console.log(colaboradores)

colaboradores.map(colaborador => {
    //var direccion = colaborador?.direccion?.region || ''
    var retencionAFP =colaborador?.salario?.retenciones?.AFP || 0
    console.log("AFP", retencionAFP)
    colaborador.salario = 2_500_000
    colaborador.departamento = colaborador.departamento ?? "Servicios Generales"
    colaborador.jornada &&= colaborador.jornada.toUpperCase()
    colaborador.fecha_ingreso ||= "2023-01-01"
    return colaborador
})

// console.log(colaboradores)