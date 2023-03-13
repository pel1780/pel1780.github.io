$(function () {
    $('.main').fullpage({
        anchors: ['main', 'portfolio01', 'portfolio02', 'portfolio03', 'portfolio04', 'portfolio05'],
    })

    $('.mopen').on('click', function () {
        $(this).toggleClass('on');
    })
})