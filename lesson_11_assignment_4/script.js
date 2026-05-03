// JavaScript Document
document.addEventListener("DOMContentLoaded", () => {


	
	
  function submitForm(event) {
    event.preventDefault();
    const msg = document.getElementById("formMessage");
    if (msg) {
      msg.innerText = "Thank you! Your message has been submitted!";
    }
  }


  window.showAlert = function () {
    alert("Keep rocking!");
  };

const popoverEl = document.querySelector('.example-popover');

if (popoverEl && window.bootstrap) {
  new bootstrap.Popover(popoverEl, {
    container: 'body'
  });
}
	
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.slide');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  if (!track || !nextBtn || !prevBtn) {
    console.log("Carousel elements not found");
    return;
  }

  let index = 0;

  function updateSlide() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    updateSlide();
  });

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlide();
  });

});


(function () {
  'use strict'


  var forms = document.querySelectorAll('.needs-validation')


  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()


const form = document.getElementById('questionForm');
const thankYou = document.getElementById('thankYou');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // stop page refresh

  // Hide form and show thank you message
  form.style.display = 'none';
  thankYou.style.display = 'block';
});