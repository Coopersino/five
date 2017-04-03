$(document).ready(function() {

    $("#slider").owlCarousel({

        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        loop:true,
        singleItem:true
    });
});

$(document).ready(function() {

    var owl = $("#slide2");

    owl.owlCarousel({

        itemsCustom : [
            [0, 1],
            [640, 1],
            [660, 2],
            [700, 2],
            [938, 2],
            [940, 3]
        ],
        navigation : false,
        pagination: false

    });
});

$(document).ready(function() {

    var owl = $("#slide3");

    owl.owlCarousel({

        itemsCustom : [
            [0, 3],
            [640, 4],
            [860, 5],
            [940, 6]
        ],
        navigation : false,
        pagination: false

    });
});