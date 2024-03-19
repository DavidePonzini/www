<?php require_once('php/functions.php'); ?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>-- PonziDav --</title>

    <!-- Imports -->
    <?php include('components/imports.html'); ?>

    <!-- Policies -->
    <?php include('components/head_policies.html'); ?>

    <!-- Only on this page -->
    <style>
        #logo-eggsorcist {
            background-image: url(res/eggsorcist-logo.png);
            background-repeat: no-repeat;
        }

        #logo-bush {
            background-image: url(res/logo-bush.png);
        }

        #logo-sun {
            background-image: url(res/logo-sun.png);
            background-position: top right;
            background-repeat: no-repeat;
        }

        #logo-bg {
            background-image: url(res/book-letters.jpg);
        }

        #logo-bg-shade {
            background-color: rgba(0,0,0,.6);
        }
    </style>
</head>
<body>
    <div class="header bg-image">
	<!-- <div id="logo-bg" class="logo bg-image parallax-scroll" parallax-scroll-speed=".2"></div> -->
        <div id="logo-bg" class="logo bg-image parallax-scroll" parallax-scroll-speed=".75"></div>
        <!-- <div id="logo-bg-shade" class="logo"></div> -->
        <!-- <div id="logo-sun" class="logo parallax-scroll" parallax-scroll-speed=".5"></div> -->
        <!-- <div id="logo-bush" class="logo parallax-scroll" parallax-scroll-speed=".8"></div> -->
        <!-- <div id="logo-eggsorcist" class="logo parallax-scroll" parallax-scroll-speed=".62"></div> -->
    </div>

    <!-- Navbar -->
    <?php include('components/navbar.html'); ?>

    <div class="parallax" style="background-image: url(/res/server-bg.png)">
        <div class="container">
            <div class="content-tab">
                <h1>Quick links</h1>
                <div class="row center">
                    <div class="col-lg links">
                        <a href="https://it.altervista.org/cplogin.php" class="card">
                            <img class="card-img-top" src="res/altervista-logo.png">
                            <div class="card-body">
                                <h5 class="card-title">Control Panel</h5>
                                <p class="card-text">Altervista Control Panel.</p>
                                <span class="btn btn-primary">Open</span>
                            </div>
                        </a>
                        <a href="utils" class="card">
                            <img class="card-img-top" src="res/html.jpg">
                            <div class="card-body">
                                <h5 class="card-title">Utilities</h5>
                                <p class="card-text">Web development utilities.</p>
                                <span href="utils" class="btn btn-primary">Open</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="separator">
        <?php include('components/ads_banner.html'); ?>
    </div>

    <div class="parallax" style="background-image: url(/res/eggsorcist.png)">
        <div class="container">
            <div class="content-tab">
                <h1>Content</h1>
                <div class="row center">
                    <div class="col-lg links">
                        <a href="portfolio" class="card">
                            <img class="card-img-top" src="res/eggsorcist.png">
                            <div class="card-body">
                                <h5 class="card-title">Portfolio</h5>
                                <p class="card-text">Showcase of websites I developed.</p>
                                <span class="btn btn-primary">Open</span>
                            </div>
                        </a>
                        <a href="qualita_passione" class="card">
                            <img class="card-img-top" src="qualita_passione/res/Pizza-3007395.jpg">
                            <div class="card-body">
                                <h5 class="card-title">Qualità e Passione</h5>
                                <p class="card-text">Menu digitale, in corso di sviluppo.</p>
                                <span class="btn btn-primary">Open</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="separator">
        <?php include('components/ads_banner.html'); ?>
    </div>

    <?php include('components/footer.php'); ?>

    <!-- Custom -->
    <script src="/scripts/parallax.js"></script>
</body>
</html>
