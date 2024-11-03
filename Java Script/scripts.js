// Open Modal
function openModal(imageSrc) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImg.src = imageSrc;
}

// Close Modal
function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

function toggleReadMore(id, button) {
  const moreText = document.getElementById(id);
  if (moreText.style.display === "none" || moreText.style.display === "") {
    moreText.style.display = "inline";
    button.innerText = "Read Less";
  } else {
    moreText.style.display = "none";
    button.innerText = "Read More";
  }
}
