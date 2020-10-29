(this["webpackJsonphw-6"]=this["webpackJsonphw-6"]||[]).push([[0],{11:function(e,t,n){e.exports={wrapper:"Filter_wrapper__1Fj9U",label:"Filter_label__2bVLl",input:"Filter_input__23oIp"}},15:function(e,t,n){e.exports={section:"Container_section__3Ayqa",heading:"Container_heading__22OEI"}},25:function(e,t,n){e.exports=n(47)},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),o=n(9),l=n.n(o),u=n(2),i=n(18),s=n(10),m=n(3),b=n(4),f=n(19),d=n.n(f),p=n(6),h=n(1),_=n(20),v=n.n(_),C={addContact:Object(m.b)("contacts/addContact",(function(e){var t=e.name,n=e.number;return{payload:{id:v.a.generate(),name:t,number:n}}})),deleteContact:Object(m.b)("contacts/deleteContact"),changeFilter:Object(m.b)("contacts/changeFilter")},E=Object(m.c)([],(a={},Object(p.a)(a,C.addContact,(function(e,t){var n=t.payload;return[].concat(Object(s.a)(e),[n])})),Object(p.a)(a,C.deleteContact,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),a)),g=Object(m.c)("",Object(p.a)({},C.changeFilter,(function(e,t){return t.payload}))),O=Object(h.c)({contacts:E,filter:g}),j=Object(s.a)(Object(m.d)({serializableCheck:{ignoredActions:[b.a,b.f,b.b,b.c,b.d,b.e]}})),y={key:"contacts",storage:d.a,blacklist:["filter","_persist"]},F=Object(m.a)({reducer:{contacts:Object(b.g)(y,O)},middleware:j,devTools:!1}),N={store:F,persistor:Object(b.h)(F)},w=n(21),k=n(22),x=n(24),I=n(23),S=n(5),L=n.n(S),P=function(e){Object(x.a)(n,e);var t=Object(I.a)(n);function n(){var e;Object(w.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(p.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault();var n=e.state.name,a=e.props,r=a.contacts,c=a.onSubmit;if(r.some((function(e){return e.name.toLowerCase()===n.toLowerCase()})))return alert("".concat(n," Already exists")),void e.reset();c(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(k.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return c.a.createElement("form",{className:L.a.form,onSubmit:this.handleSubmit},c.a.createElement("label",{className:L.a.label,htmlFor:"name"},"Name"),c.a.createElement("input",{id:"name",type:"text",onChange:this.handleChange,className:L.a.input,name:"name",value:t,placeholder:"Name",autoComplete:"off",autoFocus:!0}),c.a.createElement("label",{className:L.a.label,htmlFor:"number"},"Number"),c.a.createElement("input",{id:"number",type:"text",onChange:this.handleChange,className:L.a.input,name:"number",value:n,placeholder:"Phone number",autoComplete:"off"}),c.a.createElement("button",{type:"submit",className:L.a.btn},"Add contact"))}}]),n}(r.Component),A=Object(u.b)((function(e){return{contacts:e.contacts.contacts}}),(function(e){return{onSubmit:function(t){var n=t.name,a=t.number;return e(C.addContact({name:n,number:a}))}}}))(P),D=n(11),T=n.n(D),H=function(e){var t=e.value,n=e.onChange;return c.a.createElement("div",{className:T.a.wrapper},c.a.createElement("label",{className:T.a.label},"Find by Name",c.a.createElement("input",{className:T.a.input,type:"text",value:t,onChange:n})))};H.defaultProps={filter:""};var J=Object(u.b)((function(e){return{value:e.filter}}),(function(e){return{onChange:function(t){return e(C.changeFilter(t.target.value))}}}))(H),K=n(7),V=n.n(K),Z=function(e){var t=e.contacts,n=e.id,a=e.onDelete,r=t.find((function(e){return e.id===n})),o=r.name,l=r.number;return c.a.createElement(c.a.Fragment,null,c.a.createElement("span",null,o," : ",l),c.a.createElement("button",{type:"button",className:V.a.close,onClick:function(){return a(n)}},"+"))},q=function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))},z=Object(u.b)((function(e){var t=e.contacts,n=t.contacts,a=t.filter;return{contacts:q(n,a)}}),(function(e){return{onDelete:function(t){return e(C.deleteContact(t))}}}))(Z),B=function(e){var t=e.contacts;return c.a.createElement("ul",{className:V.a.list},t.map((function(e){return c.a.createElement("li",{className:V.a.item,key:e.id},c.a.createElement(z,{id:e.id}))})))},M=function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))},R=Object(u.b)((function(e){var t=e.contacts,n=t.contacts,a=t.filter;return{contacts:M(n,a)}}))(B),U=n(15),W=n.n(U),X=function(e){var t=e.title,n=e.children;return c.a.createElement("section",{className:W.a.section},t&&c.a.createElement("h2",{className:W.a.heading},t),n)};X.defaultProps={title:""};var G=X,Q=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(G,{title:"Phonebook"},c.a.createElement(A,null)),c.a.createElement(G,{title:"Contacts"},c.a.createElement(J,null),c.a.createElement(R,null)))};n(46);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u.a,{store:N.store},c.a.createElement(i.a,{loading:null,persistor:N.persistor},c.a.createElement(Q,null)))),document.getElementById("root"))},5:function(e,t,n){e.exports={form:"InputForm_form__VOZyb",label:"InputForm_label__24aWs",input:"InputForm_input__3TbHK",btn:"InputForm_btn__1wiRH"}},7:function(e,t,n){e.exports={list:"Phonebook_list__vrK9m",item:"Phonebook_item__2EkAX",close:"Phonebook_close__2ZIb3"}}},[[25,1,2]]]);
//# sourceMappingURL=main.e0735c9b.chunk.js.map