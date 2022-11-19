// fact tooltip
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-facts-open]'),
    closeModalBtn: document.querySelector('[data-facts-close]'),
    modal: document.querySelector('[data-facts]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('facts__is-hidden');
  }
})();

// modal extra

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-extra-open]'),
    closeModalBtn: document.querySelector('[data-modal-extra-close]'),
    modal: document.querySelector('[data-modal-extra]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
