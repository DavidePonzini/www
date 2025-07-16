
function regions_model_selected(model_selected) {
    model['regions'] = model_selected

    d3.select('#regions-dropdown-model button')
        .text(model_selected)

    let scenarios = get_scenarios(select_model(data_orig, model_selected))

    d3.select('#regions-dropdown-scenario button')
        .classed('disabled', false)
        .text('Select Scenario')
    delete scenario['regions']

    let scenarios_list = d3.select('#regions-dropdown-scenario ul')
    scenarios_list.selectAll('li').remove()

    scenarios_list.selectAll('li').data(scenarios).enter()
        .append('li')
        .append('a')
        .classed('list-group-item list-level-0', true)
        .attr('scenario', d => d)
        .text(d => d)
        .on('click', function () {
            let scenario = d3.select(this).attr('scenario')
            regions_scenario_selected(scenario)
        })

    display_variables('regions', [])

    set_center_rigth_panes_visibility('regions', false)
}


function regions_scenario_selected(scenario_selected) {
    scenario['regions'] = scenario_selected

    d3.select('#regions-dropdown-scenario button')
        .text(scenario_selected)

    let data_model = select_model(data_orig, model['regions'])
    let data_scenario = select_scenario(data_model, scenario['regions'])
    let data_no_world = remove_region(data_scenario, 'World')
    let variables = get_variables(data_no_world, 0)

    display_variables('regions', variables, regions_variable_selected)

    set_center_rigth_panes_visibility('regions', false)
}

function regions_variable_selected(button) {
    variable_selected(button, 'regions', regions_variable_selected)
}

function play_animation() {
    if (year['regions'] === 2100)
        return;

    stop_anim = false
    hide_preloader = true

    d3.select('#play-animation .play')
        .property('hidden', true)
    d3.select('#play-animation .stop')
        .property('hidden', false)

    animation()
}

function animation() {
    if (year['regions'] === 2100 || stop_anim) {
        stop_animation()
        return
    }

    let y = Math.max(2010, Math.min(year['regions'] + 10, 2100))

    change_year('regions', y, function() {
        d3.select('#regions-slider .slider').node()
            .stepUp()

        setTimeout(animation, 1000)
    })
}

function stop_animation() {
    stop_anim = true
    hide_preloader = false

    d3.select('#play-animation .stop')
        .property('hidden', true)
    d3.select('#play-animation .play')
        .property('hidden', false)
}
