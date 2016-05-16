$(function() {
    var tmpl = "";
    var sidebar = $(".sidebar")
    $("h2").each(function(index, el) {
        var id = "h2" + index;
        var text = $(el).attr("id", id).text()
        tmpl += '<li class="list-group-item"> <a href="#' + id + '">' + text + '</a> </li>'
    });
    sidebar.html(tmpl).css({
        position: 'fixed',
        top: 100,
        right: 30
    });
})
