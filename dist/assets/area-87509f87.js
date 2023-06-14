import{aA as p,ap as A,l as C,o as y,n as v,p as f,$ as l,a0 as t,a4 as E,aw as s,av as k,ax as L,ay as U,y as u,az as W,at as z,au as F,as as $}from"./index-8c85bcf0.js";import{E as D}from"./el-pagination-8add177c.js";import{c as I}from"./cloneDeep-e17f73f2.js";const q=e=>p.request({url:"api/area/add",method:"post",data:e}),B=e=>p.request({url:"api/area/all",params:e}),N=e=>p.request({url:"api/area/delete",params:e}),T=e=>p.request({url:"api/area/edit",method:"post",data:e}),M=C({data(){return{areas:[],all:{total:0,current:1,size:10},dialogFormVisible:!1,area:{id:0,pid:"",shortname:"",name:"",mergename:"",level:"",pinyin:"",code:"",zip:"",first:"",lng:"",lat:""},formLabelWidth:80}},mounted(){this.getAreasAll(1)},methods:{toEdit(e){console.log(e),this.dialogFormVisible=!0,this.area=I(e)},getAreasAll(e){B().then(a=>{console.log(a);const n=a.data.areas;this.areas=n}).catch(a=>{console.log(a)})},currentchange(e){this.getAreasAll(e),this.all.current=e},del(e){console.log(e),N({id:e}).then(n=>{if(n.success)this.getAreasAll(this.all.current);else return console.log(n.msg),!1}).catch(n=>{})},toAdd(){this.dialogFormVisible=!0,this.area={id:0,pid:"",shortname:"",name:"",mergename:"",level:"",pinyin:"",code:"",zip:"",first:"",lng:"",lat:""}},save(){const e=this.area;e.id==0?q(e).then(a=>{if(a.success)this.dialogFormVisible=!1,this.getAreasAll(this.all.current),s(a.msg);else return s(a.msg),!1}).catch(a=>{s("网络错误联系管理员")}):T(e).then(a=>{if(a.success)this.dialogFormVisible=!1,this.getAreasAll(this.all.current),s(a.msg);else return s(a.msg),!1}).catch(a=>{s("网络错误联系管理员")})}}}),P={class:"areas"},j={class:"area-tools"},G={class:"dialog-footer"};function H(e,a,n,J,K,O){const m=k,d=W,b=L,h=D,i=z,r=F,V=$,g=U;return y(),v(E,null,[f("div",P,[f("div",j,[l(m,{type:"warning",onClick:e.toAdd},{default:t(()=>[u("添加")]),_:1},8,["onClick"])]),l(b,{data:e.areas,style:{width:"100%"}},{default:t(()=>[l(d,{fixed:"",prop:"id",label:"ID",width:"80"}),l(d,{prop:"pid",label:"父id",width:"120"}),l(d,{prop:"shortname",label:"简称",width:"120"}),l(d,{prop:"name",label:"名称",width:"120"}),l(d,{prop:"mergename",label:"全称",width:"120"}),l(d,{prop:"level",label:"层级",width:"120"}),l(d,{prop:"pinyin",label:"拼音",width:"120"}),l(d,{prop:"code",label:"长途区号",width:"120"}),l(d,{prop:"zip",label:"邮编",width:"120"}),l(d,{prop:"first",label:"首字母",width:"120"}),l(d,{prop:"lng",label:"经度",width:"120"}),l(d,{prop:"lat",label:"纬度",width:"120"}),l(d,{fixed:"right",label:"操作",width:"120"},{default:t(o=>[l(m,{link:"",type:"primary",size:"small",onClick:w=>e.toEdit(o.row)},{default:t(()=>[u("更新")]),_:2},1032,["onClick"]),l(m,{link:"",type:"primary",size:"small",onClick:w=>e.del(o.row.id)},{default:t(()=>[u("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),l(h,{layout:"prev, allr, next","all-size":e.all.size,total:e.all.total,onCurrentChange:e.currentchange},null,8,["all-size","total","onCurrentChange"])]),l(g,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":a[13]||(a[13]=o=>e.dialogFormVisible=o),title:"添加"},{footer:t(()=>[f("span",G,[l(m,{onClick:a[12]||(a[12]=o=>e.dialogFormVisible=!1)},{default:t(()=>[u("Cancel")]),_:1}),l(m,{type:"primary",onClick:e.save},{default:t(()=>[u(" 保存 ")]),_:1},8,["onClick"])])]),default:t(()=>[l(V,{model:e.area},{default:t(()=>[l(r,{label:"ID","label-width":e.formLabelWidth},{default:t(()=>[l(i,{modelValue:e.area.id,"onUpdate:modelValue":a[0]||(a[0]=o=>e.area.id=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(r,{label:"父id","label-width":e.formLabelWidth},{default:t(()=>[l(i,{modelValue:e.area.pid,"onUpdate:modelValue":a[1]||(a[1]=o=>e.area.pid=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(r,{label:"简称","label-width":e.formLabelWidth},{default:t(()=>[l(i,{modelValue:e.area.shortname,"onUpdate:modelValue":a[2]||(a[2]=o=>e.area.shortname=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(r,{label:"名称","label-width":e.formLabelWidth},{default:t(()=>[l(i,{modelValue:e.area.name,"onUpdate:modelValue":a[3]||(a[3]=o=>e.area.name=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(r,{label:"全称","label-width":e.formLabelWidth},{default:t(()=>[l(i,{modelValue:e.area.mergename,"onUpdate:modelValue":a[4]||(a[4]=o=>e.area.mergename=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(r,{label:"层级","label-width":e.formLabelWidth},{default:t(()=>[l(i,{modelValue:e.area.level,"onUpdate:modelValue":a[5]||(a[5]=o=>e.area.level=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(r,{label:"拼音","label-width":e.formLabelWidth},{default:t(()=>[l(i,{modelValue:e.area.pinyin,"onUpdate:modelValue":a[6]||(a[6]=o=>e.area.pinyin=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(r,{label:"长途区号","label-width":e.formLabelWidth},{default:t(()=>[l(i,{modelValue:e.area.code,"onUpdate:modelValue":a[7]||(a[7]=o=>e.area.code=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(r,{label:"邮编","label-width":e.formLabelWidth},{default:t(()=>[l(i,{modelValue:e.area.zip,"onUpdate:modelValue":a[8]||(a[8]=o=>e.area.zip=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(r,{label:"首字母","label-width":e.formLabelWidth},{default:t(()=>[l(i,{modelValue:e.area.first,"onUpdate:modelValue":a[9]||(a[9]=o=>e.area.first=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(r,{label:"经度","label-width":e.formLabelWidth},{default:t(()=>[l(i,{modelValue:e.area.lng,"onUpdate:modelValue":a[10]||(a[10]=o=>e.area.lng=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(r,{label:"纬度","label-width":e.formLabelWidth},{default:t(()=>[l(i,{modelValue:e.area.lat,"onUpdate:modelValue":a[11]||(a[11]=o=>e.area.lat=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const X=A(M,[["render",H]]);export{X as default};
