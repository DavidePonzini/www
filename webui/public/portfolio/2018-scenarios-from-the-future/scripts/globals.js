var scenario = {}
var model = {}
var region = {}
var variables = {}
var year = {
    'regions': 2010
}

var current_level = {}

var chart = {
    'models': 'heatmap',
    'scenarios': 'heatmap',
    'regions': 'heatmap'
}

var colors = {
    'models': {
        'AIM/CGE': '#990000',           // red
        'GCAM4': '#009900',             // green
        'IMAGE': '#e6e600',             // yellow
        'MESSAGE-GLOBIOM': '#0040ff',   // blue
        'REMIND-MAGPIE': '#9900cc',     // purple
        'WITCH-GLOBIOM': '#ff751a'      // orange
    },
    'scenarios': {
        'SSP1': '#990000',              // red
        'SSP2': '#009900',              // green
        'SSP3': '#e6e600',              // yellow
        'SSP4': '#0040ff',              // blue
        'SSP5': '#ff751a'               // orange
    },
    'regions': {
        'World': '#9900cc',             // purple
        'R5.2ASIA': '#009900',          // green
        'R5.2MAF': '#e6e600',           // yellow
        'R5.2LAM': '#0040ff',           // blue
        'R5.2REF': '#990000',           // red
        'R5.2OECD': '#ff751a'           // orange
    }
}

var colors_map = {
    'min': '#600000',   // dark-green
    'max': '#ffff40'    // cyan
}

var colors_heatmap = {
    'min': '#200000',   // brown
    'max': '#ffff30'    // `dirty` yellow
}

var ids = {
    'models': {
        'AIM/CGE': 0,
        'GCAM4': 1,
        'IMAGE': 2,
        'MESSAGE-GLOBIOM': 3,
        'REMIND-MAGPIE': 4,
        'WITCH-GLOBIOM': 5,
    },
    'scenarios': {
        'SSP1': 1,
        'SSP2': 2,
        'SSP3': 3,
        'SSP4': 4,
        'SSP5': 5
    },
    'regions': {
        'World': 0,
        'R5.2ASIA': 1,
        'R5.2LAM': 2,
        'R5.2MAF': 3,
        'R5.2REF': 4,
        'R5.2OECD': 5
    }
}

var stop_anim = true
var hide_preloader = false