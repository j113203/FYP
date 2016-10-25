var j1Lib_defer=function(e,n){var t=function(e,n,t,r){var i=document.createElement(e);return i[n]=t,i.onload=i.onreadystatechange=function(){r()},document.body.appendChild(i),i};if(e.length){var r=e.shift();r.endsWith(".js")?t("script","src",r,function(){j1Lib_defer(e,n)}):t("link","href",r,function(){j1Lib_defer(e,n)}).rel="stylesheet"}else n()};

!function(n){
    j1Lib_defer(["css/"+n+".css","js/"+n+".js"],function(){
        j1Lib_defer(library,function(){
            defer()
        })})}(location.pathname.match(/([^\/]+)(?=\.\w+$)/)[0]);