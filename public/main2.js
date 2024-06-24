const element = document.querySelector("#container_hist");

element.addEventListener('wheel', (event) => {
  event.preventDefault();

  element.scrollBy({
    left: event.deltaY < 0 ? -30 : 30,
    
  });
});




//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




document.addEventListener('DOMContentLoaded', function () {
  const popup = document.getElementById('age-verification-popup');
  const yesButton = document.getElementById('yes-button');
  const noButton = document.getElementById('no-button');

  function showPopup() {
      popup.style.display = 'flex';
  }

  function hidePopup() {
      popup.style.display = 'none';
  }

  yesButton.addEventListener('click', function () {
      localStorage.setItem('ageVerified', 'true');
      hidePopup();
  });

  noButton.addEventListener('click', function () {
      window.location.href = 'https://www.google.com';
  });

  if (!localStorage.getItem('ageVerified')) {
      showPopup();
  }
});
