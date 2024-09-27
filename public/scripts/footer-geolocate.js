$(function() {
    $.ajax({
        url: `/api/my-ip.php`,
        success: show_ip_address,
        error: console.error
    });

    $.ajax({
        url: `https://ipinfo.io/json`,
        success: show_ip_location,
        error: console.error
    });
})

function show_ip_location(data) {
    // data = JSON.parse(data);

    $('#footer-location-text').text(`${data['city']}, ${data['region']} - ${data['country']}`);
    $('#footer-location').removeClass('hidden');

    let loc = $('<a></a>');
    loc.prop('href', `https://www.google.com/maps/@${data['loc']}`);
    loc.prop('target', '_blank');   // open in new tab
    loc.text(data['loc']);

    $('#footer-loc-text').append(loc);
    $('#footer-loc').removeClass('hidden');
}

function show_ip_address(data) {
    $('#footer-ip-text').text(data);
    $('#footer-ip').removeClass('hidden');
}