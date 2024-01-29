(function ($) {
  "use strict";

/*===================================
  //Fixed popup
 =====================================*/


  var myElement = document.querySelector("header");
  var headroom  = new Headroom(myElement);
  headroom.init();


  $(window).on('scroll', function() {
    var height = $(window).scrollTop();
    if (height < 100) {
      $('.rt-header').removeClass('scrolling');
    } else {
      $('.rt-header').addClass('scrolling');
    }
  });

  

  /*=====================================
  //	Jquery Serch Box
  ===================================*/
  $('a[href="#template-search"]').on("click", function (event) {
    event.preventDefault();
    let target = $("#template-search");
    target.addClass("open");
    setTimeout(function () {
      target.find("input").focus();
    }, 600);
    return false;
  });

  $("#template-search, #template-search button.close").on(
    "click keyup",
    function (event) {
      if (
        event.target === this ||
        event.target.className === "close" ||
        event.keyCode === 27
      ) {
        $(this).removeClass("open");
      }
    }
  );

  /*-------------------------------------
    Mobile Menu Toggle
    -------------------------------------*/
    $(".sidebarBtn").on("click", function (e) {
      e.preventDefault();
      if ($(".rt-slide-nav").is(":visible")) {
        $(".rt-slide-nav").slideUp();
        $("body").removeClass("slidemenuon");
      } else {
        $(".rt-slide-nav").slideDown();
        $("body").addClass("slidemenuon");
      }
    });
  

  /*-------------------------------------
      Mobile Menu Dropdown
    -------------------------------------*/
  let rtMobileMenu = $(".offscreen-navigation .menu");

  if (rtMobileMenu.length) {
    rtMobileMenu.children("li").addClass("menu-item-parent");
    rtMobileMenu.find(".menu-item-has-children > a").on("click", function (e) {
      e.preventDefault();
      $(this).toggleClass("opened");
      let n = $(this).next(".sub-menu"),
        s = $(this).closest(".menu-item-parent").find(".sub-menu");
      rtMobileMenu
        .find(".sub-menu")
        .not(s)
        .slideUp(250)
        .prev("a")
        .removeClass("opened"),
        n.slideToggle(250);
    });
    rtMobileMenu
      .find(".menu-item:not(.menu-item-has-children) > a")
      .on("click", function (e) {
        $(".rt-slide-nav").slideUp();
        $("body").removeClass("slidemenuon");
      });
  }


  /*-------------------------------------
  Intersection Observer
  -------------------------------------*/
  if (!!window.IntersectionObserver) {
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active-animation");
          //entry.target.src = entry.target.dataset.src;
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: "0px 0px -100px 0px"
    });
    document.querySelectorAll('.has-animation').forEach(block => {
      observer.observe(block)
    });
  } else {
    document.querySelectorAll('.has-animation').forEach(block => {
      block.classList.remove('has-animation')
    });
  }






  /*===================================
   // Section background image 
  ====================================*/
  imageFunction();

  function imageFunction() {
    $("[data-bg-image]").each(function () {
      let img = $(this).data("bg-image");
      $(this).css({
        backgroundImage: "url(" + img + ")",
      });
    });
  }

  

  /*-------------------------------------
    Brand Slider
    -------------------------------------*/

    var swiper2 = new Swiper(".rt-brand-layout", {
      spaceBetween: 55,
      slidesPerView: 6,
      speed: 1000,
      loop: true,
      // autoplay: {
      //     delay: 5000,
      //     disableOnInteraction: false,
      // },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        374: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 6,
        },
      },
    });

     /*-------------------------------------
     Testimonial Slider
    -------------------------------------*/
    if ($(".rt-testimonial-slider")) {
      $(".rt-testimonial-slider").each(function () {
        let __swiperSlider = $(this)[0];
        let btnPrev = $(this)
          .closest(".rtMainWrap")
          .find(".swiper-button-next")[0];
        let btnNext = $(this)
          .closest(".rtMainWrap")
          .find(".swiper-button-prev")[0];
        new Swiper(__swiperSlider, {
          slidesPerView: 1,
          loop: true,
          spaceBetween: 24,
          slideToClickedSlide: true,
          // autoplay: {
          //   delay: 5000,
          //   disableOnInteraction: false,
          // },
          speed: 800,
          breakpoints: {
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 1,
            },
            1200: {
              slidesPerView: 1,
            },
          },
          navigation: {
            nextEl: btnPrev,
            prevEl: btnNext,
          },
        });
      });
    }

