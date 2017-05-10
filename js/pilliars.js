

function load(){
  JSONArray obj = newASONArray(items.toString());
  for(int i=0; i<obj.lenth();i++) {
    JSONObject jsonobj = obj.getJSONObject(i);
    document.GetElementById("bill").innerHTML = jsonobj.getString("name");
    document.GetElementById("company").innerHTML = jsonobj.getString("company.name");
  }
    // String comp_name = jsonobj.getString("company.name");
  }
}
