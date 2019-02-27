(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(68)},39:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),c=a(10),l=a.n(c),i=(a(38),a(39),a(12)),r=a(13),s=a(16),m=a(14),d=a(17),u=a(15),p=a(9),h=a(78),v=a(70),f=a(71),E=a(72),g=a(73),b=a(74),C=a(75),w=a(76),I=a(77),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,o=t.value;"checkbox"===e.target.type&&(o=e.target.checked);var c=Object(p.a)({},a.state.activeItem,Object(u.a)({},n,o));a.setState({activeItem:c})},a.state={activeItem:a.props.activeItem},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.toggle,n=t.onSave;return o.a.createElement(h.a,{isOpen:!0,toggle:a},o.a.createElement(v.a,{toggle:a}," Todo Item "),o.a.createElement(f.a,null,o.a.createElement(E.a,null,o.a.createElement(g.a,null,o.a.createElement(b.a,{for:"title"},"Title"),o.a.createElement(C.a,{type:"text",name:"title",value:this.state.activeItem.title,onChange:this.handleChange,placeholder:"Enter Todo Title"})),o.a.createElement(g.a,null,o.a.createElement(b.a,{for:"description"},"Description"),o.a.createElement(C.a,{type:"text",name:"description",value:this.state.activeItem.description,onChange:this.handleChange,placeholder:"Enter Todo description"})),o.a.createElement(g.a,{check:!0},o.a.createElement(b.a,{for:"completed"},o.a.createElement(C.a,{type:"checkbox",name:"completed",checked:this.state.activeItem.completed,onChange:this.handleChange}),"Completed")))),o.a.createElement(w.a,null,o.a.createElement(I.a,{color:"success",onClick:function(){return n(e.state.activeItem)}},"Save")))}}]),t}(n.Component),y=a(11),N=a.n(y),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).refreshList=function(){N.a.get("http://localhost:8000/api/todos/").then(function(e){return a.setState({todoList:e.data})}).catch(function(e){return console.log(e)})},a.displayCompleted=function(e){return e?a.setState({viewCompleted:!0}):a.setState({viewCompleted:!1})},a.renderTabList=function(){return o.a.createElement("div",{className:"my-5 tab-list"},o.a.createElement("span",{onClick:function(){return a.displayCompleted(!0)},className:a.state.viewCompleted?"active":""},"complete"),o.a.createElement("span",{onClick:function(){return a.displayCompleted(!1)},className:a.state.viewCompleted?"":"active"},"Incomplete"))},a.renderItems=function(){var e=a.state.viewCompleted;return a.state.todoList.filter(function(t){return t.completed===e}).map(function(e){return o.a.createElement("li",{key:e.id,className:"list-group-item d-flex justify-content-between align-items-center"},o.a.createElement("span",{className:"todo-title mr-2 ".concat(a.state.viewCompleted?"completed-todo":""),title:e.description},e.title),o.a.createElement("span",null,o.a.createElement("button",{onClick:function(){return a.editItem(e)},className:"btn btn-secondary mr-2"}," ","Edit"," "),o.a.createElement("button",{onClick:function(){return a.handleDelete(e)},className:"btn btn-danger"},"Delete"," ")))})},a.toggle=function(){a.setState({modal:!a.state.modal})},a.handleSubmit=function(e){a.toggle(),e.id?N.a.put("http://localhost:8000/api/todos/".concat(e.id,"/"),e).then(function(e){return a.refreshList()}):N.a.post("http://localhost:8000/api/todos/",e).then(function(e){return a.refreshList()})},a.handleDelete=function(e){N.a.delete("http://localhost:8000/api/todos/".concat(e.id)).then(function(e){return a.refreshList()})},a.createItem=function(){a.setState({activeItem:{title:"",description:"",completed:!1},modal:!a.state.modal})},a.editItem=function(e){a.setState({activeItem:e,modal:!a.state.modal})},a.state={viewCompleted:!1,activeItem:{title:"",description:"",completed:!1},todoList:[]},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.refreshList()}},{key:"render",value:function(){return o.a.createElement("main",{className:"content"},o.a.createElement("h1",{className:"text-white text-uppercase text-center my-4"},"Todo app"),o.a.createElement("div",{className:"row "},o.a.createElement("div",{className:"col-md-6 col-sm-10 mx-auto"},o.a.createElement("div",{className:"card p-3"},o.a.createElement("div",{className:""},o.a.createElement("button",{onClick:this.createItem,className:"btn btn-primary"},"Add task")),this.renderTabList(),o.a.createElement("ul",{className:"list-group list-group-flush"},this.renderItems())))),this.state.modal?o.a.createElement(k,{activeItem:this.state.activeItem,toggle:this.toggle,onSave:this.handleSubmit}):null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.2c2868d6.chunk.js.map