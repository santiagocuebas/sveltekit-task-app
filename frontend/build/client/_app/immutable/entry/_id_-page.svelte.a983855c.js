import{S as ee,i as te,s as le,k as y,q as R,a as I,l as N,m as V,r as B,h as p,c as S,n as g,b as C,G as m,J as M,H as Z,L as Ae,M as ze,u as ne,C as Ve,K as re,D as Le,E as Ie,F as Se,g as U,d as P,N as G,y as H,z as K,A as W,f as J,B as X,w as Q,O as Y,P as $,v as x,e as ie,Q as Pe,R as Re}from"../chunks/index.de3e9b61.js";import{g as ge,I as ke,E as Ue}from"../chunks/ErrorBox.ba74f28f.js";function Be(t){let e,s,l,a,n,i,r,u,h,E,c,o,k,D,b,w,f,d,_,T,O,z,v,L,q;return{c(){e=y("nav"),s=y("h2"),l=R("FAVORITED LINKS"),a=I(),n=y("ul"),i=y("a"),r=y("li"),u=R("Profile"),E=I(),c=y("span"),o=R("|"),k=I(),D=y("a"),b=y("li"),w=R("Log out"),f=I(),d=y("span"),_=R("|"),T=I(),O=y("a"),z=y("li"),v=R("Delete User"),this.h()},l(F){e=N(F,"NAV",{class:!0});var A=V(e);s=N(A,"H2",{class:!0});var se=V(s);l=B(se,"FAVORITED LINKS"),se.forEach(p),a=S(A),n=N(A,"UL",{class:!0});var j=V(n);i=N(j,"A",{href:!0});var ue=V(i);r=N(ue,"LI",{class:!0});var ce=V(r);u=B(ce,"Profile"),ce.forEach(p),ue.forEach(p),E=S(j),c=N(j,"SPAN",{class:!0});var fe=V(c);o=B(fe,"|"),fe.forEach(p),k=S(j),D=N(j,"A",{href:!0});var de=V(D);b=N(de,"LI",{class:!0});var he=V(b);w=B(he,"Log out"),he.forEach(p),de.forEach(p),f=S(j),d=N(j,"SPAN",{class:!0});var _e=V(d);_=B(_e,"|"),_e.forEach(p),T=S(j),O=N(j,"A",{href:!0});var me=V(O);z=N(me,"LI",{class:!0});var ve=V(z);v=B(ve,"Delete User"),ve.forEach(p),me.forEach(p),j.forEach(p),A.forEach(p),this.h()},h(){g(s,"class","svelte-12cdmv3"),g(r,"class","svelte-12cdmv3"),g(i,"href",h="/"+t[0]),g(c,"class","svelte-12cdmv3"),g(b,"class","svelte-12cdmv3"),g(D,"href","/logout"),g(d,"class","svelte-12cdmv3"),g(z,"class","svelte-12cdmv3"),g(O,"href","/deleteuser"),g(n,"class","svelte-12cdmv3"),g(e,"class","svelte-12cdmv3")},m(F,A){C(F,e,A),m(e,s),m(s,l),m(e,a),m(e,n),m(n,i),m(i,r),m(r,u),m(n,E),m(n,c),m(c,o),m(n,k),m(n,D),m(D,b),m(b,w),m(n,f),m(n,d),m(d,_),m(n,T),m(n,O),m(O,z),m(z,v),L||(q=[M(D,"click",t[1]),M(O,"click",t[2])],L=!0)},p(F,[A]){A&1&&h!==(h="/"+F[0])&&g(i,"href",h)},i:Z,o:Z,d(F){F&&p(e),L=!1,Ae(q)}}}function qe(t,e,s){let{id:l}=e;const a=async()=>{const i=await fetch("http://localhost:4200/api/auth/logout",{method:"POST",credentials:"include",body:null}).then(r=>r.json());i.message&&console.log(i.message),typeof i.url=="string"&&ge(i.url)},n=async()=>{const i=await fetch("http://localhost:4200/api/user/delete",{method:"DELETE",credentials:"include",body:null}).then(r=>r.json());i.message&&console.log(i.message),typeof i.url=="string"&&ge(i.url)};return t.$$set=i=>{"id"in i&&s(0,l=i.id)},[l,a,n]}class Ce extends ee{constructor(e){super(),te(this,e,qe,Be,le,{id:0})}}var Fe=["second","minute","hour","day","week","month","year"];function Me(t,e){if(e===0)return["just now","right now"];var s=Fe[Math.floor(e/2)];return t>1&&(s+="s"),[t+" "+s+" ago","in "+t+" "+s]}var je=["秒","分钟","小时","天","周","个月","年"];function He(t,e){if(e===0)return["刚刚","片刻后"];var s=je[~~(e/2)];return[t+" "+s+"前",t+" "+s+"后"]}var oe={},Oe=function(t,e){oe[t]=e},Ke=function(t){return oe[t]||oe.en_US},ae=[60,60,24,7,365/7/12,12];function pe(t){return t instanceof Date?t:!isNaN(t)||/^\d+$/.test(t)?new Date(parseInt(t)):(t=(t||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(t))}function We(t,e){var s=t<0?1:0;t=Math.abs(t);for(var l=t,a=0;t>=ae[a]&&a<ae.length;a++)t/=ae[a];return t=Math.floor(t),a*=2,t>(a===0?9:1)&&(a+=1),e(t,a,l)[s].replace("%s",t.toString())}function Xe(t,e){var s=e?pe(e):new Date;return(+s-+pe(t))/1e3}var be=function(t,e,s){var l=Xe(t,s&&s.relativeDate);return We(l,Ke(e))};Oe("en_US",Me);Oe("zh_CN",He);function Ze(t){let e,s,l,a,n=t[0].title+"",i,r,u,h=t[0].url+"",E,c,o,k,D=t[0].description+"",b,w,f,d=be(t[0].createdAt)+"",_,T,O;return{c(){e=y("div"),s=y("i"),l=I(),a=y("h2"),i=R(n),r=I(),u=y("a"),E=R(h),o=I(),k=y("div"),b=R(D),w=I(),f=y("p"),_=R(d),this.h()},l(z){e=N(z,"DIV",{class:!0});var v=V(e);s=N(v,"I",{class:!0}),V(s).forEach(p),l=S(v),a=N(v,"H2",{class:!0});var L=V(a);i=B(L,n),L.forEach(p),r=S(v),u=N(v,"A",{href:!0,target:!0,rel:!0,class:!0});var q=V(u);E=B(q,h),q.forEach(p),o=S(v),k=N(v,"DIV",{class:!0});var F=V(k);b=B(F,D),F.forEach(p),w=S(v),f=N(v,"P",{class:!0});var A=V(f);_=B(A,d),A.forEach(p),v.forEach(p),this.h()},h(){g(s,"class","fa-solid fa-plus svelte-zo9ooq"),g(a,"class","svelte-zo9ooq"),g(u,"href",c=t[0].url),g(u,"target","_blank"),g(u,"rel","noreferrer"),g(u,"class","svelte-zo9ooq"),g(k,"class","link-description svelte-zo9ooq"),g(f,"class","link-createdAt svelte-zo9ooq"),g(e,"class","link-content svelte-zo9ooq")},m(z,v){C(z,e,v),m(e,s),m(e,l),m(e,a),m(a,i),m(e,r),m(e,u),m(u,E),m(e,o),m(e,k),m(k,b),m(e,w),m(e,f),m(f,_),T||(O=M(s,"mousedown",function(){ze(t[1](!0,t[0]))&&t[1](!0,t[0]).apply(this,arguments)}),T=!0)},p(z,[v]){t=z,v&1&&n!==(n=t[0].title+"")&&ne(i,n),v&1&&h!==(h=t[0].url+"")&&ne(E,h),v&1&&c!==(c=t[0].url)&&g(u,"href",c),v&1&&D!==(D=t[0].description+"")&&ne(b,D),v&1&&d!==(d=be(t[0].createdAt)+"")&&ne(_,d)},i:Z,o:Z,d(z){z&&p(e),T=!1,O()}}}function Ge(t,e,s){let{link:l}=e,{change:a}=e;return t.$$set=n=>{"link"in n&&s(0,l=n.link),"change"in n&&s(1,a=n.change)},[l,a]}class Je extends ee{constructor(e){super(),te(this,e,Ge,Ze,le,{link:0,change:1})}}function Qe(t){let e,s,l,a,n,i,r,u,h;const E=t[8].default,c=Ve(E,t,t[7],null);return{c(){e=y("form"),c&&c.c(),s=I(),l=y("textarea"),a=I(),n=y("button"),i=R("Add Link"),this.h()},l(o){e=N(o,"FORM",{action:!0,method:!0,class:!0});var k=V(e);c&&c.l(k),s=S(k),l=N(k,"TEXTAREA",{name:!0,placeholder:!0,rows:!0,spellcheck:!0,class:!0}),V(l).forEach(p),a=S(k),n=N(k,"BUTTON",{class:!0});var D=V(n);i=B(D,"Add Link"),D.forEach(p),k.forEach(p),this.h()},h(){g(l,"name","description"),g(l,"placeholder","Description"),g(l,"rows","5"),g(l,"spellcheck","false"),g(l,"class","svelte-1u7mlo"),g(n,"class","add-link svelte-1u7mlo"),g(e,"action",t[0]),g(e,"method",t[1]),g(e,"class","svelte-1u7mlo")},m(o,k){C(o,e,k),c&&c.m(e,null),m(e,s),m(e,l),m(e,a),m(e,n),m(n,i),r=!0,u||(h=M(e,"submit",re(t[2])),u=!0)},p(o,[k]){c&&c.p&&(!r||k&128)&&Le(c,E,o,o[7],r?Se(E,o[7],k,null):Ie(o[7]),null),(!r||k&1)&&g(e,"action",o[0]),(!r||k&2)&&g(e,"method",o[1])},i(o){r||(U(c,o),r=!0)},o(o){P(c,o),r=!1},d(o){o&&p(e),c&&c.d(o),u=!1,h()}}}function Ye(t,e,s){let{$$slots:l={},$$scope:a}=e,{action:n}=e,{method:i="POST"}=e,{change:r}=e,{links:u}=e,{changeVisibility:h}=e,{errors:E}=e;async function c(){const o=await fetch(this.action,{method:this.method,credentials:"include",body:new FormData(this)}).then(k=>k.json());o.errors?(h(!0),E(o.errors)):o.message?console.log(o):(r(!1),s(3,u=[o.link,...u]))}return t.$$set=o=>{"action"in o&&s(0,n=o.action),"method"in o&&s(1,i=o.method),"change"in o&&s(4,r=o.change),"links"in o&&s(3,u=o.links),"changeVisibility"in o&&s(5,h=o.changeVisibility),"errors"in o&&s(6,E=o.errors),"$$scope"in o&&s(7,a=o.$$scope)},[n,i,c,u,r,h,E,a,l]}class $e extends ee{constructor(e){super(),te(this,e,Ye,Qe,le,{action:0,method:1,change:4,links:3,changeVisibility:5,errors:6})}}function xe(t){let e,s,l,a,n,i,r,u,h,E,c,o,k,D,b,w;const f=t[10].default,d=Ve(f,t,t[9],null);return{c(){e=y("form"),d&&d.c(),s=I(),l=y("input"),a=I(),n=y("input"),i=I(),r=y("textarea"),u=I(),h=y("button"),E=R("Delete"),c=I(),o=y("button"),k=R("Edit"),this.h()},l(_){e=N(_,"FORM",{action:!0,method:!0,class:!0});var T=V(e);d&&d.l(T),s=S(T),l=N(T,"INPUT",{type:!0,name:!0,placeholder:!0,class:!0}),a=S(T),n=N(T,"INPUT",{type:!0,name:!0,placeholder:!0,class:!0}),i=S(T),r=N(T,"TEXTAREA",{name:!0,placeholder:!0,rows:!0,spellcheck:!0,class:!0}),V(r).forEach(p),u=S(T),h=N(T,"BUTTON",{class:!0});var O=V(h);E=B(O,"Delete"),O.forEach(p),c=S(T),o=N(T,"BUTTON",{class:!0});var z=V(o);k=B(z,"Edit"),z.forEach(p),T.forEach(p),this.h()},h(){g(l,"type","text"),g(l,"name","title"),g(l,"placeholder","Title"),g(l,"class","svelte-tz3m6w"),g(n,"type","text"),g(n,"name","url"),g(n,"placeholder","URL"),g(n,"class","svelte-tz3m6w"),g(r,"name","description"),g(r,"placeholder","Description"),g(r,"rows","5"),g(r,"spellcheck","false"),g(r,"class","svelte-tz3m6w"),g(h,"class","delete-link svelte-tz3m6w"),g(o,"class","edit-link svelte-tz3m6w"),g(e,"action",t[1]),g(e,"method",t[2]),g(e,"class","svelte-tz3m6w")},m(_,T){C(_,e,T),d&&d.m(e,null),m(e,s),m(e,l),G(l,t[0].title),m(e,a),m(e,n),G(n,t[0].url),m(e,i),m(e,r),G(r,t[0].description),m(e,u),m(e,h),m(h,E),m(e,c),m(e,o),m(o,k),D=!0,b||(w=[M(l,"input",t[11]),M(n,"input",t[12]),M(r,"input",t[13]),M(h,"click",re(t[4])),M(o,"click",re(t[3]))],b=!0)},p(_,[T]){d&&d.p&&(!D||T&512)&&Le(d,f,_,_[9],D?Se(f,_[9],T,null):Ie(_[9]),null),T&1&&l.value!==_[0].title&&G(l,_[0].title),T&1&&n.value!==_[0].url&&G(n,_[0].url),T&1&&G(r,_[0].description),(!D||T&2)&&g(e,"action",_[1]),(!D||T&4)&&g(e,"method",_[2])},i(_){D||(U(d,_),D=!0)},o(_){P(d,_),D=!1},d(_){_&&p(e),d&&d.d(_),b=!1,Ae(w)}}}function et(t,e,s){let{$$slots:l={},$$scope:a}=e,{action:n}=e,{method:i="POST"}=e,{change:r}=e,{links:u}=e,{link:h}=e,{changeVisibility:E}=e,{errors:c}=e;async function o(){const f=await fetch(`http://localhost:4200/api/link/edit/${h.id}`,{method:"POST",credentials:"include",body:new FormData(this.parentElement)}).then(d=>d.json());if(f.message)console.log(f.message);else if(f.errors!==void 0)E(!0),c(f.errors);else{const d=u.map(_=>(_.id===h.id&&(_.title=h.title,_.url=h.url,_.description=h.description),_));r(!1,null),s(5,u=d)}}async function k(){const f=await fetch(`http://localhost:4200/api/link/delete/${h.id}`,{method:"DELETE",credentials:"include",body:null}).then(d=>d.json());f.delete===!0&&s(5,u=u.filter(({id:d})=>d!==h.id)),f.message&&console.log(f.message),r(!1,null)}function D(){h.title=this.value,s(0,h)}function b(){h.url=this.value,s(0,h)}function w(){h.description=this.value,s(0,h)}return t.$$set=f=>{"action"in f&&s(1,n=f.action),"method"in f&&s(2,i=f.method),"change"in f&&s(6,r=f.change),"links"in f&&s(5,u=f.links),"link"in f&&s(0,h=f.link),"changeVisibility"in f&&s(7,E=f.changeVisibility),"errors"in f&&s(8,c=f.errors),"$$scope"in f&&s(9,a=f.$$scope)},[h,n,i,o,k,u,r,E,c,a,l,D,b,w]}class tt extends ee{constructor(e){super(),te(this,e,et,xe,le,{action:1,method:2,change:6,links:5,link:0,changeVisibility:7,errors:8})}}function Ee(t,e,s){const l=t.slice();return l[8]=e[s],l}function we(t){let e,s,l,a,n,i,r,u,h,E,c;function o(b){t[15](b)}function k(b){t[16](b)}let D={action:"http://localhost:4200/api/link/add",changeVisibility:t[10],errors:t[12],$$slots:{default:[lt]},$$scope:{ctx:t}};return t[6]!==void 0&&(D.change=t[6]),t[0]!==void 0&&(D.links=t[0]),i=new $e({props:D}),Q.push(()=>Y(i,"change",o)),Q.push(()=>Y(i,"links",k)),{c(){e=y("div"),s=y("button"),l=R("-"),a=I(),n=y("div"),H(i.$$.fragment),this.h()},l(b){e=N(b,"DIV",{class:!0});var w=V(e);s=N(w,"BUTTON",{class:!0});var f=V(s);l=B(f,"-"),f.forEach(p),a=S(w),n=N(w,"DIV",{class:!0});var d=V(n);K(i.$$.fragment,d),d.forEach(p),w.forEach(p),this.h()},h(){g(s,"class","link-occult svelte-seixv5"),g(n,"class","link-add svelte-seixv5"),g(e,"class","link-absolute svelte-seixv5")},m(b,w){C(b,e,w),m(e,s),m(s,l),m(e,a),m(e,n),W(i,n,null),h=!0,E||(c=M(s,"click",t[14]),E=!0)},p(b,w){const f={};w&67108874&&(f.$$scope={dirty:w,ctx:b}),!r&&w&64&&(r=!0,f.change=b[6],$(()=>r=!1)),!u&&w&1&&(u=!0,f.links=b[0],$(()=>u=!1)),i.$set(f)},i(b){h||(U(i.$$.fragment,b),h=!0)},o(b){P(i.$$.fragment,b),h=!1},d(b){b&&p(e),X(i),E=!1,c()}}}function De(t){let e,s;return e=new Ue({props:{hide:t[10],errors:t[1]}}),{c(){H(e.$$.fragment)},l(l){K(e.$$.fragment,l)},m(l,a){W(e,l,a),s=!0},p(l,a){const n={};a&2&&(n.errors=l[1]),e.$set(n)},i(l){s||(U(e.$$.fragment,l),s=!0)},o(l){P(e.$$.fragment,l),s=!1},d(l){X(e,l)}}}function lt(t){let e,s,l,a,n,i=t[3]&&De(t);return s=new ke({props:{name:"title",text:"Title",className:"input-upload"}}),a=new ke({props:{name:"url",text:"URL",className:"input-upload"}}),{c(){i&&i.c(),e=I(),H(s.$$.fragment),l=I(),H(a.$$.fragment)},l(r){i&&i.l(r),e=S(r),K(s.$$.fragment,r),l=S(r),K(a.$$.fragment,r)},m(r,u){i&&i.m(r,u),C(r,e,u),W(s,r,u),C(r,l,u),W(a,r,u),n=!0},p(r,u){r[3]?i?(i.p(r,u),u&8&&U(i,1)):(i=De(r),i.c(),U(i,1),i.m(e.parentNode,e)):i&&(x(),P(i,1,1,()=>{i=null}),J())},i(r){n||(U(i),U(s.$$.fragment,r),U(a.$$.fragment,r),n=!0)},o(r){P(i),P(s.$$.fragment,r),P(a.$$.fragment,r),n=!1},d(r){i&&i.d(r),r&&p(e),X(s,r),r&&p(l),X(a,r)}}}function Te(t){let e,s,l,a,n,i,r,u,h,E,c,o;function k(f){t[18](f)}function D(f){t[19](f)}function b(f){t[20](f)}let w={action:`http://localhost:4200/api/link/edit/${t[8].id}`,changeVisibility:t[11],errors:t[12],$$slots:{default:[st]},$$scope:{ctx:t}};return t[7]!==void 0&&(w.change=t[7]),t[0]!==void 0&&(w.links=t[0]),t[8]!==void 0&&(w.link=t[8]),i=new tt({props:w}),Q.push(()=>Y(i,"change",k)),Q.push(()=>Y(i,"links",D)),Q.push(()=>Y(i,"link",b)),{c(){e=y("div"),s=y("button"),l=R("-"),a=I(),n=y("div"),H(i.$$.fragment),this.h()},l(f){e=N(f,"DIV",{class:!0});var d=V(e);s=N(d,"BUTTON",{class:!0});var _=V(s);l=B(_,"-"),_.forEach(p),a=S(d),n=N(d,"DIV",{class:!0});var T=V(n);K(i.$$.fragment,T),T.forEach(p),d.forEach(p),this.h()},h(){g(s,"class","link-occult svelte-seixv5"),g(n,"class","link-add svelte-seixv5"),g(e,"class","link-absolute svelte-seixv5")},m(f,d){C(f,e,d),m(e,s),m(s,l),m(e,a),m(e,n),W(i,n,null),E=!0,c||(o=M(s,"click",t[17]),c=!0)},p(f,d){const _={};d&256&&(_.action=`http://localhost:4200/api/link/edit/${f[8].id}`),d&67108898&&(_.$$scope={dirty:d,ctx:f}),!r&&d&128&&(r=!0,_.change=f[7],$(()=>r=!1)),!u&&d&1&&(u=!0,_.links=f[0],$(()=>u=!1)),!h&&d&256&&(h=!0,_.link=f[8],$(()=>h=!1)),i.$set(_)},i(f){E||(U(i.$$.fragment,f),E=!0)},o(f){P(i.$$.fragment,f),E=!1},d(f){f&&p(e),X(i),c=!1,o()}}}function ye(t){let e,s;return e=new Ue({props:{hide:t[11],errors:t[1]}}),{c(){H(e.$$.fragment)},l(l){K(e.$$.fragment,l)},m(l,a){W(e,l,a),s=!0},p(l,a){const n={};a&2&&(n.errors=l[1]),e.$set(n)},i(l){s||(U(e.$$.fragment,l),s=!0)},o(l){P(e.$$.fragment,l),s=!1},d(l){X(e,l)}}}function st(t){let e,s,l=t[5]&&ye(t);return{c(){l&&l.c(),e=ie()},l(a){l&&l.l(a),e=ie()},m(a,n){l&&l.m(a,n),C(a,e,n),s=!0},p(a,n){a[5]?l?(l.p(a,n),n&32&&U(l,1)):(l=ye(a),l.c(),U(l,1),l.m(e.parentNode,e)):l&&(x(),P(l,1,1,()=>{l=null}),J())},i(a){s||(U(l),s=!0)},o(a){P(l),s=!1},d(a){l&&l.d(a),a&&p(e)}}}function nt(t){let e,s,l,a,n,i;return{c(){e=y("div"),s=R(`Haven't saved any links yet?\r
				`),l=y("button"),a=R("Starts now!"),this.h()},l(r){e=N(r,"DIV",{class:!0});var u=V(e);s=B(u,`Haven't saved any links yet?\r
				`),l=N(u,"BUTTON",{class:!0});var h=V(l);a=B(h,"Starts now!"),h.forEach(p),u.forEach(p),this.h()},h(){g(l,"class","link-save svelte-seixv5"),g(e,"class","link-message svelte-seixv5")},m(r,u){C(r,e,u),m(e,s),m(e,l),m(l,a),n||(i=M(l,"click",t[23]),n=!0)},p:Z,i:Z,o:Z,d(r){r&&p(e),n=!1,i()}}}function it(t){let e=[],s=new Map,l,a,n,i,r,u,h=t[0];const E=c=>c[8].id;for(let c=0;c<h.length;c+=1){let o=Ee(t,h,c),k=E(o);s.set(k,e[c]=Ne(k,o))}return{c(){for(let c=0;c<e.length;c+=1)e[c].c();l=I(),a=y("button"),n=R("+"),this.h()},l(c){for(let k=0;k<e.length;k+=1)e[k].l(c);l=S(c),a=N(c,"BUTTON",{class:!0});var o=V(a);n=B(o,"+"),o.forEach(p),this.h()},h(){g(a,"class","link-button svelte-seixv5")},m(c,o){for(let k=0;k<e.length;k+=1)e[k]&&e[k].m(c,o);C(c,l,o),C(c,a,o),m(a,n),i=!0,r||(u=M(a,"click",t[22]),r=!0)},p(c,o){o&129&&(h=c[0],x(),e=Pe(e,o,E,1,c,h,s,l.parentNode,Re,Ne,l,Ee),J())},i(c){if(!i){for(let o=0;o<h.length;o+=1)U(e[o]);i=!0}},o(c){for(let o=0;o<e.length;o+=1)P(e[o]);i=!1},d(c){for(let o=0;o<e.length;o+=1)e[o].d(c);c&&p(l),c&&p(a),r=!1,u()}}}function Ne(t,e){let s,l,a,n;function i(u){e[21](u)}let r={link:e[8]};return e[7]!==void 0&&(r.change=e[7]),l=new Je({props:r}),Q.push(()=>Y(l,"change",i)),{key:t,first:null,c(){s=ie(),H(l.$$.fragment),this.h()},l(u){s=ie(),K(l.$$.fragment,u),this.h()},h(){this.first=s},m(u,h){C(u,s,h),W(l,u,h),n=!0},p(u,h){e=u;const E={};h&1&&(E.link=e[8]),!a&&h&128&&(a=!0,E.change=e[7],$(()=>a=!1)),l.$set(E)},i(u){n||(U(l.$$.fragment,u),n=!0)},o(u){P(l.$$.fragment,u),n=!1},d(u){u&&p(s),X(l,u)}}}function at(t){let e,s,l,a,n,i,r,u=t[9].firstname+"",h,E,c=t[9].lastname+"",o,k,D,b,w,f,d=t[2]&&we(t),_=t[4]&&Te(t);l=new Ce({props:{id:t[9].id}});const T=[it,nt],O=[];function z(v,L){return v[0].length>0?0:1}return b=z(t),w=O[b]=T[b](t),{c(){d&&d.c(),e=I(),_&&_.c(),s=I(),H(l.$$.fragment),a=I(),n=y("div"),i=y("div"),r=R("Welcome "),h=R(u),E=I(),o=R(c),k=I(),D=y("div"),w.c(),this.h()},l(v){d&&d.l(v),e=S(v),_&&_.l(v),s=S(v),K(l.$$.fragment,v),a=S(v),n=N(v,"DIV",{class:!0});var L=V(n);i=N(L,"DIV",{class:!0});var q=V(i);r=B(q,"Welcome "),h=B(q,u),E=S(q),o=B(q,c),q.forEach(p),k=S(L),D=N(L,"DIV",{class:!0});var F=V(D);w.l(F),F.forEach(p),L.forEach(p),this.h()},h(){g(i,"class","link-user svelte-seixv5"),g(D,"class","links-container svelte-seixv5"),g(n,"class","main-container svelte-seixv5")},m(v,L){d&&d.m(v,L),C(v,e,L),_&&_.m(v,L),C(v,s,L),W(l,v,L),C(v,a,L),C(v,n,L),m(n,i),m(i,r),m(i,h),m(i,E),m(i,o),m(n,k),m(n,D),O[b].m(D,null),f=!0},p(v,[L]){v[2]?d?(d.p(v,L),L&4&&U(d,1)):(d=we(v),d.c(),U(d,1),d.m(e.parentNode,e)):d&&(x(),P(d,1,1,()=>{d=null}),J()),v[4]?_?(_.p(v,L),L&16&&U(_,1)):(_=Te(v),_.c(),U(_,1),_.m(s.parentNode,s)):_&&(x(),P(_,1,1,()=>{_=null}),J());let q=b;b=z(v),b===q?O[b].p(v,L):(x(),P(O[q],1,1,()=>{O[q]=null}),J(),w=O[b],w?w.p(v,L):(w=O[b]=T[b](v),w.c()),U(w,1),w.m(D,null))},i(v){f||(U(d),U(_),U(l.$$.fragment,v),U(w),f=!0)},o(v){P(d),P(_),P(l.$$.fragment,v),P(w),f=!1},d(v){d&&d.d(v),v&&p(e),_&&_.d(v),v&&p(s),X(l,v),v&&p(a),v&&p(n),O[b].d()}}}function rt(t,e,s){let{data:l}=e,{links:a,user:n}=l,i={},r=!1,u=!1,h=!1,E=!1,c=null,o=A=>s(2,r=A),k=(A,se)=>{s(8,c=se),s(4,h=A)},D=A=>s(3,u=A),b=A=>s(5,E=A);const w=A=>s(1,i=A),f=()=>o(!1);function d(A){o=A,s(6,o)}function _(A){a=A,s(0,a)}const T=()=>k(!1,c);function O(A){k=A,s(7,k)}function z(A){a=A,s(0,a)}function v(A){c=A,s(8,c)}function L(A){k=A,s(7,k)}const q=()=>o(!0),F=()=>o(!0);return t.$$set=A=>{"data"in A&&s(13,l=A.data)},[a,i,r,u,h,E,o,k,c,n,D,b,w,l,f,d,_,T,O,z,v,L,q,F]}class ct extends ee{constructor(e){super(),te(this,e,rt,at,le,{data:13})}}export{ct as default};