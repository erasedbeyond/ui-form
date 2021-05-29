(this["webpackJsonpui-assignment"]=this["webpackJsonpui-assignment"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),i=s(8),r=s.n(i),l=(s(13),s(6)),c=s(2),o=s(3),d=s(5),h=s(4),u=(s(14),s(0)),j=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s),(e=t.call(this)).setValues=function(t){var s,a=t.target.name,n="show"+a.charAt(0).toUpperCase()+a.slice(1)+"Alert";e.setState((s={},Object(l.a)(s,a,t.target.value),Object(l.a)(s,a+"Alert",""),Object(l.a)(s,n,"hidden"),s))},e.submit=function(t){t.preventDefault();var s=!0;""===e.state.email?(e.setState({emailAlert:"Please fill the email address",showEmailAlert:"visible"}),s=!1):new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(e.state.email)||(e.setState({emailAlert:"Please add valid email address",showEmailAlert:"visible"}),s=!1);""===e.state.password?(e.setState({passwordAlert:"Please enter the password",showPasswordAlert:"visible"}),s=!1):new RegExp(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,32}/).test(e.state.password)||(e.state.password.length<8?e.setState({passwordAlert:"Password is less than 8 characters"}):e.setState({passwordAlert:"Password must have a numeric values"}),e.setState({showPasswordAlert:"visible"}),s=!1);s&&(alert("form SUBMITTED\nEMAIL: "+e.state.email+"\nDOB: "+e.state.date+e.state.month+e.state.year+"\n"+(e.state.organisation&&"ORGANISATION: "+e.state.organisation+"\n")+(e.state.customer&&"Already a customer: "+e.state.customer)),e.setState({email:"",date:"03",month:"march",year:"1995",organisation:"",password:"",customer:""}),t.target.reset())},e.state={email:"",password:"",date:"03",month:"March",year:"1995",organisation:"",customer:"",emailAlert:"",showEmailAlert:"hidden",passwordAlert:"",showPasswordAlert:"hidden"};var a=(new Date).getFullYear()-30;return e.year=Array.from(new Array(31),(function(e,t){return t+a})),e.month=["January","February","March","April","May","June","July","August","September","October","November","December"],e}return Object(o.a)(s,[{key:"render",value:function(){return console.log(this.state),Object(u.jsx)("main",{className:"main",children:Object(u.jsxs)("form",{onSubmit:this.submit,noValidate:!0,children:[Object(u.jsx)("h2",{children:"Create an account"}),Object(u.jsxs)("section",{children:[Object(u.jsx)("h3",{className:"required",children:"Enter your email"}),Object(u.jsx)("span",{className:"alert "+this.state.showEmailAlert,children:this.state.emailAlert}),Object(u.jsx)("input",{type:"email",name:"email",onChange:this.setValues})]}),Object(u.jsxs)("section",{className:"d-o-b",children:[Object(u.jsx)("h3",{className:"optional",children:"Date of birth"}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("label",{children:["Date",Object(u.jsx)("input",{type:"number",name:"date",placeholder:this.state.date,onChange:this.setValues,min:"1",max:"31"})]}),Object(u.jsxs)("label",{children:["Month",Object(u.jsx)("select",{name:"month",value:this.state.month,onChange:this.setValues,children:this.month.map((function(e,t){return Object(u.jsx)("option",{value:e.value,children:e})}))})]}),Object(u.jsxs)("label",{children:["Year",Object(u.jsx)("select",{name:"year",value:this.state.year,onChange:this.setValues,children:this.year.map((function(e,t){return Object(u.jsx)("option",{value:e.value,children:e})}))})]})]})]}),Object(u.jsxs)("section",{children:[Object(u.jsx)("h3",{className:"required",children:"Choose a strong password"}),Object(u.jsx)("span",{className:"alert "+this.state.showPasswordAlert,children:this.state.passwordAlert}),Object(u.jsx)("input",{type:"password",name:"password",onChange:this.setValues})]}),Object(u.jsxs)("section",{className:"desktop-only",children:[Object(u.jsx)("h3",{children:"Are you an agency or individual?"}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("label",{className:"radio-option",children:[Object(u.jsx)("input",{type:"radio",value:"individual",name:"organisation",onChange:this.setValues}),"Individual"]}),Object(u.jsxs)("label",{className:"radio-option",children:[Object(u.jsx)("input",{type:"radio",value:"agency",name:"organisation",onChange:this.setValues}),"Agency"]})]})]}),Object(u.jsxs)("section",{className:"mobile-only",children:[Object(u.jsx)("h3",{className:"optional",children:"Already using any of our products?"}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("label",{className:"radio-option",children:[Object(u.jsx)("input",{type:"radio",value:"yes",name:"customer",onChange:this.setValues}),"Yes"]}),Object(u.jsxs)("label",{className:"radio-option",children:[Object(u.jsx)("input",{type:"radio",value:"no",name:"customer",onChange:this.setValues}),"No"]})]})]}),Object(u.jsx)("input",{className:"submit-button",type:"submit",value:"Submit"})]})})}}]),s}(n.a.Component),m=(s(16),function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("header",{children:[Object(u.jsx)("h1",{children:"Sample Heading"}),Object(u.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum distinctio incidunt quae voluptas tempore dolorem, autem officia libero soluta."})]})}}]),s}(n.a.Component));s(17);var b=function(){return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(m,{}),Object(u.jsx)(j,{}),Object(u.jsx)("div",{id:"background-design"})]})};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.81d80690.chunk.js.map