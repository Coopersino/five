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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29yZGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA5NDApIHtcbiAgICAgICAgJChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoIFwiI2FjY29yZGlvblwiICkuYWNjb3JkaW9uKHsgYWN0aXZlOiA0LCBjb2xsYXBzaWJsZTogdHJ1ZSB9KTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHsgaWYgKCB0eXBlb2YgJCAoIFwiI2FjY29yZGlvblwiICkuIGRhdGEgKCBcInVpLWFjY29yZGlvblwiICkgICE9ICBcInVuZGVmaW5lZFwiICl7XG4gICAgICAgICQgKCBcIiNhY2NvcmRpb25cIiApLiBhY2NvcmRpb24gKCBcImRlc3Ryb3lcIiApO1xuICAgIH1cblxuICAgIH1cblxuICAgICQoIHdpbmRvdyApLnJlc2l6ZShmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgOTQwKSB7XG4gICAgICAgICAgICAkKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQoIFwiI2FjY29yZGlvblwiICkuYWNjb3JkaW9uKHsgYWN0aXZlOiA0LCBjb2xsYXBzaWJsZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgeyBpZiAoIHR5cGVvZiAkICggXCIjYWNjb3JkaW9uXCIgKS4gZGF0YSAoIFwidWktYWNjb3JkaW9uXCIgKSAgIT0gIFwidW5kZWZpbmVkXCIgKXtcbiAgICAgICAgICAgICQgKCBcIiNhY2NvcmRpb25cIiApLiBhY2NvcmRpb24gKCBcImRlc3Ryb3lcIiApO1xuICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH0pO1xufSk7Il19
