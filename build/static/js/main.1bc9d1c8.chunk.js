(this.webpackJsonptotem=this.webpackJsonptotem||[]).push([[0],{109:function(e,a,t){e.exports=t(138)},114:function(e,a,t){},115:function(e,a,t){},138:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(9),l=t.n(c),i=(t(114),t(12)),o=(t(115),t(17)),m=t.n(o),u=t(205),s=t(186),p=t(190),d=t(63),f=t(139),E=t(86),g=t.n(E),b=t(39);var h=function(){var e=Object(n.useContext)(b.a);return r.a.createElement(s.a,{position:"fixed",color:"inherit"},r.a.createElement(p.a,null,r.a.createElement(f.a,{onClick:function(){e.setShowDrawer(!e.showDrawer)},edge:"start",color:"inherit","aria-label":"menu"},r.a.createElement(g.a,null)),r.a.createElement(d.a,{variant:"h6"},"Totem")))},O=t(87),v=t(11),j=t(23),y=t(140),w=t(211),C=t(206),k=t(199),x=t(197),S=t(41),D=t.n(S),P=t(31),N=t(192),B=t(193),F=t(196),T=t(195),I=t(194),W=t(198),z=t(92),H=t.n(z);var L=function(e){var a=e.animals,t=Object(P.f)(),n=Object(y.a)((function(e){return{card:{maxWidth:345,marginBottom:20,marginTop:20},media:{height:140},chip:{margin:e.spacing(.5),marginTop:e.spacing(1)},detailsButton:{marginLeft:"auto"},categoryChip:{position:"absolute",top:e.spacing(1),right:e.spacing(1)}}}))(),c=a.map((function(e){var a=e.tags.map((function(e){return r.a.createElement(w.a,{key:e.id,className:n.chip,onClick:function(a){a.preventDefault(),a.stopPropagation(),t.push("/tags/".concat(e.id))},label:e.name,color:"primary",size:"small",variant:"outlined",clickable:!0})}));return r.a.createElement(N.a,{className:n.card,key:e.id},r.a.createElement(B.a,{component:"a",href:"/app/animals/".concat(e.id)},r.a.createElement(I.a,{className:n.media,image:e.picture,title:e.name}),r.a.createElement(w.a,{label:e.category.name,color:"default",size:"small",className:n.categoryChip,onClick:function(a){a.preventDefault(),a.stopPropagation(),t.push("/category/".concat(e.category.id))},clickable:!0}),r.a.createElement(T.a,null,r.a.createElement(d.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.name),r.a.createElement(d.a,{variant:"body2",color:"textSecondary",component:"p"},e.short_description||""),a)),r.a.createElement(F.a,null,r.a.createElement(f.a,{"aria-label":"share"},r.a.createElement(H.a,null)),r.a.createElement(x.a,{size:"small",color:"primary",className:n.detailsButton,component:"a",href:"/app/animals/".concat(e.id)},"Dettagli")))}));return!!a.length&&r.a.createElement(W.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},c)},_=t(25);function A(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function R(){var e=this,a=Object(n.useContext)(_.a),t=Object(n.useState)([]),c=Object(i.a)(t,2),l=c[0],o=c[1],u=Object(n.useState)([]),s=Object(i.a)(u,2),p=s[0],E=s[1],g=Object(n.useState)([]),b=Object(i.a)(g,2),h=b[0],O=b[1],S=Object(n.useState)({}),P=Object(i.a)(S,2),N=P[0],B=P[1],F=Object(n.useState)(""),T=Object(i.a)(F,2),I=T[0],W=T[1],z=Object(n.useState)(""),H=Object(i.a)(z,2),R=H[0],J=H[1],K=Object(n.useState)(!0),X=Object(i.a)(K,2),Y=X[0],M=X[1];Object(n.useEffect)((function(){Object.keys(N).length&&m.a.get("/api/animals/",{params:N}).then((function(e){200===e.status&&O(e.data.results)}))}),[N]),Object(n.useEffect)((function(){var e=a.tags.map((function(e){return{id:e.id,name:e.name,selected:!1}}));o(e);var t=a.categories.map((function(e){return{id:e.id,name:e.name}}));E(t)}),[a.tags,a.categories]);var V=function(e){var a=Object(j.a)(l);a[e]=function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?A(t,!0).forEach((function(a){Object(v.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},a[e],{selected:!a[e].selected}),o(a)},$=Object(y.a)((function(e){return{tags:{marginBottom:e.spacing(2)},tagList:{maxHeight:e.spacing(24),overflowY:"auto",overflowX:"hidden"},chip:{margin:e.spacing(1)},container:{maxHeight:Y?"1200px":0,overflowY:"hidden",transition:"max-height .5s cubic-bezier(0, 1, 0.5, 1)"}}}))(),q=l.map((function(a,t){var n=a.selected?"primary":"default";return r.a.createElement(w.a,{key:a.id,label:a.name,color:n,onClick:V.bind(e,t),className:$.chip})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{variant:"h4",gutterBottom:!0,color:"textPrimary"},"Ricerca un animale"),r.a.createElement("form",{className:$.container,noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault();var a={},t=l.filter((function(e){return e.selected}));t.length&&(a.tags=t.reduce((function(e,a){return e.push(a.id),e}),[]).join(",")),""!==I&&(a.name=I),""!==R&&(a.category=R),B(a),M(!1)}},r.a.createElement(C.a,{id:"name-filter",label:"Nome",fullWidth:!0,margin:"normal",value:I,placeholder:"Digita una chiave di ricerca",onChange:function(e){W(e.target.value)}}),r.a.createElement(C.a,{id:"category-filter",select:!0,fullWidth:!0,label:"Categoria",margin:"normal",value:R,onChange:function(e){J(e.target.value)}},p.map((function(e){var a=R===e.id;return r.a.createElement(k.a,{key:e.id,value:e.id,selected:a},e.name)}))),r.a.createElement("div",{className:$.tags},r.a.createElement(d.a,{variant:"h5",gutterBottom:!0,color:"textPrimary"}," Tags"),r.a.createElement("div",{className:$.tagList},q)),r.a.createElement(x.a,{type:"submit",color:"primary",variant:"contained",fullWidth:!0},"Cerca")),!Y&&r.a.createElement(f.a,{"aria-label":"search",onClick:function(){M(!0)}},r.a.createElement(D.a,null)),r.a.createElement(L,{animals:h}))}function J(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){m.a.get("/api/animals/").then((function(e){200===e.status&&c(e.data.results)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Tutti gli animali"),r.a.createElement(L,{animals:t}))}var K=t(93),X=t(204),Y=t(33),M=t(200);function V(){var e=Object(P.f)(),a=Object(y.a)((function(e){return{fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2),zIndex:10}}}))();return r.a.createElement(M.a,{color:"secondary",onClick:function(){e.push("/")},className:a.fab,"aria-label":"Cerca"},r.a.createElement(D.a,null))}function $(){var e=Object(P.g)().id,a=Object(n.useState)([]),t=Object(i.a)(a,2),c=t[0],l=t[1],o=Object(n.useContext)(_.a).categories.find((function(a){return a.id===parseInt(e)}));return Object(n.useEffect)((function(){m.a.get("/api/animals/?category=".concat(e)).then((function(e){200===e.status&&l(e.data.results)}))}),[e]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,o&&o.name),r.a.createElement(L,{animals:c}))}function q(){var e=Object(P.g)().id,a=Object(n.useState)([]),t=Object(i.a)(a,2),c=t[0],l=t[1],o=Object(n.useContext)(_.a).tags.find((function(a){return a.id===parseInt(e)}));return Object(n.useEffect)((function(){m.a.get("/api/animals/?tags=".concat(e)).then((function(e){200===e.status&&l(e.data.results)}))}),[e]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,o&&o.name),r.a.createElement(L,{animals:c}))}var G=t(201),Q=t(209),U=t(202),Z=t(203),ee=t(62),ae=t.n(ee);var te=function(){var e=Object(P.g)().id,a=Object(n.useState)(!1),t=Object(i.a)(a,2),c=t[0],l=t[1];Object(n.useEffect)((function(){m.a.get("/api/animals/".concat(e)).then((function(e){200===e.status&&l(e.data)}))}),[e]);var o=Object(y.a)((function(e){return{card:{maxWidth:500,marginBottom:20,marginTop:20,marginLeft:"auto",marginRight:"auto"},shortDescription:{marginBottom:20}}}))();return c?r.a.createElement(N.a,{className:o.card},r.a.createElement(I.a,{component:"img",alt:c.name,height:"140",image:c.picture,title:c.name}),r.a.createElement(T.a,null,r.a.createElement(d.a,{gutterBottom:!0,variant:"h5",component:"h2"},c.name),r.a.createElement(d.a,{className:o.shortDescription},c.short_description),r.a.createElement(Q.a,null,r.a.createElement(U.a,{expandIcon:r.a.createElement(ae.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(d.a,null,"Descrizione fisica")),r.a.createElement(Z.a,null,r.a.createElement(d.a,null,c.physical_description))),r.a.createElement(Q.a,null,r.a.createElement(U.a,{expandIcon:r.a.createElement(ae.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(d.a,null,"Comportamento")),r.a.createElement(Z.a,null,r.a.createElement(d.a,null,c.behavior_description))),r.a.createElement(Q.a,null,r.a.createElement(U.a,{expandIcon:r.a.createElement(ae.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(d.a,null,"Habitat")),r.a.createElement(Z.a,null,r.a.createElement(d.a,null,c.habitat_description))))):r.a.createElement(G.a,null)},ne=t(207);m.a.defaults.xsrfHeaderName="X-CSRFTOKEN",m.a.defaults.xsrfCookieName="csrftoken";var re=Object(K.a)({palette:{type:"dark",primary:{main:"#EFAC78"},secondary:{main:"#FAE09B"},background:{paper:"#513E52",default:"#433244"},text:{primary:"#FBF8DC",secondary:"#F6D2A3"}}});var ce=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)([]),o=Object(i.a)(l,2),s=o[0],p=o[1],d=Object(n.useState)([]),f=Object(i.a)(d,2),E=f[0],g=f[1];return Object(n.useEffect)((function(){m.a.get("/api/categories/").then((function(e){200===e.status&&p(e.data.results)})),m.a.get("/api/tags/").then((function(e){200===e.status&&g(e.data.results)}))}),[]),r.a.createElement(X.a,{theme:re},r.a.createElement(_.a.Provider,{value:{categories:s,tags:E}},r.a.createElement(ne.a,{bgcolor:"background.default",style:{minHeight:"100vh"},py:8},r.a.createElement(Y.a,{basename:"/app"},r.a.createElement(b.a.Provider,{value:{showDrawer:t,setShowDrawer:c}},r.a.createElement(h,null),r.a.createElement(O.a,null),r.a.createElement(V,null)),r.a.createElement(u.a,{maxWidth:"md"},r.a.createElement(P.c,null,r.a.createElement(P.a,{path:"/animals",exact:!0},r.a.createElement(J,null)),r.a.createElement(P.a,{path:"/animals/:id"},r.a.createElement(te,null)),r.a.createElement(P.a,{path:"/category/:id"},r.a.createElement($,null)),r.a.createElement(P.a,{path:"/tags/:id"},r.a.createElement(q,null)),r.a.createElement(P.a,{path:"/"},r.a.createElement(R,null))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},25:function(e,a,t){"use strict";var n=t(0),r=Object(n.createContext)();a.a=r},39:function(e,a,t){"use strict";var n=t(0),r=Object(n.createContext)();a.a=r},87:function(e,a,t){"use strict";(function(e){var n=t(0),r=t.n(n),c=t(140),l=t(143),i=t(70),o=t(96),m=t(69),u=t(64),s=t(65),p=t(141),d=t(88),f=t.n(d),E=t(41),g=t.n(E),b=t(89),h=t.n(b),O=t(90),v=t.n(O),j=t(39),y=t(25);a.a=function(){var a=Object(n.useContext)(j.a),t=Object(n.useContext)(y.a),d=e.browser&&/iPad|iPhone|iPod/.test(navigator.userAgent),E=Object(c.a)({list:{width:250},fullList:{width:"auto"}})(),b=function(e){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&a.setShowDrawer(e)}};function O(e){return r.a.createElement(m.a,Object.assign({button:!0,component:"a"},e))}var w=r.a.createElement("div",{className:E.list,role:"presentation",onClick:b(!1),onKeyDown:b(!1)},r.a.createElement(i.a,null,r.a.createElement(O,{href:"/"},r.a.createElement(u.a,null,r.a.createElement(g.a,null)),r.a.createElement(s.a,{primary:"Cerca"})),r.a.createElement(O,{href:"/app/animals"},r.a.createElement(u.a,null,r.a.createElement(f.a,null)),r.a.createElement(s.a,{primary:"Mostra tutti"}))),r.a.createElement(o.a,null),r.a.createElement(i.a,{subheader:r.a.createElement(p.a,{component:"div",id:"nested-list-subheader"},"Per Categorie")},t.categories.map((function(e){return r.a.createElement(O,{href:"/app/category/".concat(e.id),key:e.id},r.a.createElement(u.a,null,r.a.createElement(h.a,null)),r.a.createElement(s.a,{primary:e.name}))}))),r.a.createElement(o.a,null),r.a.createElement(i.a,null,r.a.createElement(m.a,{button:!0},r.a.createElement(u.a,null,r.a.createElement(v.a,null)),r.a.createElement(s.a,{primary:"Credits"}))));return r.a.createElement("div",null,r.a.createElement(l.a,{open:a.showDrawer,onClose:b(!1),onOpen:b(!0),disableBackdropTransition:!d,disableDiscovery:d},w))}}).call(this,t(80))}},[[109,1,2]]]);
//# sourceMappingURL=main.1bc9d1c8.chunk.js.map