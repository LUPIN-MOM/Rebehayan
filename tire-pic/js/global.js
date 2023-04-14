$(function () {
      const defaultConfig = {
            megaMenu: ".megamenu",
            megaOpenButton: ".btn-megamenu",
            megaCloseButton: ".btn-close",
            responsiveMobile: 1024,
      };

      const config = {
            visualPaging: ".visual__paging",
            visualPagingMobile: ".visual__paging__mobile",
            ...defaultConfig,
      };

      const $window = $(window);
      const $btnMega = $(defaultConfig.megaOpenButton);
      const $btnMegaClose = $(defaultConfig.megaCloseButton);
      const $megamenu = $(defaultConfig.megaMenu);
      const $mobileSize = defaultConfig.responsiveMobile;  
      const $visualPagnation = $(config.visualPaging);    
      const $visualPagnationMobile = $(config.visualPagingMobile);    
      let visualPageName = [
            "새해 이벤트", 
            "리뷰 이벤트", 
            "앱 설치 혜택", 
            "피렐리 무상교환",
            "삼성화재 이벤트",
            "자동세차 100원", 
      ];
      
      function init() {
            eventListens();
            visualSlide(".visual");
      }

      function eventListens() {
            // 모바일 메뉴 클릭 이벤트 핸들링
            $btnMega.on("click", megaOpen);
            $btnMegaClose.on("click", megaClose);

            // 반응형 모바일메뉴 리사이즈 이벤트 핸들링
            $window.on("resize load", responsive);
      }

      function megaOpen(){
            $megamenu.show();
      }
      
      function megaClose(){
            $megamenu.hide();
      }

      function responsive() {
            let windowWidth = $window.width();
            if (windowWidth > $mobileSize) {
              megaClose();
              $visualPagnation.show();
              $visualPagnationMobile.hide();
            } else {
              $visualPagnation.hide();
              $visualPagnationMobile.show();
            }
          }
      
      function visualSlide($target) {
            var swiper = new Swiper($target, {
                  loop: true,
                  pagination: {
                        el: config.visualPaging,
                        clickable: true,
                        renderBullet: function (index, className) {
                              return (
                                    '<button class="' + className + '">' + visualPageName[index] + "</button>"
                                    );
                              },
                        },                  
                  });
                  
                  var swiperFraction = new Swiper($target, {
                        pagination: {
                                    el: config.visualPagingMobile,
                                    type: "fraction",
                                    clickable: true,
                        },
                  });
                  swiper.controller.control = swiperFraction;

      };


      init();
});