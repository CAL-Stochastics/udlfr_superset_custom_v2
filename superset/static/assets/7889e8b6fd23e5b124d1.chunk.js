"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4790],{64790:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var n=r(51115),l=r(67190),a=r(10581),c=r(67294),s=r(63475),u=r(49239),i=r(92638),o=r(6915),h=r(11965);function d(e){let{echartOptions:t,emitCrossFilters:r,groupby:d,height:f,labelMap:p,onContextMenu:g,refs:v,setDataMask:m,selectedValues:b,width:w,formData:k,coltypeMapping:y}=e;const I=(0,c.useCallback)(((e,t)=>{if(null!=e&&e.children)return;const{treePath:r}=(0,i.Im)(t),n=r.join(","),l=Object.values(b);let a;a=l.includes(n)?l.filter((e=>e!==n)):[n];const c=a.map((e=>p[e]));return{dataMask:{extraFormData:{filters:0===a.length?[]:d.map(((e,t)=>{const r=c.map((e=>e[t]));return null==r?{col:e,op:"IS NULL"}:{col:e,op:"IN",val:r}}))},filterState:{value:c.length?c:null,selectedValues:a.length?a:null}},isCurrentValueSelected:l.includes(n)}}),[d,p,b]),E=(0,c.useCallback)(((e,t)=>{var n;if(!r)return;const l=null==(n=I(e,t))?void 0:n.dataMask;l&&m(l)}),[r,I,m]),C={click:e=>{const{data:t,treePathInfo:r}=e;E(t,r)},contextmenu:async e=>{if(g){e.event.stop();const{data:t,treePathInfo:r}=e,{treePath:c}=(0,i.Im)(r);if(c.length>0){const s=e.event.event,i=[],h=[];c.forEach(((e,t)=>{const r="null"===e?u.li:e;i.push({col:d[t],op:"==",val:r,formattedVal:e}),h.push({col:d[t],op:"==",val:r,formattedVal:(0,o.mj)(r,{timeFormatter:(0,n.bt)(k.dateFormat),numberFormatter:(0,l.JB)(k.numberFormat),coltype:null==y?void 0:y[(0,a.Z)(d[t])]})})})),g(s.clientX,s.clientY,{drillToDetail:i,crossFilter:I(t,r),drillBy:{filters:h,groupbyFieldName:"groupby"}})}}}};return(0,h.tZ)(s.Z,{refs:v,height:f,width:w,echartOptions:t,eventHandlers:C,selectedValues:b})}},63475:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),l=r(51995),a=r(31431),c=r(11965);const s=l.iK.div`
  height: ${e=>{let{height:t}=e;return t}};
  width: ${e=>{let{width:t}=e;return t}};
`;function u(e,t){let{width:r,height:l,echartOptions:u,eventHandlers:i,zrEventHandlers:o,selectedValues:h={},refs:d}=e;const f=(0,n.useRef)(null);d&&(d.divRef=f);const p=(0,n.useRef)(),g=(0,n.useMemo)((()=>Object.keys(h)||[]),[h]),v=(0,n.useRef)([]);(0,n.useImperativeHandle)(t,(()=>({getEchartInstance:()=>p.current}))),(0,n.useEffect)((()=>{f.current&&(p.current||(p.current=(0,a.S1)(f.current)),Object.entries(i||{}).forEach((e=>{var t,r;let[n,l]=e;null==(t=p.current)||t.off(n),null==(r=p.current)||r.on(n,l)})),Object.entries(o||{}).forEach((e=>{var t,r;let[n,l]=e;null==(t=p.current)||t.getZr().off(n),null==(r=p.current)||r.getZr().on(n,l)})),p.current.setOption(u,!0))}),[u,i,o]),(0,n.useEffect)((()=>{p.current&&(p.current.dispatchAction({type:"downplay",dataIndex:v.current.filter((e=>!g.includes(e)))}),g.length&&p.current.dispatchAction({type:"highlight",dataIndex:g}),v.current=g)}),[g]);const m=(0,n.useCallback)((e=>{let{width:t,height:r}=e;p.current&&p.current.resize({width:t,height:r})}),[]);return(0,n.useEffect)((()=>(m({width:r,height:l}),()=>{var e;return null==(e=p.current)?void 0:e.dispose()})),[]),(0,n.useLayoutEffect)((()=>{m({width:r,height:l})}),[r,l,m]),(0,c.tZ)(s,{ref:f,height:l,width:r})}const i=(0,n.forwardRef)(u)}}]);
//# sourceMappingURL=7889e8b6fd23e5b124d1.chunk.js.map