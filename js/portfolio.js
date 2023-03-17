$(function () {
    var pageOption = {
        navigation: {
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
            $('.section').eq(nextIndex - 1).find('.tab_case .tab_con li').eq(0).addClass('on');
            $('.section').eq(nextIndex - 1).find('.tab_case .tab_menu li').eq(0).addClass('on');

            $('.tab_case .tab_menu li button').on('click', function () {
                var idx = $(this).parent().index();
                console.log(idx);

                $('.section').eq(nextIndex - 1).find('.tab_case .tab_con li').removeClass('on');
                $('.section').eq(nextIndex - 1).find('.tab_case .tab_con li').eq(idx).addClass('on');

                $(this).parent().addClass('on').siblings().removeClass('on');
            })
        },
        afterLoad: function (anchorLink, index) {
            console.log(index)
            $('.section').eq(index - 1).addClass('on').siblings().removeClass('on');
            if (index < 2 || index > 5) {
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
    // header

})