/*
*      Copyright (c) 2014 Chi Hoang 
*      All rights reserved
*/

function List() {
  this.observerList = [];
  return this;
}
 
List.prototype = {
  add : function( obj ){
    return this.observerList.push( obj );
  },
  count : function() {
    return this.observerList.length;
  },
  get : function( index ){
    if( index > -1 && index < this.observerList.length ){
      return this.observerList[ index ];
    }
  },
  indexOf : function( obj, startIndex ){
    var i = startIndex;
      while( i < this.observerList.length ){
       if( this.observerList[i] === obj ){
         return i;
       }
       i++;
     }
     return -1;
  },
  removeAt : function( index ){
    this.observerList.splice( index, 1 );
  }
};
 
var Subject = function (timer,width,height) {
  this.width = width || "190px";
  this.height = height || "20px";
  this.timer = timer || 10;
  this.ele = document.createElement("div");
  this.ele.id = Math.floor((Math.random() * 1000) + 1);
  this.killswitch = 0;
  return this;
}

Subject.prototype = {
  update : function () {
    --this.timer;
    if (this.timer>0 && this.killswitch==0)
    {
      window.document.getElementById(this.ele.id).innerHTML = "I have "+this.timer+" seconds left.";
    } else if(this.timer==0 && this.killswitch==0)
    {
      this.timer=1;
      this.killswitch++;
      window.document.getElementById(this.ele.id).innerHTML = "I'm done counting, bye bye!";
     } else if(this.timer==0 && this.killswitch==1)
     {
      this.killswitch++;
      e = window.document.getElementById(this.ele.id);
      window.e.parentNode.removeChild(e);
    } 
  }
}

var Timer = function (observers)
{
  this.observers = observers;
  return this;
}

Timer.prototype = {
  AddBox : function(box,speed) {
    box.speed = speed || 1000;
    window.document.body.appendChild(box.ele);
    window.document.getElementById(box.ele.id).style.width=box.width;
    window.document.getElementById(box.ele.id).style.height=box.height;
    window.document.getElementById(box.ele.id).style.cssFloat="left";
    box.ele.appendChild(window.document.createTextNode("I have "+box.timer+" seconds left"));
    var _this=this;
    box.b=setInterval( function () { _this.Notify(box.ele.id); },box.speed);
    this.observers.add(box);
  },
  RemoveBox : function(observer) {
    this.observers.removeAt( this.observers.indexOf( observer, 0 ) );
    return this.observers.count();
  },
  Notify : function(id){
    var observerCount = this.observers.count();
    for(var i=0; i < observerCount; i++){
      if (this.observers.get(i).killswitch==2)
      {
        var observerCount=this.RemoveBox(this.observers.get(i));
      } else if (this.observers.get(i).ele.id==id) {
        this.observers.get(i).update();  
      }
    }
  }
}

var test3 = function () {
  var cd = new Timer(new List());
  for (i=0;i<100;i++) {
    cd.AddBox(new Subject(Math.floor((Math.random() * 10) + 1)));
  }
}
var a = new test3();