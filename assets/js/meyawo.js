$(document).ready(function () {
  $(".navbar .nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// navbar toggle
$("#nav-toggle").click(function () {
  $(this).toggleClass("is-active");
  $("ul.nav").toggleClass("show");
});

$(document).ready(function () {
  let certCarousel = document.querySelector(".cert-carousel");
  let certItems = document.querySelectorAll(".cert-item");
  let scrollDistance = certItems[0].offsetWidth + 20;
  let currentCertIndex = 0;
  let isAnimating = false;

  function scrollNext() {
    if (!isAnimating) {
      isAnimating = true;
      currentCertIndex++;
      if (currentCertIndex >= certItems.length) {
        currentCertIndex = 0;
      }
      moveCarousel();
    }
  }

  function scrollPrev() {
    if (!isAnimating) {
      isAnimating = true;
      currentCertIndex--;
      if (currentCertIndex < 0) {
        currentCertIndex = certItems.length - 1;
      }
      moveCarousel();
    }
  }

  function moveCarousel() {
    certCarousel.style.transition = "transform 0.8s ease-in-out";
    certCarousel.style.transform = `translateX(-${
      scrollDistance * currentCertIndex
    }px)`;

    certCarousel.addEventListener(
      "transitionend",
      function () {
        isAnimating = false;
      },
      { once: true }
    );
  }

  window.addEventListener("resize", function () {
    scrollDistance = certItems[0].offsetWidth + 20;
    certCarousel.style.transform = `translateX(-${
      scrollDistance * currentCertIndex
    }px)`;
  });

  $(".btn-prev").click(function () {
    scrollPrev();
  });

  $(".btn-next").click(function () {
    scrollNext();
  });
});
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  var valid = true;

  var name = document.querySelector('input[name="name"]').value;
  var email = document.querySelector('input[name="email"]').value;
  var message = document.querySelector('textarea[name="message"]').value;

  if (!name || !email || !message) {
      valid = false;
  }

  if (!valid) {
      e.preventDefault();
      alert('Please fill in all fields.');
  }
});
