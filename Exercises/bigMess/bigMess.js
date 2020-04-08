// Math.​random​()​ ​*​ ​500

// $​(​'body *'​).each(function(){
// this.css("background-color", "yellow");

// });

// not 100% sure about this.  Used Joshua as a reference in code help 

  $('body *').each(function(){
    var randomTop = Math.floor(Math.random()* 500) + 'px' ;
    var randomLeft = Math.floor(Math.random()*500) + 'px';
    $(this).css(
    {
        "position":"absolute",
        "top": "randomTop",
        "left": "randomLeft",
        "color": "blue"
    })
    console.log($(this));
})