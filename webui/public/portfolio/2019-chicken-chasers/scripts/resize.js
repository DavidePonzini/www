function resize(elem) {
    console.log('image clicked')

    let img = $(elem)
    let isbig = img.hasClass('img-big')

    $('img.img-big').removeClass('img-big')

    if (!isbig)
        img.addClass('img-big')
}