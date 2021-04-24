// var menuButton = document.querySelector(".menu-button");
// menuButton.addEventListener("click", function() {
//   console.log('Клик по кнопке меню');
//   document
//   .querySelector(".navbar-menu")
//   .classList.toggle('navbar-menu--visible');
// });
$(function() {
    $(document).on("click", ".mobile-container .parent", function(e) {
        e.preventDefault();
        $(".mobile-container .activity").removeClass("activity");
        $(this).siblings("ul").addClass("loaded").addClass("activity");
    });
    $(document).on("click", ".mobile-container .back", function(e) {
        e.preventDefault();
        $(".mobile-container .activity").removeClass("activity");
        $(this).parent().parent().removeClass("loaded");
        $(this).parent().parent().parent().parent().addClass("activity");
    });
    $(document).on("click", ".menu-button", function(e) {
        e.preventDefault();
        $(".mobile-container").addClass("loaded");
        $(".overlay").fadeIn();
    });
    $(document).on("click", ".overlay", function(e) {
        $(".mobile-container").removeClass("loaded");
        $(this).fadeOut(function() {
            $(".mobile-container .loaded").removeClass("loaded");
            $(".mobile-container .activity").removeClass("activity");
        });
    });
})