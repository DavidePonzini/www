function move_slider(panel, val) {
    d3.select(`#${panel}-slider .year`)
        .text(val)
}


function change_year(panel, val, cb=undefined) {
    year[panel] = +val

    hide_preloader = true

    update_chart(panel, function() {
        if (cb)
            cb()

        d3.select(`#${panel}-slider .slider`)
            .attr('value', year[panel])

        d3.select(`#${panel}-slider .year`)
            .text(val)

        hide_preloader = false
    })
}

/*
Buttons + -

function change_year(panel, val) {
    year[panel] = Math.max(2010, Math.min(year[panel] + val, 2100))

    d3.select(`#${panel}-slider .year p`)
        .text(year[panel])

    d3.select(`#${panel}-slider .year .slider`)
        .attr('value', year[panel])

    create_chart(panel)
}
*/

function create_legend_gradient(panel, svg, x, y, width, color_scale, min, max, unit) {
    svg.select('defs').remove()
    svg.selectAll('.legend-gradient').remove()

    let gradient = svg.append('defs')
        .append('linearGradient')
        .attr('id', `${panel}gradient`)
        .attr('x1', '0%')
        .attr('y1', '100%')
        .attr('x2', '100%')
        .attr('y2', '100%')
        .attr('spreadMethod', 'pad')

    gradient.append('stop')
        .attr('offset', '0%')
        .attr('stop-color', color_scale(min))
        .attr('stop-opacity', 1)

    gradient.append('stop')
        .attr('offset', '100%')
        .attr('stop-color', color_scale(max))
        .attr('stop-opacity', 1)

    svg.append('rect')
        .attr('x', x + width / 6)
        .attr('y', y + 22)
        .attr('width', width * 2 / 3)
        .attr('height', 20)
        .style('fill', `url(#${panel}gradient)`)
        .classed('legend-gradient')

    svg.append('text')
        .attr('x', x + width / 6 - 10)
        .attr('y', y + 22 + 10)
        .attr('height', 20)
        .style('text-anchor', 'end')
        .classed('legend-gradient', true)
        .text(format_number(min))

    svg.append('text')
        .attr('x', x + width * 5 / 6 + 10)
        .attr('y', y + 22 + 10)
        .attr('height', 20)
        .classed('legend-gradient', true)
        .text(format_number(max))

    svg.append('text')
        .attr('x', x + width / 2)
        .attr('y', y + 22 + 10)
        .attr('height', 20)
        .style('text-anchor', 'middle')
        .classed('legend-gradient', true)
        .classed('legend-unit', true)
        .text(unit)
}
