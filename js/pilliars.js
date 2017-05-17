
function load(){
  $.getJSON( "https://asmitherman.github.io/p03-Final-Project/js/billionaires.json", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
      items.push( "<li id='" + key + "'> <a class=\"content-title\">"
      + val.name + "<div class=\"content\"><div style=\"float:left\"> <p>Wealth: $"
       + val.wealth["worth in billions"] +" Billion" +
      "<p>Type: " + val.wealth.type + "</p>" +
      "<p> Company: " + val.company.name + "</p>" +
      "<p> Location: " + val.location.region + "</p>" +
      "</div><div style=\"float:right\"><p>Rank:  " + val.rank + "</p>" +
      "<p>Gender:  " + val.demographics.gender + "</p>" +
      "<p>Year: " + val.year + "</p>" +
      "</div>" +
      "</div> </li> <br>");

           });

    $( ".content-group").append(items.join( "" ));
  });
}
function check10(){
  $.getJSON( "https://asmitherman.github.io/p03-Final-Project/js/billionaires.json", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
      for(var i=1;i<=10;i++) {
          if(val.rank == i.toString()) {
          items.push( "<li id='row '> <a class=\"content-title\">"
          + val.name + "<div class=\"content\"><div style=\"float:left\"> <p>Wealth: $"
           + val.wealth["worth in billions"] +" Billion" +
          "<p>Type: " + val.wealth.type + "</p>" +
          "<p> Company: " + val.company.name + "</p>" +
          "<p> Location: " + val.location.region + "</p>" +
          "</div><div style=\"float:right;\"><p>Rank:  " + val.rank + "</p>" +
          "<p>Gender:  " + val.demographics.gender + "</p>" +
          "<p>Year: " + val.year + "</p>" +
          "</div> </li> <br>");
            }
          }
        });
            $( ".content-group").append(items.join( "" ));
      });
    }

function populate_category(){
  //  document.getElementById("content-group").innerHTML = "";
  $('#row').each(function() {
    $(this).remove();
});
  var radios = document.form.type;

  for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        $.getJSON( "https://asmitherman.github.io/p03-Final-Project/js/billionaires.json", function( data ) {
          var items = [];
          $.each( data, function( key, val ) {
                if(val.wealth.type.toString() == radios[i].value) {
                items.push( "<li id='" + key + "'> <a class=\"content-title\">"
                + val.name + "<div class=\"content\"><div style=\"float:left\"> <p>Wealth: $"
                 + val.wealth["worth in billions"] +" Billion" +
                "<p>Type: " + val.wealth.type + "</p>" +
                "<p> Company: " + val.company.name + "</p>" +
                "<p> Location: " + val.location.region + "</p>" +
                "</div><div style=\"float:right;\"><p>Rank:  " + val.rank + "</p>" +
                "<p>Gender:  " + val.demographics.gender + "</p>" +
                "<p>Year: " + val.year + "</p>" +
                "</div> </li> <br>");
                  }
                  });
                  $( ".content-group").append(items.join( "" ));
            });
        break;
      }
  }
  // $('.content-group').remove();
}
//
// function toggleContent() {
//    // get the clock
//    var myClock = document.getElementById('clock');
//
//    // get the current value of the clock's display property
//    var displaySetting = myClock.style.display;
//
//    // also get the clock button, so we can change what it says
//    var clockButton = document.getElementById('clockButton');
//
//    // now toggle the clock and the button text, depending on current state
//    if (displaySetting == 'block') {
//      // clock is visible. hide it
//      myClock.style.display = 'none';
//      // change button text
//      clockButton.innerHTML = 'Show clock';
//    }
//    else {
//      // clock is hidden. show it
//      myClock.style.display = 'block';
//      // change button text
//      clockButton.innerHTML = 'Hide clock';
//    }
//  }
