(this.webpackJsonpnotebook=this.webpackJsonpnotebook||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n(2),a=n.n(o),s=n(12),c=n.n(s),r=(n(18),n(3)),l=n(4),d=n(6),h=n(5),u=(n(19),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).handleFormSubmit=function(e){e.preventDefault(),i.props.handleAddingNote({title:i.state.title,desc:i.state.desc})?i.setState({title:"",desc:""}):alert("Entered Title already Exits")},i.handleTitleChange=function(e){i.setState({title:e.target.value})},i.handleDescriptionChange=function(e){i.setState({desc:e.target.value})},i.updateAndNotify=function(){console.log("prop.changes",i.state),i.setState({title:i.props.isEditing.title,desc:i.props.isEditing.desc},(function(){console.log(i.state)}))},i.state={title:"",desc:""},i}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e){null==e.isEditing&&null!=this.props.isEditing&&this.updateAndNotify()}},{key:"render",value:function(){this.props.isEditing;return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{className:"form",onSubmit:this.handleFormSubmit,children:[Object(i.jsx)("input",{type:"text",placeholder:"Title",onChange:this.handleTitleChange,value:this.state.title,required:!0}),Object(i.jsx)("input",{type:"textarea",className:"desc",placeholder:"Description",onChange:this.handleDescriptionChange,value:this.state.desc}),Object(i.jsx)("button",{type:"submit",children:"Submit"})]})})}}]),n}(o.Component)),j=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(r.a)(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).handleSearchNote=function(t){e.props.handleSearchNote(t.target.value)},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{children:Object(i.jsx)("input",{type:"text",placeholder:"Search...",onChange:this.handleSearchNote})})}}]),n}(o.Component),p=n(8),O=n(9),b=(n(25),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).handleExpansionOfDescription=function(e){i.setState({expand:!i.state.expand})},i.handleDeleteNode=function(){i.props.handleDeleteNode(i.props.dataKey)},i.handleEditNote=function(){i.props.handleEditNote(i.props.dataKey)},i.state={expand:!1},i}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.expand,t=this.props.note;return Object(i.jsxs)("div",{className:"note-item",children:[Object(i.jsx)(p.a,{icon:O.b}),Object(i.jsxs)("span",{className:"note-info",onClick:this.handleExpansionOfDescription,children:[Object(i.jsx)("h4",{children:t.title}),e?Object(i.jsx)("div",{style:{overflow:"visible"},children:Object(i.jsx)("p",{children:t.desc})}):Object(i.jsx)("div",{style:{overflow:"hidden"},children:Object(i.jsx)("p",{children:t.desc})})]}),Object(i.jsxs)("span",{children:[Object(i.jsx)(p.a,{icon:O.a,onClick:this.handleEditNote}),Object(i.jsx)("br",{}),Object(i.jsx)(p.a,{icon:O.c,onClick:this.handleDeleteNode})]})]})}}]),n}(o.Component)),f=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.noteList,o=t.handleDeleteNode,a=[];return n.forEach((function(t,n){console.log(t),a.push(Object(i.jsx)(b,{note:t,handleDeleteNode:o,dataKey:n,handleEditNote:e.props.handleEditNote},n))})),Object(i.jsx)("div",{children:a})}}]),n}(o.Component),g=(n(26),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).componentDidMount=function(){var e=i.getJSONObjectOfNote(),t=Object.keys(e).map((function(t){return{title:t,desc:e[t]}}));i.setState({noteList:t})},i.getJSONObjectOfNote=function(){var e=localStorage.getItem("note");return e||(localStorage.setItem("note","{}"),e=localStorage.getItem("note")),e=JSON.parse(e)},i.handleAddingNote=function(e){var t=i.getJSONObjectOfNote();if(t[e.title])return!1;t[e.title]=e.desc;var n=Object.keys(t).map((function(e){return{title:e,desc:t[e]}}));return i.setState({noteList:n,isEditing:null}),localStorage.setItem("note",JSON.stringify(t)),!0},i.handleDeleteNode=function(e){var t=i.state.noteList;i.deleteNoteFromLocalStorage(t[e].title),t.splice(e,1),i.setState({noteList:t})},i.handleEditNote=function(e){var t=i.state.noteList,n=t.splice(e,1)[0];i.deleteNoteFromLocalStorage(n.title),i.setState({noteList:t,isEditing:n})},i.deleteNoteFromLocalStorage=function(e){var t=i.getJSONObjectOfNote();delete t[e],localStorage.setItem("note",JSON.stringify(t))},i.handleSearchNote=function(e){console.log(e);var t=i.getJSONObjectOfNote(),n=Object.keys(t).map((function(e){return{title:e,desc:t[e]}}));n=n.filter((function(t){return t.title.includes(e)})),i.setState({noteList:n})},i.state={noteList:[],isEditing:null},i}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.noteList,n=e.isEditing;return console.log("rendering :","noteList",t,"isEditing:",n),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(u,{handleAddingNote:this.handleAddingNote,isEditing:n}),Object(i.jsx)(j,{handleSearchNote:this.handleSearchNote}),Object(i.jsx)(f,{noteList:t,handleDeleteNode:this.handleDeleteNode,handleEditNote:this.handleEditNote})]})}}]),n}(o.Component));c.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.b3ac4452.chunk.js.map