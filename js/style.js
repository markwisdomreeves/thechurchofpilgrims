
// Scroll to Top button code section
document.addEventListener('DOMContentLoaded', (event) => {
  $(document).ready(function(){
    $(window).scroll(function(){
      if($(window).scrollTop() > 300){
        $('.to-the-top').css({
          "opacity":"1", "pointer-events":"auto"
        });
      }else{
        $('.to-the-top').css({
          "opacity":"0", "pointer-events":"none"
        });
      }
    });
    $('.to-the-top').click(function(){
      $('html').animate({scrollTop:0}, 500);
    });
  });

});
// End of Scroll to Top button code section


// ES6 Class - This for the first bible verse
class TypeWriterFirstVerse {
  constructor(txtElement, words, wait = 4000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    if(this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
    let typeSpeed = 100;

    if(this.isDeleting) {
      typeSpeed /= 2;
    }

    if(!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 100;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}
document.addEventListener('DOMContentLoaded', firstInit);

// Init App
function firstInit() {
  const txtElement = document.querySelector('.first-txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-first-words'));
  const wait = txtElement.getAttribute('data-first-wait');
  // Init TypeWriter
  new TypeWriterFirstVerse(txtElement, words, wait);
}



// ES6 Class - This for the second bible verse
class TypeWriterSecondVerse {
  constructor(txtElement, words, wait = 4000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    if(this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = 100;

    if(this.isDeleting) {
      typeSpeed /= 2;
    }

    if(!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 100;
    }
    setTimeout(() => this.type(), typeSpeed);
  }
}
document.addEventListener('DOMContentLoaded', secondInit);


// Init App
function secondInit() {
  const txtElement = document.querySelector('.second-txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-second-words'));
  const wait = txtElement.getAttribute('data-second-wait');
  // Init TypeWriter
  new TypeWriterSecondVerse(txtElement, words, wait);
}
