$(function () {
    $('#div2').hide();
    $('#div3').hide();
    $('#div4').hide();

    $('.bu button:nth-of-type(1)').click(function () {
        $('#div1').show();
        $('#div2').hide();
        $('#div3').hide();
        $('#div4').hide();
    });

    $('.bu button:nth-of-type(2)').click(function () {
        $('#div2').show();
        $('#div1').hide();
        $('#div3').hide();
        $('#div4').hide();
    });

    $('.bu button:nth-of-type(3)').click(function () {
        $('#div3').show();
        $('#div1').hide();
        $('#div2').hide();
        $('#div4').hide();
    });

    $('.bu button:nth-of-type(4)').click(function () {
        $('#div4').show();
        $('#div1').hide();
        $('#div2').hide();
        $('#div3').hide();
    });
});