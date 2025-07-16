function create_axis(panel, data, animate) {
    let chart = d3.select(`#${panel}-chart`)

    chart.append('g')
        .attr('id', `${panel}-xAxis`)
    chart.append('g')
        .attr('id', `${panel}-yAxis`)

    let svgBounds = d3.select(`#${panel}-chart`).node().getBoundingClientRect()

    let years = [2010, 2020, 2030, 2040, 2050, 2060, 2070, 2080, 2090, 2100]

    let xScale = d3.scaleLinear()
        .domain([2010, 2100])
        .range([xpad_l + axis_offset, svgBounds.width - xpad_r])

    let xAxisGen = d3.axisBottom(xScale)
        .ticks(10)
        .tickFormat(d3.format('d'))

    let xAxis = d3.select(`#${panel}-xAxis`)
        .attr('transform', `translate(0, ${svgBounds.height - ypad_b + axis_offset})`)
        .call(xAxisGen)

/*
    xAxis.selectAll('text')
        .attr("y", 0)
        .attr("x", 9)
        .attr("dy", ".35em")
        .attr("transform", "rotate(90)")
        .style("text-anchor", "start")
*/
    let all_data = get_all_values(data)

    let yScale = d3.scaleLinear()
        .domain([d3.min(all_data, d => d.value), d3.max(all_data, d => d.value)])
        .range([svgBounds.height - ypad_b, ypad_t])

    let yAxisGen = d3.axisLeft(yScale)
        .ticks(10)
        .tickFormat(format_number)

    if (animate) {
        d3.select(`#${panel}-yAxis`)
            .attr('transform', `translate(${xpad_l - axis_offset})`)
            .transition().duration(500)
            .call(yAxisGen)
    } else {
        d3.select(`#${panel}-yAxis`)
            .attr('transform', `translate(${xpad_l - axis_offset})`)
            .call(yAxisGen)
    }

    return [xScale, yScale]
}
