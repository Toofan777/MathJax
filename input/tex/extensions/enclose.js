(()=>{"use strict";var e={d:(a,t)=>{for(var o in t)e.o(t,o)&&!e.o(a,o)&&Object.defineProperty(a,o,{enumerable:!0,get:t[o]})},o:(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},a={};e.r(a),e.d(a,{ENCLOSE_OPTIONS:()=>p,EncloseConfiguration:()=>u,EncloseMethods:()=>d});const t=("undefined"!=typeof window?window:global).MathJax._.components.global,o=(t.GLOBAL,t.isObject,t.combineConfig,t.combineDefaults,t.combineWithMathJax),n=(t.MathJax,MathJax._.input.tex.Configuration),r=n.Configuration,i=(n.ConfigurationHandler,n.ParserConfiguration,MathJax._.input.tex.TokenMap),c=(i.parseResult,i.AbstractTokenMap,i.RegExpMap,i.AbstractParseMap,i.CharacterMap,i.DelimiterMap,i.MacroMap,i.CommandMap),l=(i.EnvironmentMap,MathJax._.input.tex.ParseUtil),s=(l.KeyValueType,l.KeyValueTypes,l.ParseUtil),p={"data-arrowhead":1,color:1,mathcolor:1,background:1,mathbackground:1,"data-padding":1,"data-thickness":1};let d={Enclose:function(e,a){let t=e.GetArgument(a).replace(/,/g," ");const o=e.GetBrackets(a,""),n=e.ParseArg(a),r=s.keyvalOptions(o,p);r.notation=t,e.Push(e.create("node","menclose",[n],r))}};new c("enclose",{enclose:"Enclose"},d);const u=r.create("enclose",{handler:{macro:["enclose"]}});MathJax.loader&&MathJax.loader.checkVersion("[tex]/enclose","4.0.0-beta.6","tex-extension"),o({_:{input:{tex:{enclose:{EncloseConfiguration:a}}}}})})();