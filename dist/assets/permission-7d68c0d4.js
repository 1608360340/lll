import{b as ae,aO as X,P as le,bf as te,U as H,f as W,c as q,e as M,C as Z,aP as j,l as J,F as oe,j as ie,m as de,bq as ne,h as w,G as se,k as re,r as O,aZ as ue,L as K,M as pe,H as me,o as f,n as V,p as C,q as d,t as v,aH as fe,Z as k,a0 as i,a9 as G,a2 as U,a1 as g,z as $,$ as a,br as ce,D as _,A as he,_ as be,b8 as ve,B as ge,bs as x,aY as Ve,N as Ce,aA as F,ap as ye,aG as L,a4 as we,aw as E,au as ke,ax as Te,ay as Ee,y as T,av as Se,at as Ie,az as Pe,as as Ue}from"./index-8c85bcf0.js";import{E as Fe}from"./el-pagination-8add177c.js";import{c as Ne}from"./cloneDeep-e17f73f2.js";const Be=ae({modelValue:{type:[Boolean,String,Number],default:!1},value:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},activeIcon:{type:X},inactiveIcon:{type:X},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},id:String,loading:{type:Boolean,default:!1},beforeChange:{type:le(Function)},size:{type:String,validator:te},tabindex:{type:[String,Number]}}),Le={[H]:e=>W(e)||q(e)||M(e),[Z]:e=>W(e)||q(e)||M(e),[j]:e=>W(e)||q(e)||M(e)},We=["onClick"],$e=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex","onKeydown"],De=["aria-hidden"],ze=["aria-hidden"],Ae=["aria-hidden"],Y="ElSwitch",qe=J({name:Y}),Me=J({...qe,props:Be,emits:Le,setup(e,{expose:l,emit:u}){const n=e,Q=ve(),{formItem:S}=oe(),D=ie(),s=de("switch");ne({from:'"value"',replacement:'"model-value" or "v-model"',scope:Y,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},w(()=>{var t;return!!((t=Q.vnode.props)!=null&&t.value)}));const{inputId:b}=se(n,{formItemContext:S}),p=re(w(()=>n.loading)),I=O(n.modelValue!==!1),r=O(),h=O(),z=w(()=>[s.b(),s.m(D.value),s.is("disabled",p.value),s.is("checked",m.value)]),A=w(()=>({width:ue(n.width)}));K(()=>n.modelValue,()=>{I.value=!0}),K(()=>n.value,()=>{I.value=!1});const N=w(()=>I.value?n.modelValue:n.value),m=w(()=>N.value===n.activeValue);[n.activeValue,n.inactiveValue].includes(N.value)||(u(H,n.inactiveValue),u(Z,n.inactiveValue),u(j,n.inactiveValue)),K(m,t=>{var c;r.value.checked=t,n.validateEvent&&((c=S==null?void 0:S.validate)==null||c.call(S,"change").catch(ee=>pe()))});const y=()=>{const t=m.value?n.inactiveValue:n.activeValue;u(H,t),u(Z,t),u(j,t),ge(()=>{r.value.checked=m.value})},P=()=>{if(p.value)return;const{beforeChange:t}=n;if(!t){y();return}const c=t();[x(c),W(c)].includes(!0)||Ve(Y,"beforeChange must return type `Promise<boolean>` or `boolean`"),x(c)?c.then(R=>{R&&y()}).catch(R=>{}):c&&y()},B=w(()=>s.cssVarBlock({...n.activeColor?{"on-color":n.activeColor}:null,...n.inactiveColor?{"off-color":n.inactiveColor}:null,...n.borderColor?{"border-color":n.borderColor}:null})),o=()=>{var t,c;(c=(t=r.value)==null?void 0:t.focus)==null||c.call(t)};return me(()=>{r.value.checked=m.value}),l({focus:o,checked:m}),(t,c)=>(f(),V("div",{class:v(d(z)),style:_(d(B)),onClick:he(P,["prevent"])},[C("input",{id:d(b),ref_key:"input",ref:r,class:v(d(s).e("input")),type:"checkbox",role:"switch","aria-checked":d(m),"aria-disabled":d(p),name:t.name,"true-value":t.activeValue,"false-value":t.inactiveValue,disabled:d(p),tabindex:t.tabindex,onChange:y,onKeydown:fe(P,["enter"])},null,42,$e),!t.inlinePrompt&&(t.inactiveIcon||t.inactiveText)?(f(),V("span",{key:0,class:v([d(s).e("label"),d(s).em("label","left"),d(s).is("active",!d(m))])},[t.inactiveIcon?(f(),k(d(U),{key:0},{default:i(()=>[(f(),k(G(t.inactiveIcon)))]),_:1})):g("v-if",!0),!t.inactiveIcon&&t.inactiveText?(f(),V("span",{key:1,"aria-hidden":d(m)},$(t.inactiveText),9,De)):g("v-if",!0)],2)):g("v-if",!0),C("span",{ref_key:"core",ref:h,class:v(d(s).e("core")),style:_(d(A))},[t.inlinePrompt?(f(),V("div",{key:0,class:v(d(s).e("inner"))},[t.activeIcon||t.inactiveIcon?(f(),k(d(U),{key:0,class:v(d(s).is("icon"))},{default:i(()=>[(f(),k(G(d(m)?t.activeIcon:t.inactiveIcon)))]),_:1},8,["class"])):t.activeText||t.inactiveText?(f(),V("span",{key:1,class:v(d(s).is("text")),"aria-hidden":!d(m)},$(d(m)?t.activeText:t.inactiveText),11,ze)):g("v-if",!0)],2)):g("v-if",!0),C("div",{class:v(d(s).e("action"))},[t.loading?(f(),k(d(U),{key:0,class:v(d(s).is("loading"))},{default:i(()=>[a(d(ce))]),_:1},8,["class"])):g("v-if",!0)],2)],6),!t.inlinePrompt&&(t.activeIcon||t.activeText)?(f(),V("span",{key:1,class:v([d(s).e("label"),d(s).em("label","right"),d(s).is("active",d(m))])},[t.activeIcon?(f(),k(d(U),{key:0},{default:i(()=>[(f(),k(G(t.activeIcon)))]),_:1})):g("v-if",!0),!t.activeIcon&&t.activeText?(f(),V("span",{key:1,"aria-hidden":!d(m)},$(t.activeText),9,Ae)):g("v-if",!0)],2)):g("v-if",!0)],14,We))}});var Oe=be(Me,[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);const Ke=Ce(Oe);const Ge=e=>F.request({url:"api/permission/page",method:"post",data:e}),He=e=>F.request({url:"api/permission/delete",params:e}),Ze=e=>F.request({url:"api/permission/add",method:"post",data:e}),je=e=>F.request({url:"api/permission/edit",method:"post",data:e}),Ye=e=>F.request({url:"api/permission/one",method:"get",params:e}),Je=J({data(){return{adCates:[],page:{total:0,current:1,size:10},id:null,result:"",dialogFormVisible:!1,dialogForm:!1,adCate:{code:"",createTime:"",deleted:0,description:"",hasChildren:0,id:0,pid:0,type:"",updateTime:"",url:""},addpermission:{code:"",createTime:"",deleted:0,description:"",hasChildren:0,id:0,pid:0,type:"",updateTime:"",url:""},formLabelWidth:80}},mounted(){this.getperPage(1)},methods:{toEdit(e){console.log(e),this.dialogFormVisible=!0,this.adCate=Ne(e)},getperPage(e){Ge({current:e,size:5}).then(u=>{console.log(u);const n=u.data.page;this.adCates=n.records,this.page=n}).catch(u=>{console.log(u)})},currentchange(e){this.getperPage(e),this.page.current=e},del(e){console.log(e),He({id:e}).then(u=>{if(u.success)this.getperPage(this.page.current);else return console.log(u.msg),!1}).catch(u=>{})},toAdd(){this.dialogForm=!0},save(){const e=this.adCate;e.id==0?Ze(e).then(l=>{if(l.success)this.dialogFormVisible=!1,this.getperPage(this.page.current),E(l.msg);else return E(l.msg),!1}).catch(l=>{E("网络错误联系管理员")}):je(e).then(l=>{if(l.success)this.dialogFormVisible=!1,this.getperPage(this.page.current),E(l.msg);else return E(l.msg),!1}).catch(l=>{E("网络错误联系管理员")})},toSearch(e){Ye({id:e}).then(u=>{console.log(u.data.permission),this.adCates=[],this.adCates.push(u.data.permission)}).catch(u=>{console.log(u)}),this.id=null}}}),Qe={style:{"text-align":"center"}},Re={class:"adCates"},Xe={class:"adcate-tools"},_e={class:"dialog-footer"},xe={class:"dialog-footer"};function ea(e,l,u,n,Q,S){const D=L("DocumentAdd"),s=U,b=Se,p=Ie,I=L("Search"),r=ke,h=Pe,z=L("EditPen"),A=L("Delete"),N=Te,m=Fe,y=Ke,P=Ue,B=Ee;return f(),V(we,null,[C("h2",Qe,"权限管理"+$(this.adCates.id),1),C("div",Re,[C("div",Xe,[a(r,null,{default:i(()=>[a(b,{type:"primary",onClick:e.toAdd,plain:"",style:{"margin-left":"60px"}},{default:i(()=>[a(s,null,{default:i(()=>[a(D)]),_:1}),T("添加数据")]),_:1},8,["onClick"]),a(p,{placeholder:"输入id",style:{width:"120px","margin-left":"80px"},modelValue:e.id,"onUpdate:modelValue":l[0]||(l[0]=o=>e.id=o)},null,8,["modelValue"]),a(b,{icon:e.Search,circle:"",style:{"margin-left":"10px"},onClick:l[1]||(l[1]=o=>e.toSearch(this.id))},{default:i(()=>[a(s,null,{default:i(()=>[a(I)]),_:1})]),_:1},8,["icon"])]),_:1})]),a(N,{data:e.adCates,style:{width:"100%"}},{default:i(()=>[a(h,{fixed:"",prop:"id",label:"id",width:"80"}),a(h,{prop:"code",label:"code(权限码)",width:"120"}),a(h,{prop:"description",label:"description",width:"120"}),a(h,{prop:"url",label:"url(访问地址)",width:"230"}),a(h,{prop:"type",label:"type",width:"120"}),a(h,{prop:"pid",label:"pid",width:"50"}),a(h,{prop:"hasChildren",label:"子权限",width:"80"}),a(h,{prop:"createTime",label:"创建时间",width:"250"}),a(h,{fixed:"right",label:"操作",width:"220"},{default:i(o=>[a(b,{type:"danger",onClick:t=>e.toEdit(o.row),plain:""},{default:i(()=>[a(s,null,{default:i(()=>[a(z)]),_:1}),T("修改")]),_:2},1032,["onClick"]),a(b,{type:"primary",onClick:t=>e.del(o.row.id),plain:""},{default:i(()=>[a(s,null,{default:i(()=>[a(A)]),_:1}),T("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),a(m,{layout:"prev, pager, next","page-size":e.page.size,total:e.page.total,onCurrentChange:e.currentchange},null,8,["page-size","total","onCurrentChange"])]),a(B,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":l[10]||(l[10]=o=>e.dialogFormVisible=o),title:"权限编辑"},{footer:i(()=>[C("span",_e,[a(b,{onClick:l[9]||(l[9]=o=>e.dialogFormVisible=!1)},{default:i(()=>[T("Cancel")]),_:1}),a(b,{type:"primary",onClick:e.save},{default:i(()=>[T(" 保存 ")]),_:1},8,["onClick"])])]),default:i(()=>[a(P,{model:e.adCate},{default:i(()=>[a(r,{label:"code","label-width":e.formLabelWidth},{default:i(()=>[a(p,{modelValue:e.adCate.code,"onUpdate:modelValue":l[2]||(l[2]=o=>e.adCate.code=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),a(r,{label:"description","label-width":e.formLabelWidth},{default:i(()=>[a(p,{modelValue:e.adCate.description,"onUpdate:modelValue":l[3]||(l[3]=o=>e.adCate.description=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),a(r,{label:"pid","label-width":e.formLabelWidth},{default:i(()=>[a(p,{modelValue:e.adCate.pid,"onUpdate:modelValue":l[4]||(l[4]=o=>e.adCate.pid=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),a(r,{label:"type","label-width":e.formLabelWidth},{default:i(()=>[a(p,{modelValue:e.adCate.type,"onUpdate:modelValue":l[5]||(l[5]=o=>e.adCate.type=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),a(r,{label:"hasChildren","label-width":e.formLabelWidth},{default:i(()=>[a(y,{"active-value":"1","inactive-value":"0",modelValue:e.adCate.hasChildren,"onUpdate:modelValue":l[6]||(l[6]=o=>e.adCate.hasChildren=o)},null,8,["modelValue"])]),_:1},8,["label-width"]),a(r,{label:"updateTime","label-width":e.formLabelWidth},{default:i(()=>[a(p,{modelValue:e.adCate.updateTime,"onUpdate:modelValue":l[7]||(l[7]=o=>e.adCate.updateTime=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),a(r,{label:"url","label-width":e.formLabelWidth},{default:i(()=>[a(p,{modelValue:e.adCate.url,"onUpdate:modelValue":l[8]||(l[8]=o=>e.adCate.url=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"]),a(B,{modelValue:e.dialogForm,"onUpdate:modelValue":l[20]||(l[20]=o=>e.dialogForm=o),title:"权限添加"},{footer:i(()=>[C("span",xe,[a(b,{onClick:l[19]||(l[19]=o=>e.dialogForm=!1)},{default:i(()=>[T("Cancel")]),_:1}),a(b,{type:"primary",onClick:e.save},{default:i(()=>[T(" 保存 ")]),_:1},8,["onClick"])])]),default:i(()=>[a(P,{model:e.adCate},{default:i(()=>[a(r,{label:"code","label-width":e.formLabelWidth},{default:i(()=>[a(p,{modelValue:e.addpermission.code,"onUpdate:modelValue":l[11]||(l[11]=o=>e.addpermission.code=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),a(r,{label:"description","label-width":e.formLabelWidth},{default:i(()=>[a(p,{modelValue:e.addpermission.description,"onUpdate:modelValue":l[12]||(l[12]=o=>e.addpermission.description=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),a(r,{label:"pid","label-width":e.formLabelWidth},{default:i(()=>[a(p,{modelValue:e.addpermission.pid,"onUpdate:modelValue":l[13]||(l[13]=o=>e.addpermission.pid=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),a(r,{label:"type","label-width":e.formLabelWidth},{default:i(()=>[a(p,{modelValue:e.addpermission.type,"onUpdate:modelValue":l[14]||(l[14]=o=>e.addpermission.type=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),a(r,{label:"hasChildren","label-width":e.formLabelWidth},{default:i(()=>[a(y,{"active-value":"1","inactive-value":"0",modelValue:e.addpermission.hasChildren,"onUpdate:modelValue":l[15]||(l[15]=o=>e.addpermission.hasChildren=o)},null,8,["modelValue"])]),_:1},8,["label-width"]),a(r,{label:"createTime","label-width":e.formLabelWidth},{default:i(()=>[a(p,{modelValue:e.addpermission.createTime,"onUpdate:modelValue":l[16]||(l[16]=o=>e.addpermission.createTime=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),a(r,{label:"updateTime","label-width":e.formLabelWidth},{default:i(()=>[a(p,{modelValue:e.addpermission.updateTime,"onUpdate:modelValue":l[17]||(l[17]=o=>e.addpermission.updateTime=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),a(r,{label:"url","label-width":e.formLabelWidth},{default:i(()=>[a(p,{modelValue:e.addpermission.url,"onUpdate:modelValue":l[18]||(l[18]=o=>e.addpermission.url=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const oa=ye(Je,[["render",ea]]);export{oa as default};
