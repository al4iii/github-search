(this.webpackJsonpsummer=this.webpackJsonpsummer||[]).push([[0],{126:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),a=r(24),s=r.n(a),i=(r(99),r(142)),o=r(145),u=r(12),l=function(e){return e.usersPage.userProfile},j=function(e){return e.usersPage.repos},b=function(e){return e.usersPage.toggleIsFetching},d=function(e){return e.usersPage.userName},f=function(e){return e.usersPage.totalCount},p=function(e){return e.usersPage.pageSize},O=function(e){return e.usersPage.currentPage},h=function(e){return e.usersPage.isFound},g=r(147),_=r(20),x=r.n(_),m=r(4),v=function(e){var t=Object(u.c)(d);return Object(m.jsxs)("div",{className:x.a.repos,children:[Object(m.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/".concat(t,"/").concat(e.rep.name),children:Object(m.jsx)("h3",{className:x.a.name,children:e.rep.name})}),Object(m.jsx)("h4",{className:x.a.description,children:e.rep.description})]})},N=r(144),P=r(37),S=r.n(P),w=r(60),E=r(21),T=r(76),U=r.n(T).a.create({baseURL:"https://api.github.com/"}),C=function(e){return U.get("users/".concat(e)).then((function(e){return e})).catch((function(e){return e.response}))},F=function(e,t,r){return U.get("users/".concat(r,"/repos?page=").concat(e,"&per_page=").concat(t)).then((function(e){return e.data}))},y=function(e){return U.get("users/".concat(e)).then((function(e){return e.data.public_repos}))},I="users/SET_USERS",G="users/TOGGELE_IS_FETCHING",H="users/SET_REPOS",R="users/SET_IS_FOUND",k="users/SET_USER_NAME",L="users/SET_TOTAL_COUNT",z="users/SET_CURRENT_PAGE",D={userName:null,userProfile:null,repos:[],toggleIsFetching:!1,pageSize:4,totalCount:0,currentPage:1,isFound:null},A=function(e){return{type:H,repos:e}},B=function(e){return{type:G,isFetching:e}},J=function(e){return{type:z,currentPage:e}},M=function(e){return{type:R,isFound:e}},V=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:D.pageSize,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:D.userName;return function(){var n=Object(w.a)(S.a.mark((function n(c){var a;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c(B(!0)),c(J(e)),n.next=4,F(e,t,r);case 4:a=n.sent,c(A(a)),c(B(!1));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},Z=function(e){return function(){var t=Object(w.a)(S.a.mark((function t(r){var n;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(e);case 2:n=t.sent,r({type:L,totalCount:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(E.a)(Object(E.a)({},e),{},{userProfile:t.userProfile});case H:return Object(E.a)(Object(E.a)({},e),{},{repos:t.repos});case G:return Object(E.a)(Object(E.a)({},e),{},{toggleIsFetching:t.isFetching});case k:return Object(E.a)(Object(E.a)({},e),{},{userName:t.userName});case L:return Object(E.a)(Object(E.a)({},e),{},{totalCount:t.totalCount});case z:return Object(E.a)(Object(E.a)({},e),{},{currentPage:t.currentPage});case R:return Object(E.a)(Object(E.a)({},e),{},{isFound:t.isFound});default:return e}},W=r(146),X=r(148),q=function(){var e=Object(u.c)(f),t=Object(u.c)(p),r=Object(u.c)(O),n=Object(u.b)(),c=Object(u.c)(l),a=Object(u.c)(j),s=Object(u.c)(d);return Object(m.jsxs)("div",{className:x.a.userprofile,children:[Object(m.jsxs)("div",{className:x.a.profile,children:[Object(m.jsx)("div",{className:x.a.img,children:Object(m.jsx)("img",{src:c.avatar_url,alt:"avatar"})}),Object(m.jsx)("div",{className:x.a.name,children:Object(m.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/".concat(s),children:Object(m.jsxs)("h3",{children:[" ",c.name]})})}),Object(m.jsx)("div",{className:x.a.login,children:c.login}),Object(m.jsxs)("div",{className:x.a.followers,children:[Object(m.jsx)(W.a,{})," ",c.followers," followers ",Object(m.jsx)(g.a,{})," ",c.following," following"]})]}),Object(m.jsxs)("div",{className:x.a.img,children:[Object(m.jsx)("h2",{children:0===e?"":"Repositories(".concat(e,")")}),Object(m.jsx)("div",{className:x.a.rep,children:0===e?Object(m.jsxs)("div",{children:[Object(m.jsx)(X.a,{})," Repository list is emply"]}):a.map((function(e){return Object(m.jsx)(v,{rep:e},e.id)}))})]}),0===e?"":Object(m.jsx)(N.a,{className:x.a.paginator,current:r,showSizeChanger:!1,defaultPageSize:t,total:e,onChange:function(e,t){var r=c.login;n(V(e,t,r))},showTotal:function(e,t){return"".concat(t[0],"-").concat(t[1]," of ").concat(e," items")}})]})},Q=r(86),Y=r.n(Q),$=r.p+"static/media/loader.be48c027.svg",ee=function(){return Object(m.jsx)("div",{className:Y.a.loader,children:Object(m.jsx)("img",{src:$,alt:"loader"})})},te=function(){var e=Object(u.c)(h),t=Object(u.c)(d),r=Object(u.c)(b);return Object(m.jsx)("div",{children:r?Object(m.jsx)(ee,{}):e?Object(m.jsx)(q,{}):Object(m.jsxs)("div",{className:x.a.not_found,children:[Object(m.jsx)(g.a,{}),Object(m.jsxs)("p",{children:[' User "',t,'" not Found ']})]})})},re=r(61),ne=r.n(re),ce=r(92),ae=function(){var e=Object(u.c)(l);return Object(m.jsxs)("div",{className:ne.a.content,children:[null===e?Object(m.jsxs)("h2",{className:ne.a.h2,children:[Object(m.jsx)(ce.a,{}),Object(m.jsx)("p",{children:"Start with search a Github user"})]}):Object(m.jsx)(te,{}),Object(m.jsxs)("div",{className:ne.a.footer,children:["Creater by ",Object(m.jsx)("a",{href:"https://github.com/al4iii",children:"al4iii"})]})]})},se=r(36),ie=r.n(se),oe=r.p+"static/media/github.71d69e6b.png",ue=r(91),le=function(){var e=Object(u.b)(),t=Object(n.useState)(""),r=Object(ue.a)(t,2),c=r[0],a=r[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{className:ie.a.input,autoFocus:!0,value:c,onChange:function(e){return a(e.currentTarget.value)},placeholder:"Enter GitHub Username"}),Object(m.jsx)("button",{onClick:function(){e(function(e){return function(){var t=Object(w.a)(S.a.mark((function t(r){var n,c;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(B(!0)),r({type:k,userName:e}),t.next=4,C(e);case 4:200===(n=t.sent).status?(r(M(!0)),r((a=n.data,{type:I,userProfile:a})),r(V(c=D.currentPage,D.pageSize,e)),r(Z(e)),r(J(c))):404===n.status&&(r(M(!1)),r(B(!1)));case 6:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()}(c)),a("")},className:ie.a.button,children:"search"})]})},je=function(){return Object(m.jsxs)("div",{className:ie.a.header,children:[Object(m.jsx)("div",{className:ie.a.img,children:Object(m.jsx)("img",{src:oe,alt:"logo"})}),Object(m.jsx)("div",{className:ie.a.textarea,children:Object(m.jsx)(le,{})})]})},be=r(49),de=r(87),fe=Object(be.b)({usersPage:K}),pe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||be.c,Oe=Object(be.d)(fe,pe(Object(be.a)(de.a)));window.store=Oe;var he=Oe,ge=Object(i.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));function _e(){var e=ge();return Object(m.jsx)(u.a,{store:he,children:Object(m.jsx)("div",{className:e.root,children:Object(m.jsxs)(o.a,{container:!0,spacing:3,children:[Object(m.jsx)(o.a,{item:!0,xs:12,children:Object(m.jsx)(je,{className:e.paper})}),Object(m.jsx)(o.a,{item:!0,xs:12,children:Object(m.jsx)(ae,{className:e.paper})})]})})})}var xe=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,150)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;r(e),n(e),c(e),a(e),s(e)}))};s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(_e,{})}),document.getElementById("root")),xe()},20:function(e,t,r){e.exports={userprofile:"UserProfile_userprofile__c6qZ6",profile:"UserProfile_profile__3lGIp",img:"UserProfile_img__2gV3o",repos:"UserProfile_repos__36GBp",name:"UserProfile_name__g4VTy",login:"UserProfile_login__1NjKP",followers:"UserProfile_followers__39ZfH",description:"UserProfile_description__PTlDh",paginator:"UserProfile_paginator__3bs6x",not_found:"UserProfile_not_found__1oHJZ"}},36:function(e,t,r){e.exports={header:"Header_header__3b-Yf",img:"Header_img__3TN1p",input:"Header_input__2B7JQ",textarea:"Header_textarea__30PNb",button:"Header_button__-x7Ww"}},61:function(e,t,r){e.exports={h2:"Content_h2__bS2Kn",footer:"Content_footer__26pEL"}},86:function(e,t,r){e.exports={loader:"Preloader_loader__3u-UW"}},99:function(e,t,r){}},[[126,1,2]]]);
//# sourceMappingURL=main.3b64901f.chunk.js.map