window.onload = function ready ()
{
 cd = new Timer(new List());
 for (var i=0;i<10;i++) {
  cd.AddBox(new Subject(Math.floor((Math.random() * 10) + 1)));
 }
} 