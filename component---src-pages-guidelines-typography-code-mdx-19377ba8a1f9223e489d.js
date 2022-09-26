"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[95593],{28399:function(e,t,n){n.d(t,{Z:function(){return C}});var a=n(67294),l=n(88650),r=n.n(l),i=n(1597),o=n(64905),s=n(81151),p=n(75900),d=n.n(p);var c=e=>{let{title:t,theme:n,tabs:l=[]}=e;return a.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":l.length,"PageHeader-module--dark-mode--WCeH8":"dark"===n})},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var m=e=>{let{relativePagePath:t,repository:n}=e;const{site:{siteMetadata:{repository:l}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:o,branch:s}=n||l,p=`${r}/edit/${s}${o}/src/pages${t}`;return r?a.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"cds--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:p},"Edit this page on GitHub"))):null},u=n(56328),k=n(51721);let y=function(e){function t(){return e.apply(this,arguments)||this}return(0,k.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:n}=this.props,l=n.split("/").filter(Boolean).slice(-1)[0],o=t.map((e=>{const t=r()(e,{lower:!0,strict:!0}),o=t===l,s=new RegExp(`${l}/?(#.*)?$`),p=n.replace(s,t);return a.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":o},"PageTabs-module--list-item--024o6")},a.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:`${p}`},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},a.createElement("nav",{"aria-label":e},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},o))))))},t}(a.Component);var g=y,h=n(17680),N=n(75387),f=n(50041);var b=e=>{let{date:t}=e;const n=new Date(t);return t?a.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(f.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var C=e=>{let{pageContext:t,children:n,location:l,Title:p}=e;const{frontmatter:d={},relativePagePath:k,titleType:y}=t,{tabs:f,title:C,theme:w,description:v,keywords:T,date:x}=d,{interiorTheme:E}=(0,N.Z)(),{site:{pathPrefix:S}}=(0,i.useStaticQuery)("2456312558"),P=S?l.pathname.replace(S,""):l.pathname,I=f?P.split("/").filter(Boolean).slice(-1)[0]||r()(f[0],{lower:!0}):"",L=w||E;return a.createElement(s.Z,{tabs:f,homepage:!1,theme:L,pageTitle:C,pageDescription:v,pageKeywords:T,titleType:y},a.createElement(c,{title:p?a.createElement(p,null):C,label:"label",tabs:f,theme:L}),f&&a.createElement(g,{title:C,slug:P,tabs:f,currentTab:I}),a.createElement(h.Z,{padded:!0},n,a.createElement(m,{relativePagePath:k}),a.createElement(b,{date:x})),a.createElement(u.Z,{pageContext:t,location:l,slug:P,tabs:f,currentTab:I}),a.createElement(o.Z,null))}},1261:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return o},default:function(){return f}});var a=n(45987),l=(n(67294),n(64983)),r=n(28399);const i=["components"],o={},s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)},p=s("PageDescription"),d=s("InlineNotification"),c=s("AnchorLinks"),m=s("AnchorLink"),u=s("Row"),k=s("Column"),y=s("ResourceCard"),g=s("MdxIcon"),h={_frontmatter:o},N=r.Z;function f(e){let{components:t}=e,n=(0,a.Z)(e,i);return(0,l.kt)(N,Object.assign({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(p,{mdxType:"PageDescription"},(0,l.kt)("p",null,"Type is a core part of any offering and critical to how brands express and\ncommunicate throughout any experience. Use the Carbon type package to leverage\nIBM Plex and create effective typography across your products more easily.")),(0,l.kt)(d,{mdxType:"InlineNotification"},(0,l.kt)("p",null,"If you’re using ",(0,l.kt)("inlineCode",{parentName:"p"},"@carbon/react"),", you probably don’t need need to install the\ntype package separately. See our ",(0,l.kt)("a",{parentName:"p",href:"/developing/frameworks/react/"},"Carbon React"),"\nguide to start building.")),(0,l.kt)(c,{mdxType:"AnchorLinks"},(0,l.kt)(m,{mdxType:"AnchorLink"},"Get started"),(0,l.kt)(m,{mdxType:"AnchorLink"},"Usage"),(0,l.kt)(m,{mdxType:"AnchorLink"},"Resources")),(0,l.kt)("h2",null,"Get started"),(0,l.kt)("p",null,"To install ",(0,l.kt)("inlineCode",{parentName:"p"},"@carbon/type")," in your project, you will need to run the following\ncommand using ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -S @carbon/type\n")),(0,l.kt)("p",null,"If you prefer ",(0,l.kt)("a",{parentName:"p",href:"https://yarnpkg.com/en/"},"Yarn"),", use the following command\ninstead:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @carbon/type\n")),(0,l.kt)("h2",null,"Usage"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"@carbon/type")," package enables you to use typography from the IBM Design\nLanguage, including the type scale and fonts, along with typography design\ntokens from the Carbon Design System. It also comes with opinionated defaults\nfor type styles on common elements like ",(0,l.kt)("inlineCode",{parentName:"p"},"h1"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"h2"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"p"),", etc."),(0,l.kt)("p",null,"You can use this package by writing the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss"},"@use '@carbon/type';\n// Include type reset\n@include type.reset();\n\n// Include default type styles, targets h1, h2, h3, etc\n@include type.default-type();\n\n// Include utility classes for type-related properties\n@include type.type-classes();\n\n.selector {\n  // Include a type style\n  @include type.style('productive-heading-01');\n}\n")),(0,l.kt)("h3",null,"Type classes"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"type-classes")," mixin will output a collection of utility CSS that you can\nuse to style a given HTML element with type-related styles."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss"},"@mixin type-classes;\n")),(0,l.kt)("p",null,"In particular, you can use the following classes:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Class"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},".cds--type-{font-family}")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set the ",(0,l.kt)("inlineCode",{parentName:"td"},"font-family")," property for the given font. This can include ",(0,l.kt)("inlineCode",{parentName:"td"},"mono"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"sans"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"sans-condensed"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"sans-arabic"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"sans-devanagari"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"sans-hebrew"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"sans-jp"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"sans-kr"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"sans-thai-looped"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"sans-thai"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"serif"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},".cds--type-{font-weight}")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set the ",(0,l.kt)("inlineCode",{parentName:"td"},"font-weight")," property")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},".cds--type-italic")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set the ",(0,l.kt)("inlineCode",{parentName:"td"},"font-style")," property to ",(0,l.kt)("inlineCode",{parentName:"td"},"italic"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},".cds--type-{token}")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Style the HTML element with the given type token")))),(0,l.kt)("h3",null,"Type styles"),(0,l.kt)("p",null,"Instead of using a type scale, ",(0,l.kt)("inlineCode",{parentName:"p"},"@carbon/type")," provides tokens that represent\nwhat we call type styles. These tokens have a variety of properties for styling\nhow text is rendered on a page."),(0,l.kt)("p",null,"You can find a full reference of the type styles that are available on the\n",(0,l.kt)("a",{parentName:"p",href:"https://carbondesignsystem.com/guidelines/typography/type-sets"},"Carbon Design System website"),"\n."),(0,l.kt)("p",null,"You can include a token in your Sass file by writing:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss"},"@use '@carbon/type';\n\n@include type.type-style('productive-heading-01');\n")),(0,l.kt)("h3",null,"Type classes"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"type-classes")," mixin will output a collection of utility CSS that you can\nuse to style a given HTML element with type-related styles."),(0,l.kt)("p",null,"In particular, you can use the following classes:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Class"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},".cds--type-{font-family}")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set the ",(0,l.kt)("inlineCode",{parentName:"td"},"font-family")," property for the given font. This can include ",(0,l.kt)("inlineCode",{parentName:"td"},"mono"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"sans"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"sans-condensed"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"sans-arabic"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"sans-devanagari"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"sans-hebrew"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"sans-jp"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"sans-kr"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"sans-thai-looped"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"sans-thai"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"serif"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},".cds--type-{font-weight}")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set the ",(0,l.kt)("inlineCode",{parentName:"td"},"font-weight")," property")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},".cds--type-italic")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set the ",(0,l.kt)("inlineCode",{parentName:"td"},"font-style")," property to ",(0,l.kt)("inlineCode",{parentName:"td"},"italic"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},".cds--type-{token}")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Style the HTML element with the given type token")))),(0,l.kt)("h3",null,"Reset"),(0,l.kt)("p",null,"An optional type reset is provided under the ",(0,l.kt)("inlineCode",{parentName:"p"},"type.reset()")," mixin. You can\ninclude this mixin by writing the following in your Sass file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss"},"@use '@carbon/type';\n\n@include type.reset();\n")),(0,l.kt)("p",null,"This reset sets some top-level properties on ",(0,l.kt)("inlineCode",{parentName:"p"},"html")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"body"),", namely\n",(0,l.kt)("inlineCode",{parentName:"p"},"font-size"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"font-family"),", and some ",(0,l.kt)("inlineCode",{parentName:"p"},"text-rendering")," options. We also map the\n",(0,l.kt)("inlineCode",{parentName:"p"},"strong")," tag to the semibold font weight."),(0,l.kt)("h3",null,"Type scale"),(0,l.kt)("p",null,"A type scale is provided through the ",(0,l.kt)("inlineCode",{parentName:"p"},"$type-scale")," variable and corresponding\n",(0,l.kt)("inlineCode",{parentName:"p"},"type-scale")," function and mixin. However, for specifying type styles, the\nrecommendation is to use ",(0,l.kt)("a",{parentName:"p",href:"#type-styles"},"type styles")," ."),(0,l.kt)("p",null,"If you are looking to use the type scale, you can include all the scale-related\nutilities and variables by writing the following in your Sass file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss"},"@use '@carbon/type';\n")),(0,l.kt)("p",null,"You can access a specific step in the type scale by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"type-scale"),"\nfunction:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scss"},"@use '@carbon/type';\n\n.my-selector {\n  font-size: type.type-scale(1);\n}\n")),(0,l.kt)("h2",null,"Resources"),(0,l.kt)(u,{className:"resource-card-group",mdxType:"Row"},(0,l.kt)(k,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,l.kt)(y,{subTitle:"Carbon type package",href:"https://github.com/carbon-design-system/carbon/blob/v10/packages/type",mdxType:"ResourceCard"},(0,l.kt)(g,{name:"bee",mdxType:"MdxIcon"}))),(0,l.kt)(k,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,l.kt)(y,{subTitle:"Type package demo",href:"https://carbon-elements.netlify.app/type/examples/preview/",mdxType:"ResourceCard"},(0,l.kt)(g,{name:"bee",mdxType:"MdxIcon"})))))}f.isMDXComponent=!0}}]);