function openModal(modalId, caption) {
  let modal = document.getElementById(modalId)
  modal.style.display = "flex";
  modal.classList.add("show");
  let message = modal.querySelector(".caption")
  message.innerText = caption;

  document.body.classList.add("no-scroll");
}

function closeModal(modalId) {
  let modal = document.getElementById(modalId);
  modal.classList.remove("show");
  setTimeout(function () {
    modal.style.display = "none";
    modal.querySelector(".caption").innerText = "";
    document.body.classList.remove("no-scroll");
  }, 300);
}
