let xpad_l = 100
let xpad_r = 160
let xpad_legend = 20
let ypad_b = 70
let ypad_t = 20
let axis_offset = 3

let legend_unit_offset = {
    'x': 0,
    'y': 150
}


function clear_chart(panel) {
    d3.selectAll(`#${panel}-chart :not(.map)`).remove()
    d3.selectAll(`#${panel}-chart .map`).style('visibility', 'hidden')
}

var data

/**
 * Create the chart in a given panel using global variables
 * @param panel
 * @param cb: function to call after the creation of the chart
 */
function create_chart(panel, cb=undefined) {
    //Stop the animation (Choropleth) every time the chart is changed
    stop_anim = true
    hide_preloader = false
    //The preloader is now visible

    let chart_data = select_variables_chart(data_orig, variables[panel])

    switch (panel) {
    case 'models':
        chart_data = select_scenario(chart_data, scenario[panel])
        chart_data = select_region(chart_data, region[panel])
        break
    case 'scenarios':
        chart_data = select_model(chart_data, model[panel])
        chart_data = select_region(chart_data, region[panel])
        break
    case 'regions':
        chart_data = select_model(chart_data, model[panel])
        chart_data = select_scenario(chart_data, scenario[panel])
        chart_data = remove_region(chart_data, 'World')

    }

    //We can have no data for a given combination of parameters
    if (chart_data.length === 0) {
        set_center_rigth_panes_visibility(panel, false)
        return
    }

    set_center_rigth_panes_visibility(panel, true)

    let chart_type = chart[panel]

    data = chart_data

    switch (chart_type) {
        case 'linechart':
            create_linechart(panel, chart_data, cb)
            set_animation_pane_visibility(panel, false)
            break;
        case 'heatmap':
            set_animation_pane_visibility(panel, false)
            create_heatmap(panel, chart_data, cb)
            break;
        case 'worldmap':
            set_animation_pane_visibility(panel, true)
            create_map(panel, chart_data, false, cb)
            break;
        case 'worldmap_year':
            set_animation_pane_visibility(panel, false)
            //True means 'single year'
            create_map(panel, chart_data, true, cb)
            break;
    }
}

/**
 * If we update the chart that we are looking at we don't need to clear it
 * @param panel
 * @param cb
 */
function update_chart(panel, cb=undefined) {
    let chart_data = select_variables_chart(data_orig, variables[panel])

    switch (panel) {
    case 'models':
        chart_data = select_scenario(chart_data, scenario[panel])
        chart_data = select_region(chart_data, region[panel])
        break
    case 'scenarios':
        chart_data = select_model(chart_data, model[panel])
        chart_data = select_region(chart_data, region[panel])
        break
    case 'regions':
        chart_data = select_model(chart_data, model[panel])
        chart_data = select_scenario(chart_data, scenario[panel])
        chart_data = remove_region(chart_data, 'World')

    }

    if (chart_data.length === 0) {
        set_center_rigth_panes_visibility(panel, false)
        console.log('no data')
        return
    }

    set_center_rigth_panes_visibility(panel, true)

    let chart_type = chart[panel]

    data = chart_data

    switch (chart_type) {
    case 'linechart':
        create_linechart(panel, chart_data, cb, false)
        break;
    case 'heatmap':
        create_heatmap(panel, chart_data, cb, false)
        break;
    case 'worldmap':
        create_map(panel, chart_data, false, cb, false)
        break;
    case 'worldmap_year':
        create_map(panel, chart_data, true, cb, true)
        break;
    }
}

function set_timeslider_visibility(panel, visible) {
    d3.select(`#${panel}-slider`)
        .property('hidden', !visible)
}


function get_color(panel, data) {
    switch (panel) {
    case 'models':
        return colors[panel][data.MODEL]
    case 'scenarios':
        return colors[panel][data.SCENARIO]
    case 'regions':
        return colors[panel][data.REGION]
    default:
        return '#000000'
    }
}


function create_legend(panel, data) {
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

    let range = []
    domain.forEach(function(d) {
        let color = colors[panel][d]
        if (color)
            range.push(color)
    })

    var scale = d3.scaleOrdinal()
        .domain(domain)
        .range(range)

    var svg = d3.select(`#${panel}-chart`)

    let box = svg.node().getBoundingClientRect()

    svg.selectAll('.legend')
        .remove()

    svg.append('g')
        .classed('legend', true)
        .attr('transform', `translate(${box.width - xpad_r + xpad_legend}, ${ypad_t})`)
 
    var legendOrdinal = d3.legendColor()
        .shape('path', d3.symbol().type(d3.symbolSquare).size(150)())
        .scale(scale)

    svg.select('.legend')
        .call(legendOrdinal)

    svg.select('.legend')
        .append('text')
        .text('Unit:')//${data[0].UNIT}`)
        .attr('transform', `translate(${legend_unit_offset.x}, ${legend_unit_offset.y})`)
        .classed('legend-unit', true)

    svg.select('.legend')
        .append('text')
        .text(data[0].UNIT)
        .attr('transform', `translate(${legend_unit_offset.x}, ${legend_unit_offset.y + 20})`)
}


function set_center_rigth_panes_visibility(panel, show) {
    d3.select(`#pane-${panel} > .center`)
        .property('hidden', !show)

    d3.select(`#pane-${panel} > .right-bar`)
        .property('hidden', !show)
}


function set_animation_pane_visibility(panel, show) {
    if (panel !== 'regions')
        return;

    d3.select('#play-animation')
        .property('hidden', !show)
}

function remove_items(panel, data, svg, classes) {
    let all_ids = []
    for (let k in ids[panel])
        all_ids.push(ids[panel][k])

    let ids_to_keep = []

    data.forEach(d => ids_to_keep.push(get_id(panel, d)))

    all_ids.forEach(id => {
        if (ids_to_keep.indexOf(id) < 0)
            classes.forEach(c => svg.selectAll(`.${c}-${id}`).remove())
    })
}
