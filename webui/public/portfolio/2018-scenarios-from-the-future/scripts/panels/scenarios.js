function scenarios_model_selected(button) {
    d3.select('#pane-scenarios').selectAll('button')
        .classed('selected', false)

    let selection = d3.select(button)
    selection
        .classed('selected', true)

    model['scenarios'] = selection.attr('scenario')

    set_center_rigth_panes_visibility('scenarios', false)
    current_level['scenarios'] = 0

    let data_scenario = select_model(data_orig, model['scenarios'])
    let variables = get_variables(data_scenario, 0)

    display_variables('scenarios', variables, scenarios_variable_selected)
}


function scenarios_variable_selected(button) {
    variable_selected(button, 'scenarios', scenarios_variable_selected)
}
