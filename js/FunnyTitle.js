<!--浏览器搞笑标题-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/images/astronaut32.png");
         document.title = '（づ￣3￣）づ╭❤～ 快回来!!!';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/images/astronaut32.png");
         document.title = '─=≡Σ((( つ•̀ω•́)つ动感光波哔哔哔!!!' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });