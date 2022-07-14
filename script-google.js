function doGet(e) {
    var value= myFunction();
    console.log(value);
    var params = JSON.stringify(value);
    return HtmlService.createHtmlOutput(params);
  }
  
  function myFunction() {
    var response = UrlFetchApp.fetch('https://goo.gl/maps/xTUerhF6nS7ghir19',{followRedirects: false});
    var longUrl  = decodeURIComponent(response.getHeaders()['Location']);
    var matches  = longUrl.match(/@([0-9]?[0-9]\.[0-9]*),([0-9]?[0-9]\.[0-9]*)/);
    var regex    = new RegExp('@(.*),(.*),');
    var lat_long_match = longUrl.match(regex);
    var lat   = lat_long_match[1];
    var long  = lat_long_match[2];
    var data  = [lat,long];
    return data;
    // var res = localStorage.setItem("data-map", lat);
  
  const userProperties = PropertiesService.getUserProperties()
  userProperties.setProperty('data-map-lat', lat)
  userProperties.setProperty('data-map-long', long)
  
  
  // Get the value for the user property 'DISPLAY_UNITS'.
    // const userProperties = PropertiesService.getUserProperties();
    const units = userProperties.getProperty('data-map-url');
    const long_val = userProperties.getProperty('data-map-long');
    return units;
    // console.log("units",units);
    // console.log("long_val",long_val);
  
    // // console.log(res);
    // console.log(longUrl);
    // console.log(lat);
    // console.log(long);
    // console.log(data);
    // console.log('matches',matches);
    
  
  }

// Deployment id
//AKfycbzPFNYPLq5BvXQogXwKLQyN0ogEmRtFsG1WA_6MF7W4bIq77qbVLsg7rLjWRNXmS4eXVw

//   success api script:-
//   https://script.google.com/macros/s/AKfycbzPFNYPLq5BvXQogXwKLQyN0ogEmRtFsG1WA_6MF7W4bIq77qbVLsg7rLjWRNXmS4eXVw/exec

//   library:-
//   https://script.google.com/macros/library/d/110f1SGIhvZsuA0wVBnLKORdfIUquw4tG8Pv6B0Bd3yNnPEjiaziSUBip/5

function doGet(url) {
    var req = "https://goo.gl/maps/xTUerhF6nS7ghir19"; 
    var response = UrlFetchApp.fetch(req,{followRedirects: false});
    var longUrl  = decodeURIComponent(response.getHeaders()['Location']);
    var matches  = longUrl.match(/@([0-9]?[0-9]\.[0-9]*),([0-9]?[0-9]\.[0-9]*)/);
    var regex    = new RegExp('@(.*),(.*),');
    var lat_long_match = longUrl.match(regex);
    var lat   = lat_long_match[1];
    var long  = lat_long_match[2];
    var data  = {'lat': lat,"long":long};
    console.log(req);
    console.log(url);
    var params = JSON.stringify(data);
    return HtmlService.createHtmlOutput(params);
  }
  
  // function myFunction(req) {
  //   console.log(req);
  //   var response = UrlFetchApp.fetch(req,{followRedirects: false});
  //   var longUrl  = decodeURIComponent(response.getHeaders()['Location']);
  //   var matches  = longUrl.match(/@([0-9]?[0-9]\.[0-9]*),([0-9]?[0-9]\.[0-9]*)/);
  //   var regex    = new RegExp('@(.*),(.*),');
  //   var lat_long_match = longUrl.match(regex);
  //   var lat   = lat_long_match[1];
  //   var long  = lat_long_match[2];
  //   var data  = [lat,long];
  //   return data;
  //   // var res = localStorage.setItem("data-map", lat);
  
  // const userProperties = PropertiesService.getUserProperties()
  // userProperties.setProperty('data-map-lat', lat)
  // userProperties.setProperty('data-map-long', long)
  
  
  // // Get the value for the user property 'DISPLAY_UNITS'.
  //   // const userProperties = PropertiesService.getUserProperties();
  //   const units = userProperties.getProperty('data-map-url');
  //   const long_val = userProperties.getProperty('data-map-long');
  //   return units;
  //   // console.log("units",units);
  //   // console.log("long_val",long_val);
  
  //   // // console.log(res);
  //   // console.log(longUrl);
  //   // console.log(lat);
  //   // console.log(long);
  //   // console.log(data);
  //   // console.log('matches',matches);
    
  
  // }