"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[71060],{28399:function(e,t,n){n.d(t,{Z:function(){return x}});var o=n(67294),a=n(88650),i=n.n(a),s=n(1597),c=n(64905),r=n(76902),l=n(75900),m=n.n(l);var d=e=>{let{title:t,theme:n,tabs:a=[]}=e;return o.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":a.length,"PageHeader-module--dark-mode--WCeH8":"dark"===n})},o.createElement("div",{className:"cds--grid"},o.createElement("div",{className:"cds--row"},o.createElement("div",{className:"cds--col-lg-12"},o.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var p=e=>{let{relativePagePath:t,repository:n}=e;const{site:{siteMetadata:{repository:a}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:i,subDirectory:c,branch:r}=n||a,l=`${i}/edit/${r}${c}/src/pages${t}`;return i?o.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},o.createElement("div",{className:"cds--col"},o.createElement("a",{className:"EditLink-module--link--IDrl1",href:l},"Edit this page on GitHub"))):null},u=n(56328),g=n(51721);let h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:n}=this.props,a=n.split("/").filter(Boolean).slice(-1)[0],c=t.map((e=>{const t=i()(e,{lower:!0,strict:!0}),c=t===a,r=new RegExp(`${a}/?(#.*)?$`),l=n.replace(r,t);return o.createElement("li",{key:e,className:m()({"PageTabs-module--selected-item--aBB0K":c},"PageTabs-module--list-item--024o6")},o.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:`${l}`},e))}));return o.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},o.createElement("div",{className:"cds--grid"},o.createElement("div",{className:"cds--row"},o.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},o.createElement("nav",{"aria-label":e},o.createElement("ul",{className:"PageTabs-module--list--xLqxG"},c))))))},t}(o.Component);var b=h,y=n(17680),f=n(75387),k=n(50041);var v=e=>{let{date:t}=e;const n=new Date(t);return t?o.createElement(k.X2,{className:"last-modified-date-module--row--XJoYQ"},o.createElement(k.sg,null,o.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var x=e=>{let{pageContext:t,children:n,location:a,Title:l}=e;const{frontmatter:m={},relativePagePath:g,titleType:h}=t,{tabs:k,title:x,theme:E,description:T,keywords:C,date:w}=m,{interiorTheme:N}=(0,f.Z)(),{site:{pathPrefix:P}}=(0,s.useStaticQuery)("2456312558"),D=P?a.pathname.replace(P,""):a.pathname,M=k?D.split("/").filter(Boolean).slice(-1)[0]||i()(k[0],{lower:!0}):"",R=E||N;return o.createElement(r.Z,{tabs:k,homepage:!1,theme:R,pageTitle:x,pageDescription:T,pageKeywords:C,titleType:h},o.createElement(d,{title:l?o.createElement(l,null):x,label:"label",tabs:k,theme:R}),k&&o.createElement(b,{title:x,slug:D,tabs:k,currentTab:M}),o.createElement(y.Z,{padded:!0},n,o.createElement(p,{relativePagePath:g}),o.createElement(v,{date:w})),o.createElement(u.Z,{pageContext:t,location:a,slug:D,tabs:k,currentTab:M}),o.createElement(c.Z,null))}},52823:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return c},default:function(){return f}});var o=n(45987),a=(n(67294),n(64983)),i=n(28399);const s=["components"],c={},r=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},l=r("PageDescription"),m=r("Row"),d=r("Column"),p=r("ResourceCard"),u=r("MdxIcon"),g=r("ComponentDemo"),h=r("ComponentVariant"),b={_frontmatter:c},y=i.Z;function f(e){let{components:t}=e,n=(0,o.Z)(e,s);return(0,a.kt)(y,Object.assign({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l,{mdxType:"PageDescription"},(0,a.kt)("p",null,"Preview the notification component with the React live demo. For detailed code\nusage documentation, see the Storybooks for each framework below.")),(0,a.kt)("h2",null,"Documentation"),(0,a.kt)(m,{className:"resource-card-group",mdxType:"Row"},(0,a.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(p,{subTitle:"React",href:"https://react.carbondesignsystem.com/?path=/story/components-notifications--toast",mdxType:"ResourceCard"},(0,a.kt)(u,{name:"react",mdxType:"MdxIcon"}))),(0,a.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(p,{subTitle:"Angular (Community)",href:"https://angular.carbondesignsystem.com/?path=/story/components-notification--toast",mdxType:"ResourceCard"},(0,a.kt)(u,{name:"angular",mdxType:"MdxIcon"}))),(0,a.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(p,{subTitle:"Vue (Community)",href:"http://vue.carbondesignsystem.com/?path=/story/components-cvtoastnotification--default",mdxType:"ResourceCard"},(0,a.kt)(u,{name:"vue",mdxType:"MdxIcon"}))),(0,a.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(p,{subTitle:"Web Components (Community)",href:"https://web-components.carbondesignsystem.com/?path=/story/components-notifications--inline",mdxType:"ResourceCard"},(0,a.kt)(u,{name:"webcomponents",mdxType:"MdxIcon"})))),(0,a.kt)("h2",null,"Live demo"),(0,a.kt)(g,{components:[{id:"toast",label:"Toast notification"},{id:"inline",label:"Inline notification"}],mdxType:"ComponentDemo"},(0,a.kt)(h,{id:"toast",knobs:{ToastNotification:["hideCloseButton","kind","lowContrast"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-notifications--toast",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-notification--toast",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvtoastnotification--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-notifications--toast"},mdxType:"ComponentVariant"},'\n    <div>\n      <ToastNotification\n        caption="00:00:00 AM"\n        iconDescription="describes the close button"\n        subtitle={<span>Subtitle text goes here. <a href="#example">Example link</a></span>}\n        timeout={0}\n        title="Notification title"\n      />\n    </div>\n'),(0,a.kt)(h,{id:"inline",knobs:{InlineNotification:["hideCloseButton","lowContrast"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-notifications--inline",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-notification--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvinlinenotification--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-notifications--inline"},mdxType:"ComponentVariant"},'\n  <div>\n    <InlineNotification\n      kind="info"\n      actions={<NotificationActionButton>Action</NotificationActionButton>}\n      iconDescription="describes the close button"\n      subtitle={<span>Subtitle text goes here. <a href="#example">Example link</a></span>}\n      title="Notification title"\n    />\n  </div>\n')))}f.isMDXComponent=!0}}]);