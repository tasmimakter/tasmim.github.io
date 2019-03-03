var image = document.querySelector('img');
image.onclick  = function()
{
    var sorce=image.getAttribute('src');
    if(sorce==='img1.jpg')
    {
        image.setAttribute('src','img2.jpg');
    }
    else if(sorce==='img2.jpg')
    {
        image.setAttribute('src','img3.jpg');
    }
    else if(sorce==='img3.jpg')
    {
        image.setAttribute('src','img1.jpg');
    }
    
}
var myButton=document.querySelector('#i');
var myHeading=document.querySelector('h1');
function setUserName()
{
  var myName=prompt('Enter The Name:');
  localStorage.setItem('name',myName);
  myHeading.textContent='Well come to Profile'+' '+myName ;

}
if(!localStorage.getItem('name'))
{
    setUserName();

}
else
{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Well come to Profile '+'  '  + storedName ;
}
myButton.onclick = function() {
    setUserName();
  }