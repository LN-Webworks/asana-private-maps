let urlPathName = window.location.href;
let urlParams = urlPathName.split("code")[0]
const searchParams2 = new URLSearchParams(urlPathName);
let code = searchParams2.get(urlParams + "code");
console.log({code});

if (code) {
    const formData = new FormData();
    formData.append('grant_type', 'authorization_code');
    formData.append('client_id', '1202551777672636');
    formData.append('client_secret', 'e2bcd2c072fe8805d4bbf16c5415f3b3');
    formData.append('redirect_uri', 'https://seminary-tools.000webhostapp.com/damian/');
    formData.append('code', code);
    
    let data = {
        "grant_type": "authorization_code",
        "client_id": "1202551777672636",
        "client_secret": "e2bcd2c072fe8805d4bbf16c5415f3b3",
        "redirect_uri": "https://seminary-tools.000webhostapp.com/damian/",
        "code": code
      }
      
    fetch("https://app.asana.com/-/oauth_token", {
        method: 'POST', // or 'PUT'
        // headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      window.localStorage.setItem("oauth_token", data.access_token)
      window.location.href = "https://seminary-tools.000webhostapp.com/damian/map.php"
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}