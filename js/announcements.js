$(function(){
    $.each($('.card .time'), function() {
        $(this).text(moment(parseInt($(this).attr('data-time'))).fromNow());
    });
});
