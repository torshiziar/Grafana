"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2651],{"./public/app/core/hooks/useNavModel.ts":(e,t,n)=>{n.d(t,{q:()=>r});var a=n("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/3/opt/drone/yarncache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),s=n("./public/app/core/selectors/navModel.ts");const r=e=>{const t=(0,a.useSelector)((e=>e.navIndex));return(0,s.h)(t,e)}},"./public/app/features/live/pages/PipelineAdminPage.tsx":(e,t,n)=>{n.r(t),n.d(t,{default:()=>B});var a=n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),s=n("./packages/grafana-runtime/src/index.ts"),r=n("./packages/grafana-ui/src/index.ts"),l=n("./public/app/core/components/Page/Page.tsx"),o=n("./public/app/core/hooks/useNavModel.ts"),i=n("./packages/grafana-data/src/index.ts"),c=n("./public/app/core/copy/appNotification.ts"),u=n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const d=[{label:"Data source",description:"Configure a channel scoped to a data source instance",value:"ds"},{label:"Any",description:"Enter an arbitray channel pattern",value:"any"}];function p(e){let{onRuleAdded:t}=e;const[n,l]=(0,a.useState)(),[o,p]=(0,a.useState)(),[h,v]=(0,a.useState)(""),[g,m]=(0,a.useState)(),x=(0,c.iG)(),j=()=>{o?"ds"!==n||h.length?(0,s.getBackendSrv)().post("api/live/channel-rules",{pattern:h+o,settings:{converter:{type:"jsonAuto"},frameOutputs:[{type:"managedStream"}]}}).then((e=>{console.log("ADDED",e),p(void 0),l(void 0),t(e.rule)})).catch((e=>{x.error("Error adding rule",e),e.isHandled=!0})):x.error("Select datasource"):x.error("Enter path")};return n?(0,u.jsx)("div",{children:(0,u.jsxs)(r.HorizontalGroup,{children:["any"===n&&(0,u.jsx)(r.Field,{label:"Pattern",children:(0,u.jsx)(r.Input,{value:null!=o?o:"",onChange:e=>p(e.currentTarget.value),placeholder:"scope/namespace/path"})}),"ds"===n&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r.Field,{label:"Data source",children:(0,u.jsx)(s.DataSourcePicker,{current:g,onChange:e=>{m(e),v(`${i.LiveChannelScope.DataSource}/${e.uid}/`)}})}),(0,u.jsx)(r.Field,{label:"Path",children:(0,u.jsx)(r.Input,{value:null!=o?o:"",onChange:e=>p(e.currentTarget.value),placeholder:"path"})})]}),(0,u.jsx)(r.Field,{label:"",children:(0,u.jsx)(r.Button,{onClick:j,variant:null!=o&&o.length?"primary":"secondary",children:"Add"})}),(0,u.jsx)(r.Field,{label:"",children:(0,u.jsx)(r.Button,{variant:"secondary",onClick:()=>l(void 0),children:"Cancel"})})]})}):(0,u.jsx)("div",{children:(0,u.jsx)(r.ValuePicker,{label:"Add channel rule",variant:"secondary",size:"md",icon:"plus",menuPlacement:"auto",isFullWidth:!1,options:d,onChange:e=>l(e.value)})})}var h=n("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),v=n("./public/app/features/plugins/datasource_srv.ts");const g=e=>{var t;let{onChange:n,value:a,ruleType:s,entitiesInfo:l}=e;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r.Select,{menuShouldPortal:!0,options:l[s],placeholder:"Select an option",value:null!==(t=null==a?void 0:a.type)&&void 0!==t?t:"",onChange:e=>{const t=e.value;n({type:t,[t]:l.getExample(s,t)})}},s),(0,u.jsx)(r.CodeEditor,{height:"50vh",value:a?JSON.stringify(a[a.type],null,"\t"):"",showLineNumbers:!0,readOnly:!1,language:"json",showMiniMap:!1,onBlur:e=>{const t=JSON.parse(e);n({type:a.type,[a.type]:t})}})]})},m=e=>{let{onChange:t,value:n,ruleType:s,entitiesInfo:l}=e;const[o,i]=(0,a.useState)(0),c=null!=n?n:[];let d=[];for(let e=0;e<=c.length;e++)d.push({label:`${s}: ${e}`,value:e});return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r.Select,{placeholder:"Select an index",menuShouldPortal:!0,options:d,value:o,onChange:e=>{i(e.value)}}),(0,u.jsx)(g,{onChange:e=>{if(n){const a=[...n];a[o]=e,t(a)}else t([e])},value:c[o],ruleType:s,entitiesInfo:l})]})},x=e=>{const[t,n]=(0,a.useState)(),[l,o]=(0,a.useState)(),c=(0,r.useStyles)(j);return(0,u.jsxs)("div",{children:[(0,u.jsx)(r.CodeEditor,{height:100,value:"",showLineNumbers:!0,readOnly:!1,language:"json",showMiniMap:!1,onBlur:e=>{o(e)}}),(0,u.jsx)(r.Button,{onClick:()=>{(0,s.getBackendSrv)().post("api/live/pipeline-convert-test",{channelRules:[e.rule],channel:e.rule.pattern,data:l}).then((e=>{const t=e.channelFrames;t&&n(t.map((e=>{const t=(0,i.dataFrameFromJSON)(e.frame);for(const e of t.fields)e.display=(0,i.getDisplayProcessor)({field:e,theme:s.config.theme2});return{channel:e.channel,frame:t}})))})).catch((e=>{n(e)}))},className:c.margin,children:"Test"}),(null==t?void 0:t.length)&&t.map((e=>(0,u.jsx)(r.Field,{label:e.channel,children:(0,u.jsx)(r.Table,{data:e.frame,width:700,height:Math.min(10*e.frame.length+10,150),showTypeIcons:!0})},e.channel)))]})},j=e=>({margin:h.css`
      margin-bottom: 15px;
    `});function f(e,t){return Array.isArray(e)?e.map((e=>({label:e[t],value:e[t]}))):e[t].map((e=>({label:e.type,value:e.type})))}const y=[{label:"Converter",type:"converter",isConverter:!0},{label:"Processors",type:"frameProcessors"},{label:"Outputs",type:"frameOutputs"},{label:"Test",isTest:!0,icon:"flask"}],b=e=>{var t;const{isOpen:n,onClose:l,clickColumn:o}=e,[i,c]=(0,a.useState)(e.rule),[d,p]=(0,a.useState)(y.find((e=>e.type===o))),[h,v]=(0,a.useState)(!1),[j,b]=(0,a.useState)(null!=d&&d.type?null==i||null===(t=i.settings)||void 0===t?void 0:t[d.type]:void 0),[C,k]=(0,a.useState)(),O=(0,r.useStyles)(S),T=e=>{v(!0),null!=d&&d.type&&c(Object.assign({},i,{settings:Object.assign({},i.settings,{[null==d?void 0:d.type]:e})})),b(e)};(0,a.useMemo)((()=>{(async function(){return await(0,s.getBackendSrv)().get("api/live/pipeline-entities").then((e=>({converter:f(e,"converters"),frameProcessors:f(e,"frameProcessors"),frameOutputs:f(e,"frameOutputs"),getExample:(t,n)=>{var a,s,r;return null===(a=e[`${t}s`])||void 0===a||null===(s=a.filter((e=>e.type===n)))||void 0===s||null===(r=s[0])||void 0===r?void 0:r.example}})))})().then((e=>{k(e)}))}),[]);return(0,u.jsxs)(r.Modal,{isOpen:n,title:i.pattern,onDismiss:l,closeOnEscape:!0,children:[(0,u.jsx)(r.TabsBar,{children:y.map(((e,t)=>(0,u.jsx)(r.Tab,{label:e.label,active:e===d,icon:e.icon,onChangeTab:()=>{var t;(p(e),e.type)&&b(null==i||null===(t=i.settings)||void 0===t?void 0:t[e.type])}},t)))}),(0,u.jsxs)(r.TabContent,{children:[C&&i&&d&&(0,u.jsxs)(u.Fragment,{children:[(null==d?void 0:d.isTest)&&(0,u.jsx)(x,{rule:i}),d.isConverter&&(0,u.jsx)(g,{onChange:T,value:j,ruleType:"converter",entitiesInfo:C}),!d.isConverter&&d.type&&(0,u.jsx)(m,{onChange:T,value:j,ruleType:d.type,entitiesInfo:C})]}),(0,u.jsx)(r.Button,{onClick:()=>{(0,s.getBackendSrv)().put("api/live/channel-rules",i).then((()=>{v(!1),l()})).catch((e=>console.error(e)))},className:O.save,variant:h?"primary":"secondary",children:"Save"})]})]})},S=e=>({save:h.css`
      margin-top: 5px;
    `});var C,k,O,T;function P(e,t){return null!=t&&t.type?(0,u.jsx)(r.Tag,{name:t.type},e):null}const N=e=>{const{rules:t}=e,[n,l]=(0,a.useState)(!1),[o,i]=(0,a.useState)(),[c,d]=(0,a.useState)("converter"),p=(0,r.useStyles)(w),h=(e,t)=>{var n;if(!e)return;let a=null==t||null===(n=t.target)||void 0===n?void 0:n.getAttribute("data-column");a&&"pattern"!==a||(a="converter"),d(a),i(e),l(!0)};(0,a.useEffect)((()=>{e.selectRule&&h(e.selectRule)}),[e.selectRule]);const g=e=>{if(e.startsWith("ds/")){const t=e.indexOf("/",4);if(t>3){const n=e.substring(3,t),a=(0,v.ak)().getInstanceSettings(n);if(a)return(0,u.jsxs)("div",{children:[(0,u.jsx)(r.Tag,{name:a.name,colorIndex:1}),"  ",(0,u.jsx)("span",{children:e.substring(t+1)})]})}}return e};return(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{className:"admin-list-table",children:(0,u.jsxs)("table",{className:"filter-table filter-table--hover form-inline",children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[C||(C=(0,u.jsx)("th",{children:"Channel"})),k||(k=(0,u.jsx)("th",{children:"Converter"})),O||(O=(0,u.jsx)("th",{children:"Processor"})),T||(T=(0,u.jsx)("th",{children:"Output"})),(0,u.jsx)("th",{style:{width:10},children:" "})]})}),(0,u.jsx)("tbody",{children:t.map((t=>{var n,a,l,o,i,c;return(0,u.jsxs)("tr",{onClick:e=>h(t,e),className:p.row,children:[(0,u.jsx)("td",{"data-pattern":t.pattern,"data-column":"pattern",children:g(t.pattern)}),(0,u.jsx)("td",{"data-pattern":t.pattern,"data-column":"converter",children:null===(n=t.settings)||void 0===n||null===(a=n.converter)||void 0===a?void 0:a.type}),(0,u.jsx)("td",{"data-pattern":t.pattern,"data-column":"processor",children:null===(l=t.settings)||void 0===l||null===(o=l.frameProcessors)||void 0===o?void 0:o.map((e=>(0,u.jsx)("span",{children:e.type},t.pattern+e.type)))}),(0,u.jsx)("td",{"data-pattern":t.pattern,"data-column":"output",children:null===(i=t.settings)||void 0===i||null===(c=i.frameOutputs)||void 0===c?void 0:c.map((e=>(0,u.jsx)("span",{children:P("out",e)},t.pattern+e.type)))}),(0,u.jsx)("td",{children:(0,u.jsx)(r.IconButton,{name:"trash-alt",onClick:n=>{var a;n.stopPropagation(),a=t.pattern,(0,s.getBackendSrv)().delete("api/live/channel-rules",JSON.stringify({pattern:a})).catch((e=>console.error(e))).finally((()=>{e.onRuleChanged()}))}})})]},t.pattern)}))})]})}),n&&o&&(0,u.jsx)(b,{rule:o,isOpen:n,onClose:()=>{l(!1)},clickColumn:c})]})},w=e=>({row:h.css`
      cursor: pointer;
    `});function B(){const[e,t]=(0,a.useState)([]),[n,i]=(0,a.useState)([]),[c,d]=(0,a.useState)(),h=(0,o.q)("live-pipeline"),[v,g]=(0,a.useState)(),m=()=>{(0,s.getBackendSrv)().get("api/live/channel-rules").then((e=>{var n,a;t(null!==(n=e.rules)&&void 0!==n?n:[]),i(null!==(a=e.rules)&&void 0!==a?a:[])})).catch((e=>{e.data&&g(JSON.stringify(e.data,null,2))}))};(0,a.useEffect)((()=>{m()}),[]);return(0,u.jsx)(l.Z,{navModel:h,children:(0,u.jsxs)(l.Z.Contents,{children:[v&&(0,u.jsx)("pre",{children:v}),(0,u.jsx)("div",{className:"page-action-bar",children:(0,u.jsx)("div",{className:"gf-form gf-form--grow",children:(0,u.jsx)(r.Input,{placeholder:"Search pattern...",onChange:a=>{a.target.value?t(e.filter((e=>e.pattern.toLowerCase().includes(a.target.value.toLowerCase())))):t(n)}})})}),(0,u.jsx)(N,{rules:e,onRuleChanged:m,selectRule:c}),(0,u.jsx)(p,{onRuleAdded:t=>{console.log("GOT",t,"vs",e[0]),d(t),m()}})]})})}}}]);
//# sourceMappingURL=PipelineAdminPage.e7c4f9b46d58a170d773.js.map