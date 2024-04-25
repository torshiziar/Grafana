"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[9355],{"./public/app/features/alerting/unified/MuteTimings.tsx":(e,t,a)=>{a.r(t),a.d(t,{default:()=>L});var n=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),i=a("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/3/opt/drone/yarncache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),s=a("./.yarn/__virtual__/react-router-virtual-31642fe47a/3/opt/drone/yarncache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js"),r=a("./packages/grafana-ui/src/index.ts"),l=a("./public/app/core/hooks/useQueryParams.ts"),o=a("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),d=a("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/3/opt/drone/yarncache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js"),u=a("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts"),m=a("./public/app/features/alerting/unified/hooks/useAlertManagerSources.ts"),c=a("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts"),p=a("./public/app/features/alerting/unified/state/actions.ts"),v=a("./public/app/features/alerting/unified/utils/alertmanager.ts"),g=a("./public/app/features/alerting/unified/utils/misc.ts"),f=a("../../opt/drone/yarncache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");const h=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],_=["january","february","march","april","may","june","july","august","september","october","november","december"],b={times:[{start_time:"",end_time:""}],weekdays:"",days_of_month:"",months:"",years:""},y=(e,t,a)=>!e||(e.split(",").map((e=>e.trim())).every((e=>e.split(":").every(t)))||a),x=e=>e?e.split(",").map((e=>e.trim())):void 0;var j=a("./public/app/features/alerting/unified/utils/redux.ts"),k=a("./public/app/features/alerting/unified/components/AlertManagerPicker.tsx"),I=a("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx"),w=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const C=e=>{var t,a,n;let{intervalIndex:i}=e;const s=(0,r.useStyles2)(S),{register:l,formState:o}=(0,d.Gc)(),{fields:u,append:m,remove:c}=(0,d.Dq)({name:`time_intervals.${i}.times`}),p=e=>{if(!e)return!0;const[t,a]=e.split(":").map((e=>parseInt(e,10)));return(24===t?0===a:t>=0&&t<25&&(a>-1&&a<60))||"Time is invalid"},v=null===(t=o.errors.time_intervals)||void 0===t?void 0:t[i],g=null!==(a=null==v||null===(n=v.times)||void 0===n?void 0:n.some((e=>(null==e?void 0:e.start_time)||(null==e?void 0:e.end_time))))&&void 0!==a&&a;return(0,w.jsxs)("div",{children:[(0,w.jsx)(r.Field,{className:s.field,label:"Time range",description:"The time inclusive of the starting time and exclusive of the end time in UTC",invalid:g,error:g?"Times must be between 00:00 and 24:00 UTC":"",children:(0,w.jsx)(w.Fragment,{children:u.map(((e,t)=>{var a,n,o,d;return(0,w.jsx)("div",{className:s.timeRange,children:(0,w.jsxs)(r.InlineFieldRow,{children:[(0,w.jsx)(r.InlineField,{label:"Start time",invalid:!(null==v||null===(a=v.times)||void 0===a||null===(n=a[t])||void 0===n||!n.start_time),children:(0,w.jsx)(r.Input,Object.assign({},l(`time_intervals.${i}.times.${t}.start_time`,{validate:p}),{className:s.timeRangeInput,defaultValue:e.start_time,placeholder:"HH:MM","data-testid":"mute-timing-starts-at"}))}),(0,w.jsx)(r.InlineField,{label:"End time",invalid:!(null==v||null===(o=v.times)||void 0===o||null===(d=o[t])||void 0===d||!d.end_time),children:(0,w.jsx)(r.Input,Object.assign({},l(`time_intervals.${i}.times.${t}.end_time`,{validate:p}),{className:s.timeRangeInput,defaultValue:e.end_time,placeholder:"HH:MM","data-testid":"mute-timing-ends-at"}))}),(0,w.jsx)(r.IconButton,{className:s.deleteTimeRange,title:"Remove",name:"trash-alt",type:"button",onClick:e=>{e.preventDefault(),c(t)}})]})},e.id)}))})}),(0,w.jsx)(r.Button,{className:s.addTimeRange,variant:"secondary",type:"button",icon:"plus",onClick:()=>m({start_time:"",end_time:""}),children:"Add another time range"})]})},S=e=>({field:o.css`
    margin-bottom: 0;
  `,timeRange:o.css`
    margin-bottom: ${e.spacing(1)};
  `,timeRangeInput:o.css`
    width: 120px;
  `,deleteTimeRange:o.css`
    margin: ${e.spacing(1)} 0 0 ${e.spacing(.5)};
  `,addTimeRange:o.css`
    margin-bottom: ${e.spacing(2)};
  `});var N;const M=()=>{const e=(0,r.useStyles2)($),{formState:t,register:a}=(0,d.Gc)(),{fields:n,append:i,remove:s}=(0,d.Dq)({name:"time_intervals"});return(0,w.jsx)(r.FieldSet,{className:e.timeIntervalLegend,label:"Time intervals",children:(0,w.jsxs)(w.Fragment,{children:[N||(N=(0,w.jsx)("p",{children:"A time interval is a definition for a moment in time. All fields are lists, and at least one list element must be satisfied to match the field. If a field is left blank, any moment of time will match the field. For an instant of time to match a complete time interval, all fields must match. A mute timing can contain multiple time intervals."})),n.map(((n,i)=>{var l,o,d,u,m,c,p,v,g,f,b,x,j,k,I,S,N,M,$,A,T,F;const z=t.errors;return(0,w.jsxs)("div",{className:e.timeIntervalSection,children:[(0,w.jsx)(C,{intervalIndex:i}),(0,w.jsx)(r.Field,{label:"Days of the week",error:null!==(l=null===(o=z.time_intervals)||void 0===o||null===(d=o[i])||void 0===d||null===(u=d.weekdays)||void 0===u?void 0:u.message)&&void 0!==l?l:"",invalid:!(null===(m=z.time_intervals)||void 0===m||null===(c=m[i])||void 0===c||!c.weekdays),children:(0,w.jsx)(r.Input,Object.assign({},a(`time_intervals.${i}.weekdays`,{validate:e=>y(e,(e=>h.includes(e.toLowerCase())),"Invalid day of the week")}),{className:e.input,"data-testid":"mute-timing-weekdays",defaultValue:n.weekdays,placeholder:"Example: monday, tuesday:thursday"}))}),(0,w.jsx)(r.Field,{label:"Days of the month",description:"The days of the month, 1-31, of a month. Negative values can be used to represent days which begin at the end of the month",invalid:!(null===(p=z.time_intervals)||void 0===p||null===(v=p[i])||void 0===v||!v.days_of_month),error:null===(g=z.time_intervals)||void 0===g||null===(f=g[i])||void 0===f||null===(b=f.days_of_month)||void 0===b?void 0:b.message,children:(0,w.jsx)(r.Input,Object.assign({},a(`time_intervals.${i}.days_of_month`,{validate:e=>y(e,(e=>{const t=parseInt(e,10);return t>-31&&t<0||t>0&&t<32}),"Invalid day")}),{className:e.input,defaultValue:n.days_of_month,placeholder:"Example: 1, 14:16, -1","data-testid":"mute-timing-days"}))}),(0,w.jsx)(r.Field,{label:"Months",description:"The months of the year in either numerical or the full calendar month",invalid:!(null===(x=z.time_intervals)||void 0===x||null===(j=x[i])||void 0===j||!j.months),error:null===(k=z.time_intervals)||void 0===k||null===(I=k[i])||void 0===I||null===(S=I.months)||void 0===S?void 0:S.message,children:(0,w.jsx)(r.Input,Object.assign({},a(`time_intervals.${i}.months`,{validate:e=>y(e,(e=>_.includes(e)||parseInt(e,10)<13&&parseInt(e,10)>0),"Invalid month")}),{className:e.input,placeholder:"Example: 1:3, may:august, december",defaultValue:n.months,"data-testid":"mute-timing-months"}))}),(0,w.jsx)(r.Field,{label:"Years",invalid:!(null===(N=z.time_intervals)||void 0===N||null===(M=N[i])||void 0===M||!M.years),error:null!==($=null===(A=z.time_intervals)||void 0===A||null===(T=A[i])||void 0===T||null===(F=T.years)||void 0===F?void 0:F.message)&&void 0!==$?$:"",children:(0,w.jsx)(r.Input,Object.assign({},a(`time_intervals.${i}.years`,{validate:e=>y(e,(e=>/^\d{4}$/.test(e)),"Invalid year")}),{className:e.input,placeholder:"Example: 2021:2022, 2030",defaultValue:n.years,"data-testid":"mute-timing-years"}))}),(0,w.jsx)(r.Button,{type:"button",variant:"destructive",icon:"trash-alt",onClick:()=>s(i),children:"Remove time interval"})]},n.id)})),(0,w.jsx)(r.Button,{type:"button",variant:"secondary",className:e.removeTimeIntervalButton,onClick:()=>{i(b)},icon:"plus",children:"Add another time interval"})]})})},$=e=>({input:o.css`
    width: 400px;
  `,timeIntervalLegend:o.css`
    legend {
      font-size: 1.25rem;
    }
  `,timeIntervalSection:o.css`
    background-color: ${e.colors.background.secondary};
    padding: ${e.spacing(1)};
    margin-bottom: ${e.spacing(1)};
  `,removeTimeIntervalButton:o.css`
    margin-top: ${e.spacing(1)};
  `});var A,T;const F=e=>({input:o.css`
    width: 400px;
  `,submitButton:o.css`
    margin-left: ${e.spacing(1)};
  `}),z=e=>{var t,a,s;let{muteTiming:l,showError:o}=e;const h=(0,i.useDispatch)(),_=(0,m.k)("notification"),[y,C]=(0,u.k)(_),S=(0,r.useStyles2)(F),N={alertmanager_config:{},template_files:{}},$=(0,c._)((e=>e.amConfigs)),{result:z=N,loading:R}=y&&$[y]||j.oq,B=null!==(t=null==z?void 0:z.alertmanager_config)&&void 0!==t?t:{},E=(e=>(0,n.useMemo)((()=>{if(!e)return{name:"",time_intervals:[b]};const t=e.time_intervals.map((e=>{var t,a,n,i,s,r,l,o,d;return{times:null!==(t=e.times)&&void 0!==t?t:b.times,weekdays:null!==(a=null==e||null===(n=e.weekdays)||void 0===n?void 0:n.join(", "))&&void 0!==a?a:b.weekdays,days_of_month:null!==(i=null==e||null===(s=e.days_of_month)||void 0===s?void 0:s.join(", "))&&void 0!==i?i:b.days_of_month,months:null!==(r=null==e||null===(l=e.months)||void 0===l?void 0:l.join(", "))&&void 0!==r?r:b.months,years:null!==(o=null==e||null===(d=e.years)||void 0===d?void 0:d.join(", "))&&void 0!==o?o:b.years}}));return{name:e.name,time_intervals:t}}),[e]))(l),L=(0,d.cI)({defaultValues:E});return(0,w.jsxs)(I.J,{pageId:"am-routes",children:[(0,w.jsx)(k.P,{current:y,onChange:C,disabled:!0,dataSources:_}),z&&!R&&(0,w.jsx)(d.RV,Object.assign({},L,{children:(0,w.jsxs)("form",{onSubmit:L.handleSubmit((e=>{var t,a;const n=(e=>{const t=e.time_intervals.map((e=>{var t;let{times:a,weekdays:n,days_of_month:i,months:s,years:r}=e;const l={times:a.filter((e=>{let{start_time:t,end_time:a}=e;return!!t&&!!a})),weekdays:null===(t=x(n))||void 0===t?void 0:t.map((e=>e.toLowerCase())),days_of_month:x(i),months:x(s),years:x(r)};return(0,f.omitBy)(l,f.isUndefined)}));return{name:e.name,time_intervals:t}})(e),i=l?null==B||null===(t=B.mute_time_intervals)||void 0===t?void 0:t.filter((e=>{let{name:t}=e;return t!==l.name})):B.mute_time_intervals,s=Object.assign({},z,{alertmanager_config:Object.assign({},B,{route:l&&n.name!==l.name?(0,v.FM)(n.name,l.name,null!==(a=B.route)&&void 0!==a?a:{}):B.route,mute_time_intervals:[...i||[],n]})});h((0,p.mM)({newConfig:s,oldConfig:z,alertManagerSourceName:y,successMessage:"Mute timing saved",redirectPath:"/alerting/routes/"}))})),"data-testid":"mute-timing-form",children:[o&&(A||(A=(0,w.jsx)(r.Alert,{title:"No matching mute timing found"}))),(0,w.jsxs)(r.FieldSet,{label:"Create mute timing",children:[(0,w.jsx)(r.Field,{required:!0,label:"Name",description:"A unique name for the mute timing",invalid:!(null===(a=L.formState.errors)||void 0===a||!a.name),error:null===(s=L.formState.errors.name)||void 0===s?void 0:s.message,children:(0,w.jsx)(r.Input,Object.assign({},L.register("name",{required:!0,validate:e=>{if(!l){var t;return!(null==B||null===(t=B.mute_time_intervals)||void 0===t?void 0:t.find((t=>{let{name:a}=t;return e===a})))||`Mute timing already exists for "${e}"`}return e.length>0||"Name is required"}}),{className:S.input,"data-testid":"mute-timing-name"}))}),T||(T=(0,w.jsx)(M,{})),(0,w.jsx)(r.LinkButton,{type:"button",variant:"secondary",href:(0,g.eQ)("/alerting/routes/",y),children:"Cancel"}),(0,w.jsx)(r.Button,{type:"submit",className:S.submitButton,children:l?"Save":"Submit"})]})]})}))]})};var R,B,E;const L=()=>{const[e]=(0,l.K)(),t=(0,i.useDispatch)(),a=(0,m.k)("notification"),[o]=(0,u.k)(a),d=(0,c._)((e=>e.amConfigs)),v=(0,n.useCallback)((()=>{o&&t((0,p.Yh)(o))}),[o,t]);(0,n.useEffect)((()=>{v()}),[v]);const{result:g,error:f,loading:h}=o&&d[o]||j.oq,_=null==g?void 0:g.alertmanager_config,b=(0,n.useCallback)((e=>{var t;return null==_||null===(t=_.mute_time_intervals)||void 0===t?void 0:t.find((t=>{let{name:a}=t;return a===e}))}),[_]);return(0,w.jsxs)(w.Fragment,{children:[h&&(R||(R=(0,w.jsx)(r.LoadingPlaceholder,{text:"Loading mute timing"}))),f&&!h&&(0,w.jsx)(r.Alert,{severity:"error",title:`Error loading Alertmanager config for ${o}`,children:f.message||"Unknown error."}),g&&!f&&(0,w.jsxs)(s.rs,{children:[B||(B=(0,w.jsx)(s.AW,{exact:!0,path:"/alerting/routes/mute-timing/new",children:(0,w.jsx)(z,{})})),(0,w.jsx)(s.AW,{exact:!0,path:"/alerting/routes/mute-timing/edit",children:()=>{if(e.muteName){const t=b(String(e.muteName));return(0,w.jsx)(z,{muteTiming:t,showError:!t})}return E||(E=(0,w.jsx)(s.l_,{to:"/alerting/routes"}))}})]})]})}},"./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx":(e,t,a)=>{a.d(t,{J:()=>l});a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");var n=a("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/3/opt/drone/yarncache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),i=a("./public/app/core/components/Page/Page.tsx"),s=a("./public/app/core/selectors/navModel.ts"),r=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const l=e=>{let{children:t,pageId:a,isLoading:l}=e;const o=(0,s.h)((0,n.useSelector)((e=>e.navIndex)),a);return(0,r.jsx)(i.Z,{navModel:o,children:(0,r.jsx)(i.Z.Contents,{isLoading:l,children:t})})}},"./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts":(e,t,a)=>{a.d(t,{k:()=>o});var n=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),i=a("./public/app/core/hooks/useQueryParams.ts"),s=a("./public/app/core/store.ts"),r=a("./public/app/features/alerting/unified/utils/constants.ts"),l=a("./public/app/features/alerting/unified/utils/datasource.ts");function o(e){const[t,a]=(0,i.K)(),o=function(e){return(0,n.useCallback)((t=>e.map((e=>e.name)).includes(t)),[e])}(e),d=(0,n.useCallback)((e=>{o(e)&&(e===l.GC?(s.Z.delete(r.de),a({[r.c4]:null})):(s.Z.set(r.de,e),a({[r.c4]:e})))}),[a,o]),u=t[r.c4];if(u&&"string"==typeof u)return o(u)?[u,d]:[void 0,d];const m=s.Z.get(r.de);return m&&"string"==typeof m&&o(m)?(d(m),[m,d]):o(l.GC)?[l.GC,d]:[void 0,d]}},"./public/app/features/alerting/unified/hooks/useAlertManagerSources.ts":(e,t,a)=>{a.d(t,{k:()=>s});var n=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),i=a("./public/app/features/alerting/unified/utils/datasource.ts");function s(e){return(0,n.useMemo)((()=>(0,i.LE)(e)),[e])}}}]);
//# sourceMappingURL=MuteTimings.e7c4f9b46d58a170d773.js.map