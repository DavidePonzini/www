<?php
    require_once('php/functions.php');
    require_once('php/session.php');
?>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.php">PonziDav</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-link <?php echo_conditional($_SERVER['PHP_SELF'] == '/index.php', "active", ""); ?>" href="/">Home</a>
                <a class="nav-link <?php echo_conditional($_SERVER['PHP_SELF'] == '/utils/index.php', "active", ""); ?>" href="/utils">Utils</a>
            </div>
        </div>
    </div>
</nav>