var q=Object.defineProperty,U=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var y=(a,e,n)=>e in a?q(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,D=(a,e)=>{for(var n in e||(e={}))C.call(e,n)&&y(a,n,e[n]);if(g)for(var n of g(e))R.call(e,n)&&y(a,n,e[n]);return a},b=(a,e)=>U(a,B(e));import{G as F,B as $,d as N,u as j,r as G,o as E,H,t as I,e as s,f as c,g as A,k as o,w as r,F as L,A as M,l as P,q as S}from"./vendor.51c5b88d.js";import{_ as T,b as z,a as i}from"./index.d73ba3c8.js";const J={name:"AgentAllowForm",setup(){const{proxy:a}=F();console.log("proxy",a);const e=$(null),n=N(),f=j(),{id:u}=n.query,m=G({token:z("token")||"",id:u,agentAllows:[],formData:{family_id:"",name:"",peer_id:"",agent:"",comment:""},rules:{family_id:[{required:"true"}],name:[{required:"true"}],peer_id:[{required:"true"}],agent:[{required:"true"}]}});E(async()=>{await _(),u&&i.getAgentDeny(u).then(l=>{m.formData.family_id=l.data.family_id,m.formData.name=l.data.name,m.formData.peer_id=l.data.peer_id,m.formData.agent=l.data.agent,m.formData.comment=l.data.comment})}),H(()=>{});const p=()=>{e.value.validate(async l=>{if(l){let d=m.formData;console.log(d),u?await i.updateAgentDeny(u,d):await i.storeAgentDeny(d),await f.push({name:"agent-deny"})}})},_=async()=>{let l=await i.listAllAgentAllow();m.agentAllows=l.data};return b(D({},I(m)),{formRef:e,submitAdd:p})}},K=P("Submit");function O(a,e,n,f,u,m){const p=s("el-option"),_=s("el-select"),l=s("el-form-item"),d=s("el-input"),V=s("el-button"),w=s("el-form"),v=s("el-col"),k=s("el-row");return c(),A("div",null,[o(k,null,{default:r(()=>[o(v,{span:12},{default:r(()=>[o(w,{model:a.formData,rules:a.rules,ref:"formRef","label-width":"200px",class:"formData"},{default:r(()=>[o(l,{label:"Family",prop:"family_id"},{default:r(()=>[o(_,{modelValue:a.formData.family_id,"onUpdate:modelValue":e[0]||(e[0]=t=>a.formData.family_id=t),filterable:""},{default:r(()=>[(c(!0),A(L,null,M(a.agentAllows,t=>(c(),S(p,{key:t.id,label:t.family,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(l,{label:"Name",prop:"name"},{default:r(()=>[o(d,{modelValue:a.formData.name,"onUpdate:modelValue":e[1]||(e[1]=t=>a.formData.name=t),placeholder:""},null,8,["modelValue"])]),_:1}),o(l,{label:"Peer id",prop:"peer_id"},{default:r(()=>[o(d,{modelValue:a.formData.peer_id,"onUpdate:modelValue":e[2]||(e[2]=t=>a.formData.peer_id=t),placeholder:""},null,8,["modelValue"])]),_:1}),o(l,{label:"Agent",prop:"agent"},{default:r(()=>[o(d,{modelValue:a.formData.agent,"onUpdate:modelValue":e[3]||(e[3]=t=>a.formData.agent=t),placeholder:""},null,8,["modelValue"])]),_:1}),o(l,{label:"Comment",prop:"comment"},{default:r(()=>[o(d,{type:"textarea",modelValue:a.formData.comment,"onUpdate:modelValue":e[4]||(e[4]=t=>a.formData.comment=t),placeholder:""},null,8,["modelValue"])]),_:1}),o(l,null,{default:r(()=>[o(V,{type:"primary",onClick:e[5]||(e[5]=t=>f.submitAdd())},{default:r(()=>[K]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})]),_:1})])}var Y=T(J,[["render",O]]);export{Y as default};
