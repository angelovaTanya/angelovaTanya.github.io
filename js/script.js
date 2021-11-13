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
const sliders = document.querySelectorAll('.slide-in');

const apprearOptions = {
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

},apprearOptions);

progressBarsAppear.forEach(progressBar => {
  appearOnScroll.observe(progressBar);
});

infosTextAppear.forEach(info => {
  appearOnScroll.observe(info);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});
