$(function () {
    var pageOption = {
        navigation: {
            'bulletsColor': CSS,
        },
        menu: '.gnb ul',
        anchors: ['intro', 'pf01', 'pf02', 'pf03', 'pf04', 'contact'],
        direction: 'holizental',
        afterRender: function () {
            $('.header').addClass('on');
            $('#pp-nav').addClass('on');
            $('.footer').addClass('on');
            $('.mainVisual').addClass('on');
        },
        onLeave: function (index, nextIndex, direction) {
            setTimeout(function () {
                $('.section').eq(nextIndex - 2).find('.tab_case .tab_con>li').removeClass('on');
                $('.section').eq(nextIndex).find('.tab_case .tab_con>li').removeClass('on');

                $('.section').eq(nextIndex - 2).find('.tab_case .tab_menu>li').removeClass('on');
                $('.section').eq(nextIndex).find('.tab_case .tab_menu>li').removeClass('on');
            }, 1000)

            $('.section').eq(nextIndex - 1).find('.tab_case .tab_con>li').eq(0).addClass('on');
            $('.section').eq(nextIndex - 1).find('.tab_case .tab_menu>li').eq(0).addClass('on');

            $('.tab_case .tab_menu>li button').on('click', function () {
                var idx = $(this).parent().index();

                $('.section .tab_case .tab_con>li').removeClass('on');
                $('.section').eq(nextIndex - 1).find('.tab_case .tab_con>li').eq(idx).addClass('on');

                $(this).parent().addClass('on').siblings().removeClass('on');
                if ($('.tab_con .web').hasClass('on')) {
                    img.css({ animation: `scrDown ${imgHeight / 500}s linear 1.2s forwards` });
                } else if ($('.tab_con .mo').hasClass('on')) {
                    imgNon.css({ animation: 'none' });
                }
            })

            var img = $('.section').eq(nextIndex - 1).find('.tab_case .tab_con .web img');
            var imgNon = $('.section').eq(nextIndex - 1).siblings().find('.tab_case .tab_con .web img');
            var imgHeight = img.height();
            img.css({ animation: `scrDown ${imgHeight / 500}s linear 1.2s forwards` });
            imgNon.css({ animation: 'none' });
        },
        afterLoad: function (anchorLink, index) {
            $('.section').eq(index - 1).addClass('on').siblings().removeClass('on');
            if (index < 2 || index > 5) {
                $('.header').addClass('on');
                $('#pp-nav').addClass('on');
                $('.footer').addClass('on');
            } else {
                $('.header').removeClass('on');
                $('#pp-nav').removeClass('on');
                $('.footer').removeClass('on');
            }
        },
    }

    $('.fullpageWrap').pagepiling(pageOption);

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
    function bgColor() {
        var color =
            ['#ad9560', '#082b26', '#444444',
                '#e0bd76', '#343434', '#222222',
                '#ffffff', '#dddddd', '#343434',
                '#002f7b', '#151a59', '#131c32'
            ];
        var bgList = $('.desc_case .color_list li');
        for (i = 0; i < bgList.length; i++) {
            bgList[i].style.background = color[i];
        }
    }
    bgColor();
})