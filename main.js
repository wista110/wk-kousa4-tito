// ========================================
// 共通関数
// ========================================

// ハンバーガーメニューの開閉（全ページ共通）
function initHamburgerMenu() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
        $('.sp-nav').toggleClass('active');
    });

    // メニューリンクをクリックしたら閉じる（スマホ時）
    $('.sp-nav a').click(function() {
        $('.hamburger').removeClass('active');
        $('.sp-nav').removeClass('active');
    });
}

// スクロール時のふわっと表示アニメーション（共通関数）
function initScrollAnimation(selector, offset) {
    offset = offset || 100; // デフォルト値
    
    // 初期CSS調整
    $(selector).css({
        'opacity': '0',
        'transform': 'translateY(20px)',
        'transition': 'all 0.6s ease'
    });

    // スクロール時のアニメーション
    $(window).scroll(function() {
        $(selector).each(function() {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + offset) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            }
        });
    });
}

// ========================================
// 全ページ共通の初期化
// ========================================
$(document).ready(function() {
    // ハンバーガーメニュー（全ページ共通）
    initHamburgerMenu();
});

// ========================================
// Topページ固有のJavaScript
// ========================================
$(document).ready(function() {
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

    // スクロール時のふわっと表示（トップページ用）
    initScrollAnimation('.news-item, .variety-card', 150);
});

// ========================================
// Newsページ固有のJavaScript
// ========================================
$(document).ready(function() {
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

// ========================================
// Aboutページ固有のJavaScript
// ========================================
$(document).ready(function() {
    // タイムラインのアニメーション（スクロールしたらふわっと表示）
    initScrollAnimation('.policy-card, .timeline-event', 100);
});

// ========================================
// ourappleページ固有のJavaScript
// ========================================
$(document).ready(function() {
    // ふわっと表示アニメーション
    initScrollAnimation('.variety-item', 100);
});

// ========================================
// Contactページ固有のJavaScript
// ========================================
$(document).ready(function() {
    // ふわっと表示
    initScrollAnimation('.info-card, .contact-form', 100);
});
