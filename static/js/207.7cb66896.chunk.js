"use strict";(self.webpackChunkverify=self.webpackChunkverify||[]).push([[207],{8207:function(e,t,s){s.r(t);var r=s(885),a=s(2791),i=s(8237),n=s(7618),h=s(184);t.default=function(){var e=(0,a.useState)(""),t=(0,r.Z)(e,2),s=t[0],o=t[1],l=(0,a.useState)(""),d=(0,r.Z)(l,2),u=d[0],c=d[1],v=(0,a.useState)(""),y=(0,r.Z)(v,2),S=y[0],g=y[1],m=(0,a.useState)(""),p=(0,r.Z)(m,2),b=p[0],f=p[1],x=(0,a.useState)({initial:[52,52,52,52,52],coming:[52,52,52,52,52]}),j=(0,r.Z)(x,2),w=j[0],T=j[1];return(0,h.jsx)("div",{className:"mainWrapper",children:(0,h.jsxs)(i.PI,{children:[(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:'Client Seed: This is a random hexadecimal string generated by your computer. The server does know about this client seed prior to the bet execution. Ideally, it should be freshly generated for each bet. However, some players have their "lucky" client seed which they prefer to keep.'}),(0,h.jsx)("li",{children:"Server Seed: This is a random hexadecimal string generated by the server. It is not shared with the player (until they rotate the seed)."}),(0,h.jsx)("li",{children:"Server Seed Hash: Since the server seed is not shared with the user, the server provides you with a hash of the server seed. This means that you can check (after the seed is rotated) whether the server was using the correct, shown server seed or not. The server seed hash is always unique and corresponds to a server seed being used to play games previously."})]}),(0,h.jsx)(i.e8,{}),(0,h.jsxs)("div",{className:"pageContent",children:[(0,h.jsxs)("div",{className:"inputsRow",children:[(0,h.jsx)(i.II,{title:"Client Seed",subTitle:"Client Seed comes from your browser and is never generated by the server.",value:s,onChange:function(e){var t=e.target;return o(t.value)}}),(0,h.jsx)(i.II,{title:"Nonce",subTitle:"Nonce starts from 1 and is a count for the games you play (associated to the particular server seed).",value:S,onChange:function(e){var t=e.target;return g(t.value)}})]}),(0,h.jsxs)("div",{className:"inputsRow",children:[(0,h.jsx)(i.II,{title:"Server Seed",subTitle:"Server Seed is generated by the server. It is only shared with you after you rotate the seed.",value:u,onChange:function(e){var t=e.target;return c(t.value)}}),(0,h.jsx)(i.II,{title:"Server Seed (SHA-256)",subTitle:"This is the SHA-256 hash of the Server Seed shown prior to rotation of the seed.",value:b,disabled:!0})]}),(0,h.jsxs)("div",{className:"inputsRow",children:[(0,h.jsx)(i.lS,{title:"Initial Cards",subTitle:"This are the initial cards given to the user.",cards:w.initial}),(0,h.jsx)(i.lS,{title:"Coming Cards",subTitle:"This are the coming cards.",cards:w.coming})]}),(0,h.jsx)("button",{type:"button",className:"btn btn-info marginTop",onClick:function(){var e=(0,n.Rq)(s,u,S),t=e.cards,r=e.seed;f(r),T(t)},children:"Calculate"})]})]})})}}}]);
//# sourceMappingURL=207.7cb66896.chunk.js.map