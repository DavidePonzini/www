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
        #banner {
        position: relative;
        width: 100%;
        height: calc(100vh - 56px);
        overflow: hidden;
        background: #101010;
    }

    #book {
        position: absolute;

        left: 50%;
        bottom: 300px;
        transform: translate(-50%, 0px);
        width: 300px; /* Adjust size as needed */
        z-index: 1;
    }

    #flowing-letters {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 100%;
        pointer-events: none;
    }
    </style>
</head>
<body>
    <div id="banner">
        <img id="book" src="res/book.png" alt="Book">
        <canvas id="flowing-letters"></canvas>
    </div>

    <!-- Navbar -->
    <?php include('components/navbar.html'); ?>

    <div class="parallax" style="background-image: url(/res/server-bg.png)">
        <div class="container">
            <div class="content-tab">
                <h1>Pinned</h1>
                <div class="row center">
                    <div class="col-lg links">
                    <a href="problem-decomposition/testo.pdf" class="card">
                            <img class="card-img-top" src="res/problem-decomposition.png">
                            <div class="card-body">
                                <h5 class="card-title">PCTO</h5>
                                <p class="card-text">Decomposition tool for learning computational thought</p>
                                <span class="btn btn-primary">Open</span>
                            </div>
                        </a>
                        <!-- <a href="https://it.altervista.org/cplogin.php" class="card">
                            <img class="card-img-top" src="res/altervista-logo.png">
                            <div class="card-body">
                                <h5 class="card-title">Control Panel</h5>
                                <p class="card-text">Altervista Control Panel.</p>
                                <span class="btn btn-primary">Open</span>
                            </div>
                        </a> -->
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
                        <a href="https://qualitaepassione.altervista.org/" class="card">
                            <img class="card-img-top" src="https://qualitaepassione.altervista.org/res/Pizza-3007395.jpg">
                            <div class="card-body">
                                <h5 class="card-title">Qualità e Passione</h5>
                                <p class="card-text">Menu digitale, in corso di sviluppo.</p>
                                <span class="btn btn-primary">Open</span>
                            </div>
                        </a>
                        <a href="problem-decomposition" class="card">
                            <img class="card-img-top" src="res/problem-decomposition.png">
                            <div class="card-body">
                                <h5 class="card-title">Problem decomposition</h5>
                                <p class="card-text">Decomposition tool for learning computational thought</p>
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
    <script src="/scripts/book.js"></script>
</body>
</html>
