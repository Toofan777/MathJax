(()=>{"use strict";var e={d:(t,a)=>{for(var s in a)e.o(a,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:a[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{CasesBeginItem:()=>x,CasesConfiguration:()=>C,CasesMethods:()=>I,CasesTags:()=>M});const a=("undefined"!=typeof window?window:global).MathJax._.components.global,s=(a.GLOBAL,a.isObject,a.combineConfig,a.combineDefaults,a.combineWithMathJax),n=(a.MathJax,MathJax._.input.tex.Configuration),r=n.Configuration,o=(n.ConfigurationHandler,n.ParserConfiguration,MathJax._.input.tex.TokenMap),i=(o.parseResult,o.AbstractTokenMap,o.RegExpMap,o.AbstractParseMap,o.CharacterMap,o.DelimiterMap,o.MacroMap),c=(o.CommandMap,o.EnvironmentMap),u=MathJax._.input.tex.ParseUtil,m=(u.KeyValueType,u.KeyValueTypes,u.ParseUtil),l=MathJax._.input.tex.base.BaseMethods,h=(l.splitAlignArray,l.default),p=MathJax._.input.tex.TexError.default,g=MathJax._.input.tex.base.BaseItems,d=(g.StartItem,g.StopItem,g.OpenItem,g.CloseItem,g.NullItem,g.PrimeItem,g.SubsupItem,g.OverItem,g.LeftItem,g.Middle,g.RightItem,g.BreakItem,g.BeginItem),f=(g.EndItem,g.StyleItem,g.PositionItem,g.CellItem,g.MmlItem,g.FnItem,g.NotItem,g.NonscriptItem,g.DotsItem,g.ArrayItem,g.EqnArrayItem,g.MstyleItem,g.EquationItem,MathJax._.input.tex.ams.AmsConfiguration),y=f.AmsTags,b=(f.AmsConfiguration,MathJax._.input.tex.empheq.EmpheqUtil.EmpheqUtil);class x extends d{get kind(){return"cases-begin"}checkItem(e){return e.isKind("end")&&e.getName()===this.getName()&&this.getProperty("end")?(this.setProperty("end",!1),[[],!0]):super.checkItem(e)}}class M extends y{constructor(){super(...arguments),this.subcounter=0}start(e,t,a){this.subcounter=0,super.start(e,t,a)}autoTag(){null==this.currentTag.tag&&("subnumcases"===this.currentTag.env?(0===this.subcounter&&this.counter++,this.subcounter++,this.tag(this.formatNumber(this.counter,this.subcounter),!1)):(0!==this.subcounter&&"numcases-left"===this.currentTag.env||this.counter++,this.tag(this.formatNumber(this.counter),!1)))}formatNumber(e,t=null){return e.toString()+(null===t?"":String.fromCharCode(96+t))}}const I={NumCases(e,t){if(e.stack.env.closing===t.getName()){delete e.stack.env.closing,e.Push(e.itemFactory.create("end").setProperty("name",t.getName()));const a=e.stack.Top(),s=a.Last,n=m.copyNode(s,e),r=a.getProperty("left");return b.left(s,n,r+"\\empheqlbrace\\,",e,"numcases-left"),e.Push(e.itemFactory.create("end").setProperty("name",t.getName())),null}{const a=e.GetArgument("\\begin{"+t.getName()+"}");t.setProperty("left",a);const s=h.EqnArray(e,t,!0,!0,"ll","tt");return s.arraydef.displaystyle=!1,s.arraydef.rowspacing=".2em",s.setProperty("numCases",!0),e.Push(t),s}},Entry(e,t){if(!e.stack.Top().getProperty("numCases"))return h.Entry(e,t);e.Push(e.itemFactory.create("cell").setProperties({isEntry:!0,name:t}));const a=e.string;let s=0,n=e.i,r=a.length;for(;n<r;){const e=a.charAt(n);if("{"===e)s++,n++;else if("}"===e){if(0===s)break;s--,n++}else{if("&"===e&&0===s)throw new p("ExtraCasesAlignTab","Extra alignment tab in text for numcase environment");if("\\"===e&&0===s){const e=(a.slice(n+1).match(/^[a-z]+|./i)||[])[0];if("\\"===e||"cr"===e||"end"===e||"label"===e)break;n+=e.length}else n++}}const o=a.substring(e.i,n).replace(/^\s*/,"");e.PushAll(m.internalMath(e,o,0)),e.i=n}};new c("cases-env",b.environment,{numcases:["NumCases","cases"],subnumcases:["NumCases","cases"]},I),new i("cases-macros",{"&":"Entry"},I);const C=r.create("cases",{handler:{environment:["cases-env"],character:["cases-macros"]},items:{[x.prototype.kind]:x},tags:{cases:M}});MathJax.loader&&MathJax.loader.checkVersion("[tex]/cases","4.0.0-beta.6","tex-extension"),s({_:{input:{tex:{cases:{CasesConfiguration:t}}}}})})();