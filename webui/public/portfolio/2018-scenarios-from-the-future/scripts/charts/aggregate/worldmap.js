let hover_fill = '#1d7713'

let has_map = {}

let width = 1920
let height = width / 2

let worldmap_pad = {
    'l': 20,
    'r': 20,
    't': 20,
    'b': 30
}

let topo

function create_map(panel, data, single_year, cb, clear = true) {
        set_preloader_visibility(true)
        setTimeout(() => create_map_cb(panel, data, single_year, cb, clear), 5)
}

function create_map_cb(panel, data, single_year, cb, clear) {
    if (clear)
        clear_chart(panel)
    
    set_timeslider_visibility(panel, true)

    let map = d3.select(`#${panel}-chart`)
    if (!topo) {
        let topo_simplified = topojson.simplify(topojson.presimplify(world), 1)
        topo = topojson.feature(topo_simplified, topo_simplified.objects.countries)
    }
    let bounds = map.node().getBoundingClientRect()
    let projection = d3.geoEquirectangular().fitSize([bounds.width, bounds.height], topo)
    let path = d3.geoPath()
        .projection(projection)

    let all_data = get_all_values(data)
    if (single_year)
        all_data = all_data.filter(d => d.year === +year[panel])

    let min = d3.min(all_data, d => d.value)
    let max = d3.max(all_data, d => d.value)

    let color_scale = d3.scaleLinear()
        .domain([min, max])
        .range([d3.rgb(colors_map.min), d3.rgb(colors_map.max)])
    
    if (has_map[panel]) {
        map.selectAll('.grat')
            .style('visibility', 'visible')

        map.selectAll('.countries')
            .style('visibility', 'visible')
            .on('mouseover', function (d) {
                d3.select(this).style('fill', hover_fill)

                let x = d3.event.pageX
                let y = d3.event.pageY

                let region = world_regions[d.id]
                let text

                let data_region = select_region(data, region)[0]
                if (data_region === undefined)
                    text = 'No data available'
                else
                    text = `${region}: ${data_region[year[panel]]}`

                set_tooltip(text, x, y)
            })
            .on('mouseout', function () {
                    hide_tooltip()

                    d3.select(this).style('fill',
                        function (d) {
                            let region = world_regions[d.id]

                            let data_region = select_region(data, region)[0]
                            if (data_region === undefined)
                                return undefined
                            return color_scale(data_region[year[panel]])
                        })
                })
    } else {
        let grat = d3.geoGraticule()
        map.selectAll('path.grat').data([grat()]).enter()
            .append('path')
            .classed('grat', true)
            .classed('map', true)
            .attr('d', path)

        map.selectAll('path').data(topo.features).enter()
            .append('path')
            .attr('d', path)
            .classed('countries', true)
            .classed('map', true)
            .on('mouseover', function(d) {
                d3.select(this).style('fill', hover_fill)

                let x = d3.event.pageX
                let y = d3.event.pageY

                let region = world_regions[d.id]
                let text

                let data_region = select_region(data, region)[0]
                if (data_region === undefined)
                    text = 'No data available'
                else {
                    let val = data_region[year[panel]]
                    text = `${region}: ${format_number(val)}`
                }

                d3.select('#tooltip')
                    .html(text)
                    .style('opacity', .9)
                    .style('left', x + 'px')
                    .style('top', y + 'px')
            })
            .on('mouseout', function () {
                d3.select('#tooltip').style('opacity', 0)

                d3.select(this).style('fill',
                    function(d) {
                        let region = world_regions[d.id]

                        let data_region = select_region(data, region)[0]
                        if (data_region === undefined)
                            return undefined

                        return color_scale(data_region[year[panel]])
                    })
            })

        has_map[panel] = true
    }

    let selection = map.selectAll('path').data(topo.features)

    if (clear) {
        selection
            .style('fill',
                function(d) {
                    let region = world_regions[d.id]

                    let data_region = select_region(data, region)[0]

                    if (data_region === undefined)
                        return undefined

                    return color_scale(data_region[year[panel]])
                })
    } else {    // changing year for all_years_map, add transition
        selection
            .transition().duration(1000)
            .style('fill',
                function(d) {
                    let region = world_regions[d.id]

                    let data_region = select_region(data, region)[0]

                    if (data_region === undefined)
                        return undefined

                    return color_scale(data_region[year[panel]])
                })
    }
    selection.enter()
        .append('path')
        .attr('d', path)
        .classed('countries', true)
        .style('fill', function (d) {
            let region = world_regions[d.id]

            let data_region = select_region(data, region)[0]

            if (data_region === undefined)
                return undefined

            return color_scale(data_region[year[panel]])
        })
        .on('click', d => console.log(d.id, world_regions[d.id]))

    let width = bounds.width - worldmap_pad.l - worldmap_pad.r
    let height = bounds.height - worldmap_pad.t - worldmap_pad.b
    
    create_legend_gradient(panel, map, worldmap_pad.l, height, width, color_scale, min, max, data[0].UNIT)

    set_preloader_visibility(false)

    if (cb)
        cb()
}
