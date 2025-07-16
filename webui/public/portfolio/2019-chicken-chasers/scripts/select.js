let count = 0;

function select(elem) {
    console.log('selecting image...')

    let img = $(elem)

    let counter = $('#counter')[0]
    count = +counter.innerHTML

    if (img.hasClass('selected')) {
        img.removeClass('selected')
        count--
    }
    else {
        img.addClass('selected')
        count++
    }

    counter.innerHTML = count

    setCounterVisibility()
}

function setCounterVisibility() {
    let counter_tab = $('#counter-tab')

    if (count > 0)
        counter_tab.show()
    else
        counter_tab.hide()
}