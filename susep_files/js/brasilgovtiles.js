var brasilgovtiles=function(e){
    function t(i){
        if(a[i])return a[i].exports;
        var r=a[i]={
            i:i,l:!1,exports:{
            }
        }
        ;
        return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports
    }
    var a={
    }
    ;
    return t.m=e,t.c=a,t.d=function(e,a,i){
        t.o(e,a)||Object.defineProperty(e,a,{
            configurable:!1,enumerable:!0,get:i
        }
        )
    }
    ,t.n=function(e){
        var a=e&&e.__esModule?function(){
            return e.default
        }
        :function(){
            return e
        }
        ;
        return t.d(a,"a",a),a
    }
    ,t.o=function(e,t){
        return Object.prototype.hasOwnProperty.call(e,t)
    }
    ,t.p="++resource++brasil.gov.tiles/",t(t.s=1)
}
([function(e,t,a){
    !function(t,a){
        e.exports=a()
    }
    (0,function(){
        "use strict";
        function e(e,t){
            var a=[],i=0;
            if(e&&!t&&e instanceof Ae)return e;
            if(e)if("string"==typeof e){
                var r,n,s=e.trim();
                if(s.indexOf("<")>=0&&s.indexOf(">")>=0){
                    var o="div";
                    for(0===s.indexOf("<li")&&(o="ul"),0===s.indexOf("<tr")&&(o="tbody"),0!==s.indexOf("<td")&&0!==s.indexOf("<th")||(o="tr"),0===s.indexOf("<tbody")&&(o="table"),0===s.indexOf("<option")&&(o="select"),n=Ie.createElement(o),n.innerHTML=s,i=0;
                    i<n.childNodes.length;
                    i+=1)a.push(n.childNodes[i])
                }
                else for(r=t||"#"!==e[0]||e.match(/[ .<>:~]/)?(t||Ie).querySelectorAll(e.trim()):[Ie.getElementById(e.trim().split("#")[1])],i=0;
                i<r.length;
                i+=1)r[i]&&a.push(r[i])
            }
            else if(e.nodeType||e===De||e===Ie)a.push(e);
            else if(e.length>0&&e[0].nodeType)for(i=0;
            i<e.length;
            i+=1)a.push(e[i]);
            return new Ae(a)
        }
        function t(e){
            for(var t=[],a=0;
            a<e.length;
            a+=1)-1===t.indexOf(e[a])&&t.push(e[a]);
            return t
        }
        function a(e){
            var t=this;
            if(void 0===e)return this;
            for(var a=e.split(" "),i=0;
            i<a.length;
            i+=1)for(var r=0;
            r<this.length;
            r+=1)void 0!==t[r]&&void 0!==t[r].classList&&t[r].classList.add(a[i]);
            return this
        }
        function i(e){
            for(var t=this,a=e.split(" "),i=0;
            i<a.length;
            i+=1)for(var r=0;
            r<this.length;
            r+=1)void 0!==t[r]&&void 0!==t[r].classList&&t[r].classList.remove(a[i]);
            return this
        }
        function r(e){
            return!!this[0]&&this[0].classList.contains(e)
        }
        function n(e){
            for(var t=this,a=e.split(" "),i=0;
            i<a.length;
            i+=1)for(var r=0;
            r<this.length;
            r+=1)void 0!==t[r]&&void 0!==t[r].classList&&t[r].classList.toggle(a[i]);
            return this
        }
        function s(e,t){
            var a=arguments,i=this;
            if(1!==arguments.length||"string"!=typeof e){
                for(var r=0;
                r<this.length;
                r+=1)if(2===a.length)i[r].setAttribute(e,t);
                else for(var n in e)i[r][n]=e[n],i[r].setAttribute(n,e[n]);
                return this
            }
            if(this[0])return this[0].getAttribute(e)
        }
        function o(e){
            for(var t=this,a=0;
            a<this.length;
            a+=1)t[a].removeAttribute(e);
            return this
        }
        function l(e,t){
            var a,i=this;
            if(void 0!==t){
                for(var r=0;
                r<this.length;
                r+=1)a=i[r],a.dom7ElementDataStorage||(a.dom7ElementDataStorage={
                }
                ),a.dom7ElementDataStorage[e]=t;
                return this
            }
            if(a=this[0]){
                if(a.dom7ElementDataStorage&&e in a.dom7ElementDataStorage)return a.dom7ElementDataStorage[e];
                var n=a.getAttribute("data-"+e);
                if(n)return n
            }
            else;
        }
        function d(e){
            for(var t=this,a=0;
            a<this.length;
            a+=1){
                var i=t[a].style;
                i.webkitTransform=e,i.transform=e
            }
            return this
        }
        function u(e){
            var t=this;
            "string"!=typeof e&&(e+="ms");
            for(var a=0;
            a<this.length;
            a+=1){
                var i=t[a].style;
                i.webkitTransitionDuration=e,i.transitionDuration=e
            }
            return this
        }
        function c(){
            function t(t){
                var a=t.target;
                if(a){
                    var i=t.target.dom7EventData||[];
                    if(i.indexOf(t)<0&&i.unshift(t),e(a).is(l))d.apply(a,i);
                    else for(var r=e(a).parents(),n=0;
                    n<r.length;
                    n+=1)e(r[n]).is(l)&&d.apply(r[n],i)
                }
            }
            function a(e){
                var t=e&&e.target?e.target.dom7EventData||[]:[];
                t.indexOf(e)<0&&t.unshift(e),d.apply(this,t)
            }
            for(var i,r=this,n=[],s=arguments.length;
            s--;
            )n[s]=arguments[s];
            var o=n[0],l=n[1],d=n[2],u=n[3];
            "function"==typeof n[1]&&(i=n,o=i[0],d=i[1],u=i[2],l=void 0),u||(u=!1);
            for(var c,p=o.split(" "),h=0;
            h<this.length;
            h+=1){
                var f=r[h];
                if(l)for(c=0;
                c<p.length;
                c+=1){
                    var v=p[c];
                    f.dom7LiveListeners||(f.dom7LiveListeners={
                    }
                    ),f.dom7LiveListeners[v]||(f.dom7LiveListeners[v]=[]),f.dom7LiveListeners[v].push({
                        listener:d,proxyListener:t
                    }
                    ),f.addEventListener(v,t,u)
                }
                else for(c=0;
                c<p.length;
                c+=1){
                    var m=p[c];
                    f.dom7Listeners||(f.dom7Listeners={
                    }
                    ),f.dom7Listeners[m]||(f.dom7Listeners[m]=[]),f.dom7Listeners[m].push({
                        listener:d,proxyListener:a
                    }
                    ),f.addEventListener(m,a,u)
                }
            }
            return this
        }
        function p(){
            for(var e,t=this,a=[],i=arguments.length;
            i--;
            )a[i]=arguments[i];
            var r=a[0],n=a[1],s=a[2],o=a[3];
            "function"==typeof a[1]&&(e=a,r=e[0],s=e[1],o=e[2],n=void 0),o||(o=!1);
            for(var l=r.split(" "),d=0;
            d<l.length;
            d+=1)for(var u=l[d],c=0;
            c<this.length;
            c+=1){
                var p=t[c],h=void 0;
                if(!n&&p.dom7Listeners?h=p.dom7Listeners[u]:n&&p.dom7LiveListeners&&(h=p.dom7LiveListeners[u]),h&&h.length)for(var f=h.length-1;
                f>=0;
                f-=1){
                    var v=h[f];
                    s&&v.listener===s?(p.removeEventListener(u,v.proxyListener,o),h.splice(f,1)):s||(p.removeEventListener(u,v.proxyListener,o),h.splice(f,1))
                }
            }
            return this
        }
        function h(){
            for(var e=this,t=[],a=arguments.length;
            a--;
            )t[a]=arguments[a];
            for(var i=t[0].split(" "),r=t[1],n=0;
            n<i.length;
            n+=1)for(var s=i[n],o=0;
            o<this.length;
            o+=1){
                var l=e[o],d=void 0;
                try{
                    d=new De.CustomEvent(s,{
                        detail:r,bubbles:!0,cancelable:!0
                    }
                    )
                }
                catch(e){
                    d=Ie.createEvent("Event"),d.initEvent(s,!0,!0),d.detail=r
                }
                l.dom7EventData=t.filter(function(e,t){
                    return t>0
                }
                ),l.dispatchEvent(d),l.dom7EventData=[],delete l.dom7EventData
            }
            return this
        }
        function f(e){
            function t(n){
                if(n.target===this)for(e.call(this,n),a=0;
                a<i.length;
                a+=1)r.off(i[a],t)
            }
            var a,i=["webkitTransitionEnd","transitionend"],r=this;
            if(e)for(a=0;
            a<i.length;
            a+=1)r.on(i[a],t);
            return this
        }
        function v(e){
            if(this.length>0){
                if(e){
                    var t=this.styles();
                    return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        }
        function m(e){
            if(this.length>0){
                if(e){
                    var t=this.styles();
                    return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        }
        function g(){
            if(this.length>0){
                var e=this[0],t=e.getBoundingClientRect(),a=Ie.body,i=e.clientTop||a.clientTop||0,r=e.clientLeft||a.clientLeft||0,n=e===De?De.scrollY:e.scrollTop,s=e===De?De.scrollX:e.scrollLeft;
                return{
                    top:t.top+n-i,left:t.left+s-r
                }
            }
            return null
        }
        function y(){
            return this[0]?De.getComputedStyle(this[0],null):{
            }
        }
        function b(e,t){
            var a,i=this;
            if(1===arguments.length){
                if("string"!=typeof e){
                    for(a=0;
                    a<this.length;
                    a+=1)for(var r in e)i[a].style[r]=e[r];
                    return this
                }
                if(this[0])return De.getComputedStyle(this[0],null).getPropertyValue(e)
            }
            if(2===arguments.length&&"string"==typeof e){
                for(a=0;
                a<this.length;
                a+=1)i[a].style[e]=t;
                return this
            }
            return this
        }
        function w(e){
            var t=this;
            if(!e)return this;
            for(var a=0;
            a<this.length;
            a+=1)if(!1===e.call(t[a],a,t[a]))return t;
            return this
        }
        function x(e){
            var t=this;
            if(void 0===e)return this[0]?this[0].innerHTML:void 0;
            for(var a=0;
            a<this.length;
            a+=1)t[a].innerHTML=e;
            return this
        }
        function E(e){
            var t=this;
            if(void 0===e)return this[0]?this[0].textContent.trim():null;
            for(var a=0;
            a<this.length;
            a+=1)t[a].textContent=e;
            return this
        }
        function T(t){
            var a,i,r=this[0];
            if(!r||void 0===t)return!1;
            if("string"==typeof t){
                if(r.matches)return r.matches(t);
                if(r.webkitMatchesSelector)return r.webkitMatchesSelector(t);
                if(r.msMatchesSelector)return r.msMatchesSelector(t);
                for(a=e(t),i=0;
                i<a.length;
                i+=1)if(a[i]===r)return!0;
                return!1
            }
            if(t===Ie)return r===Ie;
            if(t===De)return r===De;
            if(t.nodeType||t instanceof Ae){
                for(a=t.nodeType?[t]:t,i=0;
                i<a.length;
                i+=1)if(a[i]===r)return!0;
                return!1
            }
            return!1
        }
        function S(){
            var e,t=this[0];
            if(t){
                for(e=0;
                null!==(t=t.previousSibling);
                )1===t.nodeType&&(e+=1);
                return e
            }
        }
        function C(e){
            if(void 0===e)return this;
            var t,a=this.length;
            return e>a-1?new Ae([]):e<0?(t=a+e,new Ae(t<0?[]:[this[t]])):new Ae([this[e]])
        }
        function k(){
            for(var e=this,t=[],a=arguments.length;
            a--;
            )t[a]=arguments[a];
            for(var i,r=0;
            r<t.length;
            r+=1){
                i=t[r];
                for(var n=0;
                n<this.length;
                n+=1)if("string"==typeof i){
                    var s=Ie.createElement("div");
                    for(s.innerHTML=i;
                    s.firstChild;
                    )e[n].appendChild(s.firstChild)
                }
                else if(i instanceof Ae)for(var o=0;
                o<i.length;
                o+=1)e[n].appendChild(i[o]);
                else e[n].appendChild(i)
            }
            return this
        }
        function M(e){
            var t,a,i=this;
            for(t=0;
            t<this.length;
            t+=1)if("string"==typeof e){
                var r=Ie.createElement("div");
                for(r.innerHTML=e,a=r.childNodes.length-1;
                a>=0;
                a-=1)i[t].insertBefore(r.childNodes[a],i[t].childNodes[0])
            }
            else if(e instanceof Ae)for(a=0;
            a<e.length;
            a+=1)i[t].insertBefore(e[a],i[t].childNodes[0]);
            else i[t].insertBefore(e,i[t].childNodes[0]);
            return this
        }
        function $(t){
            return new Ae(this.length>0?t?this[0].nextElementSibling&&e(this[0].nextElementSibling).is(t)?[this[0].nextElementSibling]:[]:this[0].nextElementSibling?[this[0].nextElementSibling]:[]:[])
        }
        function P(t){
            var a=[],i=this[0];
            if(!i)return new Ae([]);
            for(;
            i.nextElementSibling;
            ){
                var r=i.nextElementSibling;
                t?e(r).is(t)&&a.push(r):a.push(r),i=r
            }
            return new Ae(a)
        }
        function z(t){
            if(this.length>0){
                var a=this[0];
                return new Ae(t?a.previousElementSibling&&e(a.previousElementSibling).is(t)?[a.previousElementSibling]:[]:a.previousElementSibling?[a.previousElementSibling]:[])
            }
            return new Ae([])
        }
        function L(t){
            var a=[],i=this[0];
            if(!i)return new Ae([]);
            for(;
            i.previousElementSibling;
            ){
                var r=i.previousElementSibling;
                t?e(r).is(t)&&a.push(r):a.push(r),i=r
            }
            return new Ae(a)
        }
        function O(a){
            for(var i=this,r=[],n=0;
            n<this.length;
            n+=1)null!==i[n].parentNode&&(a?e(i[n].parentNode).is(a)&&r.push(i[n].parentNode):r.push(i[n].parentNode));
            return e(t(r))
        }
        function I(a){
            for(var i=this,r=[],n=0;
            n<this.length;
            n+=1)for(var s=i[n].parentNode;
            s;
            )a?e(s).is(a)&&r.push(s):r.push(s),s=s.parentNode;
            return e(t(r))
        }
        function D(e){
            var t=this;
            return void 0===e?new Ae([]):(t.is(e)||(t=t.parents(e).eq(0)),t)
        }
        function A(e){
            for(var t=this,a=[],i=0;
            i<this.length;
            i+=1)for(var r=t[i].querySelectorAll(e),n=0;
            n<r.length;
            n+=1)a.push(r[n]);
            return new Ae(a)
        }
        function H(a){
            for(var i=this,r=[],n=0;
            n<this.length;
            n+=1)for(var s=i[n].childNodes,o=0;
            o<s.length;
            o+=1)a?1===s[o].nodeType&&e(s[o]).is(a)&&r.push(s[o]):1===s[o].nodeType&&r.push(s[o]);
            return new Ae(t(r))
        }
        function N(){
            for(var e=this,t=0;
            t<this.length;
            t+=1)e[t].parentNode&&e[t].parentNode.removeChild(e[t]);
            return this
        }
        function G(){
            for(var t=[],a=arguments.length;
            a--;
            )t[a]=arguments[a];
            var i,r,n=this;
            for(i=0;
            i<t.length;
            i+=1){
                var s=e(t[i]);
                for(r=0;
                r<s.length;
                r+=1)n[n.length]=s[r],n.length+=1
            }
            return n
        }
        function _(){
            var e,t,a=this,i=a.$el;
            e=void 0!==a.params.width?a.params.width:i[0].clientWidth,t=void 0!==a.params.height?a.params.height:i[0].clientHeight,0===e&&a.isHorizontal()||0===t&&a.isVertical()||(e=e-parseInt(i.css("padding-left"),10)-parseInt(i.css("padding-right"),10),t=t-parseInt(i.css("padding-top"),10)-parseInt(i.css("padding-bottom"),10),Ne.extend(a,{
                width:e,height:t,size:a.isHorizontal()?e:t
            }
            ))
        }
        function B(){
            var e=this,t=e.params,a=e.$wrapperEl,i=e.size,r=e.rtlTranslate,n=e.wrongRTL,s=e.virtual&&t.virtual.enabled,o=s?e.virtual.slides.length:e.slides.length,l=a.children("."+e.params.slideClass),d=s?e.virtual.slides.length:l.length,u=[],c=[],p=[],h=t.slidesOffsetBefore;
            "function"==typeof h&&(h=t.slidesOffsetBefore.call(e));
            var f=t.slidesOffsetAfter;
            "function"==typeof f&&(f=t.slidesOffsetAfter.call(e));
            var v=e.snapGrid.length,m=e.snapGrid.length,g=t.spaceBetween,y=-h,b=0,w=0;
            if(void 0!==i){
                "string"==typeof g&&g.indexOf("%")>=0&&(g=parseFloat(g.replace("%",""))/100*i),e.virtualSize=-g,r?l.css({
                    marginLeft:"",marginTop:""
                }
                ):l.css({
                    marginRight:"",marginBottom:""
                }
                );
                var x;
                t.slidesPerColumn>1&&(x=Math.floor(d/t.slidesPerColumn)===d/e.params.slidesPerColumn?d:Math.ceil(d/t.slidesPerColumn)*t.slidesPerColumn,"auto"!==t.slidesPerView&&"row"===t.slidesPerColumnFill&&(x=Math.max(x,t.slidesPerView*t.slidesPerColumn)));
                for(var E,T=t.slidesPerColumn,S=x/T,C=S-(t.slidesPerColumn*S-d),k=0;
                k<d;
                k+=1){
                    E=0;
                    var M=l.eq(k);
                    if(t.slidesPerColumn>1){
                        var $=void 0,P=void 0,z=void 0;
                        "column"===t.slidesPerColumnFill?(P=Math.floor(k/T),z=k-P*T,(P>C||P===C&&z===T-1)&&(z+=1)>=T&&(z=0,P+=1),$=P+z*x/T,M.css({
                            "-webkit-box-ordinal-group":$,"-moz-box-ordinal-group":$,"-ms-flex-order":$,"-webkit-order":$,order:$
                        }
                        )):(z=Math.floor(k/S),P=k-z*S),M.css("margin-"+(e.isHorizontal()?"top":"left"),0!==z&&t.spaceBetween&&t.spaceBetween+"px").attr("data-swiper-column",P).attr("data-swiper-row",z)
                    }
                    if("none"!==M.css("display")){
                        if("auto"===t.slidesPerView){
                            var L=De.getComputedStyle(M[0],null),O=M[0].style.transform,I=M[0].style.webkitTransform;
                            O&&(M[0].style.transform="none"),I&&(M[0].style.webkitTransform="none"),E=e.isHorizontal()?M[0].getBoundingClientRect().width+parseFloat(L.getPropertyValue("margin-left"))+parseFloat(L.getPropertyValue("margin-right")):M[0].getBoundingClientRect().height+parseFloat(L.getPropertyValue("margin-top"))+parseFloat(L.getPropertyValue("margin-bottom")),O&&(M[0].style.transform=O),I&&(M[0].style.webkitTransform=I),t.roundLengths&&(E=Math.floor(E))
                        }
                        else E=(i-(t.slidesPerView-1)*g)/t.slidesPerView,t.roundLengths&&(E=Math.floor(E)),l[k]&&(e.isHorizontal()?l[k].style.width=E+"px":l[k].style.height=E+"px");
                        l[k]&&(l[k].swiperSlideSize=E),p.push(E),t.centeredSlides?(y=y+E/2+b/2+g,0===b&&0!==k&&(y=y-i/2-g),0===k&&(y=y-i/2-g),Math.abs(y)<.001&&(y=0),t.roundLengths&&(y=Math.floor(y)),w%t.slidesPerGroup==0&&u.push(y),c.push(y)):(t.roundLengths&&(y=Math.floor(y)),w%t.slidesPerGroup==0&&u.push(y),c.push(y),y=y+E+g),e.virtualSize+=E+g,b=E,w+=1
                    }
                }
                e.virtualSize=Math.max(e.virtualSize,i)+f;
                var D;
                if(r&&n&&("slide"===t.effect||"coverflow"===t.effect)&&a.css({
                    width:e.virtualSize+t.spaceBetween+"px"
                }
                ),Ge.flexbox&&!t.setWrapperSize||(e.isHorizontal()?a.css({
                    width:e.virtualSize+t.spaceBetween+"px"
                }
                ):a.css({
                    height:e.virtualSize+t.spaceBetween+"px"
                }
                )),t.slidesPerColumn>1&&(e.virtualSize=(E+t.spaceBetween)*x,e.virtualSize=Math.ceil(e.virtualSize/t.slidesPerColumn)-t.spaceBetween,e.isHorizontal()?a.css({
                    width:e.virtualSize+t.spaceBetween+"px"
                }
                ):a.css({
                    height:e.virtualSize+t.spaceBetween+"px"
                }
                ),t.centeredSlides)){
                    D=[];
                    for(var A=0;
                    A<u.length;
                    A+=1){
                        var H=u[A];
                        t.roundLengths&&(H=Math.floor(H)),u[A]<e.virtualSize+u[0]&&D.push(H)
                    }
                    u=D
                }
                if(!t.centeredSlides){
                    D=[];
                    for(var N=0;
                    N<u.length;
                    N+=1){
                        var G=u[N];
                        t.roundLengths&&(G=Math.floor(G)),u[N]<=e.virtualSize-i&&D.push(G)
                    }
                    u=D,Math.floor(e.virtualSize-i)-Math.floor(u[u.length-1])>1&&u.push(e.virtualSize-i)
                }
                0===u.length&&(u=[0]),0!==t.spaceBetween&&(e.isHorizontal()?r?l.css({
                    marginLeft:g+"px"
                }
                ):l.css({
                    marginRight:g+"px"
                }
                ):l.css({
                    marginBottom:g+"px"
                }
                )),Ne.extend(e,{
                    slides:l,snapGrid:u,slidesGrid:c,slidesSizesGrid:p
                }
                ),d!==o&&e.emit("slidesLengthChange"),u.length!==v&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),c.length!==m&&e.emit("slidesGridLengthChange"),(t.watchSlidesProgress||t.watchSlidesVisibility)&&e.updateSlidesOffset()
            }
        }
        function X(e){
            var t,a=this,i=[],r=0;
            if("number"==typeof e?a.setTransition(e):!0===e&&a.setTransition(a.params.speed),"auto"!==a.params.slidesPerView&&a.params.slidesPerView>1)for(t=0;
            t<Math.ceil(a.params.slidesPerView);
            t+=1){
                var n=a.activeIndex+t;
                if(n>a.slides.length)break;
                i.push(a.slides.eq(n)[0])
            }
            else i.push(a.slides.eq(a.activeIndex)[0]);
            for(t=0;
            t<i.length;
            t+=1)if(void 0!==i[t]){
                var s=i[t].offsetHeight;
                r=s>r?s:r
            }
            r&&a.$wrapperEl.css("height",r+"px")
        }
        function j(){
            for(var e=this,t=e.slides,a=0;
            a<t.length;
            a+=1)t[a].swiperSlideOffset=e.isHorizontal()?t[a].offsetLeft:t[a].offsetTop
        }
        function Y(e){
            void 0===e&&(e=this&&this.translate||0);
            var t=this,a=t.params,i=t.slides,r=t.rtlTranslate;
            if(0!==i.length){
                void 0===i[0].swiperSlideOffset&&t.updateSlidesOffset();
                var n=-e;
                r&&(n=e),i.removeClass(a.slideVisibleClass);
                for(var s=0;
                s<i.length;
                s+=1){
                    var o=i[s],l=(n+(a.centeredSlides?t.minTranslate():0)-o.swiperSlideOffset)/(o.swiperSlideSize+a.spaceBetween);
                    if(a.watchSlidesVisibility){
                        var d=-(n-o.swiperSlideOffset),u=d+t.slidesSizesGrid[s];
                        (d>=0&&d<t.size||u>0&&u<=t.size||d<=0&&u>=t.size)&&i.eq(s).addClass(a.slideVisibleClass)
                    }
                    o.progress=r?-l:l
                }
            }
        }
        function V(e){
            void 0===e&&(e=this&&this.translate||0);
            var t=this,a=t.params,i=t.maxTranslate()-t.minTranslate(),r=t.progress,n=t.isBeginning,s=t.isEnd,o=n,l=s;
            0===i?(r=0,n=!0,s=!0):(r=(e-t.minTranslate())/i,n=r<=0,s=r>=1),Ne.extend(t,{
                progress:r,isBeginning:n,isEnd:s
            }
            ),(a.watchSlidesProgress||a.watchSlidesVisibility)&&t.updateSlidesProgress(e),n&&!o&&t.emit("reachBeginning toEdge"),s&&!l&&t.emit("reachEnd toEdge"),(o&&!n||l&&!s)&&t.emit("fromEdge"),t.emit("progress",r)
        }
        function R(){
            var e=this,t=e.slides,a=e.params,i=e.$wrapperEl,r=e.activeIndex,n=e.realIndex,s=e.virtual&&a.virtual.enabled;
            t.removeClass(a.slideActiveClass+" "+a.slideNextClass+" "+a.slidePrevClass+" "+a.slideDuplicateActiveClass+" "+a.slideDuplicateNextClass+" "+a.slideDuplicatePrevClass);
            var o;
            o=s?e.$wrapperEl.find("."+a.slideClass+'[data-swiper-slide-index="'+r+'"]'):t.eq(r),o.addClass(a.slideActiveClass),a.loop&&(o.hasClass(a.slideDuplicateClass)?i.children("."+a.slideClass+":not(."+a.slideDuplicateClass+')[data-swiper-slide-index="'+n+'"]').addClass(a.slideDuplicateActiveClass):i.children("."+a.slideClass+"."+a.slideDuplicateClass+'[data-swiper-slide-index="'+n+'"]').addClass(a.slideDuplicateActiveClass));
            var l=o.nextAll("."+a.slideClass).eq(0).addClass(a.slideNextClass);
            a.loop&&0===l.length&&(l=t.eq(0),l.addClass(a.slideNextClass));
            var d=o.prevAll("."+a.slideClass).eq(0).addClass(a.slidePrevClass);
            a.loop&&0===d.length&&(d=t.eq(-1),d.addClass(a.slidePrevClass)),a.loop&&(l.hasClass(a.slideDuplicateClass)?i.children("."+a.slideClass+":not(."+a.slideDuplicateClass+')[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(a.slideDuplicateNextClass):i.children("."+a.slideClass+"."+a.slideDuplicateClass+'[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(a.slideDuplicateNextClass),d.hasClass(a.slideDuplicateClass)?i.children("."+a.slideClass+":not(."+a.slideDuplicateClass+')[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(a.slideDuplicatePrevClass):i.children("."+a.slideClass+"."+a.slideDuplicateClass+'[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(a.slideDuplicatePrevClass))
        }
        function F(e){
            var t,a=this,i=a.rtlTranslate?a.translate:-a.translate,r=a.slidesGrid,n=a.snapGrid,s=a.params,o=a.activeIndex,l=a.realIndex,d=a.snapIndex,u=e;
            if(void 0===u){
                for(var c=0;
                c<r.length;
                c+=1)void 0!==r[c+1]?i>=r[c]&&i<r[c+1]-(r[c+1]-r[c])/2?u=c:i>=r[c]&&i<r[c+1]&&(u=c+1):i>=r[c]&&(u=c);
                s.normalizeSlideIndex&&(u<0||void 0===u)&&(u=0)
            }
            if(t=n.indexOf(i)>=0?n.indexOf(i):Math.floor(u/s.slidesPerGroup),t>=n.length&&(t=n.length-1),u===o)return void(t!==d&&(a.snapIndex=t,a.emit("snapIndexChange")));
            var p=parseInt(a.slides.eq(u).attr("data-swiper-slide-index")||u,10);
            Ne.extend(a,{
                snapIndex:t,realIndex:p,previousIndex:o,activeIndex:u
            }
            ),a.emit("activeIndexChange"),a.emit("snapIndexChange"),l!==p&&a.emit("realIndexChange"),a.emit("slideChange")
        }
        function q(t){
            var a=this,i=a.params,r=e(t.target).closest("."+i.slideClass)[0],n=!1;
            if(r)for(var s=0;
            s<a.slides.length;
            s+=1)a.slides[s]===r&&(n=!0);
            if(!r||!n)return a.clickedSlide=void 0,void(a.clickedIndex=void 0);
            a.clickedSlide=r,a.virtual&&a.params.virtual.enabled?a.clickedIndex=parseInt(e(r).attr("data-swiper-slide-index"),10):a.clickedIndex=e(r).index(),i.slideToClickedSlide&&void 0!==a.clickedIndex&&a.clickedIndex!==a.activeIndex&&a.slideToClickedSlide()
        }
        function W(e){
            void 0===e&&(e=this.isHorizontal()?"x":"y");
            var t=this,a=t.params,i=t.rtlTranslate,r=t.translate,n=t.$wrapperEl;
            if(a.virtualTranslate)return i?-r:r;
            var s=Ne.getTranslate(n[0],e);
            return i&&(s=-s),s||0
        }
        function U(e,t){
            var a=this,i=a.rtlTranslate,r=a.params,n=a.$wrapperEl,s=a.progress,o=0,l=0;
            a.isHorizontal()?o=i?-e:e:l=e,r.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),r.virtualTranslate||(Ge.transforms3d?n.transform("translate3d("+o+"px, "+l+"px, 0px)"):n.transform("translate("+o+"px, "+l+"px)")),a.previousTranslate=a.translate,a.translate=a.isHorizontal()?o:l;
            var d,u=a.maxTranslate()-a.minTranslate();
            d=0===u?0:(e-a.minTranslate())/u,d!==s&&a.updateProgress(e),a.emit("setTranslate",a.translate,t)
        }
        function K(){
            return-this.snapGrid[0]
        }
        function Q(){
            return-this.snapGrid[this.snapGrid.length-1]
        }
        function Z(e,t){
            var a=this;
            a.$wrapperEl.transition(e),a.emit("setTransition",e,t)
        }
        function J(e,t){
            void 0===e&&(e=!0);
            var a=this,i=a.activeIndex,r=a.params,n=a.previousIndex;
            r.autoHeight&&a.updateAutoHeight();
            var s=t;
            if(s||(s=i>n?"next":i<n?"prev":"reset"),a.emit("transitionStart"),e&&i!==n){
                if("reset"===s)return void a.emit("slideResetTransitionStart");
                a.emit("slideChangeTransitionStart"),"next"===s?a.emit("slideNextTransitionStart"):a.emit("slidePrevTransitionStart")
            }
        }
        function ee(e,t){
            void 0===e&&(e=!0);
            var a=this,i=a.activeIndex,r=a.previousIndex;
            a.animating=!1,a.setTransition(0);
            var n=t;
            if(n||(n=i>r?"next":i<r?"prev":"reset"),a.emit("transitionEnd"),e&&i!==r){
                if("reset"===n)return void a.emit("slideResetTransitionEnd");
                a.emit("slideChangeTransitionEnd"),"next"===n?a.emit("slideNextTransitionEnd"):a.emit("slidePrevTransitionEnd")
            }
        }
        function te(e,t,a,i){
            void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0);
            var r=this,n=e;
            n<0&&(n=0);
            var s=r.params,o=r.snapGrid,l=r.slidesGrid,d=r.previousIndex,u=r.activeIndex,c=r.rtlTranslate;
            if(r.animating&&s.preventInteractionOnTransition)return!1;
            var p=Math.floor(n/s.slidesPerGroup);
            p>=o.length&&(p=o.length-1),(u||s.initialSlide||0)===(d||0)&&a&&r.emit("beforeSlideChangeStart");
            var h=-o[p];
            if(r.updateProgress(h),s.normalizeSlideIndex)for(var f=0;
            f<l.length;
            f+=1)-Math.floor(100*h)>=Math.floor(100*l[f])&&(n=f);
            if(r.initialized&&n!==u){
                if(!r.allowSlideNext&&h<r.translate&&h<r.minTranslate())return!1;
                if(!r.allowSlidePrev&&h>r.translate&&h>r.maxTranslate()&&(u||0)!==n)return!1
            }
            var v;
            return v=n>u?"next":n<u?"prev":"reset",c&&-h===r.translate||!c&&h===r.translate?(r.updateActiveIndex(n),s.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==s.effect&&r.setTranslate(h),"reset"!==v&&(r.transitionStart(a,v),r.transitionEnd(a,v)),!1):(0!==t&&Ge.transition?(r.setTransition(t),r.setTranslate(h),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,i),r.transitionStart(a,v),r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){
                r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(a,v))
            }
            ),r.$wrapperEl[0].addEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd))):(r.setTransition(0),r.setTranslate(h),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,i),r.transitionStart(a,v),r.transitionEnd(a,v)),!0)
        }
        function ae(e,t,a,i){
            void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0);
            var r=this,n=e;
            return r.params.loop&&(n+=r.loopedSlides),r.slideTo(n,t,a,i)
        }
        function ie(e,t,a){
            void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);
            var i=this,r=i.params,n=i.animating;
            return r.loop?!n&&(i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft,i.slideTo(i.activeIndex+r.slidesPerGroup,e,t,a)):i.slideTo(i.activeIndex+r.slidesPerGroup,e,t,a)
        }
        function re(e,t,a){
            function i(e){
                return e<0?-Math.floor(Math.abs(e)):Math.floor(e)
            }
            void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);
            var r=this,n=r.params,s=r.animating,o=r.snapGrid,l=r.slidesGrid,d=r.rtlTranslate;
            if(n.loop){
                if(s)return!1;
                r.loopFix(),r._clientLeft=r.$wrapperEl[0].clientLeft
            }
            var u,c=d?r.translate:-r.translate,p=i(c),h=o.map(function(e){
                return i(e)
            }
            ),f=(l.map(function(e){
                return i(e)
            }
            ),o[h.indexOf(p)],o[h.indexOf(p)-1]);
            return void 0!==f&&(u=l.indexOf(f))<0&&(u=r.activeIndex-1),r.slideTo(u,e,t,a)
        }
        function ne(e,t,a){
            void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);
            var i=this;
            return i.slideTo(i.activeIndex,e,t,a)
        }
        function se(e,t,a){
            void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);
            var i=this,r=i.activeIndex,n=Math.floor(r/i.params.slidesPerGroup);
            if(n<i.snapGrid.length-1){
                var s=i.rtlTranslate?i.translate:-i.translate,o=i.snapGrid[n];
                s-o>(i.snapGrid[n+1]-o)/2&&(r=i.params.slidesPerGroup)
            }
            return i.slideTo(r,e,t,a)
        }
        function oe(){
            var t,a=this,i=a.params,r=a.$wrapperEl,n="auto"===i.slidesPerView?a.slidesPerViewDynamic():i.slidesPerView,s=a.clickedIndex;
            if(i.loop){
                if(a.animating)return;
                t=parseInt(e(a.clickedSlide).attr("data-swiper-slide-index"),10),i.centeredSlides?s<a.loopedSlides-n/2||s>a.slides.length-a.loopedSlides+n/2?(a.loopFix(),s=r.children("."+i.slideClass+'[data-swiper-slide-index="'+t+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),Ne.nextTick(function(){
                    a.slideTo(s)
                }
                )):a.slideTo(s):s>a.slides.length-n?(a.loopFix(),s=r.children("."+i.slideClass+'[data-swiper-slide-index="'+t+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),Ne.nextTick(function(){
                    a.slideTo(s)
                }
                )):a.slideTo(s)
            }
            else a.slideTo(s)
        }
        function le(){
            var t=this,a=t.params,i=t.$wrapperEl;
            i.children("."+a.slideClass+"."+a.slideDuplicateClass).remove();
            var r=i.children("."+a.slideClass);
            if(a.loopFillGroupWithBlank){
                var n=a.slidesPerGroup-r.length%a.slidesPerGroup;
                if(n!==a.slidesPerGroup){
                    for(var s=0;
                    s<n;
                    s+=1){
                        var o=e(Ie.createElement("div")).addClass(a.slideClass+" "+a.slideBlankClass);
                        i.append(o)
                    }
                    r=i.children("."+a.slideClass)
                }
            }
            "auto"!==a.slidesPerView||a.loopedSlides||(a.loopedSlides=r.length),t.loopedSlides=parseInt(a.loopedSlides||a.slidesPerView,10),t.loopedSlides+=a.loopAdditionalSlides,t.loopedSlides>r.length&&(t.loopedSlides=r.length);
            var l=[],d=[];
            r.each(function(a,i){
                var n=e(i);
                a<t.loopedSlides&&d.push(i),a<r.length&&a>=r.length-t.loopedSlides&&l.push(i),n.attr("data-swiper-slide-index",a)
            }
            );
            for(var u=0;
            u<d.length;
            u+=1)i.append(e(d[u].cloneNode(!0)).addClass(a.slideDuplicateClass));
            for(var c=l.length-1;
            c>=0;
            c-=1)i.prepend(e(l[c].cloneNode(!0)).addClass(a.slideDuplicateClass))
        }
        function de(){
            var e,t=this,a=t.params,i=t.activeIndex,r=t.slides,n=t.loopedSlides,s=t.allowSlidePrev,o=t.allowSlideNext,l=t.snapGrid,d=t.rtlTranslate;
            t.allowSlidePrev=!0,t.allowSlideNext=!0;
            var u=-l[i],c=u-t.getTranslate();
            if(i<n){
                e=r.length-3*n+i,e+=n;
                t.slideTo(e,0,!1,!0)&&0!==c&&t.setTranslate((d?-t.translate:t.translate)-c)
            }
            else if("auto"===a.slidesPerView&&i>=2*n||i>=r.length-n){
                e=-r.length+i+n,e+=n;
                var p=t.slideTo(e,0,!1,!0);
                p&&0!==c&&t.setTranslate((d?-t.translate:t.translate)-c)
            }
            t.allowSlidePrev=s,t.allowSlideNext=o
        }
        function ue(){
            var e=this,t=e.$wrapperEl,a=e.params,i=e.slides;
            t.children("."+a.slideClass+"."+a.slideDuplicateClass).remove(),i.removeAttr("data-swiper-slide-index")
        }
        function ce(e){
            var t=this;
            if(!(Ge.touch||!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked)){
                var a=t.el;
                a.style.cursor="move",a.style.cursor=e?"-webkit-grabbing":"-webkit-grab",a.style.cursor=e?"-moz-grabbin":"-moz-grab",a.style.cursor=e?"grabbing":"grab"
            }
        }
        function pe(){
            var e=this;
            Ge.touch||e.params.watchOverflow&&e.isLocked||(e.el.style.cursor="")
        }
        function he(e){
            var t=this,a=t.$wrapperEl,i=t.params;
            if(i.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(var r=0;
            r<e.length;
            r+=1)e[r]&&a.append(e[r]);
            else a.append(e);
            i.loop&&t.loopCreate(),i.observer&&Ge.observer||t.update()
        }
        function fe(e){
            var t=this,a=t.params,i=t.$wrapperEl,r=t.activeIndex;
            a.loop&&t.loopDestroy();
            var n=r+1;
            if("object"==typeof e&&"length"in e){
                for(var s=0;
                s<e.length;
                s+=1)e[s]&&i.prepend(e[s]);
                n=r+e.length
            }
            else i.prepend(e);
            a.loop&&t.loopCreate(),a.observer&&Ge.observer||t.update(),t.slideTo(n,0,!1)
        }
        function ve(e,t){
            var a=this,i=a.$wrapperEl,r=a.params,n=a.activeIndex,s=n;
            r.loop&&(s-=a.loopedSlides,a.loopDestroy(),a.slides=i.children("."+r.slideClass));
            var o=a.slides.length;
            if(e<=0)return void a.prependSlide(t);
            if(e>=o)return void a.appendSlide(t);
            for(var l=s>e?s+1:s,d=[],u=o-1;
            u>=e;
            u-=1){
                var c=a.slides.eq(u);
                c.remove(),d.unshift(c)
            }
            if("object"==typeof t&&"length"in t){
                for(var p=0;
                p<t.length;
                p+=1)t[p]&&i.append(t[p]);
                l=s>e?s+t.length:s
            }
            else i.append(t);
            for(var h=0;
            h<d.length;
            h+=1)i.append(d[h]);
            r.loop&&a.loopCreate(),r.observer&&Ge.observer||a.update(),r.loop?a.slideTo(l+a.loopedSlides,0,!1):a.slideTo(l,0,!1)
        }
        function me(e){
            var t=this,a=t.params,i=t.$wrapperEl,r=t.activeIndex,n=r;
            a.loop&&(n-=t.loopedSlides,t.loopDestroy(),t.slides=i.children("."+a.slideClass));
            var s,o=n;
            if("object"==typeof e&&"length"in e){
                for(var l=0;
                l<e.length;
                l+=1)s=e[l],t.slides[s]&&t.slides.eq(s).remove(),s<o&&(o-=1);
                o=Math.max(o,0)
            }
            else s=e,t.slides[s]&&t.slides.eq(s).remove(),s<o&&(o-=1),o=Math.max(o,0);
            a.loop&&t.loopCreate(),a.observer&&Ge.observer||t.update(),a.loop?t.slideTo(o+t.loopedSlides,0,!1):t.slideTo(o,0,!1)
        }
        function ge(){
            for(var e=this,t=[],a=0;
            a<e.slides.length;
            a+=1)t.push(a);
            e.removeSlide(t)
        }
        function ye(t){
            var a=this,i=a.touchEventsData,r=a.params,n=a.touches;
            if(!a.animating||!r.preventInteractionOnTransition){
                var s=t;
                if(s.originalEvent&&(s=s.originalEvent),i.isTouchEvent="touchstart"===s.type,(i.isTouchEvent||!("which"in s)||3!==s.which)&&(!i.isTouched||!i.isMoved)){
                    if(r.noSwiping&&e(s.target).closest(r.noSwipingSelector?r.noSwipingSelector:"."+r.noSwipingClass)[0])return void(a.allowClick=!0);
                    if(!r.swipeHandler||e(s).closest(r.swipeHandler)[0]){
                        n.currentX="touchstart"===s.type?s.targetTouches[0].pageX:s.pageX,n.currentY="touchstart"===s.type?s.targetTouches[0].pageY:s.pageY;
                        var o=n.currentX,l=n.currentY,d=r.edgeSwipeDetection||r.iOSEdgeSwipeDetection,u=r.edgeSwipeThreshold||r.iOSEdgeSwipeThreshold;
                        if(!d||!(o<=u||o>=De.screen.width-u)){
                            if(Ne.extend(i,{
                                isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0
                            }
                            ),n.startX=o,n.startY=l,i.touchStartTime=Ne.now(),a.allowClick=!0,a.updateSize(),a.swipeDirection=void 0,r.threshold>0&&(i.allowThresholdMove=!1),"touchstart"!==s.type){
                                var c=!0;
                                e(s.target).is(i.formElements)&&(c=!1),Ie.activeElement&&e(Ie.activeElement).is(i.formElements)&&Ie.activeElement!==s.target&&Ie.activeElement.blur(),c&&a.allowTouchMove&&s.preventDefault()
                            }
                            a.emit("touchStart",s)
                        }
                    }
                }
            }
        }
        function be(t){
            var a=this,i=a.touchEventsData,r=a.params,n=a.touches,s=a.rtlTranslate,o=t;
            if(o.originalEvent&&(o=o.originalEvent),!i.isTouched)return void(i.startMoving&&i.isScrolling&&a.emit("touchMoveOpposite",o));
            if(!i.isTouchEvent||"mousemove"!==o.type){
                var l="touchmove"===o.type?o.targetTouches[0].pageX:o.pageX,d="touchmove"===o.type?o.targetTouches[0].pageY:o.pageY;
                if(o.preventedByNestedSwiper)return n.startX=l,void(n.startY=d);
                if(!a.allowTouchMove)return a.allowClick=!1,void(i.isTouched&&(Ne.extend(n,{
                    startX:l,startY:d,currentX:l,currentY:d
                }
                ),i.touchStartTime=Ne.now()));
                if(i.isTouchEvent&&r.touchReleaseOnEdges&&!r.loop)if(a.isVertical()){
                    if(d<n.startY&&a.translate<=a.maxTranslate()||d>n.startY&&a.translate>=a.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)
                }
                else if(l<n.startX&&a.translate<=a.maxTranslate()||l>n.startX&&a.translate>=a.minTranslate())return;
                if(i.isTouchEvent&&Ie.activeElement&&o.target===Ie.activeElement&&e(o.target).is(i.formElements))return i.isMoved=!0,void(a.allowClick=!1);
                if(i.allowTouchCallbacks&&a.emit("touchMove",o),!(o.targetTouches&&o.targetTouches.length>1)){
                    n.currentX=l,n.currentY=d;
                    var u=n.currentX-n.startX,c=n.currentY-n.startY;
                    if(!(a.params.threshold&&Math.sqrt(Math.pow(u,2)+Math.pow(c,2))<a.params.threshold)){
                        if(void 0===i.isScrolling){
                            var p;
                            a.isHorizontal()&&n.currentY===n.startY||a.isVertical()&&n.currentX===n.startX?i.isScrolling=!1:u*u+c*c>=25&&(p=180*Math.atan2(Math.abs(c),Math.abs(u))/Math.PI,i.isScrolling=a.isHorizontal()?p>r.touchAngle:90-p>r.touchAngle)
                        }
                        if(i.isScrolling&&a.emit("touchMoveOpposite",o),void 0===i.startMoving&&(n.currentX===n.startX&&n.currentY===n.startY||(i.startMoving=!0)),i.isScrolling)return void(i.isTouched=!1);
                        if(i.startMoving){
                            a.allowClick=!1,o.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&o.stopPropagation(),i.isMoved||(r.loop&&a.loopFix(),i.startTranslate=a.getTranslate(),a.setTransition(0),a.animating&&a.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!r.grabCursor||!0!==a.allowSlideNext&&!0!==a.allowSlidePrev||a.setGrabCursor(!0),a.emit("sliderFirstMove",o)),a.emit("sliderMove",o),i.isMoved=!0;
                            var h=a.isHorizontal()?u:c;
                            n.diff=h,h*=r.touchRatio,s&&(h=-h),a.swipeDirection=h>0?"prev":"next",i.currentTranslate=h+i.startTranslate;
                            var f=!0,v=r.resistanceRatio;
                            if(r.touchReleaseOnEdges&&(v=0),h>0&&i.currentTranslate>a.minTranslate()?(f=!1,r.resistance&&(i.currentTranslate=a.minTranslate()-1+Math.pow(-a.minTranslate()+i.startTranslate+h,v))):h<0&&i.currentTranslate<a.maxTranslate()&&(f=!1,r.resistance&&(i.currentTranslate=a.maxTranslate()+1-Math.pow(a.maxTranslate()-i.startTranslate-h,v))),f&&(o.preventedByNestedSwiper=!0),!a.allowSlideNext&&"next"===a.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!a.allowSlidePrev&&"prev"===a.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),r.threshold>0){
                                if(!(Math.abs(h)>r.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);
                                if(!i.allowThresholdMove)return i.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,i.currentTranslate=i.startTranslate,void(n.diff=a.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY)
                            }
                            r.followFinger&&((r.freeMode||r.watchSlidesProgress||r.watchSlidesVisibility)&&(a.updateActiveIndex(),a.updateSlidesClasses()),r.freeMode&&(0===i.velocities.length&&i.velocities.push({
                                position:n[a.isHorizontal()?"startX":"startY"],time:i.touchStartTime
                            }
                            ),i.velocities.push({
                                position:n[a.isHorizontal()?"currentX":"currentY"],time:Ne.now()
                            }
                            )),a.updateProgress(i.currentTranslate),a.setTranslate(i.currentTranslate))
                        }
                    }
                }
            }
        }
        function we(e){
            var t=this,a=t.touchEventsData,i=t.params,r=t.touches,n=t.rtlTranslate,s=t.$wrapperEl,o=t.slidesGrid,l=t.snapGrid,d=e;
            if(d.originalEvent&&(d=d.originalEvent),a.allowTouchCallbacks&&t.emit("touchEnd",d),a.allowTouchCallbacks=!1,!a.isTouched)return a.isMoved&&i.grabCursor&&t.setGrabCursor(!1),a.isMoved=!1,void(a.startMoving=!1);
            i.grabCursor&&a.isMoved&&a.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);
            var u=Ne.now(),c=u-a.touchStartTime;
            if(t.allowClick&&(t.updateClickedSlide(d),t.emit("tap",d),c<300&&u-a.lastClickTime>300&&(a.clickTimeout&&clearTimeout(a.clickTimeout),a.clickTimeout=Ne.nextTick(function(){
                t&&!t.destroyed&&t.emit("click",d)
            }
            ,300)),c<300&&u-a.lastClickTime<300&&(a.clickTimeout&&clearTimeout(a.clickTimeout),t.emit("doubleTap",d))),a.lastClickTime=Ne.now(),Ne.nextTick(function(){
                t.destroyed||(t.allowClick=!0)
            }
            ),!a.isTouched||!a.isMoved||!t.swipeDirection||0===r.diff||a.currentTranslate===a.startTranslate)return a.isTouched=!1,a.isMoved=!1,void(a.startMoving=!1);
            a.isTouched=!1,a.isMoved=!1,a.startMoving=!1;
            var p;
            if(p=i.followFinger?n?t.translate:-t.translate:-a.currentTranslate,i.freeMode){
                if(p<-t.minTranslate())return void t.slideTo(t.activeIndex);
                if(p>-t.maxTranslate())return void(t.slides.length<l.length?t.slideTo(l.length-1):t.slideTo(t.slides.length-1));
                if(i.freeModeMomentum){
                    if(a.velocities.length>1){
                        var h=a.velocities.pop(),f=a.velocities.pop(),v=h.position-f.position,m=h.time-f.time;
                        t.velocity=v/m,t.velocity/=2,Math.abs(t.velocity)<i.freeModeMinimumVelocity&&(t.velocity=0),(m>150||Ne.now()-h.time>300)&&(t.velocity=0)
                    }
                    else t.velocity=0;
                    t.velocity*=i.freeModeMomentumVelocityRatio,a.velocities.length=0;
                    var g=1e3*i.freeModeMomentumRatio,y=t.velocity*g,b=t.translate+y;
                    n&&(b=-b);
                    var w,x,E=!1,T=20*Math.abs(t.velocity)*i.freeModeMomentumBounceRatio;
                    if(b<t.maxTranslate())i.freeModeMomentumBounce?(b+t.maxTranslate()<-T&&(b=t.maxTranslate()-T),w=t.maxTranslate(),E=!0,a.allowMomentumBounce=!0):b=t.maxTranslate(),i.loop&&i.centeredSlides&&(x=!0);
                    else if(b>t.minTranslate())i.freeModeMomentumBounce?(b-t.minTranslate()>T&&(b=t.minTranslate()+T),w=t.minTranslate(),E=!0,a.allowMomentumBounce=!0):b=t.minTranslate(),i.loop&&i.centeredSlides&&(x=!0);
                    else if(i.freeModeSticky){
                        for(var S,C=0;
                        C<l.length;
                        C+=1)if(l[C]>-b){
                            S=C;
                            break
                        }
                        b=Math.abs(l[S]-b)<Math.abs(l[S-1]-b)||"next"===t.swipeDirection?l[S]:l[S-1],b=-b
                    }
                    if(x&&t.once("transitionEnd",function(){
                        t.loopFix()
                    }
                    ),0!==t.velocity)g=n?Math.abs((-b-t.translate)/t.velocity):Math.abs((b-t.translate)/t.velocity);
                    else if(i.freeModeSticky)return void t.slideToClosest();
                    i.freeModeMomentumBounce&&E?(t.updateProgress(w),t.setTransition(g),t.setTranslate(b),t.transitionStart(!0,t.swipeDirection),t.animating=!0,s.transitionEnd(function(){
                        t&&!t.destroyed&&a.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(i.speed),t.setTranslate(w),s.transitionEnd(function(){
                            t&&!t.destroyed&&t.transitionEnd()
                        }
                        ))
                    }
                    )):t.velocity?(t.updateProgress(b),t.setTransition(g),t.setTranslate(b),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,s.transitionEnd(function(){
                        t&&!t.destroyed&&t.transitionEnd()
                    }
                    ))):t.updateProgress(b),t.updateActiveIndex(),t.updateSlidesClasses()
                }
                else if(i.freeModeSticky)return void t.slideToClosest();
                return void((!i.freeModeMomentum||c>=i.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses()))
            }
            for(var k=0,M=t.slidesSizesGrid[0],$=0;
            $<o.length;
            $+=i.slidesPerGroup)void 0!==o[$+i.slidesPerGroup]?p>=o[$]&&p<o[$+i.slidesPerGroup]&&(k=$,M=o[$+i.slidesPerGroup]-o[$]):p>=o[$]&&(k=$,M=o[o.length-1]-o[o.length-2]);
            var P=(p-o[k])/M;
            if(c>i.longSwipesMs){
                if(!i.longSwipes)return void t.slideTo(t.activeIndex);
                "next"===t.swipeDirection&&(P>=i.longSwipesRatio?t.slideTo(k+i.slidesPerGroup):t.slideTo(k)),"prev"===t.swipeDirection&&(P>1-i.longSwipesRatio?t.slideTo(k+i.slidesPerGroup):t.slideTo(k))
            }
            else{
                if(!i.shortSwipes)return void t.slideTo(t.activeIndex);
                "next"===t.swipeDirection&&t.slideTo(k+i.slidesPerGroup),"prev"===t.swipeDirection&&t.slideTo(k)
            }
        }
        function xe(){
            var e=this,t=e.params,a=e.el;
            if(!a||0!==a.offsetWidth){
                t.breakpoints&&e.setBreakpoint();
                var i=e.allowSlideNext,r=e.allowSlidePrev,n=e.snapGrid;
                if(e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),t.freeMode){
                    var s=Math.min(Math.max(e.translate,e.maxTranslate()),e.minTranslate());
                    e.setTranslate(s),e.updateActiveIndex(),e.updateSlidesClasses(),t.autoHeight&&e.updateAutoHeight()
                }
                else e.updateSlidesClasses(),("auto"===t.slidesPerView||t.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0);
                e.allowSlidePrev=r,e.allowSlideNext=i,e.params.watchOverflow&&n!==e.snapGrid&&e.checkOverflow()
            }
        }
        function Ee(e){
            var t=this;
            t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))
        }
        function Te(){
            var e=this,t=e.params,a=e.touchEvents,i=e.el,r=e.wrapperEl;
            e.onTouchStart=ye.bind(e),e.onTouchMove=be.bind(e),e.onTouchEnd=we.bind(e),e.onClick=Ee.bind(e);
            var n="container"===t.touchEventsTarget?i:r,s=!!t.nested;
            if(Ge.touch||!Ge.pointerEvents&&!Ge.prefixedPointerEvents){
                if(Ge.touch){
                    var o=!("touchstart"!==a.start||!Ge.passiveListener||!t.passiveListeners)&&{
                        passive:!0,capture:!1
                    }
                    ;
                    n.addEventListener(a.start,e.onTouchStart,o),n.addEventListener(a.move,e.onTouchMove,Ge.passiveListener?{
                        passive:!1,capture:s
                    }
                    :s),n.addEventListener(a.end,e.onTouchEnd,o)
                }
                (t.simulateTouch&&!We.ios&&!We.android||t.simulateTouch&&!Ge.touch&&We.ios)&&(n.addEventListener("mousedown",e.onTouchStart,!1),Ie.addEventListener("mousemove",e.onTouchMove,s),Ie.addEventListener("mouseup",e.onTouchEnd,!1))
            }
            else n.addEventListener(a.start,e.onTouchStart,!1),Ie.addEventListener(a.move,e.onTouchMove,s),Ie.addEventListener(a.end,e.onTouchEnd,!1);
            (t.preventClicks||t.preventClicksPropagation)&&n.addEventListener("click",e.onClick,!0),e.on(We.ios||We.android?"resize orientationchange observerUpdate":"resize observerUpdate",xe,!0)
        }
        function Se(){
            var e=this,t=e.params,a=e.touchEvents,i=e.el,r=e.wrapperEl,n="container"===t.touchEventsTarget?i:r,s=!!t.nested;
            if(Ge.touch||!Ge.pointerEvents&&!Ge.prefixedPointerEvents){
                if(Ge.touch){
                    var o=!("onTouchStart"!==a.start||!Ge.passiveListener||!t.passiveListeners)&&{
                        passive:!0,capture:!1
                    }
                    ;
                    n.removeEventListener(a.start,e.onTouchStart,o),n.removeEventListener(a.move,e.onTouchMove,s),n.removeEventListener(a.end,e.onTouchEnd,o)
                }
                (t.simulateTouch&&!We.ios&&!We.android||t.simulateTouch&&!Ge.touch&&We.ios)&&(n.removeEventListener("mousedown",e.onTouchStart,!1),Ie.removeEventListener("mousemove",e.onTouchMove,s),Ie.removeEventListener("mouseup",e.onTouchEnd,!1))
            }
            else n.removeEventListener(a.start,e.onTouchStart,!1),Ie.removeEventListener(a.move,e.onTouchMove,s),Ie.removeEventListener(a.end,e.onTouchEnd,!1);
            (t.preventClicks||t.preventClicksPropagation)&&n.removeEventListener("click",e.onClick,!0),e.off(We.ios||We.android?"resize orientationchange observerUpdate":"resize observerUpdate",xe)
        }
        function Ce(){
            var e=this,t=e.activeIndex,a=e.initialized,i=e.loopedSlides;
            void 0===i&&(i=0);
            var r=e.params,n=r.breakpoints;
            if(n&&(!n||0!==Object.keys(n).length)){
                var s=e.getBreakpoint(n);
                if(s&&e.currentBreakpoint!==s){
                    var o=s in n?n[s]:e.originalParams,l=r.loop&&o.slidesPerView!==r.slidesPerView;
                    Ne.extend(e.params,o),Ne.extend(e,{
                        allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev
                    }
                    ),e.currentBreakpoint=s,l&&a&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-i+e.loopedSlides,0,!1)),e.emit("breakpoint",o)
                }
            }
        }
        function ke(e){
            if(e){
                var t=!1,a=[];
                Object.keys(e).forEach(function(e){
                    a.push(e)
                }
                ),a.sort(function(e,t){
                    return parseInt(e,10)-parseInt(t,10)
                }
                );
                for(var i=0;
                i<a.length;
                i+=1){
                    var r=a[i];
                    r>=De.innerWidth&&!t&&(t=r)
                }
                return t||"max"
            }
        }
        function Me(){
            var e=this,t=e.classNames,a=e.params,i=e.rtl,r=e.$el,n=[];
            n.push(a.direction),a.freeMode&&n.push("free-mode"),Ge.flexbox||n.push("no-flexbox"),a.autoHeight&&n.push("autoheight"),i&&n.push("rtl"),a.slidesPerColumn>1&&n.push("multirow"),We.android&&n.push("android"),We.ios&&n.push("ios"),Qe.isIE&&(Ge.pointerEvents||Ge.prefixedPointerEvents)&&n.push("wp8-"+a.direction),n.forEach(function(e){
                t.push(a.containerModifierClass+e)
            }
            ),r.addClass(t.join(" "))
        }
        function $e(){
            var e=this,t=e.$el,a=e.classNames;
            t.removeClass(a.join(" "))
        }
        function Pe(e,t,a,i,r,n){
            function s(){
                n&&n()
            }
            var o;
            e.complete&&r?s():t?(o=new De.Image,o.onload=s,o.onerror=s,i&&(o.sizes=i),a&&(o.srcset=a),t&&(o.src=t)):s()
        }
        function ze(){
            function e(){
                void 0!==t&&null!==t&&t&&!t.destroyed&&(void 0!==t.imagesLoaded&&(t.imagesLoaded+=1),t.imagesLoaded===t.imagesToLoad.length&&(t.params.updateOnImagesReady&&t.update(),t.emit("imagesReady")))
            }
            var t=this;
            t.imagesToLoad=t.$el.find("img");
            for(var a=0;
            a<t.imagesToLoad.length;
            a+=1){
                var i=t.imagesToLoad[a];
                t.loadImage(i,i.currentSrc||i.getAttribute("src"),i.srcset||i.getAttribute("srcset"),i.sizes||i.getAttribute("sizes"),!0,e)
            }
        }
        function Le(){
            var e=this,t=e.isLocked;
            e.isLocked=1===e.snapGrid.length,e.allowSlideNext=!e.isLocked,e.allowSlidePrev=!e.isLocked,t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock"),t&&t!==e.isLocked&&(e.isEnd=!1,e.navigation.update())
        }
        function Oe(){
            var e="onwheel"in Ie;
            if(!e){
                var t=Ie.createElement("div");
                t.setAttribute("onwheel","return;
                "),e="function"==typeof t.onwheel
            }
            return!e&&Ie.implementation&&Ie.implementation.hasFeature&&!0!==Ie.implementation.hasFeature("","")&&(e=Ie.implementation.hasFeature("Events.wheel","3.0")),e
        }
        var Ie="undefined"==typeof document?{
            body:{
            }
            ,addEventListener:function(){
            }
            ,removeEventListener:function(){
            }
            ,activeElement:{
                blur:function(){
                }
                ,nodeName:""
            }
            ,querySelector:function(){
                return null
            }
            ,querySelectorAll:function(){
                return[]
            }
            ,getElementById:function(){
                return null
            }
            ,createEvent:function(){
                return{
                    initEvent:function(){
                    }
                }
            }
            ,createElement:function(){
                return{
                    children:[],childNodes:[],style:{
                    }
                    ,setAttribute:function(){
                    }
                    ,getElementsByTagName:function(){
                        return[]
                    }
                }
            }
            ,location:{
                hash:""
            }
        }
        :document,De="undefined"==typeof window?{
            document:Ie,navigator:{
                userAgent:""
            }
            ,location:{
            }
            ,history:{
            }
            ,CustomEvent:function(){
                return this
            }
            ,addEventListener:function(){
            }
            ,removeEventListener:function(){
            }
            ,getComputedStyle:function(){
                return{
                    getPropertyValue:function(){
                        return""
                    }
                }
            }
            ,Image:function(){
            }
            ,Date:function(){
            }
            ,screen:{
            }
            ,setTimeout:function(){
            }
            ,clearTimeout:function(){
            }
        }
        :window,Ae=function(e){
            for(var t=this,a=0;
            a<e.length;
            a+=1)t[a]=e[a];
            return t.length=e.length,this
        }
        ;
        e.fn=Ae.prototype,e.Class=Ae,e.Dom7=Ae;
        var He={
            addClass:a,removeClass:i,hasClass:r,toggleClass:n,attr:s,removeAttr:o,data:l,transform:d,transition:u,on:c,off:p,trigger:h,transitionEnd:f,outerWidth:v,outerHeight:m,offset:g,css:b,each:w,html:x,text:E,is:T,index:S,eq:C,append:k,prepend:M,next:$,nextAll:P,prev:z,prevAll:L,parent:O,parents:I,closest:D,find:A,children:H,remove:N,add:G,styles:y
        }
        ;
        Object.keys(He).forEach(function(t){
            e.fn[t]=He[t]
        }
        );
        var Ne={
            deleteProps:function(e){
                var t=e;
                Object.keys(t).forEach(function(e){
                    try{
                        t[e]=null
                    }
                    catch(e){
                    }
                    try{
                        delete t[e]
                    }
                    catch(e){
                    }
                }
                )
            }
            ,nextTick:function(e,t){
                return void 0===t&&(t=0),setTimeout(e,t)
            }
            ,now:function(){
                return Date.now()
            }
            ,getTranslate:function(e,t){
                void 0===t&&(t="x");
                var a,i,r,n=De.getComputedStyle(e,null);
                return De.WebKitCSSMatrix?(i=n.transform||n.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(function(e){
                    return e.replace(",",".")
                }
                ).join(", ")),r=new De.WebKitCSSMatrix("none"===i?"":i)):(r=n.MozTransform||n.OTransform||n.MsTransform||n.msTransform||n.transform||n.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=r.toString().split(",")),"x"===t&&(i=De.WebKitCSSMatrix?r.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=De.WebKitCSSMatrix?r.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0
            }
            ,parseUrlQuery:function(e){
                var t,a,i,r,n={
                }
                ,s=e||De.location.href;
                if("string"==typeof s&&s.length)for(s=s.indexOf("?")>-1?s.replace(/\S*\?/,""):"",a=s.split("&").filter(function(e){
                    return""!==e
                }
                ),r=a.length,t=0;
                t<r;
                t+=1)i=a[t].replace(/#\S+/g,"").split("="),n[decodeURIComponent(i[0])]=void 0===i[1]?void 0:decodeURIComponent(i[1])||"";
                return n
            }
            ,isObject:function(e){
                return"object"==typeof e&&null!==e&&e.constructor&&e.constructor===Object
            }
            ,extend:function(){
                for(var e=[],t=arguments.length;
                t--;
                )e[t]=arguments[t];
                for(var a=Object(e[0]),i=1;
                i<e.length;
                i+=1){
                    var r=e[i];
                    if(void 0!==r&&null!==r)for(var n=Object.keys(Object(r)),s=0,o=n.length;
                    s<o;
                    s+=1){
                        var l=n[s],d=Object.getOwnPropertyDescriptor(r,l);
                        void 0!==d&&d.enumerable&&(Ne.isObject(a[l])&&Ne.isObject(r[l])?Ne.extend(a[l],r[l]):!Ne.isObject(a[l])&&Ne.isObject(r[l])?(a[l]={
                        }
                        ,Ne.extend(a[l],r[l])):a[l]=r[l])
                    }
                }
                return a
            }
        }
        ,Ge=function(){
            var e=Ie.createElement("div");
            return{
                touch:De.Modernizr&&!0===De.Modernizr.touch||function(){
                    return!!("ontouchstart"in De||De.DocumentTouch&&Ie instanceof De.DocumentTouch)
                }
                (),pointerEvents:!(!De.navigator.pointerEnabled&&!De.PointerEvent),prefixedPointerEvents:!!De.navigator.msPointerEnabled,transition:function(){
                    var t=e.style;
                    return"transition"in t||"webkitTransition"in t||"MozTransition"in t
                }
                (),transforms3d:De.Modernizr&&!0===De.Modernizr.csstransforms3d||function(){
                    var t=e.style;
                    return"webkitPerspective"in t||"MozPerspective"in t||"OPerspective"in t||"MsPerspective"in t||"perspective"in t
                }
                (),flexbox:function(){
                    for(var t=e.style,a="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),i=0;
                    i<a.length;
                    i+=1)if(a[i]in t)return!0;
                    return!1
                }
                (),observer:function(){
                    return"MutationObserver"in De||"WebkitMutationObserver"in De
                }
                (),passiveListener:function(){
                    var e=!1;
                    try{
                        var t=Object.defineProperty({
                        }
                        ,"passive",{
                            get:function(){
                                e=!0
                            }
                        }
                        );
                        De.addEventListener("testPassiveListener",null,t)
                    }
                    catch(e){
                    }
                    return e
                }
                (),gestures:function(){
                    return"ongesturestart"in De
                }
                ()
            }
        }
        (),_e=function(e){
            void 0===e&&(e={
            }
            );
            var t=this;
            t.params=e,t.eventsListeners={
            }
            ,t.params&&t.params.on&&Object.keys(t.params.on).forEach(function(e){
                t.on(e,t.params.on[e])
            }
            )
        }
        ,Be={
            components:{
                configurable:!0
            }
        }
        ;
        _e.prototype.on=function(e,t,a){
            var i=this;
            if("function"!=typeof t)return i;
            var r=a?"unshift":"push";
            return e.split(" ").forEach(function(e){
                i.eventsListeners[e]||(i.eventsListeners[e]=[]),i.eventsListeners[e][r](t)
            }
            ),i
        }
        ,_e.prototype.once=function(e,t,a){
            function i(){
                for(var a=[],n=arguments.length;
                n--;
                )a[n]=arguments[n];
                t.apply(r,a),r.off(e,i)
            }
            var r=this;
            return"function"!=typeof t?r:r.on(e,i,a)
        }
        ,_e.prototype.off=function(e,t){
            var a=this;
            return a.eventsListeners?(e.split(" ").forEach(function(e){
                void 0===t?a.eventsListeners[e]=[]:a.eventsListeners[e].forEach(function(i,r){
                    i===t&&a.eventsListeners[e].splice(r,1)
                }
                )
            }
            ),a):a
        }
        ,_e.prototype.emit=function(){
            for(var e=[],t=arguments.length;
            t--;
            )e[t]=arguments[t];
            var a=this;
            if(!a.eventsListeners)return a;
            var i,r,n;
            return"string"==typeof e[0]||Array.isArray(e[0])?(i=e[0],r=e.slice(1,e.length),n=a):(i=e[0].events,r=e[0].data,n=e[0].context||a),(Array.isArray(i)?i:i.split(" ")).forEach(function(e){
                if(a.eventsListeners&&a.eventsListeners[e]){
                    var t=[];
                    a.eventsListeners[e].forEach(function(e){
                        t.push(e)
                    }
                    ),t.forEach(function(e){
                        e.apply(n,r)
                    }
                    )
                }
            }
            ),a
        }
        ,_e.prototype.useModulesParams=function(e){
            var t=this;
            t.modules&&Object.keys(t.modules).forEach(function(a){
                var i=t.modules[a];
                i.params&&Ne.extend(e,i.params)
            }
            )
        }
        ,_e.prototype.useModules=function(e){
            void 0===e&&(e={
            }
            );
            var t=this;
            t.modules&&Object.keys(t.modules).forEach(function(a){
                var i=t.modules[a],r=e[a]||{
                }
                ;
                i.instance&&Object.keys(i.instance).forEach(function(e){
                    var a=i.instance[e];
                    t[e]="function"==typeof a?a.bind(t):a
                }
                ),i.on&&t.on&&Object.keys(i.on).forEach(function(e){
                    t.on(e,i.on[e])
                }
                ),i.create&&i.create.bind(t)(r)
            }
            )
        }
        ,Be.components.set=function(e){
            var t=this;
            t.use&&t.use(e)
        }
        ,_e.installModule=function(e){
            for(var t=[],a=arguments.length-1;
            a-- >0;
            )t[a]=arguments[a+1];
            var i=this;
            i.prototype.modules||(i.prototype.modules={
            }
            );
            var r=e.name||Object.keys(i.prototype.modules).length+"_"+Ne.now();
            return i.prototype.modules[r]=e,e.proto&&Object.keys(e.proto).forEach(function(t){
                i.prototype[t]=e.proto[t]
            }
            ),e.static&&Object.keys(e.static).forEach(function(t){
                i[t]=e.static[t]
            }
            ),e.install&&e.install.apply(i,t),i
        }
        ,_e.use=function(e){
            for(var t=[],a=arguments.length-1;
            a-- >0;
            )t[a]=arguments[a+1];
            var i=this;
            return Array.isArray(e)?(e.forEach(function(e){
                return i.installModule(e)
            }
            ),i):i.installModule.apply(i,[e].concat(t))
        }
        ,Object.defineProperties(_e,Be);
        var Xe={
            updateSize:_,updateSlides:B,updateAutoHeight:X,updateSlidesOffset:j,updateSlidesProgress:Y,updateProgress:V,updateSlidesClasses:R,updateActiveIndex:F,updateClickedSlide:q
        }
        ,je={
            getTranslate:W,setTranslate:U,minTranslate:K,maxTranslate:Q
        }
        ,Ye={
            setTransition:Z,transitionStart:J,transitionEnd:ee
        }
        ,Ve={
            slideTo:te,slideToLoop:ae,slideNext:ie,slidePrev:re,slideReset:ne,slideToClosest:se,slideToClickedSlide:oe
        }
        ,Re={
            loopCreate:le,loopFix:de,loopDestroy:ue
        }
        ,Fe={
            setGrabCursor:ce,unsetGrabCursor:pe
        }
        ,qe={
            appendSlide:he,prependSlide:fe,addSlide:ve,removeSlide:me,removeAllSlides:ge
        }
        ,We=function(){
            var e=De.navigator.userAgent,t={
                ios:!1,android:!1,androidChrome:!1,desktop:!1,windows:!1,iphone:!1,ipod:!1,ipad:!1,cordova:De.cordova||De.phonegap,phonegap:De.cordova||De.phonegap
            }
            ,a=e.match(/(Windows Phone);
            ?[\s\/]+([\d.]+)?/),i=e.match(/(Android);
            ?[\s\/]+([\d.]+)?/),r=e.match(/(iPad).*OS\s([\d_]+)/),n=e.match(/(iPod)(.*OS\s([\d_]+))?/),s=!r&&e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            if(a&&(t.os="windows",t.osVersion=a[2],t.windows=!0),i&&!a&&(t.os="android",t.osVersion=i[2],t.android=!0,t.androidChrome=e.toLowerCase().indexOf("chrome")>=0),(r||s||n)&&(t.os="ios",t.ios=!0),s&&!n&&(t.osVersion=s[2].replace(/_/g,"."),t.iphone=!0),r&&(t.osVersion=r[2].replace(/_/g,"."),t.ipad=!0),n&&(t.osVersion=n[3]?n[3].replace(/_/g,"."):null,t.iphone=!0),t.ios&&t.osVersion&&e.indexOf("Version/")>=0&&"10"===t.osVersion.split(".")[0]&&(t.osVersion=e.toLowerCase().split("version/")[1].split(" ")[0]),t.desktop=!(t.os||t.android||t.webView),t.webView=(s||r||n)&&e.match(/.*AppleWebKit(?!.*Safari)/i),t.os&&"ios"===t.os){
                var o=t.osVersion.split("."),l=Ie.querySelector('meta[name="viewport"]');
                t.minimalUi=!t.webView&&(n||s)&&(1*o[0]==7?1*o[1]>=1:1*o[0]>7)&&l&&l.getAttribute("content").indexOf("minimal-ui")>=0
            }
            return t.pixelRatio=De.devicePixelRatio||1,t
        }
        (),Ue={
            attachEvents:Te,detachEvents:Se
        }
        ,Ke={
            setBreakpoint:Ce,getBreakpoint:ke
        }
        ,Qe=function(){
            return{
                isIE:!!De.navigator.userAgent.match(/Trident/g)||!!De.navigator.userAgent.match(/MSIE/g),isSafari:function(){
                    var e=De.navigator.userAgent.toLowerCase();
                    return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0
                }
                (),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(De.navigator.userAgent)
            }
        }
        (),Ze={
            addClasses:Me,removeClasses:$e
        }
        ,Je={
            loadImage:Pe,preloadImages:ze
        }
        ,et={
            checkOverflow:Le
        }
        ,tt={
            init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,preventInteractionOnTransition:!1,edgeSwipeDetection:!1,edgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,watchOverflow:!1,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!0,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0
        }
        ,at={
            update:Xe,translate:je,transition:Ye,slide:Ve,loop:Re,grabCursor:Fe,manipulation:qe,events:Ue,breakpoints:Ke,checkOverflow:et,classes:Ze,images:Je
        }
        ,it={
        }
        ,rt=function(t){
            function a(){
                for(var i,r=[],n=arguments.length;
                n--;
                )r[n]=arguments[n];
                var s,o;
                1===r.length&&r[0].constructor&&r[0].constructor===Object?o=r[0]:(i=r,s=i[0],o=i[1]),o||(o={
                }
                ),o=Ne.extend({
                }
                ,o),s&&!o.el&&(o.el=s),t.call(this,o),Object.keys(at).forEach(function(e){
                    Object.keys(at[e]).forEach(function(t){
                        a.prototype[t]||(a.prototype[t]=at[e][t])
                    }
                    )
                }
                );
                var l=this;
                void 0===l.modules&&(l.modules={
                }
                ),Object.keys(l.modules).forEach(function(e){
                    var t=l.modules[e];
                    if(t.params){
                        var a=Object.keys(t.params)[0],i=t.params[a];
                        if("object"!=typeof i)return;
                        if(!(a in o&&"enabled"in i))return;
                        !0===o[a]&&(o[a]={
                            enabled:!0
                        }
                        ),"object"!=typeof o[a]||"enabled"in o[a]||(o[a].enabled=!0),o[a]||(o[a]={
                            enabled:!1
                        }
                        )
                    }
                }
                );
                var d=Ne.extend({
                }
                ,tt);
                l.useModulesParams(d),l.params=Ne.extend({
                }
                ,d,it,o),l.originalParams=Ne.extend({
                }
                ,l.params),l.passedParams=Ne.extend({
                }
                ,o),l.$=e;
                var u=e(l.params.el);
                if(s=u[0]){
                    if(u.length>1){
                        var c=[];
                        return u.each(function(e,t){
                            var i=Ne.extend({
                            }
                            ,o,{
                                el:t
                            }
                            );
                            c.push(new a(i))
                        }
                        ),c
                    }
                    s.swiper=l,u.data("swiper",l);
                    var p=u.children("."+l.params.wrapperClass);
                    return Ne.extend(l,{
                        $el:u,el:s,$wrapperEl:p,wrapperEl:p[0],classNames:[],slides:e(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){
                            return"horizontal"===l.params.direction
                        }
                        ,isVertical:function(){
                            return"vertical"===l.params.direction
                        }
                        ,rtl:"rtl"===s.dir.toLowerCase()||"rtl"===u.css("direction"),rtlTranslate:"horizontal"===l.params.direction&&("rtl"===s.dir.toLowerCase()||"rtl"===u.css("direction")),wrongRTL:"-webkit-box"===p.css("display"),activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev,touchEvents:function(){
                            var e=["touchstart","touchmove","touchend"],t=["mousedown","mousemove","mouseup"];
                            return Ge.pointerEvents?t=["pointerdown","pointermove","pointerup"]:Ge.prefixedPointerEvents&&(t=["MSPointerDown","MSPointerMove","MSPointerUp"]),l.touchEventsTouch={
                                start:e[0],move:e[1],end:e[2]
                            }
                            ,l.touchEventsDesktop={
                                start:t[0],move:t[1],end:t[2]
                            }
                            ,Ge.touch||!l.params.simulateTouch?l.touchEventsTouch:l.touchEventsDesktop
                        }
                        (),touchEventsData:{
                            isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video",lastClickTime:Ne.now(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0
                        }
                        ,allowClick:!0,allowTouchMove:l.params.allowTouchMove,touches:{
                            startX:0,startY:0,currentX:0,currentY:0,diff:0
                        }
                        ,imagesToLoad:[],imagesLoaded:0
                    }
                    ),l.useModules(),l.params.init&&l.init(),l
                }
            }
            t&&(a.__proto__=t),a.prototype=Object.create(t&&t.prototype),a.prototype.constructor=a;
            var i={
                extendedDefaults:{
                    configurable:!0
                }
                ,defaults:{
                    configurable:!0
                }
                ,Class:{
                    configurable:!0
                }
                ,$:{
                    configurable:!0
                }
            }
            ;
            return a.prototype.slidesPerViewDynamic=function(){
                var e=this,t=e.params,a=e.slides,i=e.slidesGrid,r=e.size,n=e.activeIndex,s=1;
                if(t.centeredSlides){
                    for(var o,l=a[n].swiperSlideSize,d=n+1;
                    d<a.length;
                    d+=1)a[d]&&!o&&(l+=a[d].swiperSlideSize,s+=1,l>r&&(o=!0));
                    for(var u=n-1;
                    u>=0;
                    u-=1)a[u]&&!o&&(l+=a[u].swiperSlideSize,s+=1,l>r&&(o=!0))
                }
                else for(var c=n+1;
                c<a.length;
                c+=1)i[c]-i[n]<r&&(s+=1);
                return s
            }
            ,a.prototype.update=function(){
                function e(){
                    var e=t.rtlTranslate?-1*t.translate:t.translate,a=Math.min(Math.max(e,t.maxTranslate()),t.minTranslate());
                    t.setTranslate(a),t.updateActiveIndex(),t.updateSlidesClasses()
                }
                var t=this;
                if(t&&!t.destroyed){
                    var a=t.snapGrid,i=t.params;
                    i.breakpoints&&t.setBreakpoint(),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();
                    t.params.freeMode?(e(),t.params.autoHeight&&t.updateAutoHeight()):(("auto"===t.params.slidesPerView||t.params.slidesPerView>1)&&t.isEnd&&!t.params.centeredSlides?t.slideTo(t.slides.length-1,0,!1,!0):t.slideTo(t.activeIndex,0,!1,!0))||e(),i.watchOverflow&&a!==t.snapGrid&&t.checkOverflow(),t.emit("update")
                }
            }
            ,a.prototype.init=function(){
                var e=this;
                e.initialized||(e.emit("beforeInit"),e.params.breakpoints&&e.setBreakpoint(),e.addClasses(),e.params.loop&&e.loopCreate(),e.updateSize(),e.updateSlides(),e.params.watchOverflow&&e.checkOverflow(),e.params.grabCursor&&e.setGrabCursor(),e.params.preloadImages&&e.preloadImages(),e.params.loop?e.slideTo(e.params.initialSlide+e.loopedSlides,0,e.params.runCallbacksOnInit):e.slideTo(e.params.initialSlide,0,e.params.runCallbacksOnInit),e.attachEvents(),e.initialized=!0,e.emit("init"))
            }
            ,a.prototype.destroy=function(e,t){
                void 0===e&&(e=!0),void 0===t&&(t=!0);
                var a=this,i=a.params,r=a.$el,n=a.$wrapperEl,s=a.slides;
                return void 0===a.params||a.destroyed?null:(a.emit("beforeDestroy"),a.initialized=!1,a.detachEvents(),i.loop&&a.loopDestroy(),t&&(a.removeClasses(),r.removeAttr("style"),n.removeAttr("style"),s&&s.length&&s.removeClass([i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),a.emit("destroy"),Object.keys(a.eventsListeners).forEach(function(e){
                    a.off(e)
                }
                ),!1!==e&&(a.$el[0].swiper=null,a.$el.data("swiper",null),Ne.deleteProps(a)),a.destroyed=!0,null)
            }
            ,a.extendDefaults=function(e){
                Ne.extend(it,e)
            }
            ,i.extendedDefaults.get=function(){
                return it
            }
            ,i.defaults.get=function(){
                return tt
            }
            ,i.Class.get=function(){
                return t
            }
            ,i.$.get=function(){
                return e
            }
            ,Object.defineProperties(a,i),a
        }
        (_e),nt={
            name:"device",proto:{
                device:We
            }
            ,static:{
                device:We
            }
        }
        ,st={
            name:"support",proto:{
                support:Ge
            }
            ,static:{
                support:Ge
            }
        }
        ,ot={
            name:"browser",proto:{
                browser:Qe
            }
            ,static:{
                browser:Qe
            }
        }
        ,lt={
            name:"resize",create:function(){
                var e=this;
                Ne.extend(e,{
                    resize:{
                        resizeHandler:function(){
                            e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))
                        }
                        ,orientationChangeHandler:function(){
                            e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")
                        }
                    }
                }
                )
            }
            ,on:{
                init:function(){
                    var e=this;
                    De.addEventListener("resize",e.resize.resizeHandler),De.addEventListener("orientationchange",e.resize.orientationChangeHandler)
                }
                ,destroy:function(){
                    var e=this;
                    De.removeEventListener("resize",e.resize.resizeHandler),De.removeEventListener("orientationchange",e.resize.orientationChangeHandler)
                }
            }
        }
        ,dt={
            func:De.MutationObserver||De.WebkitMutationObserver,attach:function(e,t){
                void 0===t&&(t={
                }
                );
                var a=this,i=dt.func,r=new i(function(e){
                    if(1===e.length)return void a.emit("observerUpdate",e[0]);
                    var t=function(){
                        a.emit("observerUpdate",e[0])
                    }
                    ;
                    De.requestAnimationFrame?De.requestAnimationFrame(t):De.setTimeout(t,0)
                }
                );
                r.observe(e,{
                    attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData
                }
                ),a.observer.observers.push(r)
            }
            ,init:function(){
                var e=this;
                if(Ge.observer&&e.params.observer){
                    if(e.params.observeParents)for(var t=e.$el.parents(),a=0;
                    a<t.length;
                    a+=1)e.observer.attach(t[a]);
                    e.observer.attach(e.$el[0],{
                        childList:!1
                    }
                    ),e.observer.attach(e.$wrapperEl[0],{
                        attributes:!1
                    }
                    )
                }
            }
            ,destroy:function(){
                var e=this;
                e.observer.observers.forEach(function(e){
                    e.disconnect()
                }
                ),e.observer.observers=[]
            }
        }
        ,ut={
            name:"observer",params:{
                observer:!1,observeParents:!1
            }
            ,create:function(){
                var e=this;
                Ne.extend(e,{
                    observer:{
                        init:dt.init.bind(e),attach:dt.attach.bind(e),destroy:dt.destroy.bind(e),observers:[]
                    }
                }
                )
            }
            ,on:{
                init:function(){
                    this.observer.init()
                }
                ,destroy:function(){
                    this.observer.destroy()
                }
            }
        }
        ,ct={
            update:function(e){
                function t(){
                    a.updateSlides(),a.updateProgress(),a.updateSlidesClasses(),a.lazy&&a.params.lazy.enabled&&a.lazy.load()
                }
                var a=this,i=a.params,r=i.slidesPerView,n=i.slidesPerGroup,s=i.centeredSlides,o=a.virtual,l=o.from,d=o.to,u=o.slides,c=o.slidesGrid,p=o.renderSlide,h=o.offset;
                a.updateActiveIndex();
                var f,v=a.activeIndex||0;
                f=a.rtlTranslate?"right":a.isHorizontal()?"left":"top";
                var m,g;
                s?(m=Math.floor(r/2)+n,g=Math.floor(r/2)+n):(m=r+(n-1),g=n);
                var y=Math.max((v||0)-g,0),b=Math.min((v||0)+m,u.length-1),w=(a.slidesGrid[y]||0)-(a.slidesGrid[0]||0);
                if(Ne.extend(a.virtual,{
                    from:y,to:b,offset:w,slidesGrid:a.slidesGrid
                }
                ),l===y&&d===b&&!e)return a.slidesGrid!==c&&w!==h&&a.slides.css(f,w+"px"),void a.updateProgress();
                if(a.params.virtual.renderExternal)return a.params.virtual.renderExternal.call(a,{
                    offset:w,from:y,to:b,slides:function(){
                        for(var e=[],t=y;
                        t<=b;
                        t+=1)e.push(u[t]);
                        return e
                    }
                    ()
                }
                ),void t();
                var x=[],E=[];
                if(e)a.$wrapperEl.find("."+a.params.slideClass).remove();
                else for(var T=l;
                T<=d;
                T+=1)(T<y||T>b)&&a.$wrapperEl.find("."+a.params.slideClass+'[data-swiper-slide-index="'+T+'"]').remove();
                for(var S=0;
                S<u.length;
                S+=1)S>=y&&S<=b&&(void 0===d||e?E.push(S):(S>d&&E.push(S),S<l&&x.push(S)));
                E.forEach(function(e){
                    a.$wrapperEl.append(p(u[e],e))
                }
                ),x.sort(function(e,t){
                    return e<t
                }
                ).forEach(function(e){
                    a.$wrapperEl.prepend(p(u[e],e))
                }
                ),a.$wrapperEl.children(".swiper-slide").css(f,w+"px"),t()
            }
            ,renderSlide:function(t,a){
                var i=this,r=i.params.virtual;
                if(r.cache&&i.virtual.cache[a])return i.virtual.cache[a];
                var n=e(r.renderSlide?r.renderSlide.call(i,t,a):'<div class="'+i.params.slideClass+'" data-swiper-slide-index="'+a+'">'+t+"</div>");
                return n.attr("data-swiper-slide-index")||n.attr("data-swiper-slide-index",a),r.cache&&(i.virtual.cache[a]=n),n
            }
            ,appendSlide:function(e){
                var t=this;
                t.virtual.slides.push(e),t.virtual.update(!0)
            }
            ,prependSlide:function(e){
                var t=this;
                if(t.virtual.slides.unshift(e),t.params.virtual.cache){
                    var a=t.virtual.cache,i={
                    }
                    ;
                    Object.keys(a).forEach(function(e){
                        i[e+1]=a[e]
                    }
                    ),t.virtual.cache=i
                }
                t.virtual.update(!0),t.slideNext(0)
            }
        }
        ,pt={
            name:"virtual",params:{
                virtual:{
                    enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null
                }
            }
            ,create:function(){
                var e=this;
                Ne.extend(e,{
                    virtual:{
                        update:ct.update.bind(e),appendSlide:ct.appendSlide.bind(e),prependSlide:ct.prependSlide.bind(e),renderSlide:ct.renderSlide.bind(e),slides:e.params.virtual.slides,cache:{
                        }
                    }
                }
                )
            }
            ,on:{
                beforeInit:function(){
                    var e=this;
                    if(e.params.virtual.enabled){
                        e.classNames.push(e.params.containerModifierClass+"virtual");
                        var t={
                            watchSlidesProgress:!0
                        }
                        ;
                        Ne.extend(e.params,t),Ne.extend(e.originalParams,t),e.virtual.update()
                    }
                }
                ,setTranslate:function(){
                    var e=this;
                    e.params.virtual.enabled&&e.virtual.update()
                }
            }
        }
        ,ht={
            handle:function(e){
                var t=this,a=t.rtlTranslate,i=e;
                i.originalEvent&&(i=i.originalEvent);
                var r=i.keyCode||i.charCode;
                if(!t.allowSlideNext&&(t.isHorizontal()&&39===r||t.isVertical()&&40===r))return!1;
                if(!t.allowSlidePrev&&(t.isHorizontal()&&37===r||t.isVertical()&&38===r))return!1;
                if(!(i.shiftKey||i.altKey||i.ctrlKey||i.metaKey||Ie.activeElement&&Ie.activeElement.nodeName&&("input"===Ie.activeElement.nodeName.toLowerCase()||"textarea"===Ie.activeElement.nodeName.toLowerCase()))){
                    if(t.params.keyboard.onlyInViewport&&(37===r||39===r||38===r||40===r)){
                        var n=!1;
                        if(t.$el.parents("."+t.params.slideClass).length>0&&0===t.$el.parents("."+t.params.slideActiveClass).length)return;
                        var s=De.innerWidth,o=De.innerHeight,l=t.$el.offset();
                        a&&(l.left-=t.$el[0].scrollLeft);
                        for(var d=[[l.left,l.top],[l.left+t.width,l.top],[l.left,l.top+t.height],[l.left+t.width,l.top+t.height]],u=0;
                        u<d.length;
                        u+=1){
                            var c=d[u];
                            c[0]>=0&&c[0]<=s&&c[1]>=0&&c[1]<=o&&(n=!0)
                        }
                        if(!n)return
                    }
                    t.isHorizontal()?(37!==r&&39!==r||(i.preventDefault?i.preventDefault():i.returnValue=!1),(39===r&&!a||37===r&&a)&&t.slideNext(),(37===r&&!a||39===r&&a)&&t.slidePrev()):(38!==r&&40!==r||(i.preventDefault?i.preventDefault():i.returnValue=!1),40===r&&t.slideNext(),38===r&&t.slidePrev()),t.emit("keyPress",r)
                }
            }
            ,enable:function(){
                var t=this;
                t.keyboard.enabled||(e(Ie).on("keydown",t.keyboard.handle),t.keyboard.enabled=!0)
            }
            ,disable:function(){
                var t=this;
                t.keyboard.enabled&&(e(Ie).off("keydown",t.keyboard.handle),t.keyboard.enabled=!1)
            }
        }
        ,ft={
            name:"keyboard",params:{
                keyboard:{
                    enabled:!1,onlyInViewport:!0
                }
            }
            ,create:function(){
                var e=this;
                Ne.extend(e,{
                    keyboard:{
                        enabled:!1,enable:ht.enable.bind(e),disable:ht.disable.bind(e),handle:ht.handle.bind(e)
                    }
                }
                )
            }
            ,on:{
                init:function(){
                    var e=this;
                    e.params.keyboard.enabled&&e.keyboard.enable()
                }
                ,destroy:function(){
                    var e=this;
                    e.keyboard.enabled&&e.keyboard.disable()
                }
            }
        }
        ,vt={
            lastScrollTime:Ne.now(),event:function(){
                return De.navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":Oe()?"wheel":"mousewheel"
            }
            (),normalize:function(e){
                var t=0,a=0,i=0,r=0;
                return"detail"in e&&(a=e.detail),"wheelDelta"in e&&(a=-e.wheelDelta/120),"wheelDeltaY"in e&&(a=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=a,a=0),i=10*t,r=10*a,"deltaY"in e&&(r=e.deltaY),"deltaX"in e&&(i=e.deltaX),(i||r)&&e.deltaMode&&(1===e.deltaMode?(i*=40,r*=40):(i*=800,r*=800)),i&&!t&&(t=i<1?-1:1),r&&!a&&(a=r<1?-1:1),{
                    spinX:t,spinY:a,pixelX:i,pixelY:r
                }
            }
            ,handleMouseEnter:function(){
                this.mouseEntered=!0
            }
            ,handleMouseLeave:function(){
                this.mouseEntered=!1
            }
            ,handle:function(e){
                var t=e,a=this,i=a.params.mousewheel;
                if(!a.mouseEntered&&!i.releaseOnEdges)return!0;
                t.originalEvent&&(t=t.originalEvent);
                var r=0,n=a.rtlTranslate?-1:1,s=vt.normalize(t);
                if(i.forceToAxis)if(a.isHorizontal()){
                    if(!(Math.abs(s.pixelX)>Math.abs(s.pixelY)))return!0;
                    r=s.pixelX*n
                }
                else{
                    if(!(Math.abs(s.pixelY)>Math.abs(s.pixelX)))return!0;
                    r=s.pixelY
                }
                else r=Math.abs(s.pixelX)>Math.abs(s.pixelY)?-s.pixelX*n:-s.pixelY;
                if(0===r)return!0;
                if(i.invert&&(r=-r),a.params.freeMode){
                    a.params.loop&&a.loopFix();
                    var o=a.getTranslate()+r*i.sensitivity,l=a.isBeginning,d=a.isEnd;
                    if(o>=a.minTranslate()&&(o=a.minTranslate()),o<=a.maxTranslate()&&(o=a.maxTranslate()),a.setTransition(0),a.setTranslate(o),a.updateProgress(),a.updateActiveIndex(),a.updateSlidesClasses(),(!l&&a.isBeginning||!d&&a.isEnd)&&a.updateSlidesClasses(),a.params.freeModeSticky&&(clearTimeout(a.mousewheel.timeout),a.mousewheel.timeout=Ne.nextTick(function(){
                        a.slideToClosest()
                    }
                    ,300)),a.emit("scroll",t),a.params.autoplay&&a.params.autoplayDisableOnInteraction&&a.autoplay.stop(),o===a.minTranslate()||o===a.maxTranslate())return!0
                }
                else{
                    if(Ne.now()-a.mousewheel.lastScrollTime>60)if(r<0)if(a.isEnd&&!a.params.loop||a.animating){
                        if(i.releaseOnEdges)return!0
                    }
                    else a.slideNext(),a.emit("scroll",t);
                    else if(a.isBeginning&&!a.params.loop||a.animating){
                        if(i.releaseOnEdges)return!0
                    }
                    else a.slidePrev(),a.emit("scroll",t);
                    a.mousewheel.lastScrollTime=(new De.Date).getTime()
                }
                return t.preventDefault?t.preventDefault():t.returnValue=!1,!1
            }
            ,enable:function(){
                var t=this;
                if(!vt.event)return!1;
                if(t.mousewheel.enabled)return!1;
                var a=t.$el;
                return"container"!==t.params.mousewheel.eventsTarged&&(a=e(t.params.mousewheel.eventsTarged)),a.on("mouseenter",t.mousewheel.handleMouseEnter),a.on("mouseleave",t.mousewheel.handleMouseLeave),a.on(vt.event,t.mousewheel.handle),t.mousewheel.enabled=!0,!0
            }
            ,disable:function(){
                var t=this;
                if(!vt.event)return!1;
                if(!t.mousewheel.enabled)return!1;
                var a=t.$el;
                return"container"!==t.params.mousewheel.eventsTarged&&(a=e(t.params.mousewheel.eventsTarged)),a.off(vt.event,t.mousewheel.handle),t.mousewheel.enabled=!1,!0
            }
        }
        ,mt={
            name:"mousewheel",params:{
                mousewheel:{
                    enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarged:"container"
                }
            }
            ,create:function(){
                var e=this;
                Ne.extend(e,{
                    mousewheel:{
                        enabled:!1,enable:vt.enable.bind(e),disable:vt.disable.bind(e),handle:vt.handle.bind(e),handleMouseEnter:vt.handleMouseEnter.bind(e),handleMouseLeave:vt.handleMouseLeave.bind(e),lastScrollTime:Ne.now()
                    }
                }
                )
            }
            ,on:{
                init:function(){
                    var e=this;
                    e.params.mousewheel.enabled&&e.mousewheel.enable()
                }
                ,destroy:function(){
                    var e=this;
                    e.mousewheel.enabled&&e.mousewheel.disable()
                }
            }
        }
        ,gt={
            update:function(){
                var e=this,t=e.params.navigation;
                if(!e.params.loop){
                    var a=e.navigation,i=a.$nextEl,r=a.$prevEl;
                    r&&r.length>0&&(e.isBeginning?r.addClass(t.disabledClass):r.removeClass(t.disabledClass),r[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](t.lockClass)),i&&i.length>0&&(e.isEnd?i.addClass(t.disabledClass):i.removeClass(t.disabledClass),i[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](t.lockClass))
                }
            }
            ,init:function(){
                var t=this,a=t.params.navigation;
                if(a.nextEl||a.prevEl){
                    var i,r;
                    a.nextEl&&(i=e(a.nextEl),t.params.uniqueNavElements&&"string"==typeof a.nextEl&&i.length>1&&1===t.$el.find(a.nextEl).length&&(i=t.$el.find(a.nextEl))),a.prevEl&&(r=e(a.prevEl),t.params.uniqueNavElements&&"string"==typeof a.prevEl&&r.length>1&&1===t.$el.find(a.prevEl).length&&(r=t.$el.find(a.prevEl))),i&&i.length>0&&i.on("click",function(e){
                        e.preventDefault(),t.isEnd&&!t.params.loop||t.slideNext()
                    }
                    ),r&&r.length>0&&r.on("click",function(e){
                        e.preventDefault(),t.isBeginning&&!t.params.loop||t.slidePrev()
                    }
                    ),Ne.extend(t.navigation,{
                        $nextEl:i,nextEl:i&&i[0],$prevEl:r,prevEl:r&&r[0]
                    }
                    )
                }
            }
            ,destroy:function(){
                var e=this,t=e.navigation,a=t.$nextEl,i=t.$prevEl;
                a&&a.length&&(a.off("click"),a.removeClass(e.params.navigation.disabledClass)),i&&i.length&&(i.off("click"),i.removeClass(e.params.navigation.disabledClass))
            }
        }
        ,yt={
            name:"navigation",params:{
                navigation:{
                    nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"
                }
            }
            ,create:function(){
                var e=this;
                Ne.extend(e,{
                    navigation:{
                        init:gt.init.bind(e),update:gt.update.bind(e),destroy:gt.destroy.bind(e)
                    }
                }
                )
            }
            ,on:{
                init:function(){
                    var e=this;
                    e.navigation.init(),e.navigation.update()
                }
                ,toEdge:function(){
                    this.navigation.update()
                }
                ,fromEdge:function(){
                    this.navigation.update()
                }
                ,destroy:function(){
                    this.navigation.destroy()
                }
                ,click:function(t){
                    var a=this,i=a.navigation,r=i.$nextEl,n=i.$prevEl;
                    !a.params.navigation.hideOnClick||e(t.target).is(n)||e(t.target).is(r)||(r&&r.toggleClass(a.params.navigation.hiddenClass),n&&n.toggleClass(a.params.navigation.hiddenClass))
                }
            }
        }
        ,bt={
            update:function(){
                var t=this,a=t.rtl,i=t.params.pagination;
                if(i.el&&t.pagination.el&&t.pagination.$el&&0!==t.pagination.$el.length){
                    var r,n=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,s=t.pagination.$el,o=t.params.loop?Math.ceil((n-2*t.loopedSlides)/t.params.slidesPerGroup):t.snapGrid.length;
                    if(t.params.loop?(r=Math.ceil((t.activeIndex-t.loopedSlides)/t.params.slidesPerGroup),r>n-1-2*t.loopedSlides&&(r-=n-2*t.loopedSlides),r>o-1&&(r-=o),r<0&&"bullets"!==t.params.paginationType&&(r=o+r)):r=void 0!==t.snapIndex?t.snapIndex:t.activeIndex||0,"bullets"===i.type&&t.pagination.bullets&&t.pagination.bullets.length>0){
                        var l,d,u,c=t.pagination.bullets;
                        if(i.dynamicBullets&&(t.pagination.bulletSize=c.eq(0)[t.isHorizontal()?"outerWidth":"outerHeight"](!0),s.css(t.isHorizontal()?"width":"height",t.pagination.bulletSize*(i.dynamicMainBullets+4)+"px"),i.dynamicMainBullets>1&&void 0!==t.previousIndex&&(t.pagination.dynamicBulletIndex+=r-t.previousIndex,t.pagination.dynamicBulletIndex>i.dynamicMainBullets-1?t.pagination.dynamicBulletIndex=i.dynamicMainBullets-1:t.pagination.dynamicBulletIndex<0&&(t.pagination.dynamicBulletIndex=0)),l=r-t.pagination.dynamicBulletIndex,d=l+(Math.min(c.length,i.dynamicMainBullets)-1),u=(d+l)/2),c.removeClass(i.bulletActiveClass+" "+i.bulletActiveClass+"-next "+i.bulletActiveClass+"-next-next "+i.bulletActiveClass+"-prev "+i.bulletActiveClass+"-prev-prev "+i.bulletActiveClass+"-main"),s.length>1)c.each(function(t,a){
                            var n=e(a),s=n.index();
                            s===r&&n.addClass(i.bulletActiveClass),i.dynamicBullets&&(s>=l&&s<=d&&n.addClass(i.bulletActiveClass+"-main"),s===l&&n.prev().addClass(i.bulletActiveClass+"-prev").prev().addClass(i.bulletActiveClass+"-prev-prev"),s===d&&n.next().addClass(i.bulletActiveClass+"-next").next().addClass(i.bulletActiveClass+"-next-next"))
                        }
                        );
                        else{
                            if(c.eq(r).addClass(i.bulletActiveClass),i.dynamicBullets){
                                for(var p=c.eq(l),h=c.eq(d),f=l;
                                f<=d;
                                f+=1)c.eq(f).addClass(i.bulletActiveClass+"-main");
                                p.prev().addClass(i.bulletActiveClass+"-prev").prev().addClass(i.bulletActiveClass+"-prev-prev"),h.next().addClass(i.bulletActiveClass+"-next").next().addClass(i.bulletActiveClass+"-next-next")
                            }
                        }
                        if(i.dynamicBullets){
                            var v=Math.min(c.length,i.dynamicMainBullets+4),m=(t.pagination.bulletSize*v-t.pagination.bulletSize)/2-u*t.pagination.bulletSize,g=a?"right":"left";
                            c.css(t.isHorizontal()?g:"top",m+"px")
                        }
                    }
                    if("fraction"===i.type&&(s.find("."+i.currentClass).text(i.formatFractionCurrent(r+1)),s.find("."+i.totalClass).text(i.formatFractionTotal(o))),"progressbar"===i.type){
                        var y;
                        y=i.progressbarOpposite?t.isHorizontal()?"vertical":"horizontal":t.isHorizontal()?"horizontal":"vertical";
                        var b=(r+1)/o,w=1,x=1;
                        "horizontal"===y?w=b:x=b,s.find("."+i.progressbarFillClass).transform("translate3d(0,0,0) scaleX("+w+") scaleY("+x+")").transition(t.params.speed)
                    }
                    "custom"===i.type&&i.renderCustom?(s.html(i.renderCustom(t,r+1,o)),t.emit("paginationRender",t,s[0])):t.emit("paginationUpdate",t,s[0]),s[t.params.watchOverflow&&t.isLocked?"addClass":"removeClass"](i.lockClass)
                }
            }
            ,render:function(){
                var e=this,t=e.params.pagination;
                if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){
                    var a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el,r="";
                    if("bullets"===t.type){
                        for(var n=e.params.loop?Math.ceil((a-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length,s=0;
                        s<n;
                        s+=1)t.renderBullet?r+=t.renderBullet.call(e,s,t.bulletClass):r+="<"+t.bulletElement+' class="'+t.bulletClass+'"></'+t.bulletElement+">";
                        i.html(r),e.pagination.bullets=i.find("."+t.bulletClass)
                    }
                    "fraction"===t.type&&(r=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):'<span class="'+t.currentClass+'"></span> / <span class="'+t.totalClass+'"></span>',i.html(r)),"progressbar"===t.type&&(r=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):'<span class="'+t.progressbarFillClass+'"></span>',i.html(r)),"custom"!==t.type&&e.emit("paginationRender",e.pagination.$el[0])
                }
            }
            ,init:function(){
                var t=this,a=t.params.pagination;
                if(a.el){
                    var i=e(a.el);
                    0!==i.length&&(t.params.uniqueNavElements&&"string"==typeof a.el&&i.length>1&&1===t.$el.find(a.el).length&&(i=t.$el.find(a.el)),"bullets"===a.type&&a.clickable&&i.addClass(a.clickableClass),i.addClass(a.modifierClass+a.type),"bullets"===a.type&&a.dynamicBullets&&(i.addClass(""+a.modifierClass+a.type+"-dynamic"),t.pagination.dynamicBulletIndex=0,a.dynamicMainBullets<1&&(a.dynamicMainBullets=1)),"progressbar"===a.type&&a.progressbarOpposite&&i.addClass(a.progressbarOppositeClass),a.clickable&&i.on("click","."+a.bulletClass,function(a){
                        a.preventDefault();
                        var i=e(this).index()*t.params.slidesPerGroup;
                        t.params.loop&&(i+=t.loopedSlides),t.slideTo(i)
                    }
                    ),Ne.extend(t.pagination,{
                        $el:i,el:i[0]
                    }
                    ))
                }
            }
            ,destroy:function(){
                var e=this,t=e.params.pagination;
                if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){
                    var a=e.pagination.$el;
                    a.removeClass(t.hiddenClass),a.removeClass(t.modifierClass+t.type),e.pagination.bullets&&e.pagination.bullets.removeClass(t.bulletActiveClass),t.clickable&&a.off("click","."+t.bulletClass)
                }
            }
        }
        ,wt={
            name:"pagination",params:{
                pagination:{
                    el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){
                        return e
                    }
                    ,formatFractionTotal:function(e){
                        return e
                    }
                    ,bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"
                }
            }
            ,create:function(){
                var e=this;
                Ne.extend(e,{
                    pagination:{
                        init:bt.init.bind(e),render:bt.render.bind(e),update:bt.update.bind(e),destroy:bt.destroy.bind(e),dynamicBulletIndex:0
                    }
                }
                )
            }
            ,on:{
                init:function(){
                    var e=this;
                    e.pagination.init(),e.pagination.render(),e.pagination.update()
                }
                ,activeIndexChange:function(){
                    var e=this;
                    e.params.loop?e.pagination.update():void 0===e.snapIndex&&e.pagination.update()
                }
                ,snapIndexChange:function(){
                    var e=this;
                    e.params.loop||e.pagination.update()
                }
                ,slidesLengthChange:function(){
                    var e=this;
                    e.params.loop&&(e.pagination.render(),e.pagination.update())
                }
                ,snapGridLengthChange:function(){
                    var e=this;
                    e.params.loop||(e.pagination.render(),e.pagination.update())
                }
                ,destroy:function(){
                    this.pagination.destroy()
                }
                ,click:function(t){
                    var a=this;
                    a.params.pagination.el&&a.params.pagination.hideOnClick&&a.pagination.$el.length>0&&!e(t.target).hasClass(a.params.pagination.bulletClass)&&a.pagination.$el.toggleClass(a.params.pagination.hiddenClass)
                }
            }
        }
        ,xt={
            setTranslate:function(){
                var e=this;
                if(e.params.scrollbar.el&&e.scrollbar.el){
                    var t=e.scrollbar,a=e.rtlTranslate,i=e.progress,r=t.dragSize,n=t.trackSize,s=t.$dragEl,o=t.$el,l=e.params.scrollbar,d=r,u=(n-r)*i;
                    a?(u=-u,u>0?(d=r-u,u=0):-u+r>n&&(d=n+u)):u<0?(d=r+u,u=0):u+r>n&&(d=n-u),e.isHorizontal()?(Ge.transforms3d?s.transform("translate3d("+u+"px, 0, 0)"):s.transform("translateX("+u+"px)"),s[0].style.width=d+"px"):(Ge.transforms3d?s.transform("translate3d(0px, "+u+"px, 0)"):s.transform("translateY("+u+"px)"),s[0].style.height=d+"px"),l.hide&&(clearTimeout(e.scrollbar.timeout),o[0].style.opacity=1,e.scrollbar.timeout=setTimeout(function(){
                        o[0].style.opacity=0,o.transition(400)
                    }
                    ,1e3))
                }
            }
            ,setTransition:function(e){
                var t=this;
                t.params.scrollbar.el&&t.scrollbar.el&&t.scrollbar.$dragEl.transition(e)
            }
            ,updateSize:function(){
                var e=this;
                if(e.params.scrollbar.el&&e.scrollbar.el){
                    var t=e.scrollbar,a=t.$dragEl,i=t.$el;
                    a[0].style.width="",a[0].style.height="";
                    var r,n=e.isHorizontal()?i[0].offsetWidth:i[0].offsetHeight,s=e.size/e.virtualSize,o=s*(n/e.size);
                    r="auto"===e.params.scrollbar.dragSize?n*s:parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?a[0].style.width=r+"px":a[0].style.height=r+"px",i[0].style.display=s>=1?"none":"",e.params.scrollbarHide&&(i[0].style.opacity=0),Ne.extend(t,{
                        trackSize:n,divider:s,moveDivider:o,dragSize:r
                    }
                    ),t.$el[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](e.params.scrollbar.lockClass)
                }
            }
            ,setDragPosition:function(e){
                var t,a=this,i=a.scrollbar,r=a.rtlTranslate,n=i.$el,s=i.dragSize,o=i.trackSize;
                t=a.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY;
                var l;
                l=(t-n.offset()[a.isHorizontal()?"left":"top"]-s/2)/(o-s),l=Math.max(Math.min(l,1),0),r&&(l=1-l);
                var d=a.minTranslate()+(a.maxTranslate()-a.minTranslate())*l;
                a.updateProgress(d),a.setTranslate(d),a.updateActiveIndex(),a.updateSlidesClasses()
            }
            ,onDragStart:function(e){
                var t=this,a=t.params.scrollbar,i=t.scrollbar,r=t.$wrapperEl,n=i.$el,s=i.$dragEl;
                t.scrollbar.isTouched=!0,e.preventDefault(),e.stopPropagation(),r.transition(100),s.transition(100),i.setDragPosition(e),clearTimeout(t.scrollbar.dragTimeout),n.transition(0),a.hide&&n.css("opacity",1),t.emit("scrollbarDragStart",e)
            }
            ,onDragMove:function(e){
                var t=this,a=t.scrollbar,i=t.$wrapperEl,r=a.$el,n=a.$dragEl;
                t.scrollbar.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,a.setDragPosition(e),i.transition(0),r.transition(0),n.transition(0),t.emit("scrollbarDragMove",e))
            }
            ,onDragEnd:function(e){
                var t=this,a=t.params.scrollbar,i=t.scrollbar,r=i.$el;
                t.scrollbar.isTouched&&(t.scrollbar.isTouched=!1,a.hide&&(clearTimeout(t.scrollbar.dragTimeout),t.scrollbar.dragTimeout=Ne.nextTick(function(){
                    r.css("opacity",0),r.transition(400)
                }
                ,1e3)),t.emit("scrollbarDragEnd",e),a.snapOnRelease&&t.slideToClosest())
            }
            ,enableDraggable:function(){
                var e=this;
                if(e.params.scrollbar.el){
                    var t=e.scrollbar,a=e.touchEvents,i=e.touchEventsDesktop,r=e.params,n=t.$el,s=n[0],o=!(!Ge.passiveListener||!r.passiveListeners)&&{
                        passive:!1,capture:!1
                    }
                    ,l=!(!Ge.passiveListener||!r.passiveListeners)&&{
                        passive:!0,capture:!1
                    }
                    ;
                    Ge.touch||!Ge.pointerEvents&&!Ge.prefixedPointerEvents?(Ge.touch&&(s.addEventListener(a.start,e.scrollbar.onDragStart,o),s.addEventListener(a.move,e.scrollbar.onDragMove,o),s.addEventListener(a.end,e.scrollbar.onDragEnd,l)),(r.simulateTouch&&!We.ios&&!We.android||r.simulateTouch&&!Ge.touch&&We.ios)&&(s.addEventListener("mousedown",e.scrollbar.onDragStart,o),Ie.addEventListener("mousemove",e.scrollbar.onDragMove,o),Ie.addEventListener("mouseup",e.scrollbar.onDragEnd,l))):(s.addEventListener(i.start,e.scrollbar.onDragStart,o),Ie.addEventListener(i.move,e.scrollbar.onDragMove,o),Ie.addEventListener(i.end,e.scrollbar.onDragEnd,l))
                }
            }
            ,disableDraggable:function(){
                var e=this;
                if(e.params.scrollbar.el){
                    var t=e.scrollbar,a=e.touchEvents,i=e.touchEventsDesktop,r=e.params,n=t.$el,s=n[0],o=!(!Ge.passiveListener||!r.passiveListeners)&&{
                        passive:!1,capture:!1
                    }
                    ,l=!(!Ge.passiveListener||!r.passiveListeners)&&{
                        passive:!0,capture:!1
                    }
                    ;
                    Ge.touch||!Ge.pointerEvents&&!Ge.prefixedPointerEvents?(Ge.touch&&(s.removeEventListener(a.start,e.scrollbar.onDragStart,o),s.removeEventListener(a.move,e.scrollbar.onDragMove,o),s.removeEventListener(a.end,e.scrollbar.onDragEnd,l)),(r.simulateTouch&&!We.ios&&!We.android||r.simulateTouch&&!Ge.touch&&We.ios)&&(s.removeEventListener("mousedown",e.scrollbar.onDragStart,o),Ie.removeEventListener("mousemove",e.scrollbar.onDragMove,o),Ie.removeEventListener("mouseup",e.scrollbar.onDragEnd,l))):(s.removeEventListener(i.start,e.scrollbar.onDragStart,o),Ie.removeEventListener(i.move,e.scrollbar.onDragMove,o),Ie.removeEventListener(i.end,e.scrollbar.onDragEnd,l))
                }
            }
            ,init:function(){
                var t=this;
                if(t.params.scrollbar.el){
                    var a=t.scrollbar,i=t.$el,r=t.params.scrollbar,n=e(r.el);
                    t.params.uniqueNavElements&&"string"==typeof r.el&&n.length>1&&1===i.find(r.el).length&&(n=i.find(r.el));
                    var s=n.find("."+t.params.scrollbar.dragClass);
                    0===s.length&&(s=e('<div class="'+t.params.scrollbar.dragClass+'"></div>'),n.append(s)),Ne.extend(a,{
                        $el:n,el:n[0],$dragEl:s,dragEl:s[0]
                    }
                    ),r.draggable&&a.enableDraggable()
                }
            }
            ,destroy:function(){
                this.scrollbar.disableDraggable()
            }
        }
        ,Et={
            name:"scrollbar",params:{
                scrollbar:{
                    el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"
                }
            }
            ,create:function(){
                var e=this;
                Ne.extend(e,{
                    scrollbar:{
                        init:xt.init.bind(e),destroy:xt.destroy.bind(e),updateSize:xt.updateSize.bind(e),setTranslate:xt.setTranslate.bind(e),setTransition:xt.setTransition.bind(e),enableDraggable:xt.enableDraggable.bind(e),disableDraggable:xt.disableDraggable.bind(e),setDragPosition:xt.setDragPosition.bind(e),onDragStart:xt.onDragStart.bind(e),onDragMove:xt.onDragMove.bind(e),onDragEnd:xt.onDragEnd.bind(e),isTouched:!1,timeout:null,dragTimeout:null
                    }
                }
                )
            }
            ,on:{
                init:function(){
                    var e=this;
                    e.scrollbar.init(),e.scrollbar.updateSize(),e.scrollbar.setTranslate()
                }
                ,update:function(){
                    this.scrollbar.updateSize()
                }
                ,resize:function(){
                    this.scrollbar.updateSize()
                }
                ,observerUpdate:function(){
                    this.scrollbar.updateSize()
                }
                ,setTranslate:function(){
                    this.scrollbar.setTranslate()
                }
                ,setTransition:function(e){
                    this.scrollbar.setTransition(e)
                }
                ,destroy:function(){
                    this.scrollbar.destroy()
                }
            }
        }
        ,Tt={
            setTransform:function(t,a){
                var i=this,r=i.rtl,n=e(t),s=r?-1:1,o=n.attr("data-swiper-parallax")||"0",l=n.attr("data-swiper-parallax-x"),d=n.attr("data-swiper-parallax-y"),u=n.attr("data-swiper-parallax-scale"),c=n.attr("data-swiper-parallax-opacity");
                if(l||d?(l=l||"0",d=d||"0"):i.isHorizontal()?(l=o,d="0"):(d=o,l="0"),l=l.indexOf("%")>=0?parseInt(l,10)*a*s+"%":l*a*s+"px",d=d.indexOf("%")>=0?parseInt(d,10)*a+"%":d*a+"px",void 0!==c&&null!==c){
                    var p=c-(c-1)*(1-Math.abs(a));
                    n[0].style.opacity=p
                }
                if(void 0===u||null===u)n.transform("translate3d("+l+", "+d+", 0px)");
                else{
                    var h=u-(u-1)*(1-Math.abs(a));
                    n.transform("translate3d("+l+", "+d+", 0px) scale("+h+")")
                }
            }
            ,setTranslate:function(){
                var t=this,a=t.$el,i=t.slides,r=t.progress,n=t.snapGrid;
                a.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,a){
                    t.parallax.setTransform(a,r)
                }
                ),i.each(function(a,i){
                    var s=i.progress;
                    t.params.slidesPerGroup>1&&"auto"!==t.params.slidesPerView&&(s+=Math.ceil(a/2)-r*(n.length-1)),s=Math.min(Math.max(s,-1),1),e(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,a){
                        t.parallax.setTransform(a,s)
                    }
                    )
                }
                )
            }
            ,setTransition:function(t){
                void 0===t&&(t=this.params.speed),this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(a,i){
                    var r=e(i),n=parseInt(r.attr("data-swiper-parallax-duration"),10)||t;
                    0===t&&(n=0),r.transition(n)
                }
                )
            }
        }
        ,St={
            name:"parallax",params:{
                parallax:{
                    enabled:!1
                }
            }
            ,create:function(){
                var e=this;
                Ne.extend(e,{
                    parallax:{
                        setTransform:Tt.setTransform.bind(e),setTranslate:Tt.setTranslate.bind(e),setTransition:Tt.setTransition.bind(e)
                    }
                }
                )
            }
            ,on:{
                beforeInit:function(){
                    var e=this;
                    e.params.parallax.enabled&&(e.params.watchSlidesProgress=!0)
                }
                ,init:function(){
                    var e=this;
                    e.params.parallax&&e.parallax.setTranslate()
                }
                ,setTranslate:function(){
                    var e=this;
                    e.params.parallax&&e.parallax.setTranslate()
                }
                ,setTransition:function(e){
                    var t=this;
                    t.params.parallax&&t.parallax.setTransition(e)
                }
            }
        }
        ,Ct={
            getDistanceBetweenTouches:function(e){
                if(e.targetTouches.length<2)return 1;
                var t=e.targetTouches[0].pageX,a=e.targetTouches[0].pageY,i=e.targetTouches[1].pageX,r=e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(i-t,2)+Math.pow(r-a,2))
            }
            ,onGestureStart:function(t){
                var a=this,i=a.params.zoom,r=a.zoom,n=r.gesture;
                if(r.fakeGestureTouched=!1,r.fakeGestureMoved=!1,!Ge.gestures){
                    if("touchstart"!==t.type||"touchstart"===t.type&&t.targetTouches.length<2)return;
                    r.fakeGestureTouched=!0,n.scaleStart=Ct.getDistanceBetweenTouches(t)
                }
                if(!(n.$slideEl&&n.$slideEl.length||(n.$slideEl=e(t.target).closest(".swiper-slide"),0===n.$slideEl.length&&(n.$slideEl=a.slides.eq(a.activeIndex)),n.$imageEl=n.$slideEl.find("img, svg, canvas"),n.$imageWrapEl=n.$imageEl.parent("."+i.containerClass),n.maxRatio=n.$imageWrapEl.attr("data-swiper-zoom")||i.maxRatio,0!==n.$imageWrapEl.length)))return void(n.$imageEl=void 0);
                n.$imageEl.transition(0),a.zoom.isScaling=!0
            }
            ,onGestureChange:function(e){
                var t=this,a=t.params.zoom,i=t.zoom,r=i.gesture;
                if(!Ge.gestures){
                    if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;
                    i.fakeGestureMoved=!0,r.scaleMove=Ct.getDistanceBetweenTouches(e)
                }
                r.$imageEl&&0!==r.$imageEl.length&&(Ge.gestures?t.zoom.scale=e.scale*i.currentScale:i.scale=r.scaleMove/r.scaleStart*i.currentScale,i.scale>r.maxRatio&&(i.scale=r.maxRatio-1+Math.pow(i.scale-r.maxRatio+1,.5)),i.scale<a.minRatio&&(i.scale=a.minRatio+1-Math.pow(a.minRatio-i.scale+1,.5)),r.$imageEl.transform("translate3d(0,0,0) scale("+i.scale+")"))
            }
            ,onGestureEnd:function(e){
                var t=this,a=t.params.zoom,i=t.zoom,r=i.gesture;
                if(!Ge.gestures){
                    if(!i.fakeGestureTouched||!i.fakeGestureMoved)return;
                    if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!We.android)return;
                    i.fakeGestureTouched=!1,i.fakeGestureMoved=!1
                }
                r.$imageEl&&0!==r.$imageEl.length&&(i.scale=Math.max(Math.min(i.scale,r.maxRatio),a.minRatio),r.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale("+i.scale+")"),i.currentScale=i.scale,i.isScaling=!1,1===i.scale&&(r.$slideEl=void 0))
            }
            ,onTouchStart:function(e){
                var t=this,a=t.zoom,i=a.gesture,r=a.image;
                i.$imageEl&&0!==i.$imageEl.length&&(r.isTouched||(We.android&&e.preventDefault(),r.isTouched=!0,r.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,r.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))
            }
            ,onTouchMove:function(e){
                var t=this,a=t.zoom,i=a.gesture,r=a.image,n=a.velocity;
                if(i.$imageEl&&0!==i.$imageEl.length&&(t.allowClick=!1,r.isTouched&&i.$slideEl)){
                    r.isMoved||(r.width=i.$imageEl[0].offsetWidth,r.height=i.$imageEl[0].offsetHeight,r.startX=Ne.getTranslate(i.$imageWrapEl[0],"x")||0,r.startY=Ne.getTranslate(i.$imageWrapEl[0],"y")||0,i.slideWidth=i.$slideEl[0].offsetWidth,i.slideHeight=i.$slideEl[0].offsetHeight,i.$imageWrapEl.transition(0),t.rtl&&(r.startX=-r.startX,r.startY=-r.startY));
                    var s=r.width*a.scale,o=r.height*a.scale;
                    if(!(s<i.slideWidth&&o<i.slideHeight)){
                        if(r.minX=Math.min(i.slideWidth/2-s/2,0),r.maxX=-r.minX,r.minY=Math.min(i.slideHeight/2-o/2,0),r.maxY=-r.minY,r.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,r.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!r.isMoved&&!a.isScaling){
                            if(t.isHorizontal()&&(Math.floor(r.minX)===Math.floor(r.startX)&&r.touchesCurrent.x<r.touchesStart.x||Math.floor(r.maxX)===Math.floor(r.startX)&&r.touchesCurrent.x>r.touchesStart.x))return void(r.isTouched=!1);
                            if(!t.isHorizontal()&&(Math.floor(r.minY)===Math.floor(r.startY)&&r.touchesCurrent.y<r.touchesStart.y||Math.floor(r.maxY)===Math.floor(r.startY)&&r.touchesCurrent.y>r.touchesStart.y))return void(r.isTouched=!1)
                        }
                        e.preventDefault(),e.stopPropagation(),r.isMoved=!0,r.currentX=r.touchesCurrent.x-r.touchesStart.x+r.startX,r.currentY=r.touchesCurrent.y-r.touchesStart.y+r.startY,r.currentX<r.minX&&(r.currentX=r.minX+1-Math.pow(r.minX-r.currentX+1,.8)),r.currentX>r.maxX&&(r.currentX=r.maxX-1+Math.pow(r.currentX-r.maxX+1,.8)),r.currentY<r.minY&&(r.currentY=r.minY+1-Math.pow(r.minY-r.currentY+1,.8)),r.currentY>r.maxY&&(r.currentY=r.maxY-1+Math.pow(r.currentY-r.maxY+1,.8)),n.prevPositionX||(n.prevPositionX=r.touchesCurrent.x),n.prevPositionY||(n.prevPositionY=r.touchesCurrent.y),n.prevTime||(n.prevTime=Date.now()),n.x=(r.touchesCurrent.x-n.prevPositionX)/(Date.now()-n.prevTime)/2,n.y=(r.touchesCurrent.y-n.prevPositionY)/(Date.now()-n.prevTime)/2,Math.abs(r.touchesCurrent.x-n.prevPositionX)<2&&(n.x=0),Math.abs(r.touchesCurrent.y-n.prevPositionY)<2&&(n.y=0),n.prevPositionX=r.touchesCurrent.x,n.prevPositionY=r.touchesCurrent.y,n.prevTime=Date.now(),i.$imageWrapEl.transform("translate3d("+r.currentX+"px, "+r.currentY+"px,0)")
                    }
                }
            }
            ,onTouchEnd:function(){
                var e=this,t=e.zoom,a=t.gesture,i=t.image,r=t.velocity;
                if(a.$imageEl&&0!==a.$imageEl.length){
                    if(!i.isTouched||!i.isMoved)return i.isTouched=!1,void(i.isMoved=!1);
                    i.isTouched=!1,i.isMoved=!1;
                    var n=300,s=300,o=r.x*n,l=i.currentX+o,d=r.y*s,u=i.currentY+d;
                    0!==r.x&&(n=Math.abs((l-i.currentX)/r.x)),0!==r.y&&(s=Math.abs((u-i.currentY)/r.y));
                    var c=Math.max(n,s);
                    i.currentX=l,i.currentY=u;
                    var p=i.width*t.scale,h=i.height*t.scale;
                    i.minX=Math.min(a.slideWidth/2-p/2,0),i.maxX=-i.minX,i.minY=Math.min(a.slideHeight/2-h/2,0),i.maxY=-i.minY,i.currentX=Math.max(Math.min(i.currentX,i.maxX),i.minX),i.currentY=Math.max(Math.min(i.currentY,i.maxY),i.minY),a.$imageWrapEl.transition(c).transform("translate3d("+i.currentX+"px, "+i.currentY+"px,0)")
                }
            }
            ,onTransitionEnd:function(){
                var e=this,t=e.zoom,a=t.gesture;
                a.$slideEl&&e.previousIndex!==e.activeIndex&&(a.$imageEl.transform("translate3d(0,0,0) scale(1)"),a.$imageWrapEl.transform("translate3d(0,0,0)"),a.$slideEl=void 0,a.$imageEl=void 0,a.$imageWrapEl=void 0,t.scale=1,t.currentScale=1)
            }
            ,toggle:function(e){
                var t=this,a=t.zoom;
                a.scale&&1!==a.scale?a.out():a.in(e)
            }
            ,in:function(t){
                var a=this,i=a.zoom,r=a.params.zoom,n=i.gesture,s=i.image;
                if(n.$slideEl||(n.$slideEl=a.clickedSlide?e(a.clickedSlide):a.slides.eq(a.activeIndex),n.$imageEl=n.$slideEl.find("img, svg, canvas"),n.$imageWrapEl=n.$imageEl.parent("."+r.containerClass)),n.$imageEl&&0!==n.$imageEl.length){
                    n.$slideEl.addClass(""+r.zoomedSlideClass);
                    var o,l,d,u,c,p,h,f,v,m,g,y,b,w,x,E,T,S;
                    void 0===s.touchesStart.x&&t?(o="touchend"===t.type?t.changedTouches[0].pageX:t.pageX,l="touchend"===t.type?t.changedTouches[0].pageY:t.pageY):(o=s.touchesStart.x,l=s.touchesStart.y),i.scale=n.$imageWrapEl.attr("data-swiper-zoom")||r.maxRatio,i.currentScale=n.$imageWrapEl.attr("data-swiper-zoom")||r.maxRatio,t?(T=n.$slideEl[0].offsetWidth,S=n.$slideEl[0].offsetHeight,d=n.$slideEl.offset().left,u=n.$slideEl.offset().top,c=d+T/2-o,p=u+S/2-l,v=n.$imageEl[0].offsetWidth,m=n.$imageEl[0].offsetHeight,g=v*i.scale,y=m*i.scale,b=Math.min(T/2-g/2,0),w=Math.min(S/2-y/2,0),x=-b,E=-w,h=c*i.scale,f=p*i.scale,h<b&&(h=b),h>x&&(h=x),f<w&&(f=w),f>E&&(f=E)):(h=0,f=0),n.$imageWrapEl.transition(300).transform("translate3d("+h+"px, "+f+"px,0)"),n.$imageEl.transition(300).transform("translate3d(0,0,0) scale("+i.scale+")")
                }
            }
            ,out:function(){
                var t=this,a=t.zoom,i=t.params.zoom,r=a.gesture;
                r.$slideEl||(r.$slideEl=t.clickedSlide?e(t.clickedSlide):t.slides.eq(t.activeIndex),r.$imageEl=r.$slideEl.find("img, svg, canvas"),r.$imageWrapEl=r.$imageEl.parent("."+i.containerClass)),r.$imageEl&&0!==r.$imageEl.length&&(a.scale=1,a.currentScale=1,r.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),r.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),r.$slideEl.removeClass(""+i.zoomedSlideClass),r.$slideEl=void 0)
            }
            ,enable:function(){
                var e=this,t=e.zoom;
                if(!t.enabled){
                    t.enabled=!0;
                    var a=!("touchstart"!==e.touchEvents.start||!Ge.passiveListener||!e.params.passiveListeners)&&{
                        passive:!0,capture:!1
                    }
                    ;
                    Ge.gestures?(e.$wrapperEl.on("gesturestart",".swiper-slide",t.onGestureStart,a),e.$wrapperEl.on("gesturechange",".swiper-slide",t.onGestureChange,a),e.$wrapperEl.on("gestureend",".swiper-slide",t.onGestureEnd,a)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.on(e.touchEvents.start,".swiper-slide",t.onGestureStart,a),e.$wrapperEl.on(e.touchEvents.move,".swiper-slide",t.onGestureChange,a),e.$wrapperEl.on(e.touchEvents.end,".swiper-slide",t.onGestureEnd,a)),e.$wrapperEl.on(e.touchEvents.move,"."+e.params.zoom.containerClass,t.onTouchMove)
                }
            }
            ,disable:function(){
                var e=this,t=e.zoom;
                if(t.enabled){
                    e.zoom.enabled=!1;
                    var a=!("touchstart"!==e.touchEvents.start||!Ge.passiveListener||!e.params.passiveListeners)&&{
                        passive:!0,capture:!1
                    }
                    ;
                    Ge.gestures?(e.$wrapperEl.off("gesturestart",".swiper-slide",t.onGestureStart,a),e.$wrapperEl.off("gesturechange",".swiper-slide",t.onGestureChange,a),e.$wrapperEl.off("gestureend",".swiper-slide",t.onGestureEnd,a)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.off(e.touchEvents.start,".swiper-slide",t.onGestureStart,a),e.$wrapperEl.off(e.touchEvents.move,".swiper-slide",t.onGestureChange,a),e.$wrapperEl.off(e.touchEvents.end,".swiper-slide",t.onGestureEnd,a)),e.$wrapperEl.off(e.touchEvents.move,"."+e.params.zoom.containerClass,t.onTouchMove)
                }
            }
        }
        ,kt={
            name:"zoom",params:{
                zoom:{
                    enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"
                }
            }
            ,create:function(){
                var e=this,t={
                    enabled:!1,scale:1,currentScale:1,isScaling:!1,gesture:{
                        $slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3
                    }
                    ,image:{
                        isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{
                        }
                        ,touchesCurrent:{
                        }
                    }
                    ,velocity:{
                        x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0
                    }
                }
                ;
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(a){
                    t[a]=Ct[a].bind(e)
                }
                ),Ne.extend(e,{
                    zoom:t
                }
                )
            }
            ,on:{
                init:function(){
                    var e=this;
                    e.params.zoom.enabled&&e.zoom.enable()
                }
                ,destroy:function(){
                    this.zoom.disable()
                }
                ,touchStart:function(e){
                    var t=this;
                    t.zoom.enabled&&t.zoom.onTouchStart(e)
                }
                ,touchEnd:function(e){
                    var t=this;
                    t.zoom.enabled&&t.zoom.onTouchEnd(e)
                }
                ,doubleTap:function(e){
                    var t=this;
                    t.params.zoom.enabled&&t.zoom.enabled&&t.params.zoom.toggle&&t.zoom.toggle(e)
                }
                ,transitionEnd:function(){
                    var e=this;
                    e.zoom.enabled&&e.params.zoom.enabled&&e.zoom.onTransitionEnd()
                }
            }
        }
        ,Mt={
            loadInSlide:function(t,a){
                void 0===a&&(a=!0);
                var i=this,r=i.params.lazy;
                if(void 0!==t&&0!==i.slides.length){
                    var n=i.virtual&&i.params.virtual.enabled,s=n?i.$wrapperEl.children("."+i.params.slideClass+'[data-swiper-slide-index="'+t+'"]'):i.slides.eq(t),o=s.find("."+r.elementClass+":not(."+r.loadedClass+"):not(."+r.loadingClass+")");
                    !s.hasClass(r.elementClass)||s.hasClass(r.loadedClass)||s.hasClass(r.loadingClass)||(o=o.add(s[0])),0!==o.length&&o.each(function(t,n){
                        var o=e(n);
                        o.addClass(r.loadingClass);
                        var l=o.attr("data-background"),d=o.attr("data-src"),u=o.attr("data-srcset"),c=o.attr("data-sizes");
                        i.loadImage(o[0],d||l,u,c,!1,function(){
                            if(void 0!==i&&null!==i&&i&&(!i||i.params)&&!i.destroyed){
                                if(l?(o.css("background-image",'url("'+l+'")'),o.removeAttr("data-background")):(u&&(o.attr("srcset",u),o.removeAttr("data-srcset")),c&&(o.attr("sizes",c),o.removeAttr("data-sizes")),d&&(o.attr("src",d),o.removeAttr("data-src"))),o.addClass(r.loadedClass).removeClass(r.loadingClass),s.find("."+r.preloaderClass).remove(),i.params.loop&&a){
                                    var e=s.attr("data-swiper-slide-index");
                                    if(s.hasClass(i.params.slideDuplicateClass)){
                                        var t=i.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+i.params.slideDuplicateClass+")");
                                        i.lazy.loadInSlide(t.index(),!1)
                                    }
                                    else{
                                        var n=i.$wrapperEl.children("."+i.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');
                                        i.lazy.loadInSlide(n.index(),!1)
                                    }
                                }
                                i.emit("lazyImageReady",s[0],o[0])
                            }
                        }
                        ),i.emit("lazyImageLoad",s[0],o[0])
                    }
                    )
                }
            }
            ,load:function(){
                function t(e){
                    if(l){
                        if(r.children("."+n.slideClass+'[data-swiper-slide-index="'+e+'"]').length)return!0
                    }
                    else if(s[e])return!0;
                    return!1
                }
                function a(t){
                    return l?e(t).attr("data-swiper-slide-index"):e(t).index()
                }
                var i=this,r=i.$wrapperEl,n=i.params,s=i.slides,o=i.activeIndex,l=i.virtual&&n.virtual.enabled,d=n.lazy,u=n.slidesPerView;
                if("auto"===u&&(u=0),i.lazy.initialImageLoaded||(i.lazy.initialImageLoaded=!0),i.params.watchSlidesVisibility)r.children("."+n.slideVisibleClass).each(function(t,a){
                    var r=l?e(a).attr("data-swiper-slide-index"):e(a).index();
                    i.lazy.loadInSlide(r)
                }
                );
                else if(u>1)for(var c=o;
                c<o+u;
                c+=1)t(c)&&i.lazy.loadInSlide(c);
                else i.lazy.loadInSlide(o);
                if(d.loadPrevNext)if(u>1||d.loadPrevNextAmount&&d.loadPrevNextAmount>1){
                    for(var p=d.loadPrevNextAmount,h=u,f=Math.min(o+h+Math.max(p,h),s.length),v=Math.max(o-Math.max(h,p),0),m=o+u;
                    m<f;
                    m+=1)t(m)&&i.lazy.loadInSlide(m);
                    for(var g=v;
                    g<o;
                    g+=1)t(g)&&i.lazy.loadInSlide(g)
                }
                else{
                    var y=r.children("."+n.slideNextClass);
                    y.length>0&&i.lazy.loadInSlide(a(y));
                    var b=r.children("."+n.slidePrevClass);
                    b.length>0&&i.lazy.loadInSlide(a(b))
                }
            }
        }
        ,$t={
            name:"lazy",params:{
                lazy:{
                    enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"
                }
            }
            ,create:function(){
                var e=this;
                Ne.extend(e,{
                    lazy:{
                        initialImageLoaded:!1,load:Mt.load.bind(e),loadInSlide:Mt.loadInSlide.bind(e)
                    }
                }
                )
            }
            ,on:{
                beforeInit:function(){
                    var e=this;
                    e.params.lazy.enabled&&e.params.preloadImages&&(e.params.preloadImages=!1)
                }
                ,init:function(){
                    var e=this;
                    e.params.lazy.enabled&&!e.params.loop&&0===e.params.initialSlide&&e.lazy.load()
                }
                ,scroll:function(){
                    var e=this;
                    e.params.freeMode&&!e.params.freeModeSticky&&e.lazy.load()
                }
                ,resize:function(){
                    var e=this;
                    e.params.lazy.enabled&&e.lazy.load()
                }
                ,scrollbarDragMove:function(){
                    var e=this;
                    e.params.lazy.enabled&&e.lazy.load()
                }
                ,transitionStart:function(){
                    var e=this;
                    e.params.lazy.enabled&&(e.params.lazy.loadOnTransitionStart||!e.params.lazy.loadOnTransitionStart&&!e.lazy.initialImageLoaded)&&e.lazy.load()
                }
                ,transitionEnd:function(){
                    var e=this;
                    e.params.lazy.enabled&&!e.params.lazy.loadOnTransitionStart&&e.lazy.load()
                }
            }
        }
        ,Pt={
            LinearSpline:function(e,t){
                var a=function(){
                    var e,t,a;
                    return function(i,r){
                        for(t=-1,e=i.length;
                        e-t>1;
                        )a=e+t>>1,i[a]<=r?t=a:e=a;
                        return e
                    }
                }
                ();
                this.x=e,this.y=t,this.lastIndex=e.length-1;
                var i,r;
                return this.interpolate=function(e){
                    return e?(r=a(this.x,e),i=r-1,(e-this.x[i])*(this.y[r]-this.y[i])/(this.x[r]-this.x[i])+this.y[i]):0
                }
                ,this
            }
            ,getInterpolateFunction:function(e){
                var t=this;
                t.controller.spline||(t.controller.spline=t.params.loop?new Pt.LinearSpline(t.slidesGrid,e.slidesGrid):new Pt.LinearSpline(t.snapGrid,e.snapGrid))
            }
            ,setTranslate:function(e,t){
                function a(e){
                    var t=n.rtlTranslate?-n.translate:n.translate;
                    "slide"===n.params.controller.by&&(n.controller.getInterpolateFunction(e),r=-n.controller.spline.interpolate(-t)),r&&"container"!==n.params.controller.by||(i=(e.maxTranslate()-e.minTranslate())/(n.maxTranslate()-n.minTranslate()),r=(t-n.minTranslate())*i+e.minTranslate()),n.params.controller.inverse&&(r=e.maxTranslate()-r),e.updateProgress(r),e.setTranslate(r,n),e.updateActiveIndex(),e.updateSlidesClasses()
                }
                var i,r,n=this,s=n.controller.control;
                if(Array.isArray(s))for(var o=0;
                o<s.length;
                o+=1)s[o]!==t&&s[o]instanceof rt&&a(s[o]);
                else s instanceof rt&&t!==s&&a(s)
            }
            ,setTransition:function(e,t){
                function a(t){
                    t.setTransition(e,r),0!==e&&(t.transitionStart(),t.params.autoHeight&&Ne.nextTick(function(){
                        t.updateAutoHeight()
                    }
                    ),t.$wrapperEl.transitionEnd(function(){
                        n&&(t.params.loop&&"slide"===r.params.controller.by&&t.loopFix(),t.transitionEnd())
                    }
                    ))
                }
                var i,r=this,n=r.controller.control;
                if(Array.isArray(n))for(i=0;
                i<n.length;
                i+=1)n[i]!==t&&n[i]instanceof rt&&a(n[i]);
                else n instanceof rt&&t!==n&&a(n)
            }
        }
        ,zt={
            name:"controller",params:{
                controller:{
                    control:void 0,inverse:!1,by:"slide"
                }
            }
            ,create:function(){
                var e=this;
                Ne.extend(e,{
                    controller:{
                        control:e.params.controller.control,getInterpolateFunction:Pt.getInterpolateFunction.bind(e),setTranslate:Pt.setTranslate.bind(e),setTransition:Pt.setTransition.bind(e)
                    }
                }
                )
            }
            ,on:{
                update:function(){
                    var e=this;
                    e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)
                }
                ,resize:function(){
                    var e=this;
                    e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)
                }
                ,observerUpdate:function(){
                    var e=this;
                    e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)
                }
                ,setTranslate:function(e,t){
                    var a=this;
                    a.controller.control&&a.controller.setTranslate(e,t)
                }
                ,setTransition:function(e,t){
                    var a=this;
                    a.controller.control&&a.controller.setTransition(e,t)
                }
            }
        }
        ,Lt={
            makeElFocusable:function(e){
                return e.attr("tabIndex","0"),e
            }
            ,addElRole:function(e,t){
                return e.attr("role",t),e
            }
            ,addElLabel:function(e,t){
                return e.attr("aria-label",t),e
            }
            ,disableEl:function(e){
                return e.attr("aria-disabled",!0),e
            }
            ,enableEl:function(e){
                return e.attr("aria-disabled",!1),e
            }
            ,onEnterKey:function(t){
                var a=this,i=a.params.a11y;
                if(13===t.keyCode){
                    var r=e(t.target);
                    a.navigation&&a.navigation.$nextEl&&r.is(a.navigation.$nextEl)&&(a.isEnd&&!a.params.loop||a.slideNext(),a.isEnd?a.a11y.notify(i.lastSlideMessage):a.a11y.notify(i.nextSlideMessage)),a.navigation&&a.navigation.$prevEl&&r.is(a.navigation.$prevEl)&&(a.isBeginning&&!a.params.loop||a.slidePrev(),a.isBeginning?a.a11y.notify(i.firstSlideMessage):a.a11y.notify(i.prevSlideMessage)),a.pagination&&r.is("."+a.params.pagination.bulletClass)&&r[0].click()
                }
            }
            ,notify:function(e){
                var t=this,a=t.a11y.liveRegion;
                0!==a.length&&(a.html(""),a.html(e))
            }
            ,updateNavigation:function(){
                var e=this;
                if(!e.params.loop){
                    var t=e.navigation,a=t.$nextEl,i=t.$prevEl;
                    i&&i.length>0&&(e.isBeginning?e.a11y.disableEl(i):e.a11y.enableEl(i)),a&&a.length>0&&(e.isEnd?e.a11y.disableEl(a):e.a11y.enableEl(a))
                }
            }
            ,updatePagination:function(){
                var t=this,a=t.params.a11y;
                t.pagination&&t.params.pagination.clickable&&t.pagination.bullets&&t.pagination.bullets.length&&t.pagination.bullets.each(function(i,r){
                    var n=e(r);
                    t.a11y.makeElFocusable(n),t.a11y.addElRole(n,"button"),t.a11y.addElLabel(n,a.paginationBulletMessage.replace(/{
                        {
                            index
                        }
                    }
                    /,n.index()+1))
                }
                )
            }
            ,init:function(){
                var e=this;
                e.$el.append(e.a11y.liveRegion);
                var t,a,i=e.params.a11y;
                e.navigation&&e.navigation.$nextEl&&(t=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(a=e.navigation.$prevEl),t&&(e.a11y.makeElFocusable(t),e.a11y.addElRole(t,"button"),e.a11y.addElLabel(t,i.nextSlideMessage),t.on("keydown",e.a11y.onEnterKey)),a&&(e.a11y.makeElFocusable(a),e.a11y.addElRole(a,"button"),e.a11y.addElLabel(a,i.prevSlideMessage),a.on("keydown",e.a11y.onEnterKey)),e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.$el.on("keydown","."+e.params.pagination.bulletClass,e.a11y.onEnterKey)
            }
            ,destroy:function(){
                var e=this;
                e.a11y.liveRegion&&e.a11y.liveRegion.length>0&&e.a11y.liveRegion.remove();
                var t,a;
                e.navigation&&e.navigation.$nextEl&&(t=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(a=e.navigation.$prevEl),t&&t.off("keydown",e.a11y.onEnterKey),a&&a.off("keydown",e.a11y.onEnterKey),e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.$el.off("keydown","."+e.params.pagination.bulletClass,e.a11y.onEnterKey)
            }
        }
        ,Ot={
            name:"a11y",params:{
                a11y:{
                    enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {
                        {
                            index
                        }
                    }
                    "
                }
            }
            ,create:function(){
                var t=this;
                Ne.extend(t,{
                    a11y:{
                        liveRegion:e('<span class="'+t.params.a11y.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>')
                    }
                }
                ),Object.keys(Lt).forEach(function(e){
                    t.a11y[e]=Lt[e].bind(t)
                }
                )
            }
            ,on:{
                init:function(){
                    var e=this;
                    e.params.a11y.enabled&&(e.a11y.init(),e.a11y.updateNavigation())
                }
                ,toEdge:function(){
                    var e=this;
                    e.params.a11y.enabled&&e.a11y.updateNavigation()
                }
                ,fromEdge:function(){
                    var e=this;
                    e.params.a11y.enabled&&e.a11y.updateNavigation()
                }
                ,paginationUpdate:function(){
                    var e=this;
                    e.params.a11y.enabled&&e.a11y.updatePagination()
                }
                ,destroy:function(){
                    var e=this;
                    e.params.a11y.enabled&&e.a11y.destroy()
                }
            }
        }
        ,It={
            init:function(){
                var e=this;
                if(e.params.history){
                    if(!De.history||!De.history.pushState)return e.params.history.enabled=!1,void(e.params.hashNavigation.enabled=!0);
                    var t=e.history;
                    t.initialized=!0,t.paths=It.getPathValues(),(t.paths.key||t.paths.value)&&(t.scrollToSlide(0,t.paths.value,e.params.runCallbacksOnInit),e.params.history.replaceState||De.addEventListener("popstate",e.history.setHistoryPopState))
                }
            }
            ,destroy:function(){
                var e=this;
                e.params.history.replaceState||De.removeEventListener("popstate",e.history.setHistoryPopState)
            }
            ,setHistoryPopState:function(){
                var e=this;
                e.history.paths=It.getPathValues(),e.history.scrollToSlide(e.params.speed,e.history.paths.value,!1)
            }
            ,getPathValues:function(){
                var e=De.location.pathname.slice(1).split("/").filter(function(e){
                    return""!==e
                }
                ),t=e.length;
                return{
                    key:e[t-2],value:e[t-1]
                }
            }
            ,setHistory:function(e,t){
                var a=this;
                if(a.history.initialized&&a.params.history.enabled){
                    var i=a.slides.eq(t),r=It.slugify(i.attr("data-history"));
                    De.location.pathname.includes(e)||(r=e+"/"+r);
                    var n=De.history.state;
                    n&&n.value===r||(a.params.history.replaceState?De.history.replaceState({
                        value:r
                    }
                    ,null,r):De.history.pushState({
                        value:r
                    }
                    ,null,r))
                }
            }
            ,slugify:function(e){
                return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")
            }
            ,scrollToSlide:function(e,t,a){
                var i=this;
                if(t)for(var r=0,n=i.slides.length;
                r<n;
                r+=1){
                    var s=i.slides.eq(r),o=It.slugify(s.attr("data-history"));
                    if(o===t&&!s.hasClass(i.params.slideDuplicateClass)){
                        var l=s.index();
                        i.slideTo(l,e,a)
                    }
                }
                else i.slideTo(0,e,a)
            }
        }
        ,Dt={
            name:"history",params:{
                history:{
                    enabled:!1,replaceState:!1,key:"slides"
                }
            }
            ,create:function(){
                var e=this;
                Ne.extend(e,{
                    history:{
                        init:It.init.bind(e),setHistory:It.setHistory.bind(e),setHistoryPopState:It.setHistoryPopState.bind(e),scrollToSlide:It.scrollToSlide.bind(e),destroy:It.destroy.bind(e)
                    }
                }
                )
            }
            ,on:{
                init:function(){
                    var e=this;
                    e.params.history.enabled&&e.history.init()
                }
                ,destroy:function(){
                    var e=this;
                    e.params.history.enabled&&e.history.destroy()
                }
                ,transitionEnd:function(){
                    var e=this;
                    e.history.initialized&&e.history.setHistory(e.params.history.key,e.activeIndex)
                }
            }
        }
        ,At={
            onHashCange:function(){
                var e=this,t=Ie.location.hash.replace("#","");
                t!==e.slides.eq(e.activeIndex).attr("data-hash")&&e.slideTo(e.$wrapperEl.children("."+e.params.slideClass+'[data-hash="'+t+'"]').index())
            }
            ,setHash:function(){
                var e=this;
                if(e.hashNavigation.initialized&&e.params.hashNavigation.enabled)if(e.params.hashNavigation.replaceState&&De.history&&De.history.replaceState)De.history.replaceState(null,null,"#"+e.slides.eq(e.activeIndex).attr("data-hash")||"");
                else{
                    var t=e.slides.eq(e.activeIndex),a=t.attr("data-hash")||t.attr("data-history");
                    Ie.location.hash=a||""
                }
            }
            ,init:function(){
                var t=this;
                if(!(!t.params.hashNavigation.enabled||t.params.history&&t.params.history.enabled)){
                    t.hashNavigation.initialized=!0;
                    var a=Ie.location.hash.replace("#","");
                    if(a)for(var i=0,r=t.slides.length;
                    i<r;
                    i+=1){
                        var n=t.slides.eq(i),s=n.attr("data-hash")||n.attr("data-history");
                        if(s===a&&!n.hasClass(t.params.slideDuplicateClass)){
                            var o=n.index();
                            t.slideTo(o,0,t.params.runCallbacksOnInit,!0)
                        }
                    }
                    t.params.hashNavigation.watchState&&e(De).on("hashchange",t.hashNavigation.onHashCange)
                }
            }
            ,destroy:function(){
                var t=this;
                t.params.hashNavigation.watchState&&e(De).off("hashchange",t.hashNavigation.onHashCange)
            }
        }
        ,Ht={
            name:"hash-navigation",params:{
                hashNavigation:{
                    enabled:!1,replaceState:!1,watchState:!1
                }
            }
            ,create:function(){
                var e=this;
                Ne.extend(e,{
                    hashNavigation:{
                        initialized:!1,init:At.init.bind(e),destroy:At.destroy.bind(e),setHash:At.setHash.bind(e),onHashCange:At.onHashCange.bind(e)
                    }
                }
                )
            }
            ,on:{
                init:function(){
                    var e=this;
                    e.params.hashNavigation.enabled&&e.hashNavigation.init()
                }
                ,destroy:function(){
                    var e=this;
                    e.params.hashNavigation.enabled&&e.hashNavigation.destroy()
                }
                ,transitionEnd:function(){
                    var e=this;
                    e.hashNavigation.initialized&&e.hashNavigation.setHash()
                }
            }
        }
        ,Nt={
            run:function(){
                var e=this,t=e.slides.eq(e.activeIndex),a=e.params.autoplay.delay;
                t.attr("data-swiper-autoplay")&&(a=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),e.autoplay.timeout=Ne.nextTick(function(){
                    e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(e.slides.length-1,e.params.speed,!0,!0),e.emit("autoplay")):(e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.params.loop?(e.loopFix(),e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(e.slideNext(e.params.speed,!0,!0),e.emit("autoplay"))
                }
                ,a)
            }
            ,start:function(){
                var e=this;
                return void 0===e.autoplay.timeout&&(!e.autoplay.running&&(e.autoplay.running=!0,e.emit("autoplayStart"),e.autoplay.run(),!0))
            }
            ,stop:function(){
                var e=this;
                return!!e.autoplay.running&&(void 0!==e.autoplay.timeout&&(e.autoplay.timeout&&(clearTimeout(e.autoplay.timeout),e.autoplay.timeout=void 0),e.autoplay.running=!1,e.emit("autoplayStop"),!0))
            }
            ,pause:function(e){
                var t=this;
                t.autoplay.running&&(t.autoplay.paused||(t.autoplay.timeout&&clearTimeout(t.autoplay.timeout),t.autoplay.paused=!0,0!==e&&t.params.autoplay.waitForTransition?(t.$wrapperEl[0].addEventListener("transitionend",t.autoplay.onTransitionEnd),t.$wrapperEl[0].addEventListener("webkitTransitionEnd",t.autoplay.onTransitionEnd)):(t.autoplay.paused=!1,t.autoplay.run())))
            }
        }
        ,Gt={
            name:"autoplay",params:{
                autoplay:{
                    enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1
                }
            }
            ,create:function(){
                var e=this;
                Ne.extend(e,{
                    autoplay:{
                        running:!1,paused:!1,run:Nt.run.bind(e),start:Nt.start.bind(e),stop:Nt.stop.bind(e),pause:Nt.pause.bind(e),onTransitionEnd:function(t){
                            e&&!e.destroyed&&e.$wrapperEl&&t.target===this&&(e.$wrapperEl[0].removeEventListener("transitionend",e.autoplay.onTransitionEnd),e.$wrapperEl[0].removeEventListener("webkitTransitionEnd",e.autoplay.onTransitionEnd),e.autoplay.paused=!1,e.autoplay.running?e.autoplay.run():e.autoplay.stop())
                        }
                    }
                }
                )
            }
            ,on:{
                init:function(){
                    var e=this;
                    e.params.autoplay.enabled&&e.autoplay.start()
                }
                ,beforeTransitionStart:function(e,t){
                    var a=this;
                    a.autoplay.running&&(t||!a.params.autoplay.disableOnInteraction?a.autoplay.pause(e):a.autoplay.stop())
                }
                ,sliderFirstMove:function(){
                    var e=this;
                    e.autoplay.running&&(e.params.autoplay.disableOnInteraction?e.autoplay.stop():e.autoplay.pause())
                }
                ,destroy:function(){
                    var e=this;
                    e.autoplay.running&&e.autoplay.stop()
                }
            }
        }
        ,_t={
            setTranslate:function(){
                for(var e=this,t=e.slides,a=0;
                a<t.length;
                a+=1){
                    var i=e.slides.eq(a),r=i[0].swiperSlideOffset,n=-r;
                    e.params.virtualTranslate||(n-=e.translate);
                    var s=0;
                    e.isHorizontal()||(s=n,n=0);
                    var o=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);
                    i.css({
                        opacity:o
                    }
                    ).transform("translate3d("+n+"px, "+s+"px, 0px)")
                }
            }
            ,setTransition:function(e){
                var t=this,a=t.slides,i=t.$wrapperEl;
                if(a.transition(e),t.params.virtualTranslate&&0!==e){
                    var r=!1;
                    a.transitionEnd(function(){
                        if(!r&&t&&!t.destroyed){
                            r=!0,t.animating=!1;
                            for(var e=["webkitTransitionEnd","transitionend"],a=0;
                            a<e.length;
                            a+=1)i.trigger(e[a])
                        }
                    }
                    )
                }
            }
        }
        ,Bt={
            name:"effect-fade",params:{
                fadeEffect:{
                    crossFade:!1
                }
            }
            ,create:function(){
                var e=this;
                Ne.extend(e,{
                    fadeEffect:{
                        setTranslate:_t.setTranslate.bind(e),setTransition:_t.setTransition.bind(e)
                    }
                }
                )
            }
            ,on:{
                beforeInit:function(){
                    var e=this;
                    if("fade"===e.params.effect){
                        e.classNames.push(e.params.containerModifierClass+"fade");
                        var t={
                            slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0
                        }
                        ;
                        Ne.extend(e.params,t),Ne.extend(e.originalParams,t)
                    }
                }
                ,setTranslate:function(){
                    var e=this;
                    "fade"===e.params.effect&&e.fadeEffect.setTranslate()
                }
                ,setTransition:function(e){
                    var t=this;
                    "fade"===t.params.effect&&t.fadeEffect.setTransition(e)
                }
            }
        }
        ,Xt={
            setTranslate:function(){
                var t,a=this,i=a.$el,r=a.$wrapperEl,n=a.slides,s=a.width,o=a.height,l=a.rtlTranslate,d=a.size,u=a.params.cubeEffect,c=a.isHorizontal(),p=a.virtual&&a.params.virtual.enabled,h=0;
                u.shadow&&(c?(t=r.find(".swiper-cube-shadow"),0===t.length&&(t=e('<div class="swiper-cube-shadow"></div>'),r.append(t)),t.css({
                    height:s+"px"
                }
                )):(t=i.find(".swiper-cube-shadow"),0===t.length&&(t=e('<div class="swiper-cube-shadow"></div>'),i.append(t))));
                for(var f=0;
                f<n.length;
                f+=1){
                    var v=n.eq(f),m=f;
                    p&&(m=parseInt(v.attr("data-swiper-slide-index"),10));
                    var g=90*m,y=Math.floor(g/360);
                    l&&(g=-g,y=Math.floor(-g/360));
                    var b=Math.max(Math.min(v[0].progress,1),-1),w=0,x=0,E=0;
                    m%4==0?(w=4*-y*d,E=0):(m-1)%4==0?(w=0,E=4*-y*d):(m-2)%4==0?(w=d+4*y*d,E=d):(m-3)%4==0&&(w=-d,E=3*d+4*d*y),l&&(w=-w),c||(x=w,w=0);
                    var T="rotateX("+(c?0:-g)+"deg) rotateY("+(c?g:0)+"deg) translate3d("+w+"px, "+x+"px, "+E+"px)";
                    if(b<=1&&b>-1&&(h=90*m+90*b,l&&(h=90*-m-90*b)),v.transform(T),u.slideShadows){
                        var S=c?v.find(".swiper-slide-shadow-left"):v.find(".swiper-slide-shadow-top"),C=c?v.find(".swiper-slide-shadow-right"):v.find(".swiper-slide-shadow-bottom");
                        0===S.length&&(S=e('<div class="swiper-slide-shadow-'+(c?"left":"top")+'"></div>'),v.append(S)),0===C.length&&(C=e('<div class="swiper-slide-shadow-'+(c?"right":"bottom")+'"></div>'),v.append(C)),S.length&&(S[0].style.opacity=Math.max(-b,0)),C.length&&(C[0].style.opacity=Math.max(b,0))
                    }
                }
                if(r.css({
                    "-webkit-transform-origin":"50% 50% -"+d/2+"px","-moz-transform-origin":"50% 50% -"+d/2+"px","-ms-transform-origin":"50% 50% -"+d/2+"px","transform-origin":"50% 50% -"+d/2+"px"
                }
                ),u.shadow)if(c)t.transform("translate3d(0px, "+(s/2+u.shadowOffset)+"px, "+-s/2+"px) rotateX(90deg) rotateZ(0deg) scale("+u.shadowScale+")");
                else{
                    var k=Math.abs(h)-90*Math.floor(Math.abs(h)/90),M=1.5-(Math.sin(2*k*Math.PI/360)/2+Math.cos(2*k*Math.PI/360)/2),$=u.shadowScale,P=u.shadowScale/M,z=u.shadowOffset;
                    t.transform("scale3d("+$+", 1, "+P+") translate3d(0px, "+(o/2+z)+"px, "+-o/2/P+"px) rotateX(-90deg)")
                }
                var L=Qe.isSafari||Qe.isUiWebView?-d/2:0;
                r.transform("translate3d(0px,0,"+L+"px) rotateX("+(a.isHorizontal()?0:h)+"deg) rotateY("+(a.isHorizontal()?-h:0)+"deg)")
            }
            ,setTransition:function(e){
                var t=this,a=t.$el;
                t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.cubeEffect.shadow&&!t.isHorizontal()&&a.find(".swiper-cube-shadow").transition(e)
            }
        }
        ,jt={
            name:"effect-cube",params:{
                cubeEffect:{
                    slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94
                }
            }
            ,create:function(){
                var e=this;
                Ne.extend(e,{
                    cubeEffect:{
                        setTranslate:Xt.setTranslate.bind(e),setTransition:Xt.setTransition.bind(e)
                    }
                }
                )
            }
            ,on:{
                beforeInit:function(){
                    var e=this;
                    if("cube"===e.params.effect){
                        e.classNames.push(e.params.containerModifierClass+"cube"),e.classNames.push(e.params.containerModifierClass+"3d");
                        var t={
                            slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0
                        }
                        ;
                        Ne.extend(e.params,t),Ne.extend(e.originalParams,t)
                    }
                }
                ,setTranslate:function(){
                    var e=this;
                    "cube"===e.params.effect&&e.cubeEffect.setTranslate()
                }
                ,setTransition:function(e){
                    var t=this;
                    "cube"===t.params.effect&&t.cubeEffect.setTransition(e)
                }
            }
        }
        ,Yt={
            setTranslate:function(){
                for(var t=this,a=t.slides,i=t.rtlTranslate,r=0;
                r<a.length;
                r+=1){
                    var n=a.eq(r),s=n[0].progress;
                    t.params.flipEffect.limitRotation&&(s=Math.max(Math.min(n[0].progress,1),-1));
                    var o=n[0].swiperSlideOffset,l=-180*s,d=l,u=0,c=-o,p=0;
                    if(t.isHorizontal()?i&&(d=-d):(p=c,c=0,u=-d,d=0),n[0].style.zIndex=-Math.abs(Math.round(s))+a.length,t.params.flipEffect.slideShadows){
                        var h=t.isHorizontal()?n.find(".swiper-slide-shadow-left"):n.find(".swiper-slide-shadow-top"),f=t.isHorizontal()?n.find(".swiper-slide-shadow-right"):n.find(".swiper-slide-shadow-bottom");
                        0===h.length&&(h=e('<div class="swiper-slide-shadow-'+(t.isHorizontal()?"left":"top")+'"></div>'),n.append(h)),0===f.length&&(f=e('<div class="swiper-slide-shadow-'+(t.isHorizontal()?"right":"bottom")+'"></div>'),n.append(f)),h.length&&(h[0].style.opacity=Math.max(-s,0)),f.length&&(f[0].style.opacity=Math.max(s,0))
                    }
                    n.transform("translate3d("+c+"px, "+p+"px, 0px) rotateX("+u+"deg) rotateY("+d+"deg)")
                }
            }
            ,setTransition:function(e){
                var t=this,a=t.slides,i=t.activeIndex,r=t.$wrapperEl;
                if(a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.virtualTranslate&&0!==e){
                    var n=!1;
                    a.eq(i).transitionEnd(function(){
                        if(!n&&t&&!t.destroyed){
                            n=!0,t.animating=!1;
                            for(var e=["webkitTransitionEnd","transitionend"],a=0;
                            a<e.length;
                            a+=1)r.trigger(e[a])
                        }
                    }
                    )
                }
            }
        }
        ,Vt={
            name:"effect-flip",params:{
                flipEffect:{
                    slideShadows:!0,limitRotation:!0
                }
            }
            ,create:function(){
                var e=this;
                Ne.extend(e,{
                    flipEffect:{
                        setTranslate:Yt.setTranslate.bind(e),setTransition:Yt.setTransition.bind(e)
                    }
                }
                )
            }
            ,on:{
                beforeInit:function(){
                    var e=this;
                    if("flip"===e.params.effect){
                        e.classNames.push(e.params.containerModifierClass+"flip"),e.classNames.push(e.params.containerModifierClass+"3d");
                        var t={
                            slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0
                        }
                        ;
                        Ne.extend(e.params,t),Ne.extend(e.originalParams,t)
                    }
                }
                ,setTranslate:function(){
                    var e=this;
                    "flip"===e.params.effect&&e.flipEffect.setTranslate()
                }
                ,setTransition:function(e){
                    var t=this;
                    "flip"===t.params.effect&&t.flipEffect.setTransition(e)
                }
            }
        }
        ,Rt={
            setTranslate:function(){
                for(var t=this,a=t.width,i=t.height,r=t.slides,n=t.$wrapperEl,s=t.slidesSizesGrid,o=t.params.coverflowEffect,l=t.isHorizontal(),d=t.translate,u=l?a/2-d:i/2-d,c=l?o.rotate:-o.rotate,p=o.depth,h=0,f=r.length;
                h<f;
                h+=1){
                    var v=r.eq(h),m=s[h],g=v[0].swiperSlideOffset,y=(u-g-m/2)/m*o.modifier,b=l?c*y:0,w=l?0:c*y,x=-p*Math.abs(y),E=l?0:o.stretch*y,T=l?o.stretch*y:0;
                    Math.abs(T)<.001&&(T=0),Math.abs(E)<.001&&(E=0),Math.abs(x)<.001&&(x=0),Math.abs(b)<.001&&(b=0),Math.abs(w)<.001&&(w=0);
                    var S="translate3d("+T+"px,"+E+"px,"+x+"px) rotateX("+w+"deg) rotateY("+b+"deg)";
                    if(v.transform(S),v[0].style.zIndex=1-Math.abs(Math.round(y)),o.slideShadows){
                        var C=l?v.find(".swiper-slide-shadow-left"):v.find(".swiper-slide-shadow-top"),k=l?v.find(".swiper-slide-shadow-right"):v.find(".swiper-slide-shadow-bottom");
                        0===C.length&&(C=e('<div class="swiper-slide-shadow-'+(l?"left":"top")+'"></div>'),v.append(C)),0===k.length&&(k=e('<div class="swiper-slide-shadow-'+(l?"right":"bottom")+'"></div>'),v.append(k)),C.length&&(C[0].style.opacity=y>0?y:0),k.length&&(k[0].style.opacity=-y>0?-y:0)
                    }
                }
                if(Ge.pointerEvents||Ge.prefixedPointerEvents){
                    n[0].style.perspectiveOrigin=u+"px 50%"
                }
            }
            ,setTransition:function(e){
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
        }
        ,Ft={
            name:"effect-coverflow",params:{
                coverflowEffect:{
                    rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0
                }
            }
            ,create:function(){
                var e=this;
                Ne.extend(e,{
                    coverflowEffect:{
                        setTranslate:Rt.setTranslate.bind(e),setTransition:Rt.setTransition.bind(e)
                    }
                }
                )
            }
            ,on:{
                beforeInit:function(){
                    var e=this;
                    "coverflow"===e.params.effect&&(e.classNames.push(e.params.containerModifierClass+"coverflow"),e.classNames.push(e.params.containerModifierClass+"3d"),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)
                }
                ,setTranslate:function(){
                    var e=this;
                    "coverflow"===e.params.effect&&e.coverflowEffect.setTranslate()
                }
                ,setTransition:function(e){
                    var t=this;
                    "coverflow"===t.params.effect&&t.coverflowEffect.setTransition(e)
                }
            }
        }
        ,qt=[nt,st,ot,lt,ut,pt,ft,mt,yt,wt,Et,St,kt,$t,zt,Ot,Dt,Ht,Gt,Bt,jt,Vt,Ft];
        return void 0===rt.use&&(rt.use=rt.Class.use,rt.installModule=rt.Class.installModule),rt.use(qt),rt
    }
    )
}
,function(e,t,a){
    a(2),e.exports=a(3)
}
,function(e,t){
}
,function(e,t,a){
    "use strict";
    function i(e){
        return e&&e.__esModule?e:{
            default:e
        }
    }
    Object.defineProperty(t,"__esModule",{
        value:!0
    }
    );
    var r=a(4),n=i(r),s=a(5),o=i(s),l=a(6),d=i(l),u=a(7),c=i(u),p=a(8),h=i(p),f=a(9),v=i(f),m=a(10),g=i(m),y=a(11),b=i(y),w=a(13),x=i(w),E=a(15),T=i(E);
    jQuery.prototype[Symbol.iterator]=Array.prototype[Symbol.iterator],$(function(){
        if(void 0!==$(".videogallery-tile")[0]){
            var e=function(){
                (new T.default).resize()
            }
            ;
            $(window).resize(function(){
                e()
            }
            ),e()
        }
        var t=!0,a=!1,i=void 0;
        try{
            for(var r,n=$(".potd-tile")[Symbol.iterator]();
            !(t=(r=n.next()).done);
            t=!0){
                r.value;
                new g.default
            }
        }
        catch(e){
            a=!0,i=e
        }
        finally{
            try{
                !t&&n.return&&n.return()
            }
            finally{
                if(a)throw i
            }
        }
        var s=!0,o=!1,l=void 0;
        try{
            for(var u,p=$(".brasil-photogallery-tile")[Symbol.iterator]();
            !(s=(u=p.next()).done);
            s=!0){
                var f=u.value;
                new g.default,new v.default(f)
            }
        }
        catch(e){
            o=!0,l=e
        }
        finally{
            try{
                !s&&p.return&&p.return()
            }
            finally{
                if(o)throw l
            }
        }
        var m=!0,y=!1,w=void 0;
        try{
            for(var E,S=$(".brasil-navigation-tile")[Symbol.iterator]();
            !(m=(E=S.next()).done);
            m=!0){
                var C=E.value;
                new h.default(C)
            }
        }
        catch(e){
            y=!0,w=e
        }
        finally{
            try{
                !m&&S.return&&S.return()
            }
            finally{
                if(y)throw w
            }
        }
        var k=!0,M=!1,P=void 0;
        try{
            for(var z,L=$(".brasil-videocarousel-tile")[Symbol.iterator]();
            !(k=(z=L.next()).done);
            k=!0){
                var O=z.value;
                new x.default(O)
            }
        }
        catch(e){
            M=!0,P=e
        }
        finally{
            try{
                !k&&L.return&&L.return()
            }
            finally{
                if(M)throw P
            }
        }
        var I=!0,D=!1,A=void 0;
        try{
            for(var H,N=$(".brasil-groupcarousel-tile")[Symbol.iterator]();
            !(I=(H=N.next()).done);
            I=!0){
                var G=H.value;
                new d.default(G)
            }
        }
        catch(e){
            D=!0,A=e
        }
        finally{
            try{
                !I&&N.return&&N.return()
            }
            finally{
                if(D)throw A
            }
        }
        var _=!0,B=!1,X=void 0;
        try{
            for(var j,Y=$(".brasil-highlightscarousel-tile")[Symbol.iterator]();
            !(_=(j=Y.next()).done);
            _=!0){
                var V=j.value;
                new c.default(V)
            }
        }
        catch(e){
            B=!0,X=e
        }
        finally{
            try{
                !_&&Y.return&&Y.return()
            }
            finally{
                if(B)throw X
            }
        }
        if($(".portaltype-collective-cover-content").length>0){
            var R=!0,F=!1,q=void 0;
            try{
                for(var W,U=$(".box-colorido .cover-richtext-tile, .nitf-basic-tile")[Symbol.iterator]();
                !(R=(W=U.next()).done);
                R=!0){
                    var K=W.value;
                    new b.default(K)
                }
            }
            catch(e){
                F=!0,q=e
            }
            finally{
                try{
                    !R&&U.return&&U.return()
                }
                finally{
                    if(F)throw q
                }
            }
        }
    }
    ),$(window).load(function(){
        n.default.carrossel()
    }
    ),t.default={
        Albuns:n.default,AudioGallery:o.default,VideoResponsiveResize:T.default,POTDTile:g.default,PhotoGalleryTile:v.default,NavigationTile:h.default,GroupCarouselTile:d.default,HighlightsCarouselTile:c.default
    }
}
,function(e,t,a){
    "use strict";
    Object.defineProperty(t,"__esModule",{
        value:!0
    }
    );
    var i=null,r={
        carrossel:function(){
            if(!i){
                i=!0;
                var e=this;
                $(".cycle-slideshow").on("cycle-next cycle-prev",function(t,a){
                    var i=$(this).parent().parent();
                    $(".cycle-slideshow",i).not(this).cycle("goto",a.currSlide),e.layoutAdjustment(i,a.currSlide)
                }
                ),$(".cycle-carrossel .thumb-itens").click(function(t){
                    t.preventDefault();
                    var a=$(this).parent().parent(),i=a.parent().parent(),r=$(".cycle-slideshow",i),n=a.data("cycle.API").getSlideIndex(this);
                    r.cycle("goto",n),e.layoutAdjustment(i,n)
                }
                ),$(document.documentElement).keyup(function(e){
                    37==e.keyCode?$(".cycle-prev").trigger("click"):39==e.keyCode&&$(".cycle-next").trigger("click")
                }
                ),$(".cycle-slideshow").each(function(){
                    var t=$(this).parent().parent();
                    e.layoutAdjustment(t,0)
                }
                )
            }
        }
        ,layoutAdjustment:function(e,t){
            var a,i,r,n,s=$(".cycle-player .cycle-slide",e);
            t+=1,a=s[t],i=$(a).height(),r=$(".cycle-sentinel img",e).height(),n=$(".carousel",e).width()-72,$(".cycle-sentinel",e).height(i),$(".cycle-hover",e).height(r),$(".cycle-carrossel",e).width(n)
        }
    }
    ;
    t.default=r
}
,function(e,t,a){
    "use strict";
    function i(e,t){
        var a=this,i=t.cssSelectorAncestor,r=e;
        $.extend(a,{
            init:function(){
                var e=a.get_audio_url(),t=a.get_media(e);
                r.jPlayer({
                    ready:function(){
                        $(this).jPlayer("setMedia",t.media_urls)
                    }
                    ,swfPath:"/++resource++brasil.gov.tiles/vendor",supplied:t.supplied,cssSelectorAncestor:i,solution:"html,flash",wmode:"window",preload:"none"
                }
                )
            }
            ,get_media:function(e){
                var t={
                    media_urls:{
                    }
                    ,supplied:""
                }
                ,i=void 0,r=void 0,n=void 0,s=void 0;
                for(e=e.split(";
                "),n=0,s=e.length;
                n<s;
                n++)r=e[n],(i=a.get_media_type(r))&&(t.media_urls[i]=r,t.supplied&&(t.supplied+=", "),t.supplied+=i);
                return t
            }
            ,get_audio_url:function(){
                return t.audio_url?t.audio_url:r.data("audio-url")
            }
            ,get_media_type:function(e){
                var t=!1;
                return/\.mp3$/i.test(e)?t="mp3":/\.mp4$/i.test(e)||/\.m4v$/i.test(e)?t="m4v":/\.m4a$/i.test(e)?t="m4a":/\.ogg$/i.test(e)||/\.oga$/i.test(e)?t="oga":/\.ogv$/i.test(e)?t="ogv":/\.webm$/i.test(e)&&(t="webmv"),t
            }
            ,update_player:function(e){
                t.audio_url=e;
                var i=a.get_audio_url(),n=a.get_media(i);
                r.jPlayer("clearMedia"),r.jPlayer("option","swfPath","/++resource++brasil.gov.tiles/vendor"),r.jPlayer("option","supplied",n.supplied),r.jPlayer("setMedia",n.media_urls)
            }
        }
        ),a.init()
    }
    function r(e){
        var t=this,a=e,i=a.find(".jp-jplayer"),r="#"+a.find(".jp-audio").attr("id");
        $.extend(t,{
            init:function(){
                t.bind_events(),i.audio_player({
                    cssSelectorAncestor:r
                }
                )
            }
            ,bind_events:function(){
                var e=a.find(".audiogallery-item");
                e.click(function(i){
                    i.preventDefault(),t.update($(this).attr("href")),e.parent("li").removeClass("selected"),$(this).parent("li").addClass("selected"),a.find(".audiogallery-item-title").html($(this).html())
                }
                )
            }
            ,update:function(e){
                i.audio_player({
                    cssSelectorAncestor:r
                }
                ).update_player(e)
            }
        }
        ),t.init()
    }
    $.fn.audio_player=function(e){
        var t=this.data("audio_player");
        if(t)return t;
        var a=this.data("audio_player-settings"),r="";
        return r=a||{
            cssSelectorAncestor:"#jp_container_1"
        }
        ,e&&$.extend(r,e),this.each(function(){
            t=new i($(this),r),$(this).data("audio_player",t)
        }
        )
    }
    ,$.fn.audiogallery=function(){
        var e=this.data("audiogallery");
        if(e)return e;
        this.data("audiogallery-settings");
        return this.each(function(){
            e=new r($(this)),$(this).data("audiogallery",e)
        }
        )
    }
}
,function(e,t,a){
    "use strict";
    function i(e,t){
        if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t,"__esModule",{
        value:!0
    }
    );
    var r=function(){
        function e(e,t){
            for(var a=0;
            a<t.length;
            a++){
                var i=t[a];
                i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)
            }
        }
        return function(t,a,i){
            return a&&e(t.prototype,a),i&&e(t,i),t
        }
    }
    (),n=a(0),s=function(e){
        return e&&e.__esModule?e:{
            default:e
        }
    }
    (n),o=function(){
        function e(t){
            i(this,e),this.tile=t,this.initSwiper(),this.initSecondCarousel()
        }
        return r(e,[{
            key:"initSwiper",value:function(){
                this.swiper=new s.default("#"+this.tile.id+" .carousel-thumbs",{
                    navigation:{
                        nextEl:"#"+this.tile.id+" .carousel-thumbs .swiper-button-next",prevEl:"#"+this.tile.id+" .carousel-thumbs .swiper-button-prev"
                    }
                    ,pagination:{
                        el:"#"+this.tile.id+" .carousel-thumbs .swiper-pagination",clickable:!0
                    }
                }
                )
            }
        }
        ,{
            key:"initSecondCarousel",value:function(){
                var e=$(this.tile).parents(".column");
                this.$tiles=$(".brasil-groupcarousel-tile",e),2===this.$tiles.length&&(this.$otherTile=this.$tiles.not(this.tile),this.hideSecondCarusel(),this.initSwitCarousel())
            }
        }
        ,{
            key:"hideSecondCarusel",value:function(){
                if(!($("body.template-compose").length>0)){
                    var e=this.$tiles.last();
                    this.tile===e[0]&&e.hide()
                }
            }
        }
        ,{
            key:"initSwitCarousel",value:function(){
                var e=$("<ul>"),t=!0,a=!1,i=void 0;
                try{
                    for(var r,n=this.$tiles[Symbol.iterator]();
                    !(t=(r=n.next()).done);
                    t=!0){
                        var s=r.value,o=$(".switch-carousel",s).attr("data-text");
                        if(void 0===o)return;
                        var l=$("<li>"+o+"</li>");
                        this.tile===s?l.addClass("active"):l.on("click",function(e){
                            e.preventDefault(),$(this.tile).hide(),this.$otherTile.show()
                        }
                        .bind(this)),e.append(l)
                    }
                }
                catch(e){
                    a=!0,i=e
                }
                finally{
                    try{
                        !t&&n.return&&n.return()
                    }
                    finally{
                        if(a)throw i
                    }
                }
                $(".switch-carousel",this.tile).append(e)
            }
        }
        ]),e
    }
    ();
    t.default=o
}
,function(e,t,a){
    "use strict";
    function i(e,t){
        if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t,"__esModule",{
        value:!0
    }
    );
    var r=function(){
        function e(e,t){
            for(var a=0;
            a<t.length;
            a++){
                var i=t[a];
                i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)
            }
        }
        return function(t,a,i){
            return a&&e(t.prototype,a),i&&e(t,i),t
        }
    }
    (),n=a(0),s=function(e){
        return e&&e.__esModule?e:{
            default:e
        }
    }
    (n),o=function(){
        function e(t){
            i(this,e),this.tile=t,this.initSwiper(),this.composeMode()
        }
        return r(e,[{
            key:"initSwiper",value:function(){
                this.carouselTop=new s.default("#"+this.tile.id+" .carousel-top",{
                    grabCursor:!0
                }
                ),this.carouselThumbs=new s.default("#"+this.tile.id+" .carousel-thumbs",{
                    virtualTranslate:!0,navigation:{
                        nextEl:"#"+this.tile.id+" .carousel-thumbs-container .swiper-button-next",prevEl:"#"+this.tile.id+" .carousel-thumbs-container .swiper-button-prev"
                    }
                    ,centeredSlides:!0,slidesPerView:"auto",touchRatio:.2,slideToClickedSlide:!0
                }
                ),this.carouselThumbs.on("slideChange",this.slideChange),this.carouselTop.controller.control=this.carouselThumbs,this.carouselThumbs.controller.control=this.carouselTop
            }
        }
        ,{
            key:"composeMode",value:function(){
                if(0!==$(".template-compose").length){
                    $("#"+this.tile.id+" .carousel-thumbs").prepend('<div class="crop-warning">Recorte a imagem na opção "mini" para corrigir as miniaturas.</div>');
                    var e=!0,t=!1,a=void 0;
                    try{
                        for(var i,r=$("#"+this.tile.id+" .carousel-thumbs .swiper-slide")[Symbol.iterator]();
                        !(e=(i=r.next()).done);
                        e=!0){
                            var n=i.value,s=$(n),o=$("img",s),l=document.createElement("a");
                            l.href=o.attr("src"),l.pathname=l.pathname.replace(/\@\@.*/
                            ,"@@croppingeditor"),l.search="scalename=mini",s.append('<a class="crop" target="_blank" href="'+l.href+'" title="Recortar imagem">✀</span>')
                        }
                    }
                    catch(e){
                        t=!0,a=e
                    }
                    finally{
                        try{
                            !e&&r.return&&r.return()
                        }
                        finally{
                            if(t)throw a
                        }
                    }
                }
            }
        }
        ,{
            key:"slideChange",value:function(){
                var e=this.$el.offset().left-5,t=e+this.$el.outerWidth()+10,a=$(this.slides[this.activeIndex]),i=a.offset().left,r=i+a.outerWidth();
                if(i<e||r>t){
                    var n=this.$wrapperEl.offset().left;
                    this.$wrapperEl.transform("translate("+(e-i+n)+"px)")
                }
            }
        }
        ]),e
    }
    ();
    t.default=o
}
,function(e,t,a){
    "use strict";
    function i(e,t){
        if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t,"__esModule",{
        value:!0
    }
    );
    var r=function(){
        function e(e,t){
            for(var a=0;
            a<t.length;
            a++){
                var i=t[a];
                i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)
            }
        }
        return function(t,a,i){
            return a&&e(t.prototype,a),i&&e(t,i),t
        }
    }
    (),n=function(){
        function e(t){
            i(this,e),this.tile=t,this.$(".navigation-more").on("click",this.moreClick.bind(this))
        }
        return r(e,[{
            key:"$",value:function(e){
                function t(t){
                    return e.apply(this,arguments)
                }
                return t.toString=function(){
                    return e.toString()
                }
                ,t
            }
            (function(e){
                return $(e,this.tile)
            }
            )
        }
        ,{
            key:"moreClick",value:function(e){
                e.preventDefault(),this.$(".navigation-more").toggleClass("open"),this.$(".navigation-more-items").toggleClass("open")
            }
        }
        ]),e
    }
    ();
    t.default=n
}
,function(e,t,a){
    "use strict";
    function i(e,t){
        if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t,"__esModule",{
        value:!0
    }
    );
    var r=function(){
        function e(e,t){
            for(var a=0;
            a<t.length;
            a++){
                var i=t[a];
                i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)
            }
        }
        return function(t,a,i){
            return a&&e(t.prototype,a),i&&e(t,i),t
        }
    }
    (),n=a(0),s=function(e){
        return e&&e.__esModule?e:{
            default:e
        }
    }
    (n),o=function(){
        function e(t){
            i(this,e),this.tile=t,this.initSwiper()
        }
        return r(e,[{
            key:"initSwiper",value:function(){
                this.galleryThumbs=new s.default("#"+this.tile.id+" .photogallery-container",{
                    navigation:{
                        nextEl:"#"+this.tile.id+" .photogallery-container .swiper-button-next",prevEl:"#"+this.tile.id+" .photogallery-container .swiper-button-prev"
                    }
                }
                )
            }
        }
        ]),e
    }
    ();
    t.default=o
}
,function(e,t,a){
    "use strict";
    function i(e,t){
        if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t,"__esModule",{
        value:!0
    }
    );
    var r=function(){
        function e(e,t){
            for(var a=0;
            a<t.length;
            a++){
                var i=t[a];
                i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)
            }
        }
        return function(t,a,i){
            return a&&e(t.prototype,a),i&&e(t,i),t
        }
    }
    (),n=function(){
        function e(){
            i(this,e),this.img=$(".zoom-icon"),this.img.on("click",this.openImage.bind(this.img))
        }
        return r(e,[{
            key:"openImage",value:function(e){
                e.preventDefault();
                var t=e.target.href;
                0===$("#image-overlay").length&&$("body").append('<div id="image-overlay" class="overlay overlay-ajax">\n <div class="pb-image"><img src="'+t+'"/></div>\n </div>'),$("#image-overlay").show(),$("#image-overlay").on("click",function(){
                    $("#image-overlay").remove()
                }
                )
            }
        }
        ]),e
    }
    ();
    t.default=n
}
,function(e,t,a){
    "use strict";
    function i(e,t){
        if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t,"__esModule",{
        value:!0
    }
    );
    var r=function(){
        function e(e,t){
            for(var a=0;
            a<t.length;
            a++){
                var i=t[a];
                i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)
            }
        }
        return function(t,a,i){
            return a&&e(t.prototype,a),i&&e(t,i),t
        }
    }
    (),n=a(12),s=function(e){
        return e&&e.__esModule?e:{
            default:e
        }
    }
    (n),o=function(){
        function e(t){
            i(this,e),this.$tile=$(t),this.translations=$("#viewlet-tileshare")[0].dataset;
            var a=!0,r=!1,n=void 0;
            try{
                for(var o,l=this.$("a")[Symbol.iterator]();
                !(a=(o=l.next()).done);
                a=!0){
                    var d=o.value;
                    d.host===location.host&&(this.$(".share").lenght>0||this.$tile.append(this.template(d.href,d.innerText.trim())))
                }
            }
            catch(e){
                r=!0,n=e
            }
            finally{
                try{
                    !a&&l.return&&l.return()
                }
                finally{
                    if(r)throw n
                }
            }
            new s.default(".share-link a",{
                text:function(e){
                    return e.getAttribute("href")
                }
            }
            ),this.$(".share-link").on("click",this.linkClick.bind(this)),this.$(".share-more").on("click",this.moreClick.bind(this))
        }
        return r(e,[{
            key:"$",value:function(e){
                function t(t){
                    return e.apply(this,arguments)
                }
                return t.toString=function(){
                    return e.toString()
                }
                ,t
            }
            (function(e){
                return $(e,this.$tile)
            }
            )
        }
        ,{
            key:"fb",value:function(e){
                var t=$('meta[property="fb:app_id"]').attr("content");
                if(void 0===t)return"";
                var a={
                    app_id:t,display:"popup",href:e,redirect_uri:location.href
                }
                ;
                return'<li class="share-item share-fb share-pinned">\n <a class="slPrivacy"\n title="'+this.translations.titleFb+'"\n href="https://www.facebook.com/dialog/share?'+$.param(a)+"\"\n onclick=\"javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
                return false;
                \">\n Facebook\n </a>\n </li>"
            }
        }
        /*,{
            key:"twitter",value:function(e,t){
                var a={
                    text:t,url:e
                }
                ;
                return'<li class="share-item share-twitter share-pinned">\n <a class="slPrivacy"\n title="'+this.translations.titleTwitter+'"\n href="https://twitter.com/intent/tweet?'+$.param(a)+"\"\n onclick=\"javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
                return false;
                \">\n Twitter\n </a>\n </li>"
            }
        }*/
        ,{
            key:"linkedin",value:function(e,t){
                var a={
                    mini:"true",url:e,title:t
                }
                ;
                return'<li class="share-item share-linkedin">\n <a class="slPrivacy"\n title="'+this.translations.titleLinkedin+'"\n href="https://www.linkedin.com/shareArticle?'+$.param(a)+"\"\n onclick=\"javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
                return false;
                \">\n Linkedin\n </a>\n </li>"
            }
        }
        ,{
            key:"gplus",value:function(e){
                var t=$('meta[property="og:locale"]').attr("content");
                if(void 0===t)return"";
                var a={
                    url:e,hl:t.replace("_","-")
                }
                ;
                return'<li class="share-item share-gplus">\n <a class="slPrivacy"\n title="'+this.translations.titleGplus+'"\n href="https://plus.google.com/share?'+$.param(a)+"\"\n onclick=\"javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
                return false;
                \">\n Google Plus\n </a>\n </li>"
            }
        }
        ,{
            key:"linkClick",value:function(e){
                e.preventDefault()
            }
        }
        ,{
            key:"moreToggle",value:function(e){
                e.hasClass("share-open")?(e.removeClass("share-open"),this.$(".share-more").removeClass("share-open"),this.$(".share-more > a").html("...")):(e.addClass("share-open"),this.$(".share-more").addClass("share-open"),this.$(".share-more > a").html("x"))
            }
        }
        ,{
            key:"moreClick",value:function(e){
                e.preventDefault(),this.moreToggle(this.$(".share-item:not(.share-pinned)"))
            }
        }
        ]),e
    }
    ();
    t.default=o
}
,function(e,t,a){
    /*! * clipboard.js v2.0.1 * https://zenorocha.github.io/clipboard.js * * Licensed MIT © Zeno Rocha */
     !function(t,a){
        e.exports=a()
    }
    (0,function(){
        return function(e){
            function t(i){
                if(a[i])return a[i].exports;
                var r=a[i]={
                    i:i,l:!1,exports:{
                    }
                }
                ;
                return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports
            }
            var a={
            }
            ;
            return t.m=e,t.c=a,t.i=function(e){
                return e
            }
            ,t.d=function(e,a,i){
                t.o(e,a)||Object.defineProperty(e,a,{
                    configurable:!1,enumerable:!0,get:i
                }
                )
            }
            ,t.n=function(e){
                var a=e&&e.__esModule?function(){
                    return e.default
                }
                :function(){
                    return e
                }
                ;
                return t.d(a,"a",a),a
            }
            ,t.o=function(e,t){
                return Object.prototype.hasOwnProperty.call(e,t)
            }
            ,t.p="",t(t.s=3)
        }
        ([function(e,t,a){
            var i,r,n;
            !function(s,o){
                r=[e,a(7)],i=o,void 0!==(n="function"==typeof i?i.apply(t,r):i)&&(e.exports=n)
            }
            (0,function(e,t){
                "use strict";
                function a(e,t){
                    if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
                }
                var i=function(e){
                    return e&&e.__esModule?e:{
                        default:e
                    }
                }
                (t),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){
                    return typeof e
                }
                :function(e){
                    return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e
                }
                ,n=function(){
                    function e(e,t){
                        for(var a=0;
                        a<t.length;
                        a++){
                            var i=t[a];
                            i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)
                        }
                    }
                    return function(t,a,i){
                        return a&&e(t.prototype,a),i&&e(t,i),t
                    }
                }
                (),s=function(){
                    function e(t){
                        a(this,e),this.resolveOptions(t),this.initSelection()
                    }
                    return n(e,[{
                        key:"resolveOptions",value:function(){
                            var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{
                            }
                            ;
                            this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""
                        }
                    }
                    ,{
                        key:"initSelection",value:function(){
                            this.text?this.selectFake():this.target&&this.selectTarget()
                        }
                    }
                    ,{
                        key:"selectFake",value:function(){
                            var e=this,t="rtl"==document.documentElement.getAttribute("dir");
                            this.removeFake(),this.fakeHandlerCallback=function(){
                                return e.removeFake()
                            }
                            ,this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";
                            var a=window.pageYOffset||document.documentElement.scrollTop;
                            this.fakeElem.style.top=a+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,i.default)(this.fakeElem),this.copyText()
                        }
                    }
                    ,{
                        key:"removeFake",value:function(){
                            this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)
                        }
                    }
                    ,{
                        key:"selectTarget",value:function(){
                            this.selectedText=(0,i.default)(this.target),this.copyText()
                        }
                    }
                    ,{
                        key:"copyText",value:function(){
                            var e=void 0;
                            try{
                                e=document.execCommand(this.action)
                            }
                            catch(t){
                                e=!1
                            }
                            this.handleResult(e)
                        }
                    }
                    ,{
                        key:"handleResult",value:function(e){
                            this.emitter.emit(e?"success":"error",{
                                action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)
                            }
                            )
                        }
                    }
                    ,{
                        key:"clearSelection",value:function(){
                            this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()
                        }
                    }
                    ,{
                        key:"destroy",value:function(){
                            this.removeFake()
                        }
                    }
                    ,{
                        key:"action",set:function(){
                            var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";
                            if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')
                        }
                        ,get:function(){
                            return this._action
                        }
                    }
                    ,{
                        key:"target",set:function(e){
                            if(void 0!==e){
                                if(!e||"object"!==(void 0===e?"undefined":r(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');
                                if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                this._target=e
                            }
                        }
                        ,get:function(){
                            return this._target
                        }
                    }
                    ]),e
                }
                ();
                e.exports=s
            }
            )
        }
        ,function(e,t,a){
            function i(e,t,a){
                if(!e&&!t&&!a)throw new Error("Missing required arguments");
                if(!o.string(t))throw new TypeError("Second argument must be a String");
                if(!o.fn(a))throw new TypeError("Third argument must be a Function");
                if(o.node(e))return r(e,t,a);
                if(o.nodeList(e))return n(e,t,a);
                if(o.string(e))return s(e,t,a);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
            }
            function r(e,t,a){
                return e.addEventListener(t,a),{
                    destroy:function(){
                        e.removeEventListener(t,a)
                    }
                }
            }
            function n(e,t,a){
                return Array.prototype.forEach.call(e,function(e){
                    e.addEventListener(t,a)
                }
                ),{
                    destroy:function(){
                        Array.prototype.forEach.call(e,function(e){
                            e.removeEventListener(t,a)
                        }
                        )
                    }
                }
            }
            function s(e,t,a){
                return l(document.body,e,t,a)
            }
            var o=a(6),l=a(5);
            e.exports=i
        }
        ,function(e,t){
            function a(){
            }
            a.prototype={
                on:function(e,t,a){
                    var i=this.e||(this.e={
                    }
                    );
                    return(i[e]||(i[e]=[])).push({
                        fn:t,ctx:a
                    }
                    ),this
                }
                ,once:function(e,t,a){
                    function i(){
                        r.off(e,i),t.apply(a,arguments)
                    }
                    var r=this;
                    return i._=t,this.on(e,i,a)
                }
                ,emit:function(e){
                    var t=[].slice.call(arguments,1),a=((this.e||(this.e={
                    }
                    ))[e]||[]).slice(),i=0,r=a.length;
                    for(i;
                    i<r;
                    i++)a[i].fn.apply(a[i].ctx,t);
                    return this
                }
                ,off:function(e,t){
                    var a=this.e||(this.e={
                    }
                    ),i=a[e],r=[];
                    if(i&&t)for(var n=0,s=i.length;
                    n<s;
                    n++)i[n].fn!==t&&i[n].fn._!==t&&r.push(i[n]);
                    return r.length?a[e]=r:delete a[e],this
                }
            }
            ,e.exports=a
        }
        ,function(e,t,a){
            var i,r,n;
            !function(s,o){
                r=[e,a(0),a(2),a(1)],i=o,void 0!==(n="function"==typeof i?i.apply(t,r):i)&&(e.exports=n)
            }
            (0,function(e,t,a,i){
                "use strict";
                function r(e){
                    return e&&e.__esModule?e:{
                        default:e
                    }
                }
                function n(e,t){
                    if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
                }
                function s(e,t){
                    if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return!t||"object"!=typeof t&&"function"!=typeof t?e:t
                }
                function o(e,t){
                    if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);
                    e.prototype=Object.create(t&&t.prototype,{
                        constructor:{
                            value:e,enumerable:!1,writable:!0,configurable:!0
                        }
                    }
                    ),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)
                }
                function l(e,t){
                    var a="data-clipboard-"+e;
                    if(t.hasAttribute(a))return t.getAttribute(a)
                }
                var d=r(t),u=r(a),c=r(i),p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){
                    return typeof e
                }
                :function(e){
                    return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e
                }
                ,h=function(){
                    function e(e,t){
                        for(var a=0;
                        a<t.length;
                        a++){
                            var i=t[a];
                            i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)
                        }
                    }
                    return function(t,a,i){
                        return a&&e(t.prototype,a),i&&e(t,i),t
                    }
                }
                (),f=function(e){
                    function t(e,a){
                        n(this,t);
                        var i=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));
                        return i.resolveOptions(a),i.listenClick(e),i
                    }
                    return o(t,e),h(t,[{
                        key:"resolveOptions",value:function(){
                            var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{
                            }
                            ;
                            this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===p(e.container)?e.container:document.body
                        }
                    }
                    ,{
                        key:"listenClick",value:function(e){
                            var t=this;
                            this.listener=(0,c.default)(e,"click",function(e){
                                return t.onClick(e)
                            }
                            )
                        }
                    }
                    ,{
                        key:"onClick",value:function(e){
                            var t=e.delegateTarget||e.currentTarget;
                            this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new d.default({
                                action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this
                            }
                            )
                        }
                    }
                    ,{
                        key:"defaultAction",value:function(e){
                            return l("action",e)
                        }
                    }
                    ,{
                        key:"defaultTarget",value:function(e){
                            var t=l("target",e);
                            if(t)return document.querySelector(t)
                        }
                    }
                    ,{
                        key:"defaultText",value:function(e){
                            return l("text",e)
                        }
                    }
                    ,{
                        key:"destroy",value:function(){
                            this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)
                        }
                    }
                    ],[{
                        key:"isSupported",value:function(){
                            var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,a=!!document.queryCommandSupported;
                            return t.forEach(function(e){
                                a=a&&!!document.queryCommandSupported(e)
                            }
                            ),a
                        }
                    }
                    ]),t
                }
                (u.default);
                e.exports=f
            }
            )
        }
        ,function(e,t){
            function a(e,t){
                for(;
                e&&e.nodeType!==i;
                ){
                    if("function"==typeof e.matches&&e.matches(t))return e;
                    e=e.parentNode
                }
            }
            var i=9;
            if("undefined"!=typeof Element&&!Element.prototype.matches){
                var r=Element.prototype;
                r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector
            }
            e.exports=a
        }
        ,function(e,t,a){
            function i(e,t,a,i,r){
                var s=n.apply(this,arguments);
                return e.addEventListener(a,s,r),{
                    destroy:function(){
                        e.removeEventListener(a,s,r)
                    }
                }
            }
            function r(e,t,a,r,n){
                return"function"==typeof e.addEventListener?i.apply(null,arguments):"function"==typeof a?i.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,function(e){
                    return i(e,t,a,r,n)
                }
                ))
            }
            function n(e,t,a,i){
                return function(a){
                    a.delegateTarget=s(a.target,t),a.delegateTarget&&i.call(e,a)
                }
            }
            var s=a(4);
            e.exports=r
        }
        ,function(e,t){
            t.node=function(e){
                return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType
            }
            ,t.nodeList=function(e){
                var a=Object.prototype.toString.call(e);
                return void 0!==e&&("[object NodeList]"===a||"[object HTMLCollection]"===a)&&"length"in e&&(0===e.length||t.node(e[0]))
            }
            ,t.string=function(e){
                return"string"==typeof e||e instanceof String
            }
            ,t.fn=function(e){
                return"[object Function]"===Object.prototype.toString.call(e)
            }
        }
        ,function(e,t){
            function a(e){
                var t;
                if("SELECT"===e.nodeName)e.focus(),t=e.value;
                else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){
                    var a=e.hasAttribute("readonly");
                    a||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),a||e.removeAttribute("readonly"),t=e.value
                }
                else{
                    e.hasAttribute("contenteditable")&&e.focus();
                    var i=window.getSelection(),r=document.createRange();
                    r.selectNodeContents(e),i.removeAllRanges(),i.addRange(r),t=i.toString()
                }
                return t
            }
            e.exports=a
        }
        ])
    }
    )
}
,function(e,t,a){
    "use strict";
    function i(e){
        return e&&e.__esModule?e:{
            default:e
        }
    }
    function r(e,t){
        if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t,"__esModule",{
        value:!0
    }
    );
    var n=function(){
        function e(e,t){
            for(var a=0;
            a<t.length;
            a++){
                var i=t[a];
                i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)
            }
        }
        return function(t,a,i){
            return a&&e(t.prototype,a),i&&e(t,i),t
        }
    }
    (),s=a(0),o=i(s),l=a(14),d=i(l),u=function(){
        function e(t){
            r(this,e),this.tile=t,this.initSwiper(),this.initSecondCarousel(),new d.default
        }
        return n(e,[{
            key:"initSwiper",value:function(){
                this.swiper=new o.default("#"+this.tile.id+" .carousel-thumbs",{
                    navigation:{
                        nextEl:"#"+this.tile.id+" .carousel-thumbs .swiper-button-next",prevEl:"#"+this.tile.id+" .carousel-thumbs .swiper-button-prev"
                    }
                    ,pagination:{
                        el:"#"+this.tile.id+" .carousel-thumbs .swiper-pagination",clickable:!0
                    }
                }
                )
            }
        }
        ,{
            key:"initSecondCarousel",value:function(){
                var e=$(this.tile).parents(".column");
                this.$tiles=$(".brasil-videocarousel-tile",e),2===this.$tiles.length&&(this.$otherTile=this.$tiles.not(this.tile),this.hideSecondCarusel(),this.initSwitCarousel())
            }
        }
        ,{
            key:"hideSecondCarusel",value:function(){
                if(!($("body.template-compose").length>0)){
                    var e=this.$tiles.last();
                    this.tile===e[0]&&e.hide()
                }
            }
        }
        ,{
            key:"initSwitCarousel",value:function(){
                var e=$("<ul>"),t=!0,a=!1,i=void 0;
                try{
                    for(var r,n=this.$tiles[Symbol.iterator]();
                    !(t=(r=n.next()).done);
                    t=!0){
                        var s=r.value,o=$(".switch-carousel",s).attr("data-text");
                        if(void 0===o)return;
                        var l=$("<li>"+o+"</li>");
                        this.tile===s?l.addClass("active"):l.on("click",function(e){
                            e.preventDefault(),$(this.tile).hide(),this.$otherTile.show()
                        }
                        .bind(this)),e.append(l)
                    }
                }
                catch(e){
                    a=!0,i=e
                }
                finally{
                    try{
                        !t&&n.return&&n.return()
                    }
                    finally{
                        if(a)throw i
                    }
                }
                $(".switch-carousel",this.tile).append(e)
            }
        }
        ]),e
    }
    ();
    t.default=u
}
,function(e,t,a){
    "use strict";
    function i(e,t){
        if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t,"__esModule",{
        value:!0
    }
    );
    var r=function(){
        function e(e,t){
            for(var a=0;
            a<t.length;
            a++){
                var i=t[a];
                i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)
            }
        }
        return function(t,a,i){
            return a&&e(t.prototype,a),i&&e(t,i),t
        }
    }
    (),n=function(){
        function e(){
            i(this,e),this.$video=$(".swiper-video a, .tile-video a, .section-videos .tileItem a"),this.$video.on("click",this.openVideo.bind(this)),$(window).resize(this.resize.bind(this))
        }
        return r(e,[{
            key:"extractId",value:function(e){
                var t=document.createElement("a");
                return t.href=e,t.href.indexOf("embed")>=0?t.pathname.split("/")[2]:t.search.split("=")[1]
            }
        }
        ,{
            key:"openVideo",value:function(e){
                e.preventDefault();
                var t=e.target.dataset.url,a=document.createElement("a");
                a.href=t,a.hostname===location.hostname?$.ajax({
                    headers:{
                        Accept:"application/json"
                    }
                    ,url:t,context:this
                }
                ).done(function(e){
                    this.insertVideo(this.extractId(e.url))
                }
                ):this.insertVideo(this.extractId(t))
            }
        }
        ,{
            key:"insertVideo",value:function(e){
                $("body").append('<div class="video-player">\n <iframe src="'+location.protocol+"//www.youtube.com/embed/"+e+'?rel=0&controls=0&showinfo=0&autoplay=1">\n </iframe>\n </div>'),$(".video-player").on("click",this.closeVideo.bind(this)),this.$iframe=$(".video-player iframe"),this.resize()
            }
        }
        ,{
            key:"closeVideo",value:function(e){
                e.preventDefault(),$(".video-player").remove()
            }
        }
        ,{
            key:"resize",value:function(e){
                void 0!==e&&e.preventDefault(),this.$iframe.height(9*this.$iframe.width()/16)
            }
        }
        ]),e
    }
    ();
    t.default=n
}
,function(e,t,a){
    "use strict";
    Object.defineProperty(t,"__esModule",{
        value:!0
    }
    );
    var i=null,r=function(){
        var e=function(){
            function e(){
            }
            return e.prototype.qtd_coluna_anterior="",e.prototype.scrollbar=!1,e.prototype.resize=function(){
                var e=void 0;
                e=1,$(window).width()>480&&(e=2),$(window).width()>960&&(e=3),this.qtd_coluna_anterior!==e&&(this.qtd_coluna_anterior=e,$(".videogallery-tile").each(function(){
                    $(this).removeClass("gallery-2-columns"),$(this).removeClass("gallery-3-columns"),2===e?$(this).addClass("gallery-2-columns"):3===e&&$(this).addClass("gallery-3-columns");
                    var t=$(".player-holder iframe").width();
                    $(".player-holder iframe").height(t/1.3333);
                    var a=$(this);
                    a.find(".gallery-element").find(".gallery-element-link").click(function(e){
                        e.preventDefault();
                        var t=$(this).data("player-dom"),i=$(this).siblings(".gallery-element-metadata");
                        a.find(".selected").removeClass("selected"),$(this).parents(".gallery-element").addClass("selected");
                        var r=a.find(".player-holder");
                        r.find(".player-video").html(t),r.find(".title").html(i.find(".title").html()),r.find(".description").html(i.find(".description").html());
                        var n=$(".player-holder iframe").width();
                        $(".player-holder iframe").height(n/1.3333)
                    }
                    )
                }
                ))
            }
            ,e
        }
        ();
        return null==i&&(i=new e),i
    }
    ;
    t.default=r
}
]).default;
