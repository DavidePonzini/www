
function show_regions(panel, regions) {
    let region_list = d3.select(`#${panel}-regions`)
    region_list.selectAll('input')
        .property('disabled', true)
        .property('checked', false)
    region_list.selectAll('label')
        .classed('selected', false)
        .classed('region-disabled', true)

    regions.forEach(function (d) {
        let label = region_list.selectAll('label').filter(function () {
            return d3.select(this).attr('region') === d
        })

        label.classed('region-disabled', false)
        label.select('input')
            .property('disabled', false)
    })

    select_default_region(panel, regions, region_list)
}


function select_default_region(panel, regions, region_list) {
    if (regions.length === 0) {
        delete region[panel]
        return
    }

    let region_to_select

    if (regions.indexOf(region[panel]) >= 0)
        region_to_select = region[panel]
    else {
        if (regions.indexOf('World') >= 0)
            region_to_select = 'World'
        else
            region_to_select = regions[0]
    }

    let label = region_list.selectAll('label').filter(function () {
        return d3.select(this).attr('region') === region_to_select
    })

    label.classed('selected', true)
    label.select('input')
        .property('checked', true)

    region[panel] = region_to_select
}
