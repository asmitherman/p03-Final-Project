

function load(){
  $.getJSON( "https://asmitherman.github.io/p03-Final-Project/js/billionaires.json", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
      items.push( "<li id='" + key + "'>" + val + "</li>" );
    });

  //   $( "<ul/>", {
  //     "class": "my-new-list",
  //     html: items.join( "" )
  //   }).appendTo( "body" );
  // });
  // JSONArray obj = newASONArray(items.toString());
  for(int i=0; i<items.lenth();i++) {
    JSONObject jsonobj = items.getJSONObject(i);
    document.GetElementById("bill").innerHTML = jsonobj.getString("name");
    document.GetElementById("company").innerHTML = jsonobj.getString("company.name");
  }
    // String comp_name = jsonobj.getString("company.name");
  }
}
