$(function() {  
    $("#HelpKeyboard").click(function() {  
        $(".footerClosed").toggleClass("footerOpen");  //This uses jQuery’s .toggleClass method to add or remove the specified class name. 
    });
    $("#Map").click(function() {
		$(".asideClosed").toggleClass("asideOpen");  //This uses jQuery’s .toggleClass method to add or remove the specified class name.
	});
});
 