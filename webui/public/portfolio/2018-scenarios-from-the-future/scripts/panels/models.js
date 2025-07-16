function models_scenario_selected(button) {
    d3.select('#pane-models').selectAll('button')
        .classed('selected', false)

    let selection = d3.select(button)
    selection
        .classed('selected', true)

    //Set the global variable to the chosen one
    scenario['models'] = selection.attr('scenario')

    set_center_rigth_panes_visibility('models', false)
    current_level['models'] = 0

    //Filter dataset by scenario
    let data_scenario = select_scenario(data_orig, scenario['models'])
    let variables = get_variables(data_scenario, 0)

    //Populate  left bar
    display_variables('models', variables, models_variable_selected)
}


function models_variable_selected(button) {
    variable_selected(button, 'models', models_variable_selected)
}
