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
        $(".close").addClass("overlay");
    });
    $(document).on("click", ".overlay", function(e) {
        $(".mobile-container").removeClass("loaded");
        $(this).fadeOut(function() {
            $(".mobile-container .loaded").removeClass("loaded");
            $(".mobile-container .activity").removeClass("activity");
        });
    });
    $(document).keyup(function(e) {
        e.preventDefault();
     if (e.keyCode == 27) { 
        $(".mobile-container").removeClass("loaded");
        $(".close").removeClass("overlay");
        $(this).fadeOut(function() {
            $(".mobile-container .loaded").removeClass("loaded");
            $(".mobile-container .activity").removeClass("activity");
        });
    }
});
});

let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

let body=document.querySelector('body');
if(isMobile.any()){
  body.classList.add('touch');
  let arrow=document.querySelectorAll('.arrow');
for(i=0; i<arrow.length; i++){
    let thisLink=arrow[i].previousElementSibling;
    let subMenu=arrow[i].nextElementSibling;
    let thisArrow=arrow[i];

    thisLink.classList.add('father');
    arrow[i].addEventListener('click', function(){
      subMenu.classList.toggle('open');
      thisArrow.classList.toggle('active');
    });
  } 
}else{
  body.classList.add('mouse');
}

var modalButton = $("[data-toggle=modal]");
var closeModalButton = $(".modal__close");
modalButton.on("click", openModal);
closeModalButton.on("click", closeModal);

function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible')
}
function closeModal() {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible')
}


$(document).keyup(function(e) {
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
    if (e.keyCode === 27) { 
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
    }
});

$(".form").each(function() {
  $(this).validate({
  errorClass: "invalid",
  messages: {
    name: {
      required: "Please specify your name",
      minlength: "The name must be at least two letters"
    },
    email: {
      required: "We need your email address to contact you",
      email: "email must be in the format of name@domain.com"
    },
    phone: {
      required: "Mobile phone is nesessary",
      minlength: "The phone must be at least 10 digits",
    },
  }
});
});