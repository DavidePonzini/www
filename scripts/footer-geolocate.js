$(document).ready(function() {
    $.ajax({
        url: `https://ipinfo.io/json`,
        success: show_ip_location,
        error: console.error
    });
})

function show_ip_location(data) {
    // data = JSON.parse(data);

    $('#footer-ip').text(data['ip'])
    $('#footer-location').text(`${data['city']}, ${data['region']} - ${data['country']}`);
    
    let loc = $('<a></a>');
    loc.prop('href', `https://www.google.com/maps/@${data['loc']}`);
    loc.text(data['loc']);

    $('#footer-loc').append(loc);
}
