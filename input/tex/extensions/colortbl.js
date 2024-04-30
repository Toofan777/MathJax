(()=>{"use strict";var t={d:(o,e)=>{for(var r in e)t.o(e,r)&&!t.o(o,r)&&Object.defineProperty(o,r,{enumerable:!0,get:e[r]})},o:(t,o)=>Object.prototype.hasOwnProperty.call(t,o),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},o={};t.r(o),t.d(o,{ColorArrayItem:()=>p,ColortblConfiguration:()=>u});const e=("undefined"!=typeof window?window:global).MathJax._.components.global,r=(e.GLOBAL,e.isObject,e.combineConfig,e.combineDefaults,e.combineWithMathJax),l=(e.MathJax,MathJax._.input.tex.base.BaseItems),a=(l.StartItem,l.StopItem,l.OpenItem,l.CloseItem,l.NullItem,l.PrimeItem,l.SubsupItem,l.OverItem,l.LeftItem,l.Middle,l.RightItem,l.BreakItem,l.BeginItem,l.EndItem,l.StyleItem,l.PositionItem,l.CellItem,l.MmlItem,l.FnItem,l.NotItem,l.NonscriptItem,l.DotsItem,l.ArrayItem),n=(l.EqnArrayItem,l.MstyleItem,l.EquationItem,MathJax._.input.tex.Configuration),i=n.Configuration,s=n.ConfigurationHandler,c=(n.ParserConfiguration,MathJax._.input.tex.TokenMap),m=(c.parseResult,c.AbstractTokenMap,c.RegExpMap,c.AbstractParseMap,c.CharacterMap,c.DelimiterMap,c.MacroMap,c.CommandMap),h=(c.EnvironmentMap,MathJax._.input.tex.TexError.default);class p extends a{constructor(){super(...arguments),this.color={cell:"",row:"",col:[]},this.hasColor=!1}EndEntry(){super.EndEntry();const t=this.row[this.row.length-1],o=this.color.cell||this.color.row||this.color.col[this.row.length-1];o&&(t.attributes.set("mathbackground",o),this.color.cell="",this.hasColor=!0)}EndRow(){super.EndRow(),this.color.row=""}createMml(){const t=super.createMml();let o=t.isKind("mrow")?t.childNodes[1]:t;if(o.isKind("menclose")&&(o=o.childNodes[0].childNodes[0]),this.hasColor){const t=o.attributes;"none"===t.get("frame")&&void 0===t.get("data-frame-styles")&&t.set("data-frame-styles","")}return t}}new m("colortbl",{cellcolor:["TableColor","cell"],rowcolor:["TableColor","row"],columncolor:["TableColor","col"]},{TableColor(t,o,e){const r=t.configuration.packageData.get("color").model,l=t.GetBrackets(o,""),a=r.getColor(l,t.GetArgument(o)),n=t.stack.Top();if(!(n instanceof p))throw new h("UnsupportedTableColor","Unsupported use of %1",t.currentCS);if("col"===e){if(n.table.length&&n.color.col[n.row.length]!==a)throw new h("ColumnColorNotTop","%1 must be in the top row or preamble",o);n.color.col[n.row.length]=a,t.GetBrackets(o,"")&&t.GetBrackets(o,"")}else if(n.color[e]=a,"row"===e&&(n.Size()||n.row.length))throw new h("RowColorNotFirst","%1 must be at the beginning of a row",o)}});const u=i.create("colortbl",{handler:{macro:["colortbl"]},items:{array:p},priority:10,config:[function(t,o){o.parseOptions.packageData.has("color")||s.get("color").config(t,o)},10]});MathJax.loader&&MathJax.loader.checkVersion("[tex]/colortbl","4.0.0-beta.6","tex-extension"),r({_:{input:{tex:{colortbl:{ColortblConfiguration:o}}}}})})();