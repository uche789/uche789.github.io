$(function () {
    if ($('#theme-selection')[0].value.indexOf('theme') > -1) {
        $('link[id*=theme]').remove();
        insertScript($('#theme-selection')[0].value);
    }

    $('#theme-selection').change(function (e) {
        var theme = e.target.value;
        $('link[id*=theme]').remove();

        if (theme.indexOf('theme') > -1) {
            insertScript(theme);
        }
    });

    function insertScript(theme) {
        $('<link>')
            .appendTo('head')
            .attr({ type: 'text/css', rel: 'stylesheet', id: theme + '-var' })
            .attr('href', 'assets/css/' + theme + '-variables.css');

        $('<link>')
            .appendTo('head')
            .attr({ type: 'text/css', rel: 'stylesheet', id: theme + '-css' })
            .attr('href', 'assets/css/' + theme + '.css');
    }
});

