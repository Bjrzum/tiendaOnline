//jquery
$(document).ready(function(){
    let text = $('#number').text();
    let intText = parseInt(text);
    if(Number.isInteger(intText) === false || intText <= 0){
        $('#count-cart').hide();      
    }

    //let year = new Date().getFullYear();
    $('.year-copyright').text(new Date().getFullYear());
     
});