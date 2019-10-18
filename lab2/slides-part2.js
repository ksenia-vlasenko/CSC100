// Step 1: add the following line into your HTML file
//    <script src="slides1.js"></script>
//
// Step 2: add the id="myslideshow" into the img that you want to 
//         change into a slideshow, e.g.
//
//    <img id="myslideshow" src="hawaii4.jpg" alt="hawaii" /> 
//
// Step 3: change image.src in the show() function below
//
// That is it!
//
var slideShowTimer  // play show() every 2 seconds
var current = 0     // current slideshow, 0, 1, 2, 0, 1, 2 and so on
var img             // image to be changed
var b               // background image to be changed


function show() 
{

   if (current == 0) 
   {
   	  
      // b.style.backgroundImage = "url(cover1.jpg)"
      img.src = "yoga.jpg"
      current = 1
   } 
   else if (current == 1) 
   {
      // b.style.backgroundImage = "url(cover2.jpg)"
      img.src = "yoga1.jpg"
      current = 2
   } 
   else if (current == 2) 
   {
      // b.style.backgroundImage = "url(cover3.jpg)"
      img.src = "yoga3.jpg"
      current = 3
   }
   else if (current == 3) 
   {
      // b.style.backgroundImage = "url(cover4.jpg)"
      img.src = "yoga4.jpg"
      current = 0
   }

}



function play() 
{
	  // create a timer once every 2000 milliseconds for "show()"
	  slideShowTimer = setInterval( show, 3000 ) 
}



function initialize() 
{
  img = document.getElementById("myslideshow")

  // if you want to change the background image instead, add an id="mybanner" to the 
  // background image
  // b = document.getElementById("mybanner") 
  
  play() 
}


window.onload = initialize