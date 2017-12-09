jQuery(document).ready(function ($) {


  
	var slideCount = $('#foodslide ul li').length;
	var slideWidth = $('#foodslide ul li').width();
	var slideHeight = $('#foodslide ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	$('#foodslide ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#foodslide ul li:last-child').prependTo('#foodslide ul');

    function moveLeft() {
        $('#foodslide ul').animate({
            left: + slideWidth
        },500, function () {
            $('#foodslide ul li:last-child').prependTo('#foodslide ul');
            $('#foodslide ul').css('left', '');
        });
    };

    function moveRight() {
        $('#foodslide ul').animate({
            left: - slideWidth
        },500, function () {
            $('#foodslide ul li:first-child').appendTo('#foodslide ul');
            $('#foodslide ul').css('left', '');
        });
    };

    $('.prevbutton').click(function () {
        moveLeft();
    });

    $('.nextbutton').click(function () {
        moveRight();
    });  
});    
//function for img
var jj=1;
var addIdNo=2;
var count=8;
var removeIdNo=1;
var counttwo=0;
  function next(){
      jj++;
      addIdNo++;
      removeIdNo++;
      if(jj<count){
         $('#'+removeIdNo).removeClass('big');
          $('#'+addIdNo).addClass('big');
      }
      else{
          $('#8').removeClass('big');
          $('#2').addClass('big');
          jj=1;
          addIdNo=2;
          removeIdNo=1;
      }
}

function prev(){
    jj--;
    addIdNo--;
    removeIdNo--;
    var k=removeIdNo+2;
    
    if(jj>counttwo){
        $('#'+k).removeClass('big');
         $('#'+addIdNo).addClass('big');
    }
    else{
         $('#2').removeClass('big');
          $('#8').addClass('big');
        jj=7;
        addIdNo=8;
        removeIdNo=7;
    }
}

 

//function for map


$('.googleMap').click(function(){
$(this).find('iframe').removeClass('Pointer')})
	.mouseleave(function(){
			$(this).find('iframe').addClass('Pointer')});