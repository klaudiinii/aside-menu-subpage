// 1. Toggle Search Field


$(document).ready(function() {
    $('.btn-search').click(function() {
        $('#search').toggle();
    });
});


// 2. Toggle Aside Menu


$( '.arrow' ).click(function() {
    $( '.nav-holder' ).toggleClass('expanded');
    $( '.arrow span' ).toggleClass('rotated');
  });

