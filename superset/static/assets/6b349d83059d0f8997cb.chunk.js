"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1611],{29848:(t,e,n)=>{n.d(e,{Z:()=>d}),n(67294);var a=n(51995),o=n(58593),l=n(70707),r=n(11965);const s=a.iK.span`
  white-space: nowrap;
  min-width: 100px;
  svg,
  i {
    margin-right: 8px;

    &:hover {
      path {
        fill: ${t=>{let{theme:e}=t;return e.colors.primary.base}};
      }
    }
  }
`,i=a.iK.span`
  color: ${t=>{let{theme:e}=t;return e.colors.grayscale.base}};
`;function d(t){let{actions:e}=t;return(0,r.tZ)(s,{className:"actions"},e.map(((t,e)=>{const n=l.Z[t.icon];return t.tooltip?(0,r.tZ)(o.u,{id:`${t.label}-tooltip`,title:t.tooltip,placement:t.placement,key:e},(0,r.tZ)(i,{role:"button",tabIndex:0,className:"action-button",onClick:t.onClick},(0,r.tZ)(n,null))):(0,r.tZ)(i,{role:"button",tabIndex:0,className:"action-button",onClick:t.onClick,key:e},(0,r.tZ)(n,null))})))}},98217:(t,e,n)=>{n.r(e),n.d(e,{default:()=>N});var a=n(67294),o=n(16550),l=n(73727),r=n(51995),s=n(11965),i=n(61988),d=n(31069),c=n(30381),u=n.n(c),m=n(15926),h=n.n(m),p=n(29848),g=n(19259),Z=n(17198),_=n(93139),b=n(86074),f=n(98286),y=n(14114),x=n(34858),v=n(40768),$=n(62276),w=n(70707),k=n(74069),S=n(94670);const C=r.iK.div`
  margin: ${t=>{let{theme:e}=t;return 2*e.gridUnit}}px auto
    ${t=>{let{theme:e}=t;return 4*e.gridUnit}}px auto;
`,D=(0,r.iK)(S.Ad)`
  border-radius: ${t=>{let{theme:e}=t;return e.borderRadius}}px;
  border: 1px solid ${t=>{let{theme:e}=t;return e.colors.secondary.light2}};
`,A=r.iK.div`
  margin-bottom: ${t=>{let{theme:e}=t;return 5*e.gridUnit}}px;

  .control-label {
    margin-bottom: ${t=>{let{theme:e}=t;return 2*e.gridUnit}}px;
  }

  .required {
    margin-left: ${t=>{let{theme:e}=t;return e.gridUnit/2}}px;
    color: ${t=>{let{theme:e}=t;return e.colors.error.base}};
  }

  textarea {
    flex: 1 1 auto;
    height: ${t=>{let{theme:e}=t;return 17*e.gridUnit}}px;
    resize: none;
    width: 100%;
  }

  textarea,
  input[type='text'] {
    padding: ${t=>{let{theme:e}=t;return 1.5*e.gridUnit}}px
      ${t=>{let{theme:e}=t;return 2*e.gridUnit}}px;
    border: 1px solid ${t=>{let{theme:e}=t;return e.colors.grayscale.light2}};
    border-radius: ${t=>{let{theme:e}=t;return e.gridUnit}}px;
  }

  input[type='text'] {
    width: 65%;
  }
