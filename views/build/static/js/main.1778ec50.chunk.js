(this.webpackJsonpviews=this.webpackJsonpviews||[]).push([[0],{10:function(e,t,r){e.exports={background:"Trending_background__14XGY",illustration:"Trending_illustration__1_DON",imgLogo:"Trending_imgLogo__1EhUJ",price:"Trending_price__3NQnm",marketing:"Trending_marketing__v6dy5",marketingLabel:"Trending_marketingLabel__3xR21",textRage:"Trending_textRage__3jbFK",investBtn:"Trending_investBtn__2uTzT"}},11:function(e,t,r){e.exports={about:"About_about__2NXYf",logo:"About_logo__1vB83",img:"About_img__2NsCf",ask:"About_ask__2GaUv",info:"About_info__3CZyH",url:"About_url__6nHJt"}},16:function(e,t,r){e.exports={question:"Question_question__3S6xO",text:"Question_text__3HGtF"}},26:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Junior_Jimenez_Desktop_infoBit_views_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),C_Users_Junior_Jimenez_Desktop_infoBit_views_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),C_Users_Junior_Jimenez_Desktop_infoBit_views_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),C_Users_Junior_Jimenez_Desktop_infoBit_views_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_About_module_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(11),_About_module_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_About_module_css__WEBPACK_IMPORTED_MODULE_6__),axios__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(14),axios__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__),About=function(_Component){Object(C_Users_Junior_Jimenez_Desktop_infoBit_views_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(About,_Component);var _super=Object(C_Users_Junior_Jimenez_Desktop_infoBit_views_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(About);function About(props){var _this;return Object(C_Users_Junior_Jimenez_Desktop_infoBit_views_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,About),_this=_super.call(this,props),_this.requestInfo=function(){var symbol=_this.state.trending.symbol;axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?symbol=".concat(symbol),{headers:{"X-CMC_PRO_API_KEY":"dca0b296-abb2-482f-887e-2f0757bc3767","Access-Control-Allow-Origin":"*"}}).then((function(resp){var info=eval("resp.data.data.".concat(symbol,".description")),url=eval("resp.data.data.".concat(symbol,".urls.website[0]")),arrayInfo=info.split("."),index=info.split(".").indexOf(" More information can be found at https://www");_this.setState({info:arrayInfo.slice(0,index).join(".")+".",url:url})})).catch((function(e){return console.log("Something has get out wrong. "+e)}))},_this.state={trending:props.currency,info:"",url:""},_this}return Object(C_Users_Junior_Jimenez_Desktop_infoBit_views_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(About,[{key:"componentDidMount",value:function(){var e=this;this.timeout=setTimeout((function(){return e.requestInfo()}),500),this.interval=setInterval((function(){return e.requestInfo()}),7e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),clearInterval(this.interval)}},{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:_About_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.about,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"row",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"col s12",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("center",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span",{className:_About_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.ask,children:["What is ",this.state.trending.name,"?"]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br",{})]})})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"row",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"col s12 l4",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:_About_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.logo,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img",{src:this.state.trending.logo,className:"circle responsive-img ".concat(_About_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.img),alt:"Logo"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br",{})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"col s12 l8",children:""===this.state.info?"Loading info...":Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p",{className:_About_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.info,children:this.state.info}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span",{className:_About_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.url,children:["You can visit the Official Website at ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a",{href:this.state.url,target:"_blank",rel:"noreferrer",children:this.state.url})]})]})})]})]})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.trending.price!==e.currency.price?{trending:e.currency}:null}}]),About}(react__WEBPACK_IMPORTED_MODULE_5__.Component);__webpack_exports__.a=About},57:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(1),c=r.n(a),s=r(27),i=r.n(s),_=r(2),o=r(3),l=r(5),u=r(4),d=r(6),b=r.n(d),j=(r(35),r(9)),h=r.n(j),m=r.p+"static/media/infoBit-logo-black.f5eb40e9.png",O=r(13),p=r.n(O),v=(r(37),function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(e){var n;return Object(_.a)(this,r),(n=t.call(this,e)).sideNav=function(){return p.a.Sidenav.init(n.mobile.current,{edge:"right"})},n.mobile=c.a.createRef(),n}return Object(o.a)(r,[{key:"componentDidMount",value:function(){window.addEventListener("DOMContentLoaded",this.sideNav,!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("DOMContentLoaded",this.sideNav,!1)}},{key:"render",value:function(){return Object(n.jsx)("header",{className:h.a.header,children:Object(n.jsxs)("div",{className:"navbar-fixed",style:{height:"100%"},children:[Object(n.jsxs)("nav",{className:h.a.navBar,children:[Object(n.jsxs)("div",{className:"nav-wrapper ".concat(h.a.navWrapper),children:[Object(n.jsx)("div",{className:"brand-logo ".concat(h.a.divLogo),children:Object(n.jsx)("img",{src:m,alt:"infoBit",className:"left ".concat(h.a.logoImg)})}),Object(n.jsx)("a",{href:"#!","data-target":"mobile-demo",className:"sidenav-trigger hide-on-med-and-up right",style:{height:"100%",display:"flex",alignItems:"center"},children:Object(n.jsx)("i",{className:"material-icons",style:{color:"black",fontSize:"30px"},children:"menu"})}),Object(n.jsxs)("ul",{className:"right hide-on-med-and-down ".concat(h.a.nav),children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"sass.html",children:"Cryptocurrencies"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"badges.html",children:"Trending"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"collapsible.html",children:"About"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"mobile.html",children:"Portals"})})]})]}),Object(n.jsx)("div",{className:"nav-content",style:{display:"flex",height:"50%"},children:Object(n.jsxs)("ul",{className:"hide-on-small-only hide-on-large-only ".concat(h.a.nav),children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"sass.html",children:"Cryptocurrencies"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"badges.html",children:"Trending"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"collapsible.html",children:"About"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"mobile.html",children:"Portals"})})]})})]}),Object(n.jsxs)("ul",{className:"sidenav ".concat(h.a.sidenav),id:"mobile-demo",ref:this.mobile,children:[Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"sass.html",children:"Cryptocurrencies"})}),Object(n.jsx)("br",{}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"badges.html",children:"Trending"})}),Object(n.jsx)("br",{}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"collapsible.html",children:"About"})}),Object(n.jsx)("br",{}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"mobile.html",children:"Portals"})})]})]})})}}]),r}(a.Component)),x=r(12),f=r(8),g=r.n(f),E=r(28),D=r.n(E),C=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(e){var n;return Object(_.a)(this,r),(n=t.call(this,e)).tooltip=function(){return p.a.Tooltip.init(n.porcent.current)},n.trade=function(){var e=n.state.currency.RAW.USD.PRICE,t=n.state.trading;t.shift(),t.push(e),n.setState({trading:t})},n.tradeGraphic=function(){var e=n.graphic.current,t=n.state.trading,r=t[0],a=t[1],c=t[2],s=t[3],i=t[4],_=t[5],o=t[6],l=e.getContext("2d");new D.a(l,{type:"line",data:{labels:["6","5","4","3","2","1","Price Now"],datasets:[{data:[r,a,c,s,i,_,o],backgroundColor:["rgba(141, 195, 81, 0.2)","rgba(141, 195, 81, 0.2)","rgba(141, 195, 81, 0.2)","rgba(141, 195, 81, 0.2)","rgba(141, 195, 81, 0.2)","rgba(141, 195, 81, 0.2)","rgba(141, 195, 81, 0.2)"],borderColor:["rgba(141, 195, 81, 1)","rgba(141, 195, 81, 1)","rgba(141, 195, 81, 1)","rgba(141, 195, 81, 1)","rgba(141, 195, 81, 1)","rgba(141, 195, 81, 1)","rgba(141, 195, 81, 1)"],borderWidth:1}]},options:{scales:{yAxes:[{display:!1}],xAxes:[{display:!1}]},legend:{display:!1},tooltips:{enabled:!1},events:[""]}})},n.publishCurrency=function(){var e=n.state.currency,t=e.RAW.USD.PRICE/e.RAW.USD.LOWDAY*100-100,r=n.roundOutPorcent(t,2);b.a.publish("currency-data-".concat(n.props.index),{name:e.CoinInfo.FullName,logo:"https://www.cryptocompare.com".concat(e.CoinInfo.ImageUrl),price:"$".concat(new Intl.NumberFormat("en-US").format(e.RAW.USD.PRICE)),porcent:r,symbol:e.CoinInfo.Name})},n.roundOutPorcent=function(e,t){var r=Math.pow(10,t);return Math.round(e*r)/r},n.state={currency:e.data,trading:[e.price,e.price,e.price,e.price,e.price,e.price,e.price]},n.graphic=c.a.createRef(),n.porcent=c.a.createRef(),n}return Object(o.a)(r,[{key:"shouldComponentUpdate",value:function(e,t){return e.data.RAW.USD.PRICE!==this.props.data.RAW.USD.PRICE}},{key:"componentDidMount",value:function(){var e=this;this.trade(),this.tradeGraphic(),this.publishCurrency(),window.addEventListener("DOMContentLoaded",this.tooltip(),!1),this.currencyInterval=setInterval((function(){return e.publishCurrency()}),7e3)}},{key:"componentDidUpdate",value:function(){this.trade(),this.tradeGraphic()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("DOMContentLoaded",this.tooltip(),!1),clearInterval(this.currencyInterval)}},{key:"render",value:function(){var e=this.state.currency,t=e.RAW.USD.PRICE/e.RAW.USD.LOWDAY*100-100,r=this.roundOutPorcent(t,2);return Object(n.jsx)("div",{className:"col s12 m6 l4",children:Object(n.jsx)("div",{className:"card ".concat(g.a.currency),children:Object(n.jsxs)("div",{className:"row ".concat(g.a.row),children:[Object(n.jsx)("div",{className:"col s4",children:Object(n.jsxs)("div",{className:"row ".concat(g.a.row),children:[Object(n.jsx)("div",{className:"col s12",children:Object(n.jsx)("img",{src:"https://www.cryptocompare.com/".concat(e.CoinInfo.ImageUrl),alt:"currency-logo",className:g.a.logo})}),Object(n.jsx)("div",{className:"col s12",children:Object(n.jsx)("h6",{className:g.a.name,children:e.CoinInfo.FullName})})]})}),Object(n.jsx)("div",{className:"col s8",children:Object(n.jsxs)("div",{className:"row ".concat(g.a.row),children:[Object(n.jsx)("div",{className:"col s12 ".concat(g.a.graphic),children:Object(n.jsx)("canvas",{ref:this.graphic,className:g.a.canvas,children:Object(n.jsxs)("h5",{children:["$",new Intl.NumberFormat("en-US").format(e.RAW.USD.PRICE)]})})}),Object(n.jsx)("div",{className:"col s12",children:Object(n.jsxs)("h6",{className:g.a.porcent,ref:this.porcent,"data-position":"left","data-tooltip":"Price Now: $".concat(new Intl.NumberFormat("en-US").format(e.RAW.USD.PRICE)),style:{color:1===Math.sign(r)?"#169E4E":"#EF0303"},children:[r,"%",Object(n.jsx)("span",{className:g.a.hour,children:" 24h"})]})})]})})]})})})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.currency.RAW.USD.PRICE!==e.data.RAW.USD.PRICE?{currency:e.data}:null}}]),r}(a.Component),P=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(e){var n;return Object(_.a)(this,r),(n=t.call(this,e)).state={timeOver:!1},n}return Object(o.a)(r,[{key:"componentDidMount",value:function(){var e=this;this.timeout=setTimeout((function(){e.setState({timeOver:!0})}),4e4)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout)}},{key:"render",value:function(){return this.state.timeOver?Object(n.jsx)("div",{className:"col s12",children:Object(n.jsx)("div",{className:"card",style:{padding:"115px 50px",borderRadius:"25px"},children:Object(n.jsxs)("center",{children:[Object(n.jsx)("h1",{style:{color:"#db4437"},children:"Error 404 Not Found"}),Object(n.jsx)("h4",{style:{color:"darkgray"},children:"The API has expired, contact with us to resolve it."})]})})}):Object(n.jsx)("div",{className:"col s12",children:Object(n.jsxs)("div",{className:"card",style:{padding:"115px 50px",borderRadius:"25px"},children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"preloader-wrapper small active",style:{display:"inline-block"},children:Object(n.jsxs)("div",{className:"spinner-layer spinner-red-only",children:[Object(n.jsx)("div",{className:"circle-clipper left",children:Object(n.jsx)("div",{className:"circle"})}),Object(n.jsx)("div",{className:"gap-patch",children:Object(n.jsx)("div",{className:"circle"})}),Object(n.jsx)("div",{className:"circle-clipper right",children:Object(n.jsx)("div",{className:"circle"})})]})}),Object(n.jsx)("h3",{style:{color:"#db4437"},children:"Error connecting to the Market :/"})]}),Object(n.jsx)("h4",{style:{color:"darkgray"},children:"We are working to fix it :v"})]})})}}]),r}(a.Component),y=r(14),M=r.n(y),A=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(e){var n;return Object(_.a)(this,r),(n=t.call(this,e)).requestApi=function(){M.a.get("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD&api_key=".concat("46236138e773f7585bc866aa0bf1cc1e3163a8157d2d3d40dc709343bcccc852")).then((function(e){return n.setState({currencies:e.data.Data.slice(0,6)})})).catch((function(e){return console.log("Fallo al consumir la API. "+e)}))},n.state={currencies:[],dataCurrencies:[]},n}return Object(o.a)(r,[{key:"componentDidMount",value:function(){var e=this;this.requestApi(),this.interval=setInterval((function(){return e.requestApi()}),7e3),b.a.subscribe("currency-data-0",(function(t,r){e.setState({dataCurrencies:[].concat(Object(x.a)(e.state.dataCurrencies),[r])})})),b.a.subscribe("currency-data-1",(function(t,r){e.setState({dataCurrencies:[].concat(Object(x.a)(e.state.dataCurrencies),[r])})})),b.a.subscribe("currency-data-2",(function(t,r){e.setState({dataCurrencies:[].concat(Object(x.a)(e.state.dataCurrencies),[r])})})),b.a.subscribe("currency-data-3",(function(t,r){e.setState({dataCurrencies:[].concat(Object(x.a)(e.state.dataCurrencies),[r])})})),b.a.subscribe("currency-data-4",(function(t,r){e.setState({dataCurrencies:[].concat(Object(x.a)(e.state.dataCurrencies),[r])})})),b.a.subscribe("currency-data-5",(function(t,r){e.setState({dataCurrencies:[].concat(Object(x.a)(e.state.dataCurrencies),[r])});var n=e.state.dataCurrencies;if(6===n.length){var a=n.sort((function(e,t){return t.porcent-e.porcent}));b.a.publish("currency-trending",a[0])}})),this.intervalRemoval=setInterval((function(){return e.setState({dataCurrencies:[]})}),7e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval),clearInterval(this.intervalRemoval),b.a.clearAllSubscriptions()}},{key:"render",value:function(){return 6===this.state.dataCurrencies.length&&b.a.publish("api-on",!0),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:0===this.state.currencies.length?Object(n.jsx)(P,{}):this.state.currencies.map((function(e,t){return Object(n.jsx)(C,{data:e,price:e.RAW.USD.PRICE,index:t},e.CoinInfo.Id)}))})})}}]),r}(a.Component),I=r(16),U=r.n(I),R=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){return Object(_.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){return Object(n.jsx)("center",{className:U.a.question,children:Object(n.jsx)("h5",{className:U.a.text,children:"What to invest in now?"})})}}]),r}(a.Component),w=r(10),N=r.n(w),W=r(29),k=r.n(W),L=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(e){var n;return Object(_.a)(this,r),(n=t.call(this,e)).getColorFromLogo=function(e){var t=new k.a;document.addEventListener("load",(function(){return t.getColor(e)}))},n.state={trending:e.currency},n.logo=c.a.createRef(),n}return Object(o.a)(r,[{key:"render",value:function(){return Object(n.jsx)("div",{className:N.a.background,children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col s12 m6",children:Object(n.jsxs)("div",{className:N.a.illustration,children:[Object(n.jsx)("img",{src:this.state.trending.logo,alt:"currency-logo",className:N.a.imgLogo,ref:this.logo}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("h3",{className:N.a.price,children:this.state.trending.price})]})}),Object(n.jsx)("div",{className:"col s12 m6",children:Object(n.jsx)("div",{className:N.a.marketing,children:Object(n.jsxs)("div",{style:{width:"211px"},children:[Object(n.jsxs)("h2",{className:N.a.marketingLabel,children:[this.state.trending.name," ",Object(n.jsx)("br",{}),"is",Object(n.jsx)("span",{className:N.a.textRage,children:" growing"})]}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{className:"".concat(N.a.investBtn),children:"invest now"})]})})})]})})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.trending.price!==e.currency.price?{trending:e.currency}:null}}]),r}(a.Component),T=r(26),B=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(e){var n;return Object(_.a)(this,r),(n=t.call(this,e)).state={switcher:!1,trending:e.trending},n}return Object(o.a)(r,[{key:"render",value:function(){return this.state.switcher?Object(n.jsxs)(a.Fragment,{children:[Object(n.jsx)(R,{}),Object(n.jsx)(L,{currency:this.state.trending}),Object(n.jsx)(T.a,{currency:this.state.trending})]}):null}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.switch?{switcher:!0,trending:e.trending}:null}}]),r}(a.Component),K=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){var e;return Object(_.a)(this,r),(e=t.call(this)).state={currencyTrending:{},apiOn:!1},e}return Object(o.a)(r,[{key:"componentDidMount",value:function(){var e=this;b.a.subscribe("currency-trending",(function(t,r){e.setState({currencyTrending:r})})),b.a.subscribe("api-on",(function(t,r){e.setState({apiOn:r})}))}},{key:"componentWillUnmount",value:function(){b.a.unsubscribe("currency-trending"),b.a.unsubscribe("api-on")}},{key:"render",value:function(){return Object(n.jsxs)(a.Fragment,{children:[Object(n.jsx)(v,{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(A,{}),Object(n.jsx)(B,{switch:this.state.apiOn,trending:this.state.currencyTrending})]})}}]),r}(a.Component);i.a.render(Object(n.jsx)(K,{}),document.getElementById("root"))},8:function(e,t,r){e.exports={row:"Currency_row__22CLu",currency:"Currency_currency__2gTby",logo:"Currency_logo__1CwOc",name:"Currency_name__1ob3m",graphic:"Currency_graphic__3UmOw",canvas:"Currency_canvas__34X7z",porcent:"Currency_porcent__fKjba",hour:"Currency_hour__3WFU4"}},9:function(e,t,r){e.exports={sidenav:"Header_sidenav__80Y4s",navBar:"Header_navBar__33zEn",header:"Header_header__2MtNv",navWrapper:"Header_navWrapper__3KtVW",divLogo:"Header_divLogo__1efgI",logoImg:"Header_logoImg__SrPwe",nav:"Header_nav__23DbK"}}},[[57,1,2]]]);
//# sourceMappingURL=main.1778ec50.chunk.js.map