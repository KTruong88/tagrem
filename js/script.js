// Product click modals
$(document).ready(function() {
    $(".product-title1, .starting-at1, .product-text1, .product-img-1, .learn-more1").click(function() {
        $("#dropdown-1").show();
    });
    $(".x").click(function() {
        $("#dropdown-1").hide();
    });
});

// State picker modal
$(document).ready(function() {
    $(".search").click(function() {
      $("#state-modal").show();
    });

    $(".close-state, .close-word").click(function() {
        $("#state-modal").hide();
    });

    $(".states").change(function() {
      let state = $(this).val()
    $("#dynamic-state").text(state)
    })
});

$(document).ready(function() {
    $(".product-title2, .starting-at2, .product-text2, .product-img-2, .learn-more2").click(function() {
        $("#dropdown-2").show();
    });
    $(".x-2").click(function() {
        $("#dropdown-2").hide();
    });
});

$(document).ready(function() {
    $(".product-title3, .starting-at3, .product-text3, .product-img-3, .learn-more3").click(function() {
        $("#dropdown-3").show();
    });
    $(".x-3").click(function() {
        $("#dropdown-3").hide();
    });
});

$(document).ready(function() {
    $(".product-title4, .starting-at4, .product-text4, .product-img-4, .learn-more4").click(function() {
        $("#dropdown-4").show();
    });
    $(".x-4").click(function() {
        $("#dropdown-4").hide();
    });
});


$(document).ready(function() {
    $(".product-title, .product-text1, .product-img-1, .learn-more1").click(function(event){
        $('html, body').animate({scrollTop: '+=650px'}, 700);
    });
});

// On hover: bulletsprites
$(document).ready(function() {
    $(".bullet-sprite1").hover(function() {
        $(".bullet-sprite-img1").animate({
          padding: "5px 10px 5px 10px",
          transition: "100ms"
        })
    }, function() {
      $(".bullet-sprite-img1").animate({
        padding: "4px 7px 4px 7px"
      })
    });
});

$(document).ready(function() {
    $(".bullet-sprite2").hover(function() {
        $(".bullet-sprite-img2").animate({
          padding: "5px 10px 5px 10px",
          transition: "100ms"
        })
    }, function() {
      $(".bullet-sprite-img2").animate({
        padding: "4px 7px 4px 7px"
      })
    });
});

$(document).ready(function() {
    $(".bullet-sprite3").hover(function() {
        $(".bullet-sprite-img3").animate({
          padding: "5px 10px 5px 10px"
        })
    }, function() {
      $(".bullet-sprite-img3").animate({
        padding: "4px 7px 4px 7px"
      })
    });
});

// Filter price
$(document).ready(function() {
  $('.filter-select').change(function() {
    let val = parseInt($(this).val());
    switch(val) {
      case 1:
        $('#2, #3, #4').hide();
        $('#1').show();
        break;
      case 2:
        $('#1, #2, #3').hide();
        $('#4').show();
        break;
      case 3:
        $('#1, #3, #4').hide();
        $('#2').show();
        break;
      case 4:
        $('#1, #2, #4').hide();
        $('#3').show();
        break;
      default:
      $('#1, #2, #3, #4').show();
    }
  })
})