`,T=(0,y.ZP)((t=>{var e,n;let{addDangerToast:o,addSuccessToast:l,annotationLayerId:r,annotation:d=null,onAnnotationAdd:c,onHide:m,show:h}=t;const[p,g]=(0,a.useState)(!0),[Z,_]=(0,a.useState)(null),b=null!==d,{state:{loading:f,resource:y},fetchResource:S,createResource:T,updateResource:H}=(0,x.LE)(`annotation_layer/${r}/annotation`,(0,i.t)("annotation"),o),N=()=>{_({short_descr:"",start_dttm:"",end_dttm:"",json_metadata:"",long_descr:""})},E=()=>{b?_(y):N(),m()},Y=t=>{const{target:e}=t,n={...Z,end_dttm:Z?Z.end_dttm:"",short_descr:Z?Z.short_descr:"",start_dttm:Z?Z.start_dttm:""};n[e.name]=e.value,_(n)};return(0,a.useEffect)((()=>{if(b&&(null==Z||!Z.id||d&&d.id!==Z.id||h)){if(null!==(null==d?void 0:d.id)&&!f){const t=d.id||0;S(t)}}else b||Z&&!Z.id&&!h||N()}),[d]),(0,a.useEffect)((()=>{y&&_(y)}),[y]),(0,a.useEffect)((()=>{var t,e,n;null!=Z&&null!=(t=Z.short_descr)&&t.length&&null!=Z&&null!=(e=Z.start_dttm)&&e.length&&null!=Z&&null!=(n=Z.end_dttm)&&n.length?g(!1):g(!0)}),[Z?Z.short_descr:"",Z?Z.start_dttm:"",Z?Z.end_dttm:""]),(0,s.tZ)(k.default,{disablePrimaryButton:p,onHandledPrimaryAction:()=>{if(b){if(null!=Z&&Z.id){const t=Z.id;delete Z.id,delete Z.created_by,delete Z.changed_by,delete Z.changed_on_delta_humanized,delete Z.layer,H(t,Z).then((t=>{t&&(c&&c(),E(),l((0,i.t)("The annotation has been updated")))}))}}else Z&&T(Z).then((t=>{t&&(c&&c(),E(),l((0,i.t)("The annotation has been saved")))}))},onHide:E,primaryButtonName:b?(0,i.t)("Save"):(0,i.t)("Add"),show:h,width:"55%",title:(0,s.tZ)("h4",null,b?(0,s.tZ)(w.Z.EditAlt,{css:v.xL}):(0,s.tZ)(w.Z.PlusLarge,{css:v.xL}),b?(0,i.t)("Edit annotation"):(0,i.t)("Add annotation"))},(0,s.tZ)(C,null,(0,s.tZ)("h4",null,(0,i.t)("Basic information"))),(0,s.tZ)(A,null,(0,s.tZ)("div",{className:"control-label"},(0,i.t)("Annotation name"),(0,s.tZ)("span",{className:"required"},"*")),(0,s.tZ)("input",{name:"short_descr",onChange:Y,type:"text",value:null==Z?void 0:Z.short_descr})),(0,s.tZ)(A,null,(0,s.tZ)("div",{className:"control-label"},(0,i.t)("date"),(0,s.tZ)("span",{className:"required"},"*")),(0,s.tZ)($.S,{placeholder:[(0,i.t)("Start date"),(0,i.t)("End date")],format:"YYYY-MM-DD HH:mm",onChange:(t,e)=>{const n={...Z,end_dttm:Z&&e[1].length?u()(e[1]).format("YYYY-MM-DD HH:mm"):"",short_descr:Z?Z.short_descr:"",start_dttm:Z&&e[0].length?u()(e[0]).format("YYYY-MM-DD HH:mm"):""};_(n)},showTime:{format:"hh:mm a"},use12Hours:!0,value:null!=Z&&null!=(e=Z.start_dttm)&&e.length||null!=Z&&null!=(n=Z.end_dttm)&&n.length?[u()(Z.start_dttm),u()(Z.end_dttm)]:null})),(0,s.tZ)(C,null,(0,s.tZ)("h4",null,(0,i.t)("Additional information"))),(0,s.tZ)(A,null,(0,s.tZ)("div",{className:"control-label"},(0,i.t)("description")),(0,s.tZ)("textarea",{name:"long_descr",value:Z?Z.long_descr:"",placeholder:(0,i.t)("Description (this can be seen in the list)"),onChange:Y})),(0,s.tZ)(A,null,(0,s.tZ)("div",{className:"control-label"},(0,i.t)("JSON metadata")),(0,s.tZ)(D,{onChange:t=>{const e={...Z,end_dttm:Z?Z.end_dttm:"",json_metadata:t,short_descr:Z?Z.short_descr:"",start_dttm:Z?Z.start_dttm:""};_(e)},value:null!=Z&&Z.json_metadata?Z.json_metadata:"",width:"100%",height:"120px"})))})),H=r.iK.div`
  ${t=>{let{theme:e}=t;return s.iv`
    display: flex;
    flex-direction: row;

    a,
    Link {
      margin-left: ${4*e.gridUnit}px;
      font-size: ${e.typography.sizes.s}px;
      font-weight: ${e.typography.weights.normal};
      text-decoration: underline;
    }
  `}}
