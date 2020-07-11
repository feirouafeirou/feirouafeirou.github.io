<!--浏览器搞笑标题-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/images/astronaut32.png");
         document.title = '_(:з」∠)_';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/images/astronaut32.png");
         document.title = '✧٩(ˊωˋ*)و' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });