function create_linechart(panel, data, cb, clear=true) {
    if (clear)
        clear_chart(panel)

    create_legend(panel, data)

    set_timeslider_visibility(panel, false)

    let scales = create_axis(panel, data, !clear)

    let svg = d3.select(`#${panel}-chart`)

    remove_items(panel, data, svg, ['path', 'circle'])

    data.forEach(d => create_line(panel, svg, d, scales[0], scales[1]))

    if (cb)
        cb()
}


function create_line(panel, svg, data, x_scale, y_scale) {
    let values = get_values(data)

    let generator = d3.line()
        .x(d => x_scale(d.year))
        .y(d => y_scale(d.value))

    var path = generator(values);

    let id = get_id(panel, data)

    let line = svg.selectAll(`.path-${id}`).data([data])

    line
        .transition().duration(500)
        .attr('d', path)

    line.enter()
        .append('path')
        .attr('d', path)
        .style('fill', 'none')
        .style('stroke', () => get_color(panel, data))
        .style('stroke-width', '2px')
        .classed(`path-${get_id(panel, data)}`, true)

    line.exit()
        .remove()

    let circles = svg.selectAll(`.circle-${id}`).data(get_values(data))
    
    circles
        .on('mouseover', function (d) {
            let x = d3.event.pageX
            let y = d3.event.pageY

            let text = `Value: ${format_number(d.value)}`

            set_tooltip(text, x, y)
        })
        .transition().duration(500)
        .attr('cy', d => y_scale(d.value))
        .attr('cx', d => x_scale(d.year))

    circles.enter()
        .append('circle')
        .attr('cx', d => x_scale(d.year))
        .attr('cy', d => y_scale(d.value))
        .style('fill', () => get_color(panel, data))
        .on('mouseover', function(d) {
            let x = d3.event.pageX
            let y = d3.event.pageY

            let text = `Value: ${format_number(d.value)}`

            set_tooltip(text, x, y)
        })
        .on('mouseout', hide_tooltip)
        .classed(`circle-${id}`, true)

    circles.exit()
        .remove()
}
