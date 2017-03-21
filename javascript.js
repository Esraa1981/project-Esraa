var img_array=["images/2.jpg" ,"images/3.jpg" ,"images/4.jpg","images/5.jpg","images/6.jpg","images/7.jpg","images/8.jpg","images/1.jpg"];
var index=0;
function slide()
{

    document["banner"].src = img_array[index];
    index++;
    if(index>=img_array.length)
    {
    index=0;
    }
}
setInterval("slide()",2000);

