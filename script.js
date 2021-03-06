document.write('<p>Estadisticas centro medico ñuñoa</p>');

var radiologia = [
    { hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA' },
    { hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE' },
    { hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE' },
    { hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA' },
    { hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA' },
];

var traumatologia = [
    { hora: '08:00', especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ', rut: '15554774-5', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL ARAYA', paciente: 'ANGÉLICA NAVAS', rut: '15444147-9', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'MARIA ARRIAGADA', paciente: 'ANA KLAPP', rut: '17879423-9', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'ALEJANDRO BADILLA', paciente: 'FELIPE MARDONES', rut: '1547423-6', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'CECILIA BUDNIK', paciente: 'DIEGO MARRE', rut: '16554741-K', prevision: 'FONASA' },
    { hora: '12:00', especialista: 'ARTURO CAVAGNARO', paciente: 'CECILIA MENDEZ', rut: '9747535-8', prevision: 'ISAPRE' },
    { hora: '12:30', especialista: 'ANDRES KANACRI', paciente: 'MARCIAL SUAZO', rut: '11254785-5', prevision: 'ISAPRE' },
];

var dental = [
    { hora: '08:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL', rut: '11123425-6', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'MARIA PIA ZAÑARTU', paciente: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA' },
    { hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ', rut: '18887662-K', prevision: 'FONASA' },
    { hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA' },
    { hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE' },
];

//Agregar código para el desafio 2 aquí
//1. Agregar las siguientes horas al arreglo de Traumatología:
traumatologia.push(
    { hora: '09:00', especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA', rut: '13123329-7', prevision: 'ISAPRE' },
    { hora: '09:30', especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13453234-1', prevision: 'ISAPRE' },
    { hora: '12:00', especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'FONASA' });

//1.1 ordenar consultas según hora / sin este paso queda como ultima consulta la de "Susana poblete", sin embargo la última realmente corersponde a la de "Marcial Suazo"
traumatologia.sort(function (a, b) {
    if (a.hora > b.hora) {
        return 1;
    }
    if (a.hora < b.hora) {
        return -1;
    }
    return 0;
});

//2.  Eliminar el primer y último elemento del arreglo de Radiología
radiologia.shift(); /* quitar la primera consulta*/
radiologia.pop(); /* quitar la última consulta*/
//Continua abajo ****


//Agregar código para el desafio 2 aquí

document.write(`<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);


document.write(`<hr /><p>Primera atencion: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length - 1].paciente} - ${radiologia[radiologia.length - 1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length - 1].paciente} - ${traumatologia[traumatologia.length - 1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].prevision}.</p>`);

//3 Continúa Aquí ****
//Imprimir consultas médicas dentales
document.write(`<hr />Atenciones dentales:`) //Titulo, para hacerlo visualmente más cómodo
dental.forEach(function (consulta) {
    let arrayConsulta = Object.values(consulta); /* accediendo a los valores del objeto */
    document.write(`<p> ${arrayConsulta.join(' - ')} </p> `) /*Imprimiendo las consultas + separar valores con " - " */
});

//4
let pacientes = []; /*Array vacío para juntar todos los pacientes de todas las especialidades en un mismo array */
radiologia.forEach(consulta => { 
    pacientes.push(consulta.paciente); /*Accediendo a los pacientes de radiología y agreándolos al array creado anteriormente */
});
traumatologia.forEach(consulta => {
    pacientes.push(consulta.paciente); /*Accediendo a los pacientes de traumatología y agreándolos al array creado anteriormente */
});
dental.forEach(consulta => {
    pacientes.push(consulta.paciente); /*Accediendo a los pacientes del área dental y agreándolos al array creado anteriormente */
});

document.write(`<hr />Listado de pacientes:`) //Titulo, para hacerlo visualmente más cómodo
pacientes.forEach(paciente => {
    document.write(`<p> ${paciente} </p>`);  /*Una vez que tenemos la lista completa de pacientes en nuestra variable pacientes, imprimimos cada una de ellas en un nuevo párrafo */
});


//5
document.write(`<hr />Previsión cambiada de pacientes en área dental:`) //Titulo, para hacerlo visualmente más cómodo
let dentalNew = []; /*Array vacío donde se reunirán los datos correspondientes a los pacientes  */
dental.forEach((consulta, i) => {  /* Funcion a ejecutar en CADA elemento del array "dental" */
    if (consulta.prevision === "FONASA") { /* Si la previsión es igual a "FONASA"*/
        consulta.prevision = "ISAPRE"; /* Entonces se le asigna el valor ISAPRE */
        dentalNew.push(consulta); /*Se agrega al array vacío que agregamos previamente */
        return false; /*Para evitar que la previsión cambiada entre nuevamente al siguiente if */
    }
    if (consulta.prevision === "ISAPRE") { 
        consulta.prevision = "FONASA";
        dentalNew.push(consulta);
    }
});

dentalNew.forEach(consulta => { /*Una vez recolectados los datos, imprimir */
    document.write(`<p> ${consulta.paciente} - ${consulta.prevision}</p>`)
});


//Sebastián Segura Osorio 2020