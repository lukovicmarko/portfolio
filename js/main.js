
//scroll
$('#navbar a, .menu-wrap a, .navigation a').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 100
        },
            800
        );
    }
});

//hamburger menu

const menuIcon = document.querySelector('.hamburger-menu');
const navigation = document.querySelector('.navigation');
const list = document.querySelectorAll('.hamburger-nav-item');

//toggle hamburger menu
menuIcon.addEventListener('click', () => {
    navigation.classList.toggle('change');
});

//toggle hamburger menu when user clicks on link
for (i = 0; i < list.length; i++) {
    list[i].addEventListener('click', () => {
        navigation.classList.toggle('change');
    });
}

//ES Class
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }
    type() {
        //Current index of word
        const current = this.wordIndex % this.words.length;
        //Get full text of current word
        const fullTxt = this.words[current];
        //Check if deleting
        if (this.isDeleting) {
            //Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            //Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        //Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        //Init Type Speed
        let typeSpeed = 300;
        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        //If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            //Make pause at end
            typeSpeed = this.wait;
            //set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            //Move to next word
            this.wordIndex++;
            //Pause before start typing;
            typeSpeed = 500;
        }

        setTimeout(() => {
            this.type();
        }, typeSpeed);
    }
}


//Init on DOM Load
document.addEventListener('DOMContentLoaded', init);

//Init app
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    //Init typewriter
    new TypeWriter(txtElement, words, wait);
}


/* Animations on scroll */
$('.js--wp-1').waypoint(function (direction) {
    $('.js--wp-1').addClass('animated fadeInUp');
}, {
    offset: '90%'
});

$('.js--wp-2').waypoint(function (direction) {
    $('.js--wp-2').addClass('animated fadeIn');
}, {
    offset: '80%'
});

$('.js--wp-3').waypoint(function (direction) {
    $('.js--wp-3').addClass('animated fadeIn');
}, {
    offset: '80%'
});

$('.js--wp-4').waypoint(function (direction) {
    $('.js--wp-4').addClass('animated fadeIn');
}, {
    offset: '80%'
});

$('.js--wp-5').waypoint(function (direction) {
    $('.js--wp-5').addClass('animated fadeIn');
}, {
    offset: '80%'
});
