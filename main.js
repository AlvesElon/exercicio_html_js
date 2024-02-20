const form = document.querySelector("form");

form.addEventListener('submit', function(e) {
    e.preventDefault();

const campo_a = document.getElementById("campo-A");
const campo_b = document.getElementById("campo-B");
const errorMessage = document.querySelector(".error-message");
const successMessage = document.querySelector(".success-message");

const numberOne = parseFloat(campo_a.value);
const numberTwo = parseFloat(campo_b.value);

if (numberTwo < numberOne) {
    errorMessage.innerHTML = 'O número do campo B deve ser maior que o número do campo A.';
    errorMessage.style.display = 'block';
    successMessage.style.display = 'none';
    numberOne.value = " ";
    numberTwo.value = " ";
} else {
    successMessage.innerHTML = 'Parabéns! Está correto.';
    successMessage.style.display = 'block';
    errorMessage.style.display = 'none';
    numberOne.value = " ";
    numberTwo.value = " ";
};
});