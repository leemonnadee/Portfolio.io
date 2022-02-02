

var typed = new Typed('.type', {
    strings: ['Developer', 
    'Designer',
    'Freelancer'
   
],
    typeSpeed:60,
    backSpeed:60,
    loop: true,
   
  });

  
  
  $(".wrapper a").click(function(){
  
    $(".close").click();
 
  });



/**

  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll("ul li");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
       
         current = section.getAttribute("id");
      }
  
     
    });
  
    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
      
      }

    
    });
  });
 */

//skill 1 html
  
    $(".skillitem:nth-child(1)").hover(function(){
    $(".skillitem:nth-child(1) .contper").animate({height:170},500);
  
    $(".skillitem:nth-child(1) .contper").css({
      "visibility":"visible",
      "color":"white",
      "font-weight":"600",
    
      "transition":"1s"
    });
    $(".skillitem:nth-child(1) .counter").css("visibility","visible");
  }, function(){
    $(".skillitem:nth-child(1) .contper").css({
      "visibility":"hide",
    });
    $(".skillitem:nth-child(1) .contper").animate({height:0});
    $(".skillitem:nth-child(1) .counter").css({"tranisition":"2s",
    "visibility":"hidden",});
   });



   //skill 2 javascript
  
   $(".skillitem:nth-child(2)").hover(function(){
    $(".skillitem:nth-child(2) .contper").animate({height:160},500);
  
    $(".skillitem:nth-child(2) .contper").css({
      "visibility":"visible",
      "color":"white",
      "font-weight":"600",
    
      "transition":"1s"
    });
    $(".skillitem:nth-child(2) .counter").css("visibility","visible");
  }, function(){
    $(".skillitem:nth-child(2) .contper").css({
      "visibility":"hide",
    });
    $(".skillitem:nth-child(2) .contper").animate({height:0});
    $(".skillitem:nth-child(2) .counter").css({"tranisition":"2s",
    "visibility":"hidden",});
   });

   


   //skill 3 SCASS
  
   $(".skillitem:nth-child(3)").hover(function(){
    $(".skillitem:nth-child(3) .contper").animate({height:170},500);
  
    $(".skillitem:nth-child(3) .contper").css({
      "visibility":"visible",
      "color":"white",
      "font-weight":"600",
    
      "transition":"1s"
    });
    $(".skillitem:nth-child(3) .counter").css("visibility","visible");
  }, function(){
    $(".skillitem:nth-child(3) .contper").css({
      "visibility":"hide",
    });
    $(".skillitem:nth-child(3) .contper").animate({height:0});
    $(".skillitem:nth-child(3) .counter").css({"tranisition":"2s",
    "visibility":"hidden",});
   });




   //skill 1 Bootsrap
  
   $(".skillitem:nth-child(4)").hover(function(){
    $(".skillitem:nth-child(4) .contper").animate({height:170},500);
  
    $(".skillitem:nth-child(4) .contper").css({
      "visibility":"visible",
      "color":"white",
      "font-weight":"600",
    
      "transition":"1s"
    });
    $(".skillitem:nth-child(4) .counter").css("visibility","visible");
  }, function(){
    $(".skillitem:nth-child(4) .contper").css({
      "visibility":"hide",
    });
    $(".skillitem:nth-child(4) .contper").animate({height:0});
    $(".skillitem:nth-child(4) .counter").css({"tranisition":"2s",
    "visibility":"hidden",});
   });


   //skill 1 MYSQL
  
   $(".skillitem:nth-child(5)").hover(function(){
    $(".skillitem:nth-child(5) .contper").animate({height:160},500);
  
    $(".skillitem:nth-child(5) .contper").css({
      "visibility":"visible",
      "color":"white",
      "font-weight":"600",
    
      "transition":"1s"
    });
    $(".skillitem:nth-child(5) .counter").css("visibility","visible");
  }, function(){
    $(".skillitem:nth-child(5) .contper").css({
      "visibility":"hide",
    });
    $(".skillitem:nth-child(5) .contper").animate({height:0});
    $(".skillitem:nth-child(5) .counter").css({"tranisition":"2s",
    "visibility":"hidden",});
   });



   //skill 1 C sharp
  
   $(".skillitem:nth-child(6)").hover(function(){
    $(".skillitem:nth-child(6) .contper").animate({height:160},500);
  
    $(".skillitem:nth-child(6) .contper").css({
      "visibility":"visible",
      "color":"white",
      "font-weight":"600",
    
      "transition":"1s"
    });
    $(".skillitem:nth-child(6) .counter").css("visibility","visible");
  }, function(){
    $(".skillitem:nth-child(6) .contper").css({
      "visibility":"hide",
    });
    $(".skillitem:nth-child(6) .contper").animate({height:0});
    $(".skillitem:nth-child(6) .counter").css({"tranisition":"2s",
    "visibility":"hidden",});
   });



   //skill 1 VBA
  
   $(".skillitem:nth-child(7)").hover(function(){
    $(".skillitem:nth-child(7) .contper").animate({height:180},500);
  
    $(".skillitem:nth-child(7) .contper").css({
      "visibility":"visible",
      "color":"white",
      "font-weight":"600",
    
      "transition":"1s"
    });
    $(".skillitem:nth-child(7) .counter").css("visibility","visible");
  }, function(){
    $(".skillitem:nth-child(7) .contper").css({
      "visibility":"hide",
    });
    $(".skillitem:nth-child(7) .contper").animate({height:0});
    $(".skillitem:nth-child(7) .counter").css({"tranisition":"2s",
    "visibility":"hidden",});
   });



   //skill 1 Github
  
   $(".skillitem:nth-child(8)").hover(function(){
    $(".skillitem:nth-child(8) .contper").animate({height:160},500);
  
    $(".skillitem:nth-child(8) .contper").css({
      "visibility":"visible",
      "color":"white",
      "font-weight":"600",
    
      "transition":"1s"
    });
    $(".skillitem:nth-child(8) .counter").css("visibility","visible");
  }, function(){
    $(".skillitem:nth-child(8) .contper").css({
      "visibility":"hide",
    });
    $(".skillitem:nth-child(8) .contper").animate({height:0});
    $(".skillitem:nth-child(8) .counter").css({"tranisition":"2s",
    "visibility":"hidden",});
   });
