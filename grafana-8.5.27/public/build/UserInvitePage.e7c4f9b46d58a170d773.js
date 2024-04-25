"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7707],{"./public/app/features/org/UserInvitePage.tsx":(e,a,r)=>{r.r(a),r.d(a,{UserInvitePage:()=>E,default:()=>k});r("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");var n,i=r("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/3/opt/drone/yarncache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),s=r("./public/app/core/components/Page/Page.tsx"),l=r("./public/app/core/core.ts"),t=r("./public/app/core/selectors/navModel.ts"),c=r("./packages/grafana-data/src/index.ts"),o=r("./packages/grafana-runtime/src/index.ts"),d=r("./packages/grafana-ui/src/index.ts"),u=r("./public/app/core/config.ts"),p=r("./public/app/types/index.ts"),m=r("./public/app/features/invites/state/actions.ts"),x=r("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const h=["ref"];const g=[{label:"Viewer",value:p.B5.Viewer},{label:"Editor",value:p.B5.Editor},{label:"Admin",value:p.B5.Admin}],b={name:"",email:"",role:p.B5.Editor,sendEmail:!0},j=()=>{const e=(0,p.I0)();return(0,x.jsx)(d.Form,{defaultValues:b,onSubmit:async a=>{await e((0,m.MA)(a)).unwrap(),o.locationService.push("/org/users/")},children:e=>{let{register:a,control:r,errors:i}=e;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(d.Field,{invalid:!!i.loginOrEmail,error:i.loginOrEmail?"Email or username is required":void 0,label:"Email or username",children:(0,x.jsx)(d.Input,Object.assign({},a("loginOrEmail",{required:!0}),{placeholder:"email@example.com"}))}),(0,x.jsx)(d.Field,{invalid:!!i.name,label:"Name",children:(0,x.jsx)(d.Input,Object.assign({},a("name"),{placeholder:"(optional)"}))}),(0,x.jsx)(d.Field,{invalid:!!i.role,label:"Role",children:(0,x.jsx)(d.InputControl,{render:e=>{let{}=e,a=function(e,a){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],a.indexOf(r)>=0||(i[r]=e[r]);return i}(e.field,h);return(0,x.jsx)(d.RadioButtonGroup,Object.assign({},a,{options:g}))},control:r,name:"role"})}),(0,x.jsx)(d.Field,{label:"Send invite email",children:(0,x.jsx)(d.Switch,Object.assign({id:"send-email-switch"},a("sendEmail")))}),(0,x.jsxs)(d.HorizontalGroup,{children:[n||(n=(0,x.jsx)(d.Button,{type:"submit",children:"Submit"})),(0,x.jsx)(d.LinkButton,{href:c.locationUtil.assureBaseUrl((0,u.iE)().appSubUrl+"/org/users"),variant:"secondary",children:"Back"})]})]})}})};var v,f;const E=e=>{let{navModel:a}=e;return(0,x.jsx)(s.Z,{navModel:a,children:(0,x.jsxs)(s.Z.Contents,{children:[v||(v=(0,x.jsx)("h3",{className:"page-sub-heading",children:"Invite user"})),(0,x.jsxs)("div",{className:"p-b-2",children:["Send invitation or add existing Grafana user to the organization.",(0,x.jsxs)("span",{className:"highlight-word",children:[" ",l.Vt.user.orgName]})]}),f||(f=(0,x.jsx)(j,{}))]})})},k=(0,i.connect)((e=>({navModel:(0,t.h)(e.navIndex,"users")})))(E)}}]);
//# sourceMappingURL=UserInvitePage.e7c4f9b46d58a170d773.js.map