var cards = {};

$.getJSON( "cards.json", function( data ) {
  cards = data;
    cards.sort(function(a, b) {
    return parseFloat(a.apr) - parseFloat(b.apr);
  });
    runHandlebars(cards);

  $('i').click(function () {
    $('.changeClass').removeClass('in');
  });
});


var runHandlebars = function (cards) {
  var theTemplateScript = $("#list-items").html() ;
  var theTemplate = Handlebars.compile(theTemplateScript);

  $('#list-wrap').append(theTemplate({
    cards:cards
  }));
};


