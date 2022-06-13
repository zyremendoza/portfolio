history.scrollRestoration = "manual";
$(window).on('beforeunload', function(){
      $(window).scrollTop(0);
});

walkMan = document.getElementById("landing-img");



window.addEventListener('scroll',function(){
   
   if(window.pageYOffset > 710){ 
     walkMan.style.opacity='0';
     walkMan.style.transition='0.5s';
   }

   else {
    walkMan.style.opacity='1';
   }
 
 });
 
 function myFunction() {
  alert("Sorry, this app is undergoing maintenance right now.");
}