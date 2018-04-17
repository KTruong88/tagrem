$(document).ready(function(){
    $(".product-title, .starting-at, .product-text1, .product-img-1, .learn-more1").click(function(){
        $("#dropdown-1").show();
    });
    $(".x").click(function(){
        $("#dropdown-1").hide();
    });
});
