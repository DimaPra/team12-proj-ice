(() => {
	const refs = {
		openModalBtn: document.querySelector("[data-btn2-open]"),
		closeModalBtn: document.querySelector("[data-btn2-close]"),
		modal: document.querySelector("[data-modal-location]"),
	};

	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		refs.modal.classList.toggle("is-hidden");
	}
})();