(self.webpackChunk=self.webpackChunk||[]).push([[5697],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),l=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,g=p["".concat(i,".").concat(h)]||p[h]||d[h]||r;return n?o.createElement(g,s(s({ref:t},u),{},{components:n})):o.createElement(g,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<r;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},51253:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>i,metadata:()=>l,toc:()=>u,default:()=>p});var o=n(22122),a=n(19756),r=(n(67294),n(3905)),s=["components"],c={id:"learn-account-restore",title:"Backing up and Restoring Accounts",sidebar_label:"Backing up and Restoring Accounts",description:"Step-by-step guides on backing up and restoring a Polkadot account."},i=void 0,l={unversionedId:"learn-account-restore",id:"learn-account-restore",isDocsHomePage:!1,title:"Backing up and Restoring Accounts",description:"Step-by-step guides on backing up and restoring a Polkadot account.",source:"@site/../docs/learn-account-restore.md",sourceDirName:".",slug:"/learn-account-restore",permalink:"/zh-CN/docs/learn-account-restore",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-account-restore.md",version:"current",lastUpdatedBy:"michalisFr",lastUpdatedAt:1626117220,formattedLastUpdatedAt:"2021/7/12",frontMatter:{id:"learn-account-restore",title:"Backing up and Restoring Accounts",sidebar_label:"Backing up and Restoring Accounts",description:"Step-by-step guides on backing up and restoring a Polkadot account."},sidebar:"docs",previous:{title:"Account Generation",permalink:"/zh-CN/docs/learn-account-generation"},next:{title:"DOT",permalink:"/zh-CN/docs/learn-DOT"}},u=[{value:"Polkadot{.js} Browser Plugin",id:"polkadotjs-browser-plugin",children:[]},{value:"Polkadot-JS",id:"polkadot-js",children:[{value:"Using an Existing Mnemonic Seed to Restore an Account",id:"using-an-existing-mnemonic-seed-to-restore-an-account",children:[]}]},{value:"Parity Signer",id:"parity-signer",children:[]}],d={toc:u};function p(e){var t=e.components,c=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Depending on what software you are using to access your account, there are various ways to back up\nand restore your account. It is a good idea to back your information up and keep it in a secure\nplace.. Note that in order to recover an account, you should create your account according to the\ninstructions ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-account-generation"},"here"),". In general, however, as long as you know how you\ncreated your account, and have the seed phrase (mnemonic phrase) or JSON file (and password) stored\nsecurely, you will be able to restore your account."),(0,r.kt)("p",null,"This page covers backing up and restoring accounts in Polkadot{.js} Browser Plugin, Polkadot-JS UI,\nand Parity Signer. For other wallet applications, please see their specific documentation."),(0,r.kt)("h2",{id:"polkadotjs-browser-plugin"},"Polkadot{.js} Browser Plugin"),(0,r.kt)("p",null,"To back up an account using the Polkadot{.js} browser plugin, open the extension and selecting the\ndesired account to back up. Click on the three dots beside the address to open up the account\noptions menu."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"list-accounts-plugin",src:n(90985).Z})),(0,r.kt)("p",null,"Click on the Export Account button, which will then ask you for the password for that specific\naccount. Once you enter the correct password, the browser will automatically download a ",(0,r.kt)("inlineCode",{parentName:"p"},".json")," file\nthat will hold all the account restoration details that will be used when you restore your account.\nYou should store this file securely. Note that you will need the password for this account to\nrestore it."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"enter-password-plugin",src:n(26740).Z})),(0,r.kt)("p",null,'To restore the account from this JSON file, once again open the Polkadot{.js} browser plugin. Click\non the + button at the top. This will open up a menu wih several choices - select "Restore account\nfrom backup JSON file". The program then prompt you for the ',(0,r.kt)("inlineCode",{parentName:"p"},".json")," file which was download earlier\nand the password for that account."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"restore-account-plugin",src:n(4535).Z})),(0,r.kt)("p",null,'Once these are filled out, and the "Restore" button has been pressed, you\'ll be taken back to the\nmain page of the plugin. This account will now be listed with the rest of your accounts.'),(0,r.kt)("h2",{id:"polkadot-js"},"Polkadot-JS"),(0,r.kt)("p",null,"If you're using the main Polkadot-JS UI, restoring an account will feel similar to restoring an\naccount on Polkadot-JS browser plugin. Navigate to the\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts"},"Accounts page")," of Polkadot-JS."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"click-account-restore-polkadot",src:n(38545).Z})),(0,r.kt)("p",null,'Click on the "Restore JSON" button, which will let you upload your ',(0,r.kt)("inlineCode",{parentName:"p"},".json")," file that you downloaded\nand enter your password for that account. This ",(0,r.kt)("inlineCode",{parentName:"p"},".json")," file holds all relevant data about the\naccount to be used in account restoration. Note that you will need to enter your password here; the\nfile cannot be unencrypted without it."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"restore-account-polkadot",src:n(15771).Z})),(0,r.kt)("p",null,'After you press the "Restore" button, you should see a green notification letting you know that your\naccount has been restored. It will now be included in your accounts list on this browser.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"restore-complete-polkadot",src:n(56616).Z})),(0,r.kt)("h3",{id:"using-an-existing-mnemonic-seed-to-restore-an-account"},"Using an Existing Mnemonic Seed to Restore an Account"),(0,r.kt)("p",null,"You can also always restore an account by using the mnemonic phrase (seed words)."),(0,r.kt)("p",null,"To do this with Polkadot-JS, navigate to the\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts"},"Polkadot-JS Accounts Page"),'. Click on the "Add Account"\nbutton, and enter a name and password for the account. The name and the password of this added\naccount can be set to whatever you\'d like, it does not need to be the same name and password as when\nthis account was initilly created.'),(0,r.kt)("p",null,"After this, delete the generated mnemonic phrase (seed words) and replace them with your ",(0,r.kt)("em",{parentName:"p"},"existing\nseed words"),". When you replace the generated mnemonic seed with your existing one, you aren't\nactually creating a new account, rather adding that account onto the Polkadot-JS UI. Any account\nusing the same seed words will have control over that account on-chain. This is why it is so\nimportant to keep your seed words secret and safe."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"restore-using-json",src:n(85436).Z})),(0,r.kt)("p",null,'Finally, click the "Save" button, then click the "Create and backup account" button. This will\ndownload the ',(0,r.kt)("inlineCode",{parentName:"p"},".json")," file which contains the data to be used in account restoration. You can use\nthis JSON file to restore this account in the future using the instructions above, or simply delete\nthe file and continue to use the mnemnonic phrase to restore the account again if necessary."),(0,r.kt)("h2",{id:"parity-signer"},"Parity Signer"),(0,r.kt)("p",null,"If you've created an account with Parity Signer, you can recover that account with your seed words.\nIf you generated the account with another wallet, there may be additional steps necessary, including\nsetting the derivation path: see\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/parity-signer/blob/master/docs/tutorials/Recover-Account-Polkadotjs.md"},"this document"),"\nfor details."),(0,r.kt)("p",null,'On Parity Signer, click on the top right user icon on the screen. Proceed to "+ Add Identity". On\nthis screen, tap on the "recover existing identity" button.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"restore-using-parity",src:n(96524).Z})),(0,r.kt)("p",null,"Enter in the identity name and the mnemonic seed phrase from the account you'd like to restore."),(0,r.kt)("p",null,"Set an identity PIN that will be used to unlock this account when you need to."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"restore-using-parity",src:n(76120).Z})),(0,r.kt)("p",null,"The identity has now been recovered and you can select a network to create the first account."))}p.isMDXComponent=!0},85436:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/polkadot-js-existing-json-4d1261c6e17e556849a42e6745697cb9.png"},26740:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/polkadot.js_enter_password-abb38a2301e372e2e3afdde709d4056a.png"},90985:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/polkadot.js_list_accounts-08fef80965c2a217f6bf77ac7cbdbf56.png"},4535:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/polkadot.js_restore_account-a6fb95719b4850bcfa4951f3af8ddf5e.png"},38545:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/polkadot_click_restore-e9b83e7c348549576f20b59734883b52.png"},15771:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/polkadot_restore_account-a91afebc901d875b0cfea436bf96e01a.png"},56616:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/polkadot_restore_complete-e86533985224102ac648fd3bffc5a9ab.png"},96524:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/parity_Signer_restore1-9157480e755d852dc5a965b12228b98d.PNG"},76120:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/parity_Signer_restore2-b6d42676241617033f6a26ffc87eaf68.PNG"}}]);