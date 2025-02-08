$(document).ready(function(){
    $('.que').click(function(){
        $(this).next().slideToggle()
    })
})



$(document).ready(function() {

    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];
  
    for (i = 0; i < countersQuantity; i++) {
      counter[i] = parseInt(counters[i].innerHTML);
    }
  
    var count = function(start, value, id) {
      var localStart = start;
      setInterval(function() {
        if (localStart < value) {
          localStart++;
          counters[id].innerHTML = localStart;
        }
      }, 40);
    }
  
    for (j = 0; j < countersQuantity; j++) {
      count(0, counter[j], j);
    }
  });



  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });   


  $(document).ready(function(){
    $('#s1').mouseenter(function(){
      $('#i1').slideToggle('')
    })

    $('#s1').mouseleave(function(){
      $('#i1').slideToggle('')
    })

    $('#s2').mouseenter(function(){
      $('#i2').slideToggle('')
    })
    $('#s2').mouseleave(function(){
      $('#i2').slideToggle('')
    })

    $('#s3').mouseenter(function(){
      $('#i3').slideToggle('')
    })
    $('#s3').mouseleave(function(){
      $('#i3').slideToggle('')
    })

    $('#s4').mouseenter(function(){
      $('#i4').slideToggle('')
    })
    $('#s4').mouseleave(function(){
      $('#i4').slideToggle('')
    })
  })