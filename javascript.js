// Rotating the picture inside banner
// picture array
var img_array=["images/2.jpg" ,"images/3.jpg" ,"images/4.jpg","images/5.jpg","images/6.jpg","images/7.jpg","images/8.jpg","images/1.jpg"];
var index=0;
function slide(){

    document["banner"].src = img_array[index];
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

//==============slideshow function=============================


var slideindex=1;
showdivs(slideindex);

//function for going next or back
function plusDivs(n) {
	showdivs(slideindex+=n);
}


function showdivs(n)
{
	var i;
	var x=document.getElementsByClassName("pic");
	//if n was greater than the array of picture length , roll back to the first slide
	if (n > x.length)
		{slideindex=1;}
	//n was less than 1 means we are at the first slide but we want to from the first back to the last 	
	if (n < 1) {slideindex=x.length}
		// normally go next 
		for(i=0; i<x.length;i++){
			x[i].style.display="none";
		}
		x[slideindex-1].style.display="block";
}