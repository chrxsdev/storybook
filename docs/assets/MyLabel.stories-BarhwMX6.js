import{j as m}from"./jsx-runtime-u17CrQMm.js";const s=({label:o,size:t="normal",allCaps:n=!1,color:c="primary",fontColor:i="red"})=>m.jsx("span",{className:`${t} text-${c} label`,style:{color:i},children:n?o.toUpperCase():o});s.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Text to display"},size:{required:!1,tsType:{name:"union",raw:"'normal' | 'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"Label size",defaultValue:{value:"'normal'",computed:!1}},allCaps:{required:!1,tsType:{name:"boolean"},description:"Uppercase the label text",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"}]},description:"Label color",defaultValue:{value:"'primary'",computed:!1}},fontColor:{required:!1,tsType:{name:"string"},description:"Custom font color",defaultValue:{value:"'red'",computed:!1}}}};const u={title:"UI/labels/My Label",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"inline-radio"},fontColor:{control:"color"}}},e={args:{label:"Basic Label"}},a={args:{label:"Story Label",size:"normal",allCaps:!0}},r={args:{label:"Secondary Label",color:"secondary"}},l={args:{label:"Custom Color Label",fontColor:"#5517ac"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Basic Label'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Story Label',
    size: 'normal',
    allCaps: true
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Label',
    color: 'secondary'
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Custom Color Label',
    fontColor: '#5517ac'
  }
}`,...l.parameters?.docs?.source}}};const d=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as Secondary,d as __namedExportsOrder,u as default};
