(()=>{"use strict";var a={d:(e,t)=>{for(var p in t)a.o(t,p)&&!a.o(e,p)&&Object.defineProperty(e,p,{enumerable:!0,get:t[p]})},o:(a,e)=>Object.prototype.hasOwnProperty.call(a,e),r:a=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}},e={};a.r(e),a.d(e,{UpgreekConfiguration:()=>s});const t=("undefined"!=typeof window?window:global).MathJax._.components.global,p=(t.GLOBAL,t.isObject,t.combineConfig,t.combineDefaults,t.combineWithMathJax),o=(t.MathJax,MathJax._.input.tex.Configuration),n=o.Configuration,i=(o.ConfigurationHandler,o.ParserConfiguration,MathJax._.input.tex.TokenMap),r=(i.parseResult,i.AbstractTokenMap,i.RegExpMap,i.AbstractParseMap,i.CharacterMap),u=(i.DelimiterMap,i.MacroMap,i.CommandMap,i.EnvironmentMap,MathJax._.input.tex.TexConstants.TexConstant);new r("upgreek",(function(a,e){const t=e.attributes||{};t.mathvariant=u.Variant.NORMAL;const p=a.create("token","mi",t,e.char);a.Push(p)}),{upalpha:"\u03b1",upbeta:"\u03b2",upgamma:"\u03b3",updelta:"\u03b4",upepsilon:"\u03f5",upzeta:"\u03b6",upeta:"\u03b7",uptheta:"\u03b8",upiota:"\u03b9",upkappa:"\u03ba",uplambda:"\u03bb",upmu:"\u03bc",upnu:"\u03bd",upxi:"\u03be",upomicron:"\u03bf",uppi:"\u03c0",uprho:"\u03c1",upsigma:"\u03c3",uptau:"\u03c4",upupsilon:"\u03c5",upphi:"\u03d5",upchi:"\u03c7",uppsi:"\u03c8",upomega:"\u03c9",upvarepsilon:"\u03b5",upvartheta:"\u03d1",upvarpi:"\u03d6",upvarrho:"\u03f1",upvarsigma:"\u03c2",upvarphi:"\u03c6",Upgamma:"\u0393",Updelta:"\u0394",Uptheta:"\u0398",Uplambda:"\u039b",Upxi:"\u039e",Uppi:"\u03a0",Upsigma:"\u03a3",Upupsilon:"\u03a5",Upphi:"\u03a6",Uppsi:"\u03a8",Upomega:"\u03a9"});const s=n.create("upgreek",{handler:{macro:["upgreek"]}});MathJax.loader&&MathJax.loader.checkVersion("[tex]/upgreek","4.0.0-beta.6","tex-extension"),p({_:{input:{tex:{upgreek:{UpgreekConfiguration:e}}}}})})();