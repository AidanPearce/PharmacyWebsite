$("document").ready(function () {

    $('#cranfordPharmacy').mouseenter(function () {
        $('#cranfordPharmacy').attr("src", "images/CranfordImage.jpg")
    });
    $('#cranfordPharmacy').mouseleave(function () {
        $('#cranfordPharmacy').attr("src", "images/Cranford2.png")
    });

    $('#stAlbansPharmacy').mouseenter(function () {
        $('#stAlbansPharmacy').attr("src", "images/StAlbansPharmacy.jpg")
    });
    $('#stAlbansPharmacy').mouseleave(function () {
        $('#stAlbansPharmacy').attr("src", "images/StAlbans2.png")
    });

});