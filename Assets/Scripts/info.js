/*
  ~ whoami
  ~ SHAURYA KUMAR
*/

var h1 = [];
var p = [];
var a = [];
var index = 1;


function Populate()
{
  // 1
  h1.push("Home loans: Column 1 - Header 1");
  h1.push("Home loans: Column 1 - Header 2");
  h1.push("Home loans: Column 1 - Header 3");
  h1.push("Home loans: Column 2 - Header 1");
  h1.push("Home loans: Column 2 - Header 2");
  h1.push("Home loans: Column 2 - Header 3");
  p.push("Home loans: Column 1 - Description 1");
  p.push("Home loans: Column 1 - Description 2");
  p.push("Home loans: Column 1 - Description 3");
  p.push("Home loans: Column 2 - Description 1");
  p.push("Home loans: Column 2 - Description 2");
  p.push("Home loans: Column 2 - Description 3");
  a.push("#1");
  a.push("#2");
  a.push("#3");
  a.push("#4");
  a.push("#5");
  a.push("#6");


  // 2
  h1.push("Car loans: Column 1 - Header 1");
  h1.push("Car loans: Column 1 - Header 2");
  h1.push("Car loans: Column 1 - Header 3");
  h1.push("Car loans: Column 2 - Header 1");
  h1.push("Car loans: Column 2 - Header 2");
  h1.push("Car loans: Column 2 - Header 3");
  p.push("Car loans: Column 1 - Description 1");
  p.push("Car loans: Column 1 - Description 2");
  p.push("Car loans: Column 1 - Description 3");
  p.push("Car loans: Column 2 - Description 1");
  p.push("Car loans: Column 2 - Description 2");
  p.push("Car loans: Column 2 - Description 3");
  a.push("Car loans: Column 1 - a 1");
  a.push("Car loans: Column 1 - a 2");
  a.push("Car loans: Column 1 - a 3");
  a.push("Car loans: Column 2 - a 1");
  a.push("Car loans: Column 2 - a 2");
  a.push("Car loans: Column 2 - a 3");

  // 3
  h1.push("Planning: Column 1 - Header 1");
  h1.push("Planning: Column 1 - Header 2");
  h1.push("Planning: Column 1 - Header 3");
  h1.push("Planning: Column 2 - Header 1");
  h1.push("Planning: Column 2 - Header 2");
  h1.push("Planning: Column 2 - Header 3");
  p.push("Planning: Column 1 - Description 1");
  p.push("Planning: Column 1 - Description 2");
  p.push("Planning: Column 1 - Description 3");
  p.push("Planning: Column 2 - Description 1");
  p.push("Planning: Column 2 - Description 2");
  p.push("Planning: Column 2 - Description 3");
  a.push("Planning: Column 1 - a 1");
  a.push("Planning: Column 1 - a 2");
  a.push("Planning: Column 1 - a 3");
  a.push("Planning: Column 2 - a 1");
  a.push("Planning: Column 2 - a 2");
  a.push("Planning: Column 2 - a 3");

  // 4
  h1.push("Propery: Column 1 - Header 1");
  h1.push("Property: Column 1 - Header 2");
  h1.push("Property: Column 1 - Header 3");
  h1.push("Property: Column 2 - Header 1");
  h1.push("Property: Column 2 - Header 2");
  h1.push("Property: Column 2 - Header 3");
  p.push("Property: Column 1 - Description 1");
  p.push("Property: Column 1 - Description 2");
  p.push("Property: Column 1 - Description 3");
  p.push("Property: Column 2 - Description 1");
  p.push("Property: Column 2 - Description 2");
  p.push("Property: Column 2 - Description 3");
  a.push("Property: Column 1 - a 1");
  a.push("Property: Column 1 - a 2");
  a.push("Property: Column 1 - a 3");
  a.push("Property: Column 2 - a 1");
  a.push("Property: Column 2 - a 2");
  a.push("Property: Column 2 - a 3");

  // 5
  h1.push("Insurance: Column 1 - Header 1");
  h1.push("Insurance: Column 1 - Header 2");
  h1.push("Insurance: Column 1 - Header 3");
  h1.push("Insurance: Column 2 - Header 1");
  h1.push("Insurance: Column 2 - Header 2");
  h1.push("Insurance: Column 2 - Header 3");
  p.push("Insurance: Column 1 - Description 1");
  p.push("Insurance: Column 1 - Description 2");
  p.push("Insurance: Column 1 - Description 3");
  p.push("Insurance: Column 2 - Description 1");
  p.push("Insurance: Column 2 - Description 2");
  p.push("Insurance: Column 2 - Description 3");
  a.push("Insurance: Column 1 - a 1");
  a.push("Insurance: Column 1 - a 2");
  a.push("Insurance: Column 1 - a 3");
  a.push("Insurance: Column 2 - a 1");
  a.push("Insurance: Column 2 - a 2");
  a.push("Insurance: Column 2 - a 3");

  Update();

}

function Update()
{
  document.getElementById("c1-h1").innerHTML = h1[index * 6 - 6];
  document.getElementById("c1-h2").innerHTML = h1[index * 6 - 5];
  document.getElementById("c1-h3").innerHTML = h1[index * 6 - 4];
  document.getElementById("c2-h1").innerHTML = h1[index * 6 - 3];
  document.getElementById("c2-h2").innerHTML = h1[index * 6 - 2];
  document.getElementById("c2-h3").innerHTML = h1[index * 6 - 1];

  document.getElementById("c1-p1").innerHTML = p[index * 6 - 6];
  document.getElementById("c1-p2").innerHTML = p[index * 6 - 5];
  document.getElementById("c1-p3").innerHTML = p[index * 6 - 4];
  document.getElementById("c2-p1").innerHTML = p[index * 6 - 3];
  document.getElementById("c2-p2").innerHTML = p[index * 6 - 2];
  document.getElementById("c2-p3").innerHTML = p[index * 6 - 1];

  document.getElementById("c1-a1").setAttribute("href", a[index * 6 - 6]);
  document.getElementById("c1-a2").setAttribute("href", a[index * 6 - 5]);
  document.getElementById("c1-a3").setAttribute("href", a[index * 6 - 4]);
  document.getElementById("c2-a1").setAttribute("href", a[index * 6 - 3]);
  document.getElementById("c2-a2").setAttribute("href", a[index * 6 - 2]);
  document.getElementById("c2-a3").setAttribute("href", a[index * 6 - 1]);

  var id = "option-" + index;
  document.getElementById(id).setAttribute("style", document.getElementById(id).getAttribute("style")+"background-color:#4CAF50;");

  for (var i = 1; i < 6; i++)
  {
    if (i != index)
    {
      var nid = "option-" + i;
      document.getElementById(nid).setAttribute("style", document.getElementById(nid).getAttribute("style")+"background-color:#C1D82F;");
    }
  }
}

function Clicked(e)
{
  var id = document.getElementById(e.target.id);
  index = id.id.substring(7, 8);
  Update();
}

window.onload = Populate();
