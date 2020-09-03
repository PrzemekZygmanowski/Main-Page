// Variables
const burgerBtn = document.querySelector('.burger'),
    menu = document.querySelector('.navbar');

// Burger & menu function 
function showMenu() {
    burgerBtn.classList.toggle('open')
    menu.classList.toggle('show')
}

// Menu  Scroll Animation
$('.navbar a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();

        // Scroll to the section 
        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);

        // Menu hide function 
        menu.classList.remove('show');
        burgerBtn.classList.remove('open')
    }
})

// Section scroll animation
$(document).on("scroll", function () {
    const windowHeight = $(window).height(),
        scrollValue = $(this).scrollTop();


    // section variables 
    const $about = $(".about"),
        $web = $(".webdesign"),
        $webEl = $('.web'),
        $instalations = $(".instalations"),
        $features = $(".features"),
        $form = $(".contact-section"),
        $slogan = $(".slogan"),
        $interest = $(".hobby");




    // sections distance from top
    const aboutDistance = $about.offset().top,
        instalationsDistance = $instalations.offset().top,
        featuresDistance = $features.offset().top,
        webdistance = $web.offset().top,
        webElDistance = $webEl.offset().top,
        sloganDistance = $slogan.offset().top,
        hobbyDistance = $interest.offset().top,
        formDistance = $form.offset().top;


    if (scrollValue > aboutDistance - windowHeight) {
        $about.addClass("active")
    }
    if (scrollValue > instalationsDistance - windowHeight) {
        $instalations.addClass("active")
    }
    if (scrollValue > featuresDistance - windowHeight) {
        $features.addClass("active")
    }
    if (scrollValue > webdistance - windowHeight) {
        $web.addClass("active")
    }
    if (scrollValue > webElDistance - (windowHeight / 1.5)) {
        $webEl.addClass("active")
    }
    if (scrollValue > sloganDistance - windowHeight) {
        $slogan.addClass("active")
    }
    if (scrollValue > hobbyDistance - windowHeight) {
        $interest.addClass("active")
    }
    if (scrollValue > formDistance - windowHeight) {
        $form.addClass("active")
    };

    // cleaner 
    if (scrollValue < 100) {
        $about.removeClass("active");
        $instalations.removeClass("active");
        $features.removeClass("active");
        $web.removeClass("active");
        $webEl.removeClass('active')
        $slogan.removeClass("active");
        $about.removeClass("active");
        $form.removeClass('active')
    }
})


// Icons&images scroll animations
$(document).on("scroll", function () {
    const windowHeight = $(window).height(),
        scrollValue = $(this).scrollTop();

    // Elements variables 
    const $webEl = $('.web'),
        $projEl = $('.project'),
        $hvacEl = $('.hvac-icon'),
        $featureEl = $('.feature-icon'),
        $itemEl = $('.item');


    // Elements distance from top
    const webElDistance = $webEl.offset().top,
        projElDistance = $projEl.offset().top,
        hvacElDistance = $hvacEl.offset().top,
        featureElDistance = $featureEl.offset().top,
        itemElDistance = $itemEl.offset().top;

    if (scrollValue > webElDistance - (windowHeight / 1.5)) {
        $webEl.addClass("active")
    }
    if (scrollValue > projElDistance - (windowHeight / 1.5)) {
        $projEl.addClass("active")
    }
    if (scrollValue > hvacElDistance - (windowHeight / 1.5)) {
        $hvacEl.addClass("active")
    }
    if (scrollValue > featureElDistance - (windowHeight / 1.5)) {
        $featureEl.addClass("active")
    }
    if (scrollValue > itemElDistance - (windowHeight / 1.5)) {
        $itemEl.addClass("active")
    }

    // cleaner 
    if (scrollValue < 100) {
        $webEl.removeClass('active')
    }
    if (scrollValue < 100) {
        $projEl.removeClass('active')
    }
    if (scrollValue < 100) {
        $hvacEl.removeClass('active')
    }
    if (scrollValue < 100) {
        $featureEl.removeClass('active')
    }
    if (scrollValue < 100) {
        $itemEl.removeClass('active')
    }
})


// Listeners 
burgerBtn.addEventListener('click', showMenu);