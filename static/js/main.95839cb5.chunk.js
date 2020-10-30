(this["webpackJsonphw-6"]=this["webpackJsonphw-6"]||[]).push([[0],{11:function(e,t,n){e.exports={wrapper:"Filter_wrapper__3vybW",label:"Filter_label__ZAh1W",input:"Filter_input__3Rh6P"}},15:function(e,t,n){e.exports={section:"Container_section__1uJuy",heading:"Container_heading__3LX6I"}},25:function(e,t,n){e.exports=n(47)},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),o=n(9),l=n.n(o),u=n(2),i=n(18),s=n(10),m=n(3),b=n(4),f=n(19),d=n.n(f),p=n(6),h=n(1),_=n(20),v=n.n(_),C={addContact:Object(m.b)("contacts/addContact",(function(e){var t=e.name,n=e.number;return{payload:{id:v.a.generate(),name:t,number:n}}})),deleteContact:Object(m.b)("contacts/deleteContact"),changeFilter:Object(m.b)("contacts/changeFilter")},E=Object(m.c)([],(a={},Object(p.a)(a,C.addContact,(function(e,t){var n=t.payload;return[].concat(Object(s.a)(e),[n])})),Object(p.a)(a,C.deleteContact,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),a)),g=Object(m.c)("",Object(p.a)({},C.changeFilter,(function(e,t){return t.payload}))),j=Object(h.c)({contacts:E,filter:g}),O=Object(s.a)(Object(m.d)({serializableCheck:{ignoredActions:[b.a,b.f,b.b,b.c,b.d,b.e]}})),y={key:"contacts",storage:d.a,blacklist:["filter","_persist"]},N=Object(m.a)({reducer:{contacts:Object(b.g)(y,j)},middleware:O,devTools:!1}),F={store:N,persistor:Object(b.h)(N)},w=n(21),k=n(22),x=n(24),S=n(23),A=n(5),P=n.n(A),L=function(e){Object(x.a)(n,e);var t=Object(S.a)(n);function n(){var e;Object(w.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(p.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault();var n=e.state.name,a=e.props,r=a.contacts,c=a.onSubmit;if(r.some((function(e){return e.name.toLowerCase()===n.toLowerCase()})))return alert("".concat(n," Already exists")),void e.reset();c(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(k.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return c.a.createElement("form",{className:P.a.form,onSubmit:this.handleSubmit},c.a.createElement("label",{className:P.a.label,htmlFor:"name"},"Name"),c.a.createElement("input",{id:"name",type:"text",onChange:this.handleChange,className:P.a.input,name:"name",value:t,placeholder:"Name",autoComplete:"off",autoFocus:!0}),c.a.createElement("label",{className:P.a.label,htmlFor:"number"},"Number"),c.a.createElement("input",{id:"number",type:"text",onChange:this.handleChange,className:P.a.input,name:"number",value:n,placeholder:"Phone number",autoComplete:"off"}),c.a.createElement("button",{type:"submit",className:P.a.btn},"Add contact"))}}]),n}(r.Component),D=Object(u.b)((function(e){return{contacts:e.contacts.contacts}}),(function(e){return{onSubmit:function(t){var n=t.name,a=t.number;return e(C.addContact({name:n,number:a}))}}}))(L),I=n(11),J=n.n(I),T=function(e){var t=e.value,n=e.onChange;return c.a.createElement("div",{className:J.a.wrapper},c.a.createElement("label",{className:J.a.label},"Find by Name",c.a.createElement("input",{className:J.a.input,type:"text",value:t,onChange:n})))};T.defaultProps={filter:""};var W=Object(u.b)((function(e){return{value:e.filter}}),(function(e){return{onChange:function(t){return e(C.changeFilter(t.target.value))}}}))(T),B=n(7),z=n.n(B),H=function(e){var t=e.contacts,n=e.id,a=e.onDelete,r=t.find((function(e){return e.id===n})),o=r.name,l=r.number;return c.a.createElement(c.a.Fragment,null,c.a.createElement("span",null,o," : ",l),c.a.createElement("button",{type:"button",className:z.a.close,onClick:function(){return a(n)}},"+"))},M=function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))},R=Object(u.b)((function(e){var t=e.contacts,n=t.contacts,a=t.filter;return{contacts:M(n,a)}}),(function(e){return{onDelete:function(t){return e(C.deleteContact(t))}}}))(H),U=function(e){var t=e.contacts;return c.a.createElement("ul",{className:z.a.list},t.map((function(e){return c.a.createElement("li",{className:z.a.item,key:e.id},c.a.createElement(R,{id:e.id}))})))},X=function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))},Z=Object(u.b)((function(e){var t=e.contacts,n=t.contacts,a=t.filter;return{contacts:X(n,a)}}))(U),q=n(15),G=n.n(q),K=function(e){var t=e.title,n=e.children;return c.a.createElement("section",{className:G.a.section},t&&c.a.createElement("h2",{className:G.a.heading},t),n)};K.defaultProps={title:""};var Q=K,V=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(Q,{title:"Phonebook"},c.a.createElement(D,null)),c.a.createElement(Q,{title:"Contacts"},c.a.createElement(W,null),c.a.createElement(Z,null)))};n(46);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u.a,{store:F.store},c.a.createElement(i.a,{loading:null,persistor:F.persistor},c.a.createElement(V,null)))),document.getElementById("root"))},5:function(e,t,n){e.exports={form:"InputForm_form__353DB",label:"InputForm_label__1DDSb",input:"InputForm_input__1rs7i",btn:"InputForm_btn__2A_W9"}},7:function(e,t,n){e.exports={list:"Phonebook_list__S7x--",item:"Phonebook_item__277AT",close:"Phonebook_close__2HUAw"}}},[[25,1,2]]]);
//# sourceMappingURL=main.95839cb5.chunk.js.map