//jQuery Click Event - Hamburger to Cross
$(document).ready(function(){
	$('.toggle-cross').click(function(){
		$('.toggle-cross').toggleClass('active')
	});
});

//jQuery Click Event - Hamburger to Arrow
$(document).ready(function(){
	$('.toggle-arrow').click(function(){
		$('.toggle-arrow').toggleClass('active')
	});
});

//jQuery Click Event - Hamburger to Vertical
$(document).ready(function(){
	$('.toggle-vertical').click(function(){
		$('.toggle-vertical').toggleClass('active')
	});
});

//jQuery Click Event - Switch toggle ON/OFF
$(document).ready(function(){
    $('.toggle').click(function(e) {
        var toggle = this;
  
        e.preventDefault();
  
        $(toggle).toggleClass('toggle-on')
            .toggleClass('toggle-off')
            .addClass('toggle-moving');
  
        setTimeout(function() {
            $(toggle).removeClass('toggle-moving');
        }, 200)
    });
});