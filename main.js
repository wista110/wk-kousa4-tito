// TopページのJavaScript
$(document).ready(function() {
    // ハンバーガーメニューの開閉
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
        $('.sp-nav').toggleClass('active');
    });

    // メニューリンクをクリックしたら閉じる（スマホ時）
    $('.sp-nav a').click(function() {
        $('.hamburger').removeClass('active');
        $('.sp-nav').removeClass('active');
    });

    // スムーズスクロール
    $('a[href^="#"]').click(function() {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var headerHeight = $('header').outerHeight();
        var position = target.offset().top - headerHeight;
        
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });

    // スクロール時のふわっと表示（簡易アニメーション）
    $(window).scroll(function() {
        $('.news-item, .variety-card').each(function() {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 150) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            }
        });
    });

    // 初期CSS調整（JSでアニメーションさせるための初期値）
    $('.news-item, .variety-card').css({
        'opacity': '0',
        'transform': 'translateY(20px)',
        'transition': 'all 0.6s ease'
    });
});

// NewsページのJavaScript
$(document).ready(function() {
    // ハンバーガーメニュー
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
        $('.sp-nav').toggleClass('active');
    });
    $('.sp-nav a').click(function() {
        $('.hamburger').removeClass('active');
        $('.sp-nav').removeClass('active');
    });

    // カテゴリフィルター機能
    $('.filter-btn').click(function() {
        var category = $(this).data('filter');

        // ボタンのActive切り替え
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');

        // リストのフィルタリング
        if (category === 'all') {
            $('.news-card').fadeIn();
        } else {
            $('.news-card').hide();
            $('.news-card[data-category="' + category + '"]').fadeIn();
        }
    });
});

// AboutページのJavaScript
$(document).ready(function() {
    // ハンバーガーメニュー
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
        $('.sp-nav').toggleClass('active');
    });
    $('.sp-nav a').click(function() {
        $('.hamburger').removeClass('active');
        $('.sp-nav').removeClass('active');
    });

    // タイムラインのアニメーション（スクロールしたらふわっと表示）
    $(window).scroll(function() {
        $('.policy-card, .timeline-event').each(function() {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            }
        });
    });

    // 初期CSS調整
    $('.policy-card, .timeline-event').css({
        'opacity': '0',
        'transform': 'translateY(20px)',
        'transition': 'all 0.6s ease'
    });
});

// ourappleページのJavaScript
$(document).ready(function() {
    // ハンバーガーメニュー
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
        $('.sp-nav').toggleClass('active');
    });
    $('.sp-nav a').click(function() {
        $('.hamburger').removeClass('active');
        $('.sp-nav').removeClass('active');
    });

    // ふわっと表示アニメーション
    $(window).scroll(function() {
        $('.variety-item').each(function() {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            }
        });
    });

    // 初期CSS調整
    $('.variety-item').css({
        'opacity': '0',
        'transform': 'translateY(20px)',
        'transition': 'all 0.6s ease'
    });
});

// contactページのJavaScript
$(document).ready(function() {
    // ハンバーガーメニュー
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
        $('.sp-nav').toggleClass('active');
    });
    $('.sp-nav a').click(function() {
        $('.hamburger').removeClass('active');
        $('.sp-nav').removeClass('active');
    });

    // ふわっと表示
    $(window).scroll(function() {
        $('.info-card, .contact-form').each(function() {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            }
        });
    });

    // 初期CSS
    $('.info-card, .contact-form').css({
        'opacity': '0',
        'transform': 'translateY(20px)',
        'transition': 'all 0.6s ease'
    });
});
