// ==UserScript==
// @name        Hots Logs Improver
// @namespace   hots_stats
// @include     https://www.hotslogs.com/Player/Profile*
// @version     1
// @grant       none
// ==/UserScript==

$(function() {
    var hero_table = $('#ctl00_MainContent_RadGridCharacterStatistics_ctl00');
    
    // Filter out when less than 10 games played:
    
    var even = true;
    hero_table.find('tbody tr').each(function(index, element) {
        var tr = $(element);
        var td = tr.find('td:nth-child(5n)');
        if (parseInt(td.text()) < 10) {
            tr.hide();
        }
        else {
            if (even) {
                tr.removeClass("rgRow rgAltRow").addClass("rgRow");
            }
            else {
                tr.removeClass("rgRow rgAltRow").addClass("rgAltRow");
            }
            even = ! even;
        }
    });
});
