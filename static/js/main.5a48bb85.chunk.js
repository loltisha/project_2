(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(t,e,a){t.exports=a(43)},22:function(t,e,a){},23:function(t,e,a){},43:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),o=a(14),i=a.n(o),l=(a(22),a(2)),c=a(3),r=a(5),u=a(4),m=a(6),h=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(r.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(s)))).state={hide:"false"},a.hideList=function(){"false"===a.state.hide?a.setState({hide:"hidden"}):a.setState({hide:"false"})},a.onClearItemClick=function(){console.log("onClearItemClick"),a.props.clearItem(a.props.index)},a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return s.a.createElement("li",{className:this.state.hide},s.a.createElement("span",{onClick:this.hideList},this.props.mylist.task),s.a.createElement("button",{onClick:this.onClearItemClick}," clear item"))}}]),e}(n.Component),d=(a(23),a(15)),p=a.n(d),f=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(r.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(s)))).state={list:{task:""},myList:[],quotes:""},a.updateForm=function(t){var e=t.target.value,n=a.state.list,s=Object.assign({},n);s[t.target.name]=e,console.log(s),a.setState({list:s})},a.submitForm=function(t){t.preventDefault(),console.log("submit",a.state.list);var e=a.state.myList.slice(0);""!==a.state.list.task&&(e.push(a.state.list),a.setState({myList:e,list:{task:""}}))},a.clearList=function(){a.setState({myList:[]})},a.clearItem=function(t){var e=a.state.myList.splice(t,1);a.setState({task:e})},a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this;console.log("hi"),p()({method:"get",url:"https://quotes.rest/qod.json"}).then(function(e){console.log(e.data.contents.quotes[0].quote),t.setState({quotes:e.data.contents.quotes[0].quote})}).catch(function(t){console.log(t)})}},{key:"render",value:function(){var t=this,e=this.state.myList.map(function(e,a){return s.a.createElement(h,{mylist:e,index:a,clearItem:t.clearItem})});return s.a.createElement("div",{className:"container"},s.a.createElement("form",{onSubmit:this.submitForm}," ",s.a.createElement("h1",null,"To-Do List"),s.a.createElement("label",null,"My Tasks"),s.a.createElement("input",{type:"text",name:"task",onChange:this.updateForm,value:this.state.list.task,placeholder:"Type Your Tasks"}),s.a.createElement("button",{type:"submit"}," Add"),s.a.createElement("button",{onClick:this.clearList,type:"button"}," Remove List")),s.a.createElement("div",{className:"list"},s.a.createElement("div",null,s.a.createElement("ul",null,0===e.length?"":e," "))),s.a.createElement("div",{className:" containerQuotes"}," ",s.a.createElement("p",null,this.state.quotes)))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.5a48bb85.chunk.js.map