(this.webpackJsonp11tut=this.webpackJsonp11tut||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(8),a=n.n(i),l=(n(14),n(7)),s=n(9),u=n(5),o=n(0),h=function(e){var t=e.title;return Object(o.jsx)("header",{children:Object(o.jsx)("h1",{children:t})})};h.defaultProps={title:"Default Title"};var d=h,j=function(e){var t=e.search,n=e.setSearch;return Object(o.jsxs)("form",{className:"searchForm",onSubmit:function(e){return e.preventDefault()},children:[Object(o.jsx)("label",{htmlFor:"search",children:"Search"}),Object(o.jsx)("input",{id:"search",type:"text",role:"searchbox",placeholder:"Search Items",value:t,onChange:function(e){return n(e.target.value)}})]})},b=n(4),m=function(e){var t=e.newItem,n=e.setNewItem,r=e.handleSubmit,i=Object(c.useRef)();return Object(o.jsxs)("form",{className:"addForm",onSubmit:r,children:[Object(o.jsx)("label",{htmlFor:"addItem",children:"Add Item"}),Object(o.jsx)("input",{autoFocus:!0,ref:i,id:"addItem",type:"text",placeholder:"Add Item",required:!0,value:t,onChange:function(e){return n(e.target.value)}}),Object(o.jsx)("button",{type:"submit","aria-label":"Add Item",onClick:function(){return i.current.focus()},children:Object(o.jsx)(b.a,{})})]})},O=function(e){var t=e.item,n=e.handleCheck,c=e.handleDelete;return Object(o.jsxs)("li",{className:"item",children:[Object(o.jsx)("input",{type:"checkbox",onChange:function(){return n(t.id)},checked:t.checked}),Object(o.jsx)("label",{style:t.checked?{textDecoration:"line-through"}:null,onDoubleClick:function(){return n(t.id)},children:t.item}),Object(o.jsx)(b.b,{onClick:function(){return c(t.id)},role:"button",tabIndex:"0","aria-label":"Delete ".concat(t.item)})]})},f=function(e){var t=e.items,n=e.handleCheck,c=e.handleDelete;return Object(o.jsx)("ul",{children:t.map((function(e){return Object(o.jsx)(O,{item:e,handleCheck:n,handleDelete:c},e.id)}))})},x=function(e){var t=e.items,n=e.handleCheck,c=e.handleDelete;return Object(o.jsx)("main",{children:t.length?Object(o.jsx)(f,{items:t,handleCheck:n,handleDelete:c}):Object(o.jsx)("p",{style:{marginTop:"2rem"},children:"Your list is empty."})})},p=function(e){var t=e.length;return Object(o.jsx)("footer",{children:Object(o.jsxs)("p",{children:[t," List ",1===t?"item":"items"]})})};var v=function(){var e=Object(c.useState)(JSON.parse(localStorage.getItem("shoppinglist"))||[]),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(""),a=Object(u.a)(i,2),h=a[0],b=a[1],O=Object(c.useState)(""),f=Object(u.a)(O,2),v=f[0],g=f[1];return Object(c.useEffect)((function(){localStorage.setItem("shoppinglist",JSON.stringify(n))}),[n]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(d,{title:"Grocery List"}),Object(o.jsx)(m,{newItem:h,setNewItem:b,handleSubmit:function(e){e.preventDefault(),h&&(!function(e){var t={id:n.length?n[n.length-1].id+1:1,checked:!1,item:e},c=[].concat(Object(s.a)(n),[t]);r(c)}(h),b(""))}}),Object(o.jsx)(j,{search:v,setSearch:g}),Object(o.jsx)(x,{items:n.filter((function(e){return e.item.toLowerCase().includes(v.toLowerCase())})),handleCheck:function(e){var t=n.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{checked:!t.checked}):t}));r(t)},handleDelete:function(e){var t=n.filter((function(t){return t.id!==e}));r(t)}}),Object(o.jsx)(p,{length:n.length})]})};a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.821a641b.chunk.js.map