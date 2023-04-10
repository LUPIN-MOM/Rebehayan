$(function () {
      const defaultConfig = {
            megaMenu: ".megamenu",
            megaOpenButton: ".btn-megamenu",
            megaCloseButton: ".btn-close",
            responsiveMobile: 1024,
      };

      const $window =$(window);
      const $btnMega = $(defaultConfig.megaCloseButton);
      const $btnMegaClose = $(defaultConfig.megaOpenButton);
      const $megamenu = $(defaultConfig.megaMenu);
      const $mobileSize = defaultConfig.responsiveMobile;      

      function init() {
            eventListens();
            slide();
      };

      function eventListens() {
            // 모바일 메뉴 클릭 이벤트 핸들링
            $btnMega.on("click", megaOpen);
            $btnMegaClose.on("click", megaClose);

            // 반응형 모바일메뉴 리사이즈 이벤트 핸들링
            $window.on("resize", removeMobileNav);
      }

      function megaOpen(){
            $megamenu.show();
      }
      
      function megaClose(){
            $megamenu.hide();
      }

      //반응형 모바일메뉴 제어
      function removeMobileNav(){
            $(window).on('resize', resizeMobile)
      }
      function resizeMobile() {
            let $windowWidth = $window.width();
            if ($windowWidth > $mobileSize) {
                  megaClose();
            }
      }

      function slide() {
            let menuName = [
                  "새해 이벤트", 
                  "리뷰 이벤트", 
                  "앱 설치 혜택", 
                  "피렐리 무상교환",
                  "삼성화재 이벤트",
                  "자동세차 100원", 
            ];
            var swiper = new Swiper(".visual",{
                  loop: true,
                  pagination: {
                        el: ".visual__paging",
                        clickable: true,
                  renderBullet: function (index, className) {
                        return (
                              '<button class="' + className + '">' + (menuName[index]) + "</button>"
                        );
                      },
                  },
            })
      }

      init();
});

