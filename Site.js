function animationHover(element, animation) {
    element = $(element);
    element.hover(
        function () {
            element.addClass('animated ' + animation);
        },
        function () {
            //wait for animation to finish before removing classes
            window.setTimeout(function () {
                element.removeClass('animated ' + animation);
            }, 2000);
        });
}

//$(document).ready(function () {
    //$('.thumbnail').hover(function () {
    //    $('.slider', this).slideToggle('fast');
    //});
    //$('.thumbnail').hover(function () {
    //    $('.slider', this).animate({
    //        opacity: 0.75,
    //        height: "toggle"
    //    }, 750, function () {
    //        //Animation complete.
    // function customThemes() {
    //});
//});
