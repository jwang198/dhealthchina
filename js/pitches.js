$(function(){
    $.each($('.card .number'), function(i) {
        // $(this).text('#'+(i+1));
    });
    $.each($('.card .tags'), function() {
        var tags = ($(this).attr('data-tags')).split(', ');
        htmlTags = tags.map(function(text) {
            return '<span class="tag">'+text+'</span>';
        });
        $(this).html(htmlTags);
    });
    $.each($('.card .pitcher-info .email'), function() {
        $(this).attr('href', 'mailto:'+$.trim($(this).text()));
    });
});
