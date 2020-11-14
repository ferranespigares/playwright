(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{399:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(m,s(s({ref:t},c),{},{components:r})):a.a.createElement(m,s({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},98:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(399)),i={id:"environment-variables",title:"Environment Variables"},s={unversionedId:"api/environment-variables",id:"version-1.1.0/api/environment-variables",isDocsHomePage:!1,title:"Environment Variables",description:"NOTE playwright-core does not respect environment variables.",source:"@site/versioned_docs/version-1.1.0/api/environment-variables.md",slug:"/api/environment-variables",permalink:"/playwright/docs/1.1.0/api/environment-variables",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.1.0/api/environment-variables.md",version:"1.1.0",sidebar:"version-1.1.0/api",previous:{title:"class: WebKitBrowser",permalink:"/playwright/docs/1.1.0/api/class-webkitbrowser"},next:{title:"Working with selectors",permalink:"/playwright/docs/1.1.0/api/working-with-selectors"}},l=[],c={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},Object(o.a)("strong",{parentName:"p"},"NOTE")," ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/playwright-core"}),"playwright-core")," ",Object(o.a)("strong",{parentName:"p"},"does not")," respect environment variables.")),Object(o.a)("p",null,"Playwright looks for certain ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Environment_variable"}),"environment variables")," to aid its operations.\nIf Playwright doesn't find them in the environment, a lowercased variant of these variables will be used from the ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://docs.npmjs.com/cli/config"}),"npm config"),"."),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"PLAYWRIGHT_DOWNLOAD_HOST")," - overwrite URL prefix that is used to download browsers. Note: this includes protocol and might even include path prefix. By default, Playwright uses ",Object(o.a)("inlineCode",{parentName:"li"},"https://storage.googleapis.com")," to download Chromium and ",Object(o.a)("inlineCode",{parentName:"li"},"https://playwright.azureedge.net")," to download Webkit & Firefox."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"PLAYWRIGHT_BROWSERS_PATH")," - specify a shared folder that playwright will use to download browsers and to look for browsers when launching browser instances."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD")," - set to non-empty value to skip browser downloads altogether.")),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"# Install browsers to the shared location.\n$ PLAYWRIGHT_BROWSERS_PATH=$HOME/playwright-browsers npm install --save-dev playwright\n# Use shared location to find browsers.\n$ PLAYWRIGHT_BROWSERS_PATH=$HOME/playwright-browsers node playwright-script.js\n")))}p.isMDXComponent=!0}}]);