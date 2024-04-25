"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[476],{"./public/app/features/alerting/NewNotificationChannelPage.tsx":(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var r,a=n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),s=n("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/3/opt/drone/yarncache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),i=n("./packages/grafana-runtime/src/index.ts"),l=n("./packages/grafana-ui/src/index.ts"),o=n("./public/app/core/components/Page/Page.tsx"),c=n("./public/app/core/selectors/navModel.ts"),d=n("./public/app/features/alerting/components/NotificationChannelForm.tsx"),u=n("./public/app/features/alerting/state/actions.ts"),p=n("./public/app/features/alerting/state/reducers.ts"),g=n("./public/app/features/alerting/utils/notificationChannels.ts"),f=n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class h extends a.PureComponent{constructor(){super(...arguments),m(this,"onSubmit",(e=>{this.props.createNotificationChannel((0,g.YV)(Object.assign({},g.Pg,e)))})),m(this,"onTestChannel",(e=>{this.props.testNotificationChannel((0,g.dv)(Object.assign({},g.Pg,e)))}))}componentDidMount(){this.props.loadNotificationTypes()}render(){const{navModel:e,notificationChannelTypes:t}=this.props;return(0,f.jsx)(o.Z,{navModel:e,children:(0,f.jsxs)(o.Z.Contents,{children:[r||(r=(0,f.jsx)("h2",{className:"page-sub-heading",children:"New notification channel"})),(0,f.jsx)(l.Form,{onSubmit:this.onSubmit,validateOn:"onChange",defaultValues:g.Pg,maxWidth:600,children:e=>{let{register:n,errors:r,control:a,getValues:s,watch:l}=e;const o=t.find((e=>e.value===s().type.value));return(0,f.jsx)(d.w,{selectableChannels:(0,g.t7)(t,!0),selectedChannel:o,onTestChannel:this.onTestChannel,register:n,errors:r,getValues:s,control:a,watch:l,imageRendererAvailable:i.config.rendererAvailable,resetSecureField:this.props.resetSecureField,secureFields:{}})}})]})})}}const b={createNotificationChannel:u.C2,loadNotificationTypes:u.fA,testNotificationChannel:u.c1,resetSecureField:p.J0},v=(0,s.connect)((e=>({navModel:(0,c.h)(e.navIndex,"channels"),notificationChannelTypes:e.notificationChannel.notificationChannelTypes})),b)(h)},"./public/app/features/alerting/components/NotificationChannelForm.tsx":(e,t,n)=>{n.d(t,{w:()=>j});var r=n("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),a=n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),s=n("./packages/grafana-ui/src/index.ts"),i=n("./public/app/core/config.ts"),l=n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const o=["ref"];const c=e=>{let{control:t,option:n,register:r,invalid:a}=e;const i=n.secure?`secureSettings.${n.propertyName}`:`settings.${n.propertyName}`;switch(n.element){case"input":return(0,l.jsx)(s.Input,Object.assign({},r(`${i}`,{required:!!n.required&&"Required",validate:e=>""===n.validationRule||d(e,n.validationRule)}),{invalid:a,type:n.inputType,placeholder:n.placeholder}));case"select":return(0,l.jsx)(s.InputControl,{control:t,name:`${i}`,render:e=>{var t;let{}=e,r=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e.field,o);return(0,l.jsx)(s.Select,Object.assign({menuShouldPortal:!0},r,{options:null!==(t=n.selectOptions)&&void 0!==t?t:void 0,invalid:a}))}});case"textarea":return(0,l.jsx)(s.TextArea,Object.assign({invalid:a},r(`${i}`,{required:!!n.required&&"Required",validate:e=>""===n.validationRule||d(e,n.validationRule)})));default:return console.error("Element not supported",n.element),null}},d=(e,t)=>!!RegExp(t).test(e)||"Invalid format",u=e=>{let{control:t,currentFormValues:n,errors:r,selectedChannelOptions:a,register:i,onResetSecureField:o,secureFields:d}=e;return(0,l.jsx)(l.Fragment,{children:a.map(((e,a)=>{var u;const p=`${e.label}-${a}`,g=n[`settings.${e.showWhen.field}`]&&n[`settings.${e.showWhen.field}`].value;return e.showWhen.field&&g!==e.showWhen.is?null:"checkbox"===e.element?(0,l.jsx)(s.Field,{children:(0,l.jsx)(s.Checkbox,Object.assign({},i(e.secure?`secureSettings.${e.propertyName}`:`settings.${e.propertyName}`),{label:e.label,description:e.description}))},p):(0,l.jsx)(s.Field,{label:e.label,description:e.description,invalid:r.settings&&!!r.settings[e.propertyName],error:r.settings&&(null===(u=r.settings[e.propertyName])||void 0===u?void 0:u.message),children:d&&d[e.propertyName]?(0,l.jsx)(s.Input,{readOnly:!0,value:"Configured",suffix:(0,l.jsx)(s.Button,{onClick:()=>o(e.propertyName),fill:"text",type:"button",size:"sm",children:"Clear"})}):(0,l.jsx)(c,{option:e,register:i,control:t})},p)}))})},p=["ref"];const g=e=>{let{control:t,currentFormValues:n,errors:r,secureFields:a,selectedChannel:i,channels:o,register:c,resetSecureField:d}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.Field,{label:"Name",invalid:!!r.name,error:r.name&&r.name.message,children:(0,l.jsx)(s.Input,Object.assign({},c("name",{required:"Name is required"})))}),(0,l.jsx)(s.Field,{label:"Type",children:(0,l.jsx)(s.InputControl,{name:"type",render:e=>{let{}=e,t=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e.field,p);return(0,l.jsx)(s.Select,Object.assign({menuShouldPortal:!0},t,{options:o}))},control:t,rules:{required:!0}})}),(0,l.jsx)(u,{selectedChannelOptions:i.options.filter((e=>e.required)),currentFormValues:n,secureFields:a,onResetSecureField:d,register:c,errors:r,control:t})]})},f=e=>{var t;let{control:n,currentFormValues:r,errors:a,selectedChannel:i,secureFields:o,register:c,resetSecureField:d}=e;return(0,l.jsxs)(s.CollapsableSection,{label:`Optional ${i.heading}`,isOpen:!1,children:[""!==i.info&&(0,l.jsx)(s.Alert,{severity:"info",title:null!==(t=i.info)&&void 0!==t?t:""}),(0,l.jsx)(u,{selectedChannelOptions:i.options.filter((e=>!e.required)),currentFormValues:r,register:c,errors:a,control:n,onResetSecureField:d,secureFields:o})]})};var m;const h=e=>{let{currentFormValues:t,imageRendererAvailable:n,register:r}=e;return(0,l.jsxs)(s.CollapsableSection,{label:"Notification settings",isOpen:!1,children:[(0,l.jsx)(s.Field,{children:(0,l.jsx)(s.Checkbox,Object.assign({},r("isDefault"),{label:"Default",description:"Use this notification for all alerts"}))}),(0,l.jsx)(s.Field,{children:(0,l.jsx)(s.Checkbox,Object.assign({},r("settings.uploadImage"),{label:"Include image",description:"Captures an image and include it in the notification"}))}),t.uploadImage&&!n&&(m||(m=(0,l.jsx)(s.InfoBox,{title:"No image renderer available/installed",children:"Grafana cannot find an image renderer to capture an image for the notification. Please make sure the Grafana Image Renderer plugin is installed. Please contact your Grafana administrator to install the plugin."}))),(0,l.jsx)(s.Field,{children:(0,l.jsx)(s.Checkbox,Object.assign({},r("disableResolveMessage"),{label:"Disable Resolve Message",description:"Disable the resolve message [OK] that is sent when alerting state returns to false"}))}),(0,l.jsx)(s.Field,{children:(0,l.jsx)(s.Checkbox,Object.assign({},r("sendReminder"),{label:"Send reminders",description:"Send additional notifications for triggered alerts"}))}),t.sendReminder&&(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(s.Field,{label:"Send reminder every",description:"Specify how often reminders should be sent, e.g. every 30s, 1m, 10m, 30m', or 1h etc. Alert reminders are sent after rules are evaluated. A reminder can never be sent more frequently than a configured alert rule evaluation interval.",children:(0,l.jsx)(s.Input,Object.assign({},r("frequency"),{width:8}))})})]})};var b,v,x;const j=e=>{let{control:t,errors:n,selectedChannel:r,selectableChannels:o,register:c,watch:d,getValues:u,imageRendererAvailable:p,onTestChannel:m,resetSecureField:j,secureFields:C}=e;const S=y((0,s.useTheme)());(0,a.useEffect)((()=>{const e=new Set(null==r?void 0:r.options.filter((e=>e.showWhen.field)).map((e=>`settings.${e.showWhen.field}`)))||[];d(["type","sendReminder","uploadImage",...e])}),[null==r?void 0:r.options,d]);const F=u();return r?(0,l.jsxs)("div",{className:S.formContainer,children:[(0,l.jsx)("div",{className:S.formItem,children:(0,l.jsx)(g,{selectedChannel:r,channels:o,secureFields:C,resetSecureField:j,currentFormValues:F,register:c,errors:n,control:t})}),r.options.filter((e=>!e.required)).length>0&&(0,l.jsx)("div",{className:S.formItem,children:(0,l.jsx)(f,{selectedChannel:r,secureFields:C,resetSecureField:j,currentFormValues:F,register:c,errors:n,control:t})}),(0,l.jsx)("div",{className:S.formItem,children:(0,l.jsx)(h,{imageRendererAvailable:p,currentFormValues:F,register:c,errors:n,control:t})}),(0,l.jsx)("div",{className:S.formButtons,children:(0,l.jsxs)(s.HorizontalGroup,{children:[v||(v=(0,l.jsx)(s.Button,{type:"submit",children:"Save"})),(0,l.jsx)(s.Button,{type:"button",variant:"secondary",onClick:()=>m(u()),children:"Test"}),(0,l.jsx)("a",{href:`${i.ZP.appSubUrl}/alerting/notifications`,children:x||(x=(0,l.jsx)(s.Button,{type:"button",variant:"secondary",children:"Back"}))})]})})]}):b||(b=(0,l.jsx)(s.Spinner,{}))},y=(0,s.stylesFactory)((e=>({formContainer:r.css``,formItem:r.css`
      flex-grow: 1;
      padding-top: ${e.spacing.md};
    `,formButtons:r.css`
      padding-top: ${e.spacing.xl};
    `})))},"./public/app/features/alerting/state/actions.ts":(e,t,n)=>{n.d(t,{Au:()=>l,C2:()=>c,c1:()=>u,en:()=>o,fA:()=>p,fg:()=>d,tk:()=>g});var r=n("./packages/grafana-runtime/src/index.ts"),a=n("./public/app/core/actions/index.ts"),s=n("./public/app/core/copy/appNotification.ts"),i=n("./public/app/features/alerting/state/reducers.ts");function l(e){return async t=>{t((0,i.gz)());const n=await(0,r.getBackendSrv)().get("/api/alerts",e);t((0,i.Oc)(n))}}function o(e,t){return async n=>{await(0,r.getBackendSrv)().post(`/api/alerts/${e}/pause`,t);n(l({state:(r.locationService.getSearchObject().state||"all").toString()}))}}function c(e){return async t=>{try{await(0,r.getBackendSrv)().post("/api/alert-notifications",e),t((0,a.$l)((0,s.AT)("Notification created"))),r.locationService.push("/alerting/notifications")}catch(e){t((0,a.$l)((0,s.t_)(e.data.error)))}}}function d(e){return async t=>{try{await(0,r.getBackendSrv)().put(`/api/alert-notifications/${e.id}`,e),t((0,a.$l)((0,s.AT)("Notification updated")))}catch(e){t((0,a.$l)((0,s.t_)(e.data.error)))}}}function u(e){return async(t,n)=>{const a=n().notificationChannel.notificationChannel;await(0,r.getBackendSrv)().post("/api/alert-notifications/test",Object.assign({id:a.id},e))}}function p(){return async e=>{const t=(await(0,r.getBackendSrv)().get("/api/alert-notifiers")).sort(((e,t)=>e.name>t.name?1:-1));e((0,i.T2)(t))}}function g(e){return async t=>{await t(p());const n=await(0,r.getBackendSrv)().get(`/api/alert-notifications/${e}`);t((0,i.K)(n))}}},"./public/app/features/alerting/utils/notificationChannels.ts":(e,t,n)=>{n.d(t,{Pg:()=>a,YV:()=>i,dv:()=>l,t7:()=>s});var r=n("../../opt/drone/yarncache/memoize-one-npm-6.0.0-8b2a2cd020-f185ea69f7.zip/node_modules/memoize-one/dist/memoize-one.esm.js");const a={id:-1,name:"",type:{value:"email",label:"Email"},sendReminder:!1,disableResolveMessage:!1,frequency:"15m",settings:{uploadImage:n("./packages/grafana-runtime/src/index.ts").config.rendererAvailable,autoResolve:!0,httpMethod:"POST",severity:"critical"},secureSettings:{},secureFields:{},isDefault:!1},s=(0,r.Z)(((e,t)=>e.map((e=>t?{value:e.value,label:e.label,description:e.description}:{value:e.value,label:e.label})))),i=e=>{const t=Object.fromEntries(Object.entries(e.settings).map((e=>{let[t,n]=e;return[t,n&&n.hasOwnProperty("value")?n.value:n]})));return Object.assign({},a,e,{frequency:""===e.frequency?a.frequency:e.frequency,type:e.type.value,settings:Object.assign({},a.settings,t),secureSettings:Object.assign({},e.secureSettings)})},l=e=>{var t;return{name:e.name,type:e.type.value,frequency:null!==(t=e.frequency)&&void 0!==t?t:a.frequency,settings:Object.assign({},Object.assign(a.settings,e.settings)),secureSettings:Object.assign({},e.secureSettings)}}}}]);
//# sourceMappingURL=NewNotificationChannel.e7c4f9b46d58a170d773.js.map