`,N=(0,y.ZP)((function(t){let{addDangerToast:e,addSuccessToast:n}=t;const{annotationLayerId:r}=(0,o.UO)(),{state:{loading:c,resourceCount:m,resourceCollection:y,bulkSelectEnabled:$},fetchData:w,refreshData:k,toggleBulkSelect:S}=(0,x.Yi)(`annotation_layer/${r}/annotation`,(0,i.t)("annotation"),e,!1),[C,D]=(0,a.useState)(!1),[A,N]=(0,a.useState)(""),[E,Y]=(0,a.useState)(null),[U,L]=(0,a.useState)(null),B=t=>{Y(t),D(!0)},M=(0,a.useCallback)((async function(){try{const t=await d.Z.get({endpoint:`/api/v1/annotation_layer/${r}`});N(t.json.result.name)}catch(t){await(0,f.O$)(t).then((t=>{let{error:n}=t;e(n.error||n.statusText||n)}))}}),[r]);(0,a.useEffect)((()=>{M()}),[M]);const j=[{id:"short_descr",desc:!0}],K=(0,a.useMemo)((()=>[{accessor:"short_descr",Header:(0,i.t)("Label")},{accessor:"long_descr",Header:(0,i.t)("Description")},{Cell:t=>{let{row:{original:{start_dttm:e}}}=t;return u()(new Date(e)).format("ll")},Header:(0,i.t)("Start"),accessor:"start_dttm"},{Cell:t=>{let{row:{original:{end_dttm:e}}}=t;return u()(new Date(e)).format("ll")},Header:(0,i.t)("End"),accessor:"end_dttm"},{Cell:t=>{let{row:{original:e}}=t;const n=[{label:"edit-action",tooltip:(0,i.t)("Edit annotation"),placement:"bottom",icon:"Edit",onClick:()=>B(e)},{label:"delete-action",tooltip:(0,i.t)("Delete annotation"),placement:"bottom",icon:"Trash",onClick:()=>L(e)}];return(0,s.tZ)(p.Z,{actions:n})},Header:(0,i.t)("Actions"),id:"actions",disableSortBy:!0}]),[!0,!0]),P=[];P.push({name:(0,s.tZ)(a.Fragment,null,(0,s.tZ)("i",{className:"fa fa-plus"})," ",(0,i.t)("Annotation")),buttonStyle:"primary",onClick:()=>{B(null)}}),P.push({name:(0,i.t)("Bulk select"),onClick:S,buttonStyle:"secondary","data-test":"annotation-bulk-select"});let z=!0;try{(0,o.k6)()}catch(t){z=!1}const I={title:(0,i.t)("No annotation yet"),image:"filter-results.svg",buttonAction:()=>{B(null)},buttonText:(0,s.tZ)(a.Fragment,null,(0,s.tZ)("i",{className:"fa fa-plus"})," ",(0,i.t)("Annotation"))};return(0,s.tZ)(a.Fragment,null,(0,s.tZ)(b.Z,{name:(0,s.tZ)(H,null,(0,s.tZ)("span",null,(0,i.t)("Annotation Layer %s",A)),(0,s.tZ)("span",null,z?(0,s.tZ)(l.rU,{to:"/annotationlayer/list/"},(0,i.t)("Back to all")):(0,s.tZ)("a",{href:"/annotationlayer/list/"},(0,i.t)("Back to all")))),buttons:P}),(0,s.tZ)(T,{addDangerToast:e,addSuccessToast:n,annotation:E,show:C,onAnnotationAdd:()=>k(),annotationLayerId:r,onHide:()=>D(!1)}),U&&(0,s.tZ)(Z.Z,{description:(0,i.t)("Are you sure you want to delete %s?",null==U?void 0:U.short_descr),onConfirm:()=>{U&&(t=>{let{id:a,short_descr:o}=t;d.Z.delete({endpoint:`/api/v1/annotation_layer/${r}/annotation/${a}`}).then((()=>{k(),L(null),n((0,i.t)("Deleted: %s",o))}),(0,v.v$)((t=>e((0,i.t)("There was an issue deleting %s: %s",o,t)))))})(U)},onHide:()=>L(null),open:!0,title:(0,i.t)("Delete Annotation?")}),(0,s.tZ)(g.Z,{title:(0,i.t)("Please confirm"),description:(0,i.t)("Are you sure you want to delete the selected annotations?"),onConfirm:t=>{d.Z.delete({endpoint:`/api/v1/annotation_layer/${r}/annotation/?q=${h().encode(t.map((t=>{let{id:e}=t;return e})))}`}).then((t=>{let{json:e={}}=t;k(),n(e.message)}),(0,v.v$)((t=>e((0,i.t)("There was an issue deleting the selected annotations: %s",t)))))}},(t=>{const a=[{key:"delete",name:(0,i.t)("Delete"),onSelect:t,type:"danger"}];return(0,s.tZ)(_.Z,{className:"annotations-list-view",bulkActions:a,bulkSelectEnabled:$,columns:K,count:m,data:y,disableBulkSelect:S,emptyState:I,fetchData:w,addDangerToast:e,addSuccessToast:n,refreshData:k,initialSort:j,loading:c,pageSize:25})})))}))}}]);
//# sourceMappingURL=6b349d83059d0f8997cb.chunk.js.map