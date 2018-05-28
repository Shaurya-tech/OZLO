/*
  ~ whoami
  ~ SHAURYA KUMAR
*/

var images = [];
var index = 0;

function Populate()
{
  images.push("Assets/Images/1.jpg");
  images.push("Assets/Images/2.jpg");
  images.push("Assets/Images/3.jpg");
  images.push("Assets/Images/4.jpg");

  Next();
}

function Next()
{
  if (index < images.length - 1) {  index++;  }
  else { index = 0; }
  document.getElementById('gallery_img').setAttribute('src', images[index]);
}

setInterval(Next, 5000);
window.onload = Populate();
