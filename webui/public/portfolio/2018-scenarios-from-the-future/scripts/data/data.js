let filename = 'data/data.csv'

var data_orig

var world
var world_regions

function select_model(dataset, model) {
    return dataset.filter(d => model === undefined || d.MODEL === model)
}


function select_scenario(dataset, scenario) {
    return dataset.filter(d => scenario === undefined || d.SCENARIO === scenario)
}


function remove_region(dataset, region) {
    return dataset.filter(d => d.REGION !== region)
}

/**
 * @param variables List of variables to select.
 *                  Missing values will take all values from that level.
 *                  To take a generic category use empty string for next category
 */
function select_variables(dataset, variables) {
    function checkVariable(d, value) {
        if (value === undefined)
            return true

        return d === value
    }

    return dataset.filter(d =>
        checkVariable(d.VARIABLE, variables[0]) &&
        checkVariable(d.SUB1, variables[1]) &&
        checkVariable(d.SUB2, variables[2]) &&
        checkVariable(d.SUB3, variables[3]) &&
        checkVariable(d.SUB4, variables[4]) &&
        checkVariable(d.SUB5, variables[5]))
}


/**
 * Returns whether a given dataset has any value assigned to the specified category
 */
function has_value(data, variables) {
    // use .concat(...) instead of .push(...): the latter modifies the original array
    let d = select_variables(data, variables.concat(['']))

    return d.length > 0
}

function select_region(dataset, region) {
    return dataset.filter(d => d.REGION === region)
}


function get_unique(dataset, getter) {
    return d3.map(dataset, getter).keys()
}


function get_models(dataset) {
    return get_unique(dataset, d => d.MODEL)
}


function get_scenarios(dataset) {
    return get_unique(dataset, d => d.SCENARIO)
}


function get_variables(dataset, level) {
    switch (level) {
    case 0:
        return get_unique(dataset, d => d.VARIABLE)
    case 1:
        return get_unique(dataset, d => d.SUB1)
    case 2:
        return get_unique(dataset, d => d.SUB2)
    case 3:
        return get_unique(dataset, d => d.SUB3)
    case 4:
        return get_unique(dataset, d => d.SUB4)
    case 5:
        return get_unique(dataset, d => d.SUB5)
    default:
        return []
    }

}


function select_variables_chart(dataset, variables) {
    return select_variables(dataset, variables.concat(['']))
    
}

function get_category(datum) {
    return [datum.VARIABLE, datum.SUB1, datum.SUB2, datum.SUB3, datum.SUB4, datum.SUB5]
}


function get_year(data, y) {

}


function get_values(datum) {

    return [
        { 'year': 2010, 'value': datum[2010] },
        { 'year': 2020, 'value': datum[2020] },
        { 'year': 2030, 'value': datum[2030] },
        { 'year': 2040, 'value': datum[2040] },
        { 'year': 2050, 'value': datum[2050] },
        { 'year': 2060, 'value': datum[2060] },
        { 'year': 2070, 'value': datum[2070] },
        { 'year': 2080, 'value': datum[2080] },
        { 'year': 2090, 'value': datum[2090] },
        { 'year': 2100, 'value': datum[2100] }
    ]
}


function get_all_values(data) {
    let result = []

    data.forEach(d => result = result.concat(get_values(d)))

    return result
}


function load_data() {
    set_preloader_visibility(true)

    d3.csv(filename, function (error, csv) {
        if (error) {
            console.log(error)  //Log the error.
            throw error
        }

        csv.forEach(function (d) {
            // Convert numeric values to 'numbers'
            for (let i = 2010; i <= 2100; i += 10)
                d[i] = +d[i]
        })
        
        // Store csv data in a global variable
        data_orig = csv//.filter(d => !(get_values(d).some(d => d.value<0)))

        set_preloader_visibility(false)
    });

    d3.json('data/world.json', function (error, json) {
        if (error) {
            console.log(error);  //Log the error.
            throw error;
        }

        world = json
    });

    d3.json('data/regions.json', function (error, json) {
        if (error) {
            console.log(error);  //Log the error.
            throw error;
        }

        world_regions = json
    });
}


function set_preloader_visibility(show) {
    if (hide_preloader && show)
        return;

    d3.select('#preloader')
        .property('hidden', !show)
}


function get_regions(dataset) {
    return d3.map(dataset, d => d.REGION).keys().sort()
}


function format_number(n) {
    let number = +n
    let str = number.toString()

    if (str.length > 9)
        return number.toPrecision(7).replace(/\.0+$/, '')
    return str
}