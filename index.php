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
        #logo {
            background-image: url(res/eggsorcist-logo.png);
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
        }
    </style>
</head>
<body>
    <div class="header">
        <div id="logo"></div>
    </div>

    <!-- Navbar -->
    <?php include('components/navbar.html'); ?>
    
    <div class="container">
        <div class="content-tab">
            <h1>Quick links</h1>
            <div class="row center links">
                <div class="col"></div>
                <div class="col-lg">
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
                <div class="col"></div>
            </div>
        </div>
    </div>

    <div class="parallax separator"></div>

    <div class="container">
        <div class="content-tab">
            <h1>Content</h1>
            <div class="row center links">
                <div class="col"></div>
                <div class="col-lg">
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="res/eggsorcist.png">
                        <div class="card-body">
                            <h5 class="card-title">Portfolio</h5>
                            <p class="card-text">Showcase of websites I developed.</p>
                            <a href="demos" class="btn btn-primary">Open</a>
                        </div>
                    </div>
                </div>
                <div class="col"></div>
            </div>
        </div>
    </div>

    <div class="parallax separator"></div>

    <?php include('components/footer.html'); ?>

    <!-- Boostrap -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
</body>
</html>