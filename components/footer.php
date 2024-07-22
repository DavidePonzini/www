<div class="footer">
    <div class="container">
        <div class="center monospace">
            Website developed by Davide Ponzini.
        </div>

        <!-- Social -->
        <div class="center">
            <a href="https://github.com/DavidePonzini" class="bi bi-github social social-github"></a>
            <a href="mailto:ponzidav@altervista.org" class="bi bi-envelope-at social social-email"></a>
        </div>

        <!-- Donations -->
        <div class="center">
            <a class="social-donation" href="https://www.paypal.me/davideponzini95">    
                <i class="fa-solid fa-martini-glass-citrus"></i>
                Buy me a drink!
                <i class="fa-solid fa-martini-glass-citrus"></i>
            </a>
        </div>

        <!-- User device info -->
        <div class="right monospace">
            <br>
            <i><abbr title="Required by web server to send back response to your device">IP Address</abbr>: <span id="footer-ip"><?php echo $_SERVER['REMOTE_ADDR']; ?></span></i><br>
            <i><abbr title="Derived from IP address">Location</abbr>: <span id="footer-location"></span></i><br>
            <i><abbr title="Derived from IP address">> Coordinates</abbr>: <span id="footer-loc"></span></i><br>
            <?php if (isset($_SERVER['HTTP_SEC_CH_UA_PLATFORM'])) echo '<i>OS: <abbr title="Sent automatically by your device">' . trim($_SERVER['HTTP_SEC_CH_UA_PLATFORM'], '"') . '</abbr></i><br>'; ?>
        </div>

        <!-- Privacy Policy -->
        <!--
        <hr>
        <div class="center">
            <a href="https://www.iubenda.com/privacy-policy/51020868" rel="noreferrer nofollow" target="_blank">Privacy Policy</a> - <a href="#" role="button" class="iubenda-advertising-preferences-link">Personalizza tracciamento pubblicitario</a>
        </div>
        -->
    </div>
</div>

<!-- Boostrap -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

<!-- jQuery -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

<!-- Advertisements -->
<?php include('../components/ads_banner.html'); ?>

<!-- Geolocate -->
<script src="/scripts/footer-geolocate.js"></script>
