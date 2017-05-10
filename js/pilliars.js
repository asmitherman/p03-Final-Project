
$.getJSON( "https://asmitherman.github.io/p03-Final-Project/billionaires.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });

  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});


function load () {
  var mydata = JSON.parse(billionaires);
  alert(mydata[0].name);
}
