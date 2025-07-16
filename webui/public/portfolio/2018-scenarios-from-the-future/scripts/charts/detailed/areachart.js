let area_alpha = '10'

function create_areachart(panel, data) {
    let scales = create_axis(panel, data)

    let svg = d3.select(`#${panel}-chart`)

    data.forEach(d => create_area(panel, svg, d, scales[0], scales[1]))

    create_linechart(panel, data)
}


function create_area(panel, svg, data, x_scale, y_scale) {
    let values = get_values(data)

    let generator = d3.area()
        .x(d => x_scale(d.year))
        .y0(svg.node().getBoundingClientRect().height - ypad_b)
        .y1(d => y_scale(d.value))

    var path = generator(values);

    svg.append('path')
        .attr('d', path)
        .style('fill', get_color(panel, data) + area_alpha)
        //.style('stroke', () => get_color(panel, data))
        //.style('stroke-width', '2px')
}