
function update_where_am_i(panel, variables) {
    d3.select(`#${panel}-where-am-i`).text(variables.join(' > '))
}


function remove_variables_from_level(list, level) {
    list.selectAll('a').filter(function (d) {
        let item_level = d3.select(this).attr('level')
        return item_level > level
    }).remove()
}

/**
 * For a given variable, add all subvariables of level @level
 * @param panel
 * @param button
 * @param level
 * @param onclick
 */
function add_subvariables(panel, button, level, onclick) {
    //Select all the subvariables
    let data = select_variables(data_orig, variables[panel])

    switch (panel) {
    case 'models':
        data = select_scenario(data, scenario[panel])
        break
    case 'scenarios':
        data = select_model(data, model[panel])
        break
    case 'regions':
        data = select_model(data, model[panel])
        data = select_scenario(data, scenario[panel])
    }

    //Select only the subvariables one level deeper
    let vars = get_variables(data, level + 1)

    // remove empty variable -> Emissions Generic
    let idx_empty = vars.indexOf('')
    if (idx_empty >= 0)
        vars.splice(idx_empty, 1)

    let parent = d3.select(`#${panel}-variables`)

    //Remove from the visualization the variables
    remove_variables_from_level(parent, level)

    let idx = Array.from(parent.node().children).indexOf(button.node())

    vars.reverse().forEach(d =>
        parent.insert('a', `:nth-child(${idx + 2})`)
        .text(d)
        .attr('category', () => variables[panel].concat([d]))
        .attr('level', level + 1)
        .classed('list-group-item', true)
        .classed(`list-level-${level + 1}`, true)
        .on('click', function () {
            onclick(d3.select(this))
        })
    )
}

/**
 * Select a variable -> display chart -> update subvariables
 * @param button
 * @param panel
 * @param onclick
 */
function variable_selected(button, panel, onclick) {
    let vars = button.attr('category').split(',')
    update_where_am_i(panel, vars)

    //Current level is the level of the subcategory
    current_level[panel] = +button.attr('level')    // cast to number

    d3.select(`#${panel}-variables`).selectAll('a')
        .classed('selected', false)
    button.classed('selected', true)

    //Update global variable
    variables[panel] = vars

    add_subvariables(panel, button, current_level[panel], onclick)

    //If the value to filter is undefined we return the same thing
    let data_variable = select_variables_chart(data_orig, variables[panel])
    let data_model = select_model(data_variable, model[panel])
    let data_scenario = select_scenario(data_model, scenario[panel])
    let regions = get_regions(data_scenario)

    show_regions(panel, regions)
    create_chart(panel)
}

/**
 * Display variables in left bar
 * @param panel
 * @param variables
 * @param onclick
 */
function display_variables(panel, variables, onclick) {
    //Add 'a' to left bar
    let selection = d3.select(`#${panel}-variables`).selectAll('a').data(variables)

    selection
        .text(d => d)
        .classed('list-level-0', true)
        .classed('list-level-1', false)
        .classed('list-level-2', false)
        .classed('list-level-3', false)
        .classed('list-level-4', false)
        .classed('list-level-5', false)
        .classed('selected', false)
        .attr('category', d => d)
        .attr('level', 0)

    //Recursive function onclick
    selection.enter()
        .append('a')
        .text(d => d)
        .attr('category', d => d)
        .attr('level', 0)
        .classed('list-group-item', true)
        .classed(`list-level-0`, true)
        .on('click', function () {
            onclick(d3.select(this))
        })

    selection.exit()
        .remove()
}

/**
 * Each element has always the same ID in order to find data associated to it
 * @param panel
 * @param data
 * @returns {*}
 */
function get_id(panel, data) {
    switch (panel) {
    case 'models':
        return ids[panel][data.MODEL]
    case 'scenarios':
        return ids[panel][data.SCENARIO]
    case 'regions':
        return ids[panel][data.REGION]
    default:
        return undefined
    }
}