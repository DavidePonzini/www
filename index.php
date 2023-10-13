<?php require_once('php/functions.php'); ?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>-- PonziDav --</title>

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <!-- Boostrap icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.0/font/bootstrap-icons.css">

    <!-- Custom -->
    <link rel="stylesheet" href="/styles/style.css">
    <link rel="stylesheet" href="/styles/social.css">

    <!-- Policies -->
    <?php include('components/head_policies.html'); ?>

    <!-- Only on this page -->
    <style>
        #logo-eggsorcist {
            background-image: url(res/eggsorcist-logo.png);
            background-repeat: no-repeat;
        }

        #logo-bush {
            background-image: url(res/559dd9116cbfc00560d640dc1be2bbbc-simple-bush-flat.png);
        }
        
        #logo-sun {
            background-image: url(res/87838d67f8e13ad5aeb892fc320f724f-cute-sun-flat.png);
            background-position: top right;
            background-repeat: no-repeat;
        }
    </style>
</head>
<body>
    <div class="header">
        <div id="logo-bush" class="logo parallax-scroll" parallax-scroll-speed=".8"></div>
        <div id="logo-sun" class="logo parallax-scroll" parallax-scroll-speed="0.5"></div>
        <div id="logo-eggsorcist" class="logo parallax-scroll" parallax-scroll-speed=".62"></div>
    </div>

    <!-- Navbar -->
    <?php include('components/navbar.html'); ?>
    
    <div class="parallax" style="background-image: url(/res/eggsorcist.png)">
        <div class="container">
            <div class="content-tab">
                <h1>Quick links</h1>
                <div class="row center">
                    <div class="col-lg links">
                        <div class="card" style="width: 18rem;">
                            <img class="card-img-top" src="res/Altervista_Logo_2.png">
                            <div class="card-body">
                                <h5 class="card-title">Control Panel</h5>
                                <p class="card-text">Altervista Control Panel.</p>
                                <a href="https://it.altervista.org/cplogin.php" class="btn btn-primary">Open</a>
                            </div>
                        </div>
                        <div class="card" style="width: 18rem;">
                            <img class="card-img-top" src="res/depositphotos_123336054-Code-HTML-web-programming-background.jpg">
                            <div class="card-body">
                                <h5 class="card-title">Utilities</h5>
                                <p class="card-text">Web development utilities.</p>
                                <a href="utils" class="btn btn-primary">Open</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="separator">
        <script>!function(d,l,e,s,c){e=d.createElement("script");e.src="//ad.altervista.org/js.ad/size=728X90/?ref="+encodeURIComponent(l.hostname+l.pathname)+"&r="+Date.now();s=d.scripts;c=d.currentScript||s[s.length-1];c.parentNode.insertBefore(e,c)}(document,location)</script>
    </div>

    <div class="parallax" style="background-image: url(/res/wp11420447.png)">
        <div class="container">
            <div class="content-tab">
                <h1>Content</h1>
                <div class="row center">
                    <div class="col-lg links">
                        <div class="card" style="width: 18rem;">
                            <img class="card-img-top" src="res/eggsorcist.png">
                            <div class="card-body">
                                <h5 class="card-title">Portfolio</h5>
                                <p class="card-text">Showcase of websites I developed.</p>
                                <a href="demos" class="btn btn-primary">Open</a>
                            </div>
                        </div>
                        <div class="card" style="width: 18rem;">
                            <img class="card-img-top" src="qualita_passione/res/Pizza-3007395.jpg">
                            <div class="card-body">
                                <h5 class="card-title">Qualità e Passione</h5>
                                <p class="card-text">Menu digitale, in corso di sviluppo.</p>
                                <a href="qualita_passione" class="btn btn-primary">Open</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="separator">
        <script>!function(d,l,e,s,c){e=d.createElement("script");e.src="//ad.altervista.org/js.ad/size=728X90/?ref="+encodeURIComponent(l.hostname+l.pathname)+"&r="+Date.now();s=d.scripts;c=d.currentScript||s[s.length-1];c.parentNode.insertBefore(e,c)}(document,location)</script>
    </div>

    <?php include('components/footer.html'); ?>

    <!-- Boostrap -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

    <!-- Advertisements -->
    <script>!function(d,l,e,s,c){e=d.createElement("script");e.src="//ad.altervista.org/js.ad/size=2X2/?ref="+encodeURIComponent(l.hostname+l.pathname)+"&r="+Date.now();s=d.scripts;c=d.currentScript||s[s.length-1];c.parentNode.insertBefore(e,c)}(document,location)</script>

    <!-- Custom -->
    <script src="/scripts/parallax.js"></script>
</body>
</html>