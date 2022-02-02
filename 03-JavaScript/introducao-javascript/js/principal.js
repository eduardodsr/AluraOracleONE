// console.log('Carregado de um arquivo externo');

var titulo = document.querySelector('.titulo');

console.log(titulo);		        // <h1 class="titulo">Aparecida Nutrição<h1>

console.log(titulo.textContent);	// Aparecida Nutrição

titulo.textContent = 'Aparecida Nutricionista'; // alteração do titulo para 'Aparecida Nutricionista'


// calcular o IMC do primeiro-paciente, Paulo

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var imc = peso / (altura * altura);

tdImc.textContent = imc;


console.log(paciente);      // <tr class="paciente" id="primeiro-paciente"></tr>

console.log(tdPeso);        // <td class="info-peso">100</td>
console.log(peso);          // 100 

console.log(tdAltura);      // <td class="info-altura">2.00</td>
console.log(altura);        // 2.00

console.log(imc);           // imc => 100 / (2.00 * 2.00) = 100 / (4.00) => imc = 25 