/*-------------------------------------
     Testimonial Slider
  -------------------------------------*/
  let rtThumbnailTliderThumbStyle1 = new Swiper(
    ".rt-thumbnail-slider-thumb-style-1", {
        loop: true,
        // spaceBetween: 10,
        slidesPerView: 5,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        speed: 800,
        // direction: "vertical",
        breakpoints: {
          0: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 1,
          },
          992: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        },
    }
  );
  let rtThumbnailTliderStyle1 = new Swiper(".rt-thumbnail-slider-style-1", {
    loop: true,
    spaceBetween: 30,
    speed: 800,
    // mousewheel: true,
    thumbs: {
        swiper: rtThumbnailTliderThumbStyle1,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 1,
      },
    },
  })

  /*-------------------------------------
     Testimonial Slider
  -------------------------------------*/
  var swiper4 = new Swiper(".rt-testimonial-slider-3", {
    spaceBetween: 100,
    slidesPerView: 3,
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    grid: {
      rows: 2,
      fill: 'row',
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      374: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  /*-------------------------------------
     Testimonial Slider
  -------------------------------------*/
  var swiper5 = new Swiper(".rt-testimonial-slider-4", {
    spaceBetween: 24,
    slidesPerView: 1,
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
    /*-------------------------------------
     Testimonial Slider
    -------------------------------------*/
    if ($(".rt-testimonial-slider-5")) {
      $(".rt-testimonial-slider-5").each(function () {
        let __swiperSlider = $(this)[0];
        let btnPrev = $(this)
          .closest(".rtMainWrap")
          .find(".swiper-button-next")[0];
        let btnNext = $(this)
          .closest(".rtMainWrap")
          .find(".swiper-button-prev")[0];
        new Swiper(__swiperSlider, {
          slidesPerView: 1,
          loop: true,
          spaceBetween: 24,
          slideToClickedSlide: true,
          // autoplay: {
          //   delay: 5000,
          //   disableOnInteraction: false,
          // },
          speed: 800,
          breakpoints: {
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 1,
            },
            1200: {
              slidesPerView: 1,
            },
          },
          navigation: {
            nextEl: btnPrev,
            prevEl: btnNext,
          },
        });
      });
    }

      /*-------------------------------------
     Testimonial Slider
    -------------------------------------*/
    if ($(".rt-testimonial-slider-6")) {
      $(".rt-testimonial-slider-6").each(function () {
        let __swiperSlider = $(this)[0];
        let btnPrev = $(this)
          .closest(".rtMainWrap")
          .find(".swiper-button-next")[0];
        let btnNext = $(this)
          .closest(".rtMainWrap")
          .find(".swiper-button-prev")[0];
        new Swiper(__swiperSlider, {
          slidesPerView: 1,
          loop: true,
          spaceBetween: 24,
          slideToClickedSlide: true,
          // autoplay: {
          //   delay: 5000,
          //   disableOnInteraction: false,
          // },
          speed: 800,
          breakpoints: {
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 1,
            },
            1200: {
              slidesPerView: 1,
            },
          },
          navigation: {
            nextEl: btnPrev,
            prevEl: btnNext,
          },
        });
      });
    }
  /*-------------------------------------
    Portfolio Slider
  -------------------------------------*/
  var swiper7 = new Swiper(".rt-portfolio-slider", {
    spaceBetween: 24,
    slidesPerView: 3,
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      374: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });
  /*-------------------------------------
    Project Slider
  -------------------------------------*/
  var swiper6 = new Swiper(".rt-project-slider", {
    spaceBetween: 24,
    slidesPerView: 3,
    speed: 1000,
    // loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      374: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    }
  });


  /*-------------------------------------
    Screen Slider
    -------------------------------------*/

    var swiper8 = new Swiper(".rt-featured-screen-slider", {
      spaceBetween: 24,
      slidesPerView: 4,
      speed: 1000,
      loop: true,
      autoplay: {
          delay: 5000,
          disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        374: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    });


/* ===================================
   PopUp
  ======================================= */

var yPopup = $(".play-btn");
if (yPopup.length) {
    yPopup.magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
}

/*-------------------------------------
  Popup Gallery
  -------------------------------------*/
  $(".image-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });


/*=================================
   // counter up
   ==================================*/
   let counter = true;
   $(".counter-appear").appear();
   $(".counter-appear").on("appear", function () {
     if (counter) {
       // Only number counter
       $(".counterUp").each(function () {
         let $this = $(this);
         jQuery({
           Counter: 0,
         }).animate(
           {
             Counter: $this.attr("data-counter"),
             Hover: $this.attr("data-hover"),
           },
           {
             duration: 1000,
             easing: "swing",
             step: function () {
               let num = Math.ceil(this.Counter).toString();
              // let num = this.Counter.toFixed(1).toString();
               if (Number(num) > 99999999) {
                 while (/(\d+)(\d{8})/.test(num)) {
                   num = num.replace(/(\d+)(\d{8})/, "");
                 }
               }
               $this.html(num);
             },
           }
         );
       });
       // with skill bar
       $(".skill-per").each(function () {
        let $this = $(this);
        let per = $this.attr("data-per");
        $this.css("width", per + "%");
        $({ animatedValue: 0 }).animate(
          { animatedValue: per },
          {
            duration: 500,
            step: function () {
              $this.attr("data-per", Math.floor(this.animatedValue) + "%");
            },
            complete: function () {
              $this.attr("data-per", Math.floor(this.animatedValue) + "%");
            },
          }
        );
      });

      // // pie chart
      // $(".chart-bar.style-1").easyPieChart({
      //   barColor: "#0f5bf5",
      //   trackColor: "#cccccc",
      //   scaleColor: false,
      //   lineWidth: 4,
      //   size: 120,
      //   lineCap: "square",
      //   animate: 2000,
      // });

      // // pie chart
      // $(".chart-bar.style-3").easyPieChart({
      //   barColor: "#fff",
      //   trackColor: "#cccccc",
      //   scaleColor: false,
      //   lineWidth: 4,
      //   size: 120,
      //   lineCap: "square",
      //   animate: 2000,
      // });

      counter = false;
    }
  });


		
  /*==============================
   //  Back to Top
   ===============================*/
  // Back to top
  var amountScrolled = 200;
  var amountScrolledNav = 25;

  $(window).scroll(function() {
    if ( $(window).scrollTop() > amountScrolled ) {
      $('button.scroll-to-top').addClass('show');
    } else {
      $('button.scroll-to-top').removeClass('show');
    }
  });

  $('button.scroll-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
});

      
  /*-------------------------------------
  //Contact Form initiating
  -------------------------------------*/
  let contactForm = $(".rt-contact-form");
  if (contactForm.length) {
    contactForm.each(function () {
      let innerContactForm = $(this);
      innerContactForm.validator().on("submit", function (e) {
        let $this = $(this),
          $target = innerContactForm.find(".form-response");
        if (e.isDefaultPrevented()) {
          $target.html(
            "<div class='alert alert-danger'><p>Please select all required field.</p></div>"
          );
        } else {
          $.ajax({
            url: "php/mailer.php",
            type: "POST",
            data: innerContactForm.serialize(),
            beforeSend: function () {
              $target.html(
                "<div class='alert alert-info'><p>Loading ...</p></div>"
              );
            },
            success: function (response) {
              if (response == "success") {
                $this[0].reset();
                $target.html(
                  "<div class='alert alert-success'><p>Message has been sent successfully.</p></div>"
                );
              } else {
                res = JSON.parse(response);
                if (res.message.length) {
                  let messages = null;
                  res.message.forEach(function (message) {
                    messages += "<p>" + message + "</p>";
                  });
                  $target.html(
                    "<div class='alert alert-success'><p>" +
                      messages +
                      "</p></div>"
                  );
                }
              }
            },
            error: function () {
              $target.html(
                "<div class='alert alert-success'><p>Error !!!</p></div>"
              );
            },
          });
          return false;
        }
      });
    });
  }
  
  /*==============================
   //  WOW
   ===============================*/
  let wow = new WOW({
    boxClass: "wow",
    animateClass: "animate__animated",
    offset: 0,
    mobile: true,
    live: true,
    scrollContainer: null,
  });
  wow.init();




    /*------------------------------------
   //  Offcanvas Menu activation code
   -----------------------------------*/
   $('#wrapper').on('click', '.offcanvas-menu-btn', function (e) {
    e.preventDefault();
    var $this = $(this),
        wrapper = $(this).parents('body').find('>#wrapper'),
        wrapMask = $('<div />').addClass('offcanvas-mask'),
        offCancas = $('#offcanvas-wrap'),
        position = offCancas.data('position') || 'left';

    if ($this.hasClass('menu-status-open')) {
        wrapper.addClass('open').append(wrapMask);
        $this.removeClass('menu-status-open').addClass('menu-status-close');
        offCancas.css({
            'transform': 'translateX(0)'
        });
    } else {
        removeOffcanvas();
    }

    function removeOffcanvas() {
        wrapper.removeClass('open').find('> .offcanvas-mask').remove();
        $this.removeClass('menu-status-close').addClass('menu-status-open');
        if (position === 'left') {
            offCancas.css({
                'transform': 'translateX(-105%)'
            });
        } else {
            offCancas.css({
                'transform': 'translateX(105%)'
            });
        }
    }
    $(".offcanvas-mask, .offcanvas-close").on('click', function () {
        removeOffcanvas();
    });

    return false;
});


    /*===================================
  //Humburger
  =====================================*/
  $(".humburger").on("click", function () {
    $(".humburger").toggleClass("active");
  });



  /*==============================
  // Preloader
  ===============================*/

  // $(window).on("load", function () {
  //   $("#preloader").fadeOut("slow", function () {
  //     $(this).remove();
  //   });
  // });

  /*==============================
  // Marquee
  ===============================*/

    var i = 1;
    $('.marquee').each(function() {
        var marqueeID = 'marquee-' + String(i)
        // $(this).attr('id', customID)
        var marqueeDirection = $(this).attr('id', marqueeID).attr("direction");
        i++;
        // console.log(marqueeDirection)
        $(this).marquee({
            direction: marqueeDirection,
            duration: 50000,
            gap: 0,
            delayBeforeStart: 0,
            duplicated: true,
            startVisible: true,
            pauseOnCycle:true,
            pauseOnHover: true
        });
    });


  
})(jQuery);






