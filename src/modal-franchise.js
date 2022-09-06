(() => {
	const refs = {
		openModalBtn: document.querySelector("[data-btn-open]"),
		closeModalBtn: document.querySelector("[data-btn-close]"),
		modal: document.querySelector("[data-modal-franchise]"),
	};

	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		refs.modal.classList.toggle("is-hidden");
	}
})();
