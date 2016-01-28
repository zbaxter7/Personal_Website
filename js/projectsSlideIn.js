$(function() {
  
  if (window.outerWidth > 480) {
  
  
    var $headers = $("#projects > h3"),
        $links = $("#projects > p");

    $headers.css({

      position: "relative",
      right: "1000px"

    });

    $links.css({

      position: "relative",
      left: "500px",
      opacity: "0"

    })

    $headers.animate({

      right: "0"

    }, function() {

      $links.delay(1500).animate({

        left: "0",
        opacity: "1"

      }, 500);

    });
    
  }
  
});
