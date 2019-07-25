(function(e){function t(t){for(var n,a,c=t[0],s=t[1],l=t[2],u=0,f=[];u<c.length;u++)a=c[u],r[a]&&f.push(r[a][0]),r[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,c=1;c<o.length;c++){var s=o[c];0!==r[s]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},r={app:0},i=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=s;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var n=o("64a9"),r=o.n(n);r.a},1085:function(e,t,o){"use strict";var n=o("e359"),r=o.n(n);r.a},1182:function(e,t,o){"use strict";var n=o("308c"),r=o.n(n);r.a},"308c":function(e,t,o){},4777:function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),r=o("ecee"),i=o("c074"),a=o("b702"),c=o("ad3d"),s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("h1",[e._v("todoler")]),o("Todos")],1)},l=[],d=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"todos"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],attrs:{type:"text",placeholder:"What needs to be done? Press enter to add a new task.","aria-label":"Enter a new task here and press enter to add."},domProps:{value:e.val},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTodo(t)},input:function(t){t.target.composing||(e.val=t.target.value)}}}),o("TodoList",{attrs:{todos:e.showTodos},on:{"delete-todo":function(t){return e.deleteTodo(t)},"edit-todo":function(t){return e.editTodo(t)},"toggle-complete":function(t){return e.toggleCompleteTodo(t)}}}),o("TodoListFooter",{attrs:{activeRemaining:e.activeRemaining,state:e.todoState},on:{"state-change":function(t){e.todoState=t},"clear-completed":e.clearCompleted}})],1)},u=[],f=(o("7f7f"),o("20d6"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",e._l(e.todos,function(t){return o("li",{key:t.id},[o("div",[o("span",{on:{click:function(o){return e.toggleComplete(t)}}},[o("font-awesome-icon",{attrs:{icon:t.complete?["fas","check-square"]:["far","check-square"]}})],1),e._v("\n      "+e._s(t.name)+"\n    ")]),o("div",[o("a",{attrs:{href:"javascript:void(0);","aria-label":"Edit",title:"Edit"},on:{click:function(o){return e.editTodo(t)}}},[o("font-awesome-icon",{attrs:{icon:"pencil-alt"}})],1),o("a",{attrs:{href:"javascript:void(0);","aria-label":"Delete",title:"Delete"},on:{click:function(o){return e.deleteTodo(t)}}},[o("font-awesome-icon",{attrs:{icon:"trash"}})],1)])])}),0)}),p=[],v=(o("8e6e"),o("ac6a"),o("456d"),o("bd86"));function m(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o}function h(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?m(o,!0).forEach(function(t){Object(v["a"])(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):m(o).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}var g={name:"todolist",props:["todos"],methods:{deleteTodo:function(e){this.$emit("delete-todo",e)},editTodo:function(e){var t=prompt("Please enter a new name for this task:",e.name);t&&this.$emit("edit-todo",h({},e,{newText:t}))},toggleComplete:function(e){this.$emit("toggle-complete",e)}}},b=g,y=(o("f0a8"),o("2877")),w=Object(y["a"])(b,f,p,!1,null,"1d7f8c63",null),T=w.exports,O=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("footer",[o("div",[e._v(e._s(e.activeRemaining)+" items left")]),o("div",[o("span",{class:"all"==e.state?"active":"",on:{click:function(t){return e.$emit("state-change","all")}}},[e._v("All")]),o("span",{class:"active"==e.state?"active":"",on:{click:function(t){return e.$emit("state-change","active")}}},[e._v("Active")]),o("span",{class:"complete"==e.state?"active":"",on:{click:function(t){return e.$emit("state-change","completed")}}},[e._v("Completed")])]),o("a",{attrs:{href:"javascript:void(0);"},on:{click:function(t){return e.$emit("clear-completed")}}},[e._v("Clear completed")])])},j=[],k={name:"to-do-list-footer",props:["activeRemaining","state"]},_=k,x=(o("88d4"),Object(y["a"])(_,O,j,!1,null,"7ead1a7e",null)),S=x.exports,P={name:"todos",components:{TodoList:T,TodoListFooter:S},data:function(){return{todos:[{name:"Laundry",id:1,complete:!1}],val:"",todoState:"all"}},computed:{activeRemaining:function(){return this.todos.map(function(e){return!e.complete}).filter(Boolean).length},showTodos:function(){return"all"===this.todoState?this.todos:"active"===this.todoState?this.todos.filter(function(e){return!e.complete}):"completed"===this.todoState?this.todos.filter(function(e){return e.complete}):void 0}},methods:{saveTodos:function(){localStorage.setItem("todos",JSON.stringify(this.todos))},addTodo:function(){this.todos.push({name:this.val,id:this.todos.length+1,complete:!1}),this.val="",this.saveTodos()},deleteTodo:function(e){this.todos.splice(this.getTodoIndex(e),1);for(var t=0;t<this.todos.length;t++)this.todos[t].id=t+1;this.saveTodos()},editTodo:function(e){this.todos[this.getTodoIndex(e)].name=e.newText,this.saveTodos()},getTodoIndex:function(e){return this.todos.findIndex(function(t){return t.name==e.name&&t.id==e.id})},toggleCompleteTodo:function(e){var t=this.todos[this.getTodoIndex(e)];t.complete=!t.complete,this.saveTodos()},clearCompleted:function(){this.todos=this.todos.filter(function(e){return!e.complete}),this.saveTodos()}},created:function(){var e=localStorage.getItem("todos");e&&(this.todos=JSON.parse(e))}},$=P,C=(o("1085"),Object(y["a"])($,d,u,!1,null,"55e61d94",null)),E=C.exports,I={name:"app",components:{Todos:E}},D=I,N=(o("034f"),o("1182"),Object(y["a"])(D,s,l,!1,null,"01c1882c",null)),A=N.exports,L=o("9483");Object(L["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["c"].add(i["b"],i["c"],i["a"],a["a"]),n["a"].component("font-awesome-icon",c["a"]),n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(A)}}).$mount("#app")},"5bff":function(e,t,o){},"64a9":function(e,t,o){},"88d4":function(e,t,o){"use strict";var n=o("5bff"),r=o.n(n);r.a},e359:function(e,t,o){},f0a8:function(e,t,o){"use strict";var n=o("4777"),r=o.n(n);r.a}});
//# sourceMappingURL=app.92c79658.js.map