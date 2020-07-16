// skrolowanie przycisków menu 
$(".me").on("click", function () {
    $("body, html").animate({
        scrollTop: $(".about").offset().top
    }, 2000)
})
$(".instal").on("click", function () {
    $("body, html").animate({
        scrollTop: $(".instalations").offset().top
    }, 2000)
})
$(".front").on("click", function () {
    $("body,html").animate({
        scrollTop: $(".webdesign").offset().top
    }, 2000)
})
$(".motto").on("click", function () {
    $("body,html").animate({
        scrollTop: $(".slogan").offset().top
    }, 2000)
})
$(".interest").on("click", function () {
    $("body,html").animate({
        scrollTop: $(".hobby").offset().top
    }, 2000)
})

// zmiana koloru burgera w zaleznosci od pozycji na stronie
function changeBurgerColor() {
    const BurgerScrollSize = $(document).scrollTop();
    const welcomeHeight = $("header.welcome").height();
    const welcomeDistance = $("header.welcome").offset().top;
    const sloganHeight = $("div.bg").height();
    const sloganDistance = $("div.bg").offset().top;
    const hobbyHeight = $("div.hobby").height();
    const hobbyDistance = $("div.hobby").offset().top;
    if (BurgerScrollSize > welcomeHeight - welcomeDistance) {
        $(".burger i").removeClass("changeColor1");
    } else if (BurgerScrollSize > sloganHeight + sloganDistance) {
        $(".burger i").addClass("changeColor1", "rotate");
    } else if (BurgerScrollSize > hobbyHeight - hobbyDistance) {
        $(".burger i").addClass("changeColor1", "rotate")
    } else {
        $(".burger i").addClass("changeColor1", "rotate");
    }
    console.log("zmiana koloru")
}

$(document).on("scroll", changeBurgerColor);

// zmiana koloru na slogan 
function changeBurgerColor2() {
    const BurgerScrollSize = $(document).scrollTop();
    const sloganHeight = $("div.bg").height();
    const sloganDistance = $("div.bg").offset().top;
    if (BurgerScrollSize > sloganDistance) {
        $(".burger i").addClass("changeColor1", "rotate");
    }
    console.log("zmiana koloru2")
}
$(document).on("scroll", changeBurgerColor2);

// function changeBurgerColor() {
//     const BurgerScrollSize = $(document).scrollTop();
//     const hobbyDistance = $("div.hobby").offset().top;
//     if (BurgerScrollSize > hobbyDistance) {
//         $(".burger i").addClass("changeColor1")
//     }
//     console.log("zmiana koloru hobby")
// }

// klikniecie w burgera
$(".burger i").on("click", function () {
    console.log("dziala")
    $("aside").toggleClass("show");
    if ("aside.show") {
        $(".burger i").addClass("changeColor1")
        // } else {
        //     $(".burger i").toggleClass("changeColor1");
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
    // pobieramy wysokosci elementow
    // const aboutHeight = $about.outerHeight();
    // const instalationsHeight = $instalations.outerHeight();
    // const featuresHeight = $features.outerHeight();
    // const webHeight = $web.outerHeight();
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
    // Druga sekcja
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