"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[685],{"./public/app/features/inspector/InspectDataTab.tsx":(e,t,a)=>{a.d(t,{E:()=>D});var s=a("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),n=a("../../opt/drone/yarncache/file-saver-npm-2.0.5-2c3bc40d53-c62d96e5ce.zip/node_modules/file-saver/dist/FileSaver.min.js"),r=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),o=a("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/3/opt/drone/yarncache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js"),i=a("./packages/grafana-data/src/index.ts"),l=a("./packages/grafana-e2e-selectors/src/index.ts"),d=a("./packages/grafana-ui/src/index.ts"),c=a("./public/app/core/config.ts"),p=a("./public/app/core/logs_model.ts"),u=a("./public/app/plugins/datasource/jaeger/responseTransform.ts"),m=a("./public/app/plugins/datasource/tempo/resultTransformer.ts"),h=a("./public/app/plugins/datasource/zipkin/utils/transforms.ts"),g=a("./public/app/core/components/QueryOperationRow/QueryOperationRow.tsx"),f=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const v=e=>s.css`
  margin: 0;
  margin-left: ${e.spacing.md};
  font-size: ${e.typography.size.sm};
  color: ${e.colors.textWeak};
`,x=e=>{let{children:t}=e;const a=(0,d.useStyles)(v);return(0,f.jsx)("p",{className:a,children:t})};var b=a("./public/app/features/inspector/styles.ts");const y=e=>{var t;let{options:a,onOptionsChange:s,panel:n,data:r,dataFrames:o,transformId:l,transformationOptions:c,selectedDataFrame:p,onDataFrameChange:u,downloadForExcel:m,toggleDownloadForExcel:h}=e;const v=(0,b.S)(),y=null==n?void 0:n.getTransformations(),j=Boolean(null==y?void 0:y.length)&&"join by time"!==l,w=n&&!(null!==(t=n.plugin)&&void 0!==t&&t.fieldConfigRegistry.isEmpty());let S=o;p===i.DataTransformerID.seriesToColumns&&(S=r);const D=[...c,...S.map(((e,t)=>({value:t,label:`${(0,i.getFrameDisplayName)(e)} (${t})`})))];return(0,f.jsx)("div",{className:v.dataDisplayOptions,children:(0,f.jsx)(g.t,{id:"Data options",index:0,title:"Data options",headerElement:(0,f.jsx)(x,{children:function(){if(!r)return"";const e=[];return p===i.DataTransformerID.seriesToColumns?e.push("Series joined by time"):r.length>1&&e.push((0,i.getFrameDisplayName)(r[p])),(a.withTransforms||a.withFieldConfig)&&(a.withTransforms&&e.push("Panel transforms"),a.withTransforms&&a.withFieldConfig,a.withFieldConfig&&e.push("Formatted data")),m&&e.push("Excel header"),e.join(", ")}()}),isOpen:!1,children:(0,f.jsx)("div",{className:v.options,"data-testid":"dataOptions",children:(0,f.jsxs)(d.VerticalGroup,{spacing:"none",children:[r.length>1&&(0,f.jsx)(d.Field,{label:"Show data frame",children:(0,f.jsx)(d.Select,{menuShouldPortal:!0,options:D,value:p,onChange:u,width:30,"aria-label":"Select dataframe"})}),(0,f.jsxs)(d.HorizontalGroup,{children:[j&&s&&(0,f.jsx)(d.Field,{label:"Apply panel transformations",description:"Table data is displayed with transformations defined in the panel Transform tab.",children:(0,f.jsx)(d.Switch,{value:!!a.withTransforms,onChange:()=>s(Object.assign({},a,{withTransforms:!a.withTransforms}))})}),w&&s&&(0,f.jsx)(d.Field,{label:"Formatted data",description:"Table data is formatted with options defined in the Field and Override tabs.",children:(0,f.jsx)(d.Switch,{id:"formatted-data-toggle",value:!!a.withFieldConfig,onChange:()=>s(Object.assign({},a,{withFieldConfig:!a.withFieldConfig}))})}),(0,f.jsx)(d.Field,{label:"Download for Excel",description:"Adds header to CSV for use with Excel",children:(0,f.jsx)(d.Switch,{id:"excel-toggle",value:m,onChange:h})})]})]})})})})};var j,w;function S(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class D extends r.PureComponent{constructor(e){var t,a;super(e),t=this,S(this,"exportCsv",(function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{panel:s}=t.props,{transformId:r}=t.state,o=(0,i.toCSV)([e],a),l=new Blob([String.fromCharCode(65279),o],{type:"text/csv;charset=utf-8"}),d=s?s.getDisplayTitle():"Explore",c=r!==i.DataTransformerID.noop?"-as-"+r.toLocaleLowerCase():"",p=`${d}-data${c}-${(0,i.dateTimeFormat)(new Date)}.csv`;(0,n.saveAs)(l,p)})),S(this,"exportLogsAsTxt",(()=>{var e;const{data:t,panel:a}=this.props,s=(0,p.aB)(t||[],void 0);let r="";null===(e=s.meta)||void 0===e||e.forEach((e=>{const t=`${e.label}: ${JSON.stringify(e.value)}\n`;r+=t})),r+="\n\n",s.rows.forEach((e=>{const t=(0,i.dateTimeFormatISO)(e.timeEpochMs)+"\t"+e.entry+"\n";r+=t}));const o=new Blob([r],{type:"text/plain;charset=utf-8"}),l=`${a?a.getDisplayTitle():"Explore"}-logs-${(0,i.dateTimeFormat)(new Date)}.txt`;(0,n.saveAs)(o,l)})),S(this,"exportTracesAsJson",(()=>{var e,t;const{data:a,panel:s}=this.props;if(a)for(const r of a){var n;if("trace"===(null===(n=r.meta)||void 0===n?void 0:n.preferredVisualisationType))switch(null===(e=r.meta)||void 0===e||null===(t=e.custom)||void 0===t?void 0:t.traceFormat){case"jaeger":{let e=(0,u.c6)(new i.MutableDataFrame(r));this.saveTraceJson(e,s);break}case"zipkin":{let e=(0,h.H)(new i.MutableDataFrame(r));this.saveTraceJson(e,s);break}default:{let e=(0,m.g9)(new i.MutableDataFrame(r));this.saveTraceJson(e,s);break}}}})),S(this,"saveTraceJson",((e,t)=>{const a=new Blob([JSON.stringify(e)],{type:"application/json"}),s=`${t?t.getDisplayTitle():"Explore"}-traces-${(0,i.dateTimeFormat)(new Date)}.json`;(0,n.saveAs)(a,s)})),S(this,"onDataFrameChange",(e=>{this.setState({transformId:e.value===i.DataTransformerID.seriesToColumns?i.DataTransformerID.seriesToColumns:i.DataTransformerID.noop,dataFrameIndex:"number"==typeof e.value?e.value:0,selectedDataFrame:e.value})})),S(this,"toggleDownloadForExcel",(()=>{this.setState((e=>({downloadForExcel:!e.downloadForExcel})))})),this.state={selectedDataFrame:0,dataFrameIndex:0,transformId:i.DataTransformerID.noop,transformationOptions:T(),transformedData:null!==(a=e.data)&&void 0!==a?a:[],downloadForExcel:!1}}componentDidUpdate(e,t){if(this.props.data)if(this.props.options.withTransforms)this.setState({transformedData:this.props.data});else if(e.data===this.props.data&&t.transformId===this.state.transformId);else{const e=this.state.transformationOptions.find((e=>e.value===this.state.transformId));if(e&&e.transformer.id!==i.DataTransformerID.noop){const t=this.state.selectedDataFrame,a=this.state.dataFrameIndex,s=(0,i.transformDataFrame)([e.transformer],this.props.data).subscribe((e=>{this.setState({transformedData:e,selectedDataFrame:t,dataFrameIndex:a},(()=>s.unsubscribe()))}));return}this.setState({transformedData:this.props.data})}else this.setState({transformedData:[]})}getProcessedData(){const{options:e,panel:t,timeZone:a}=this.props,s=this.state.transformedData;return e.withFieldConfig&&t?(0,i.applyFieldOverrides)({data:s,theme:c.vc.theme2,fieldConfig:t.fieldConfig,timeZone:a,replaceVariables:e=>e}):(0,i.applyRawFieldOverrides)(s)}render(){const{isLoading:e,options:t,data:a,panel:n,onOptionsChange:r}=this.props,{dataFrameIndex:i,transformId:c,transformationOptions:p,selectedDataFrame:u,downloadForExcel:m}=this.state,h=(0,b.S)();if(e)return j||(j=(0,f.jsxs)("div",{children:[(0,f.jsx)(d.Spinner,{inline:!0})," Loading"]}));const g=this.getProcessedData();if(!g||!g.length)return w||(w=(0,f.jsx)("div",{children:"No Data"}));const v=g[i]?i:0,x=g[v],S=g.some((e=>{var t;return"logs"===(null==e||null===(t=e.meta)||void 0===t?void 0:t.preferredVisualisationType)})),D=g.some((e=>{var t;return"trace"===(null==e||null===(t=e.meta)||void 0===t?void 0:t.preferredVisualisationType)}));return(0,f.jsxs)("div",{className:h.wrap,"aria-label":l.wl.components.PanelInspector.Data.content,children:[(0,f.jsxs)("div",{className:h.toolbar,children:[(0,f.jsx)(y,{data:a,panel:n,options:t,dataFrames:g,transformId:c,transformationOptions:p,selectedDataFrame:u,downloadForExcel:m,onOptionsChange:r,onDataFrameChange:this.onDataFrameChange,toggleDownloadForExcel:this.toggleDownloadForExcel}),(0,f.jsx)(d.Button,{variant:"primary",onClick:()=>this.exportCsv(g[i],{useExcelHeader:this.state.downloadForExcel}),className:s.css`
              margin-bottom: 10px;
            `,children:"Download CSV"}),S&&(0,f.jsx)(d.Button,{variant:"primary",onClick:this.exportLogsAsTxt,className:s.css`
                margin-bottom: 10px;
                margin-left: 10px;
              `,children:"Download logs"}),D&&(0,f.jsx)(d.Button,{variant:"primary",onClick:this.exportTracesAsJson,className:s.css`
                margin-bottom: 10px;
                margin-left: 10px;
              `,children:"Download traces"})]}),(0,f.jsx)("div",{className:h.content,children:(0,f.jsx)(o.Z,{children:e=>{let{width:t,height:a}=e;return 0===t?null:(0,f.jsx)("div",{style:{width:t,height:a},children:(0,f.jsx)(d.Table,{width:t,height:a,data:x,showTypeIcons:!0})})}})})]})}}function T(){return[{value:i.DataTransformerID.seriesToColumns,label:"Series joined by time",transformer:{id:i.DataTransformerID.seriesToColumns,options:{byField:"Time"}}}]}},"./public/app/features/inspector/InspectErrorTab.tsx":(e,t,a)=>{a.d(t,{l:()=>l});a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");var s,n,r,o=a("./packages/grafana-ui/src/index.ts"),i=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const l=e=>{let{error:t}=e;if(!t)return null;if(t.data)return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h4",{children:t.data.message}),(0,i.jsx)(o.JSONFormatter,{json:t,open:2})]});if(t.message){const{msg:e,json:a}=(e=>{try{const[t,a]=e.split(/(\{.+)/);return{msg:t,json:JSON.parse(a)}}catch{return{msg:e}}})(t.message);return a?(0,i.jsxs)(i.Fragment,{children:[""!==e&&(n||(n=(0,i.jsx)("h3",{children:e}))),r||(r=(0,i.jsx)(o.JSONFormatter,{json:a,open:5}))]}):s||(s=(0,i.jsx)("div",{children:e}))}return(0,i.jsx)(o.JSONFormatter,{json:t,open:2})}},"./public/app/features/inspector/InspectJSONTab.tsx":(e,t,a)=>{a.d(t,{W:()=>h});var s,n=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),r=a("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/3/opt/drone/yarncache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js"),o=a("./packages/grafana-data/src/index.ts"),i=a("./packages/grafana-e2e-selectors/src/index.ts"),l=a("./packages/grafana-ui/src/index.ts"),d=a("./public/app/core/core.ts"),c=a("./public/app/features/inspector/styles.ts"),p=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}!function(e){e.PanelJSON="panel",e.PanelData="data",e.DataFrames="frames"}(s||(s={}));const m=[{label:"Panel JSON",description:"The model saved in the dashboard JSON that configures how everything works.",value:s.PanelJSON},{label:"Panel data",description:"The raw model passed to the panel visualization",value:s.PanelData},{label:"DataFrame JSON",description:"JSON formatted DataFrames",value:s.DataFrames}];class h extends n.PureComponent{constructor(e){super(e),u(this,"hasPanelJSON",void 0),u(this,"onSelectChanged",(e=>{const t=g(this.getJSONObject(e.value));this.setState({text:t,show:e.value})})),u(this,"onTextChanged",(e=>{this.setState({text:e})})),u(this,"onApplyPanelModel",(()=>{const{panel:e,dashboard:t,onClose:a}=this.props;if(this.hasPanelJSON){try{if(t.meta.canEdit){const a=JSON.parse(this.state.text);t.shouldUpdateDashboardPanelFromJSON(a,e),e.restoreModel(a),e.refresh(),d.h$.emit(o.AppEvents.alertSuccess,["Panel model updated"])}else d.h$.emit(o.AppEvents.alertError,["Unable to apply"])}catch(e){console.error("Error applying updates",e),d.h$.emit(o.AppEvents.alertError,["Invalid JSON text"])}a()}})),this.hasPanelJSON=!(!e.panel||!e.dashboard),this.state={show:this.hasPanelJSON?s.PanelJSON:s.DataFrames,text:this.hasPanelJSON?g(e.panel.getSaveModel()):g(e.data)}}getJSONObject(e){const{data:t,panel:a}=this.props;if(e===s.PanelData)return t;if(e===s.DataFrames){return(null==t?void 0:t.series)?t.series.map((e=>(0,o.dataFrameToJSON)(e))):{note:"Missing Response Data"}}return this.hasPanelJSON&&e===s.PanelJSON?a.getSaveModel():{note:`Unknown Object: ${e}`}}render(){const{dashboard:e}=this.props,{show:t,text:a}=this.state,n=this.hasPanelJSON?m:m.slice(1,m.length),o=m.find((e=>e.value===t)),d=t===s.PanelJSON,u=e&&e.meta.canEdit,h=(0,c.S)();return(0,p.jsxs)("div",{className:h.wrap,children:[(0,p.jsxs)("div",{className:h.toolbar,"aria-label":i.wl.components.PanelInspector.Json.content,children:[(0,p.jsx)(l.Field,{label:"Select source",className:"flex-grow-1",children:(0,p.jsx)(l.Select,{inputId:"select-source-dropdown",options:n,value:o,onChange:this.onSelectChanged,menuShouldPortal:!0})}),this.hasPanelJSON&&d&&u&&(0,p.jsx)(l.Button,{className:h.toolbarItem,onClick:this.onApplyPanelModel,children:"Apply"})]}),(0,p.jsx)("div",{className:h.content,children:(0,p.jsx)(r.Z,{disableWidth:!0,children:e=>{let{height:t}=e;return(0,p.jsx)(l.CodeEditor,{width:"100%",height:t,language:"json",showLineNumbers:!0,showMiniMap:(a&&a.length)>100,value:a||"",readOnly:!d,onBlur:this.onTextChanged})}})})]})}}function g(e){return JSON.stringify(e,null,2)}},"./public/app/features/inspector/InspectStatsTab.tsx":(e,t,a)=>{a.d(t,{f:()=>p});a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");var s=a("./packages/grafana-e2e-selectors/src/index.ts"),n=a("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),r=a("./packages/grafana-data/src/index.ts"),o=a("./packages/grafana-ui/src/index.ts"),i=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const l=e=>{let{timeZone:t,name:a,stats:s}=e;const n=(0,o.useTheme2)(),r=c(n);return s&&s.length?(0,i.jsxs)("div",{className:r.wrapper,children:[(0,i.jsx)("div",{className:"section-heading",children:a}),(0,i.jsx)("table",{className:"filter-table width-30",children:(0,i.jsx)("tbody",{children:s.map(((e,a)=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:e.displayName}),(0,i.jsx)("td",{className:r.cell,children:d(e,t,n)})]},`${e.displayName}-${a}`)))})})]}):null};function d(e,t,a){const s=(0,r.getDisplayProcessor)({field:{type:r.FieldType.number,config:e},theme:a,timeZone:t});return(0,r.formattedValueToString)(s(e.value))}const c=(0,o.stylesFactory)((e=>({wrapper:n.css`
      padding-bottom: ${e.spacing(2)};
    `,cell:n.css`
      text-align: right;
    `}))),p=e=>{var t;let{data:a,timeZone:n}=e;if(!a.request)return null;let r=[];const o=a.request.endTime?a.request.endTime-a.request.startTime:-1,d=(null===(t=a.timings)||void 0===t?void 0:t.dataProcessingTime)||-1;let c=0;for(const e of a.series)c+=e.length;o>0&&r.push({displayName:"Total request time",value:o,unit:"ms"}),d>0&&r.push({displayName:"Data processing time",value:d,unit:"ms"}),r.push({displayName:"Number of queries",value:a.request.targets.length}),r.push({displayName:"Total number rows",value:c});let p=[];for(const e of a.series)e.meta&&e.meta.stats&&(p=p.concat(e.meta.stats));return(0,i.jsxs)("div",{"aria-label":s.wl.components.PanelInspector.Stats.content,children:[(0,i.jsx)(l,{timeZone:n,name:"Stats",stats:r}),(0,i.jsx)(l,{timeZone:n,name:"Data source stats",stats:p})]})}},"./public/app/features/inspector/QueryInspector.tsx":(e,t,a)=>{a.d(t,{D:()=>w});var s,n,r,o,i,l=a("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),d=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),c=a("../../opt/drone/yarncache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Subscription.js"),p=a("./packages/grafana-data/src/index.ts"),u=a("./packages/grafana-e2e-selectors/src/index.ts"),m=a("./.yarn/__virtual__/@grafana-experimental-virtual-920bad95a1/3/opt/drone/yarncache/@grafana-experimental-npm-0.0.2-canary.22-45d2c4f135-b9a64c0abc.zip/node_modules/@grafana/experimental/index.js"),h=a("./packages/grafana-runtime/src/index.ts"),g=a("./packages/grafana-ui/src/index.ts"),f=a("./public/app/core/app_events.ts"),v=a("./public/app/core/services/backend_srv.ts"),x=a("./public/app/features/dashboard/components/PanelEditor/utils.ts"),b=a("./public/app/features/inspector/styles.ts"),y=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");function j(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class w extends d.PureComponent{constructor(e){super(e),j(this,"formattedJson",void 0),j(this,"subs",new c.w0),j(this,"onPanelRefresh",(()=>{this.setState((e=>Object.assign({},e,{dsQuery:{isLoading:!0,response:{}}})))})),j(this,"setFormattedJson",(e=>{this.formattedJson=e})),j(this,"getTextForClipboard",(()=>JSON.stringify(this.formattedJson,null,2))),j(this,"onClipboardSuccess",(()=>{f.Z.emit(p.AppEvents.alertSuccess,["Content copied to clipboard"])})),j(this,"onToggleExpand",(()=>{this.setState((e=>Object.assign({},e,{allNodesExpanded:!this.state.allNodesExpanded})))})),j(this,"onToggleMocking",(()=>{this.setState((e=>Object.assign({},e,{isMocking:!this.state.isMocking})))})),j(this,"getNrOfOpenNodes",(()=>null===this.state.allNodesExpanded?3:this.state.allNodesExpanded?20:1)),j(this,"setMockedResponse",(e=>{const t=e.target.value;this.setState((e=>Object.assign({},e,{mockedResponse:t})))})),this.state={executedQueries:[],allNodesExpanded:null,isMocking:!1,mockedResponse:"",dsQuery:{isLoading:!1,response:{}}}}componentDidMount(){const{panel:e}=this.props;this.subs.add(v.ae.getInspectorStream().subscribe({next:e=>this.onDataSourceResponse(e)})),e&&(this.subs.add(e.events.subscribe(h.RefreshEvent,this.onPanelRefresh)),this.updateQueryList())}componentDidUpdate(e){this.props.data!==e.data&&this.updateQueryList()}updateQueryList(){const{data:e}=this.props,t=[];if(null!=e&&e.length){let a;e.forEach(((e,s)=>{var n;const r=null===(n=e.meta)||void 0===n?void 0:n.executedQueryString;if(r){var o;const s=e.refId||"?";(null===(o=a)||void 0===o?void 0:o.refId)===s?(a.frames++,a.rows+=e.length):(a={refId:s,frames:0,rows:e.length,query:r},t.push(a))}}))}this.setState({executedQueries:t})}componentWillUnmount(){this.subs.unsubscribe()}onDataSourceResponse(e){var t;null!==(t=e.config)&&void 0!==t&&t.hideFromInspector||((e=Object.assign({},e)).headers&&delete e.headers,e.config&&(e.request=e.config,delete e.config,delete e.request.transformRequest,delete e.request.transformResponse,delete e.request.paramSerializer,delete e.request.jsonpCallbackParam,delete e.request.headers,delete e.request.requestId,delete e.request.inspect,delete e.request.retry,delete e.request.timeout),e.data&&(e.response=e.data,delete e.config,delete e.data,delete e.status,delete e.statusText,delete e.ok,delete e.url,delete e.redirected,delete e.type,delete e.$$config),this.setState((t=>Object.assign({},t,{dsQuery:{isLoading:!1,response:e}}))))}renderExecutedQueries(e){if(!e.length)return null;const t={refId:l.css`
        font-weight: ${h.config.theme.typography.weight.semibold};
        color: ${h.config.theme.colors.textBlue};
        margin-right: 8px;
      `};return(0,y.jsx)("div",{children:e.map((e=>(0,y.jsxs)(m.Stack,{gap:1,direction:"column",children:[(0,y.jsxs)("div",{children:[(0,y.jsxs)("span",{className:t.refId,children:[e.refId,":"]}),e.frames>1&&(0,y.jsxs)("span",{children:[e.frames," frames, "]}),(0,y.jsxs)("span",{children:[e.rows," rows"]})]}),(0,y.jsx)("pre",{children:e.query})]},e.refId)))})}render(){const{allNodesExpanded:e,executedQueries:t}=this.state,{panel:a,onRefreshQuery:l}=this.props,{response:d,isLoading:c}=this.state.dsQuery,p=this.getNrOfOpenNodes(),m=(0,b.S)(),h=Object.keys(d).length>0;return a&&!(0,x.sY)(a.plugin)?null:(0,y.jsxs)("div",{className:m.wrap,children:[(0,y.jsxs)("div",{"aria-label":u.wl.components.PanelInspector.Query.content,children:[s||(s=(0,y.jsx)("h3",{className:"section-heading",children:"Query inspector"})),n||(n=(0,y.jsx)("p",{className:"small muted",children:"Query inspector allows you to view raw request and response. To collect this data Grafana needs to issue a new query. Click refresh button below to trigger a new query."}))]}),this.renderExecutedQueries(t),(0,y.jsxs)("div",{className:m.toolbar,children:[(0,y.jsx)(g.Button,{icon:"sync",onClick:l,"aria-label":u.wl.components.PanelInspector.Query.refreshButton,children:"Refresh"}),h&&e&&(0,y.jsx)(g.Button,{icon:"minus",variant:"secondary",className:m.toolbarItem,onClick:this.onToggleExpand,children:"Collapse all"}),h&&!e&&(0,y.jsx)(g.Button,{icon:"plus",variant:"secondary",className:m.toolbarItem,onClick:this.onToggleExpand,children:"Expand all"}),h&&(0,y.jsx)(g.ClipboardButton,{getText:this.getTextForClipboard,onClipboardCopy:this.onClipboardSuccess,className:m.toolbarItem,icon:"copy",variant:"secondary",children:"Copy to clipboard"}),r||(r=(0,y.jsx)("div",{className:"flex-grow-1"}))]}),(0,y.jsxs)("div",{className:m.content,children:[c&&(o||(o=(0,y.jsx)(g.LoadingPlaceholder,{text:"Loading query inspector..."}))),!c&&h&&(0,y.jsx)(g.JSONFormatter,{json:d,open:p,onDidRender:this.setFormattedJson}),!c&&!h&&(i||(i=(0,y.jsx)("p",{className:"muted",children:"No request and response collected yet. Hit refresh button"})))]})]})}}},"./public/app/features/inspector/styles.ts":(e,t,a)=>{a.d(t,{S:()=>o});var s=a("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),n=a("./packages/grafana-ui/src/index.ts"),r=a("./public/app/core/config.ts");const o=(0,n.stylesFactory)((()=>({wrap:s.css`
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      flex: 1 1 0;
    `,toolbar:s.css`
      display: flex;
      width: 100%;
      flex-grow: 0;
      align-items: center;
      justify-content: flex-end;
      margin-bottom: ${r.vc.theme.spacing.sm};
    `,toolbarItem:s.css`
      margin-left: ${r.vc.theme.spacing.md};
    `,content:s.css`
      flex-grow: 1;
      height: 100%;
    `,editor:s.css`
      font-family: monospace;
      height: 100%;
      flex-grow: 1;
    `,viewer:s.css`
      overflow: scroll;
    `,dataFrameSelect:s.css`
      flex-grow: 2;
    `,leftActions:s.css`
      display: flex;
      flex-grow: 1;

      max-width: 85%;
      @media (max-width: 1345px) {
        max-width: 75%;
      }
    `,options:s.css`
      padding-top: ${r.vc.theme.spacing.sm};
    `,dataDisplayOptions:s.css`
      flex-grow: 1;
      min-width: 300px;
      margin-right: ${r.vc.theme.spacing.sm};
    `,selects:s.css`
      display: flex;
      > * {
        margin-right: ${r.vc.theme.spacing.sm};
      }
    `})))},"./public/app/features/query/components/QueryEditorRows.tsx":(e,t,a)=>{a.d(t,{l:()=>d});var s=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),n=a("./.yarn/__virtual__/react-beautiful-dnd-virtual-27e4b658e7/3/opt/drone/yarncache/react-beautiful-dnd-npm-13.1.0-fcf5568b1c-12b7e9fbe8.zip/node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js"),r=a("./packages/grafana-runtime/src/index.ts"),o=a("./public/app/features/query/components/QueryEditorRow.tsx"),i=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class d extends s.PureComponent{constructor(){super(...arguments),l(this,"onRemoveQuery",(e=>{this.props.onQueriesChange(this.props.queries.filter((t=>t!==e)))})),l(this,"onDragStart",(e=>{const{queries:t,dsSettings:a}=this.props;(0,r.reportInteraction)("query_row_reorder_started",{startIndex:e.source.index,numberOfQueries:t.length,datasourceType:a.type})})),l(this,"onDragEnd",(e=>{const{queries:t,onQueriesChange:a,dsSettings:s}=this.props;if(!e||!e.destination)return;const n=e.source.index,o=e.destination.index;if(n===o)return void(0,r.reportInteraction)("query_row_reorder_canceled",{startIndex:n,endIndex:o,numberOfQueries:t.length,datasourceType:s.type});const i=Array.from(t),[l]=i.splice(n,1);i.splice(o,0,l),a(i),(0,r.reportInteraction)("query_row_reorder_ended",{startIndex:n,endIndex:o,numberOfQueries:t.length,datasourceType:s.type})}))}onChangeQuery(e,t){const{queries:a,onQueriesChange:s}=this.props;s(a.map(((a,s)=>s===t?e:a)))}onDataSourceChange(e,t){const{queries:a,onQueriesChange:s}=this.props;s(a.map(((a,s)=>{if(s!==t)return a;if(a.datasource){const t=(0,r.getDataSourceSrv)().getInstanceSettings(a.datasource);if((null==t?void 0:t.type)===e.type)return Object.assign({},a,{datasource:{uid:e.uid}})}return{refId:a.refId,hide:a.hide,datasource:{uid:e.uid}}})))}render(){const{dsSettings:e,data:t,queries:a,app:s,history:r,eventBus:l}=this.props;return(0,i.jsx)(n.Z5,{onDragStart:this.onDragStart,onDragEnd:this.onDragEnd,children:(0,i.jsx)(n.bK,{droppableId:"transformations-list",direction:"vertical",children:n=>(0,i.jsxs)("div",Object.assign({ref:n.innerRef},n.droppableProps,{children:[a.map(((n,d)=>{const p=c(n,e),u=e.meta.mixed?e=>this.onDataSourceChange(e,d):void 0;return(0,i.jsx)(o.x,{id:n.refId,index:d,data:t,query:n,dataSource:p,onChangeDataSource:u,onChange:e=>this.onChangeQuery(e,d),onRemoveQuery:this.onRemoveQuery,onAddQuery:this.props.onAddQuery,onRunQuery:this.props.onRunQueries,queries:a,app:s,history:r,eventBus:l},n.refId)})),n.placeholder]}))})})}}const c=(e,t)=>{if(!e.datasource)return t;return(0,r.getDataSourceSrv)().getInstanceSettings(e.datasource)||t}},"./public/app/plugins/datasource/zipkin/utils/transforms.ts":(e,t,a)=>{a.d(t,{H:()=>c,m:()=>r});var s=a("../../opt/drone/yarncache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js"),n=a("./packages/grafana-data/src/index.ts");function r(e){const t=e.map(o),a=new n.MutableDataFrame({fields:[{name:"traceID",type:n.FieldType.string},{name:"spanID",type:n.FieldType.string},{name:"parentSpanID",type:n.FieldType.string},{name:"operationName",type:n.FieldType.string},{name:"serviceName",type:n.FieldType.string},{name:"serviceTags",type:n.FieldType.other},{name:"startTime",type:n.FieldType.number},{name:"duration",type:n.FieldType.number},{name:"logs",type:n.FieldType.other},{name:"tags",type:n.FieldType.other}],meta:{preferredVisualisationType:"trace",custom:{traceFormat:"zipkin"}}});for(const e of t)a.add(e);return a}function o(e){var t,a,s,n;const r={traceID:e.traceId,spanID:e.id,parentSpanID:e.parentId,operationName:e.name,serviceName:(null===(t=e.localEndpoint)||void 0===t?void 0:t.serviceName)||(null===(a=e.remoteEndpoint)||void 0===a?void 0:a.serviceName)||"unknown",serviceTags:l(e),startTime:e.timestamp/1e3,duration:e.duration/1e3,logs:null!==(s=null===(n=e.annotations)||void 0===n?void 0:n.map(i))&&void 0!==s?s:[],tags:Object.keys(e.tags||{}).reduce(((t,a)=>"error"===a?(t.push({key:"error",value:!0}),t.push({key:"errorValue",value:e.tags.error}),t):(t.push({key:a,value:e.tags[a]}),t)),[])};var o,d;e.kind&&(r.tags=[{key:"kind",value:e.kind},...null!==(o=r.tags)&&void 0!==o?o:[]]);e.shared&&(r.tags=[{key:"shared",value:e.shared},...null!==(d=r.tags)&&void 0!==d?d:[]]);return r}function i(e){return{timestamp:e.timestamp,fields:[{key:"annotation",value:e.value}]}}function l(e){const t=e.localEndpoint||e.remoteEndpoint;return t?[d("ipv4",t.ipv4),d("ipv6",t.ipv6),d("port",t.port),d("endpointType",e.localEndpoint?"local":"remote")].filter(s.identity):[]}function d(e,t){if(t)return{key:e,value:t}}const c=e=>{let t=[];for(let n=0;n<e.length;n++){var a,s;const r=e.get(n);t.push(Object.assign({traceId:r.traceID,parentId:r.parentSpanID,name:r.operationName,id:r.spanID,timestamp:1e3*r.startTime,duration:1e3*r.duration},p(r),{annotations:r.logs.length?r.logs.map((e=>({timestamp:e.timestamp,value:e.fields[0].value}))):void 0,tags:r.tags.length?r.tags.filter((e=>"kind"!==e.key&&"endpointType"!==e.key&&"shared"!==e.key)).reduce(((e,t)=>"error"===t.key?Object.assign({},e,{[t.key]:r.tags.find((e=>"errorValue"===e.key)).value||""}):Object.assign({},e,{[t.key]:t.value})),{}):void 0,kind:null===(a=r.tags.find((e=>"kind"===e.key)))||void 0===a?void 0:a.value,shared:null===(s=r.tags.find((e=>"shared"===e.key)))||void 0===s?void 0:s.value}))}return t},p=e=>{var t,a,s,n;const r="local"===(null===(t=e.serviceTags.find((e=>"endpointType"===e.key)))||void 0===t?void 0:t.value)?"localEndpoint":"remoteEndpoint";return"unknown"!==e.serviceName?{[r]:{serviceName:e.serviceName,ipv4:null===(a=e.serviceTags.find((e=>"ipv4"===e.key)))||void 0===a?void 0:a.value,ipv6:null===(s=e.serviceTags.find((e=>"ipv6"===e.key)))||void 0===s?void 0:s.value,port:null===(n=e.serviceTags.find((e=>"port"===e.key)))||void 0===n?void 0:n.value}}:void 0}}}]);
//# sourceMappingURL=685.e7c4f9b46d58a170d773.js.map