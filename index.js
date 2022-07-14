/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// In the following example, markers appear when the user clicks on the map.
// Each marker is labeled with a single alphabetical character.
var myInterval;

function initMap() {
    let oauthToken = window.localStorage.getItem("oauth_token");
    console.log({ oauthToken });

    function getAddress(asanaUrl) {
        return fetch(asanaUrl, {
            headers: {
                Authorization: "Bearer " + oauthToken,
                "Content-Type": "application/json",
            },
        });
    }
    var dm = "https://app.asana.com/api/1.0/projects/1202499338093872/tasks";
    async function mapAddressHandler(url) {
        console.log(url);
        const response = await getAddress(url);
        return await response.json();
    }

    // const intervalFunc = () => {
    //   mapAddressHandler(dm)
    // }
    // setInterval(intervalFunc,6000);



    mapAddressHandler(
            "https://app.asana.com/api/1.0/projects/1202499338093872/tasks"
        )
        .then((data) => {
            console.log("setinterval---", dm);
            console.log("first api response ---", { data });
            const storeLocations = new Promise((resolve, reject) => {
                let fieldsData = [],
                    count = 0;
                for (const task of data.data) {
                    mapAddressHandler(
                        `https://app.asana.com/api/1.0/tasks/${task.gid}`
                    ).then((fields) => {
                        console.log("2 api-------", { fields });
                        var today = new Date();

                        var dd = today.getDate();
                        var mm = today.getMonth() + 1;
                        var yyyy = today.getFullYear();

                        dd < 10 ? dd = "0" + dd : dd;
                        mm < 10 ? mm = "0" + mm : mm;
                        today = yyyy + '-' + mm + '-' + dd;

                        const date1 = new Date(fields.data.due_on);
                        const date2 = new Date(today);
                        const diffTime = Math.abs(date2 - date1);
                        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                        console.log(diffDays);
                        // condition ->>  diffDays <= 7
                        if (fields.data.completed == false) {
                            const fData = fields.data;
                            fieldsData.push(fData);
                        }

                        count++;
                        count == data.data.length && resolve(fieldsData);
                    });
                }
            });
            storeLocations.then((results) => {
                addMarker(results);
            });
        })
        .catch((e) => {
            console.log({ e });
        });
}

const addMarker = (fieldsData) => {
    console.log({ fieldsData });

/**
 *  this code for custom parameter from asana
 */
    var values = [];
//     /* filter data for getting url and collection */
    for (const key in fieldsData) {
        if (fieldsData.hasOwnProperty.call(fieldsData, key)) {
            const element = fieldsData[key].custom_fields;
            let [mapLink, collectedTag] = element;
            values.push(mapLink?.display_value);
            values.push(collectedTag?.display_value);
        }
    }
    var res_data = values.filter(function (e) {return e != null;});
    console.log("res datafbfd----",res_data[1]);
//     console.log("res dta",res_data[0]);
//     // var url_map = googleLanAlt(res_data[0]);
//     // window.axios = require('axios');
//     var response_fetch = axios("https://www.google.com/maps/search/?api=1&query=".concat(res_data[0]))
//     .then((response) =>{ console.log("response from axois=--",{response})},
//     (error) => {
//       console.log(error);
//      }
//     );

//     let options = {
//       method: 'GET',
//       mode: 'cors',
//       cache: 'default',
//       credentials: 'same-origin',
//       headers: {
//         'Content-Type': 'application/json'
//      },
//       redirect: 'follow',
//       referrerPolicy: 'no-referrer'
//   }
//     var redirect = axios("https://www.google.com/maps/search/?api=1&query=".concat(res_data[0]),options)
//     .then((response) =>{ console.log(response)},
//     (error) => {
//       console.log(error);
//      }
//     );

//     var redirect = axios(res_data[0],options)
//     .then((response) =>{ response.redirected},
//     (error) => {
//       console.log(error);
//      }
//     );

    // var google_s = doGet(res_data[0]);
    // console.log("cjecking eval in js----",eval('res_data[0]'));
    // var url_fetch = eval(UrlFetchApp.fetch('http://path.to/external/javascript.js').getContentText());
    // console.log(url_fetch);
    // console.log({google_s});

    // .then( re => { console.log(re) } );
    // console.log("testing ----",response_fetch);

    /**
     * end custom code
     */
    if(res_data[1] == "To Be Collected"){
            var geocoder = new google.maps.Geocoder(),
            defaultLat = 0,
            defaultLng = 0;

        geocoder.geocode({ address: fieldsData[0].notes }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                defaultLat = results[0].geometry.location.lat();
                defaultLng = results[0].geometry.location.lng();
            }
        });

        const loadLocations = new Promise((resolve, reject) => {
            let locations = {};
            for (let index = 0; index < fieldsData.length; index++) {
                geocoder.geocode({ address: fieldsData[index].notes }, function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        locations[index] = {
                            address: fieldsData[index].notes,
                            lat: results[0].geometry.location.lat(),
                            lng: results[0].geometry.location.lng(),
                        };
                    }
                });
                index == fieldsData.length - 1 && resolve(locations);
            }
        });

        loadLocations.then((locations) => {
            setTimeout(() => {
                var map = new google.maps.Map(document.getElementById("map"), {
                    zoom: 10,
                    center: new google.maps.LatLng(defaultLat, defaultLng),
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                });

                var infowindow = new google.maps.InfoWindow(),
                    marker;

                for (const key in locations) {
                    if (Object.hasOwnProperty.call(locations, key)) {
                        console.log({ key: locations[key] });
                        marker = new google.maps.Marker({
                            position: new google.maps.LatLng(
                                locations[key].lat,
                                locations[key].lng
                            ),
                            map: map,
                        });
                        let fieldData = fieldsData[key],
                            popupHTML = `<h2>${fieldData.name}</h2>`;
                        popupHTML += `<p>${fieldData.notes}</p>`;
                        popupHTML += `<p>Due On: ${fieldData.due_on}</p>`;
                        popupHTML += `<p>Completed: ${fieldData.completed ? 'Yes' : 'No'}</p>`;
                        popupHTML += `<p>Description: ${fieldData.notes}</p>`;
                        popupHTML += `<p>Workspace Name: ${fieldData.workspace.name}</p>`;
                        popupHTML += `<p>Tags: ${fieldData.tags.map(tag => tag.name)}</p>`;

                        google.maps.event.addListener(
                            marker,
                            "click",
                            (function(marker, i) {
                                return function() {
                                    infowindow.setContent(popupHTML);
                                    infowindow.open(map, marker);
                                };
                            })(marker, key)
                        );
                    }
                }
            }, 1000);
        });
    }
    

    // marker.setMap(map);

};

const googleLanAlt = (url) => {

    let response =  fetch(`${url}&key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg`).then((e) => {console.log(e); return e;});
                  // .then(data =>{
                  //   console.log("hdvjh",data);
                  //   // return data;
                  // })
    console.log("call other function for google---", response.then((d)=>{console.log("-----cg-",d)}));
}

// <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
window.initMap = initMap;