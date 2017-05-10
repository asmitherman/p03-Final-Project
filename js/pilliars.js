

function load(){
  // JSONArray obj = newASONArray(items.toString());
  for(int i=0; i<items.lenth();i++) {
    JSONObject jsonobj = items.getJSONObject(i);
    document.GetElementById("bill").innerHTML = jsonobj.getString("name");
    document.GetElementById("company").innerHTML = jsonobj.getString("company.name");
  }
    // String comp_name = jsonobj.getString("company.name");
  }
}
