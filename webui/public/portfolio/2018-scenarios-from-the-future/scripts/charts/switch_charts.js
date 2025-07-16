
function set_region_pane_visibility(panel, show) {
    d3.select(`#${panel}-regions`)
        .property('hidden', !show)
}


function switch_charts_to_detailed(chart, panel) {
    set_region_pane_visibility(panel, true)

    switch_charts(chart, panel)
}

function switch_charts_to_aggregate(chart, panel) {
    set_region_pane_visibility(panel, false)

    switch_charts(chart, panel)
}

function switch_charts(chart_selected, panel) {
    d3.selectAll(`#${panel}-charts .chart-icon`)
        .classed('chart-selected', false)

    let selection = d3.select(chart_selected)
    selection
        .classed('chart-selected', true)

    chart[panel] = selection.attr('type')

    create_chart(panel)
}

function region_change(label, panel) {
    d3.select(`#${panel}-regions`).selectAll('label')
        .classed('selected', false)

    let label_selection = d3.select(label)

    label_selection.classed('selected', true)

    let region_selected = label_selection.attr('region')

    region[panel] = region_selected

    update_chart(panel)
}
