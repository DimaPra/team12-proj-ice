(() => {
	const refs = {
		openModalBtn: document.querySelector("[data-btn3-open]"),
		closeModalBtn: document.querySelector("[data-btn3-close]"),
		modal: document.querySelector("[data-modal-buy]"),
	};

	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		refs.modal.classList.toggle("is-hidden");
	}
})();