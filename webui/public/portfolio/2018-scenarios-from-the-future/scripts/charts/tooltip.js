
function set_tooltip(text, x, y) {
    d3.select('#tooltip')
        .html(text)
        .style('opacity', .9)
        .style('left', x + 'px')
        .style('top', y + 'px')
}

function hide_tooltip() {
    d3.select('#tooltip').style('opacity', 0)
}
