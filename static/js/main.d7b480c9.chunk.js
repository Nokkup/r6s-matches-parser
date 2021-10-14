(this["webpackJsonpr6s-matches-parser"]=this["webpackJsonpr6s-matches-parser"]||[]).push([[0],{228:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(35),c=n.n(i),o=n(62),s=n(64),l=n(232),j=n(26),d=n(127),u=n(38),h=n.n(u);var b,m,g,f,O,p=function(e){for(var t=[],n=function(e){var t,n=new RegExp('data-highlightingclass="([^"]+)',"g"),a=e.matchAll(n),r=[],i={},c=Object(d.a)(a);try{for(c.s();!(t=c.n()).done;){var o=t.value;i.leftTeam?(i.rightTeam=o[1],r.push(i),i={}):i.leftTeam=o[1]}}catch(s){c.e(s)}finally{c.f()}return r}(e),a=function(e){var t=new RegExp("([A-Za-z]{3,}) ([0-9]{1,2}), ([0-9]{4}) - ([0-9:0-9]{4,5})","g");return Array.from(e.matchAll(t)).map((function(e){return h.a.utc(e[0],"MMMM DD YYYY HH:mm")}))}(e),r=function(e){var t=new RegExp('<a href="/rainbowsix/.*" title=".*">(.*)</a>&#160;',"g");return Array.from(e.matchAll(t)).map((function(e){return e[1]}))}(e),i=0;i<n.length;i++)t[i]=Object(j.a)(Object(j.a)({},n[i]),{},{date:a[i],dateStr:a[i].format("MMM DD YYYY HH:mm"),league:r[i]});return t.sort((function(e,t){return e.date.unix()-t.date.unix()})),t},x=n(23),y=n(230),v=n(231),w=n(233),S=n(235),T=n(137),M=Object(a.createContext)([]),I=n(7),C=function(){var e=Object(a.useContext)(M),t=JSON.stringify(e,null,4);return Object(I.jsx)(y.a,{justify:"center",align:"middle",children:Object(I.jsx)(v.a,{span:14,offset:1,children:Object(I.jsxs)(w.a,{layout:"vertical",fields:[{name:["textarea-json"],value:t}],children:[Object(I.jsx)(w.a.Item,{name:"textarea-json",label:"JSON",children:Object(I.jsx)(S.a.TextArea,{placeholder:"",autoSize:{minRows:10,maxRows:20},readOnly:!1})}),Object(I.jsx)(w.a.Item,{children:Object(I.jsx)(T.a,{htmlType:"button",onClick:function(){return navigator.clipboard.writeText(t)},children:"Copy"})})]})})})},k=n(86),A=n(234),F=n(69),U=n(70),Y=U.a.div(b||(b=Object(F.a)(["\n    display: flex;\n    width: 150px;\n    height: 80px;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    overflow: hidden;\n    background: rgb(195, 224, 229);\n\n    @media screen and (max-width: 768px) {\n        width: 350px;\n        height: 40px;\n    }\n"]))),z=U.a.div(m||(m=Object(F.a)(["\n    display: flex;\n    width: 150px;\n    height: 80px;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    background: rgb(195, 224, 229);\n\n    @media screen and (max-width: 768px) {\n        width: 350px;\n        height: 40px;\n    }\n"]))),H=U.a.div(g||(g=Object(F.a)(['\n    position: absolute;\n    width: 30px;\n    height: 200px;\n    transform: rotate(45deg);\n    border: 1px solid white;\n    background: rgb(55, 74, 103);\n\n    &:before {\n        position: absolute;\n        top: 45%;\n        left: 65%;\n        transform: rotate(-45deg) translate(-50%, -50%);\n        content: "VS";\n        font-size: 0.9rem;\n        color: white;\n    }\n\n    @media screen and (max-width: 768px) {\n        transform: rotate(90deg);\n        &:before {\n            top: 50%;\n            left: 50%;\n            transform: rotate(-90deg) translate(50%, -50%);\n        }\n    }\n']))),J=U.a.div(f||(f=Object(F.a)(["\n    display: flex;\n    width: 300px;\n    height: 100px;\n    padding: 5px;\n    align-items: ",";\n    text-align: ",";\n    justify-content: center;\n    font-size: 1.1rem;\n    color: rgb(255, 255, 255);\n    background: rgba(14, 17, 22, 0.9);\n\n    @media screen and (max-width: 768px) {\n        width: 100vw;\n        height: 70px;\n    }\n"])),(function(e){return"left"===e.side?"flex-start":"flex-end"}),(function(e){return"left"===e.side?"left":"right"})),L=U.a.div(O||(O=Object(F.a)(["\n    display: flex;\n    position: relative;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 1rem;\n    overflow: hidden;\n\n    @media screen and (max-width: 768px) {\n        flex-direction: column;\n    }\n"]))),R=function(e){var t=e.leftTeam,n=e.rightTeam,a=e.league,r=e.dateStr;return Object(I.jsxs)(L,{children:[Object(I.jsx)(z,{children:r}),Object(I.jsx)(J,{side:"left",children:t}),Object(I.jsx)(H,{}),Object(I.jsx)(J,{side:"right",children:n}),Object(I.jsx)(Y,{children:a})]})};var D=function(e){var t=e.filterOptions,n=e.leftTeam,a=e.rightTeam,r=e.league,i=e.date,c=!0;return t.byTeam.length&&(c=!(!t.byTeam.includes(n)&&!t.byTeam.includes(a))),t.byLeague.length&&(c=!!t.byLeague.includes(r)&&c),t.onlyOngoingMatches&&(c=!!i.isSameOrBefore(h()())&&c),t.onlyUpcomingMatches&&(c=!!i.isSameOrAfter(h()())&&c),c};var E=function(e){return Array.from(new Set(e))},N=n(237),q=n(114),B=n(79),G=n(236),_=function(e){var t=e.leagues,n=e.teams,a=e.setFilterOptions,r=e.filterOptions,i=w.a.useForm(),c=Object(s.a)(i,1)[0],o=t.sort().map((function(e){return Object(I.jsx)(B.a.Option,{children:e},e)})),l=n.sort().map((function(e){return Object(I.jsx)(B.a.Option,{children:e},e)}));return Object(I.jsxs)(w.a,{form:c,layout:"vertical",fields:[{name:["select-team"],value:r.byTeam},{name:["select-league"],value:r.byLeague},{name:["radio-match-date"],value:r.onlyOngoingMatches?"ongoing":r.onlyUpcomingMatches&&"upcoming"}],children:[Object(I.jsx)(w.a.Item,{name:"select-team",label:"Select team(s)",children:Object(I.jsx)(B.a,{mode:"multiple",allowClear:!0,style:{width:"100%"},placeholder:"Select teams",onChange:function(e){return function(e){a(Object(j.a)(Object(j.a)({},r),{},{byTeam:Object(q.a)(e)}))}(e)},children:l})}),Object(I.jsx)(w.a.Item,{name:"select-league",label:"Select league",children:Object(I.jsx)(B.a,{mode:"multiple",allowClear:!0,style:{width:"100%"},placeholder:"Select league",onChange:function(e){return function(e){a(Object(j.a)(Object(j.a)({},r),{},{byLeague:Object(q.a)(e)}))}(e)},children:o})}),Object(I.jsx)(w.a.Item,{name:"radio-match-date",label:"Match Date",children:Object(I.jsxs)(G.a.Group,{buttonStyle:"solid",onChange:function(e){return function(e){var t="ongoing"===e.target.value,n="upcoming"===e.target.value;a(Object(j.a)(Object(j.a)({},r),{},{onlyOngoingMatches:t,onlyUpcomingMatches:n}))}(e)},children:[Object(I.jsx)(G.a,{value:"ongoing",children:"Ongoing matches"}),Object(I.jsx)(G.a,{value:"upcoming",children:"Upcoming matches"})]})}),Object(I.jsx)(w.a.Item,{children:Object(I.jsx)(T.a,{htmlType:"button",onClick:function(){c.resetFields(),a({byTeam:[],byLeague:[],onlyOngoingMatches:!1,onlyUpcomingMatches:!1})},children:"Reset"})})]})},P=function(e){var t=e.breakpoint,n=e.leagues,a=e.teams,r=e.setFilterOptions,i=e.filterOptions;return t?Object(I.jsx)(_,{leagues:n,teams:a,setFilterOptions:r,filterOptions:i}):Object(I.jsx)(N.a,{children:Object(I.jsx)(N.a.Panel,{header:"Filter",children:Object(I.jsx)(_,{leagues:n,teams:a,setFilterOptions:r,filterOptions:i})})})},V=function(){var e=Object(a.useContext)(M),t=k.a.useBreakpoint().md,n=Object(a.useState)({byTeam:[],byLeague:[],onlyOngoingMatches:!1,onlyUpcomingMatches:!1}),r=Object(s.a)(n,2),i=r[0],c=r[1],o=E(e.map((function(e){return[e.leftTeam,e.rightTeam]})).flat()),l=E(e.map((function(e){return e.league})));return Object(I.jsxs)(y.a,{justify:"center",align:"middle",children:[Object(I.jsx)(v.a,{span:t?6:20,offset:t?1:0,children:Object(I.jsx)(P,{breakpoint:t,leagues:l,teams:o,setFilterOptions:c,filterOptions:i})}),Object(I.jsx)(v.a,{span:t?12:16,offset:t?2:0,children:Object(I.jsx)(A.b,{header:Object(I.jsx)("h2",{children:"Upcoming and ongoing matches"}),pagination:{pageSize:4,showSizeChanger:!1,responsive:!0},dataSource:e.filter((function(e){return D(Object(j.a)({filterOptions:i},e))})),renderItem:function(e){return Object(I.jsx)(A.b.Item,{children:Object(I.jsx)(R,Object(j.a)({},e))})}})})]})},Z=function(){return Object(I.jsxs)(x.d,{children:[Object(I.jsx)(x.b,{path:"/",exact:!0,component:V}),Object(I.jsx)(x.b,{path:"/json",component:C}),Object(I.jsx)(x.a,{to:"/"})]})},K="timestamp",Q="parsedData";var W=new Request("https://liquipedia.net/rainbowsix/api.php?action=parse&origin=*&format=json&page=Liquipedia:Upcoming_and_ongoing_matches",{method:"GET"}),X=n(238),$=function(){return Object(I.jsx)(l.a.Header,{children:Object(I.jsx)(y.a,{justify:"start",children:Object(I.jsxs)(X.a,{theme:"dark",mode:"horizontal",disabledOverflow:!0,children:[Object(I.jsx)(X.a.Item,{children:Object(I.jsx)(o.b,{to:"/",children:"Matches"})},1),Object(I.jsx)(X.a.Item,{children:Object(I.jsx)(o.b,{to:"/json",children:"Get Json"})},2)]})})})};var ee=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=function(){var e=localStorage.getItem(K);if(e){var t=h()(e),n=h()();if(h.a.duration(n.diff(t)).asHours()<1){var a=localStorage.getItem(Q);if(a)return JSON.parse(a).map((function(e){return Object(j.a)(Object(j.a)({},e),{},{date:h.a.utc(e.date)})}))}}return null}();e?r(e):fetch(W).then((function(e){return e.json()})).then((function(e){return e.parse.text["*"]})).then((function(e){var t,n=p(e);r(n),t=n,localStorage.setItem(Q,JSON.stringify(t)),localStorage.setItem(K,h()().format())}))}),[]),Object(I.jsxs)(l.a,{children:[Object(I.jsx)($,{}),Object(I.jsx)(l.a.Content,{style:{minHeight:"80vh"},children:Object(I.jsx)(M.Provider,{value:n,children:Object(I.jsx)(Z,{})})}),Object(I.jsx)(l.a.Footer,{})]})};n(227);c.a.render(Object(I.jsx)(r.a.StrictMode,{children:Object(I.jsx)(o.a,{basename:"/r6s-matches-parser",children:Object(I.jsx)(ee,{})})}),document.getElementById("root"))}},[[228,1,2]]]);
//# sourceMappingURL=main.d7b480c9.chunk.js.map