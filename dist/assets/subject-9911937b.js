import{aA as m,ap as j,l as C,o as k,n as y,p as f,$ as a,a0 as o,a4 as E,aw as u,av as L,ax as U,ay as W,y as p,az as F,at as P,au as v,as as z}from"./index-8c85bcf0.js";import{E as N}from"./el-pagination-8add177c.js";import{c as $}from"./cloneDeep-e17f73f2.js";const I=e=>m.request({url:"api/subject/add",method:"post",data:e}),A=e=>m.request({url:"api/subject/delete",params:e}),q=e=>m.request({url:"api/subject/edit",method:"post",data:e}),B=e=>m.request({url:"api/subject/page",method:"post",data:e}),D=C({data(){return{subject:[],page:{total:0,current:1,size:10},dialogFormVisible:!1,data:{attachment:"",fee:0,finished:"",id:0,name:"",origin:"",participant:"",period:"",rank:"",subjectNo:"",type:"",userId:""},formLabelWidth:80}},mounted(){this.getsubjectPage(1)},methods:{toEdit(e){console.log(e),this.dialogFormVisible=!0,this.data=$(e)},getsubjectPage(e){B({current:e,size:2}).then(n=>{console.log(n);const b=n.data.page;this.subject=b.records,this.page=b}).catch(n=>{console.log(n)})},currentchange(e){this.getsubjectPage(e),this.page.current=e},del(e){console.log(e),A({id:e}).then(n=>{if(n.success)this.getsubjectPage(this.page.current),this.page.total%this.page.size==1?this.getAdCatesPage(this.page.current-1):this.getAdCatesPage(this.page.current);else return console.log(n.msg),!1}).catch(n=>{})},toAdd(){this.dialogFormVisible=!0,this.data={attachment:"",fee:0,finished:"",id:0,name:"",origin:"",participant:"",period:"",rank:"",subjectNo:"",type:"",userId:""}},save(){const e=this.data;e.id==0?I(e).then(l=>{if(l.success)this.dialogFormVisible=!1,this.getsubjectPage(this.page.current),u(l.msg);else return u(l.msg),!1}).catch(l=>{u("网络错误联系管理员")}):q(e).then(l=>{if(l.success)this.dialogFormVisible=!1,this.getsubjectPage(this.page.current),u(l.msg);else return u(l.msg),!1}).catch(l=>{u("网络错误联系管理员")})}}}),T={class:"subject"},M={class:"data-tools"},G={class:"dialog-footer"};function H(e,l,n,b,J,K){const r=L,d=F,g=U,h=N,i=P,s=v,V=z,w=W;return k(),y(E,null,[f("div",T,[f("div",M,[a(r,{type:"warning",onClick:e.toAdd},{default:o(()=>[p("添加")]),_:1},8,["onClick"])]),a(g,{data:e.subject,style:{width:"100%"}},{default:o(()=>[a(d,{fixed:"",prop:"id",label:"#",width:"50"}),a(d,{prop:"attachment",label:"佐证材料"}),a(d,{prop:"fee",label:"课题费用"}),a(d,{prop:"finished",label:"是否结项"}),a(d,{prop:"id",label:"编号"}),a(d,{prop:"name",label:"课题名称"}),a(d,{prop:"origin",label:"课题来源"}),a(d,{prop:"participant",label:"参与者"}),a(d,{prop:"period",label:"课题周期"}),a(d,{prop:"rank",label:"课题等级"}),a(d,{prop:"subjectNo",label:"课题编号"}),a(d,{prop:"type",label:"课题类型"}),a(d,{prop:"userId",label:"负责人"}),a(d,{fixed:"right",label:"操作",width:"120"},{default:o(t=>[a(r,{link:"",type:"primary",size:"small",onClick:c=>e.toEdit(t.row)},{default:o(()=>[p("更新")]),_:2},1032,["onClick"]),a(r,{link:"",type:"primary",size:"small",onClick:c=>e.del(t.row.id)},{default:o(()=>[p("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),a(h,{layout:"prev, pager, next","page-size":e.page.size,total:e.page.total,onCurrentChange:e.currentchange},null,8,["page-size","total","onCurrentChange"])]),a(w,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":l[13]||(l[13]=t=>e.dialogFormVisible=t),title:"课题编辑"},{footer:o(()=>[f("span",G,[a(r,{onClick:l[12]||(l[12]=t=>e.dialogFormVisible=!1)},{default:o(()=>[p("Cancel")]),_:1}),a(r,{type:"primary",onClick:e.save},{default:o(()=>[p(" 保存 ")]),_:1},8,["onClick"])])]),default:o(()=>[a(V,{model:e.data},{default:o(()=>[a(s,{label:"佐证材料","label-width":e.formLabelWidth},{default:o(()=>[a(i,{modelValue:e.data.attachment,"onUpdate:modelValue":l[0]||(l[0]=t=>e.data.attachment=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),a(s,{label:"课题费用","label-width":e.formLabelWidth},{default:o(()=>[a(i,{modelValue:e.data.fee,"onUpdate:modelValue":l[1]||(l[1]=t=>e.data.fee=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),a(s,{label:"是否结项","label-width":e.formLabelWidth},{default:o(()=>[a(i,{modelValue:e.data.finished,"onUpdate:modelValue":l[2]||(l[2]=t=>e.data.finished=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),a(s,{label:"编号","label-width":e.formLabelWidth},{default:o(()=>[a(i,{modelValue:e.data.id,"onUpdate:modelValue":l[3]||(l[3]=t=>e.data.id=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),a(s,{label:"课题名称","label-width":e.formLabelWidth},{default:o(()=>[a(i,{modelValue:e.data.name,"onUpdate:modelValue":l[4]||(l[4]=t=>e.data.name=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),a(s,{label:"课题来源","label-width":e.formLabelWidth},{default:o(()=>[a(i,{modelValue:e.data.origin,"onUpdate:modelValue":l[5]||(l[5]=t=>e.data.origin=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),a(s,{label:"参与者","label-width":e.formLabelWidth},{default:o(()=>[a(i,{modelValue:e.data.participant,"onUpdate:modelValue":l[6]||(l[6]=t=>e.data.participant=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),a(s,{label:"课题周期","label-width":e.formLabelWidth},{default:o(()=>[a(i,{modelValue:e.data.period,"onUpdate:modelValue":l[7]||(l[7]=t=>e.data.period=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),a(s,{label:"课题等级","label-width":e.formLabelWidth},{default:o(()=>[a(i,{modelValue:e.data.rank,"onUpdate:modelValue":l[8]||(l[8]=t=>e.data.rank=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),a(s,{label:"课题编号","label-width":e.formLabelWidth},{default:o(()=>[a(i,{modelValue:e.data.subjectNo,"onUpdate:modelValue":l[9]||(l[9]=t=>e.data.subjectNo=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),a(s,{label:"课题类型","label-width":e.formLabelWidth},{default:o(()=>[a(i,{modelValue:e.data.type,"onUpdate:modelValue":l[10]||(l[10]=t=>e.data.type=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),a(s,{label:"负责人","label-width":e.formLabelWidth},{default:o(()=>[a(i,{modelValue:e.data.userId,"onUpdate:modelValue":l[11]||(l[11]=t=>e.data.userId=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const S=j(D,[["render",H]]);export{S as default};