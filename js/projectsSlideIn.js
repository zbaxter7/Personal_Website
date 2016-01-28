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

<<<<<<< HEAD
      $links.delay(1500).animate({
=======
      $links.delay(2000).animate({
>>>>>>> f8c2ed699ad0d86f43f1d4c2f0fbf51c358bb048

        left: "0",
        opacity: "1"

      }, 500);

    });
    
  }
  
<<<<<<< HEAD
});
=======
});
>>>>>>> f8c2ed699ad0d86f43f1d4c2f0fbf51c358bb048
