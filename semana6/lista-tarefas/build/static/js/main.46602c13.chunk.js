(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(t,e,a){t.exports=a(24)},18:function(t,e,a){},24:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),l=a(7),r=a.n(l),o=a(1),i=a(2);a(18);function c(){const t=Object(o.a)(["\n  display: grid;\n  grid-auto-flow: column;\n  gap: 10px;\n"]);return c=function(){return t},t}function u(){const t=Object(o.a)(["\n  text-align: left;\n  text-decoration: ",";\n"]);return u=function(){return t},t}function p(){const t=Object(o.a)(["\n  padding: 0;\n  width: 200px;\n"]);return p=function(){return t},t}const m=i.a.ul(p()),h=i.a.li(u(),({completa:t})=>t?"line-through":"none"),f=i.a.div(c());var d=class extends s.a.Component{constructor(...t){super(...t),this.state={tarefas:[],inputValue:"",filter:""},this.componentDidMount=(()=>{if(localStorage.getItem("tarefasSalvas")){const t=JSON.parse(localStorage.getItem("tarefasSalvas"));console.log(t),this.setState({tarefas:t})}}),this.componentDidUpdate=(()=>{const t=this.state.tarefas;localStorage.setItem("tarefasSalvas",JSON.stringify(t))}),this.onChangeInput=(t=>{this.setState({inputValue:t.target.value})}),this.criaTarefa=(()=>{const t={id:Date.now(),texto:this.state.inputValue,completa:!1},e=[...this.state.tarefas,t];this.setState({tarefas:e,inputValue:""})}),this.selectTarefa=(t=>{const e=this.state.tarefas.map(e=>{const a=t;return e.id===t?{id:a,texto:e.texto,completa:!0}:e});this.setState({tarefas:e}),console.log(e)}),this.onChangeFilter=(t=>{this.setState({filter:t.target.value})})}render(){const t=this.state.tarefas.filter(t=>{switch(this.state.filter){case"pendentes":return!t.completa;case"completas":return t.completa;default:return!0}});return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,"Lista de tarefas"),s.a.createElement(f,null,s.a.createElement("input",{value:this.state.inputValue,onChange:this.onChangeInput}),s.a.createElement("button",{onClick:this.criaTarefa},"Adicionar")),s.a.createElement("br",null),s.a.createElement(f,null,s.a.createElement("label",null,"Filtro"),s.a.createElement("select",{value:this.state.filter,onChange:this.onChangeFilter},s.a.createElement("option",{value:""},"Nenhum"),s.a.createElement("option",{value:"pendentes"},"Pendentes"),s.a.createElement("option",{value:"completas"},"Completas"))),s.a.createElement(m,null,t.map(t=>s.a.createElement(h,{key:t.id,completa:t.completa,onClick:()=>this.selectTarefa(t.id)},t.texto))))}};const g=document.getElementById("root");r.a.render(s.a.createElement(d,null),g)}},[[12,1,2]]]);
//# sourceMappingURL=main.46602c13.chunk.js.map