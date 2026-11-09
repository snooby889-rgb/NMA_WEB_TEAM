
const videoModal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');

videoModal.addEventListener('show.bs.modal', function (event) {

  const thumbnail = event.relatedTarget;

  const videoID = thumbnail.getAttribute('data-video');

  modalVideo.src = `https://player.vimeo.com/video/${videoID}?autoplay=1`;

  document.getElementById('modalTitle').textContent =
    thumbnail.getAttribute('data-title');

  document.getElementById('modalDescription').textContent =
    thumbnail.getAttribute('data-description');

});

videoModal.addEventListener('hidden.bs.modal', function () {

  // Stop the Vimeo video when the modal closes
  modalVideo.src = '';

});
