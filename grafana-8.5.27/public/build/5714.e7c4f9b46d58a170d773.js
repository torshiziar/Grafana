"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[5714],{"./public/app/plugins/datasource/tempo/graphTransform.ts":(e,t,n)=>{n.d(t,{BC:()=>d,M7:()=>o,NZ:()=>c,Yt:()=>s,t3:()=>l,yf:()=>u});var r=n("./packages/grafana-data/src/index.ts"),a=n("./public/app/core/utils/tracing.ts");function o(e){const{nodes:t,edges:n}=function(e){const t=[],n=[],o=new r.DataFrameView(e),i=function(e){let t=0,n=1/0;for(let r=0;r<e.length;r++){const a=e.get(r);a.startTime<n&&(n=a.startTime),a.startTime+a.duration>t&&(t=a.startTime+a.duration)}return t-n}(o),s=(0,a.nO)((t=>{if(t>=e.length)return;const n=o.get(t);return{span:Object.assign({},n),id:n.spanID,parentIds:n.parentSpanID?[n.parentSpanID]:[]}}));for(let e=0;e<o.length;e++){var u;const c=o.get(e),l=s[c.spanID].children.map((e=>{const t=s[e].span;return[t.startTime,t.startTime+t.duration]})),d=(0,a.et)(l),p=c.duration-d,f=(0,a.fy)(c.duration,i,p);t.push({[r.NodeGraphDataFrameFieldNames.id]:c.spanID,[r.NodeGraphDataFrameFieldNames.title]:null!==(u=c.serviceName)&&void 0!==u?u:"",[r.NodeGraphDataFrameFieldNames.subTitle]:c.operationName,[r.NodeGraphDataFrameFieldNames.mainStat]:f.main,[r.NodeGraphDataFrameFieldNames.secondaryStat]:f.secondary,[r.NodeGraphDataFrameFieldNames.color]:p/i}),c.parentSpanID&&s[c.parentSpanID].span&&n.push({[r.NodeGraphDataFrameFieldNames.id]:c.parentSpanID+"--"+c.spanID,[r.NodeGraphDataFrameFieldNames.target]:c.spanID,[r.NodeGraphDataFrameFieldNames.source]:c.parentSpanID})}return{nodes:t,edges:n}}(e),[o,i]=(0,a.np)();for(const e of t)o.add(e);for(const e of n)i.add(e);return[o,i]}const i="traces_service_graph_request_server_seconds_sum",s="traces_service_graph_request_total",u="traces_service_graph_request_failed_total",c="traces_service_graph_request_server_seconds_bucket",l=[i,s,u,c];function d(e,t){const n=function(e){return e[0].data.reduce(((e,t)=>(e[t.refId]=new r.DataFrameView(t),e)),{})}(e),a={},o={};return p(n[s],"total",s,a,o),p(n[i],"seconds",i,a,o),p(n[u],"failed",u,a,o),function(e,t,n){const a=n.to.valueOf()-n.from.valueOf(),[o,i]=function(){function e(e,t){return new r.MutableDataFrame({name:e,fields:t,meta:{preferredVisualisationType:"nodeGraph"}})}const t=e("Nodes",[{name:r.NodeGraphDataFrameFieldNames.id},{name:r.NodeGraphDataFrameFieldNames.title,config:{displayName:"Service name"}},{name:r.NodeGraphDataFrameFieldNames.mainStat,config:{unit:"ms/r",displayName:"Average response time"}},{name:r.NodeGraphDataFrameFieldNames.secondaryStat,config:{unit:"r/sec",displayName:"Requests per second"}},{name:r.NodeGraphDataFrameFieldNames.arc+"success",config:{displayName:"Success",color:{fixedColor:"green",mode:r.FieldColorModeId.Fixed}}},{name:r.NodeGraphDataFrameFieldNames.arc+"failed",config:{displayName:"Failed",color:{fixedColor:"red",mode:r.FieldColorModeId.Fixed}}}]),n=e("Edges",[{name:r.NodeGraphDataFrameFieldNames.id},{name:r.NodeGraphDataFrameFieldNames.source},{name:r.NodeGraphDataFrameFieldNames.target},{name:r.NodeGraphDataFrameFieldNames.mainStat,config:{unit:"r",displayName:"Requests"}},{name:r.NodeGraphDataFrameFieldNames.secondaryStat,config:{unit:"ms/r",displayName:"Average response time"}}]);return[t,n]}();for(const t of Object.keys(e)){const n=e[t];o.add({[r.NodeGraphDataFrameFieldNames.id]:t,[r.NodeGraphDataFrameFieldNames.title]:t,[r.NodeGraphDataFrameFieldNames.mainStat]:n.total?n.seconds/n.total*1e3:Number.NaN,[r.NodeGraphDataFrameFieldNames.secondaryStat]:n.total?Math.round(n.total/(a/1e3)*100)/100:Number.NaN,[r.NodeGraphDataFrameFieldNames.arc+"success"]:n.total?(n.total-Math.min(n.failed||0,n.total))/n.total:1,[r.NodeGraphDataFrameFieldNames.arc+"failed"]:n.total?Math.min(n.failed||0,n.total)/n.total:0})}for(const e of Object.keys(t)){const n=t[e];i.add({[r.NodeGraphDataFrameFieldNames.id]:e,[r.NodeGraphDataFrameFieldNames.source]:n.source,[r.NodeGraphDataFrameFieldNames.target]:n.target,[r.NodeGraphDataFrameFieldNames.mainStat]:n.total,[r.NodeGraphDataFrameFieldNames.secondaryStat]:n.total?n.seconds/n.total*1e3:Number.NaN})}return{nodes:o,edges:i}}(a,o,t)}function p(e,t,n,r,a){if(!e)return;const o=`Value #${n}`;for(let n=0;n<e.length;n++){const i=e.get(n),s=`${i.client}_${i.server}`;a[s]?a[s][t]=(a[s][t]||0)+i[o]:a[s]={target:i.server,source:i.client,[t]:i[o]},r[i.server]?r[i.server][t]=(r[i.server][t]||0)+i[o]:r[i.server]={[t]:i[o]},r[i.client]||(r[i.client]={[t]:0})}}},"./public/app/plugins/datasource/tempo/resultTransformer.ts":(e,t,n)=>{n.d(t,{n4:()=>Ge,IM:()=>we,g9:()=>Ie,Jk:()=>Me,RY:()=>ye});var r="object"==typeof globalThis?globalThis:"object"==typeof self?self:"object"==typeof window?window:"object"==typeof n.g?n.g:{},a="1.1.0",o=/^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;var i=function(e){var t=new Set([e]),n=new Set,r=e.match(o);if(!r)return function(){return!1};var a=+r[1],i=+r[2],s=+r[3];if(null!=r[4])return function(t){return t===e};function u(e){return n.add(e),!1}function c(e){return t.add(e),!0}return function(e){if(t.has(e))return!0;if(n.has(e))return!1;var r=e.match(o);if(!r)return u(e);var l=+r[1],d=+r[2],p=+r[3];return null!=r[4]||a!==l?u(e):0===a?i===d&&s<=p?c(e):u(e):i<=d?c(e):u(e)}}(a),s=a.split(".")[0],u=Symbol.for("opentelemetry.js.api."+s),c=r;function l(e,t,n,r){var o;void 0===r&&(r=!1);var i=c[u]=null!==(o=c[u])&&void 0!==o?o:{version:a};if(!r&&i[e]){var s=new Error("@opentelemetry/api: Attempted duplicate registration of API: "+e);return n.error(s.stack||s.message),!1}if(i.version!==a){s=new Error("@opentelemetry/api: All API registration versions must match");return n.error(s.stack||s.message),!1}return i[e]=t,n.debug("@opentelemetry/api: Registered a global for "+e+" v"+"1.1.0."),!0}function d(e){var t,n,r=null===(t=c[u])||void 0===t?void 0:t.version;if(r&&i(r))return null===(n=c[u])||void 0===n?void 0:n[e]}function p(e,t){t.debug("@opentelemetry/api: Unregistering a global for "+e+" v"+"1.1.0.");var n=c[u];n&&delete n[e]}var f,m=function(){function e(e){this._namespace=e.namespace||"DiagComponentLogger"}return e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return g("debug",this._namespace,e)},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return g("error",this._namespace,e)},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return g("info",this._namespace,e)},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return g("warn",this._namespace,e)},e.prototype.verbose=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return g("verbose",this._namespace,e)},e}();function g(e,t,n){var r=d("diag");if(r)return n.unshift(t),r[e].apply(r,n)}!function(e){e[e.NONE=0]="NONE",e[e.ERROR=30]="ERROR",e[e.WARN=50]="WARN",e[e.INFO=60]="INFO",e[e.DEBUG=70]="DEBUG",e[e.VERBOSE=80]="VERBOSE",e[e.ALL=9999]="ALL"}(f||(f={}));var h=function(){function e(){function e(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r=d("diag");if(r)return r[e].apply(r,t)}}var t=this;t.setLogger=function(e,n){var r,a;if(void 0===n&&(n=f.INFO),e===t){var o=new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");return t.error(null!==(r=o.stack)&&void 0!==r?r:o.message),!1}var i=d("diag"),s=function(e,t){function n(n,r){var a=t[n];return"function"==typeof a&&e>=r?a.bind(t):function(){}}return e<f.NONE?e=f.NONE:e>f.ALL&&(e=f.ALL),t=t||{},{error:n("error",f.ERROR),warn:n("warn",f.WARN),info:n("info",f.INFO),debug:n("debug",f.DEBUG),verbose:n("verbose",f.VERBOSE)}}(n,e);if(i){var u=null!==(a=(new Error).stack)&&void 0!==a?a:"<failed to generate stacktrace>";i.warn("Current logger will be overwritten from "+u),s.warn("Current logger will overwrite one already registered from "+u)}return l("diag",s,t,!0)},t.disable=function(){p("diag",t)},t.createComponentLogger=function(e){return new m(e)},t.verbose=e("verbose"),t.debug=e("debug"),t.info=e("info"),t.warn=e("warn"),t.error=e("error")}return e.instance=function(){return this._instance||(this._instance=new e),this._instance},e}(),v=function(){function e(e){this._entries=e?new Map(e):new Map}return e.prototype.getEntry=function(e){var t=this._entries.get(e);if(t)return Object.assign({},t)},e.prototype.getAllEntries=function(){return Array.from(this._entries.entries()).map((function(e){return[e[0],e[1]]}))},e.prototype.setEntry=function(t,n){var r=new e(this._entries);return r._entries.set(t,n),r},e.prototype.removeEntry=function(t){var n=new e(this._entries);return n._entries.delete(t),n},e.prototype.removeEntries=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var r=new e(this._entries),a=0,o=t;a<o.length;a++){var i=o[a];r._entries.delete(i)}return r},e.prototype.clear=function(){return new e},e}();Symbol("BaggageEntryMetadata"),h.instance();function y(e){return void 0===e&&(e={}),new v(new Map(Object.entries(e)))}var N={get:function(e,t){if(null!=e)return e[t]},keys:function(e){return null==e?[]:Object.keys(e)}},b={set:function(e,t,n){null!=e&&(e[t]=n)}};function _(e){return Symbol.for(e)}var D,F=function e(t){var n=this;n._currentContext=t?new Map(t):new Map,n.getValue=function(e){return n._currentContext.get(e)},n.setValue=function(t,r){var a=new e(n._currentContext);return a._currentContext.set(t,r),a},n.deleteValue=function(t){var r=new e(n._currentContext);return r._currentContext.delete(t),r}},S=new F,T=function(e,t){for(var n=0,r=t.length,a=e.length;n<r;n++,a++)e[a]=t[n];return e},w=function(){function e(){}return e.prototype.active=function(){return S},e.prototype.with=function(e,t,n){for(var r=[],a=3;a<arguments.length;a++)r[a-3]=arguments[a];return t.call.apply(t,T([n],r))},e.prototype.bind=function(e,t){return t},e.prototype.enable=function(){return this},e.prototype.disable=function(){return this},e}(),I=function(e,t){for(var n=0,r=t.length,a=e.length;n<r;n++,a++)e[a]=t[n];return e},E="context",x=new w,k=function(){function e(){}return e.getInstance=function(){return this._instance||(this._instance=new e),this._instance},e.prototype.setGlobalContextManager=function(e){return l(E,e,h.instance())},e.prototype.active=function(){return this._getContextManager().active()},e.prototype.with=function(e,t,n){for(var r,a=[],o=3;o<arguments.length;o++)a[o-3]=arguments[o];return(r=this._getContextManager()).with.apply(r,I([e,t,n],a))},e.prototype.bind=function(e,t){return this._getContextManager().bind(e,t)},e.prototype._getContextManager=function(){return d(E)||x},e.prototype.disable=function(){this._getContextManager().disable(),p(E,h.instance())},e}();!function(e){e[e.NONE=0]="NONE",e[e.SAMPLED=1]="SAMPLED"}(D||(D={}));var R="0000000000000000",C="00000000000000000000000000000000",O={traceId:C,spanId:R,traceFlags:D.NONE},M=function(){function e(e){void 0===e&&(e=O),this._spanContext=e}return e.prototype.spanContext=function(){return this._spanContext},e.prototype.setAttribute=function(e,t){return this},e.prototype.setAttributes=function(e){return this},e.prototype.addEvent=function(e,t){return this},e.prototype.setStatus=function(e){return this},e.prototype.updateName=function(e){return this},e.prototype.end=function(e){},e.prototype.isRecording=function(){return!1},e.prototype.recordException=function(e,t){},e}(),A=_("OpenTelemetry Context Key SPAN");function G(e){return e.getValue(A)||void 0}function V(e,t){return e.setValue(A,t)}function L(e){return e.deleteValue(A)}function j(e,t){return V(e,new M(t))}function P(e){var t;return null===(t=G(e))||void 0===t?void 0:t.spanContext()}var U=/^([0-9a-f]{32})$/i,z=/^[0-9a-f]{16}$/i;function B(e){return n=e.traceId,U.test(n)&&n!==C&&(t=e.spanId,z.test(t)&&t!==R);var t,n}function Z(e){return new M(e)}var q=k.getInstance(),$=function(){function e(){}return e.prototype.startSpan=function(e,t,n){if(Boolean(null==t?void 0:t.root))return new M;var r,a=n&&P(n);return"object"==typeof(r=a)&&"string"==typeof r.spanId&&"string"==typeof r.traceId&&"number"==typeof r.traceFlags&&B(a)?new M(a):new M},e.prototype.startActiveSpan=function(e,t,n,r){var a,o,i;if(!(arguments.length<2)){2===arguments.length?i=t:3===arguments.length?(a=t,i=n):(a=t,o=n,i=r);var s=null!=o?o:q.active(),u=this.startSpan(e,a,s),c=V(s,u);return q.with(c,i,void 0,u)}},e}();var X,K,Y,H=new $,J=function(){function e(e,t,n,r){this._provider=e,this.name=t,this.version=n,this.options=r}return e.prototype.startSpan=function(e,t,n){return this._getTracer().startSpan(e,t,n)},e.prototype.startActiveSpan=function(e,t,n,r){var a=this._getTracer();return Reflect.apply(a.startActiveSpan,a,arguments)},e.prototype._getTracer=function(){if(this._delegate)return this._delegate;var e=this._provider.getDelegateTracer(this.name,this.version,this.options);return e?(this._delegate=e,this._delegate):H},e}(),W=new(function(){function e(){}return e.prototype.getTracer=function(e,t,n){return new $},e}()),Q=function(){function e(){}return e.prototype.getTracer=function(e,t,n){var r;return null!==(r=this.getDelegateTracer(e,t,n))&&void 0!==r?r:new J(this,e,t,n)},e.prototype.getDelegate=function(){var e;return null!==(e=this._delegate)&&void 0!==e?e:W},e.prototype.setDelegate=function(e){this._delegate=e},e.prototype.getDelegateTracer=function(e,t,n){var r;return null===(r=this._delegate)||void 0===r?void 0:r.getTracer(e,t,n)},e}();!function(e){e[e.NOT_RECORD=0]="NOT_RECORD",e[e.RECORD=1]="RECORD",e[e.RECORD_AND_SAMPLED=2]="RECORD_AND_SAMPLED"}(X||(X={})),function(e){e[e.INTERNAL=0]="INTERNAL",e[e.SERVER=1]="SERVER",e[e.CLIENT=2]="CLIENT",e[e.PRODUCER=3]="PRODUCER",e[e.CONSUMER=4]="CONSUMER"}(K||(K={})),function(e){e[e.UNSET=0]="UNSET",e[e.OK=1]="OK",e[e.ERROR=2]="ERROR"}(Y||(Y={}));var ee=new RegExp("^(?:[a-z][_0-9a-z-*/]{0,255}|[a-z0-9][_0-9a-z-*/]{0,240}@[a-z][_0-9a-z-*/]{0,13})$"),te=/^[ -~]{0,255}[!-~]$/,ne=/,|=/;!function(){function e(e){this._internalState=new Map,e&&this._parse(e)}e.prototype.set=function(e,t){var n=this._clone();return n._internalState.has(e)&&n._internalState.delete(e),n._internalState.set(e,t),n},e.prototype.unset=function(e){var t=this._clone();return t._internalState.delete(e),t},e.prototype.get=function(e){return this._internalState.get(e)},e.prototype.serialize=function(){var e=this;return this._keys().reduce((function(t,n){return t.push(n+"="+e.get(n)),t}),[]).join(",")},e.prototype._parse=function(e){e.length>512||(this._internalState=e.split(",").reverse().reduce((function(e,t){var n=t.trim(),r=n.indexOf("=");if(-1!==r){var a=n.slice(0,r),o=n.slice(r+1,t.length);(function(e){return ee.test(e)})(a)&&function(e){return te.test(e)&&!ne.test(e)}(o)&&e.set(a,o)}return e}),new Map),this._internalState.size>32&&(this._internalState=new Map(Array.from(this._internalState.entries()).reverse().slice(0,32))))},e.prototype._keys=function(){return Array.from(this._internalState.keys()).reverse()},e.prototype._clone=function(){var t=new e;return t._internalState=new Map(this._internalState),t}}();var re="trace",ae=function(){function e(){this._proxyTracerProvider=new Q,this.wrapSpanContext=Z,this.isSpanContextValid=B,this.deleteSpan=L,this.getSpan=G,this.getSpanContext=P,this.setSpan=V,this.setSpanContext=j}return e.getInstance=function(){return this._instance||(this._instance=new e),this._instance},e.prototype.setGlobalTracerProvider=function(e){var t=l(re,this._proxyTracerProvider,h.instance());return t&&this._proxyTracerProvider.setDelegate(e),t},e.prototype.getTracerProvider=function(){return d(re)||this._proxyTracerProvider},e.prototype.getTracer=function(e,t){return this.getTracerProvider().getTracer(e,t)},e.prototype.disable=function(){p(re,h.instance()),this._proxyTracerProvider=new Q},e}(),oe=function(){function e(){}return e.prototype.inject=function(e,t){},e.prototype.extract=function(e,t){return e},e.prototype.fields=function(){return[]},e}(),ie=_("OpenTelemetry Baggage Key");function se(e){return e.getValue(ie)||void 0}function ue(e,t){return e.setValue(ie,t)}function ce(e){return e.deleteValue(ie)}var le="propagation",de=new oe,pe=function(){function e(){this.createBaggage=y,this.getBaggage=se,this.setBaggage=ue,this.deleteBaggage=ce}return e.getInstance=function(){return this._instance||(this._instance=new e),this._instance},e.prototype.setGlobalPropagator=function(e){return l(le,e,h.instance())},e.prototype.inject=function(e,t,n){return void 0===n&&(n=b),this._getGlobalPropagator().inject(e,t,n)},e.prototype.extract=function(e,t,n){return void 0===n&&(n=N),this._getGlobalPropagator().extract(e,t,n)},e.prototype.fields=function(){return this._getGlobalPropagator().fields()},e.prototype.disable=function(){p(le,h.instance())},e.prototype._getGlobalPropagator=function(){return d(le)||de},e}();k.getInstance();ae.getInstance(),pe.getInstance(),h.instance();var fe="service.name",me=n("../../opt/drone/yarncache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/differenceInHours/index.js"),ge=n("../../opt/drone/yarncache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/formatDistance/index.js"),he=n("./packages/grafana-data/src/index.ts"),ve=n("./public/app/plugins/datasource/tempo/graphTransform.ts");function ye(e,t,n,r){return e.data.forEach(((a,o)=>{const i=function(e,t,n,r){const a=new he.MutableDataFrame({fields:[{name:"Time",type:he.FieldType.time,config:{custom:{width:150}}},{name:"traceID",type:he.FieldType.string,config:{displayNameFromDS:"Trace ID",custom:{width:300},links:[{title:"Click to open trace ${__value.raw}",url:"",internal:{datasourceUid:t,datasourceName:n,query:{query:"${__value.raw}"}}}]}},{name:"Message",type:he.FieldType.string}],meta:{preferredVisualisationType:"table"}});if(!e||0===r.length)return a;const o=e.fields.find((e=>e.type===he.FieldType.time));for(let t of e.fields){let e=!1;if(t.type===he.FieldType.string){const n=t.values.toArray();for(let t=0;t<n.length;t++){const i=n[t];if(i)for(let n of r){const r=i.match(n);if(r){const n=r[1],s=o?o.values.get(t):null;a.fields[0].values.add(s),a.fields[1].values.add(n),a.fields[2].values.add(i),e=!0}}}}if(e)break}return a}(a,t,n,r);e.data[o]=i})),e}function Ne(e){const t=atob(e);let n="";for(let e=0;e<t.length;e++){const r=t.charCodeAt(e).toString(16);n+=2===r.length?r:"0"+r}return n.length>16?n.slice(16):n}function be(e){const t=e.match(/\w{2}/g)||[];return btoa(t.map((function(e){return String.fromCharCode(parseInt(e,16))})).join(""))}function _e(e){if(e.stringValue)return e.stringValue;if(void 0!==e.boolValue)return Boolean(e.boolValue);if(void 0!==e.intValue)return Number.parseInt(e.intValue,10);if(e.doubleValue)return Number.parseFloat(e.doubleValue);if(e.arrayValue){const t=[];for(const n of e.arrayValue.values)t.push(_e(n));return t}return""}function De(e){const t=[];let n="OTLPResourceNoServiceName";if(!e)return{serviceName:n,serviceTags:t};for(const r of e.attributes)r.key===fe&&(n=r.value.stringValue||n),t.push({key:r.key,value:_e(r.value)});return{serviceName:n,serviceTags:t}}function Fe(e,t){const n=[];if(t&&(t.name&&n.push({key:"otel.library.name",value:t.name}),t.version&&n.push({key:"otel.library.version",value:t.version})),e.attributes)for(const t of e.attributes)n.push({key:t.key,value:_e(t.value)});if(e.status&&(e.status.code&&e.status.code!==Y.UNSET&&(n.push({key:"otel.status_code",value:Y[e.status.code]}),e.status.message&&n.push({key:"otel.status_description",value:e.status.message})),e.status.code===Y.ERROR&&n.push({key:"error",value:!0})),void 0!==e.kind){const t=e.kind.toString().toLowerCase().split("_");n.push({key:"span.kind",value:t.length?t[t.length-1]:e.kind.toString()})}return n}function Se(e){const t=[];if(e.links)for(const n of e.links){const{traceId:e,spanId:r}=n,a=[];if(n.attributes)for(const e of n.attributes)a.push({key:e.key,value:_e(e.value)});t.push({traceID:e,spanID:r,tags:a})}return t}function Te(e){const t=[];if(e.events)for(const n of e.events){const e=[];if(n.attributes)for(const t of n.attributes)e.push({key:t.key,value:_e(t.value)});t.push({fields:e,timestamp:n.timeUnixNano/1e6})}return t}function we(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=new he.MutableDataFrame({fields:[{name:"traceID",type:he.FieldType.string},{name:"spanID",type:he.FieldType.string},{name:"parentSpanID",type:he.FieldType.string},{name:"operationName",type:he.FieldType.string},{name:"serviceName",type:he.FieldType.string},{name:"serviceTags",type:he.FieldType.other},{name:"startTime",type:he.FieldType.number},{name:"duration",type:he.FieldType.number},{name:"logs",type:he.FieldType.other},{name:"references",type:he.FieldType.other},{name:"tags",type:he.FieldType.other}],meta:{preferredVisualisationType:"trace",custom:{traceFormat:"otlp"}}});try{for(const t of e){const{serviceName:e,serviceTags:r}=De(t.resource);for(const a of t.instrumentationLibrarySpans)for(const t of a.spans)n.add({traceID:Ne(t.traceId),spanID:Ne(t.spanId),parentSpanID:Ne(t.parentSpanId||""),operationName:t.name||"",serviceName:e,serviceTags:r,startTime:t.startTimeUnixNano/1e6,duration:(t.endTimeUnixNano-t.startTimeUnixNano)/1e6,tags:Fe(t,a.instrumentationLibrary),logs:Te(t),references:Se(t)})}}catch(e){return console.error(e),{error:{message:"JSON is not valid OpenTelemetry format: "+e},data:[]}}let r=[n];return t&&r.push(...(0,ve.M7)(n)),{data:r}}function Ie(e){let t={batches:[]},n={};for(let o=0;o<e.length;o++){const i=e.get(o);n[i.serviceName]||(n[i.serviceName]=t.batches.length,t.batches.push({resource:{attributes:[],droppedAttributesCount:0},instrumentationLibrarySpans:[{spans:[]}]}));let s=n[i.serviceName];if(0===t.batches[s].resource.attributes.length&&(t.batches[s].resource.attributes=xe(i.serviceTags)),!t.batches[s].instrumentationLibrarySpans[0].instrumentationLibrary){var r;let e=null===(r=i.tags.find((e=>"otel.library.name"===e.key)))||void 0===r?void 0:r.value;var a;if(e)t.batches[s].instrumentationLibrarySpans[0].instrumentationLibrary={name:e,version:null===(a=i.tags.find((e=>"otel.library.version"===e.key)))||void 0===a?void 0:a.value}}t.batches[s].instrumentationLibrarySpans[0].spans.push({traceId:be(i.traceID.padStart(32,"0")),spanId:be(i.spanID),traceState:"",parentSpanId:be(i.parentSpanID||""),name:i.operationName,kind:Ee(i.tags),startTimeUnixNano:1e6*i.startTime,endTimeUnixNano:1e6*(i.startTime+i.duration),attributes:xe(i.tags),droppedAttributesCount:0,droppedEventsCount:0,droppedLinksCount:0,status:Re(i.tags),events:Ce(i.logs),links:Oe(i.references)})}return t}function Ee(e){var t;let n;switch(null===(t=e.find((e=>"span.kind"===e.key)))||void 0===t?void 0:t.value){case"server":n="SPAN_KIND_SERVER";break;case"client":n="SPAN_KIND_CLIENT";break;case"producer":n="SPAN_KIND_PRODUCER";break;case"consumer":n="SPAN_KIND_CONSUMER"}return n}function xe(e){return e.filter((e=>!["span.kind","otel.library.name","otel.libary.version","otel.status_description","otel.status_code"].includes(e.key))).reduce(((e,t)=>[...e,{key:t.key,value:ke(t)}]),[])}function ke(e){if("string"==typeof e.value)return{stringValue:e.value};if("boolean"==typeof e.value)return{boolValue:e.value};if("number"==typeof e.value)return e.value%1==0?{intValue:e.value}:{doubleValue:e.value};if("object"==typeof e.value&&Array.isArray(e.value)){const t=[];for(const n of e.value)t.push(ke(n));return{arrayValue:{values:t}}}return{stringValue:e.value}}function Re(e){let t;const n=e.find((e=>"otel.status_code"===e.key));var r;n&&(t={code:n.value,message:null===(r=e.find((e=>"otel_status_description"===e.key)))||void 0===r?void 0:r.value});return t}function Ce(e){if(!e||!e.length)return;let t=[];for(const n of e){let e={timeUnixNano:1e6*n.timestamp,attributes:[],droppedAttributesCount:0,name:""};for(const t of n.fields)e.attributes.push({key:t.key,value:ke(t)});t.push(e)}return t}function Oe(e){if(!e||!e.length)return;let t=[];for(const a of e){var n;let e={traceId:a.traceID,spanId:a.spanID,attributes:[],droppedAttributesCount:0};if(null!==(n=a.tags)&&void 0!==n&&n.length)for(const t of a.tags){var r;null===(r=e.attributes)||void 0===r||r.push({key:t.key,value:ke(t)})}t.push(e)}return t}function Me(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=e.data[0];if(!n)return Le;try{Ae(n)}catch(e){return console.error(e),{error:{message:"Unable to parse trace response: "+e},data:[]}}let r=[...e.data];return t&&r.push(...(0,ve.M7)(n)),Object.assign({},e,{data:r})}function Ae(e){for(const t of["serviceTags","logs","tags","references"]){const n=e.fields.find((e=>e.name===t));if(n){const t=e.fields.indexOf(n),r=new he.ArrayVector,a=Object.assign({},n,{values:r,type:he.FieldType.other});for(let e=0;e<n.values.length;e++){const t=n.values.get(e);r.set(e,""===t?void 0:JSON.parse(t))}e.fields[t]=a}}}function Ge(e,t){const n=new he.MutableDataFrame({fields:[{name:"traceID",type:he.FieldType.string,config:{unit:"string",displayNameFromDS:"Trace ID",links:[{title:"Trace: ${__value.raw}",url:"",internal:{datasourceUid:t.uid,datasourceName:t.name,query:{query:"${__value.raw}",queryType:"traceId"}}}]}},{name:"traceName",type:he.FieldType.string,config:{displayNameFromDS:"Trace name"}},{name:"startTime",type:he.FieldType.string,config:{displayNameFromDS:"Start time"}},{name:"duration",type:he.FieldType.number,config:{displayNameFromDS:"Duration",unit:"ms"}}],meta:{preferredVisualisationType:"table"}});if(null==e||!e.length)return n;const r=e.sort(((e,t)=>parseInt(null==t?void 0:t.startTimeUnixNano,10)/1e6-parseInt(null==e?void 0:e.startTimeUnixNano,10)/1e6)).map(Ve);for(const e of r)n.add(e);return n}function Ve(e){let t="";e.rootServiceName&&(t+=e.rootServiceName+" "),e.rootTraceName&&(t+=e.rootTraceName);const n=parseInt(e.startTimeUnixNano,10)/1e6;let r=(0,he.dateTimeFormat)(n);return Math.abs((0,me.Z)(new Date(n),Date.now()))<=1&&(r=(0,ge.Z)(new Date(n),Date.now(),{addSuffix:!0,includeSeconds:!0})),{traceID:e.traceID,startTime:r,duration:e.durationMs,traceName:t}}const Le={data:[new he.MutableDataFrame({fields:[{name:"trace",type:he.FieldType.trace,values:[]}],meta:{preferredVisualisationType:"trace",custom:{traceFormat:"otlp"}}})]}},"../../opt/drone/yarncache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/formatDistance/index.js":(e,t,n)=>{n.d(t,{Z:()=>f});var r=n("../../opt/drone/yarncache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/compareAsc/index.js"),a=n("../../opt/drone/yarncache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/differenceInMonths/index.js"),o=n("../../opt/drone/yarncache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/differenceInSeconds/index.js"),i=n("../../opt/drone/yarncache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/locale/en-US/index.js"),s=n("../../opt/drone/yarncache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/toDate/index.js");function u(e){return function(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in t=t||{})Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}({},e)}var c=n("../../opt/drone/yarncache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js"),l=n("../../opt/drone/yarncache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/requiredArgs/index.js"),d=1440,p=43200;function f(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(0,l.Z)(2,arguments);var f=n.locale||i.Z;if(!f.formatDistance)throw new RangeError("locale must contain formatDistance property");var m=(0,r.Z)(e,t);if(isNaN(m))throw new RangeError("Invalid time value");var g,h,v=u(n);v.addSuffix=Boolean(n.addSuffix),v.comparison=m,m>0?(g=(0,s.Z)(t),h=(0,s.Z)(e)):(g=(0,s.Z)(e),h=(0,s.Z)(t));var y,N=(0,o.Z)(h,g),b=((0,c.Z)(h)-(0,c.Z)(g))/1e3,_=Math.round((N-b)/60);if(_<2)return n.includeSeconds?N<5?f.formatDistance("lessThanXSeconds",5,v):N<10?f.formatDistance("lessThanXSeconds",10,v):N<20?f.formatDistance("lessThanXSeconds",20,v):N<40?f.formatDistance("halfAMinute",null,v):N<60?f.formatDistance("lessThanXMinutes",1,v):f.formatDistance("xMinutes",1,v):0===_?f.formatDistance("lessThanXMinutes",1,v):f.formatDistance("xMinutes",_,v);if(_<45)return f.formatDistance("xMinutes",_,v);if(_<90)return f.formatDistance("aboutXHours",1,v);if(_<d){var D=Math.round(_/60);return f.formatDistance("aboutXHours",D,v)}if(_<2520)return f.formatDistance("xDays",1,v);if(_<p){var F=Math.round(_/d);return f.formatDistance("xDays",F,v)}if(_<86400)return y=Math.round(_/p),f.formatDistance("aboutXMonths",y,v);if((y=(0,a.Z)(h,g))<12){var S=Math.round(_/p);return f.formatDistance("xMonths",S,v)}var T=y%12,w=Math.floor(y/12);return T<3?f.formatDistance("aboutXYears",w,v):T<9?f.formatDistance("overXYears",w,v):f.formatDistance("almostXYears",w+1,v)}}}]);
//# sourceMappingURL=5714.e7c4f9b46d58a170d773.js.map