(this.webpackJsonpviews=this.webpackJsonpviews||[]).push([[0],{10:function(e,t,n){e.exports={background:"Trending_background__14XGY",illustration:"Trending_illustration__1_DON",imgLogo:"Trending_imgLogo__1EhUJ",price:"Trending_price__3NQnm",marketing:"Trending_marketing__v6dy5",marketingLabel:"Trending_marketingLabel__3xR21",textRage:"Trending_textRage__3jbFK",investBtn:"Trending_investBtn__2uTzT"}},11:function(e,t,n){e.exports={about:"About_about__2NXYf",logo:"About_logo__1vB83",img:"About_img__2NsCf",ask:"About_ask__2GaUv",info:"About_info__3CZyH",url:"About_url__6nHJt"}},16:function(e,t,n){e.exports={question:"Question_question__3S6xO",text:"Question_text__3HGtF"}},56:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),i=n(26),s=n.n(i),o=n(3),l=n(4),d=n(6),u=n(5),h=n(2),b=n.n(h),j=(n(34),n(9)),m=n.n(j),g=n.p+"static/media/infoBit-logo-black.f5eb40e9.png",p=n(14),v=n.n(p),O=(n(36),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).sideNav=function(){return v.a.Sidenav.init(c.mobile.current,{edge:"right"})},c.mobile=a.a.createRef(),c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("DOMContentLoaded",this.sideNav,!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("DOMContentLoaded",this.sideNav,!1)}},{key:"render",value:function(){return Object(c.jsx)("header",{className:m.a.header,children:Object(c.jsxs)("div",{className:"navbar-fixed",style:{height:"100%"},children:[Object(c.jsxs)("nav",{className:m.a.navBar,children:[Object(c.jsxs)("div",{className:"nav-wrapper ".concat(m.a.navWrapper),children:[Object(c.jsx)("div",{className:"brand-logo ".concat(m.a.divLogo),children:Object(c.jsx)("img",{src:g,alt:"infoBit",className:"left ".concat(m.a.logoImg)})}),Object(c.jsx)("a",{href:"#!","data-target":"mobile-demo",className:"sidenav-trigger hide-on-med-and-up right",style:{height:"100%",display:"flex",alignItems:"center"},children:Object(c.jsx)("i",{className:"material-icons",style:{color:"black",fontSize:"30px"},children:"menu"})}),Object(c.jsxs)("ul",{className:"right hide-on-med-and-down ".concat(m.a.nav),children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"sass.html",children:"Cryptocurrencies"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"badges.html",children:"Trending"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"collapsible.html",children:"About"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"mobile.html",children:"Portals"})})]})]}),Object(c.jsx)("div",{className:"nav-content",style:{display:"flex",height:"50%"},children:Object(c.jsxs)("ul",{className:"hide-on-small-only hide-on-large-only ".concat(m.a.nav),children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"sass.html",children:"Cryptocurrencies"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"badges.html",children:"Trending"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"collapsible.html",children:"About"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"mobile.html",children:"Portals"})})]})})]}),Object(c.jsxs)("ul",{className:"sidenav ".concat(m.a.sidenav),id:"mobile-demo",ref:this.mobile,children:[Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"sass.html",children:"Cryptocurrencies"})}),Object(c.jsx)("br",{}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"badges.html",children:"Trending"})}),Object(c.jsx)("br",{}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"collapsible.html",children:"About"})}),Object(c.jsx)("br",{}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"mobile.html",children:"Portals"})})]})]})})}}]),n}(r.Component)),x=n(12),f=n(8),y=n.n(f),_=n(27),N=n.n(_),C=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).tooltip=function(){return v.a.Tooltip.init(c.porcent.current)},c.trade=function(){var e=c.state.currency.RAW.USD.PRICE,t=c.state.trading;t.shift(),t.push(e),c.setState({trading:t})},c.tradeGraphic=function(){var e=c.graphic.current,t=c.state.trading,n=t[0],r=t[1],a=t[2],i=t[3],s=t[4],o=t[5],l=t[6],d=e.getContext("2d");new N.a(d,{type:"line",data:{labels:["6","5","4","3","2","1","Price Now"],datasets:[{data:[n,r,a,i,s,o,l],backgroundColor:["rgba(141, 195, 81, 0.2)","rgba(141, 195, 81, 0.2)","rgba(141, 195, 81, 0.2)","rgba(141, 195, 81, 0.2)","rgba(141, 195, 81, 0.2)","rgba(141, 195, 81, 0.2)","rgba(141, 195, 81, 0.2)"],borderColor:["rgba(141, 195, 81, 1)","rgba(141, 195, 81, 1)","rgba(141, 195, 81, 1)","rgba(141, 195, 81, 1)","rgba(141, 195, 81, 1)","rgba(141, 195, 81, 1)","rgba(141, 195, 81, 1)"],borderWidth:1}]},options:{scales:{yAxes:[{display:!1}],xAxes:[{display:!1}]},legend:{display:!1},tooltips:{enabled:!1},events:[""]}})},c.publishCurrency=function(){var e=c.state.currency,t=e.RAW.USD.PRICE/e.RAW.USD.LOWDAY*100-100,n=c.roundOutPorcent(t,2);b.a.publish("currency-data-".concat(c.props.index),{name:e.CoinInfo.FullName,logo:"https://www.cryptocompare.com".concat(e.CoinInfo.ImageUrl),price:"$".concat(new Intl.NumberFormat("en-US").format(e.RAW.USD.PRICE)),porcent:n,symbol:e.CoinInfo.Name})},c.roundOutPorcent=function(e,t){var n=Math.pow(10,t);return Math.round(e*n)/n},c.state={currency:e.data,trading:[e.price,e.price,e.price,e.price,e.price,e.price,e.price]},c.graphic=a.a.createRef(),c.porcent=a.a.createRef(),c}return Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.data.RAW.USD.PRICE!==this.props.data.RAW.USD.PRICE}},{key:"componentDidMount",value:function(){var e=this;this.trade(),this.tradeGraphic(),this.publishCurrency(),window.addEventListener("DOMContentLoaded",this.tooltip(),!1),this.currencyInterval=setInterval((function(){return e.publishCurrency()}),7e3)}},{key:"componentDidUpdate",value:function(){this.trade(),this.tradeGraphic()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("DOMContentLoaded",this.tooltip(),!1),clearInterval(this.currencyInterval)}},{key:"render",value:function(){var e=this.state.currency,t=e.RAW.USD.PRICE/e.RAW.USD.LOWDAY*100-100,n=this.roundOutPorcent(t,2);return Object(c.jsx)("div",{className:"col s12 m6 l4",children:Object(c.jsx)("div",{className:"card ".concat(y.a.currency),children:Object(c.jsxs)("div",{className:"row ".concat(y.a.row),children:[Object(c.jsx)("div",{className:"col s4",children:Object(c.jsxs)("div",{className:"row ".concat(y.a.row),children:[Object(c.jsx)("div",{className:"col s12",children:Object(c.jsx)("img",{src:"https://www.cryptocompare.com/".concat(e.CoinInfo.ImageUrl),alt:"currency-logo",className:y.a.logo})}),Object(c.jsx)("div",{className:"col s12",children:Object(c.jsx)("h6",{className:y.a.name,children:e.CoinInfo.FullName})})]})}),Object(c.jsx)("div",{className:"col s8",children:Object(c.jsxs)("div",{className:"row ".concat(y.a.row),children:[Object(c.jsx)("div",{className:"col s12 ".concat(y.a.graphic),children:Object(c.jsx)("canvas",{ref:this.graphic,className:y.a.canvas,children:Object(c.jsxs)("h5",{children:["$",new Intl.NumberFormat("en-US").format(e.RAW.USD.PRICE)]})})}),Object(c.jsx)("div",{className:"col s12",children:Object(c.jsxs)("h6",{className:y.a.porcent,ref:this.porcent,"data-position":"left","data-tooltip":"Price Now: $".concat(new Intl.NumberFormat("en-US").format(e.RAW.USD.PRICE)),style:{color:1===Math.sign(n)?"#169E4E":"#EF0303"},children:[n,"%",Object(c.jsx)("span",{className:y.a.hour,children:" 24h"})]})})]})})]})})})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.currency.RAW.USD.PRICE!==e.data.RAW.USD.PRICE?{currency:e.data}:null}}]),n}(r.Component),w=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).state={timeOver:!1},c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timeout=setTimeout((function(){e.setState({timeOver:!0})}),4e4)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout)}},{key:"render",value:function(){return this.state.timeOver?Object(c.jsx)("div",{className:"col s12",children:Object(c.jsx)("div",{className:"card",style:{padding:"115px 50px",borderRadius:"25px"},children:Object(c.jsxs)("center",{children:[Object(c.jsx)("h1",{style:{color:"#db4437"},children:"Error 404 Not Found"}),Object(c.jsx)("h4",{style:{color:"darkgray"},children:"The API has expired, contact with us to resolve it."})]})})}):Object(c.jsx)("div",{className:"col s12",children:Object(c.jsxs)("div",{className:"card",style:{padding:"115px 50px",borderRadius:"25px"},children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"preloader-wrapper small active",style:{display:"inline-block"},children:Object(c.jsxs)("div",{className:"spinner-layer spinner-red-only",children:[Object(c.jsx)("div",{className:"circle-clipper left",children:Object(c.jsx)("div",{className:"circle"})}),Object(c.jsx)("div",{className:"gap-patch",children:Object(c.jsx)("div",{className:"circle"})}),Object(c.jsx)("div",{className:"circle-clipper right",children:Object(c.jsx)("div",{className:"circle"})})]})}),Object(c.jsx)("h3",{style:{color:"#db4437"},children:"Error connecting to the Market :/"})]}),Object(c.jsx)("h4",{style:{color:"darkgray"},children:"We are working to fix it :v"})]})})}}]),n}(r.Component),k=n(13),I=n.n(k),S=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).requestApi=function(){I.a.get("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD&api_key=".concat("46236138e773f7585bc866aa0bf1cc1e3163a8157d2d3d40dc709343bcccc852")).then((function(e){return c.setState({currencies:e.data.Data.slice(0,6)})})).catch((function(e){return console.log("Fallo al consumir la API. "+e)}))},c.state={currencies:[],dataCurrencies:[]},c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.requestApi(),this.interval=setInterval((function(){return e.requestApi()}),7e3),b.a.subscribe("currency-data-0",(function(t,n){e.setState({dataCurrencies:[].concat(Object(x.a)(e.state.dataCurrencies),[n])})})),b.a.subscribe("currency-data-1",(function(t,n){e.setState({dataCurrencies:[].concat(Object(x.a)(e.state.dataCurrencies),[n])})})),b.a.subscribe("currency-data-2",(function(t,n){e.setState({dataCurrencies:[].concat(Object(x.a)(e.state.dataCurrencies),[n])})})),b.a.subscribe("currency-data-3",(function(t,n){e.setState({dataCurrencies:[].concat(Object(x.a)(e.state.dataCurrencies),[n])})})),b.a.subscribe("currency-data-4",(function(t,n){e.setState({dataCurrencies:[].concat(Object(x.a)(e.state.dataCurrencies),[n])})})),b.a.subscribe("currency-data-5",(function(t,n){e.setState({dataCurrencies:[].concat(Object(x.a)(e.state.dataCurrencies),[n])});var c=e.state.dataCurrencies;if(6===c.length){var r=c.sort((function(e,t){return t.porcent-e.porcent}));b.a.publish("currency-trending",r[0])}})),this.intervalRemoval=setInterval((function(){return e.setState({dataCurrencies:[]})}),7e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval),clearInterval(this.intervalRemoval),b.a.clearAllSubscriptions()}},{key:"render",value:function(){return 6===this.state.dataCurrencies.length&&b.a.publish("api-on",!0),Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row",children:0===this.state.currencies.length?Object(c.jsx)(w,{}):this.state.currencies.map((function(e,t){return Object(c.jsx)(C,{data:e,price:e.RAW.USD.PRICE,index:t},e.CoinInfo.Id)}))})})}}]),n}(r.Component),A=n(16),R=n.n(A),E=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsx)("center",{className:R.a.question,children:Object(c.jsx)("h5",{className:R.a.text,children:this.props.text})})}}]),n}(r.Component),T=n(10),D=n.n(T),U=n(28),W=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).getColor=function(e){var t=new U.a;c.setState({color:t.getColor(e)})},c.state={trending:e.currency,color:[],pixels:0},c.logo=a.a.createRef(),c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;b.a.subscribe("pixels",(function(t,n){e.setState({pixels:n.pixels})})),this.image=this.logo.current,this.imgOnTime=this.logo.current,this.image.addEventListener("load",(function(){return e.getColor(e.image)}),!1),this.interval=setInterval((function(){e.imgOnTime.addEventListener("load",(function(){window.alert("INFORMA AL CREADOR SI VES ESTA VENTANA EMERGENTE"),e.getColor(e.imgOnTime)}),!1)}),7e3)}},{key:"componentWillUnmount",value:function(){var e=this;this.image.removeEventListener("load",(function(){return e.getColor(e.image)}),!1),this.interval&&(this.imgOnTime.removeEventListener("load",(function(){window.alert("INFORMA AL CREADOR SI VES ESTA VENTANA EMERGENTE"),e.getColor(e.imgOnTime)}),!1),clearInterval(this.interval)),b.a.unsubscribe("pixels")}},{key:"render",value:function(){var e=255-this.state.color[0],t=255-this.state.color[1],n=255-this.state.color[2],r=.5*(Math.max(e,t,n)+Math.min(e,t,n));if(r>127)var a=0;else a=255;var i=this.state.trending.logo,s="https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url="+encodeURIComponent(i);return Object(c.jsx)("div",{className:D.a.background,style:{backgroundColor:"rgb(".concat(e,", ").concat(t,", ").concat(n,")"),padding:"0 0 ".concat(280+this.state.pixels,"px 0")},children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col s12 m6",children:Object(c.jsxs)("div",{className:D.a.illustration,children:[Object(c.jsx)("img",{src:s,alt:"currency-logo",className:D.a.imgLogo,crossOrigin:"Anonymous",ref:this.logo}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("h3",{className:D.a.price,style:{color:"rgb(".concat(a-e,", ").concat(a-t,", ").concat(a-n,")")},children:this.state.trending.price})]})}),Object(c.jsx)("div",{className:"col s12 m6",children:Object(c.jsx)("div",{className:D.a.marketing,children:Object(c.jsxs)("div",{style:{width:"211px"},children:[Object(c.jsxs)("h2",{className:D.a.marketingLabel,style:{color:"rgb(".concat(a-e,", ").concat(a-t,", ").concat(a-n,")")},children:[this.state.trending.name," ",Object(c.jsx)("br",{}),"is",Object(c.jsx)("span",{className:D.a.textRage,children:" growing"})]}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{className:"".concat(D.a.investBtn),style:{color:"rgb(".concat(r-e,", ").concat(r-t,", ").concat(r-n,")"),background:"rgb(".concat(e,", ").concat(t,", ").concat(n,")"),border:"4px solid rgb(".concat(r-e,", ").concat(r-t,", ").concat(r-n,")")},children:"invest now"})]})})})]})})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.trending.price!==e.currency.price?{trending:e.currency}:null}}]),n}(r.PureComponent),L=n(11),P=n.n(L),M=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).requestInfo=function(){var e=c.state.trending.symbol;I.a.post("/info-trending",{sym:e}).then((function(e){var t=e.data.message,n=e.data.url,r=t.split("."),a=t.split(".").indexOf(" More information can be found at https://www");c.setState({info:r.slice(0,a).join(".")+".",url:n})})).catch((function(e){c.setState({info:"An error occurred while receiving data from the Backend."}),console.error(e)}))},c.calcHeigh=function(){var e=c.about.current.clientWidth,t=c.about.current.clientHeight,n={height_initial:c.state.height,heightnow:t,pixels:Math.abs(c.state.height-t)};return e<973&&e>580?n.pixels=100:e<574&&e>331?n.pixels=150:e<331&&(n.pixels=200),c.setState({pixels:n.pixels}),b.a.publish("pixels",n),n.pixels},c.state={trending:e.currency,info:"",url:"",height:458,pixels:0},c.about=a.a.createRef(),c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timeout=setTimeout((function(){return e.requestInfo()}),500),this.interval=setInterval((function(){return e.requestInfo()}),7e3),this.heightTimeout=setTimeout((function(){return e.calcHeigh()}),1e3),window.addEventListener("resize",(function(){return e.calcHeigh()}),!1)}},{key:"componentWillUnmount",value:function(){var e=this;clearTimeout(this.timeout),clearTimeout(this.heightTimeout),clearInterval(this.interval),window.removeEventListener("resize",(function(){return e.calcHeigh()}),!1)}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:P.a.about,ref:this.about,style:{top:"".concat(-222-this.state.pixels,"px")},children:[Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col s12",children:Object(c.jsxs)("center",{children:[Object(c.jsxs)("span",{className:P.a.ask,children:["What is ",this.state.trending.name,"?"]}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{})]})})}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col s12 l4",children:[Object(c.jsx)("div",{className:P.a.logo,children:Object(c.jsx)("img",{src:this.state.trending.logo,className:"circle responsive-img ".concat(P.a.img),alt:"Logo"})}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{})]}),Object(c.jsx)("div",{className:"col s12 l8",children:""===this.state.info?"Loading info...":Object(c.jsxs)(r.Fragment,{children:[Object(c.jsx)("p",{className:P.a.info,children:this.state.info}),Object(c.jsxs)("span",{className:P.a.url,children:["You can visit the Official Website at ",Object(c.jsx)("a",{href:this.state.url,target:"_blank",rel:"noreferrer",children:this.state.url})]})]})})]})]})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.trending.price!==e.currency.price?{trending:e.currency}:null}}]),n}(r.PureComponent),F=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).state={switcher:!1,trending:e.trending},c}return Object(l.a)(n,[{key:"render",value:function(){return this.state.switcher?Object(c.jsxs)(r.Fragment,{children:[Object(c.jsx)(E,{text:"What to invest in now?"}),Object(c.jsx)(W,{currency:this.state.trending}),Object(c.jsx)(M,{currency:this.state.trending})]}):null}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.switch?{switcher:!0,trending:e.trending}:null}}]),n}(r.Component),H=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={currencyTrending:{},apiOn:!1},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;b.a.subscribe("currency-trending",(function(t,n){e.setState({currencyTrending:n})})),b.a.subscribe("api-on",(function(t,n){e.setState({apiOn:n})}))}},{key:"componentWillUnmount",value:function(){b.a.unsubscribe("currency-trending"),b.a.unsubscribe("api-on")}},{key:"render",value:function(){return Object(c.jsxs)(r.Fragment,{children:[Object(c.jsx)(O,{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)(S,{}),Object(c.jsx)(F,{switch:this.state.apiOn,trending:this.state.currencyTrending})]})}}]),n}(r.Component);s.a.render(Object(c.jsx)(H,{}),document.getElementById("root"))},8:function(e,t,n){e.exports={row:"Currency_row__22CLu",currency:"Currency_currency__2gTby",logo:"Currency_logo__1CwOc",name:"Currency_name__1ob3m",graphic:"Currency_graphic__3UmOw",canvas:"Currency_canvas__34X7z",porcent:"Currency_porcent__fKjba",hour:"Currency_hour__3WFU4"}},9:function(e,t,n){e.exports={sidenav:"Header_sidenav__80Y4s",navBar:"Header_navBar__33zEn",header:"Header_header__2MtNv",navWrapper:"Header_navWrapper__3KtVW",divLogo:"Header_divLogo__1efgI",logoImg:"Header_logoImg__SrPwe",nav:"Header_nav__23DbK"}}},[[56,1,2]]]);
//# sourceMappingURL=main.90ac5aed.chunk.js.map