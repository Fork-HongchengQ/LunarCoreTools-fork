import{e as v,j as f,i as g,x,o as d,c as l,b as r,F as u,z as h,h as y,a as _,V as w,w as S,d as k,K as V,B,A as I,O as D,P as C}from"./index.bd6e3807.js";/* empty css              *//* empty css               */import{_ as K}from"./plugin-vue_export-helper.21dcd24c.js";const N=t=>(D("data-v-0a8fe3d0"),t=t(),C(),t),A=N(()=>r("div",{class:"msg-title text-slate-900 dark:text-slate-100"},"\u63A7\u5236\u53F0",-1)),F={class:"msg",id:"msg"},b={class:"cmd"},E=k("\u53D1\u9001"),O=v({setup(t){const a=f(),o=g("");function c(){const e={type:"CMD",data:o.value},s=JSON.stringify(e);a.socketSend(s)}return x(()=>a.mesgData,()=>{var e=document.getElementById("msg");e&&(e.scrollTop=e.scrollHeight+30)},{immediate:!0,deep:!0}),(e,s)=>{const i=V,p=B;return d(),l(u,null,[A,r("div",F,[(d(!0),l(u,null,h(y(a).mesgData,(n,m)=>(d(),l("p",{class:"text-slate-900 dark:text-slate-100",key:m},I(n),1))),128))]),r("div",b,[_(i,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=n=>o.value=n),placeholder:"","allow-clear":"",onKeydown:w(c,["enter"])},null,8,["modelValue","onKeydown"]),_(p,{type:"outline",onClick:c},{default:S(()=>[E]),_:1})])],64)}}});var J=K(O,[["__scopeId","data-v-0a8fe3d0"]]);export{J as default};
