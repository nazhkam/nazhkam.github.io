

function FormOn(){
    $('.form').css('display','flex');
}
function FormOff(){
    $('.form').css('display','none');
}

$('.header_button').click(FormOn);
$('.close_form').click(FormOff);
$('.kartochka_uslugi_button').click(FormOn);
$('.obr_svyaz').click(FormOn);

