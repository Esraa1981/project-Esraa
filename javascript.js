// Rotating the picture inside banner
// picture array
var img_array=["images/2.jpg" ,"images/3.jpg" ,"images/4.jpg","images/5.jpg","images/6.jpg","images/7.jpg","images/8.jpg","images/1.jpg"];
var index=0;
function slide(){

    var PicArray=document.getElementById("banner");
    PicArray.src=img_array[index];
    index++;
    if(index>=img_array.length){
    	index=0;
    }
}
setInterval("slide()",2000);

// FAQ page code to toggle the status of the answer display

function toggle(id){
var e = document.getElementById(id);
if(e.style.display == 'block')
	e.style.display = 'none';
else
	e.style.display = 'block';
}

//==============modal box function=============================
 //when the button is clicked is calling a function that display the Modal box
 var display= function()
 {
var m=document.getElementById("modal");
	m.style.display="block";
	showDivs(1);
}
//when x button is clicked is calling a function that hide the Modal box
var closebtn= function()
 {
var m=document.getElementById("modal");
	m.style.display="none";
}
//==============slideshow function=============================
var slideIndex = 1;
//showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}