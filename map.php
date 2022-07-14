<html>
  <head>
    <title>Marker Labels</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <!-- playground-hide -->
    <script>
      const process = { env: {} };
      process.env.GOOGLE_MAPS_API_KEY =
        "AIzaSyCkDxnqLysToQayjnf1xAwJyruISAxfnO0";
        // AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg
    </script>
    <!-- <script src="https://script.google.com/macros/library/d/110f1SGIhvZsuA0wVBnLKORdfIUquw4tG8Pv6B0Bd3yNnPEjiaziSUBip/10.gs" type="application/javascript"></script> -->
    <!-- playground-hide-end -->

    <link rel="stylesheet" type="text/css" href="./style.css" />
    <script type="module" src="./index.js"></script>
  </head>
  <body>
    <div id="map"></div>
    
    <!--
        AIzaSyDftISZC2XuGPIyphuSA_3Pus937W7ppPY 
     The `defer` attribute causes the callback to execute after the full HTML
     document has been parsed. For non-blocking uses, avoiding race conditions,
     and consistent behavior across browsers, consider loading using Promises
     with https://www.npmjs.com/package/@googlemaps/js-api-loader.
    -->
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDftISZC2XuGPIyphuSA_3Pus937W7ppPY&callback=initMap&v=weekly"
      defer
      
    ></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  </body>
</html>