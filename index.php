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
    <?php include('components/policies_head.php'); ?>

    <!-- Only on this page -->
    <style>
        .bg1 {
            background-image: url(res/Blog-Thumbnail_Programming-in-a-Low-Code-World.png);
        }

        .bg2 {
            background-image: url(res/Blog-Thumbnail_Programming-in-a-Low-Code-World.png);
        }
    </style>
</head>
<body>
    <div class="parallax bg1" style="height: 80vh"></div>

    <!-- Navbar -->
    <?php include('components/navbar.php'); ?>
    
    <div class="container">
        <div class="content-tab">
            <h1>Quick links</h1>
            <div class="row center" id="links">
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
                        <img class="card-img-top" src="res/Blog-Thumbnail_Programming-in-a-Low-Code-World.png">
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

    <div class="parallax bg2" style="height: 80px"></div>

    <div class="container">
        <div class="content-tab">
            <h1>Content</h1>
            <div class="row center" id="links">
                <div class="col"></div>
                <div class="col-lg">
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="res/Blog-Thumbnail_Programming-in-a-Low-Code-World.png">
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

    <?php include('components/footer.php'); ?>

    <!-- Boostrap -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
</body>
</html>