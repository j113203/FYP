library=[
    "js/lib/VanillaQR.min.js",
    "js/lib/j1Lib_VanillaQR.fix.js"
],defer=function(){
    
    login.style.display="block";

    var oauth=["",""];

    for (var i=2;i;i--){
        (function(i){
            tab.children[i].onclick=function(){
                this.classList.add('active');
                tab.children[+!i].classList.remove('active');
                tab_body.children[i].classList.add('active');
                tab_body.children[+!i].classList.remove('active');
            };
            password.getElementsByTagName("input")[i].onfocus=function(){
                password.getElementsByTagName("label")[i].textContent=this.value;
                if (i){
                    this.type="password";
                }
                this.value=decodeURIComponent(atob(oauth[i]));
            };
            password.getElementsByTagName("input")[i].onblur=function(){
                oauth[i]=btoa(encodeURIComponent(this.value));
                this.value=password.getElementsByTagName("label")[i].textContent;
                password.getElementsByTagName("label")[i].textContent="";
                this.type="text";
            };
        })(i-1);
    }

    tab_body.children[0].onclick=function(){
        tab_body.children[0].style.backgroundImage="url("+j1Lib_QR(Math.random().toString(36).substr(2))+")";
    };
    tab.children[0].click();
    tab_body.children[0].click();

    password.getElementsByTagName("button")[0].onclick=function(){
        location="menu.html";
    };
   
};