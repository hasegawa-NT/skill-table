$(function() {
    // // スライドのスピードを変えるための変数。slideイベントのmsを調整する。

    //     // 上下のスピードを一定にしたいなら
    //     var slidSpeed = 1000;

    //     // 上下にスライドするスピードをバラバラにしたいなら
    //     var slidUpSpeed = 500;
    //     var slideDownSpeed = 1000;

    // // イベントの起点はtabのclick。
    // $('.tab').on('click', function() {
    //     // 選択されている状態のtabからスタイルを除く。
    //     $('.tab-active').removeClass('tab-active');

    //     // clickされたtabが選択された状態になる。
    //     $(this).addClass('tab-active');

    //     // 対応しているtabとpanelを関連付けるために変数に入れる。
    //     var panelShow = $(this).attr('rel');

    //     // 表示されているpanelを上げ下げするイベントの開始。
    //     $('.panel-show').slideToggle(slidUpSpeed, function() {

    //         // 選択されているpanelを非表示にする。
    //         $(this).removeClass('panel-show');
            
    //         // tabと関連づけられたpanelを表示する。
    //         $('#'+panelShow).slideDown(slideDownSpeed, function() {
    //             $(this).addClass('panel-show');
    //         });
    //     });
    // });
    // スライドのスピードを変えるための変数。slideイベントのmsを調整する。

        // 上下のスピードを一定にしたいなら
        var slidSpeed = 1000;

        // 上下にスライドするスピードをバラバラにしたいなら
        var slidUpSpeed = 500;
        var slideDownSpeed = 1000;

    // イベントの起点はtabのclick。
    $('.tab').on('click', function() {
        // 選択されている状態のtabからスタイルを除く。
        $('.tab-active').removeClass('tab-active');

        // clickされたtabが選択された状態になる。
        $(this).addClass('tab-active');

        // 対応しているtabとpanelを関連付けるために変数に入れる。
        var panelShow = $(this).attr('rel');

        // panelがパッと消えて、パッと現れるイベントの開始。
        $('.panel-show').hide(0, function() {

            // 選択されているpanelを非表示にする。
            $(this).removeClass('panel-show');
            
            // tabと関連づけられたpanelを表示する。
            $('#'+panelShow).show(0, function() {
                $(this).addClass('panel-show');
            });
        });
    });
});