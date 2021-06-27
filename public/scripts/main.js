import Modal from './modal.js';

const modal = Modal();

const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button');

const deleteButtons = document.querySelectorAll('.actions a.excluir');

deleteButtons.forEach(button => {
  button.addEventListener("click", event => {
    modalTitle.innerHTML = "Excluir pergunta";

    modal.open();
  });
});

const checkButtons = document.querySelectorAll('.actions a.check');

checkButtons.forEach(button => {
  button.addEventListener("click", event => {
    modalTitle.innerHTML = "Marcar como lida";
    modalDescription.innerHTML = ""

    modal.open();
  });
});
