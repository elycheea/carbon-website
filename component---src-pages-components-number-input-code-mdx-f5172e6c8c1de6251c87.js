"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[39737],{28399:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(67294),o=n(88650),r=n.n(o),s=n(1597),l=n(64905),m=n(76902),c=n(75900),i=n.n(c);var u=e=>{let{title:t,theme:n,tabs:o=[]}=e;return a.createElement("div",{className:i()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":o.length,"PageHeader-module--dark-mode--WCeH8":"dark"===n})},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var d=e=>{let{relativePagePath:t,repository:n}=e;const{site:{siteMetadata:{repository:o}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:l,branch:m}=n||o,c=`${r}/edit/${m}${l}/src/pages${t}`;return r?a.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"cds--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},p=n(56328),b=n(51721);let g=function(e){function t(){return e.apply(this,arguments)||this}return(0,b.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:n}=this.props,o=n.split("/").filter(Boolean).slice(-1)[0],l=t.map((e=>{const t=r()(e,{lower:!0,strict:!0}),l=t===o,m=new RegExp(`${o}/?(#.*)?$`),c=n.replace(m,t);return a.createElement("li",{key:e,className:i()({"PageTabs-module--selected-item--aBB0K":l},"PageTabs-module--list-item--024o6")},a.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},a.createElement("nav",{"aria-label":e},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(a.Component);var h=g,y=n(17680),v=n(75387),f=n(50041);var x=e=>{let{date:t}=e;const n=new Date(t);return t?a.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(f.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var k=e=>{let{pageContext:t,children:n,location:o,Title:c}=e;const{frontmatter:i={},relativePagePath:b,titleType:g}=t,{tabs:f,title:k,theme:T,description:E,keywords:C,date:w}=i,{interiorTheme:N}=(0,v.Z)(),{site:{pathPrefix:P}}=(0,s.useStaticQuery)("2456312558"),M=P?o.pathname.replace(P,""):o.pathname,D=f?M.split("/").filter(Boolean).slice(-1)[0]||r()(f[0],{lower:!0}):"",R=T||N;return a.createElement(m.Z,{tabs:f,homepage:!1,theme:R,pageTitle:k,pageDescription:E,pageKeywords:C,titleType:g},a.createElement(u,{title:c?a.createElement(c,null):k,label:"label",tabs:f,theme:R}),f&&a.createElement(h,{title:k,slug:M,tabs:f,currentTab:D}),a.createElement(y.Z,{padded:!0},n,a.createElement(d,{relativePagePath:b}),a.createElement(x,{date:w})),a.createElement(p.Z,{pageContext:t,location:o,slug:M,tabs:f,currentTab:D}),a.createElement(l.Z,null))}},765:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return v}});var a=n(45987),o=(n(67294),n(64983)),r=n(28399);const s=["components"],l={},m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},c=m("PageDescription"),i=m("Row"),u=m("Column"),d=m("ResourceCard"),p=m("MdxIcon"),b=m("ComponentDemo"),g=m("ComponentVariant"),h={_frontmatter:l},y=r.Z;function v(e){let{components:t}=e,n=(0,a.Z)(e,s);return(0,o.kt)(y,Object.assign({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c,{mdxType:"PageDescription"},(0,o.kt)("p",null,"Preview the number input component with the React live demo. For detailed code\nusage documentation, see the Storybooks for each framework below.")),(0,o.kt)("h2",null,"Documentation"),(0,o.kt)(i,{className:"resource-card-group",mdxType:"Row"},(0,o.kt)(u,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(d,{subTitle:"React",href:"https://react.carbondesignsystem.com/?path=/story/components-numberinput--default",mdxType:"ResourceCard"},(0,o.kt)(p,{name:"react",mdxType:"MdxIcon"}))),(0,o.kt)(u,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(d,{subTitle:"Angular (Community)",href:"https://angular.carbondesignsystem.com/?path=/story/components-number--basic",mdxType:"ResourceCard"},(0,o.kt)(p,{name:"angular",mdxType:"MdxIcon"}))),(0,o.kt)(u,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(d,{subTitle:"Vue (Community)",href:"http://vue.carbondesignsystem.com/?path=/story/components-cvnumberinput--default",mdxType:"ResourceCard"},(0,o.kt)(p,{name:"vue",mdxType:"MdxIcon"}))),(0,o.kt)(u,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(d,{subTitle:"Web Components (Community)",href:"https://web-components.carbondesignsystem.com/?path=/story/components-number-input--default",mdxType:"ResourceCard"},(0,o.kt)(p,{name:"webcomponents",mdxType:"MdxIcon"})))),(0,o.kt)("h2",null,"Live demo"),(0,o.kt)(b,{components:[{id:"number-input",label:"Default"},{id:"mobile-number-input",label:"Mobile"}],mdxType:"ComponentDemo"},(0,o.kt)(g,{id:"number-input",links:{React:"https://react.carbondesignsystem.com/?path=/story/components-numberinput--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-number--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvnumberinput--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-number-input--default"},mdxType:"ComponentVariant"},'\n    <NumberInput\n      helperText="Optional helper text"\n      id="tj-input"\n      invalidText="Number is not valid"\n      label="Number input label"\n      max={100}\n      min={0}\n      step={10}\n      value={50}\n    />\n  '),(0,o.kt)(g,{id:"mobile-number-input",links:{React:"https://react.carbondesignsystem.com/?path=/story/components-numberinput--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-number--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvnumberinput--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-number-input--default"},mdxType:"ComponentVariant"},'\n        <NumberInput\n          isMobile\n          helperText="Optional helper text"\n          id="tj-input"\n          invalidText="Number is not valid"\n          label="Number input label"\n          max={100}\n          min={0}\n          step={10}\n          value={50}\n        />\n    ')))}v.isMDXComponent=!0}}]);