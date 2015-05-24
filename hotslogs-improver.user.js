// ==UserScript==
// @name        Hots Logs Improver
// @namespace   hots_stats
// @include     https://www.hotslogs.com/Player/Profile*
// @version     1
// @grant       none
// ==/UserScript==

$(function() {
    var hero_table = $('#ctl00_MainContent_RadGridCharacterStatistics_ctl00');
    
    var even = true;

    // Remove hero level.
    var th = hero_table.find('th:nth-child(4n)');
    th.hide();

    hero_table.find('tbody tr').each(function(index, element) {
        var tr = $(element);
        
        var td = tr.find('td:nth-child(5n)');
        if (parseInt(td.text()) < 10) {
            // Remove heroes with less that 10 games.
            tr.hide();
        }
        else {
            // Remove hero level.
            var td = tr.find('td:nth-child(4n)');
            td.hide();
            
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
