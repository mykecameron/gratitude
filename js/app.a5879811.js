(function(e){function t(t){for(var r,c,a=t[0],i=t[1],u=t[2],d=0,l=[];d<a.length;d++)c=a[d],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&l.push(s[c][0]),s[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(l.length)l.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==s[i]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},s={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/gratitude/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var p=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3e8e":function(e,t,n){},4749:function(e,t,n){"use strict";n("fd29")},"4f69":function(e,t,n){"use strict";n("e49c")},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("5530"),s=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("7a23")),o=n("cc26"),c=n.n(o),a=Object(s["d"])("h1",{class:"main-header"},"Gratitude!",-1),i=Object(s["d"])("h2",{class:"secondary-header"},"a daily gratitude log",-1),u={class:"prompt-container"},p=Object(s["d"])("footer",{class:"footer"},[Object(s["d"])("a",{href:"https://github.com/mykecameron/gratitude"},[Object(s["d"])("img",{src:c.a,class:"github",title:"Check it out on Github!",alt:"Github logo"})])],-1);function d(e,t,n,r,o,c){var d=Object(s["j"])("Gratitude"),l=Object(s["j"])("ResponseHistory");return Object(s["g"])(),Object(s["c"])(s["a"],null,[a,i,Object(s["d"])("div",u,[Object(s["f"])(d,{"onSave:response":c.refresh},null,8,["onSave:response"]),Object(s["f"])(l,{responses:o.responses},null,8,["responses"])]),p],64)}var l={class:"prompt"};function b(e,t,n,r,o,c){return Object(s["g"])(),Object(s["c"])(s["a"],null,[Object(s["d"])("div",l,[Object(s["e"])(Object(s["k"])(c.currentPrompt)+": ",1),Object(s["d"])("button",{onClick:t[0]||(t[0]=function(){return c.changePrompt&&c.changePrompt.apply(c,arguments)}),class:"refresh-button"},"↺")]),Object(s["m"])(Object(s["d"])("textarea",{autofocus:"",class:"response","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.response=e})},"\n  ",512),[[s["l"],o.response]]),Object(s["d"])("button",{onClick:t[2]||(t[2]=function(){return c.saveResponse&&c.saveResponse.apply(c,arguments)}),class:"save-button"},"Save Gratitude!")],64)}var h=["What I focused on today","Cute things I saw today","New things I tried today","Ways I supported others today","Ways I loved myself today","Fun things I did today","Ways I supported others today","Ways I challenged myself today","What inspired me today","What I let go of today"],f=n("d4ec"),j=n("bee2"),O=n("ade3"),v=n("f9c7"),m=(n("d81d"),n("e9c4"),function(){function e(){Object(f["a"])(this,e),Object(O["a"])(this,"STORAGE_KEY","gratitude-app")}return Object(j["a"])(e,[{key:"save",value:function(e){var t=this.all();t.unshift(e),localStorage.setItem(this.STORAGE_KEY,JSON.stringify(t))}},{key:"all",value:function(){return JSON.parse(localStorage.getItem(this.STORAGE_KEY))||[]}}]),e}()),A=function(){function e(t){var n=t.date,r=t.text,s=t.prompt;Object(f["a"])(this,e),Object(O["a"])(this,"date",void 0),Object(O["a"])(this,"text",""),Object(O["a"])(this,"prompt",""),this.date=n||Date.now(),this.text=r,this.prompt=s}return Object(j["a"])(e,[{key:"prettyDate",get:function(){var e=new Date(this.date);return e.toDateString()}},{key:"save",value:function(){Object(v["a"])(this.constructor,e,y).save(this)}}],[{key:"all",value:function(){var t=this;return Object(v["a"])(this,e,y).all().map((function(e){return new t(e)}))}},{key:"last",value:function(){return this.all()[0]}}]),e}();function g(){return new m}var y={get:g,set:void 0},I=function(){return Math.floor(Math.random()*h.length)},R={name:"Gratitude",computed:{currentPrompt:function(){return this.prompts[this.currentPromptIndex]}},data:function(){return{prompts:h,currentPromptIndex:I(),response:""}},emits:["save:response"],methods:{saveResponse:function(){var e=new A({prompt:this.currentPrompt,text:this.response});e.save(),this.response="",this.$emit("save:response",e)},changePrompt:function(){this.currentPromptIndex=I()}}},w=(n("4f69"),n("6b0d")),M=n.n(w);const k=M()(R,[["render",b],["__scopeId","data-v-44855083"]]);var E=k,S=function(e){return Object(s["i"])("data-v-a5b46caa"),e=e(),Object(s["h"])(),e},B=S((function(){return Object(s["d"])("h2",null," Past gratitude ",-1)})),T={class:"container"},Z=["disabled"],D={key:0,class:"response-content"},G={class:"prompt"},J={class:"response"},P={key:1},W=["disabled"];function x(e,t,n,r,o,c){return Object(s["g"])(),Object(s["c"])(s["a"],null,[B,Object(s["d"])("div",T,[Object(s["d"])("div",null,[Object(s["d"])("button",{onClick:t[0]||(t[0]=function(){return c.back&&c.back.apply(c,arguments)}),disabled:c.noPast},"☜",8,Z)]),c.hasResponses?(Object(s["g"])(),Object(s["c"])("div",D,[Object(s["d"])("div",G,Object(s["k"])(c.currentResponse.prettyDate)+" - "+Object(s["k"])(c.currentResponse.prompt)+": ",1),Object(s["d"])("div",J,Object(s["k"])(c.currentResponse.text),1)])):(Object(s["g"])(),Object(s["c"])("div",P,"Record some gratitude!")),Object(s["d"])("div",null,[Object(s["d"])("button",{onClick:t[1]||(t[1]=function(){return c.forward&&c.forward.apply(c,arguments)}),disabled:c.noFuture},"☞",8,W)])])],64)}var Y={name:"ResponseHistory",props:{responses:Array},computed:{currentResponse:function(){return this.responses[this.currentResponseIndex]},hasResponses:function(){return this.responses.length>0},noPast:function(){return this.currentResponseIndex>=this.responses.length-1},noFuture:function(){return this.currentResponseIndex<=0}},data:function(){return{currentResponseIndex:0}},methods:{back:function(){this.currentResponseIndex+=1},forward:function(){this.currentResponseIndex-=1}}};n("e99f");const N=M()(Y,[["render",x],["__scopeId","data-v-a5b46caa"]]);var U=N,Q={name:"App",components:{Gratitude:E,ResponseHistory:U},methods:{refresh:function(){this.responses=A.all()}},data:function(){return{responses:A.all()}}};n("4749");const H=M()(Q,[["render",d]]);var L=H;Object(s["b"])(Object(r["a"])({},L)).mount("#app")},cc26:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg=="},e49c:function(e,t,n){},e99f:function(e,t,n){"use strict";n("3e8e")},fd29:function(e,t,n){}});
//# sourceMappingURL=app.a5879811.js.map