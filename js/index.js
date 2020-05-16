$("document").ready(function () {

    $('#cranfordPharmacy').mouseenter(function () {
        $('#cranfordPharmacy').attr("src", "CranfordImage.jpg")
    });
    $('#cranfordPharmacy').mouseleave(function () {
        $('#cranfordPharmacy').attr("src", "Cranford2.png")
    });

    $('#stAlbansPharmacy').mouseenter(function () {
        $('#stAlbansPharmacy').attr("src", "StAlbansPharmacy.jpg")
    });
    $('#stAlbansPharmacy').mouseleave(function () {
        $('#stAlbansPharmacy').attr("src", "StAlbans2.png")
    });

});