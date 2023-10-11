$(document).ready(function() {
    // update all initial positions (in case page has already been scrolled)
    update_parallax();

    // register for all future updates
    $(document).on('scroll', update_parallax);
});

/**
 * Update position for all parallax elements
 */
function update_parallax() {
    let elems = $('.parallax-scroll');
        
    for (let elem of elems)
        update_parallax_element(elem);
}

/**
 * Update position for a single parallax element
 * 
 * @param elem the element to update
 */
function update_parallax_element(elem) {
    elem = $(elem);

    let coeff = elem.attr('parallax-scroll-speed');
    let window_scroll = $(document).scrollTop();

    let is_fixed = elem.css("position") === "fixed";

    let offset = window_scroll * (is_fixed ? -coeff : (1 - coeff));

    elem.css({'transform' : `translateY(${offset}px)`});
}