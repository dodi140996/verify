"use strict";(self.webpackChunkverify=self.webpackChunkverify||[]).push([[339],{5083:function(e,t,r){r.r(t),r.d(t,{default:function(){return c}});var s=r(885),n=r(2791),a=r(8237),i=r(7618),o=r.p+"static/media/crystal.f98ebc9a7a52b2ff2547.png",l=r.p+"static/media/mine.2e7b0c2d68d2e07dbcbf.png",u=r(4075),d=r(184),h=(0,u.r)(24,(function(e){return e+1})),c=function(){var e=(0,n.useState)(""),t=(0,s.Z)(e,2),r=t[0],c=t[1],v=(0,n.useState)(""),m=(0,s.Z)(v,2),f=m[0],p=m[1],b=(0,n.useState)(""),y=(0,s.Z)(b,2),g=y[0],x=y[1],S=(0,n.useState)(1),j=(0,s.Z)(S,2),w=j[0],N=j[1],I=(0,n.useState)(""),T=(0,s.Z)(I,2),C=T[0],k=T[1],Z=(0,n.useState)((0,u.r)(25,(function(){return!1}))),H=(0,s.Z)(Z,2),A=H[0],R=H[1];return(0,d.jsx)("div",{className:"mainWrapper",children:(0,d.jsxs)(a.PI,{children:[(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:'Client Seed: This is a random hexadecimal string generated by your computer. The server does know about this client seed prior to the bet execution. Ideally, it should be freshly generated for each bet. However, some players have their "lucky" client seed which they prefer to keep.'}),(0,d.jsx)("li",{children:"Server Seed: This is a random hexadecimal string generated by the server. It is not shared with the player (until they rotate the seed)."}),(0,d.jsx)("li",{children:"Server Seed Hash: Since the server seed is not shared with the user, the server provides you with a hash of the server seed. This means that you can check (after the seed is rotated) whether the server was using the correct, shown server seed or not. The server seed hash is always unique and corresponds to a server seed being used to play games previously."})]}),(0,d.jsx)(a.e8,{}),(0,d.jsxs)("div",{className:"pageContent",children:[(0,d.jsxs)("div",{className:"inputsRow",children:[(0,d.jsx)(a.II,{title:"Client Seed",subTitle:"Client Seed comes from your browser and is never generated by the server.",value:r,onChange:function(e){var t=e.target;return c(t.value)}}),(0,d.jsx)(a.gN,{title:"Mines",subTitle:"How many mines did you choose to have?",children:(0,d.jsx)("select",{className:"form-select",value:w,onChange:function(e){var t=e.target;return N(Number(t.value))},children:h.map((function(e){return(0,d.jsx)("option",{value:e,children:e})}))})})]}),(0,d.jsxs)("div",{className:"inputsRow",children:[(0,d.jsx)(a.II,{title:"Server Seed",subTitle:"Server Seed is generated by the server. It is only shared with you after you rotate the seed.",value:f,onChange:function(e){var t=e.target;return p(t.value)}}),(0,d.jsx)(a.II,{title:"Nonce",subTitle:"Nonce starts from 1 and is a count for the games you play (associated to the particular server seed).",value:g,onChange:function(e){var t=e.target;return x(t.value)}})]}),(0,d.jsxs)("div",{className:"inputsRow",children:[(0,d.jsx)(a.II,{disabled:!0,title:"Server Seed (SHA-256)",subTitle:"This is the SHA-256 hash of the Server Seed shown prior to rotation of the seed.",value:C}),(0,d.jsx)(a.gN,{title:"Actual Outcome",subTitle:"Green stands for GEM, Red stands for MINE.",children:(0,d.jsx)("div",{className:"minesField",children:A.map((function(e){return(0,d.jsx)("img",{src:e?l:o,alt:e?"mine":"diamond",className:e?"mineBomb":"mineDiamond"})}))})})]}),(0,d.jsx)("button",{type:"button",className:"btn btn-info marginTop",onClick:function(){var e=(0,i.jA)(r,f,g,w),t=e.seed,s=e.cells;R(s),k(t)},children:"Calculate"})]})]})})}},4075:function(e,t,r){r.d(t,{r:function(){return s}});var s=function(e,t){for(var r=[],s=0;s<e;s++)r.push(t(s,e));return r}}}]);
//# sourceMappingURL=339.13d05f93.chunk.js.map