$(function () {
    var pageOption = {
        navigation: {
            'textColor': '#a0522d',
            'bulletsColor': CSS,
        },
        menu: '.gnb ul',
        anchors: ['main', 'pf01', 'pf02', 'pf03', 'pf04', 'contact'],
        direction: 'holizental',
        afterRender: function () {
            $('.header').addClass('on');
            $('#pp-nav').addClass('on');
        },
        onLeave: function (index, nextIndex, direction) {
            console.log(index, nextIndex)

        },
        afterLoad: function (anchorLink, index) {
            console.log(index)
            if (index < 2) {
                $('.header').addClass('on');
                $('#pp-nav').addClass('on');
            } else {
                $('.header').removeClass('on');
                $('#pp-nav').removeClass('on');
            }
        },
    }

    $('.pullpageWrap').pagepiling(pageOption);

    $('.bar_case').on('click', function () {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
        if ($(this).hasClass("on")) {
            $('.header').addClass('on')
        } else if ($('.gnb ul li:nth-child(1)').hasClass("active")) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    })


    $('.gnb ul li').on('click', function () {
        $('.bar_case').removeClass('on');
        $('.gnb').removeClass('on');
    })
})