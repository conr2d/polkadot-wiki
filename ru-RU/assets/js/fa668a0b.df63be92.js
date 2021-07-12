(self.webpackChunk=self.webpackChunk||[]).push([[7841],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(r),m=o,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||n;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<n;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},19748:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>d,toc:()=>u,default:()=>p});var a=r(22122),o=r(19756),n=(r(67294),r(3905)),i=["components"],l={id:"build-index",title:"Builder's Portal",sidebar_label:"Builder's Portal"},s=void 0,d={unversionedId:"build-index",id:"build-index",isDocsHomePage:!1,title:"Builder's Portal",description:"Welcome to the builder's section of the Polkadot Wiki.",source:"@site/../docs/build-index.md",sourceDirName:".",slug:"/build-index",permalink:"/ru-RU/docs/build-index",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build-index.md",version:"current",lastUpdatedBy:"michalisFr",lastUpdatedAt:1626117220,formattedLastUpdatedAt:"12.07.2021",frontMatter:{id:"build-index",title:"Builder's Portal",sidebar_label:"Builder's Portal"},sidebar:"docs",previous:{title:"Other comparisons",permalink:"/ru-RU/docs/learn-comparisons"},next:{title:"Polkadot Builders Starter's Guide",permalink:"/ru-RU/docs/build-build-with-polkadot"}},u=[{value:"Development Guide",id:"development-guide",children:[]},{value:"Integration Guide",id:"integration-guide",children:[]},{value:"Tools",id:"tools",children:[]},{value:"Resources",id:"resources",children:[{value:"Grants",id:"grants",children:[]},{value:"PSPs",id:"psps",children:[]},{value:"Hackathon",id:"hackathon",children:[]}]}],c={toc:u};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Welcome to the builder's section of the Polkadot Wiki."),(0,n.kt)("p",null,"Here, you will be able to find the most up-to-date information on the status of the development\ntools in the Polkadot ecosystem. We are always adding new tools and frameworks as we learn about\nthem so if you are working on something that should be included please reach out to us on\n",(0,n.kt)("a",{parentName:"p",href:"https://app.element.io/#/room/#polkadot-watercooler:matrix.org"},"Element"),"."),(0,n.kt)("p",null,"This section of the wiki is divided into the following parts:"),(0,n.kt)("h2",{id:"development-guide"},"Development Guide"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ru-RU/docs/build-build-with-polkadot"},"Starter's Guide")," - High level overview on choosing a parachain,\nparathread, or smart contract for your project and how to get started."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ru-RU/docs/build-pdk"},"Parachain Development Kits")," - PDKs are toolkits for building parachains and\nparathreads."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ru-RU/docs/build-smart-contracts"},"Smart Contracts")," - Smart contracts are fragments of custom logic that\ncan be deployed to a live chain."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ru-RU/docs/build-wallets"},"Polkadot Wallets")," - Learn about the supported wallets and how to manage\naccounts.")),(0,n.kt)("h2",{id:"integration-guide"},"Integration Guide"),(0,n.kt)("p",null,"This section is for service providers like wallets or node operators who want to learn how to\nintegrate Polkadot into their systems."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ru-RU/docs/build-integration"},"Integration Initiation")," - The guide to the guide."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ru-RU/docs/build-protocol-info"},"Polkadot Protocol Information")," - General information and F.A.Q.s about\nthe Polkadot protocol, e.g. address formats."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ru-RU/docs/build-node-management"},"Node Management")," - A short overview of the Parity Polkadot client and\nthe most relevant options/flags for infrastructure providers."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ru-RU/docs/build-node-interaction"},"Node Interaction")," - Learn how to interact with your node via RPC."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ru-RU/docs/build-transaction-construction"},"Transaction Construction and Signing")," - Learn the transaction\nformat for Polkadot and how to construct and sign transactions offline.")),(0,n.kt)("h2",{id:"tools"},"Tools"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ru-RU/docs/build-tools-index"},"Tools")," - Maintained list of tools."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://substrate.dev/docs/en/knowledgebase/integrate/subkey"},"Subkey")," - Command line utility for\ngenerating and inspecting key pairs."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/polkadot-js/tools"},"JS tools")," - TypeScript tools for offline signing of\ntransactions, RPC calls, and more.")),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#"},"Examples")," - Example projects sourced from the community -- see what others are building.")),(0,n.kt)("h3",{id:"grants"},"Grants"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ru-RU/docs/grants"},"Grants")," - A list of all Polkadot-related projects given grants by the Web3 Foundation.")),(0,n.kt)("h3",{id:"psps"},"PSPs"),(0,n.kt)("p",null,"Polkadot Standards Proposals (PSPs) are standards for the Polkadot ecosystem."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/w3f/PSPs"},"PSP GitHub Repository")," - Read, create, or discuss standards and\nproposals.")),(0,n.kt)("h3",{id:"hackathon"},"Hackathon"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/ru-RU/docs/build-hackathon"},"Resources For Running a Hackathon"))))}p.isMDXComponent=!0}}]);