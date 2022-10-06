"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[68387],{28399:function(e,a,t){t.d(a,{Z:function(){return w}});var l=t(67294),i=t(88650),o=t.n(i),r=t(1597),n=t(64905),s=t(76902),c=t(75900),g=t.n(c);var p=e=>{let{title:a,theme:t,tabs:i=[]}=e;return l.createElement("div",{className:g()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":i.length,"PageHeader-module--dark-mode--WCeH8":"dark"===t})},l.createElement("div",{className:"cds--grid"},l.createElement("div",{className:"cds--row"},l.createElement("div",{className:"cds--col-lg-12"},l.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))};var d=e=>{let{relativePagePath:a,repository:t}=e;const{site:{siteMetadata:{repository:i}}}=(0,r.useStaticQuery)("1364590287"),{baseUrl:o,subDirectory:n,branch:s}=t||i,c=`${o}/edit/${s}${n}/src/pages${a}`;return o?l.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},l.createElement("div",{className:"cds--col"},l.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},m=t(56328),A=t(51721);let b=function(e){function a(){return e.apply(this,arguments)||this}return(0,A.Z)(a,e),a.prototype.render=function(){const{title:e,tabs:a,slug:t}=this.props,i=t.split("/").filter(Boolean).slice(-1)[0],n=a.map((e=>{const a=o()(e,{lower:!0,strict:!0}),n=a===i,s=new RegExp(`${i}/?(#.*)?$`),c=t.replace(s,a);return l.createElement("li",{key:e,className:g()({"PageTabs-module--selected-item--aBB0K":n},"PageTabs-module--list-item--024o6")},l.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return l.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},l.createElement("div",{className:"cds--grid"},l.createElement("div",{className:"cds--row"},l.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},l.createElement("nav",{"aria-label":e},l.createElement("ul",{className:"PageTabs-module--list--xLqxG"},n))))))},a}(l.Component);var u=b,h=t(17680),f=t(75387),y=t(50041);var k=e=>{let{date:a}=e;const t=new Date(a);return a?l.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},l.createElement(y.sg,null,l.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:a,children:t,location:i,Title:c}=e;const{frontmatter:g={},relativePagePath:A,titleType:b}=a,{tabs:y,title:w,theme:x,description:N,keywords:v,date:S}=g,{interiorTheme:E}=(0,f.Z)(),{site:{pathPrefix:B}}=(0,r.useStaticQuery)("2456312558"),T=B?i.pathname.replace(B,""):i.pathname,U=y?T.split("/").filter(Boolean).slice(-1)[0]||o()(y[0],{lower:!0}):"",I=x||E;return l.createElement(s.Z,{tabs:y,homepage:!1,theme:I,pageTitle:w,pageDescription:N,pageKeywords:v,titleType:b},l.createElement(p,{title:c?l.createElement(c,null):w,label:"label",tabs:y,theme:I}),y&&l.createElement(u,{title:w,slug:T,tabs:y,currentTab:U}),l.createElement(h.Z,{padded:!0},t,l.createElement(d,{relativePagePath:A}),l.createElement(k,{date:S})),l.createElement(m.Z,{pageContext:a,location:i,slug:T,tabs:y,currentTab:U}),l.createElement(n.Z,null))}},90686:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return n},default:function(){return k}});var l=t(45987),i=(t(67294),t(64983)),o=t(28399);const r=["components"],n={},s=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",a)},c=s("PageDescription"),g=s("InlineNotification"),p=s("AnchorLinks"),d=s("AnchorLink"),m=s("ColorPalette"),A=s("Row"),b=s("Column"),u=s("ImageGallery"),h=s("ImageGalleryImage"),f={_frontmatter:n},y=o.Z;function k(e){let{components:a}=e,t=(0,l.Z)(e,r);return(0,i.kt)(y,Object.assign({},f,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)(c,{mdxType:"PageDescription"},(0,i.kt)("p",null,"The color palette for data visualizations is a select subset of the IBM Design\nLanguage color palette. It is designed to maximize accessibility and harmony\nwithin a page.")),(0,i.kt)(g,{mdxType:"InlineNotification"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," This guidance is a work in progress. To see our roadmap, make feature\nrequests, or contribute, please go to carbon-charts\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-charts"},"GitHub repository"),".")),(0,i.kt)(p,{mdxType:"AnchorLinks"},(0,i.kt)(d,{mdxType:"AnchorLink"},"Categorical palettes"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Sequential palettes"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Alert palette"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Gradient use"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Color in action")),(0,i.kt)("h2",null,"Categorical palettes"),(0,i.kt)("p",null,"Categorical (or qualitative) palettes are best when you want to distinguish\ndiscrete categories of data that do not have an inherent correlation."),(0,i.kt)("p",null,"The colors of this palette should be applied in sequence strictly as described\nbelow. The sequence is carefully curated to maximize contrast between\nneighboring colors to help with visual differentiation."),(0,i.kt)(m,{type:"categorical",mdxType:"ColorPalette"}),(0,i.kt)("p",null,"You can override the categorical sequence with one of the following palettes if\nthe exact number of data categories is predictable."),(0,i.kt)(m,{type:"grouped",mdxType:"ColorPalette"}),(0,i.kt)("h2",null,"Sequential palettes"),(0,i.kt)("h3",null,"Monochromatic"),(0,i.kt)("p",null,"The monochromatic palettes are good for relationship charts and trend charts. In\nlight themes, the darkest color denotes the largest values. In dark themes, the\nlightest color denotes the largest values."),(0,i.kt)(m,{type:"sequential",isMono:!0,mdxType:"ColorPalette"}),(0,i.kt)("h3",null,"Diverging palettes"),(0,i.kt)("p",null,"Please note that diverging palettes do not differentiate between light and dark\nthemes."),(0,i.kt)("h4",null,"Palette 1"),(0,i.kt)("p",null,"The red-cyan palette has a natural association with temperature. Use this\npalette for data representing hot-vs-cold."),(0,i.kt)("h4",null,"Palette 2"),(0,i.kt)("p",null,"The purple-teal palette is good for data with no temperature associations, such\nas performance, sales, and rates of change."),(0,i.kt)(m,{type:"sequential",isDiverging:!0,mdxType:"ColorPalette"}),(0,i.kt)("h2",null,"Alert palette"),(0,i.kt)("p",null,"Alert colors are used to reflect status. Typically, red represents danger or\nerror; orange represents a serious warning; yellow represents a regular warning,\nand green represents normal or success."),(0,i.kt)(m,{twoColumn:!0,type:"alert",mdxType:"ColorPalette"}),(0,i.kt)("h2",null,"Gradient use"),(0,i.kt)(g,{mdxType:"InlineNotification"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Gradients are not yet supported in Carbon Charts. This exploration is\nsubject to change.")),(0,i.kt)("p",null,"Gradients are good for highlighting extremes in a range of values. Use a\ngradient on single category visualizations only if needed. Multiple gradients\nare often inaccessible and are discouraged in our system. Gradients should not\nbe used to represent any meaningful progression or divergence. Never use a\ngradient in place of a sequential palette."),(0,i.kt)("p",null,"For the full list of approved gradient options, see the IBM Design Language\n",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/design/language/elements/color#gradients"},"Color page"),"."),(0,i.kt)(A,{mdxType:"Row"},(0,i.kt)(b,{colLg:8,colMd:6,colSm:4,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"115.27777777777777%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAAAsSAAALEgHS3X78AAADvklEQVQ4y6WSXWgcVRTH92Xp7mazm6w7Ozuzk6S1qU3T0NjaqsWmPhShIAZqU7QqVvx4KgjShMSHooLWBBvQB8WXqiD6omBpVEREfaiIiEKaqqkpSVO3aWOy2WSTnZ3Z3bk/mZn9SpMi4oUfZ+49c/7zv+eMRwiBJQRCUEKsE13sZZp5VrI5DEOnUMg7Z+WcHT1UlihRu6r7ctFSZpl0ep7xqVmSN1Jr8p7UQoaZ2UV0E3QDdFOQMyFnCswCpNIrzKUWV7kcT8L4NcgZFkZOp1AsVh1++I3FU6ct+s7Aix/Ayx8LXv8Ehs8K3v4S3vnK4rOfLApFV+xSUjB2BfLGMlldxzBNdF2vOszoMJuG+SXBfAZSGcHCsiC9AotZwVIWVozqlcamBEULppNJJianMQyTQqHg4Aiu7Zm4RT/Lou55Pp93HJY/VDMUWzm/roB9Jshjka8ULiwucX3uBleTM8zNLVSEKldO/pFl9Os0078UuHYBZi4Krv8umL0k+PuyYOrCMsk/M5XfyP5I6qrFzJhgZcnEMHJYllV1+Nvngi9OCr4dtvj+LYvz71r8+J7g548Ev34qGD0Ll8+D5Q6SdFIwcxHMvOH0zzCM1UMB+81/p1goYokif40WMHWLiSuTjE9Mks3q5HI5R7hYLN48lP+/PP39/fwnBqrPAwMDa/KeDT4/Pl8Af6DOIVBLXRC/P4DPb7/jq+D3+x1qz8p4NFUiIYe4LexziIR9NIZcwvUbiEbqkaUI8XjcQVEUZFkmFpNQVZVNm7dWcjae9nuPsPfhV9l18AT3PNjLfd293H+olwM9vTxw5AQ9z7xE99HnkeNxJEly0DSN5pYWFG0jWksrclxFkqLEYjE8rXcfZffhN9l7eJD9jwxx4PEhDj45xENPD3Ho2UEePX6a7if6agRj3N66jS1tO1BUDUVRURLNVcFoY5BIvZfGei8NQS/hoJdQnUt9wEsw4CUU9FXcxWKyU2gLyHLMubq7d6NHkmQkKY4sK8jxKvESMTleFSkV1pJQtYqYHT0JTaV5o0ZUitAYCd9EA3Zea0qUCspOJKRYFE1tpnVTmzOkisOefQMMHvuBk4+d45VjI7z23AiDx0d444URhvvOcebUd5zqex/Fabzbw61b2unYdicJpRlV0ZxY6eHmpg46W/fTecc+drZ1sbO9i13bu7iro4vdO7rY09lF5/Y9zrXLPUyoTQ7V30WpOoxEGwhHgi6NJRqChMqE7X1oVZ9sNy5SzbBKPbQf5Jh8a2Q31k5yPcoO/wEwVLGfM7oJZQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Gradient palette",title:"Gradient palette",src:"/static/e631551a496246f7ca78c1ba264b8f14/3cbba/gradient.png",srcSet:["/static/e631551a496246f7ca78c1ba264b8f14/7fc1e/gradient.png 288w","/static/e631551a496246f7ca78c1ba264b8f14/a5df1/gradient.png 576w","/static/e631551a496246f7ca78c1ba264b8f14/3cbba/gradient.png 1152w","/static/e631551a496246f7ca78c1ba264b8f14/92c65/gradient.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("h2",null,"Color in action"),(0,i.kt)("p",null,"See the IBM Design color palette in action across multiple business units and\napplications. Deliberate hits of color are composed with rich neutrals for a\nwell-balanced cohesive experience."),(0,i.kt)(u,{mdxType:"ImageGallery"},(0,i.kt)(h,{col:6,title:"Bubble chart in action",alt:"example of a bubble chart",mdxType:"ImageGalleryImage"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"900px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"99.65277777777779%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACaUlEQVQ4y51V2WobQRD0//9Q8hIIBIxxErAdEshDhGXrWq2kaOc+u0LP7K60tpVABoo5FtV0V3WProhIow7CPwYRXTofPrRXAPThcMB8PqfFYgHGer3GcrnEarUqe17nnEfSNzBwVkIpJTabDbVti6ZpsN/vwevtdjuuzwnrfMKQHRG1V0PKfEVK6a/pTlA4Kl5FyJuUEllrSyS85/kcA9FAEj2hfSQES304PeG5Kd77SxqNMF0l9JrwdE8w4gUhRxhjhHOOtNYXiXIPbzj6mjJRHhXJ54QsuveeYgw1vTwl+tV1GCU76VaYjs5hZ+3JFCZkJ5kwhDCW46BXEZ8AjwRDsXxTIUDHUNY7a7HRekq42+0ghKQQHJ6eNWYzVUhSoAIen+43eH+7LGsfE2LKY828SlkphRgiESIev0X8vI1AAHbK4WmvkTrg+kOHj++OWDqJVLQjuJSKJJOymbrskDwQLGBshM8JJkZ0IiAFFARK8BKwHbAzthr0FmHOmYwx9eYQcX23gXGx4OahgfURhOrqw53A55sjrA/FQM6976RTYfNpihEmBBydx1xKLA4K861EvbCWy6JRWG4Vnpt6rkyA1OHt1nPOjfXGIyZCiNNHQagwacnZQuDH7Hf5QS4uExXPOWUmVFKBHwshRJnZMF7zzJIYXb9LpdB1XYEQYngHpqZU/zmizL2NGNnFWDqCa5XB50N/c4f1mNbhWmto74nYVRvR7A1yZrIEKwneErRWJUomYNKB+MUbWwm/tFusDgeyWmLTCnz93kCKDlJ1OKwS9msDqTsUSfpUB0l6Uuo1fp3y/4zzv4A/IwMck8u1MBgAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"example of a bubble chart",title:"example of a bubble chart",src:"/static/83d22dee0f122627e4469b1fbe2203b8/929af/color_gallery_1.png",srcSet:["/static/83d22dee0f122627e4469b1fbe2203b8/7fc1e/color_gallery_1.png 288w","/static/83d22dee0f122627e4469b1fbe2203b8/a5df1/color_gallery_1.png 576w","/static/83d22dee0f122627e4469b1fbe2203b8/929af/color_gallery_1.png 900w"],sizes:"(max-width: 900px) 100vw, 900px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,i.kt)(h,{col:6,title:"Radar chart in action",alt:"example of a radar chart",mdxType:"ImageGalleryImage"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"896px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACS0lEQVQ4y41UiW7aQBTk//+jqpqSKGpLpFBRSEovSlFIIS3mDiTGIcbX+txjql0OcRinaz3fO/tm3rzNCSGQNo69f2nk5EnXdYxGI0wmEwwGA8RxvAMqr9uRtaAC9DxPgRqGgdlstgOYNjEr+1wW5fU3Silc11ULR1H0cob7lPYzk4BhGIJSBs75gQwHgGl6re8lABcShMsXq+84qmfu2GoSiKlsBG7HIRrDABDLZ3UcYXSg4TorAQ7BOMb9AO+KBs6LBkp1F8+PAVjCsm0j9bEsC0EQgDGpEwNxEkzbHsrVBUr5Hr6cdnFxqaNwvcDdTwuzAUGSJDBNU82VOqdSlnrFEcWoaaPVcFC8mODqREP5rIvqmw4K7ye4bjggZgTKmKr+ts1SKTPKMf3j4ba2wMe3XVyd9nD5SkP1rIuvjWeMyUrLrbkbDfcry7lQFZ1qBHcVHZ9ONFTyfVTOO/j9fYp628L9wwPmT3MlkaS9jZFuGwjM+gTtwhCF1xpqpTHa30aolTXU2wZ62l8MhkM4jnNg9NxBv/Ll85PmoJvvoP95jH7zEa2hjw+/BqhUW6o9ZavKztnOcIfy/ljc6LB+3APe0n8RF7BjgY7ub4qQ1q7LDAWUXeSKMojvg9oEQpobUAaX91h1jKTp+74KQoiyXSpl+WMSR+A0Rlrri1VI48t/1yFp71C2DAlEVQYh5ZgHHJxSJIyBuSGoF4JypsybtXVtqjxsuliYDohrY2YHuNFDEMeGTTwkUxPBdA7LW25fabtNZi//z8jaYP8BwTkQac4rLrQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"example of a radar chart",title:"example of a radar chart",src:"/static/2c940f7b75f3cd978d6b5240980b076c/6e9cd/color_gallery_2.png",srcSet:["/static/2c940f7b75f3cd978d6b5240980b076c/7fc1e/color_gallery_2.png 288w","/static/2c940f7b75f3cd978d6b5240980b076c/a5df1/color_gallery_2.png 576w","/static/2c940f7b75f3cd978d6b5240980b076c/6e9cd/color_gallery_2.png 896w"],sizes:"(max-width: 896px) 100vw, 896px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,i.kt)(h,{col:6,title:"Donut chart in action",alt:"example of a donut chart",mdxType:"ImageGalleryImage"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"896px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADHklEQVQ4y42US4gcVRSGi2Qg8+juqar7qq5H93RVZtLp6sdMd6d70p0xrRATXMkoGCJG3EgGHwhGXLjKQojgMipRMEF8gCsRF4K6ca2Cm2TlVlBX4sbdJ1VjJibT03FxOJe6df97/nvO/1taa4QQOI6D67p7OQulFNn+nfx/wsrA0jSl1+vRarVot9t0Op08+74/FWzWBZaUkiRJcrB6vU6z2cxzo9HYAzTGoLXJ1w+q2ppF2WQAUmLbNkI5eF4Zz5RnV3jQpmcMBSXxV6q0mx3iMKUcSpS3jFbmwCqtfe+iFF7Zww0DXm4MuH3jQ77/9gdeGf7Iq4Of6Ne2scVi/gTTQK37P0qlkK7D50+9wa+XrnHp9ITB5ph6OOLx9C2uPvQ3j6y+xLJYQGtvH+g9FWaP72nN6vAUX1y+ziBJsRbmKRWL2KLIEdtiM77Am1t/sRb2EdreV+m9lI2hqjVzz13AOvsw7tISURQRBAFRVCEMqhTcw+x0v+H8+jV0WEIr72DKWUeV8XBev4oebqGLBXr9PsPhkMlkQq93giV7ju30bZ7vfkXBPYTR5emUd4El2nh0P/qD+MnLOPOHWKs3GI/H+eBH4W6FT7dv8Gzn03ydAU6lnIdXRizOcey1T2i/ewtZnMddLuEIiSsktlPCNytcGf/GKH4mb4zR3qyxMSjXxjvaZP2zP6lf+ZpWf5PRRpNeK2Wjf5wXRl+y0/0OV5YOVsrdUChjMG6JeHSO7ge/cPbmbU6+9zPD92+x9fHvbE9uEooIod09Oc5UisoH28dXbt715NxF4hevk+y8Q3jmIrbnIuV0sP90WewJPw/horIDUiKKC6jFOZzFw4jCEbS8aw7TjMLKOmtMjDHlnHI23KqS4AqR61n5Aa7nUwtXqAQVtNH5P7sONEV6jlzmsbUnSFc7xEmNWhxTf/Q8w82TJNkwn1gnGG1wpt5j1OwSVCJqtRpxHO9efj+gUIrJSkRSrVCpVgnDkOOrCae3TuGXfZL0KMcGDYIgxHiGzD8zkDt5ipYVtlS5KWT0s03xrwfmB4VEOCJ3Ia30A937HyNaL0JHGZaeAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"example of a donut chart",title:"example of a donut chart",src:"/static/979feb02238caecf12cf6fbb9f214db3/6e9cd/color_gallery_3.png",srcSet:["/static/979feb02238caecf12cf6fbb9f214db3/7fc1e/color_gallery_3.png 288w","/static/979feb02238caecf12cf6fbb9f214db3/a5df1/color_gallery_3.png 576w","/static/979feb02238caecf12cf6fbb9f214db3/6e9cd/color_gallery_3.png 896w"],sizes:"(max-width: 896px) 100vw, 896px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,i.kt)(h,{col:6,title:"Stream chart in action",alt:"example of a stream chart",mdxType:"ImageGalleryImage"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"896px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAD0UlEQVQ4y3WVS2hcVRjHb4ltk5nJZO69574yrzt5T55mTJqHFTeCSVyYUihIFQMuFIumNLpwoQjWV9AaI6YWQdAqQi2hxnTGJM2rNq1RLArVlYgL3YirbiKi+ck5NzONMS7+fM/zPc4933c127YxDANd1/+Dol7SIi+EQJ6xLEvRndBM06SlpYXe3l66uroUOjs7FW1tbSWXy9HW1qbQ09NDOp1GntktmEyiyYy1tbVks1mam5tVcEllsMbGRiU3NTUpe3t7O4lE4l9VKkheBpUBpUFmLLalsCUrvWliClHiLcfBcV1sCc9TcGT7W4G14l040lEat6O6Wjk7Qii7axg40ShOLIaj6zjhsIKdSGB5XtBy6XLlocooTmVlgGgVTiiE5aex6uqUj2hpRh8axDxwAJHrJPrkE0RefIHwmSlEfT22bqAVe3dSKczBAYz7hog99ijRU68TGztB5Oz7RM6fo/L0FOH8LKG1LwjNF6jIz1J+7Qr7vrpKRWE2SGrIgK6LGwqxf2wU7fo6ey+voK2tol1dRru2irY6j7Yyh3ZlCW2pgDb/GdpigbLlBcoW8lQszhO+MH0roO16mBXltD93kpq1dSrzM3QXljg++y25/AonZr5ndOYGB2cvM1L4hjdmf2bw4jrO3DyJi3Noi3n2fHoeUQzouh7h8F6OPf4elz7/i/GzPzH29m+8MrXBl9M3+XVhk1/mN7l+YYPpjzb4Mf83X8/cZHr6d75bhMPLP9CUX8Krb8AydDTbqcasvI32ox/ywFtw/2tw96vQd/JPDk/A0+/C6BkYnoD+lzY5OgkPT8GR8T84fuwdpl6+xPPPfEAinkQIU7ZcjREpo3vkHPe8CbmRT7jrqRsMTULLoQnaH5mj9cFztAyf4t5xyA5PkD00ScPAs5RX7CGiG8T0GJYVPHbNdjzMqv3cfuQ0DXeOYIQ0/I4B7njoYyw9hG3GsM0olhEh2dCjZFG1D0uP4Lkernyf8pEXRy9gBNU1HQgzFoyRMBFGFbbtYNkOtuMqXhjRYMQcD9t2S6O3fVmUHnYqGSeTqcHPZPD9TMD7/pbsk5G0ZN+St9F4PH5rUqSQSqdJpVLKIZ321VZRAX1f6ZPJZEku2gLftKJecfRUuYaBME2EZWGYcikYQTvCxDRiKmFNTY3aMqUNswuClqVTQz1ePI7j2NRmGsj4tTi2oDpVrxCPe6oKuSC239fOJRtUKNdTfx/pujp1sDt3kI62buKehZ/tI9PcTyrhkkylVOv/t61LFSrF1mqXSsPQVduWZSNMXSFoSez6VXf+Av4BRkWEYkDmaNsAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"example of a stream chart",title:"example of a stream chart",src:"/static/c3586e695e515f66012671d3b6692e3d/6e9cd/color_gallery_4.png",srcSet:["/static/c3586e695e515f66012671d3b6692e3d/7fc1e/color_gallery_4.png 288w","/static/c3586e695e515f66012671d3b6692e3d/a5df1/color_gallery_4.png 576w","/static/c3586e695e515f66012671d3b6692e3d/6e9cd/color_gallery_4.png 896w"],sizes:"(max-width: 896px) 100vw, 896px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,i.kt)(h,{col:12,title:"Heat map in action",alt:"example of a heat map",mdxType:"ImageGalleryImage"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.416666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAACi0lEQVQoz32TS0hUYRTH7yaISiqiRcuioge1CFoFQfRaVLRrUVEURLQogl5IgfRaBElFkT2ojSWopZhimGllMQtzVCydMipTcRwd5zr3/Ty/uHMlEqID/9V3zp/vnN85iud5aJqGaZoYho6uadi2RRwypf+FTMtVfN9HVVXUyTwTqkZuUiOvW/ghBKFguoLhgOUKtgeqKWQ0IasLQxPQnxZ6BoW2vpBRNUSJvH3fI284qDZ/FBV9H4PUCLT/gOZe4dVnoa4LyhPCrSbhUq1w9LGws1RYfQ4aOokNA98vGGYNYcIQVEtI56F7UOgYEBq6oawFrtbB+WrhVAWcKIf992BHKWy8AgsP6TxLeLGhSIhmugXDvA0jk0L/KHT9gtok3G4WLlQLRx7BpqvCytMha864rC2GxYcHWbCtCWVdBU8bf6I4josfgTEdxnRhWIXkgPCyB6ra4f4buNYgFFcKu28Iq85C0T6NGds7mbklwaz1Dyhadgxl7iaeVDWjhCKEgUc27/ItI3xJQ2tKqOmI5iXUJIWHb4WSGmHvXWHDRVh+3GDJgRTzdyWZs/Ud8zbXo6y4TkV9b9yybZnk8ibjBqgWBRjdg7HavkJLH7zuhXutcLcFbjYJJc8jGLDypM2ig2PM3pOh8oONEm2P5zoFKON6DKXQei76rfB5WPg0JPQMCe/7hep2oaxVCqaX66QAZ88dWHoK6pJTlMMwwPU8TMfHsH10y8WwPHTLI6O6pHMew1mH1LDDx+8ebX0uia8ejZ0eLzpc6pMuZU0O/SMBih8EmJaDqruM50wiSNOvJL4ECf1oY//xNl1KEATYro9qCL/SOppuxiUiiDAlidMl6kYIQwoK/pIfQCjwGzBDUwPyZZxDAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"example of a heat map",title:"example of a heat map",src:"/static/9696f82e439488bdb250757f4d930cc0/3cbba/color_gallery_5.png",srcSet:["/static/9696f82e439488bdb250757f4d930cc0/7fc1e/color_gallery_5.png 288w","/static/9696f82e439488bdb250757f4d930cc0/a5df1/color_gallery_5.png 576w","/static/9696f82e439488bdb250757f4d930cc0/3cbba/color_gallery_5.png 1152w","/static/9696f82e439488bdb250757f4d930cc0/0b124/color_gallery_5.png 1728w","/static/9696f82e439488bdb250757f4d930cc0/0c3f5/color_gallery_5.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,i.kt)(h,{col:12,title:"Proportional diagram in action",alt:"example of a proportional diagram",mdxType:"ImageGalleryImage"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABcklEQVQoz22S204CMRCG9w3AbBfYZQ+teyzsAZBIJGo0asKF0Xjp+z/Ib/4mXatw0Uxn2vnm73S8OI6htUZZlmbVdY3FYgEhBGazGYIgMNYu+jZmLRnM4d7jhoEoirBcLo1ljJYJ8/l8hAnhI00Tc+4Wom/veTygGmMDASECSClRFPkYp09YU7dYr1vju0BXtWeDrDC9muBmOOLz9A2lpFFelRpDv8V61eHt+QN9t0FVVUjTdCzotsRzHV/4kFkOXXWQMoNUEne3Dway2+7x+vSO4+HRqGevlVIIw/AP1HNlG6jvYzqdII4T6Eajqkp0bW8Au80eXTsYhVxFUZz10wH+QvkhSZKY5MP+HnXdIM9zAyGY00Bl/2FnT7ZKdbPC0G8wdDtE4dL0kkupazNi3Nv+uR9y8cm8WJY1Ti9fCEOOjhhHiqrYN3ekGHeVXlSYZRlWuh0vEcJk61sAf5ptcM/OgHbywygcfSq7VJhKrVr75B/GBiNSdB2Y9AAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"example of a proportional diagram",title:"example of a proportional diagram",src:"/static/6f832a8b483abaf73c4414d5429d624b/3cbba/color_gallery_6.png",srcSet:["/static/6f832a8b483abaf73c4414d5429d624b/7fc1e/color_gallery_6.png 288w","/static/6f832a8b483abaf73c4414d5429d624b/a5df1/color_gallery_6.png 576w","/static/6f832a8b483abaf73c4414d5429d624b/3cbba/color_gallery_6.png 1152w","/static/6f832a8b483abaf73c4414d5429d624b/0b124/color_gallery_6.png 1728w","/static/6f832a8b483abaf73c4414d5429d624b/0c3f5/color_gallery_6.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,i.kt)(h,{col:12,title:"Alluvial diagram in action",alt:"example of an alluvial diagram",mdxType:"ImageGalleryImage"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.416666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAACtklEQVQoz42TaU9TQRSG+/dcEuPyReNK1KigGFBMXDBGUNAYClUEU8umASuyiPUWuihIgVYorUuRWguJgFWp3oLcLrczj2mryEff5JkzZz68M2dyjkHXdVZUdR2RzZKXlPyVzKcyfySFRAo2UMhFLkqJIZNO801V+ZFOEUskWMlkSAuBkHIduW6+Mf67cOPekFsG3G480SgxYEnXWdB1FjMZYhmduBDEtCR+h0p4GD4MS8Kv4KMHIuOSTxM5YPZ1AiGyGHIl+iIRxuNxgqurRDWNuVSKUDJJYG2N6VSSifhPOmvmcdaDo0Hi/IOjXjJkFLiMYGtcQs+mCy+0jozQt7CAS9OwJRJ5lESCAVXFmlB5EPvG1bJuOqvDjFrA1Shw34Hhe+BpAfvtX/Q0hhAyiyGbTvPQ68UYifBk+Tu9y8vc/xqjYWmRs9EIB0Pv2Dk2RmtNBI8Z/P0wPwVzfp2Jx6s4TBp1x8epOW1Fz+oY0prGDUXh6NQkVxY/c30+yoVImGPBaQ4MDVLytJ+rip2Bpi846wXdl1for0rRd+0nbefD1J10U7m7n+qSR2jJtULJdXaFTRYzR94GORzws8/l5KBjiMpAgMrZGS4Eghzb1UBtkQO7Kc6LFpXWikWaT81hPDVG3RkHHSZXoeScYe2jLrZcvkRRq4WzIy8pdgxRNmintLub0vZ2zrW2ceuMHVOJl6qi55TvaaJsewc9NV8YNRf+VLHMkxV6wdDU3s624hOcM9+n2vqYm729XFQULvl8VM/OYAzNsGNzMXs3VVBV3sITywiuro903Qhyt2yS0q1tlO9vQCILhk3NzRw6cpRnTjde/zST70MEo1GUN28w+3zUut3cMXbyoMmGzephsHcCe58HpcfDM+soti4vL2xTSCkKhkKIDdPwp/eF+DcAyWS+af9HvwHGjDKYb9DMvgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"example of an alluvial diagram",title:"example of an alluvial diagram",src:"/static/4dd20cb69d27b44e96ec12d919ce2217/3cbba/color_gallery_7.png",srcSet:["/static/4dd20cb69d27b44e96ec12d919ce2217/7fc1e/color_gallery_7.png 288w","/static/4dd20cb69d27b44e96ec12d919ce2217/a5df1/color_gallery_7.png 576w","/static/4dd20cb69d27b44e96ec12d919ce2217/3cbba/color_gallery_7.png 1152w","/static/4dd20cb69d27b44e96ec12d919ce2217/0b124/color_gallery_7.png 1728w","/static/4dd20cb69d27b44e96ec12d919ce2217/0c3f5/color_gallery_7.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))))}k.isMDXComponent=!0}}]);