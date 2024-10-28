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
  