$(".slider #slider").slick({
    slidesToShow: 1,
    infinite: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: true,
    // dots: false, Boolean
    // arrows: false, Boolean
});

$(".news #newSlider").slick({
    slidesToShow: 4,
    infinite: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    // arrows: false, Boolean
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                // rows: 2,
                infinite: false,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                dots: true,

            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                // rows: 2,
                infinite: false,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                dots: true,

            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                // rows: 2,
                infinite: false,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                dots: true,
            }
        }
    ]
});

$(".ourMenu #ourMenuSlider").slick({
    slidesToShow: 4,
    infinite: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    // arrows: false, Boolean
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                // rows: 2,
                infinite: false,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                dots: true,

            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                // rows: 2,
                infinite: false,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                dots: true,

            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                // rows: 2,
                infinite: false,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                dots: true,
            }
        }
    ]
});

$(".Search").click(function () {
    $(".searchForm").fadeIn();
});

$(".searchForm .closed").click(function () {
    $(".searchForm").fadeOut();
});