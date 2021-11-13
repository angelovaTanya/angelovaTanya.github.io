// active menu on click in the navigation bar
$("#navAbout").click(function() {
        $(".navigation ul li").children().removeClass("nav-active");
        $(this).addClass("nav-active");
           $('html, body').animate({
               scrollTop:        $("#about").offset().top-66
           }, 500);
        return false;
       });

      $("#navSkills").click(function() {
        $(".navigation ul li").children().removeClass("nav-active");
        $(this).addClass("nav-active");
           $('html, body') .animate({
               scrollTop:        $("#skills").offset().top-112
           }, 500);
        return false;
       });

      $("#navExp").click(function() {
        $(".navigation ul li").children().removeClass("nav-active");
        $(this).addClass("nav-active");
           $(' html,body') .animate({
               scrollTop:        $("#experience").offset().top-112
           }, 1000);
        return false;
       });

      $("#navEdu").click(function() {
        $(".navigation ul li").children().removeClass("nav-active");
        $(this).addClass("nav-active");
           $('html,body ') .animate({
               scrollTop:        $("#education").offset().top-112
           }, 1000);
        return false;
       });

       $("#navContact").click(function() {
         $(".navigation ul li").children().removeClass("nav-active");
         $(this).addClass("nav-active");
            $('html,body ') .animate({
                scrollTop:        $("#contact").offset().top-112
            }, 1000);
         return false;
        });


// animation on scroll
const progressBarsAppear = document.querySelectorAll('.skill-bars .bar .progress-line ');
const infosTextAppear = document.querySelectorAll('.skill-bars .bar .info span');
const sliders = document.querySelectorAll('.slide-in, .slide-in-left');

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
}

const appearOnScroll = new IntersectionObserver
(function(
  entries,
  appearOnScroll
){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });

},appearOptions);

progressBarsAppear.forEach(progressBar => {
  appearOnScroll.observe(progressBar);
});

infosTextAppear.forEach(info => {
  appearOnScroll.observe(info);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});


// activeMenu

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.nav-link').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top - 111 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.nav-link').removeClass("nav-active"); //added to remove active class from all a elements
            currLink.addClass("nav-active");
        }
        else{
            currLink.removeClass("nav-active");
        }
    });
}

//activeMenu();
window.addEventListener('scroll', onScroll);
