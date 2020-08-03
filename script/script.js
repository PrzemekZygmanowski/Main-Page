// Variables
const burgerBtn = document.querySelector('.burger'),
    menu = document.querySelector('.menu');

// Burger & menu function 
function showMenu() {
    menu.classList.toggle('show')
}

// Menu  Scroll Animation
$('.navbar a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);

        // Menu hide function 
        menu.classList.remove('show')
    }
})

// przesuwane sekcje 
$(document).on("scroll", function () {
    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();
    // pobieramy elementy przesuwne
    const $about = $(".about");
    const $instalations = $(".instalations");
    const $features = $(".features");
    const $web = $(".webdesign");

    // pobieramy odleglosc elementow od gory strony
    const aboutDistance = $about.offset().top;
    const instalationsDistance = $instalations.offset().top;
    const featuresDistance = $features.offset().top;
    const webdistance = $web.offset().top;
    // instrukcja warunkowa 
    if (scrollValue > aboutDistance - windowHeight) {
        $about.addClass("active2")
    }
    if (scrollValue > instalationsDistance - windowHeight) {
        $instalations.addClass("active2")
    }
    if (scrollValue > featuresDistance - windowHeight) {
        $features.addClass("active2")
    }
    if (scrollValue > webdistance - windowHeight) {
        $web.addClass("active2")
    }

    // animacja sloganu i hobby
    // pobieramy dwa elementy pierwsze
    const $slogan = $(".slogan");
    const $interest = $(".hobby");
    // odleglosc elementow op od góry
    const sloganDistance2 = $slogan.offset().top;
    const hobbyDistance2 = $interest.offset().top;

    // instrukcja warunkowa (jesli wartosc skrola jest wieksza niz Y to pojawi sie element)
    if (scrollValue > sloganDistance2 - windowHeight) {
        $slogan.addClass("active2")
    }
    if (scrollValue > hobbyDistance2 - windowHeight) {
        $interest.addClass("active2")
    }
    // czysciciel
    // if od tego zeby wracacalo do stanu poczatkowego
    if (scrollValue < 100) {
        $about.removeClass("active2");
        $instalations.removeClass("active2");
        $features.removeClass("active2");
        $web.removeClass("active2");
        $slogan.removeClass("active2");
        $about.removeClass("active2");
    }
})


// Listeners 
burgerBtn.addEventListener('click', showMenu);