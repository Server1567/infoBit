(this.webpackJsonpviews=this.webpackJsonpviews||[]).push([[0],{10:function(e,t,n){e.exports={background:"Trending_background__14XGY",illustration:"Trending_illustration__1_DON",imgLogo:"Trending_imgLogo__1EhUJ",price:"Trending_price__3NQnm",marketing:"Trending_marketing__v6dy5",marketingLabel:"Trending_marketingLabel__3xR21",textRage:"Trending_textRage__3jbFK",investBtn:"Trending_investBtn__2uTzT"}},12:function(e,t,n){e.exports={logo:"Footer_logo__-R-aN",name:"Footer_name__2ehnN",darken:"Footer_darken__33d2t",center:"Footer_center__3m0zd",top:"Footer_top__zFLEb",left:"Footer_left__1X0ny"}},14:function(e,t,n){e.exports={about:"About_about__2NXYf",logo:"About_logo__1vB83",img:"About_img__2NsCf",ask:"About_ask__2GaUv",info:"About_info__3CZyH",url:"About_url__6nHJt"}},18:function(e,t,n){e.exports={logo:"Portals_logo__8AY73"}},21:function(e,t,n){e.exports={question:"Question_question__3S6xO",text:"Question_text__3HGtF"}},62:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n.n(c),i=n(31),s=n.n(i),o=n(2),l=n(3),d=n(5),u=n(4),h=n(6),b=n.n(h),j=(n(39),n(13)),m=n(9),g=n.n(m),p=n.p+"static/media/infoBit-logo-black.f5eb40e9.png",x=n(11),O=n.n(x),f=(n(42),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).cryptocurrenciesLink=function(e){(Object(j.a)(window,{top:0}).then((function(){return null})),e)&&O.a.Sidenav.getInstance(r.mobile.current).close()},r.trendingLink=function(e){var t=document.getElementById("trending").offsetTop-r.state.layout;(Object(j.a)(window,{top:t}).then((function(){return null})),e)&&O.a.Sidenav.getInstance(r.mobile.current).close()},r.aboutLink=function(e){var t=document.getElementById("about").offsetTop-r.state.layout;(Object(j.a)(window,{top:t-25}).then((function(){return null})),e)&&O.a.Sidenav.getInstance(r.mobile.current).close()},r.portalsLink=function(e){var t=document.getElementById("portals").offsetTop-r.state.layout;(Object(j.a)(window,{top:t}).then((function(){return null})),e)&&O.a.Sidenav.getInstance(r.mobile.current).close()},r.sideNav=function(){return O.a.Sidenav.init(r.mobile.current,{edge:"right"})},r.state={layout:100},r.mobile=a.a.createRef(),r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.innerWidth>600&&window.innerWidth<993&&this.setState({layout:200}),window.addEventListener("DOMContentLoaded",this.sideNav,!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("DOMContentLoaded",this.sideNav,!1)}},{key:"render",value:function(){var e=this;return Object(r.jsx)("header",{className:g.a.header,children:Object(r.jsxs)("div",{className:"navbar-fixed",style:{height:"100%"},children:[Object(r.jsxs)("nav",{className:g.a.navBar,children:[Object(r.jsxs)("div",{className:"nav-wrapper ".concat(g.a.navWrapper),children:[Object(r.jsx)("div",{className:"brand-logo ".concat(g.a.divLogo),children:Object(r.jsx)("a",{href:"http://infobit.herokuapp.com",children:Object(r.jsx)("img",{src:p,alt:"infoBit",className:"left ".concat(g.a.logoImg)})})}),Object(r.jsx)("a",{href:"#!","data-target":"mobile-demo",className:"sidenav-trigger hide-on-med-and-up right",style:{height:"100%",display:"flex",alignItems:"center"},children:Object(r.jsx)("i",{className:"material-icons",style:{color:"black",fontSize:"30px"},children:"menu"})}),Object(r.jsxs)("ul",{className:"right hide-on-med-and-down ".concat(g.a.nav),children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#!",onClick:function(){return e.cryptocurrenciesLink(!1)},children:"Cryptocurrencies"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#!",onClick:function(){return e.trendingLink(!1)},children:"Trending"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#!",onClick:function(){return e.aboutLink(!1)},children:"About"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#!",onClick:function(){return e.portalsLink(!1)},children:"Portals"})})]})]}),Object(r.jsx)("div",{className:"nav-content",style:{display:"flex",height:"50%"},children:Object(r.jsxs)("ul",{className:"hide-on-small-only hide-on-large-only ".concat(g.a.nav),children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#!",onClick:function(){return e.cryptocurrenciesLink(!1)},children:"Cryptocurrencies"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#!",onClick:function(){return e.trendingLink(!1)},children:"Trending"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#!",onClick:function(){return e.aboutLink(!1)},children:"About"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#!",onClick:function(){return e.portalsLink(!1)},children:"Portals"})})]})})]}),Object(r.jsxs)("ul",{className:"sidenav ".concat(g.a.sidenav),id:"mobile-demo",ref:this.mobile,children:[Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#!",onClick:function(){return e.cryptocurrenciesLink(!0)},children:"Cryptocurrencies"})}),Object(r.jsx)("br",{}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#!",onClick:function(){return e.trendingLink(!0)},children:"Trending"})}),Object(r.jsx)("br",{}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#!",onClick:function(){return e.aboutLink(!0)},children:"About"})}),Object(r.jsx)("br",{}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#!",onClick:function(){return e.portalsLink(!0)},children:"Portals"})})]})]})})}}]),n}(c.Component)),v=n(15),y=n(8),_=n.n(y),k=n(32),N=n.n(k),C=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).tooltip=function(){return O.a.Tooltip.init(r.porcent.current)},r.trade=function(){var e=r.state.currency.RAW.USD.PRICE,t=r.state.trading;t.shift(),t.push(e),r.setState({trading:t})},r.tradeGraphic=function(){var e=r.graphic.current,t=r.state.trading,n=t[0],c=t[1],a=t[2],i=t[3],s=t[4],o=t[5],l=t[6],d=e.getContext("2d");new N.a(d,{type:"line",data:{labels:["6","5","4","3","2","1","Price Now"],datasets:[{data:[n,c,a,i,s,o,l],backgroundColor:["rgba(141, 195, 81, 0.2)","rgba(141, 195, 81, 0.2)","rgba(141, 195, 81, 0.2)","rgba(141, 195, 81, 0.2)","rgba(141, 195, 81, 0.2)","rgba(141, 195, 81, 0.2)","rgba(141, 195, 81, 0.2)"],borderColor:["rgba(141, 195, 81, 1)","rgba(141, 195, 81, 1)","rgba(141, 195, 81, 1)","rgba(141, 195, 81, 1)","rgba(141, 195, 81, 1)","rgba(141, 195, 81, 1)","rgba(141, 195, 81, 1)"],borderWidth:1}]},options:{scales:{yAxes:[{display:!1}],xAxes:[{display:!1}]},legend:{display:!1},tooltips:{enabled:!1},events:[""]}})},r.publishCurrency=function(){var e=r.state.currency,t=e.RAW.USD.PRICE/e.RAW.USD.LOWDAY*100-100,n=r.roundOutPorcent(t,2);b.a.publish("currency-data-".concat(r.props.index),{name:e.CoinInfo.FullName,logo:"https://www.cryptocompare.com".concat(e.CoinInfo.ImageUrl),price:"$".concat(new Intl.NumberFormat("en-US").format(e.RAW.USD.PRICE)),porcent:n,symbol:e.CoinInfo.Name})},r.roundOutPorcent=function(e,t){var n=Math.pow(10,t);return Math.round(e*n)/n},r.state={currency:e.data,trading:[e.price,e.price,e.price,e.price,e.price,e.price,e.price]},r.graphic=a.a.createRef(),r.porcent=a.a.createRef(),r}return Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.data.RAW.USD.PRICE!==this.props.data.RAW.USD.PRICE}},{key:"componentDidMount",value:function(){var e=this;this.trade(),this.tradeGraphic(),this.publishCurrency(),window.addEventListener("DOMContentLoaded",this.tooltip(),!1),this.currencyInterval=setInterval((function(){return e.publishCurrency()}),7e3)}},{key:"componentDidUpdate",value:function(){this.trade(),this.tradeGraphic()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("DOMContentLoaded",this.tooltip(),!1),clearInterval(this.currencyInterval)}},{key:"render",value:function(){var e=this.state.currency,t=e.RAW.USD.PRICE/e.RAW.USD.LOWDAY*100-100,n=this.roundOutPorcent(t,2);return Object(r.jsx)("div",{className:"col s12 m6 l4",children:Object(r.jsx)("div",{className:"card ".concat(_.a.currency),children:Object(r.jsxs)("div",{className:"row ".concat(_.a.row),children:[Object(r.jsx)("div",{className:"col s12",children:Object(r.jsxs)("h5",{className:_.a.price,children:["$",new Intl.NumberFormat("en-US").format(e.RAW.USD.PRICE)]})}),Object(r.jsx)("div",{className:"col s4",children:Object(r.jsxs)("div",{className:"row ".concat(_.a.row),children:[Object(r.jsx)("div",{className:"col s12",children:Object(r.jsx)("img",{src:"https://www.cryptocompare.com/".concat(e.CoinInfo.ImageUrl),alt:"currency-logo",className:_.a.logo})}),Object(r.jsx)("div",{className:"col s12",children:Object(r.jsx)("h6",{className:_.a.name,children:e.CoinInfo.FullName})})]})}),Object(r.jsx)("div",{className:"col s8",children:Object(r.jsxs)("div",{className:"row ".concat(_.a.row),children:[Object(r.jsx)("div",{className:"col s12 ".concat(_.a.graphic),children:Object(r.jsx)("canvas",{ref:this.graphic,className:_.a.canvas,children:Object(r.jsxs)("h5",{children:["$",new Intl.NumberFormat("en-US").format(e.RAW.USD.PRICE)]})})}),Object(r.jsx)("div",{className:"col s12",children:Object(r.jsxs)("h6",{className:_.a.porcent,ref:this.porcent,"data-position":"left","data-tooltip":"Price Now: $".concat(new Intl.NumberFormat("en-US").format(e.RAW.USD.PRICE)),style:{color:1===Math.sign(n)?"#169E4E":"#EF0303"},children:[n,"%",Object(r.jsx)("span",{className:_.a.hour,children:" 24h"})]})})]})})]})})})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.currency.RAW.USD.PRICE!==e.data.RAW.USD.PRICE?{currency:e.data}:null}}]),n}(c.Component),w=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={timeOver:!1,timeOverSec:e.time,padding:e.padding,borderRadius:e.borderRadius,backgroundColor:e.backgroundColor,boxShadow:e.boxShadow},r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timeout=setTimeout((function(){e.setState({timeOver:!0})}),this.state.timeOverSec)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout)}},{key:"render",value:function(){return this.state.timeOver?Object(r.jsx)("div",{className:"col s12",children:Object(r.jsx)("div",{className:"card",style:{padding:this.state.padding,borderRadius:this.state.borderRadius,backgroundColor:this.state.backgroundColor,boxShadow:this.state.boxShadow},children:Object(r.jsxs)("center",{children:[Object(r.jsx)("h1",{style:{color:"#db4437"},children:"Error 404 Not Found"}),Object(r.jsxs)("h4",{style:{color:"darkgray"},children:["The API has expired,",Object(r.jsx)("a",{href:"https://github.com/Server1567/infoBit/issues",target:"_blank",rel:"noreferrer",children:" contact "}),"with us to resolve it."]}),Object(r.jsx)("h5",{style:{color:"darkgray"},children:"You can reload the page for try solve it."})]})})}):Object(r.jsx)("div",{className:"col s12",children:Object(r.jsxs)("div",{className:"card",style:{padding:this.state.padding,borderRadius:this.state.borderRadius,backgroundColor:this.state.backgroundColor,boxShadow:this.state.boxShadow},children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"preloader-wrapper small active",style:{display:"inline-block"},children:Object(r.jsxs)("div",{className:"spinner-layer spinner-red-only",children:[Object(r.jsx)("div",{className:"circle-clipper left",children:Object(r.jsx)("div",{className:"circle"})}),Object(r.jsx)("div",{className:"gap-patch",children:Object(r.jsx)("div",{className:"circle"})}),Object(r.jsx)("div",{className:"circle-clipper right",children:Object(r.jsx)("div",{className:"circle"})})]})}),Object(r.jsx)("h3",{style:{color:"#db4437"},children:"Error connecting to the Market :/"})]}),Object(r.jsx)("h4",{style:{color:"darkgray"},children:"We are working to fix it :v"})]})})}}]),n}(c.Component),S=n(17),I=n.n(S),L=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).requestApi=function(){I.a.get("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD&api_key=".concat("46236138e773f7585bc866aa0bf1cc1e3163a8157d2d3d40dc709343bcccc852")).then((function(e){return r.setState({currencies:e.data.Data.slice(0,6)})})).catch((function(e){return console.log("Fallo al consumir la API. "+e)}))},r.state={currencies:[],dataCurrencies:[]},r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.requestApi(),this.interval=setInterval((function(){return e.requestApi()}),7e3),b.a.subscribe("currency-data-0",(function(t,n){e.setState({dataCurrencies:[].concat(Object(v.a)(e.state.dataCurrencies),[n])})})),b.a.subscribe("currency-data-1",(function(t,n){e.setState({dataCurrencies:[].concat(Object(v.a)(e.state.dataCurrencies),[n])})})),b.a.subscribe("currency-data-2",(function(t,n){e.setState({dataCurrencies:[].concat(Object(v.a)(e.state.dataCurrencies),[n])})})),b.a.subscribe("currency-data-3",(function(t,n){e.setState({dataCurrencies:[].concat(Object(v.a)(e.state.dataCurrencies),[n])})})),b.a.subscribe("currency-data-4",(function(t,n){e.setState({dataCurrencies:[].concat(Object(v.a)(e.state.dataCurrencies),[n])})})),b.a.subscribe("currency-data-5",(function(t,n){e.setState({dataCurrencies:[].concat(Object(v.a)(e.state.dataCurrencies),[n])});var r=e.state.dataCurrencies;if(6===r.length){var c=r.sort((function(e,t){return t.porcent-e.porcent}));b.a.publish("currency-trending",c[0])}})),this.intervalRemoval=setInterval((function(){return e.setState({dataCurrencies:[]})}),7e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval),clearInterval(this.intervalRemoval),b.a.clearAllSubscriptions()}},{key:"render",value:function(){return 6===this.state.dataCurrencies.length&&b.a.publish("api-on",!0),Object(r.jsx)("div",{id:"cryptocurrencies",className:"container",style:{transform:"scale(0.9)"},children:Object(r.jsx)("div",{className:"row",children:0===this.state.currencies.length?Object(r.jsx)(w,{time:4e4,padding:"115px 50px",borderRadius:"25px",backgroundColor:"#fff",boxShadow:"0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%)"}):this.state.currencies.map((function(e,t){return Object(r.jsx)(C,{data:e,price:e.RAW.USD.PRICE,index:t},e.CoinInfo.Id)}))})})}}]),n}(c.PureComponent),R=n(21),A=n.n(R),T=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)("center",{className:A.a.question,id:this.props.id,children:Object(r.jsx)("h5",{className:A.a.text,children:this.props.text})})}}]),n}(c.Component),W=n(16),E=n(10),U=n.n(E),D=n(33),P=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).portalsLink=function(){var e=document.getElementById("portals").offsetTop-r.state.layout;Object(j.a)(window,{top:e}).then((function(){return null}))},r.getColor=function(e){var t=new D.a;r.setState({color:t.getColor(e)})},r.state={trending:e.currency,color:[],pixels:0,layout:100},r.logo=a.a.createRef(),r.portalsLink=r.portalsLink.bind(Object(W.a)(r)),r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.innerWidth>600&&window.innerWidth<993&&this.setState({layout:200}),b.a.subscribe("pixels",(function(t,n){e.setState({pixels:n.pixels})})),this.image=this.logo.current,this.imgOnTime=this.logo.current,this.image.addEventListener("load",(function(){return e.getColor(e.image)}),!1),this.interval=setInterval((function(){e.imgOnTime.addEventListener("load",(function(){e.getColor(e.imgOnTime)}),!1)}),7e3)}},{key:"componentWillUnmount",value:function(){var e=this;this.image.removeEventListener("load",(function(){return e.getColor(e.image)}),!1),this.interval&&(this.imgOnTime.removeEventListener("load",(function(){e.getColor(e.imgOnTime)}),!1),clearInterval(this.interval)),b.a.unsubscribe("pixels")}},{key:"render",value:function(){var e=255-this.state.color[0],t=255-this.state.color[1],n=255-this.state.color[2];if(.5*(Math.max(e,t,n)+Math.min(e,t,n))>127)var c=0;else c=255;var a=this.state.trending.logo,i="https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url="+encodeURIComponent(a);return Object(r.jsx)("div",{id:"trending",className:U.a.background,style:{backgroundColor:"rgb(".concat(e,", ").concat(t,", ").concat(n,")"),padding:"0 0 ".concat(280+this.state.pixels,"px 0")},children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col s12 m6",children:Object(r.jsxs)("div",{className:U.a.illustration,children:[Object(r.jsx)("img",{src:i,alt:"currency-logo",className:U.a.imgLogo,crossOrigin:"Anonymous",ref:this.logo}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("h3",{className:U.a.price,style:{color:"rgb(".concat(c-e,", ").concat(c-t,", ").concat(c-n,")")},children:this.state.trending.price})]})}),Object(r.jsx)("div",{className:"col s12 m6",children:Object(r.jsx)("div",{className:U.a.marketing,children:Object(r.jsxs)("div",{style:{width:"211px"},children:[Object(r.jsxs)("h2",{className:U.a.marketingLabel,style:{color:"rgb(".concat(c-e,", ").concat(c-t,", ").concat(c-n,")")},children:[this.state.trending.name," ",Object(r.jsx)("br",{}),"is",Object(r.jsx)("span",{className:U.a.textRage,children:" growing"})]}),Object(r.jsx)("button",{className:"".concat(U.a.investBtn),style:{color:"rgb(".concat(c-e,", ").concat(c-t,", ").concat(c-n,")"),background:"rgb(".concat(e,", ").concat(t,", ").concat(n,")"),border:"4px solid rgb(".concat(c-e,", ").concat(c-t,", ").concat(c-n,")")},onClick:this.portalsLink,children:"invest now"})]})})})]})})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.trending.price!==e.currency.price?{trending:e.currency}:null}}]),n}(c.PureComponent),F=n(14),B=n.n(F),M=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).requestInfo=function(){var e=r.state.trending.symbol;I.a.post("/info-trending",{sym:e}).then((function(e){var t=e.data.message,n=e.data.url,c=t.split("."),a=t.split(".").indexOf(" More information can be found at https://www");r.setState({info:c.slice(0,a).join(".")+".",url:n})})).catch((function(e){r.setState({info:""}),console.error(e)}))},r.calcHeigh=function(){var e=r.about.current.clientWidth,t=r.about.current.clientHeight,n={height_initial:r.state.height,heightnow:t,pixels:Math.abs(r.state.height-t)};return e<973&&e>580?n.pixels=100:e<574&&e>331?n.pixels=150:e<331&&(n.pixels=200),r.setState({pixels:n.pixels}),b.a.publish("pixels",n),n.pixels},r.state={trending:e.currency,info:"",url:"",height:458,pixels:0},r.about=a.a.createRef(),r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timeout=setTimeout((function(){return e.requestInfo()}),500),this.interval=setInterval((function(){return e.requestInfo()}),7e3),this.heightTimeout=setTimeout((function(){return e.calcHeigh()}),1e3),window.addEventListener("resize",(function(){return e.calcHeigh()}),!1)}},{key:"componentWillUnmount",value:function(){var e=this;clearTimeout(this.timeout),clearTimeout(this.heightTimeout),clearInterval(this.interval),window.removeEventListener("resize",(function(){return e.calcHeigh()}),!1)}},{key:"render",value:function(){return Object(r.jsxs)("div",{id:"about",className:B.a.about,ref:this.about,style:{marginTop:"".concat(-222-this.state.pixels,"px")},children:[Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col s12",children:Object(r.jsxs)("center",{children:[Object(r.jsxs)("span",{className:B.a.ask,children:["What is ",this.state.trending.name,"?"]}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{})]})})}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col s12 l4",children:[Object(r.jsx)("div",{className:B.a.logo,children:Object(r.jsx)("img",{src:this.state.trending.logo,className:"circle responsive-img ".concat(B.a.img),alt:"Logo"})}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{})]}),Object(r.jsx)("div",{className:"col s12 l8",children:""===this.state.info?Object(r.jsx)(w,{time:2e4,padding:"0px",borderRadius:"0px",backgroundColor:"#fff0",boxShadow:"none"}):Object(r.jsxs)(c.Fragment,{children:[Object(r.jsx)("p",{className:B.a.info,children:this.state.info}),Object(r.jsxs)("span",{className:B.a.url,children:["You can visit the Official Website at ",Object(r.jsx)("a",{href:this.state.url,target:"_blank",rel:"noreferrer",children:this.state.url})]})]})})]})]})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.trending.price!==e.currency.price?{trending:e.currency}:null}}]),n}(c.PureComponent),H=n(18),q=n.n(H),z=n.p+"static/media/BinanceLogo.b5d3a1eb.svg",G=n.p+"static/media/CoinbaseLogo.5108dc55.svg",Y=n.p+"static/media/KrakenLogo.4d712ed2.svg",K=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col s12 m6",children:Object(r.jsx)("center",{children:Object(r.jsx)("a",{href:"http://gestyy.com/euC7Tc",target:"_blank",rel:"noreferrer",children:Object(r.jsx)("img",{className:"tooltipped ".concat(q.a.logo),src:z,alt:"BinanceLogo"})})})}),Object(r.jsx)("div",{className:"col s12 m6",children:Object(r.jsx)("center",{children:Object(r.jsx)("a",{href:"http://gestyy.com/euC7Gc",target:"_blank",rel:"noreferrer",children:Object(r.jsx)("img",{className:q.a.logo,src:G,alt:"CoinbaseLogo"})})})}),Object(r.jsx)("div",{className:"col s12",children:Object(r.jsx)("center",{children:Object(r.jsx)("a",{href:"http://gestyy.com/euC7KN",target:"_blank",rel:"noreferrer",children:Object(r.jsx)("img",{className:q.a.logo,src:Y,alt:"KrakenLogo"})})})})]})})}}]),n}(c.Component),J=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={switcher:!1,trending:e.trending},r}return Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.trending.name!==e.trending.name||this.props.trending.price!==e.trending.price}},{key:"render",value:function(){return this.state.switcher?Object(r.jsxs)(c.Fragment,{children:[Object(r.jsx)(T,{text:"What to invest in now?"}),Object(r.jsx)(P,{currency:this.state.trending}),Object(r.jsx)(M,{currency:this.state.trending}),Object(r.jsx)(T,{text:"Where to invest?",id:"portals"}),Object(r.jsx)(K,{})]}):null}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.switch?{switcher:!0,trending:e.trending}:null}}]),n}(c.Component),X=n(12),$=n.n(X),Q=n.p+"static/media/infoBit-logo-white.bf67a2f9.png",V=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("footer",{className:"page-footer",style:{backgroundColor:"#19265A"},children:[Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col s12 m6 l6 ".concat($.a.center),children:[Object(r.jsx)("img",{className:$.a.logo,src:Q,alt:"infoBitLogo"}),Object(r.jsx)("p",{className:"grey-text text-lighten-4",children:"Learn what happens with Cryptocurrencies!"})]}),Object(r.jsxs)("div",{className:"col s12 m6 l4 offset-l2 ".concat($.a.center," ").concat($.a.top),children:[Object(r.jsxs)("h5",{className:"white-text",children:["A project by",Object(r.jsx)("span",{className:$.a.name,children:" Server1567"})]}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"grey-text text-lighten-3",href:"https://server1567.github.io",target:"_blank",rel:"noreferrer",children:"Website"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"grey-text text-lighten-3",href:"https://github.com/Server1567",target:"_blank",rel:"noreferrer",children:"GitHub"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"grey-text text-lighten-3",href:"https://www.linkedin.com/in/juniorsver",target:"_blank",rel:"noreferrer",children:"LinkedIn"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"grey-text text-lighten-3",href:"https://twitter.com/juniorsverr",target:"_blank",rel:"noreferrer",children:"Twitter"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"grey-text text-lighten-3",href:"https://www.patreon.com/infobit",target:"_blank",rel:"noreferrer",children:"Patreon"})})]})]})]})}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{className:"footer-copyright ".concat($.a.darken),children:Object(r.jsxs)("div",{className:"container",children:["infoBit \xa9 2021. All right reserved.",Object(r.jsx)("a",{className:"grey-text text-lighten-4 right ".concat($.a.left),href:"https://github.com/Server1567/infoBit/blob/master/LICENSE",target:"_blank",rel:"noreferrer",children:"Terms and License"})]})})]})}}]),n}(c.Component),Z=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={currencyTrending:{},apiOn:!1},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;b.a.subscribe("currency-trending",(function(t,n){e.setState({currencyTrending:n})})),b.a.subscribe("api-on",(function(t,n){e.setState({apiOn:n})}))}},{key:"componentWillUnmount",value:function(){b.a.unsubscribe("currency-trending"),b.a.unsubscribe("api-on")}},{key:"render",value:function(){return Object(r.jsxs)(c.Fragment,{children:[Object(r.jsx)(f,{}),Object(r.jsxs)("main",{style:{flex:"1 0 auto"},children:[Object(r.jsx)(L,{}),Object(r.jsx)(J,{switch:this.state.apiOn,trending:this.state.currencyTrending})]}),Object(r.jsx)(V,{})]})}}]),n}(c.Component);s.a.render(Object(r.jsx)(Z,{}),document.getElementById("root"))},8:function(e,t,n){e.exports={row:"Currency_row__22CLu",currency:"Currency_currency__2gTby",logo:"Currency_logo__1CwOc",name:"Currency_name__1ob3m",graphic:"Currency_graphic__3UmOw",canvas:"Currency_canvas__34X7z",price:"Currency_price__UA8gA",porcent:"Currency_porcent__fKjba",hour:"Currency_hour__3WFU4"}},9:function(e,t,n){e.exports={sidenav:"Header_sidenav__80Y4s",navBar:"Header_navBar__33zEn",header:"Header_header__2MtNv",navWrapper:"Header_navWrapper__3KtVW",divLogo:"Header_divLogo__1efgI",logoImg:"Header_logoImg__SrPwe",nav:"Header_nav__23DbK"}}},[[62,1,2]]]);
//# sourceMappingURL=main.04dc375f.chunk.js.map