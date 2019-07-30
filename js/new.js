$(function (){
    var info = $('.info');
    $('#mailtip2').mailtip({
    onselected: function (mail){
    info.text('you choosed email: ' + mail)
    }
    });
});

function called()
{
    alert ("Is it okay for submitions?");
}