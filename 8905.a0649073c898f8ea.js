"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8905],{8905:(q,O,m)=>{m.r(O),m.d(O,{startInputShims:()=>X});var y=m(5861),C=m(4435),h=m(544),K=m(6884);m(7643);const A=new WeakMap,I=(t,e,s,n=0,o=!1)=>{A.has(t)!==s&&(s?H(t,e,n,o):k(t,e))},H=(t,e,s,n=!1)=>{const o=e.parentNode,r=e.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,n&&(r.disabled=!0),o.appendChild(r),A.set(t,r);const c="rtl"===t.ownerDocument.dir?9999:-9999;t.style.pointerEvents="none",e.style.transform=`translate3d(${c}px,${s}px,0) scale(0)`},k=(t,e)=>{const s=A.get(t);s&&(A.delete(t),s.remove()),t.style.pointerEvents="",e.style.transform=""},P="input, textarea, [no-blur], [contenteditable]",N="$ionPaddingTimer",T=(t,e,s)=>{const n=t[N];n&&clearTimeout(n),e>0?t.style.setProperty("--keyboard-offset",`${e}px`):t[N]=setTimeout(()=>{t.style.setProperty("--keyboard-offset","0px"),s&&s()},120)},U=(t,e,s)=>{t.addEventListener("focusout",()=>{e&&T(e,0,s)},{once:!0})};let g=0;const w="data-ionic-skip-scroll-assist",V=(t,e,s,n,o,r,a,c=!1)=>{const i=r&&(void 0===a||a.mode===K.a.None),S=function(){var u=(0,y.Z)(function*(){e.hasAttribute(w)?e.removeAttribute(w):J(t,e,s,n,o,i,c)});return function(){return u.apply(this,arguments)}}();return t.addEventListener("focusin",S,!0),()=>{t.removeEventListener("focusin",S,!0)}},p=t=>{document.activeElement!==t&&(t.setAttribute(w,"true"),t.focus())},J=function(){var t=(0,y.Z)(function*(e,s,n,o,r,a,c=!1){if(!n&&!o)return;const i=((t,e,s)=>{var n;return((t,e,s,n)=>{const o=t.top,r=t.bottom,a=e.top,i=a+15,u=Math.min(e.bottom,n-s)-50-r,v=i-o,l=Math.round(u<0?-u:v>0?-v:0),_=Math.min(l,o-a),M=Math.abs(_)/.3;return{scrollAmount:_,scrollDuration:Math.min(400,Math.max(150,M)),scrollPadding:s,inputSafeY:4-(o-i)}})((null!==(n=t.closest("ion-item,[ion-item]"))&&void 0!==n?n:t).getBoundingClientRect(),e.getBoundingClientRect(),s,t.ownerDocument.defaultView.innerHeight)})(e,n||o,r);if(n&&Math.abs(i.scrollAmount)<4)return p(s),void(a&&null!==n&&(T(n,g),U(s,n,()=>g=0)));if(I(e,s,!0,i.inputSafeY,c),p(s),(0,h.r)(()=>e.click()),a&&n&&(g=i.scrollPadding,T(n,g)),typeof window<"u"){let S;const u=function(){var l=(0,y.Z)(function*(){void 0!==S&&clearTimeout(S),window.removeEventListener("ionKeyboardDidShow",v),window.removeEventListener("ionKeyboardDidShow",u),n&&(yield(0,C.c)(n,0,i.scrollAmount,i.scrollDuration)),I(e,s,!1,i.inputSafeY),p(s),a&&U(s,n,()=>g=0)});return function(){return l.apply(this,arguments)}}(),v=()=>{window.removeEventListener("ionKeyboardDidShow",v),window.addEventListener("ionKeyboardDidShow",u)};if(n){const l=yield(0,C.g)(n);if(i.scrollAmount>l.scrollHeight-l.clientHeight-l.scrollTop)return"password"===s.type?(i.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",v)):window.addEventListener("ionKeyboardDidShow",u),void(S=setTimeout(u,1e3))}u()}});return function(s,n,o,r,a,c){return t.apply(this,arguments)}}(),X=function(){var t=(0,y.Z)(function*(e,s){const n=document,o="ios"===s,r="android"===s,a=e.getNumber("keyboardHeight",290),c=e.getBoolean("scrollAssist",!0),i=e.getBoolean("hideCaretOnScroll",o),S=e.getBoolean("inputBlurring",o),u=e.getBoolean("scrollPadding",!0),v=Array.from(n.querySelectorAll("ion-input, ion-textarea")),l=new WeakMap,_=new WeakMap,W=yield K.K.getResizeMode(),M=function(){var f=(0,y.Z)(function*(d){yield new Promise(L=>(0,h.c)(d,L));const x=d.shadowRoot||d,b=x.querySelector("input")||x.querySelector("textarea"),D=(0,C.f)(d),j=D?null:d.closest("ion-footer");if(b){if(D&&i&&!l.has(d)){const L=((t,e,s)=>{if(!s||!e)return()=>{};const n=c=>{(t=>t===t.getRootNode().activeElement)(e)&&I(t,e,c)},o=()=>I(t,e,!1),r=()=>n(!0),a=()=>n(!1);return(0,h.a)(s,"ionScrollStart",r),(0,h.a)(s,"ionScrollEnd",a),e.addEventListener("blur",o),()=>{(0,h.b)(s,"ionScrollStart",r),(0,h.b)(s,"ionScrollEnd",a),e.removeEventListener("blur",o)}})(d,b,D);l.set(d,L)}if("date"!==b.type&&"datetime-local"!==b.type&&(D||j)&&c&&!_.has(d)){const L=V(d,b,D,j,a,u,W,r);_.set(d,L)}}});return function(x){return f.apply(this,arguments)}}();S&&(()=>{let t=!0,e=!1;const s=document;(0,h.a)(s,"ionScrollStart",()=>{e=!0}),s.addEventListener("focusin",()=>{t=!0},!0),s.addEventListener("touchend",a=>{if(e)return void(e=!1);const c=s.activeElement;if(!c||c.matches(P))return;const i=a.target;i!==c&&(i.matches(P)||i.closest(P)||(t=!1,setTimeout(()=>{t||c.blur()},50)))},!1)})();for(const f of v)M(f);n.addEventListener("ionInputDidLoad",f=>{M(f.detail)}),n.addEventListener("ionInputDidUnload",f=>{(f=>{if(i){const d=l.get(f);d&&d(),l.delete(f)}if(c){const d=_.get(f);d&&d(),_.delete(f)}})(f.detail)})});return function(s,n){return t.apply(this,arguments)}}()}}]);