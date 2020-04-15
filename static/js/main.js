(this.webpackJsonpenrichment=this.webpackJsonpenrichment||[]).push([[0],{151:function(e,a,t){e.exports=t(291)},156:function(e,a,t){},291:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),i=t.n(r),o=(t(156),t(136)),s=t(27),c=t(14),d=t(12),m=t(38),u=t(39),v=t(60),h=t.n(v),f=t(293),g=(t(90),t(324)),p=t(328),E=t(327),b=t(141),y=t(329);var w=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props,a=e.activityName,t=e.activityPlace,n=e.classes,r=e.description,i=e.gradeRange,o=e.screen,s=e.parentInvolvement,c=e.preparation,d=e.learnMoreLink;return l.a.createElement(g.a,{className:n.root,variant:"outlined"},l.a.createElement(E.a,null,l.a.createElement(b.a,{variant:"h5",component:"h2"},a),l.a.createElement(b.a,{className:n.pos,color:"textSecondary",gutterBottom:!0},r),l.a.createElement(b.a,{variant:"body1",component:"p"},l.a.createElement("strong",null,"Ages:")," ",i),l.a.createElement(b.a,{variant:"body1",component:"p"},l.a.createElement("strong",null,"Place:")," ",t),l.a.createElement(b.a,{variant:"body1",component:"p"},l.a.createElement("strong",null,"Screen:")," ",o),l.a.createElement(b.a,{variant:"body1",component:"p"},l.a.createElement("strong",null,"Parent Involvement:")," ",s),l.a.createElement(b.a,{variant:"body1",component:"p"},l.a.createElement("strong",null,"Preparation / Supplies:")," ",c)),l.a.createElement(p.a,null,function(e){try{return new URL(e.learnMoreLink),!0}catch(a){return!1}}({learnMoreLink:d})&&l.a.createElement(b.a,{className:n.root+" learnMoreLink"},l.a.createElement(y.a,{href:d,target:"_blank"},"Learn More"))))}}]),t}(n.PureComponent),R=Object(f.a)((function(e){return{root:{minWidth:275,margin:"15px 0"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},variable:{width:80,backgroundColor:"#e5edff",textAlign:"center",display:"inline-block"}}}))(w),C=t(15),N=t(333),k=t(342),A=t(340),I=t(330),O=t(338),F=t(331),P=t(334),S=t(139),L=t.n(S),j=t(335),D=function(e){return l.a.createElement(I.a,{required:e.required},l.a.createElement(k.a,{id:e.labelId},e.label),l.a.createElement(O.a,{multiple:!0,name:e.name,labelId:e.labelId,value:e.value,id:e.id,onChange:e.handleChange},e.options.map((function(a,t){return l.a.createElement(A.a,{key:t,value:a,checked:e.options&&e.options.indexOf(t)>-1},a)}))))},x=Object(N.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));function M(e){var a=x(),t=l.a.useState([]),n=Object(C.a)(t,2),r=n[0],i=n[1],o=l.a.useState(""),s=Object(C.a)(o,2),c=s[0],d=s[1],m=l.a.useState(""),u=Object(C.a)(m,2),v=u[0],h=u[1],f=l.a.useState(""),g=Object(C.a)(f,2),p=g[0],E=g[1],b=l.a.useState(""),y=Object(C.a)(b,2),w=y[0],R=y[1],N=function(a){if("age"==a.target.name){var t=a.target.value;i(a.target.value),e.sendFilters({age:t,place:c,involvement:v,screens:p,search:w})}else if("place"===a.target.name){var n=a.target.value;d(a.target.value),e.sendFilters({age:r,place:n,involvement:v,screens:p,search:w})}else if("involvement"===a.target.name){var l=a.target.value;h(a.target.value),e.sendFilters({age:r,place:c,involvement:l,screens:p,search:w})}else if("screens"===a.target.name){var o=a.target.value;E(a.target.value),e.sendFilters({age:r,place:c,involvement:v,screens:o,search:w})}else if("search"===a.target.name){var s=a.target.value;R(a.target.value),e.sendFilters({age:r,place:c,involvement:v,screens:p,search:s})}};return l.a.createElement("div",{className:"filter-form",id:"filter-form"},l.a.createElement(I.a,{className:a.formControl},l.a.createElement(D,{id:"input-age",labelId:"input-age-label",name:"age",label:"Age",handleChange:N,value:r,options:["All Ages","Infant (0-12 months)","Toddler (12-36 months)","Preschool (ages 3-5)","Kindergarten","Grades 1-3","Grades 4-6","Middle School","High School"]})),l.a.createElement(I.a,{className:a.formControl},l.a.createElement(k.a,{id:"demo-simple-select-label"},"Place"),l.a.createElement(O.a,{name:"place",labelId:"demo-simple-select-label",id:"demo-simple-select",onChange:N,value:c},l.a.createElement(A.a,{value:""},"No preference"),l.a.createElement(A.a,{value:"Indoor"},"Indoor"),l.a.createElement(A.a,{value:"Outdoor"},"Outdoor"),l.a.createElement(A.a,{value:"Both Indoor and Outdoor"},"Both Indoor and Outdoor"))),l.a.createElement(I.a,{className:a.formControl},l.a.createElement(k.a,{id:"demo-simple-select-label"},"Screens"),l.a.createElement(O.a,{name:"screens",labelId:"demo-simple-select-label",id:"demo-simple-select",onChange:N,value:p},l.a.createElement(A.a,{value:""},"No preference"),l.a.createElement(A.a,{value:"Yes"},"Yes"),l.a.createElement(A.a,{value:"No"},"No"))),l.a.createElement(I.a,{className:a.formControl},l.a.createElement(k.a,{id:"demo-simple-select-label"},"Involvement"),l.a.createElement(O.a,{name:"involvement",labelId:"demo-simple-select-label",id:"demo-simple-select",onChange:N,value:v},l.a.createElement(A.a,{value:""},"No preference"),l.a.createElement(A.a,{value:"None"},"None"),l.a.createElement(A.a,{value:"Low"},"Low"),l.a.createElement(A.a,{value:"Medium"},"Medium"),l.a.createElement(A.a,{value:"High"},"High"))),l.a.createElement(I.a,{className:"filter-form__search-field"},l.a.createElement(k.a,{htmlFor:"input-with-icon-adornment"},"Search"),l.a.createElement(F.a,{name:"search",id:"input-with-icon-adornment",onChange:N,value:w,startAdornment:l.a.createElement(P.a,{position:"start"},l.a.createElement(L.a,null))})),l.a.createElement(j.a,{onClick:function(){i([]),d(""),h(""),E(""),R("");e.sendFilters({age:[],place:"",involvement:"",screens:"",search:""})},className:a.formControl,variant:"outlined",disableElevation:!0},"Reset"))}var q=t(17),B=t(92),T=t.n(B),z=t(341),K=function(e){return l.a.createElement(I.a,null,l.a.createElement(z.a,{label:e.label,name:e.name,id:e.id,onChange:e.handleChange,required:e.required,value:e.value}))},W=function(e){return l.a.createElement(I.a,null,l.a.createElement(z.a,{id:e.id,label:e.label,name:e.name,multiline:!0,onChange:e.handleChange,placeholder:e.placeholder,required:e.required,rows:"3",rowsMax:"4",value:e.value}))},Y=function(e){return l.a.createElement(I.a,{required:e.required},l.a.createElement(k.a,{id:e.labelId},e.label),l.a.createElement(O.a,{name:e.name,labelId:e.labelId,value:e.value,id:e.id,onChange:e.handleChange},e.options.map((function(e,a){return l.a.createElement(A.a,{key:a,value:e},e)}))))},J="ycdI",X="L1TzQ",G="zCjXo0",H="ke"+J+G+X;H=new TextEncoder("utf-8").encode(H);var _=new h.a({apiKey:(new TextDecoder).decode(H)}).base("appKMxY2JwOAAwbXN");H=null,J=null,G=null,X=null;n.PureComponent;var Q=t(339),U=t(336),V=t(140),$=t(337),Z=Object(V.a)({palette:{primary:{main:"#ED5F5F"}}}),ee="ycdI",ae="L1TzQ",te="zCjXo0",ne="ke"+ee+te+ae;ne=new TextEncoder("utf-8").encode(ne);var le=new h.a({apiKey:(new TextDecoder).decode(ne)}).base("appKMxY2JwOAAwbXN");ne=null,ee=null,te=null,ae=null;var re=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handlePageChange=function(e,a){document.getElementsByClassName("pagination-element")[0].scrollIntoView(),n.setState({page:a}),10*a>=n.state.filteredRecords.length?n.setState({viewableResults:n.state.filteredRecords.slice(10*(a-1))}):n.setState({viewableResults:n.state.filteredRecords.slice(10*(a-1),10*a)})},n.state={showAddForm:!1,records:[],filteredRecords:[],filters:[],page:1,viewableResults:[]},n.filterResults=n.filterResults.bind(Object(d.a)(n)),n.toggleAddFormFromChild=n.toggleAddFormFromChild.bind(Object(d.a)(n)),n}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=0;le("Enrichment Activities").select({view:"Grid view",sort:[{field:"Activity Name",direction:"asc"}],filterByFormula:'FIND("Yes",{Reviewed})'}).eachPage((function(t,n){var l=e.state.records;e.setState({records:l.concat(t)}),0===a&&(a++,e.setState({viewableResults:t.slice(0,10)})),e.setState({filteredRecords:l.concat(t)}),n()}))}},{key:"filterResults",value:function(e){var a=function(e,a){return e.toLowerCase().includes(a.toLowerCase())},t=this.state.records.filter((function(t){t.fields["Activity Name"]||(t.fields["Activity Name"]=""),t.fields["Recommended Ages"]||(t.fields["Recommended Ages"]=""),t.fields.Location||(t.fields.Location=""),t.fields["Parent Involvement"]||(t.fields["Parent Involvement"]=""),t.fields.Description||(t.fields.Description=""),t.fields["Device Required"]||(t.fields["Device Required"]="");var n=!1;(""==e.place||a(t.fields.Location,e.place)&&(a(t.fields.Location,"and")&&a(e.place,"and")||!a(t.fields.Location,"and")&&a(t.fields.Location,e.place)))&&(n=!0);var l=!0;if(0!=e.age.length){var r,i=Object(o.a)(e.age);try{for(i.s();!(r=i.n()).done;){var s=r.value;if(!a(t.fields["Recommended Ages"],s)){l=!1;break}}}catch(c){i.e(c)}finally{i.f()}}return a(t.fields["Device Required"],e.screens)&&n&&l&&a(t.fields["Parent Involvement"],e.involvement)&&(a(t.fields.Description,e.search)||a(t.fields["Activity Name"],e.search))}));this.setState({viewableResults:t.slice(0,10),filteredRecords:t,page:1})}},{key:"toggleAddForm",value:function(){var e=this.state.showAddForm;this.setState({showAddForm:!e})}},{key:"toggleAddFormFromChild",value:function(e){this.setState({showAddForm:e})}},{key:"renderNoResults",value:function(){return 0==this.state.records.length?l.a.createElement("div",{id:"loadingDiv"},l.a.createElement("h3",{id:"loadingText"},"We're getting the information for you. It should only take a few moments..."),l.a.createElement(U.a,{size:100})):l.a.createElement("div",null,l.a.createElement("h3",null,"Oops, none of our activities match your filter criteria. Please change your filter(s) and try again."),l.a.createElement("p",null,"Please change your filter(s) and try again."))}},{key:"renderPagination",value:function(){return l.a.createElement(Q.a,{className:"pagination-element",count:Math.ceil(this.state.filteredRecords.length/10),page:this.state.page,size:"small",onChange:this.handlePageChange,showFirstButton:!0,showLastButton:!0,color:"primary"})}},{key:"render",value:function(){this.state.showAddForm;return l.a.createElement($.a,{theme:Z},l.a.createElement("div",{className:"enrichment-app"},l.a.createElement("div",{className:"resultsDiv"},l.a.createElement(M,{sendFilters:this.filterResults}),this.state.filteredRecords.length>9&&this.renderPagination(),this.state.viewableResults.length>0?this.state.viewableResults.map((function(e,a){return l.a.createElement("div",{key:a},l.a.createElement(R,{activityName:e.fields["Activity Name"],activityPlace:e.fields.Location,description:e.fields.Description,gradeRange:e.fields["Recommended Ages"],parentInvolvement:e.fields["Parent Involvement"],screen:e.fields["Device Required"],preparation:e.fields["Preparation/Supplies"],learnMoreLink:e.fields.Link}))})):this.renderNoResults(),this.state.filteredRecords.length>9&&this.renderPagination())))}}]),t}(n.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(re,null),document.getElementById("divRoot")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},90:function(e,a,t){}},[[151,1,2]]]);
//# sourceMappingURL=main.6f33a3e2.chunk.js.map