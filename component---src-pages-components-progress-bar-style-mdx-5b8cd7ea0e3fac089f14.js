"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[35484],{28399:function(e,t,a){a.d(t,{Z:function(){return h}});var r=a(67294),n=a(88650),l=a.n(n),s=a(1597),i=a(64905),o=a(76902),p=a(75900),d=a.n(p);var g=e=>{let{title:t,theme:a,tabs:n=[]}=e;return r.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":n.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},r.createElement("div",{className:"cds--grid"},r.createElement("div",{className:"cds--row"},r.createElement("div",{className:"cds--col-lg-12"},r.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var m=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:n}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:i,branch:o}=a||n,p=`${l}/edit/${o}${i}/src/pages${t}`;return l?r.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},r.createElement("div",{className:"cds--col"},r.createElement("a",{className:"EditLink-module--link--IDrl1",href:p},"Edit this page on GitHub"))):null},c=a(56328),b=a(51721);let u=function(e){function t(){return e.apply(this,arguments)||this}return(0,b.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((e=>{const t=l()(e,{lower:!0,strict:!0}),i=t===n,o=new RegExp(`${n}/?(#.*)?$`),p=a.replace(o,t);return r.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":i},"PageTabs-module--list-item--024o6")},r.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:`${p}`},e))}));return r.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},r.createElement("div",{className:"cds--grid"},r.createElement("div",{className:"cds--row"},r.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},r.createElement("nav",{"aria-label":e},r.createElement("ul",{className:"PageTabs-module--list--xLqxG"},i))))))},t}(r.Component);var A=u,k=a(17680),N=a(75387),y=a(50041);var f=e=>{let{date:t}=e;const a=new Date(t);return t?r.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},r.createElement(y.sg,null,r.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var h=e=>{let{pageContext:t,children:a,location:n,Title:p}=e;const{frontmatter:d={},relativePagePath:b,titleType:u}=t,{tabs:y,title:h,theme:w,description:x,keywords:v,date:E}=d,{interiorTheme:C}=(0,N.Z)(),{site:{pathPrefix:T}}=(0,s.useStaticQuery)("2456312558"),S=T?n.pathname.replace(T,""):n.pathname,B=y?S.split("/").filter(Boolean).slice(-1)[0]||l()(y[0],{lower:!0}):"",z=w||C;return r.createElement(o.Z,{tabs:y,homepage:!1,theme:z,pageTitle:h,pageDescription:x,pageKeywords:v,titleType:u},r.createElement(g,{title:p?r.createElement(p,null):h,label:"label",tabs:y,theme:z}),y&&r.createElement(A,{title:h,slug:S,tabs:y,currentTab:B}),r.createElement(k.Z,{padded:!0},a,r.createElement(m,{relativePagePath:b}),r.createElement(f,{date:E})),r.createElement(c.Z,{pageContext:t,location:n,slug:S,tabs:y,currentTab:B}),r.createElement(i.Z,null))}},65902:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return b}});var r=a(45987),n=(a(67294),a(64983)),l=a(28399);const s=["components"],i={},o=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},p=o("Row"),d=o("Column"),g=o("Caption"),m={_frontmatter:i},c=l.Z;function b(e){let{components:t}=e,a=(0,r.Z)(e,s);return(0,n.kt)(c,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",null,"Color"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Element"),(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Label"),(0,n.kt)("td",{parentName:"tr",align:null},"text color"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"$text-primary"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Helper text"),(0,n.kt)("td",{parentName:"tr",align:null},"text color"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"$text-helper"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Track"),(0,n.kt)("td",{parentName:"tr",align:null},"background"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"$border-subtle"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Bar: active"),(0,n.kt)("td",{parentName:"tr",align:null},"background"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"$border-interactive"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Bar: success"),(0,n.kt)("td",{parentName:"tr",align:null},"background"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"$support-success"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Icon: success"),(0,n.kt)("td",{parentName:"tr",align:null},"fill"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"$support-success"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Bar: error"),(0,n.kt)("td",{parentName:"tr",align:null},"background"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"$support-error"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Icon: error"),(0,n.kt)("td",{parentName:"tr",align:null},"fill"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"$support-error"))))),(0,n.kt)(p,{mdxType:"Row"},(0,n.kt)(d,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsSAAALEgHS3X78AAAA30lEQVQoz5WR3W6DMAxGef8nnNqNlIEKI00IlIKI/yZYiQAJ2h35Ihc+sv0lEhHmuWQFT4yPRcuyMZJ9grzHKGvbnhMTp9YDMdMfwTS1/byqOL8UTtfD/T48vlyatT9P2Tb+UvRp2TVtB+BxIsiua1J7zWyeVXn5MKZ3ZWd7GOa1GYVBCIhwuefTZxZixrE2qfzv5m1gHK6cT6V9eM3R5NXv7KW9gVhQBBf3MQAjvpKnCa3W+nSuYkU3A6XGyg0fJ8iL0HAk482ASrz69ioBrdHVWDkBeGvt94le5HQY2C8bq/+aKMpcCQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Progress bar status colors",title:"Progress bar status colors",src:"/static/e8449a76149b6b1c14c008194a28c149/3cbba/progress-bar-style-1.png",srcSet:["/static/e8449a76149b6b1c14c008194a28c149/7fc1e/progress-bar-style-1.png 288w","/static/e8449a76149b6b1c14c008194a28c149/a5df1/progress-bar-style-1.png 576w","/static/e8449a76149b6b1c14c008194a28c149/3cbba/progress-bar-style-1.png 1152w","/static/e8449a76149b6b1c14c008194a28c149/92c65/progress-bar-style-1.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(g,{mdxType:"Caption"},"Status colors"))),(0,n.kt)(p,{mdxType:"Row"},(0,n.kt)(d,{colLg:12,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAABvUlEQVQoz13Sa5OaMBQGYP//X3K1MyDB8YKthAgiYxe8b0suJEAgITtotTv7TCbfzkly8g4AAKPRePg2sizbsuwXy7Icx7Ftezh8G49/WPbEtidfOY4zAAB4nhfAn0mMdttN+BRF0Wq1cl135S38X160gUEAIez3IAh8359Op4OpC2hRHXN1oR0WprvTWhtj0jTbbNDhxuMD/32pcsqF4A+Msfl8PnBdgHN+vKj3U3u9yYaXTVk3TWOMybIsgDA7MBTjcIevp7/k4w/BmDJGCOmLAQCMYF0Vpil1U0lRyaqWUnZdt9/vwzDsZKVrblSt6lre+yql6rpeLBb9tbPThxczLxHJkTNGCaUYY855HMe7XXwmBh1VcjNlrbVWreq1bbtcLvuT85wwLnNa0aJ8EEI0TZMkSRRFShtealHp5lGnlNZaStmf7LogJ0V2q865xlz3Pdv28eY0TREK0jPZpuT9IjBhL5TSfwNjvL4yc8QGi858nXaWIYTOudweRHIqMS140fs/bQAAhH4coThCUYg2T2EYep43m802CIbID5EPoQ+f1ut1/88AgHue7G8Js23bcSb3kE1e61vCPgFF/EM8DU1oDgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Progress bar status colors",title:"Progress bar status colors",src:"/static/c7b7549feb3b155d008bd636411447d5/3cbba/progress-bar-style-2.png",srcSet:["/static/c7b7549feb3b155d008bd636411447d5/7fc1e/progress-bar-style-2.png 288w","/static/c7b7549feb3b155d008bd636411447d5/a5df1/progress-bar-style-2.png 576w","/static/c7b7549feb3b155d008bd636411447d5/3cbba/progress-bar-style-2.png 1152w","/static/c7b7549feb3b155d008bd636411447d5/0b124/progress-bar-style-2.png 1728w","/static/c7b7549feb3b155d008bd636411447d5/0c3f5/progress-bar-style-2.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(g,{mdxType:"Caption"},"Progress bar colors for light themes"))),(0,n.kt)(p,{mdxType:"Row"},(0,n.kt)(d,{colLg:12,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAACGklEQVQoz6XSTW/SABzHce4mGGSgdSlPRUroWqCFyjOF0kkZUVwVBYkmajTxovGVzAMHLoQYDUbYxG1UgZGYDRbYwNM8E8JjwgsgHKSG+hL2uf/yPfz/EuESJIIg1GrV3cLX6k/+qFY5EtXrdZ7ne71ev9///OnjbuHLj/IBz5d5UblcrtVq8/lcslz+ZTZZPUJCCKmDzTpIp4MgGIalUunOzodCoXDl6vV1HXYN0MuVN+RrcoVCIZPJVCrVYDBYjaPRGGLxEc4wQVJ2nMAtVovVCgBAOp3+trcnV2oNG+5bJgdsQGC9HtJBIAgajcbhcChZLoX7sXs4hpA4hltQQhzjOA6CYCaTKZVKyjUZDGm0qpsatUqr0arVagAAEAQZj8er8qPkUwfNue8k/EyMYUIMw0QiERzHs9ns/v53lcFqdkZNNga3O2x2G0mSBEE4HI7RaCQRhGUikbzt9PoDm36KDohomsYwLJfLHR4erIMa1EwgqHUDxVAUxTDMZDKRJPm/vHz77j2XePEg8fLh42cJUSqVYlm2WCxWKxXSSQXDnCewFaQZmqZDoRBFUSzLTqfTVfnV6zdMNBnlnt/dfsJx2xzHxePxYDCYz+d5njcgNtK3ZXOHXR6fx+Pxer0ulysQCEwmk9Wd/1xcdM5avztn3c55R9Ttdlut1mQymc1mx8e/Tpsnp82TZrPRFDUajXa7vVgsJJf5sH99VWDno6rdAAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Progress bar status colors",title:"Progress bar status colors",src:"/static/1714979f868b18e3b0d35cf678f92939/3cbba/progress-bar-style-3.png",srcSet:["/static/1714979f868b18e3b0d35cf678f92939/7fc1e/progress-bar-style-3.png 288w","/static/1714979f868b18e3b0d35cf678f92939/a5df1/progress-bar-style-3.png 576w","/static/1714979f868b18e3b0d35cf678f92939/3cbba/progress-bar-style-3.png 1152w","/static/1714979f868b18e3b0d35cf678f92939/0b124/progress-bar-style-3.png 1728w","/static/1714979f868b18e3b0d35cf678f92939/0c3f5/progress-bar-style-3.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(g,{mdxType:"Caption"},"Progress bar colors for dark themes"))),(0,n.kt)("h2",null,"Typography"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Element"),(0,n.kt)("th",{parentName:"tr",align:null},"Font-size (px/rem)"),(0,n.kt)("th",{parentName:"tr",align:null},"Font-weight"),(0,n.kt)("th",{parentName:"tr",align:null},"Type token"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Label"),(0,n.kt)("td",{parentName:"tr",align:null},"14px / 0.875rem"),(0,n.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"$label-01"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Helper text"),(0,n.kt)("td",{parentName:"tr",align:null},"12px / 0.75rem"),(0,n.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"$helper-text-01"))))),(0,n.kt)("h2",null,"Structure"),(0,n.kt)("p",null,"Depending on the use case, progress bar can have three ways for text alignment:\ndefault, inline, and indented. The width of a progress bar can be customized\nappropriately for its context. The minimum width of a progress bar is 48px and\nkeep its width to a maximum of six columns when possible."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Element"),(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"px / rem"),(0,n.kt)("th",{parentName:"tr",align:null},"Spacing token"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Label (top aligned)"),(0,n.kt)("td",{parentName:"tr",align:null},"padding-bottom"),(0,n.kt)("td",{parentName:"tr",align:null},"8 / 0.5"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"$spacing-03"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Helper text"),(0,n.kt)("td",{parentName:"tr",align:null},"padding-top"),(0,n.kt)("td",{parentName:"tr",align:null},"8 / 0.5"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"$spacing-03"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Label (left aligned)"),(0,n.kt)("td",{parentName:"tr",align:null},"padding-right"),(0,n.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"$spacing-05"))))),(0,n.kt)("div",{className:"image--fixed"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"119.44444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAIAAAB1KUohAAAACXBIWXMAAAsSAAALEgHS3X78AAABvUlEQVQ4y7WUbW/TMBDH9/2/Da8QQky84FU1jQHjSaVjCWo7QZrEZ/vOT3eHkrG1ZaFDRVgn66Tc32f//I9P9B/GyX0md+MY8ZGdb3tdr+3FonlfdfO1rzv54Qrm5FPCNMxDkjOnrMwT4tkHePK6efpu8/wTvJjT+dJ9A1MZUxuoelP1pu5NdKSZp7YtWTVrCmqdIqpFMSQGpUf1UVkG2T6RHWCqrEMNs5Yx5CFDeQzYWMC/Fx6mHWP03sdAa2Mv1+HGiEgpvA2OWXKZFiMiACD63tHnL1RXGFtDLYQWwmaYswuSyl/cc0mas4QscYwxOWgSGViyCIuW8dBTLP4g9imGHI902KymV4t0VpWzmmeVLJoMifoQTKQ+UE9kAmW/d+xt51VDVyv4uuyv6271nTYbb40D46xxzqKj4DCUXHZ9sgtsvNtSFINSVIyDsW4j5NE98ohJ+M4f8oDWIWChpMTlyMdg3sD8plm2sOqgi+yKkDAy385Dwiz7O9/SfnsVn53D6Rt7egEvL8PH2hsDbQddD20PLdjO2AQ4TfvXIqWoJ0VSh2JJgARQKA1fDwAbjDUW8NQ/Jf/lDTta/BNAE4SEhfXk5wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for the progress bar.",title:"Structure and spacing measurements for the progress bar.",src:"/static/b17cc5db399f05e8272340c66af32ed3/3cbba/progress-bar-style-4.png",srcSet:["/static/b17cc5db399f05e8272340c66af32ed3/7fc1e/progress-bar-style-4.png 288w","/static/b17cc5db399f05e8272340c66af32ed3/a5df1/progress-bar-style-4.png 576w","/static/b17cc5db399f05e8272340c66af32ed3/3cbba/progress-bar-style-4.png 1152w","/static/b17cc5db399f05e8272340c66af32ed3/392b1/progress-bar-style-4.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,n.kt)(g,{mdxType:"Caption"},"Structure and spacing measurements the progress bar | px / rem"),(0,n.kt)("div",{className:"image--fixed"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"43.40277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAAAsSAAALEgHS3X78AAAAgUlEQVQoz2P4TwFgoILmf0jo779/WNDfv//+/P3/9x8Om+G6sYK//3+/+/L3928Uzf/+gZQ/e/Nu+40zBx5e3Hf/wpk3d8+8vYeB7h+8f+7X1+/IpkM1v/3w5ezje7c+vbz/7d3dL28w0e0vr599+/jv52+IemzOpiS0/xFC1IwqAB+LEGOkeL/9AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for the progress bar with an icon.",title:"Structure and spacing measurements for the progress bar with an icon.",src:"/static/7f09c93237080de2f2d1e3a505bda8bd/3cbba/progress-bar-style-5.png",srcSet:["/static/7f09c93237080de2f2d1e3a505bda8bd/7fc1e/progress-bar-style-5.png 288w","/static/7f09c93237080de2f2d1e3a505bda8bd/a5df1/progress-bar-style-5.png 576w","/static/7f09c93237080de2f2d1e3a505bda8bd/3cbba/progress-bar-style-5.png 1152w","/static/7f09c93237080de2f2d1e3a505bda8bd/392b1/progress-bar-style-5.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,n.kt)(g,{mdxType:"Caption"},"Structure and spacing measurements the progress bar with an icon | px / rem"),(0,n.kt)("h2",null,"Sizes"),(0,n.kt)("p",null,"There are two sizes for the progress bar height, big and small."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Size"),(0,n.kt)("th",{parentName:"tr",align:null},"Height px / rem"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Big"),(0,n.kt)("td",{parentName:"tr",align:null},"8 / 0.5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Small"),(0,n.kt)("td",{parentName:"tr",align:null},"4 / 0.25")))),(0,n.kt)("div",{className:"image--fixed"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.19444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsSAAALEgHS3X78AAAAk0lEQVQoz72SQQ+CMAyF+f//z4N4ITI0RKYDmcL22mcMJxcOZhK/9NgvbfNa8AeKbWTVj/pafrcjc3KI2FX+cOZS+xPtAMSQgClQNJUhWh6HsvbG0ljWHXsvQEyQEFfk5eTMtSFaNa51uI60d3YDH5OqSsocFEhlETVt31y883Set5HPecXVEAnZOmdNcv7rh2XILwiWA3LpNueCAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Progress bar sizes",title:"Progress bar sizes",src:"/static/9d46cf6e2cd7854d487588860ce010d4/3cbba/progress-bar-style-6.png",srcSet:["/static/9d46cf6e2cd7854d487588860ce010d4/7fc1e/progress-bar-style-6.png 288w","/static/9d46cf6e2cd7854d487588860ce010d4/a5df1/progress-bar-style-6.png 576w","/static/9d46cf6e2cd7854d487588860ce010d4/3cbba/progress-bar-style-6.png 1152w","/static/9d46cf6e2cd7854d487588860ce010d4/392b1/progress-bar-style-6.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")))}b.isMDXComponent=!0}}]);