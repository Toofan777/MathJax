(()=>{"use strict";var t={d:(e,o)=>{for(var a in o)t.o(o,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:o[a]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{SetOptionsConfiguration:()=>y,SetOptionsUtil:()=>w});const o=("undefined"!=typeof window?window:global).MathJax._.components.global,a=(o.GLOBAL,o.isObject,o.combineConfig,o.combineDefaults,o.combineWithMathJax),n=(o.MathJax,MathJax._.input.tex.Configuration),i=n.Configuration,r=n.ConfigurationHandler,s=(n.ParserConfiguration,MathJax._.input.tex.TokenMap),p=(s.parseResult,s.AbstractTokenMap,s.RegExpMap,s.AbstractParseMap,s.CharacterMap,s.DelimiterMap,s.MacroMap,s.CommandMap),l=(s.EnvironmentMap,MathJax._.input.tex.TexError.default),u=MathJax._.input.tex.ParseUtil,c=(u.KeyValueType,u.KeyValueTypes,u.ParseUtil),f=MathJax._.input.tex.Token,O=(f.Token,f.Macro),d=MathJax._.input.tex.base.BaseMethods,x=(d.splitAlignArray,d.default),g=MathJax._.util.Options,M=g.isObject,b=(g.APPEND,g.REMOVE,g.OPTIONS,g.Expandable,g.expandable),w=(g.makeArray,g.keys,g.copy,g.insert,g.defaultOptions,g.userOptions,g.selectOptions,g.selectOptionsFromKeys,g.separateOptions,g.lookup,{filterPackage(t,e){if("tex"!==e&&!r.get(e))throw new l("NotAPackage","Not a defined package: %1",e);const o=t.options.setoptions,a=o.allowOptions[e];if(void 0===a&&!o.allowPackageDefault||!1===a)throw new l("PackageNotSettable",'Options can\'t be set for package "%1"',e);return!0},filterOption(t,e,o){var a;const n=t.options.setoptions,i=n.allowOptions[e]||{},r=i.hasOwnProperty(o)&&!M(i[o])?i[o]:null;if(!1===r||null===r&&!n.allowOptionsDefault)throw new l("OptionNotSettable",'Option "%1" is not allowed to be set',o);if(!(null===(a="tex"===e?t.options:t.options[e])||void 0===a?void 0:a.hasOwnProperty(o)))throw"tex"===e?new l("InvalidTexOption",'Invalid TeX option "%1"',o):new l("InvalidOptionKey",'Invalid option "%1" for package "%2"',o,e);return!0},filterValue:(t,e,o,a)=>a}),h=new p("setoptions",{setOptions:"SetOptions"},{SetOptions(t,e){const o=t.GetBrackets(e)||"tex",a=c.keyvalOptions(t.GetArgument(e)),n=t.options.setoptions;if(n.filterPackage(t,o)){for(const e of Object.keys(a))n.filterOption(t,o,e)&&(("tex"===o?t.options:t.options[o])[e]=n.filterValue(t,o,e,a[e]));t.Push(t.itemFactory.create("null"))}}});const y=i.create("setoptions",{handler:{macro:["setoptions"]},config:function(t,e){const o=e.parseOptions.handlers.get("macro").lookup("require");o&&(h.add("Require",new O("Require",o._func)),h.add("require",new O("require",x.Macro,["\\Require{#2}\\setOptions[#2]{#1}",2,""])))},priority:3,options:{setoptions:{filterPackage:w.filterPackage,filterOption:w.filterOption,filterValue:w.filterValue,allowPackageDefault:!0,allowOptionsDefault:!0,allowOptions:b({tex:{FindTeX:!1,formatError:!1,package:!1,baseURL:!1,tags:!1,maxBuffer:!1,maxMaxros:!1,macros:!1,environments:!1},setoptions:!1,autoload:!1,require:!1,configmacros:!1,tagformat:!1})}}});MathJax.loader&&MathJax.loader.checkVersion("[tex]/setoptions","4.0.0-beta.6","tex-extension"),a({_:{input:{tex:{setoptions:{SetOptionsConfiguration:e}}}}})})();