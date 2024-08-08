$(document).ready(function() {
    $(".title").lettering();
    $(".button").lettering();

    animation();

    $('.button').click(function() {
        animation();
    });
});

function animation() {
    var title1 = gsap.timeline();
    title1.to(".button", {visibility: 'hidden', opacity: 0, duration: 0})
          .staggerFromTo(".title span", 0.5, 
            {ease: "back.out(1.7)", opacity: 0, y: 80},
            {ease: "back.out(1.7)", opacity: 1, y: 0}, 0.05)
          .to(".button", {visibility: 'visible', opacity: 1, duration: 0.2});
}
