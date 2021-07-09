import Modal from './modal.js';

const modal = Modal();

const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button');
const deleteButtons = document.querySelectorAll('.actions a.excluir');
const checkButtons = document.querySelectorAll('.actions a.check');

checkButtons.forEach(button => {
  button.addEventListener("click", handleClick)
});

deleteButtons.forEach(button => {
  button.addEventListener("click", (event) => handleClick(event, false));
})

function handleClick(event, check = true) {
  const text = check ? "Marcar como lida" : "Excluir";

  modalTitle.innerHTML = `${text} esta pergunta`;
  modalDescription.innerHTML = `Tem certeza que você deseja ${text.toLowerCase()} esta pergunta ?`;
  modalButton.innerHTML = check ? "Mensagem lida":"Sim, excluir";
  modalButton.className = check ? "button":"button red";

  modal.open();
}