
function load(){
  $.getJSON( "https://asmitherman.github.io/p03-Final-Project/js/billionaires.json", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
      items.push( "<li id='" + key + "'> <a class=\"content-title\">"
      + val.name + "<div class=\"content\"> <p>" + val.type + "</p> </div> </li>");
     });

    $( "<ul/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( "body" );
  });
  // JSONArray obj = newASONArray(items.toString());
  // for(var i=0; i<items.lenth();i++) {
  //   items[i];
    // document.GetElementById("bill").innerHTML = jsonobj.getString("name");
    // document.GetElementById("company").innerHTML = jsonobj.getString("company.name");
  }
    // String comp_name = jsonobj.getString("company.name");
  // }
