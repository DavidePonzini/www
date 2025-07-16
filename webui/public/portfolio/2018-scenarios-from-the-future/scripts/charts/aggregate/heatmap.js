let heatmap_pad = {
    'l': 150,
    'r': 20,
    't': 20,
    'b': 30
}


function create_heatmap(panel, data, cb, clear=true) {
    if (clear)
        clear_chart(panel)

    set_timeslider_visibility(panel, false)

    let svg = d3.select(`#${panel}-chart`)
    let bounds = svg.node().getBoundingClientRect()

    let years = [2010, 2020, 2030, 2040, 2050, 2060, 2070, 2080, 2090, 2100]

    let domain

    switch (panel) {
    case 'models':
        domain = get_models(data)
        break
    case 'scenarios':
        domain = get_scenarios(data)
        break
    case 'regions':
        domain = get_regions(data)
        break
    default:
        domain = []
    }

    let width = bounds.width - heatmap_pad.l - heatmap_pad.r
    let height = bounds.height - heatmap_pad.t - heatmap_pad.b
    let grid_size = {
        'x': Math.floor(width / years.length),
        'y': Math.floor(height / domain.length)
    }

    remove_items(panel, data, svg, ['cell'])

    svg.selectAll('.label-domain').remove()
    let labels_domain = svg.selectAll('.label-domain').data(domain)

    labels_domain.enter()
        .append('text')
            .text(d => d)
            .attr('x', heatmap_pad.l - 20 - 5)
            .attr('y', (d, i) => i * grid_size.y + heatmap_pad.t + grid_size.y * 0.5 + 4)
            .attr('height', height / domain.length)
            .style('text-anchor', 'end')
            .style('font-size', '12px')
        .classed('label-domain', true)
    labels_domain.enter()
        .append('rect')
            .attr('x', heatmap_pad.l - 20)
            .attr('y', (d, i) => i * grid_size.y + heatmap_pad.t + grid_size.y * 0.5 - 6)
            .attr('height', 12)
            .attr('width', 12)
            .style('fill', d => colors[panel][d])
            .classed('label-domain', true)

    let labels_years = svg.selectAll('.label-year').data(years)

    labels_years.enter()
        .append('text')
        .text(d => d)
        .attr('x', (d, i) => i * grid_size.x + heatmap_pad.l + grid_size.x * 0.5)
        .attr('y', heatmap_pad.t - 3)
        .style('text-anchor', 'middle')
        .classed('label-year', true)

    let cell_offset = {
        'x': 3,
        'y': 3
    }

    let all_values = get_all_values(data)
    let min = d3.min(all_values, d => d.value)
    let max = d3.max(all_values, d => d.value)

    let color_scale = d3.scaleLinear()
        .domain([min, max])
        .range([d3.rgb(colors_heatmap.min), d3.rgb(colors_heatmap.max)])

    for (let i = 0; i < domain.length; i++) {
        let id = get_id(panel, data[i])
        let selection = svg.selectAll(`.cell-${id}`).data(get_values(data[i]))

        selection
            .on('mouseover', function (d) {
                let x = d3.event.pageX
                let y = d3.event.pageY

                let text = `Value: ${format_number(d.value)}`

                set_tooltip(text, x, y)
            })
            .on('mouseout', hide_tooltip)
            .transition().duration(500)
            .attr('y', i * grid_size.y + heatmap_pad.t + cell_offset.y / 2)
            .attr('height', grid_size.y - cell_offset.y)
            .attr('fill', d => color_scale(d.value))
            .attr('stroke', d => d3.rgb(color_scale(d.value)).darker())
            

        selection.enter()
            .append('rect')
            .attr('x', (d, i) => i * grid_size.x + heatmap_pad.l + cell_offset.x / 2)
            .attr('y', i * grid_size.y + heatmap_pad.t + cell_offset.y / 2)
            .attr('width', grid_size.x - cell_offset.x)
            .attr('height', grid_size.y - cell_offset.y)
            .attr('fill', d => color_scale(d.value))
            .attr('stroke', d => d3.rgb(color_scale(d.value)).darker())
            .classed(`cell-${id}`, true)
            .classed('heatmap-cell', true)
            .on('mouseover', function(d) {
                let x = d3.event.pageX
                let y = d3.event.pageY

                let text = `Value: ${format_number(d.value)}`

                set_tooltip(text, x, y)
            })
            .on('mouseout', hide_tooltip)

        selection.exit()
            .remove()
    }

    create_legend_gradient(panel, svg, heatmap_pad.l, height, width, color_scale, min, max, data[0].UNIT)

    if (cb)
        cb()
}

