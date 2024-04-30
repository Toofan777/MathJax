(()=>{"use strict";var t={d:(e,s)=>{for(var i in s)t.o(s,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:s[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{AssistiveMmlHandler:()=>u,AssistiveMmlMathDocumentMixin:()=>M,AssistiveMmlMathItemMixin:()=>h,LimitedMmlVisitor:()=>d});const s=("undefined"!=typeof window?window:global).MathJax._.components.global,i=(s.GLOBAL,s.isObject,s.combineConfig,s.combineDefaults),o=s.combineWithMathJax,a=(s.MathJax,MathJax._.core.MathItem),n=(a.protoItem,a.AbstractMathItem,a.STATE),r=a.newState,l=MathJax._.core.MmlTree.SerializedMmlVisitor,p=(l.toEntity,l.SerializedMmlVisitor),m=MathJax._.util.Options,c=(m.isObject,m.APPEND,m.REMOVE,m.OPTIONS,m.Expandable,m.expandable);m.makeArray,m.keys,m.copy,m.insert,m.defaultOptions,m.userOptions,m.selectOptions,m.selectOptionsFromKeys,m.separateOptions,m.lookup;class d extends p{getAttributes(t){return super.getAttributes(t).replace(/ ?id=".*?"/,"")}}function h(t){return class extends t{assistiveMml(t,e=!1){if(!(this.state()>=n.ASSISTIVEMML)){if(!this.isEscaped&&(t.options.enableAssistiveMml||e)){const e=t.adaptor,s=t.toMML(this.root).replace(/\n */g,"").replace(/<!--.*?-->/g,""),i=e.firstChild(e.body(e.parse(s,"text/html"))),o=e.node("mjx-assistive-mml",{unselectable:"on",display:this.display?"block":"inline"},[i]);e.setAttribute(e.firstChild(this.typesetRoot),"aria-hidden","true"),e.setStyle(this.typesetRoot,"position","relative"),e.append(this.typesetRoot,o)}this.state(n.ASSISTIVEMML)}}}}function M(t){var e;return(e=class extends t{constructor(...t){super(...t);const e=this.constructor,s=e.ProcessBits;s.has("assistive-mml")||s.allocate("assistive-mml"),this.visitor=new d(this.mmlFactory),this.options.MathItem=h(this.options.MathItem),"addStyles"in this&&this.addStyles(e.assistiveStyles)}toMML(t){return this.visitor.visitTree(t)}assistiveMml(){if(!this.processed.isSet("assistive-mml")){for(const t of this.math)t.assistiveMml(this);this.processed.set("assistive-mml")}return this}state(t,e=!1){return super.state(t,e),t<n.ASSISTIVEMML&&this.processed.clear("assistive-mml"),this}}).OPTIONS=Object.assign(Object.assign({},t.OPTIONS),{enableAssistiveMml:!0,renderActions:c(Object.assign(Object.assign({},t.OPTIONS.renderActions),{assistiveMml:[n.ASSISTIVEMML]}))}),e.assistiveStyles={"mjx-assistive-mml":{position:"absolute !important",top:"0px",left:"0px",bottom:"0px",right:"0px",clip:"rect(1px, 1px, 1px, 1px)","clip-path":"polygon(0 0, 0 1px, 1px 1px, 1px 0)",padding:"1px 0px 0px 0px !important",border:"0px !important",display:"block !important",width:"auto !important",overflow:"hidden !important","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"},'mjx-assistive-mml[display="block"]':{width:"100% !important"}},e}function u(t){return t.documentClass=M(t.documentClass),t}r("ASSISTIVEMML",153),MathJax.loader&&MathJax.loader.checkVersion("a11y/assistive-mml","4.0.0-beta.6","a11y"),o({_:{a11y:{"assistive-mml":e}}}),MathJax.startup&&(MathJax.config.options&&!1!==MathJax.config.options.enableAssistiveMml&&i(MathJax.config,"options",{menuOptions:{settings:{assistiveMml:!0}}}),MathJax.startup.extendHandler((t=>u(t))))})();