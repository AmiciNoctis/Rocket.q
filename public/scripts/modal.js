export default function modal() {

  const cancelButton = document.querySelector('.button.cancel');

  cancelButton.addEventListener("click", close)

  function open() {
    document.querySelector('.modal-wraper').classList.add('active');
  };

  function close() {
    document.querySelector('.modal-wraper').classList.remove('active');
  };

  return {
    open,
    close
  };
};