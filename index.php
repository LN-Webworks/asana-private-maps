<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
  <!-- <script src="https://script.google.com/macros/library/d/110f1SGIhvZsuA0wVBnLKORdfIUquw4tG8Pv6B0Bd3yNnPEjiaziSUBip/3" type="application/javascript"></script> -->
</head>

<body>

  <div class="container ">
    <div class="card 1 ">
      <div class="card_image"> <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> </div>
      <div class="card_title title-white">
        <p>Authenticate with Asana</p>
        <a href="https://app.asana.com/-/oauth_authorize?response_type=code&client_id=1202551777672636&redirect_uri=https%3A%2F%2Fseminary-tools.000webhostapp.com%2Fdamian%2F&state=null" class="btn btn-primary text-center mt-5"> Click </a>
      </div>
    </div>
  </div>


  <script src='./asana-min.js'></script>
  <script src='./login.js'></script>

  <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js" integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2" crossorigin="anonymous"></script>


 <style>
    body {
  background: url(https://i.redd.it/b3esnz5ra34y.jpg),
    rgba(19, 70, 6, 0.7);
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: multiply;
  }
    .cards-list {
      z-index: 0;
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }

    .card {
      margin: 30px auto;
      width: 500px;
      height: 300px;
      border-radius: 40px;
      box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25), -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
      cursor: pointer;
      transition: 0.4s;
    }

    .card .card_image {
      width: inherit;
      height: inherit;
      border-radius: 40px;
    }

    .card .card_image img {
      width: inherit;
      height: inherit;
      border-radius: 40px;
      object-fit: cover;
    }

    .card .card_title {
      text-align: center;
      border-radius: 0px 0px 40px 40px;
      font-family: sans-serif;
      font-weight: bold;
      font-size: 30px;
      margin-top: -80px;
      height: 40px;
    }

    .card:hover {
      transform: scale(0.9, 0.9);
      box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
        -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
    }

    .title-white {
      color: white;
    }

    .title-black {
      color: black;
    }

    @media all and (max-width: 500px) {
      .card-list {
        /* On small screens, we are no longer using row direction but column */
        flex-direction: column;
      }
    }


    /*
.card {
  margin: 30px auto;
  width: 300px;
  height: 300px;
  border-radius: 40px;
  background-image: url('https://i.redd.it/b3esnz5ra34y.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-repeat: no-repeat;
box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
  transition: 0.4s;
}
*/
  </style>
</body>

</html>