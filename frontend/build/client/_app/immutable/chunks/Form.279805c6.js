import{S as c,i as _,s as d,C as g,k as w,l as F,m as b,h as u,n as m,b as S,J as v,K as y,D as q,E as C,F as E,g as O,d as R}from"./index.da558d89.js";import{h as k}from"./config.1b14bc65.js";function D(i){let t,n,r,f;const l=i[6].default,o=g(l,i,i[5],null);return{c(){t=w("form"),o&&o.c(),this.h()},l(e){t=F(e,"FORM",{action:!0,method:!0,class:!0});var a=b(t);o&&o.l(a),a.forEach(u),this.h()},h(){m(t,"action",i[0]),m(t,"method",i[1]),m(t,"class","svelte-wh5sep")},m(e,a){S(e,t,a),o&&o.m(t,null),n=!0,r||(f=v(t,"submit",y(i[2])),r=!0)},p(e,[a]){o&&o.p&&(!n||a&32)&&q(o,l,e,e[5],n?E(l,e[5],a,null):C(e[5]),null),(!n||a&1)&&m(t,"action",e[0]),(!n||a&2)&&m(t,"method",e[1])},i(e){n||(O(o,e),n=!0)},o(e){R(o,e),n=!1},d(e){e&&u(t),o&&o.d(e),r=!1,f()}}}function J(i,t,n){let{$$slots:r={},$$scope:f}=t,{action:l}=t,{method:o="POST"}=t,{show:e}=t,{errors:a}=t;async function h(){const s=await k(this);typeof s.id=="string"&&(window.location.href="/"+s.id),s.message!==void 0&&console.log(s.message),s.errors!==void 0&&(n(3,e=!0),a(s.errors))}return i.$$set=s=>{"action"in s&&n(0,l=s.action),"method"in s&&n(1,o=s.method),"show"in s&&n(3,e=s.show),"errors"in s&&n(4,a=s.errors),"$$scope"in s&&n(5,f=s.$$scope)},[l,o,h,e,a,f,r]}class P extends c{constructor(t){super(),_(this,t,J,D,d,{action:0,method:1,show:3,errors:4})}}export{P as F};