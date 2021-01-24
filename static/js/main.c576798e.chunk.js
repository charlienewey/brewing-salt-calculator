(this["webpackJsonpbrewing-salt-calculator"]=this["webpackJsonpbrewing-salt-calculator"]||[]).push([[0],{110:function(i,n,a){"use strict";a.r(n);var e=a(3),t=a(0),m=a.n(t),r=a(11),o=a.n(r),l=(a(99),a(25)),s=a(13),d=a(14),c=a(16),g=a(21),u=a(20),p=a(48),h=a(5),b=a(183),j=a(174),f=a(175),O=a(81),y=a.n(O),x=a(176),v=a(162),C=a(184),w=a(177),B=a(182),S=a(178),P=a(173),A=a(67),k=a(157),N=a(179),I=a(163),M=function(i){Object(g.a)(a,i);var n=Object(u.a)(a);function a(i){var e;return Object(s.a)(this,a),(e=n.call(this,i)).classNames=i.classNames,e.handleIonChange=e.handleIonChange.bind(Object(c.a)(e)),e}return Object(d.a)(a,[{key:"handleIonChange",value:function(i,n){if(void 0===this.props.onIonChange||null===this.props.onIonChange)throw new Error("Missing onIonChange prop");this.props.onIonChange(i.target.value,n)}},{key:"render",value:function(){var i=this,n=[this.classNames,"IonEntry"].join(" ");return Object(e.jsx)(k.a,{container:!0,justify:"center",className:n,spacing:1,children:["calcium","magnesium","sodium","sulfate","chloride","bicarbonate"].map((function(n){return Object(e.jsx)(k.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(e.jsx)(N.a,{label:n.charAt(0).toUpperCase()+n.slice(1),type:"number",min:0,value:i.props.state[n],onChange:function(a){return i.handleIonChange(a,n)},InputProps:{startAdornment:Object(e.jsx)(I.a,{position:"start",children:"ppm"})},variant:"outlined",required:!0,fullWidth:!0})},n)}))})}}]),a}(m.a.Component),F=a(181),T=a(165),D=a(164),W=a(161),E=a(18),V=function(i){Object(g.a)(a,i);var n=Object(u.a)(a);function a(i){var e;return Object(s.a)(this,a),(e=n.call(this,i)).classNames=i.classNames,e.handleVolumeChange=e.handleVolumeChange.bind(Object(c.a)(e)),e.handleMineralChange=e.handleMineralChange.bind(Object(c.a)(e)),e}return Object(d.a)(a,[{key:"handleMineralChange",value:function(i,n){if(void 0===this.props.onMineralChange||null===this.props.onMineralChange)throw new Error("Missing onMineralChange prop");this.props.onMineralChange(n,i.target.name)}},{key:"handleVolumeChange",value:function(i){if(void 0===this.props.onVolumeChange||null===this.props.onVolumeChange)throw new Error("Missing onVolumeChange prop");this.props.onVolumeChange(i.target.value)}},{key:"render",value:function(){var i=this,n=[this.classNames,"BrewSetup"].join(" ");return Object(e.jsxs)("div",{children:[Object(e.jsx)(k.a,{container:!0,justify:"center",className:n,spacing:1,children:Object(e.jsxs)(k.a,{item:!0,xs:12,sm:6,md:4,lg:4,children:[Object(e.jsx)(A.a,{variant:"h6",gutterBottom:!0,children:"Mineral Inventory"}),Object(e.jsx)(W.a,{component:"legend",children:"Which brewing salts do you have available?"}),Object(e.jsx)(D.a,{children:E.map((function(n){var a=n.mineral;return Object(e.jsx)(T.a,{control:Object(e.jsx)(F.a,{name:a,onChange:function(n,a){return i.handleMineralChange(n,a)},checked:i.props.state.availableMinerals[a]}),label:n.mineral},n.mineral)}))})]})}),Object(e.jsx)("br",{}),Object(e.jsx)("br",{}),Object(e.jsx)(k.a,{container:!0,justify:"center",className:n,spacing:1,children:Object(e.jsxs)(k.a,{item:!0,xs:12,sm:6,md:4,lg:4,children:[Object(e.jsx)(A.a,{variant:"h6",gutterBottom:!0,children:"Water Volume"}),Object(e.jsx)(N.a,{label:"Total Brewing Water Volume",type:"number",min:0,value:this.props.state.waterVolume,onChange:function(n){return i.handleVolumeChange(n)},InputProps:{startAdornment:Object(e.jsx)(I.a,{position:"start",children:"litres"})},variant:"outlined",required:!0,fullWidth:!0})]})})]})}}]),a}(m.a.Component),L=a(65),R=a.n(L),J=a(78),z=a(79),G=a(80),H=(m.a.Component,function(i){Object(g.a)(a,i);var n=Object(u.a)(a);function a(i){var e;return Object(s.a)(this,a),(e=n.call(this,i)).selectRow=i.selectRow,e}return Object(d.a)(a,[{key:"render",value:function(){return Object(e.jsx)(k.a,{container:!0,justify:"center",className:"DataTable WaterProfilesTable",spacing:1,children:Object(e.jsx)(k.a,{item:!0,xs:12,sm:12,lg:12,children:Object(e.jsx)(R.a,{columns:z,data:J,striped:!0,highlightOnHover:!0,pointerOnHover:!0,onRowClicked:this.selectRow,pagination:!0,paginationPerPage:10,defaultSortField:"style"})})})}}]),a}(m.a.Component)),U=a(166),q=a(168),Y=a(172),K=a(171),Q=a(167),X=a(169),Z=a(170),$=a(12),_=a(180);var ii=Object(U.a)((function(i){return{listItem:{padding:i.spacing(1,0)},total:{fontWeight:700},title:{marginTop:i.spacing(2)}}}));function ni(i){for(var n=ii(),a=Object(l.a)({},i.state.sourceProfile),t=Object(l.a)({},i.state.targetProfile),r=i.state.brewingProfile.availableMinerals,o=parseFloat(i.state.brewingProfile.waterVolume),s=E.map((function(i){return i.mineral})),d=Object.keys(a),c={},g=0;g<s.length;g++){var u=s[g];c[u]=0}var p={};s.map((function(i){return p[i]=0}));var h=Object(l.a)({},p);if(JSON.stringify(a)!==JSON.stringify(t)){var b=function(i,n,a,e){var t=e||1,m=Object.keys(i),r=E.map((function(i){return i.mineral})),o={};if(n.margin)o=n.margin;else for(var l=0;l<m.length;l++){var s=m[l];o[s]=1}if(null===a||void 0===a||0===Object.keys(a).length)for(var d={},c=0;c<r.length;c++)d[r[c]]=!0;for(var g=r.filter((function(i){return a[i]})),u=m.map((function(a){return(n[a]-i[a])/o[a]})),p=[],h=0;h<m.length;h++){for(var b=[],j=m[h],f=0;f<g.length;f++){var O=E[f],y=parseFloat(O[j]||0)/o[j];b.push(y)}p.push(b)}for(var x=new $.b(p),v=Object(_.a)(x,u,{maxIterations:1e3}),C={},w={},B=0;B<g.length;B++){var S=v[B],P=S*t;C[E[B].mineral]=0,w[E[B].mineral]=0,isNaN(P)||(w[E[B].mineral]=P,C[E[B].mineral]=S)}for(var A={},k=0;k<g.length;k++){var N=E[k],I=v[k];if(!isNaN(I))for(var M=0;M<m.length;M++){var F=m[M],T=parseFloat(N[F]||0)*I;A[F]=parseFloat(A[F]||i[F])+T}}for(var D=0;D<m.length;D++){var W=g[D];void 0===C[W]||null===C[W]?C[W]=0:C[W]=parseFloat(C[W]),void 0===w[W]||null===w[W]?w[W]=0:w[W]=parseFloat(w[W])}for(var V=0;V<m.length;V++){var L=m[V];void 0===A[L]||null===A[L]?A[L]=0:A[L]=parseFloat(A[L])}return{unscaledAdditions:C,scaledAdditions:w,apparentProfile:A}}(a,t,r,o);c=Object(l.a)({},b.apparentProfile),p=Object(l.a)({},b.scaledAdditions),h=Object(l.a)({},b.unscaledAdditions)}return Object(e.jsxs)(m.a.Fragment,{children:[Object(e.jsx)(A.a,{variant:"h6",gutterBottom:!0,children:"Water Profile Summary"}),Object(e.jsx)(Q.a,{component:v.a,children:Object(e.jsxs)(q.a,{className:n.table,size:"small","aria-label":"a dense table",children:[Object(e.jsx)(X.a,{children:Object(e.jsxs)(Z.a,{children:[Object(e.jsx)(K.a,{}),d.map((function(i){return Object(e.jsx)(K.a,{align:"right",children:i.charAt(0).toUpperCase()+i.slice(1)},i)}))]})}),Object(e.jsxs)(Y.a,{children:[Object(e.jsxs)(Z.a,{children:[Object(e.jsx)(K.a,{component:"th",scope:"row",children:"Source Water Profile"}),d.map((function(i){return Object(e.jsx)(K.a,{align:"right",children:a[i]},i)}))]}),Object(e.jsxs)(Z.a,{children:[Object(e.jsxs)(K.a,{component:"th",scope:"row",children:["Target Water Profile",t.margin?" (\xb1 Margin of Error)":null]}),d.map((function(i){return Object(e.jsx)(K.a,{align:"right",children:t[i]+(t.margin?" (\xb1"+t.margin[i]+")":"")},i)}))]}),Object(e.jsxs)(Z.a,{children:[Object(e.jsx)(K.a,{component:"th",scope:"row",children:Object(e.jsx)("strong",{children:"Optimised Water Profile"})}),d.map((function(i){return Object(e.jsx)(K.a,{align:"right",children:Object(e.jsx)("strong",{children:c[i].toFixed(0)})},i)}))]}),t.margin?Object(e.jsxs)(Z.a,{children:[Object(e.jsx)(K.a,{component:"th",scope:"row",children:"Suitable?"}),d.map((function(i){return Object(e.jsx)(K.a,{align:"right",children:Math.abs(c[i].toFixed(0)-t[i])<=t.margin[i]?"\u2713":"\u2717"},i)}))]}):null]})]})}),Object(e.jsx)("br",{}),Object(e.jsx)(A.a,{variant:"h6",gutterBottom:!0,children:"Addition Summary"}),Object(e.jsx)(Q.a,{component:v.a,children:Object(e.jsxs)(q.a,{className:n.table,size:"small","aria-label":"a dense table",children:[Object(e.jsx)(X.a,{children:Object(e.jsxs)(Z.a,{children:[Object(e.jsx)(K.a,{}),s.map((function(i){return Object(e.jsx)(K.a,{align:"right",children:i},i)}))]})}),Object(e.jsxs)(Y.a,{children:[Object(e.jsxs)(Z.a,{children:[Object(e.jsx)(K.a,{component:"th",scope:"row",children:"per\xa0Litre"}),s.map((function(i){return Object(e.jsxs)(K.a,{align:"right",children:[(h[i]||0).toFixed(3),"g"]},i)}))]}),Object(e.jsxs)(Z.a,{children:[Object(e.jsxs)(K.a,{component:"th",scope:"row",children:["Total\xa0(to\xa0treat\xa0",o.toFixed(2),"L)"]}),s.map((function(i){return Object(e.jsxs)(K.a,{align:"right",children:[(p[i]||0).toFixed(2),"g"]},i)}))]})]})]})})]})}var ai={calcium:1,magnesium:0,sodium:0,sulfate:0,chloride:4,bicarbonate:16};function ei(){return Object(e.jsxs)(A.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(e.jsx)(P.a,{color:"inherit",href:"https://github.com/charlienewey/",children:"Charles Newey"})," ",(new Date).getFullYear(),"."]})}var ti=function(i){Object(g.a)(a,i);var n=Object(u.a)(a);function a(i){var e;return Object(s.a)(this,a),(e=n.call(this,i)).steps=["Source profile input","Target profile input","Brewing parameter input","Review results"],e.defaultState={activeStep:0,sourceProfile:Object(l.a)({},ai),targetProfile:Object(l.a)({},ai),brewingProfile:{waterVolume:20,availableMinerals:{Gypsum:!0,"Calcium Chloride":!0,"Epsom Salt":!0,"Magnesium Chloride":!1,"Canning Salt":!0,"Baking Soda":!0,Chalk:!0,"Pickling Lime":!1}}},e.classes=i.classes,void 0===i.state||null===i.state?e.state=Object(l.a)({},e.defaultState):e.state=i.state,e.handleSourceProfileChange=e.handleSourceProfileChange.bind(Object(c.a)(e)),e.handleTargetProfileChange=e.handleTargetProfileChange.bind(Object(c.a)(e)),e.handleMineralInventoryChange=e.handleMineralInventoryChange.bind(Object(c.a)(e)),e.handleVolumeChange=e.handleVolumeChange.bind(Object(c.a)(e)),e.selectPresetTarget=e.selectPresetTarget.bind(Object(c.a)(e)),e.handleNext=e.handleNext.bind(Object(c.a)(e)),e.handleBack=e.handleBack.bind(Object(c.a)(e)),e}return Object(d.a)(a,[{key:"componentDidUpdate",value:function(i){i.state!==this.props.state&&this.setState(this.props.state)}},{key:"handleSourceProfileChange",value:function(i,n){var a=this.state.sourceProfile||this.defaultState.sourceProfile;a[n]=i,this.setState({sourceProfile:a})}},{key:"handleTargetProfileChange",value:function(i,n){var a=this.state.targetProfile||this.defaultState.targetProfile;a[n]=i,this.setState({targetProfile:a})}},{key:"handleMineralInventoryChange",value:function(i,n){var a=this.state.brewingProfile||this.defaultState.brewingProfile;a.availableMinerals[n]=i,this.setState({brewingProfile:a})}},{key:"handleVolumeChange",value:function(i){var n=this.state.brewingProfile||this.defaultState.brewingProfile;n.waterVolume=i,this.setState({brewingProfile:n})}},{key:"selectPresetTarget",value:function(i){for(var n={},a=Object.keys(i),e=0;e<a.length;e++)"style"===a[e]?n[a[e]]=i[a[e]]:(n[a[e]]=i[a[e]].midpoint,n.margin||(n.margin={}),n.margin[a[e]]=i[a[e]].margin);this.setState({targetProfile:n})}},{key:"handleNext",value:function(){this.setState({activeStep:this.state.activeStep+1})}},{key:"handleBack",value:function(){this.setState({activeStep:this.state.activeStep-1})}},{key:"getStepContent",value:function(i){switch(i){case 0:return Object(e.jsxs)(m.a.Fragment,{children:[Object(e.jsx)(A.a,{variant:"h6",gutterBottom:!0,children:"Source Water Profile Input"}),Object(e.jsx)(A.a,{gutterBottom:!0,children:"Enter your source water profile here, with each mineral in parts per million. You can usually find these from your municipal water provider's reports - or, if you're using bottled water, on the side of the bottle."}),Object(e.jsx)(A.a,{gutterBottom:!0,children:"The default values below are those of Reverse Osmosis water - but if you're using distilled water, you can just fill this list with zeroes."}),Object(e.jsx)("br",{}),Object(e.jsx)(M,{classNames:"sourceProfile",state:this.state.sourceProfile,onIonChange:this.handleSourceProfileChange})]});case 1:return Object(e.jsxs)(m.a.Fragment,{children:[Object(e.jsx)(A.a,{variant:"h6",gutterBottom:!0,children:"Target Water Profile Input"}),Object(e.jsx)(A.a,{gutterBottom:!0,children:"Enter the values for your target water profile here. If you aren't sure which values to go for, try using one of the presets listed in the table below. This list covers each major style in the 2015 BJCP style guide. For example, if you're brewing an American IPA, you can use \"21A - American IPA\" as a starting point."}),Object(e.jsxs)(A.a,{gutterBottom:!0,children:["These values come from ",Object(e.jsx)("a",{href:"https://www.brunwater.com/",children:"Martin Brungard's \"Bru'n Water\" spreadsheet"}),"and ",Object(e.jsx)("a",{href:"https://www.moneaudebrassage.fr/",children:"Mon Eau de Brassage"}),"."]}),Object(e.jsx)("br",{}),Object(e.jsx)("div",{children:Object(e.jsx)(M,{classNames:"targetProfile",state:this.state.targetProfile,onIonChange:this.handleTargetProfileChange})}),Object(e.jsx)("br",{}),Object(e.jsxs)(b.a,{children:[Object(e.jsx)(j.a,{expandIcon:Object(e.jsx)(y.a,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:"Presets for BJCP Beer Styles"}),Object(e.jsx)(f.a,{children:Object(e.jsx)(H,{selectRow:this.selectPresetTarget})})]})]});case 2:return Object(e.jsx)(V,{state:this.state.brewingProfile,onMineralChange:this.handleMineralInventoryChange,onVolumeChange:this.handleVolumeChange});case 3:return Object(e.jsx)(ni,{state:this.state});default:throw new Error("Unknown step")}}},{key:"render",value:function(){return Object(e.jsxs)(m.a.Fragment,{children:[Object(e.jsx)(x.a,{}),Object(e.jsxs)("main",{className:this.classes.layout,children:[Object(e.jsxs)(v.a,{className:this.classes.paper,children:[Object(e.jsx)(A.a,{component:"h1",variant:"h4",align:"center",children:"Brewing Salt Calculator"}),Object(e.jsx)(C.a,{activeStep:this.state.activeStep,className:this.classes.stepper,children:this.steps.map((function(i){return Object(e.jsx)(w.a,{children:Object(e.jsx)(B.a,{children:i})},i)}))}),Object(e.jsxs)(m.a.Fragment,{children:[this.getStepContent(this.state.activeStep),Object(e.jsxs)("div",{className:this.classes.buttons,children:[0!==this.state.activeStep&&Object(e.jsx)(S.a,{onClick:this.handleBack,className:this.classes.button,children:"Back"}),this.state.activeStep<this.steps.length-1?Object(e.jsx)(S.a,{variant:"contained",color:"primary",onClick:this.handleNext,className:this.classes.button,children:"Next"}):Object(e.jsx)(S.a,{variant:"contained",color:"primary",onClick:window.print,className:this.classes.button,children:"Print Summary"})]})]})]}),Object(e.jsx)(ei,{})]})]})}}]),a}(m.a.Component),mi=Object(h.a)((function(i){return{layout:Object(p.a)({width:"auto",marginLeft:i.spacing(2),marginRight:i.spacing(2)},i.breakpoints.up(600+2*i.spacing(2)),{width:1024,marginLeft:"auto",marginRight:"auto"}),paper:Object(p.a)({marginTop:i.spacing(3),marginBottom:i.spacing(3),padding:i.spacing(2)},i.breakpoints.up(600+2*i.spacing(3)),{marginTop:i.spacing(6),marginBottom:i.spacing(6),padding:i.spacing(3)}),stepper:{padding:i.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:i.spacing(3),marginLeft:i.spacing(1)}}}))(ti),ri=function(i){i&&i instanceof Function&&a.e(3).then(a.bind(null,186)).then((function(n){var a=n.getCLS,e=n.getFID,t=n.getFCP,m=n.getLCP,r=n.getTTFB;a(i),e(i),t(i),m(i),r(i)}))};o.a.render(Object(e.jsx)(m.a.StrictMode,{children:Object(e.jsx)(mi,{})}),document.getElementById("root")),ri()},18:function(i){i.exports=JSON.parse('[{"mineral":"Gypsum","addition":1,"calcium":232.8,"magnesium":null,"sodium":null,"sulfate":558,"chloride":null,"bicarbonate":null},{"mineral":"Calcium Chloride","addition":1,"calcium":361.1,"magnesium":null,"sodium":null,"sulfate":null,"chloride":638.9,"bicarbonate":null},{"mineral":"Epsom Salt","addition":1,"calcium":null,"magnesium":98.6,"sodium":null,"sulfate":389.7,"chloride":null,"bicarbonate":null},{"mineral":"Magnesium Chloride","addition":1,"calcium":null,"magnesium":119.5,"sodium":null,"sulfate":null,"chloride":348.7,"bicarbonate":null},{"mineral":"Canning Salt","addition":1,"calcium":null,"magnesium":null,"sodium":393.4,"sulfate":null,"chloride":606.6,"bicarbonate":null},{"mineral":"Baking Soda","addition":1,"calcium":null,"magnesium":null,"sodium":273.7,"sulfate":null,"chloride":null,"bicarbonate":726.3},{"mineral":"Chalk","addition":1,"calcium":400.5,"magnesium":null,"sodium":null,"sulfate":null,"chloride":null,"bicarbonate":1219.8},{"mineral":"Pickling Lime","addition":1,"calcium":541,"magnesium":null,"sodium":null,"sulfate":null,"chloride":null,"bicarbonate":1645.5}]')},78:function(i){i.exports=JSON.parse('[{"style":"01A - American Light Lager","calcium":{"margin":5,"midpoint":55},"magnesium":{"margin":15,"midpoint":15},"bicarbonate":{"margin":20,"midpoint":20},"sulfate":{"margin":25,"midpoint":25},"chloride":{"margin":25,"midpoint":75},"sodium":{"margin":50,"midpoint":50}},{"style":"01B - American Lager","calcium":{"margin":12.5,"midpoint":62.5},"magnesium":{"margin":15,"midpoint":15},"bicarbonate":{"margin":20,"midpoint":20},"sulfate":{"margin":50,"midpoint":100},"chloride":{"margin":25,"midpoint":75},"sodium":{"margin":50,"midpoint":50}},{"style":"01C - Cream Ale","calcium":{"margin":25,"midpoint":75},"magnesium":{"margin":15,"midpoint":15},"bicarbonate":{"margin":40,"midpoint":40},"sulfate":{"margin":25,"midpoint":25},"chloride":{"margin":50,"midpoint":50},"sodium":{"margin":50,"midpoint":50}},{"style":"01D - American Wheat Beer","calcium":{"margin":25,"midpoint":75},"magnesium":{"margin":15,"midpoint":15},"bicarbonate":{"margin":40,"midpoint":40},"sulfate":{"margin":50,"midpoint":150},"chloride":{"margin":25,"midpoint":75},"sodium":{"margin":50,"midpoint":50}},{"style":"02C - International Dark Lager","calcium":{"margin":12.5,"midpoint":62.5},"magnesium":{"margin":15,"midpoint":15},"bicarbonate":{"margin":20,"midpoint":100},"sulfate":{"margin":25,"midpoint":25},"chloride":{"margin":50,"midpoint":100},"sodium":{"margin":50,"midpoint":50}},{"style":"03D - Czech Dark Lager","calcium":{"margin":5,"midpoint":55},"magnesium":{"margin":15,"midpoint":15},"bicarbonate":{"margin":20,"midpoint":20},"sulfate":{"margin":25,"midpoint":25},"chloride":{"margin":25,"midpoint":75},"sodium":{"margin":50,"midpoint":50}},{"style":"04A - Munich Helles","calcium":{"margin":5,"midpoint":55},"magnesium":{"margin":15,"midpoint":15},"bicarbonate":{"margin":20,"midpoint":20},"sulfate":{"margin":25,"midpoint":25},"chloride":{"margin":25,"midpoint":75},"sodium":{"margin":50,"midpoint":50}},{"style":"04C - Helles Bock","calcium":{"margin":12.5,"midpoint":62.5},"magnesium":{"margin":15,"midpoint":15},"bicarbonate":{"margin":20,"midpoint":60},"sulfate":{"margin":50,"midpoint":50},"chloride":{"margin":50,"midpoint":100},"sodium":{"margin":50,"midpoint":50}},{"style":"05B - K\xf6lsch","calcium":{"margin":25,"midpoint":75},"magnesium":{"margin":15,"midpoint":15},"bicarbonate":{"margin":40,"midpoint":40},"sulfate":{"margin":25,"midpoint":25},"chloride":{"margin":50,"midpoint":50},"sodium":{"margin":50,"midpoint":50}},{"style":"05C - German Helles Exportbier","calcium":{"margin":37.5,"midpoint":112.5},"magnesium":{"margin":15,"midpoint":15},"bicarbonate":{"margin":20,"midpoint":60},"sulfate":{"margin":50,"midpoint":100},"chloride":{"margin":25,"midpoint":75},"sodium":{"margin":50,"midpoint":50}},{"style":"05D - German Pils","calcium":{"margin":12.5,"midpoint":62.5},"magnesium":{"margin":15,"midpoint":15},"bicarbonate":{"margin":20,"midpoint":20},"sulfate":{"margin":50,"midpoint":100},"chloride":{"margin":25,"midpoint":75},"sodium":{"margin":50,"midpoint":50}},{"style":"06A - M\xe4rzen","calcium":{"margin":12.5,"midpoint":62.5},"magnesium":{"margin":15,"midpoint":15},"bicarbonate":{"margin":40,"midpoint":80},"sulfate":{"margin":50,"midpoint":50},"chloride":{"margin":50,"midpoint":100},"sodium":{"margin":50,"midpoint":50}},{"style":"06C - Dunkles Bock","calcium":{"margin":12.5,"midpoint":62.5},"magnesium":{"margin":15,"midpoint":15},"bicarbonate":{"margin":20,"midpoint":60},"sulfate":{"margin":50,"midpoint":50},"chloride":{"margin":50,"midpoint":100},"sodium":{"margin":50,"midpoint":50}},{"style":"07A - Vienna Lager","calcium":{"margin":12.5,"midpoint":62.5},"magnesium":{"margin":15,"midpoint":15},"bicarbonate":{"margin":40,"midpoint":80},"sulfate":{"margin":50,"midpoint":50},"chloride":{"margin":50,"midpoint":100},"sodium":{"margin":50,"midpoint":50}},{"style":"07B - Altbier","calcium":{"margin":50,"midpoint":100},"magnesium":{"margin":15,"midpoint":15},"bicarbonate":{"margin":40,"midpoint":80},"sulfate":{"margin":100,"midpoint":200},"chloride":{"margin":25,"midpoint":75},"sodium":{"margin":50,"midpoint":50}},{"style":"08A - Munich Dunkel","calcium":{"margin":12.5,"midpoint":62.5},"magnesium":{"margin":15,"midpoint":15},"bicarbonate":{"margin":20,"midpoint":100},"sulfate":{"margin":25,"midpoint":25},"chloride":{"margin":50,"midpoint":100},"sodium":{"margin":50,"midpoint":50}},{"style":"08B - Schwarzbier","calcium":{"margin":12.5,"midpoint":62.5},"magnesium":{"margin":15,"midpoint":15},"bicarbonate":{"margin":20,"midpoint":100},"sulfate":{"margin":25,"midpoint":25},"chloride":{"margin":50,"midpoint":100},"sodium":{"margin":50,"midpoint":50}},{"style":"09A - Doppelbock","calcium":{"margin":25,"midpoint":75},"magnesium":{"margin":15,"midpoint":15},"bicarbonate":{"margin":35,"midpoint":115},"sulfate":{"margin":50,"midpoint":50},"chloride":{"margin":25,"midpoint":75},"sodium":{"margin":50,"midpoint":50}},{"style":"09B - Eisbock","calcium":{"margin":25,"midpoint":75},"magnesium":{"margin":15,"midpoint":15},"bicarbonate":{"margin":35,"midpoint":115},"sulfate":{"margin":50,"midpoint":50},"chloride":{"margin":25,"midpoint":75},"sodium":{"margin":50,"midpoint":50}},{"style":"09C - Baltic Porter","calcium":{"margin":12.5,"midpoint":62.5},"magnesium":{"margin":15,"midpoint":15},"bicarbonate":{"margin":40,"midpoint":120},"sulfate":{"margin":50,"midpoint":100},"chloride":{"margin":50,"midpoint":100},"sodium":{"margin":50,"midpoint":50}},{"style":"10A - Weissbier","calcium":{"margin":25,"midpoint":75},"magnesium":{"margin":14.5,"midpoint":15.5},"bicarbonate":{"margin":40,"midpoint":40},"sulfate":{"margin":25,"midpoint":25},"chloride":{"margin":50,"midpoint":50},"sodium":{"margin":50,"midpoint":50}},{"style":"10B - Dunkles Weissbier","calcium":{"margin":12.5,"midpoint":62.5},"magnesium":{"margin":14.5,"midpoint":15.5},"bicarbonate":{"margin":40,"midpoint":120},"sulfate":{"margin":50,"midpoint":100},"chloride":{"margin":50,"midpoint":100},"sodium":{"margin":50,"midpoint":50}},{"style":"10C - Weizenbock","calcium":{"margin":12.5,"midpoint":62.5},"magnesium":{"margin":14.5,"midpoint":15.5},"bicarbonate":{"margin":40,"midpoint":160},"sulfate":{"margin":50,"midpoint":100},"chloride":{"margin":50,"midpoint":100},"sodium":{"margin":50,"midpoint":50}},{"style":"11A - Ordinary Bitter","calcium":{"margin":25,"midpoint":75},"magnesium":{"margin":14.5,"midpoint":15.5},"bicarbonate":{"margin":40,"midpoint":40},"sulfate":{"margin":50,"midpoint":150},"chloride":{"margin":25,"midpoint":75},"sodium":{"margin":50,"midpoint":50}},{"style":"11B - Best Bitter","calcium":{"margin":50,"midpoint":100},"magnesium":{"margin":14.5,"midpoint":15.5},"bicarbonate":{"margin":40,"midpoint":80},"sulfate":{"margin":50,"midpoint":150},"chloride":{"margin":25,"midpoint":75},"sodium":{"margin":50,"midpoint":50}},{"style":"11C - Strong Bitter","calcium":{"margin":50,"midpoint":100},"magnesium":{"margin":14.5,"midpoint":15.5},"bicarbonate":{"margin":40,"midpoint":80},"sulfate":{"margin":100,"midpoint":200},"chloride":{"margin":25,"midpoint":75},"sodium":{"margin":50,"midpoint":50}},{"style":"12C - English IPA","calcium":{"margin":50,"midpoint":100},"magnesium":{"margin":14.5,"midpoint":15.5},"bicarbonate":{"margin":40,"midpoint":80},"sulfate":{"margin":100,"midpoint":200},"chloride":{"margin":25,"midpoint":75},"sodium":{"margin":50,"midpoint":50}},{"style":"13A - Dark Mild","calcium":{"margin":50,"midpoint":100},"magnesium":{"margin":14.5,"midpoint":15.5},"bicarbonate":{"margin":40,"midpoint":80},"sulfate":{"margin":50,"midpoint":150},"chloride":{"margin":25,"midpoint":75},"sodium":{"margin":50,"midpoint":50}},{"style":"13B - British Brown Ale","calcium":{"margin":12.5,"midpoint":62.5},"magnesium":{"margin":14.5,"midpoint":15.5},"bicarbonate":{"margin":35,"midpoint":115},"sulfate":{"margin":50,"midpoint":100},"chloride":{"margin":25,"midpoint":75},"sodium":{"margin":50,"midpoint":50}},{"style":"13C - English Porter","calcium":{"margin":12.5,"midpoint":62.5},"magnesium":{"margin":14.5,"midpoint":15.5},"bicarbonate":{"margin":35,"midpoint":115},"sulfate":{"margin":50,"midpoint":100},"chloride":{"margin":25,"midpoint":75},"sodium":{"margin":50,"midpoint":50}},{"style":"14A - Scottish Light","calcium":{"margin":50,"midpoint":100},"magnesium":{"margin":14.5,"midpoint":15.5},"bicarbonate":{"margin":40,"midpoint":80},"sulfate":{"margin":50,"midpoint":150},"chloride":{"margin":25,"midpoint":75},"sodium":{"margin":50,"midpoint":50}},{"style":"14B - Scottish Heavy","calcium":{"margin":50,"midpoint":100},"magnesium":{"margin":14.5,"midpoint":15.5},"bicarbonate":{"margin":40,"midpoint":80},"sulfate":{"margin":50,"midpoint":150},"chloride":{"margin":25,"midpoint":75},"sodium":{"margin":50,"midpoint":50}},{"style":"14C - Scottish Export","calcium":{"margin":50,"midpoint":100},"magnesium":{"margin":14.5,"midpoint":15.5},"bicarbonate":{"margin":40,"midpoint":80},"sulfate":{"margin":50,"midpoint":150},"chloride":{"margin":25,"midpoint":75},"sodium":{"margin":50,"midpoint":50}},{"style":"15A - Irish Red Ale","calcium":{"margin":50,"midpoint":100},"magnesium":{"margin":14.5,"midpoint":15.5},"bicarbonate":{"margin":40,"midpoint":80},"sulfate":{"margin":100,"midpoint":200},"chloride":{"margin":25,"midpoint":75},"sodium":{"margin":50,"midpoint":50}},{"style":"15B - Irish Stout","calcium":{"margin":12.5,"midpoint":62.5},"magnesium":{"margin":14.5,"midpoint":15.5},"bicarbonate":{"margin":35,"midpoint":115},"sulfate":{"margin":50,"midpoint":100},"chloride":{"margin":25,"midpoint":75},"sodium":{"margin":50,"midpoint":50}},{"style":"16A - Sweet Stout","calcium":{"margin":12.5,"midpoint":62.5},"magnesium":{"margin":14.5,"midpoint":15.5},"bicarbonate":{"margin":40,"midpoint":120},"sulfate":{"margin":50,"midpoint":100},"chloride":{"margin":50,"midpoint":100},"sodium":{"margin":50,"midpoint":50}},{"style":"16B - Oatmeal Stout","calcium":{"margin":12.5,"midpoint":62.5},"magnesium":{"margin":14.5,"midpoint":15.5},"bicarbonate":{"margin":40,"midpoint":120},"sulfate":{"margin":50,"midpoint":100},"chloride":{"margin":50,"midpoint":100},"sodium":{"margin":50,"midpoint":50}},{"style":"16D - Foreign Extra Stout","calcium":{"margin":12.5,"midpoint":62.5},"magnesium":{"margin":14.5,"midpoint":15.5},"bicarbonate":{"margin":40,"midpoint":120},"sulfate":{"margin":50,"midpoint":100},"chloride":{"margin":50,"midpoint":100},"sodium":{"margin":50,"midpoint":50}},{"style":"17B - Old Ale","calcium":{"margin":25,"midpoint":75},"magnesium":{"margin":14.5,"midpoint":15.5},"bicarbonate":{"margin":40,"midpoint":80},"sulfate":{"margin":25,"midpoint":75},"chloride":{"margin":50,"midpoint":100},"sodium":{"margin":50,"midpoint":50}},{"style":"17C - Wee Heavy","calcium":{"margin":25,"midpoint":75},"magnesium":{"margin":14.5,"midpoint":15.5},"bicarbonate":{"margin":40,"midpoint":80},"sulfate":{"margin":25,"midpoint":75},"chloride":{"margin":50,"midpoint":100},"sodium":{"margin":50,"midpoint":50}},{"style":"17D - English Barleywine","calcium":{"margin":25,"midpoint":75},"magnesium":{"margin":14.5,"midpoint":15.5},"bicarbonate":{"margin":40,"midpoint":80},"sulfate":{"margin":25,"midpoint":75},"chloride":{"margin":50,"midpoint":100},"sodium":{"margin":50,"midpoint":50}},{"style":"18A - Blonde Ale","calcium":{"margin":5,"midpoint":55},"magnesium":{"margin":14.5,"midpoint":15.5},"bicarbonate":{"margin":20,"midpoint":20},"sulfate":{"margin":25,"midpoint":25},"chloride":{"margin":25,"midpoint":75},"sodium":{"margin":50,"midpoint":50}},{"style":"18B - American Pale Ale","calcium":{"margin":50,"midpoint":100},"magnesium":{"margin":14.5,"midpoint":15.5},"bicarbonate":{"margin":40,"midpoint":80},"sulfate":{"margin":150,"midpoint":250},"chloride":{"margin":50,"midpoint":50},"sodium":{"margin":50,"midpoint":50}},{"style":"19A - American Amber Ale","calcium":{"margin":50,"midpoint":100},"magnesium":{"margin":14.5,"midpoint":15.5},"bicarbonate":{"margin":40,"midpoint":80},"sulfate":{"margin":100,"midpoint":200},"chloride":{"margin":25,"midpoint":75},"sodium":{"margin":50,"midpoint":50}},{"style":"19B - California Common ","calcium":{"margin":50,"midpoint":100},"magnesium":{"margin":14.5,"midpoint":15.5},"bicarbonate":{"margin":40,"midpoint":80},"sulfate":{"margin":100,"midpoint":200},"chloride":{"margin":25,"midpoint":75},"sodium":{"margin":50,"midpoint":50}},{"style":"19C - American Brown Ale","calcium":{"margin":12.5,"midpoint":62.5},"magnesium":{"margin":14.5,"midpoint":15.5},"bicarbonate":{"margin":40,"midpoint":120},"sulfate":{"margin":50,"midpoint":100},"chloride":{"margin":50,"midpoint":100},"sodium":{"margin":50,"midpoint":50}},{"style":"20A - American Porter","calcium":{"margin":12.5,"midpoint":62.5},"magnesium":{"margin":14,"midpoint":16},"bicarbonate":{"margin":40,"midpoint":120},"sulfate":{"margin":50,"midpoint":100},"chloride":{"margin":50,"midpoint":100},"sodium":{"margin":50,"midpoint":50}},{"style":"20B - American Stout","calcium":{"margin":12.5,"midpoint":62.5},"magnesium":{"margin":14,"midpoint":16},"bicarbonate":{"margin":40,"midpoint":120},"sulfate":{"margin":50,"midpoint":100},"chloride":{"margin":50,"midpoint":100},"sodium":{"margin":50,"midpoint":50}},{"style":"20C - Imperial Stout","calcium":{"margin":12.5,"midpoint":62.5},"magnesium":{"margin":14,"midpoint":16},"bicarbonate":{"margin":40,"midpoint":160},"sulfate":{"margin":50,"midpoint":100},"chloride":{"margin":50,"midpoint":100},"sodium":{"margin":50,"midpoint":50}},{"style":"21A - American IPA","calcium":{"margin":50,"midpoint":100},"magnesium":{"margin":14,"midpoint":16},"bicarbonate":{"margin":40,"midpoint":80},"sulfate":{"margin":150,"midpoint":250},"chloride":{"margin":50,"midpoint":50},"sodium":{"margin":50,"midpoint":50}},{"style":"22A - Double IPA","calcium":{"margin":50,"midpoint":100},"magnesium":{"margin":14,"midpoint":16},"bicarbonate":{"margin":40,"midpoint":80},"sulfate":{"margin":150,"midpoint":250},"chloride":{"margin":50,"midpoint":50},"sodium":{"margin":50,"midpoint":50}},{"style":"22C - American Barleywine","calcium":{"margin":25,"midpoint":75},"magnesium":{"margin":14,"midpoint":16},"bicarbonate":{"margin":40,"midpoint":80},"sulfate":{"margin":25,"midpoint":75},"chloride":{"margin":50,"midpoint":100},"sodium":{"margin":50,"midpoint":50}},{"style":"23A - Berliner Weisse","calcium":{"margin":25,"midpoint":75},"magnesium":{"margin":14,"midpoint":16},"bicarbonate":{"margin":40,"midpoint":40},"sulfate":{"margin":25,"midpoint":25},"chloride":{"margin":50,"midpoint":50},"sodium":{"margin":50,"midpoint":50}},{"style":"23B - Flanders Red Ale","calcium":{"margin":25,"midpoint":75},"magnesium":{"margin":14,"midpoint":16},"bicarbonate":{"margin":60,"midpoint":60},"sulfate":{"margin":25,"midpoint":25},"chloride":{"margin":50,"midpoint":50},"sodium":{"margin":50,"midpoint":50}},{"style":"23C - Oud Bruin","calcium":{"margin":25,"midpoint":75},"magnesium":{"margin":14,"midpoint":16},"bicarbonate":{"margin":50,"midpoint":50},"sulfate":{"margin":25,"midpoint":25},"chloride":{"margin":50,"midpoint":50},"sodium":{"margin":50,"midpoint":50}},{"style":"23D - Lambic","calcium":{"margin":25,"midpoint":75},"magnesium":{"margin":14,"midpoint":16},"bicarbonate":{"margin":40,"midpoint":40},"sulfate":{"margin":25,"midpoint":25},"chloride":{"margin":50,"midpoint":50},"sodium":{"margin":50,"midpoint":50}},{"style":"23E - Gueuze ","calcium":{"margin":25,"midpoint":75},"magnesium":{"margin":14,"midpoint":16},"bicarbonate":{"margin":40,"midpoint":40},"sulfate":{"margin":25,"midpoint":25},"chloride":{"margin":50,"midpoint":50},"sodium":{"margin":50,"midpoint":50}},{"style":"23F - Fruit Lambic","calcium":{"margin":25,"midpoint":75},"magnesium":{"margin":14,"midpoint":16},"bicarbonate":{"margin":40,"midpoint":40},"sulfate":{"margin":25,"midpoint":25},"chloride":{"margin":50,"midpoint":50},"sodium":{"margin":50,"midpoint":50}},{"style":"24A - Witbier","calcium":{"margin":25,"midpoint":75},"magnesium":{"margin":14,"midpoint":16},"bicarbonate":{"margin":40,"midpoint":40},"sulfate":{"margin":25,"midpoint":25},"chloride":{"margin":50,"midpoint":50},"sodium":{"margin":50,"midpoint":50}},{"style":"24B - Belgian Pale Ale","calcium":{"margin":50,"midpoint":100},"magnesium":{"margin":14,"midpoint":16},"bicarbonate":{"margin":40,"midpoint":80},"sulfate":{"margin":100,"midpoint":200},"chloride":{"margin":25,"midpoint":75},"sodium":{"margin":50,"midpoint":50}},{"style":"24C - Bi\xe8re de Garde","calcium":{"margin":25,"midpoint":75},"magnesium":{"margin":14,"midpoint":16},"bicarbonate":{"margin":40,"midpoint":80},"sulfate":{"margin":25,"midpoint":75},"chloride":{"margin":50,"midpoint":100},"sodium":{"margin":50,"midpoint":50}},{"style":"25A - Belgian Blond Ale","calcium":{"margin":25,"midpoint":75},"magnesium":{"margin":14,"midpoint":16},"bicarbonate":{"margin":40,"midpoint":40},"sulfate":{"margin":25,"midpoint":25},"chloride":{"margin":50,"midpoint":50},"sodium":{"margin":50,"midpoint":50}},{"style":"25B - Saison","calcium":{"margin":50,"midpoint":100},"magnesium":{"margin":14,"midpoint":16},"bicarbonate":{"margin":40,"midpoint":80},"sulfate":{"margin":150,"midpoint":250},"chloride":{"margin":50,"midpoint":50},"sodium":{"margin":50,"midpoint":50}},{"style":"25C - Belgian Golden Strong Ale","calcium":{"margin":25,"midpoint":75},"magnesium":{"margin":14,"midpoint":16},"bicarbonate":{"margin":20,"midpoint":20},"sulfate":{"margin":25,"midpoint":75},"chloride":{"margin":25,"midpoint":75},"sodium":{"margin":50,"midpoint":50}},{"style":"26B - Belgian Dubbel","calcium":{"margin":25,"midpoint":75},"magnesium":{"margin":14,"midpoint":16},"bicarbonate":{"margin":40,"midpoint":80},"sulfate":{"margin":25,"midpoint":75},"chloride":{"margin":50,"midpoint":100},"sodium":{"margin":50,"midpoint":50}},{"style":"26C - Belgian Tripel","calcium":{"margin":25,"midpoint":75},"magnesium":{"margin":14,"midpoint":16},"bicarbonate":{"margin":20,"midpoint":20},"sulfate":{"margin":25,"midpoint":75},"chloride":{"margin":25,"midpoint":75},"sodium":{"margin":50,"midpoint":50}},{"style":"26D - Belgian Dark Strong Ale","calcium":{"margin":12.5,"midpoint":62.5},"magnesium":{"margin":14,"midpoint":16},"bicarbonate":{"margin":40,"midpoint":160},"sulfate":{"margin":50,"midpoint":100},"chloride":{"margin":50,"midpoint":100},"sodium":{"margin":50,"midpoint":50}},{"style":"27A - Roggenbier","calcium":{"margin":50,"midpoint":100},"magnesium":{"margin":14,"midpoint":16},"bicarbonate":{"margin":40,"midpoint":80},"sulfate":{"margin":100,"midpoint":200},"chloride":{"margin":25,"midpoint":75},"sodium":{"margin":50,"midpoint":50}}]')},79:function(i){i.exports=JSON.parse('[{"selector":"style","name":"Beer Style","sortable":true,"grow":4},{"selector":"calcium.midpoint","name":"Calcium","sortable":true},{"selector":"magnesium.midpoint","name":"Magnesium","sortable":true},{"selector":"sodium.midpoint","name":"Sodium","sortable":true},{"selector":"sulfate.midpoint","name":"Sulfate","sortable":true},{"selector":"chloride.midpoint","name":"Chloride","sortable":true},{"selector":"bicarbonate.midpoint","name":"Bicarbonate","sortable":true}]')},80:function(i){i.exports=JSON.parse('[{"selector":"mineral","name":"Mineral"},{"selector":"calcium","name":"Calcium (ppm)"},{"selector":"magnesium","name":"Magnesium (ppm)"},{"selector":"sodium","name":"Sodium (ppm)"},{"selector":"sulfate","name":"Sulfate (ppm)"},{"selector":"chloride","name":"Chloride (ppm)"},{"selector":"bicarbonate","name":"Bicarbonate (ppm)"}]')},99:function(i,n,a){}},[[110,1,2]]]);
//# sourceMappingURL=main.c576798e.chunk.js.map