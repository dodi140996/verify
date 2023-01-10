"use strict";(self.webpackChunkverify=self.webpackChunkverify||[]).push([[660],{660:function(e,s,t){t.r(s);var i=t(885),n=t(2791),a=t(8237),r=t(7618),h=t(7205),l=t(184);s.default=function(){var e=(0,n.useState)(""),s=(0,i.Z)(e,2),t=s[0],o=s[1],c=(0,n.useState)("10"),d=(0,i.Z)(c,2),u=d[0],m=d[1],v=(0,n.useState)([]),f=(0,i.Z)(v,2),g=f[0],x=f[1];return(0,l.jsx)("div",{className:"mainWrapper",children:(0,l.jsxs)(a.PI,{children:[(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"Client Seed (Bitcoin Block): This is a randomly chosen future block number's block hash during seeding event."}),(0,l.jsx)("li",{children:"Server Seed: This is the server seed of the chain generated in the start for 10,000,000 rounds. The last seed (i.e., first round)'s seed is always public so that you can check that we did not change the server seed in the middle of the games."})]}),(0,l.jsx)("p",{children:"This page allows you to determine the fairness of the mechanism used in our Crash game."}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"We start by generating 10 M hashes, starting with a server seed which is continuously hashed with SHA-256 till we have 10M hashes."}),(0,l.jsxs)("li",{children:["The last hash of the series is",(0,l.jsxs)("code",{children:[" ",h.w6.crash.seriesHash]}),". This is so that you know that we have not changed the chain of our hashes in our favour. By making it public, we prevent ourselves from changing any hashes in the chain."]}),(0,l.jsx)("li",{children:"We will play all the hashes in reverse order. Starting from 10M (th) hash to 1st."}),(0,l.jsx)("li",{children:"In order to make sure that we don't choose a server seed in our favour, we use a client seed which comes from a Bitcoin block (711779) from the future. The block number is chosen before it is mined, so we don't have any way to predict its hash. Every 4-5 years (roughly), our hashes will exhaust and we will have another seeding event to generate the new list of hashes and select a new Bitcoin block in the future."})]}),(0,l.jsxs)("p",{children:["The Bitcoin Block is chosen and referenced at a third-party forum such as Bitcoin Talk. The link to our seeding event is as follows:"," ",(0,l.jsx)("a",{href:"https://bitcointalk.org/index.php?topic=5255740.msg61543293#msg61543293",children:"https://bitcointalk.org/index.php?topic=5255740.msg61543293#msg61543293"})]}),(0,l.jsx)(a.e8,{}),(0,l.jsxs)("div",{className:"pageContent",children:[(0,l.jsx)("div",{className:"inputsRow",children:(0,l.jsx)(a.II,{title:"Client Seed (Bitcoin Block)",subTitle:"This Client Seed comes from a Bitcoin Block",value:h.w6.crash.clientSeed,disabled:!0})}),(0,l.jsxs)("div",{className:"inputsRow",children:[(0,l.jsx)(a.II,{title:"Server Seed",subTitle:"Server Seed is generated by the server. It is only shared with you after you rotate the seed.",value:t,onChange:function(e){var s=e.target;return o(s.value)}}),(0,l.jsx)(a.II,{title:"Number of Games",subTitle:"Number of rounds you want in reference to this (round associated with the server seed) game.",value:u,onChange:function(e){var s=e.target;return m(s.value)}})]}),(0,l.jsx)("button",{type:"button",className:"btn btn-info marginTop",onClick:function(){var e=(0,r.l_)(h.w6.crash.clientSeed,t,u);x(e)},children:"Calculate"}),(0,l.jsx)("div",{className:"tableWrapper",children:g.length?(0,l.jsxs)("table",{className:"table table-hover marginTop",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{scope:"col",children:"Game hash"}),(0,l.jsx)("th",{scope:"col",children:"Crash point"})]})}),(0,l.jsx)("tbody",{children:g.map((function(e){var s=e.crashPoint,t=e.gameHash;return(0,l.jsxs)("tr",{className:"table-active",children:[(0,l.jsx)("td",{children:t}),(0,l.jsx)("td",{children:s+"x"})]},t)}))})]}):null})]})]})})}}}]);
//# sourceMappingURL=660.3d877595.chunk.js.map