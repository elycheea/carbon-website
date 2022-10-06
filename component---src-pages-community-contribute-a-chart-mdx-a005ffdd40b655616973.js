"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[60284],{28399:function(e,t,a){a.d(t,{Z:function(){return E}});var n=a(67294),r=a(88650),o=a.n(r),l=a(1597),i=a(64905),s=a(76902),m=a(75900),c=a.n(m);var d=e=>{let{title:t,theme:a,tabs:r=[]}=e;return n.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":r.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var p=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:r}}}=(0,l.useStaticQuery)("1364590287"),{baseUrl:o,subDirectory:i,branch:s}=a||r,m=`${o}/edit/${s}${i}/src/pages${t}`;return o?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},u=a(56328),h=a(51721);let g=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,r=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((e=>{const t=o()(e,{lower:!0,strict:!0}),i=t===r,s=new RegExp(`${r}/?(#.*)?$`),m=a.replace(s,t);return n.createElement("li",{key:e,className:c()({"PageTabs-module--selected-item--aBB0K":i},"PageTabs-module--list-item--024o6")},n.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:`${m}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},i))))))},t}(n.Component);var f=g,b=a(17680),k=a(75387),N=a(50041);var y=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(N.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(N.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var E=e=>{let{pageContext:t,children:a,location:r,Title:m}=e;const{frontmatter:c={},relativePagePath:h,titleType:g}=t,{tabs:N,title:E,theme:w,description:v,keywords:C,date:P}=c,{interiorTheme:x}=(0,k.Z)(),{site:{pathPrefix:T}}=(0,l.useStaticQuery)("2456312558"),D=T?r.pathname.replace(T,""):r.pathname,H=N?D.split("/").filter(Boolean).slice(-1)[0]||o()(N[0],{lower:!0}):"",G=w||x;return n.createElement(s.Z,{tabs:N,homepage:!1,theme:G,pageTitle:E,pageDescription:v,pageKeywords:C,titleType:g},n.createElement(d,{title:m?n.createElement(m,null):E,label:"label",tabs:N,theme:G}),N&&n.createElement(f,{title:E,slug:D,tabs:N,currentTab:H}),n.createElement(b.Z,{padded:!0},a,n.createElement(p,{relativePagePath:h}),n.createElement(y,{date:P})),n.createElement(u.Z,{pageContext:t,location:r,slug:D,tabs:N,currentTab:H}),n.createElement(i.Z,null))}},38410:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return p}});var n=a(45987),r=(a(67294),a(64983)),o=a(28399);const l=["components"],i={},s=(m="PageDescription",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const c={_frontmatter:i},d=o.Z;function p(e){let{components:t}=e,a=(0,n.Z)(e,l);return(0,r.kt)(d,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(s,{mdxType:"PageDescription"},(0,r.kt)("p",null,"Anyone can add assets to the community chart index. Maintainers can submit a\nshort pull request in GitHub to add a chart to the index.")),(0,r.kt)("h2",null,"Add a chart using the GitHub UI"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-website/tree/main/src/data/chart-index"},"index folder"),"\nof the carbon-website GitHub repo, open your team folder. Create a folder if\nyour team doesn’t have one yet.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Add file")," (top right), then ",(0,r.kt)("inlineCode",{parentName:"p"},"Create new file"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Name your file ",(0,r.kt)("inlineCode",{parentName:"p"},"chart-name.yml"),", where ",(0,r.kt)("em",{parentName:"p"},"chart-name")," is the name of your\nchart.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy and paste the following template into the ",(0,r.kt)("inlineCode",{parentName:"p"},"Edit new file")," section of the\npage and fill out the correct information for your component."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'name: chart name\nwebsite_url: >-\n  url of documentation / guidance page (if any)\ncode_url: >-\n  url of component code on GitHub (if any)\nmaintainer: name of maintainer team\ndescription: >-\n  short description of purpose and usage of chart\nchart_type: choose one of Comparisons | Trends | Part-to-whole | Correlations | Connections | Geospatial | Other\ncomplexity: choose one of Basic | Advanced\nplatform: Web\naliases:\n  - fuzzy term for component (e.g. an alias for a "alluvial" chart might be "flow")\ndate_added: YYY-MM-DDT00:00:00.000Z\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once done, click the green ",(0,r.kt)("inlineCode",{parentName:"p"},"Commit new file")," button at the bottom."))),(0,r.kt)("p",null,"After submitting the PR for the data, you should upload a thumbnail image."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go back to your team folder in the\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/carbon-design-system/carbon-website/tree/main/src/data/chart-index"},"index"),"."),(0,r.kt)("li",{parentName:"ol"},"Inside your team folder, open the ",(0,r.kt)("inlineCode",{parentName:"li"},"images")," folder."),(0,r.kt)("li",{parentName:"ol"},"In the top right, click ",(0,r.kt)("inlineCode",{parentName:"li"},"Add file")," then ",(0,r.kt)("inlineCode",{parentName:"li"},"Upload files")," to upload your image\nto that page then submit the PR. Note: name your image file with the same\nname as the chart (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"chart-name.png")," to match ",(0,r.kt)("inlineCode",{parentName:"li"},"component-name.yml"),"). Your\nimage should be 320px x 240px.")),(0,r.kt)("p",null,"And you’re done! The Carbon team will review and merge the PR."),(0,r.kt)("p",null,"If you’re unsure about how to make a PR through GitHub, create an issue in the\nrepo instead and we’ll help you out. Be sure to include all the necessary\ncomponent information and images."))}p.isMDXComponent=!0}}]);