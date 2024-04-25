"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8932],{"./public/app/features/folders/components/NewDashboardsFolder.tsx":(e,a,r)=>{r.r(a),r.d(a,{NewDashboardsFolder:()=>x,default:()=>v});var s,t,n=r("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),d=r("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/3/opt/drone/yarncache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),o=r("./packages/grafana-ui/src/index.ts"),l=r("./public/app/core/components/Page/Page.tsx"),c=r("./public/app/core/selectors/navModel.ts"),i=r("./public/app/features/manage-dashboards/services/ValidationSrv.ts"),u=r("./public/app/features/folders/state/actions.ts"),p=r("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");function m(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}const h={createNewFolder:u.W7},b=(0,d.connect)((e=>({navModel:(0,c.h)(e.navIndex,"manage-dashboards")})),h),f={folderName:""};class x extends n.PureComponent{constructor(){super(...arguments),m(this,"onSubmit",(e=>{this.props.createNewFolder(e.folderName)})),m(this,"validateFolderName",(e=>i.t.validateNewFolderName(e).then((()=>!0)).catch((e=>e.message))))}render(){return(0,p.jsx)(l.Z,{navModel:this.props.navModel,children:(0,p.jsxs)(l.Z.Contents,{children:[s||(s=(0,p.jsx)("h3",{children:"New dashboard folder"})),(0,p.jsx)(o.Form,{defaultValues:f,onSubmit:this.onSubmit,children:e=>{let{register:a,errors:r}=e;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o.Field,{label:"Folder name",invalid:!!r.folderName,error:r.folderName&&r.folderName.message,children:(0,p.jsx)(o.Input,Object.assign({id:"folder-name-input"},a("folderName",{required:"Folder name is required.",validate:async e=>await this.validateFolderName(e)})))}),t||(t=(0,p.jsx)(o.Button,{type:"submit",children:"Create"}))]})}})]})})}}const v=b(x)}}]);
//# sourceMappingURL=NewDashboardsFolder.e7c4f9b46d58a170d773.js.map