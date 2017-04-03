$(document).ready(function() {

    if ($(window).width() < 940) {
        $(function() {
            $( "#accordion" ).accordion({ active: 4, collapsible: true });
        });
    } else { if ( typeof $ ( "#accordion" ). data ( "ui-accordion" )  !=  "undefined" ){
        $ ( "#accordion" ). accordion ( "destroy" );
    }

    }

    $( window ).resize(function() {
        if ($(window).width() < 940) {
            $(function() {
                $( "#accordion" ).accordion({ active: 4, collapsible: true });
            });
        } else { if ( typeof $ ( "#accordion" ). data ( "ui-accordion" )  !=  "undefined" ){
            $ ( "#accordion" ). accordion ( "destroy" );
        }

        }
    });
});