
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
      "</div><div style=\"padding-left:100px\"><p>Rank:  " + val.rank + "</p>" +
      "<p>Gender:  " + val.demographics.gender + "</p>" +
      "</div>" +
      "</div> </li>");
           });

    $( ".content-group").append(items.join( "" ));
  });
}
function check10(){
  $.getJSON( "https://asmitherman.github.io/p03-Final-Project/js/billionaires.json", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
      for(var i=0;i<10;i++) {
          if(val.rank == i.toString()) {
          items.push( "<li id='row '> <a class=\"content-title\">"
          + val.name + "<div class=\"content\"><div style=\"float:left\"> <p>Wealth: $"
           + val.wealth["worth in billions"] +" Billion" +
          "<p>Type: " + val.wealth.type + "</p>" +
          "<p> Company: " + val.company.name + "</p>" +
          "<p> Location: " + val.location.region + "</p>" +
          "</div><div style=\"padding-left:100px\"><p>Rank:  " + val.rank + "</p>" +
          "<p>Gender:  " + val.demographics.gender + "</p>" +
          "</div>" +
          "</div> </li>");
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
                "</div><div style=\"padding-left:100px\"><p>Rank:  " + val.rank + "</p>" +
                "<p>Gender:  " + val.demographics.gender + "</p>" +
                "</div>" +
                "</div> </li>");
                  }
                  });
                  $( ".content-group").append(items.join( "" ));
            });
        break;
      }
  }
  // $('.content-group').remove();
}
  //   $( "<ul/>", {
  //     "class": "content-group",
  //     html: items.join( "" )
  //   }).appendTo( "body" );
  // });
  // JSONArray obj = newASONArray(items.toString());
  // for(var i=0; i<items.lenth();i++) {
  //   items[i];
    // document.GetElementById("bill").innerHTML = jsonobj.getString("name");
    // document.GetElementById("company").innerHTML = jsonobj.getString("company.name");
    // String comp_name = jsonobj.getString("company.name");
  // }
