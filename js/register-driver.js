(() => {
  const refs = {
    openModalBtn: document.querySelector("[register-driver-open]"),
    closeModalBtn: document.querySelector("[register-driver-close]"),
    modal: document.querySelector("[register-driver]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
