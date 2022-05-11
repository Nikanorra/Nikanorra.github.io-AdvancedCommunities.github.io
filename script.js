let collapse = document.getElementsByClassName("collapse__tab");
for (let i = 0; i < collapse.length; i++) {
  collapse[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  })
}




// slider 1
let sliderIndex = 1;
showSlides(sliderIndex);

function slidePlus(n) {
  showSlides(sliderIndex += n);
}

function currentSlide(n) {
  showSlides(sliderIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider__line");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    sliderIndex = 1;
  }
  if (n < 1) {
    sliderIndex = slides.length;
  }

  for (i=0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for(i=0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }

  slides[sliderIndex-1].style.display = "block";
  dots[sliderIndex-1].className += "active";
}

// slider 2
let sliderIndex2 = 1;
showSlides2(sliderIndex2);

function slidePlus2(n) {
  showSlides2(sliderIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(sliderIndex2 = n);
}

function showSlides2(n) {
  let i;
  let slides2 = document.getElementsByClassName("slider__line2");
  let dots2 = document.getElementsByClassName("dot2");

  if (n > slides2.length) {
    sliderIndex2 = 1;
  }
  if (n < 1) {
    sliderIndex2 = slides2.length;
  }

  for (i=0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }

  for(i=0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace("active", "");
  }

  slides2[sliderIndex2-1].style.display = "block";
  dots2[sliderIndex2-1].className += "active";
}

// slider 3
let sliderIndex3 = 1;
showSlides3(sliderIndex3);

function slidePlus3(n) {
  showSlides3(sliderIndex3 += n);
}

function currentSlide3(n) {
  showSlides3(sliderIndex3 = n);
}

function showSlides3(n) {
  let i;
  let slides3 = document.getElementsByClassName("slider__line3");
  let dots3 = document.getElementsByClassName("dot3");

  if (n > slides3.length) {
    sliderIndex3 = 1;
  }
  if (n < 1) {
    sliderIndex3 = slides3.length;
  }

  for (i=0; i < slides3.length; i++) {
    slides3[i].style.display = "none";
  }

  for(i=0; i < dots3.length; i++) {
    dots3[i].className = dots3[i].className.replace("active", "");
  }

  slides3[sliderIndex3-1].style.display = "block";
  dots3[sliderIndex3-1].className += "active";
}


// scroll up
document.getElementById("top").onclick = function() {
  window.scrollTo(0,0)
}


// burger menu
let menu = document.querySelector(".navigation__mobile");
  menu.addEventListener("click", function() {
    menu.classList.toggle("active");
  })
