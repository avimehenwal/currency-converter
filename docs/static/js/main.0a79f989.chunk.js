(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),s=n(15),a=n.n(s),i=(n(22),n(23),n(3)),o=n.n(i),u=n(4),j=n(6),l=n(0),b=["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTC","BTN","BWP","BYN","BZD","CAD","CDF","CHF","CLF","CLP","CNH","CNY","COP","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GGP","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","IMP","INR","IQD","IRR","ISK","JEP","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MRU","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","SSP","STD","STN","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VES","VND","VUV","WST","XAF","XAG","XAU","XCD","XDR","XOF","XPD","XPF","XPT","YER","ZAR","ZMW","ZWL"],h=function(e){var t=e.name;return Object(l.jsx)("select",{name:t,id:t,required:!0,children:b.map((function(e){return Object(l.jsx)("option",{value:e,children:e},e)}))})},D=n(16),O=n(17),d=n.n(O),S=new function e(){var t=this;Object(D.a)(this,e),this.api=void 0,this.baseURL="https://api.exchangerate.host",this.timeout=1e6,this.headers={"Content-Type":"application/json"},this.getCall=function(){var e=Object(u.a)(o.a.mark((function e(n){var r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.get("/latest",{params:n});case 3:return r=e.sent,e.next=6,r.data;case 6:return c=e.sent,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),this.convertCurrency=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{base:"USD",symbols:"USD,EUR,CZK",amount:1200,places:2};return t.getCall(e)},this.api=d.a.create({baseURL:this.baseURL,timeout:this.timeout,headers:this.headers})},p=function(){var e=Object(r.useState)(),t=Object(j.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(),a=Object(j.a)(s,2),i=a[0],b=a[1];return Object(l.jsxs)("section",{className:"card",children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("h3",{children:[null===n||void 0===n?void 0:n.amount," ",null===n||void 0===n?void 0:n.base," \u2192 equals  "]}),Object(l.jsxs)("h2",{children:[i," ",null===n||void 0===n?void 0:n.symbols]})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("form",{name:"converter",onSubmit:function(e){var t=e.target.elements,n=t.source,r=t.amount,s=t.target,a={base:n.value,symbols:s.value,amount:r.value};c(a),function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.convertCurrency(a);case 2:t=e.sent,b(t.rates[a.symbols]),console.dir(i);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),e.preventDefault()},children:[Object(l.jsx)("label",{htmlFor:"source",children:"Source "}),Object(l.jsx)(h,{name:"source"}),Object(l.jsx)("input",{name:"amount",type:"number"}),Object(l.jsx)(h,{name:"target"}),Object(l.jsx)("label",{htmlFor:"target",children:" Target"}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"submit",value:"convert"}),Object(l.jsx)("input",{type:"reset"})]}),Object(l.jsx)("br",{}),Object(l.jsx)("pre",{className:"footer",children:JSON.stringify(n,null,0)})]})};var v=function(){return Object(l.jsxs)("div",{className:"container center",children:[Object(l.jsx)("header",{children:Object(l.jsx)("h1",{children:"Currency Converter App"})}),Object(l.jsx)("main",{children:Object(l.jsx)(p,{})}),Object(l.jsx)("footer",{children:Object(l.jsx)("h6",{children:"built with love by avi"})})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),R()}},[[44,1,2]]]);
//# sourceMappingURL=main.0a79f989.chunk.js.map