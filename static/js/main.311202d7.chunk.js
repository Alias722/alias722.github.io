(this["webpackJsonpsivir.pw"]=this["webpackJsonpsivir.pw"]||[]).push([[0],{24:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(18),i=c.n(r),a=(c(24),c(9)),j=c(2),l=c(4),o=c(0);function h(e){return Object(o.jsx)("section",{id:"banner",children:Object(o.jsxs)("div",{className:"inner",children:[Object(o.jsx)("div",{className:"logo",children:Object(o.jsx)("span",{className:"icon fa-gem"})}),Object(o.jsx)("h2",{children:e.title}),Object(o.jsx)("p",{children:e.context.split("\n").map((function(e){return Object(o.jsxs)(o.Fragment,{children:[e,Object(o.jsx)("br",{})]})}))})]})})}function d(e){return Object(o.jsx)("section",{className:"wrapper spotlight style1",children:Object(o.jsxs)("div",{className:"inner",children:[Object(o.jsx)("a",{href:e.link,className:"image",children:Object(o.jsx)("img",{src:e.picture,alt:""})}),Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("h2",{className:"major",children:e.title}),Object(o.jsx)("p",{children:e.context.split("\n").map((function(e){return Object(o.jsxs)(o.Fragment,{children:[e,Object(o.jsx)("br",{})]})}))}),Object(o.jsx)("a",{href:e.link,className:"special",rel:"noreferrer noopener",target:"_blank",children:"Learn more"})]})]})})}function b(e){return Object(o.jsx)("section",{className:"wrapper alt spotlight style2",children:Object(o.jsxs)("div",{className:"inner",children:[Object(o.jsx)("a",{href:e.link,className:"image",children:Object(o.jsx)("img",{src:e.picture,alt:""})}),Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("h2",{className:"major",children:e.title}),Object(o.jsx)("p",{children:e.context.split("\n").map((function(e){return Object(o.jsxs)(o.Fragment,{children:[e,Object(o.jsx)("br",{})]})}))}),Object(o.jsx)("a",{href:e.link,className:"special",rel:"noreferrer noopener",target:"_blank",children:"Learn more"})]})]})})}var u=c(7),x=c.n(u),O=c(10);function p(e){var t=Object(n.useState)([]),c=Object(l.a)(t,2),s=c[0],r=c[1],i=new j.f;function a(){return(a=Object(O.a)(x.a.mark((function t(){var c,n,i;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c="https://raw.sivir.pw/"+e.request+"/outline.json",t.next=3,fetch(c,{method:"GET",headers:{Accept:"application/json"}});case 3:return n=t.sent,t.next=6,n.json();case 6:i=t.sent,console.log(s),r(i);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){a.apply(this,arguments)}()}),[]),Object(o.jsxs)("select",{onChange:function(t){if(void 0!==t){var c="/".concat(e.request,"/").concat(t.target[t.target.options.selectedIndex].value);i.push(c)}},children:[Object(o.jsx)("option",{value:"selected",children:"Choose a Lesson"}),s.map((function(e){return Object(o.jsx)("option",{value:e.link,children:e.title})}))]})}function m(e){return void 0===e.link?Object(o.jsxs)("article",{children:[Object(o.jsx)("div",{className:"image",children:Object(o.jsx)("img",{src:e.picture,alt:""})}),Object(o.jsx)("h3",{className:"major",children:e.title}),Object(o.jsx)("p",{children:e.context}),Object(o.jsx)(p,{request:e.request})]}):Object(o.jsxs)("article",{children:[Object(o.jsx)("a",{href:e.link,className:"image",children:Object(o.jsx)("img",{src:e.picture,alt:""})}),Object(o.jsx)("h3",{className:"major",children:e.title}),Object(o.jsx)("p",{children:e.context}),Object(o.jsx)("a",{href:e.link,rel:"noreferrer noopener",Z:!0,className:"special",children:"Learn more"})]})}function f(){var e=Object(n.useState)("nothing"),t=Object(l.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){r(c)}),[c]),Object(o.jsxs)(s.a.Fragment,{children:[Object(o.jsx)(h,{title:"I am Milliax",context:"oh I don' t know what to say \n below are some of my projects"}),Object(o.jsxs)("section",{id:"wrapper",children:[Object(o.jsx)(d,{link:"/project",title:"projects",context:"these are my projects",picture:"images/pic01.jpg"}),Object(o.jsx)(b,{link:"/tutorial",title:"tutorials",context:"During my self-studying time.\nI realized that if someone writes a tutorial in advance, then we can learn things more efficient and correct.",picture:"images/pic02.jpg"}),Object(o.jsx)("section",{className:"wrapper alt style1",children:Object(o.jsxs)("div",{className:"inner",children:[Object(o.jsx)("h2",{className:"major",children:"collection"}),Object(o.jsx)("p",{children:"descriptions"}),Object(o.jsx)("section",{className:"features",children:Object(o.jsx)(m,{picture:"images/pic05.jpg",title:"\u96fb\u52d5\u7a97\u7c3e",context:"\u5229\u7528Raspberry Pi\u3001Google Home\u3001IFTTT\u4e32\u63a5\u7684\u81ea\u52d5\u7a97\u7c3e",link:"https://sivir.pw"})}),Object(o.jsx)("ul",{className:"actions",children:Object(o.jsx)("li",{children:Object(o.jsx)(a.b,{to:"/posts",className:"button",children:"Browse All"})})})]})})]})]})}function g(){return Object(o.jsx)("h1",{children:"The page you request is not found"})}function v(){return Object(o.jsx)("h1",{children:"List Projects"})}function w(e){return Object(o.jsxs)("h1",{children:["Projects: ",e.match.params.id]})}function N(e){var t=Object(n.useState)([]),c=Object(l.a)(t,2),r=c[0],i=c[1],a=function(){var e=Object(O.a)(x.a.mark((function e(){var t,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://raw.sivir.pw/tutorial/list.json",e.next=3,fetch("https://raw.sivir.pw/tutorial/list.json",{method:"GET",headers:{Accept:"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,console.log(c),i(c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){a()}),[]),Object(o.jsxs)(s.a.Fragment,{children:[Object(o.jsxs)("header",{id:"header",children:[Object(o.jsx)("h1",{children:Object(o.jsx)("a",{href:"/",children:"Home Page"})}),Object(o.jsx)("nav",{children:Object(o.jsx)("a",{href:"#menu",children:"Menu"})})]}),Object(o.jsxs)("section",{id:"wrapper",children:[Object(o.jsx)("header",{children:Object(o.jsxs)("div",{className:"inner",children:[Object(o.jsx)("h2",{children:"Tutorials"}),Object(o.jsx)("p",{children:"During my self-studying time. I realized that if someone writes a tutorial in advance, then we can learn things more efficient and correct."})]})}),Object(o.jsx)("div",{className:"wrapper",children:Object(o.jsx)("div",{className:"inner",children:Object(o.jsx)("section",{className:"features",children:r.map((function(e){return Object(o.jsx)(m,{picture:"images/pic04.jpg",title:e.title,context:e.context,request:"tutorial/".concat(e.link)})}))})})})]})]})}function k(e){var t=Object(n.useState)("title"),c=Object(l.a)(t,2),s=c[0],r=c[1],i=Object(n.useState)("subtitle"),a=Object(l.a)(i,2),j=a[0],h=a[1],d=Object(n.useState)("section"),b=Object(l.a)(d,2),u=b[0],p=b[1],m=Object(n.useState)("body"),f=Object(l.a)(m,2),g=f[0],v=f[1];function w(){return(w=Object(O.a)(x.a.mark((function t(){var c,n,s;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c="".concat("https://raw.sivir.pw/","tutorial/").concat(e.match.params.course,"/").concat(e.match.params.lesson,".json"),t.next=3,fetch(c,{method:"GET",headers:{Accept:"application/json"}});case 3:return n=t.sent,t.next=6,n.json();case 6:s=t.sent,r(s.title),v(s.detail),h(s.context),p("Begin");case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){w.apply(this,arguments)}()}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("header",{id:"header",children:[Object(o.jsx)("h1",{children:Object(o.jsx)("a",{href:"/",children:"Tutorials"})}),Object(o.jsx)("nav",{children:Object(o.jsx)("a",{href:"#menu",children:"Menu"})})]}),Object(o.jsxs)("section",{id:"wrapper",children:[Object(o.jsx)("header",{children:Object(o.jsxs)("div",{className:"inner",children:[Object(o.jsx)("h2",{children:s}),Object(o.jsx)("p",{children:j})]})}),Object(o.jsx)("div",{className:"wrapper",children:Object(o.jsx)("div",{className:"inner",children:Object(o.jsxs)("section",{children:[Object(o.jsx)("h3",{className:"major",children:u}),Object(o.jsx)("p",{children:g})]})})})]})]})}function y(e){return Object(o.jsxs)("h1",{children:["Posts: ",e.match.params.id]})}function F(e){var t=Object(n.useState)(""),c=Object(l.a)(t,2),s=c[0],r=c[1],i=Object(n.useState)(""),a=Object(l.a)(i,2),j=a[0],h=a[1],d=Object(n.useState)(""),b=Object(l.a)(d,2),u=b[0],p=b[1],m=function(){var e=Object(O.a)(x.a.mark((function e(){var t,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="&entry.1105467687=".concat(s,"&entry.2133051960=").concat(j,"&entry.788216262=").concat(u,"&submit=SUBMIT"),"https://docs.google.com/forms/d/e/1FAIpQLSdY8rCNTc06qRgXKI2-CHwpBWG1pgUj4un6u8hCnKVZaeZ66g/formResponse",c=encodeURI("".concat("https://docs.google.com/forms/d/e/1FAIpQLSdY8rCNTc06qRgXKI2-CHwpBWG1pgUj4un6u8hCnKVZaeZ66g/formResponse","?").concat(t)),e.next=6,fetch(c,{method:"POST",mode:"no-cors"});case 6:window.alert("Message sent successful"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),window.alert("Message sent FAILED: ".concat(e.t0));case 12:p(""),r(""),h("");case 15:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(o.jsx)("section",{id:"footer",children:Object(o.jsxs)("div",{className:"inner",children:[Object(o.jsx)("h2",{className:"major",children:e.title}),Object(o.jsx)("p",{children:e.context}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m()},children:[Object(o.jsxs)("div",{className:"fields",children:[Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{htmlFor:"name",children:"Name"}),Object(o.jsx)("input",{type:"text",value:s,onChange:function(e){r(e.target.value)}})]}),Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{htmlFor:"email",children:"Email"}),Object(o.jsx)("input",{type:"email",value:j,onChange:function(e){h(e.target.value)}})]}),Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{htmlFor:"message",children:"Message"}),Object(o.jsx)("textarea",{rows:"4",value:u,onChange:function(e){p(e.target.value)}})]})]}),Object(o.jsx)("ul",{className:"actions",children:Object(o.jsx)("li",{children:Object(o.jsx)("input",{type:"submit",value:"Send Message"})})})]}),Object(o.jsxs)("ul",{className:"contact",children:[Object(o.jsxs)("li",{className:"icon solid fa-home",children:["Untitled Inc",Object(o.jsx)("br",{}),"1234 Somewhere in Taiwan"]}),Object(o.jsx)("li",{className:"icon solid fa-envelope",children:Object(o.jsx)("a",{href:"mailto:wei@sivir.pw",children:"wei@sivir.pw"})}),Object(o.jsx)("li",{className:"icon brands fa-twitter",children:Object(o.jsx)("a",{href:"https://twitter.com/milliacs",rel:"noreferrer noopener",target:"_blank",children:"twitter.com/milliacs"})}),Object(o.jsx)("li",{className:"icon brands fa-instagram",children:Object(o.jsx)("a",{href:"https://www.instagram.com/hungw.c/",rel:"noreferrer noopener",target:"_blank",children:"instagram.com/unknown"})})]}),Object(o.jsxs)("ul",{className:"copyright",children:[Object(o.jsx)("li",{children:"\xa9 Untitled Inc. All rights reserved."}),Object(o.jsxs)("li",{children:["Design: ",Object(o.jsx)("a",{href:"http://html5up.net",rel:"noreferrer noopener",target:"_blank",children:"HTML5 UP"})]}),Object(o.jsx)("li",{children:"Construct: Milliax"})]})]})})}function S(){return Object(o.jsxs)(s.a.Fragment,{children:[Object(o.jsxs)("header",{id:"header",className:"alt",children:[Object(o.jsx)("h1",{children:Object(o.jsx)("a",{href:"/",children:"Home Page"})}),Object(o.jsx)("nav",{children:Object(o.jsx)("a",{href:"#menu",onClick:function(){window.scrollTo(0,document.body.scrollHeight)},children:"Menu"})})]}),Object(o.jsx)("nav",{id:"menu",children:Object(o.jsxs)("div",{className:"inner",children:[Object(o.jsx)("h2",{children:"Menu"}),Object(o.jsxs)("ul",{className:"links",children:[Object(o.jsx)("li",{children:Object(o.jsx)(a.b,{to:"/",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(a.b,{to:"/project",children:"projects"})}),Object(o.jsx)("li",{children:Object(o.jsx)(a.b,{to:"/tutorial",children:"tutorials"})}),Object(o.jsx)("li",{children:Object(o.jsx)(a.b,{to:"/post",children:"posts"})})]})]})})]})}var T=function(){return Object(o.jsxs)(s.a.Fragment,{children:[Object(o.jsxs)(a.a,{basename:"/",forceRefresh:!0,children:[Object(o.jsx)(S,{}),Object(o.jsx)("div",{id:"page-wrapper",children:Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{exact:!0,path:"/",component:f}),Object(o.jsx)(j.a,{exact:!0,path:"/post/:id",component:y}),Object(o.jsx)(j.a,{exact:!0,path:"/tutorial",component:N}),Object(o.jsx)(j.a,{exact:!0,path:"/tutorial/:course/:lesson",component:k}),Object(o.jsx)(j.a,{exact:!0,path:"/project",component:v}),Object(o.jsx)(j.a,{exact:!0,path:"/project/:id",component:w}),Object(o.jsx)(j.a,{path:"/:param",component:g})]})})]}),Object(o.jsx)(F,{title:"\u95dc\u65bc\u6211",context:"\u4ee5\u4e0b\u662f\u6211\u7684\u806f\u7d61\u65b9\u5f0f"})]})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,33)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),r(e),i(e)}))};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(T,{})}),document.getElementById("root")),I()}},[[32,1,2]]]);
//# sourceMappingURL=main.311202d7.chunk.js.map