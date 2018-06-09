$(document).ready(function() {

    //body width 751px break point 
    var clientWidth = document.body.clientWidth;
    
    //set enviroment
    if(clientWidth < 751) {
        $('#devItemsContainer').css({
            paddingTop: '0px',
            opacity: 1
        });
        $('#imgServices1').css({
            right: '0px',
            position: 'static',
            opacity: 1
        });
        $('#imgServices2').css({
            left: '0px',
            position: 'static',
            opacity: 1
        });
    }

    //event handler when scrolling
    $(window).scroll(function(){ 
       
        var offset = $(this).scrollTop();
    
        if(offset > 100) {
            //change the navbar style
            $('#nav').addClass('black-nav')
                .css('paddingTop', '0px')
                .css('paddingBottom', '0px');
                //shows the angleUp button
            $('#angleUp').fadeIn('slow');
            
        }else {
            $('#nav').removeClass('black-nav')
                .css('paddingTop', '20px')
                .css('paddingBottom', '20px');
            $('#angleUp').fadeOut('slow');
        }
        
        //animations

        //avoids animations on small devices
        if(offset > 350 && clientWidth >= 751){
            var devItemsContainer = $('#devItemsContainer');
            
            if(devItemsContainer.css('opacity') == '0') {
                devItemsContainer.animate({
                    paddingTop: '0px', 
                    paddingBottom: '50px',
                    opacity: 1,
                }, 1000);
            }
        }
        //imgServices1
        if(offset > 1375 && clientWidth >= 751) {
            var imgServices1 = $('#imgServices1');

            if(imgServices1.css('opacity') == '0') {
                imgServices1.animate({
                    right: '0px',
                    opacity: 1,
                    position: 'static'
                }, 1000);
            }

        }
        if(offset > 1700 && clientWidth >= 751) {
            var imgServices2 = $('#imgServices2');
            
            if(imgServices2.css('opacity') == '0') {
                imgServices2.animate({
                    left: '0px',
                    opacity: 1,
                    position: 'static'
                }, 1000);
            }
        }
    });
    
    //set all smooth bookmarks
    $('a[href^="#"]').click(function(e) {
        
        e.preventDefault();

        var section = this.href.split('#')[1];
        var offsetTop = $('#' + section).offset().top - 57;
        
         $('html, body').animate({
             scrollTop: offsetTop,
         }, 700, function() {
             $('.navbar-collapse').collapse('hide');
         });    
         
    });

    //hide the navbar-collapse when blur
    $('#wrapper').click(function(){
        $('.navbar-collapse').collapse('hide');
    });
    
});      
