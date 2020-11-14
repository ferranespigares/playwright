(window.webpackJsonp=window.webpackJsonp||[]).push([[300],{356:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var i=a(2),n=a(6),r=(a(0),a(399)),l={id:"class-accessibility",title:"class: Accessibility"},o={unversionedId:"api/class-accessibility",id:"version-1.2.0/api/class-accessibility",isDocsHomePage:!1,title:"class: Accessibility",description:"The Accessibility class provides methods for inspecting Chromium's accessibility tree. The accessibility tree is used by assistive technology such as screen readers or switches.",source:"@site/versioned_docs/version-1.2.0/api/class-accessibility.md",slug:"/api/class-accessibility",permalink:"/playwright/docs/1.2.0/api/class-accessibility",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.2.0/api/class-accessibility.md",version:"1.2.0",sidebar:"version-1.2.0/api",previous:{title:"class: TimeoutError",permalink:"/playwright/docs/1.2.0/api/class-timeouterror"},next:{title:"class: Worker",permalink:"/playwright/docs/1.2.0/api/class-worker"}},c=[{value:"accessibility.snapshot(options)",id:"accessibilitysnapshotoptions",children:[]}],s={rightToc:c};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.a)("wrapper",Object(i.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("p",null,"The Accessibility class provides methods for inspecting Chromium's accessibility tree. The accessibility tree is used by assistive technology such as ",Object(r.a)("a",Object(i.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Screen_reader"}),"screen readers")," or ",Object(r.a)("a",Object(i.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Switch_access"}),"switches"),"."),Object(r.a)("p",null,"Accessibility is a very platform-specific thing. On different platforms, there are different screen readers that might have wildly different output."),Object(r.a)("p",null,'Blink - Chromium\'s rendering engine - has a concept of "accessibility tree", which is then translated into different platform-specific APIs. Accessibility namespace gives users\naccess to the Blink Accessibility Tree.'),Object(r.a)("p",null,'Most of the accessibility tree gets filtered out when converting from Blink AX Tree to Platform-specific AX-Tree or by assistive technologies themselves. By default, Playwright tries to approximate this filtering, exposing only the "interesting" nodes of the tree.'),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(i.a)({parentName:"li"},{href:"#accessibilitysnapshotoptions"}),"accessibility.snapshot([options])"))),Object(r.a)("h2",{id:"accessibilitysnapshotoptions"},"accessibility.snapshot(","[options]",")"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"options")," <","[Object]",">",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"interestingOnly")," <","[boolean]","> Prune uninteresting nodes from the tree. Defaults to ",Object(r.a)("inlineCode",{parentName:"li"},"true"),"."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"root")," <","[ElementHandle]","> The root DOM element for the snapshot. Defaults to the whole page."))),Object(r.a)("li",{parentName:"ul"},"returns: <","[Promise]","<?","[Object]",">> An ","[AXNode]"," object with the following properties:",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"role")," <","[string]","> The ",Object(r.a)("a",Object(i.a)({parentName:"li"},{href:"https://www.w3.org/TR/wai-aria/#usage_intro"}),"role"),"."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"name")," <","[string]","> A human readable name for the node."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"value")," <","[string]","|","[number]","> The current value of the node, if applicable."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"description")," <","[string]","> An additional human readable description of the node, if applicable."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"keyshortcuts")," <","[string]","> Keyboard shortcuts associated with this node, if applicable."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"roledescription")," <","[string]","> A human readable alternative to the role, if applicable."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"valuetext")," <","[string]","> A description of the current value, if applicable."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"disabled")," <","[boolean]","> Whether the node is disabled, if applicable."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"expanded")," <","[boolean]","> Whether the node is expanded or collapsed, if applicable."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"focused")," <","[boolean]","> Whether the node is focused, if applicable."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"modal")," <","[boolean]","> Whether the node is ",Object(r.a)("a",Object(i.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Modal_window"}),"modal"),", if applicable."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"multiline")," <","[boolean]","> Whether the node text input supports multiline, if applicable."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"multiselectable")," <","[boolean]","> Whether more than one child can be selected, if applicable."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"readonly")," <","[boolean]","> Whether the node is read only, if applicable."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"required")," <","[boolean]","> Whether the node is required, if applicable."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"selected")," <","[boolean]","> Whether the node is selected in its parent node, if applicable."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"checked")," <","[boolean]",'|"mixed"> Whether the checkbox is checked, or "mixed", if applicable.'),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"pressed")," <","[boolean]",'|"mixed"> Whether the toggle button is checked, or "mixed", if applicable.'),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"level")," <","[number]","> The level of a heading, if applicable."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"valuemin")," <","[number]","> The minimum value in a node, if applicable."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"valuemax")," <","[number]","> The maximum value in a node, if applicable."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"autocomplete")," <","[string]","> What kind of autocomplete is supported by a control, if applicable."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"haspopup")," <","[string]","> What kind of popup is currently being shown for a node, if applicable."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"invalid")," <","[string]","> Whether and in what way this node's value is invalid, if applicable."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"orientation")," <","[string]","> Whether the node is oriented horizontally or vertically, if applicable."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},"children")," <","[Array]","<","[Object]",">> Child ","[AXNode]","s of this node, if any, if applicable.")))),Object(r.a)("p",null,"Captures the current state of the accessibility tree. The returned object represents the root accessible node of the page."),Object(r.a)("blockquote",null,Object(r.a)("p",{parentName:"blockquote"},Object(r.a)("strong",{parentName:"p"},"NOTE")," The Chromium accessibility tree contains nodes that go unused on most platforms and by\nmost screen readers. Playwright will discard them as well for an easier to process tree,\nunless ",Object(r.a)("inlineCode",{parentName:"p"},"interestingOnly")," is set to ",Object(r.a)("inlineCode",{parentName:"p"},"false"),".")),Object(r.a)("p",null,"An example of dumping the entire accessibility tree:"),Object(r.a)("pre",null,Object(r.a)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"const snapshot = await page.accessibility.snapshot();\nconsole.log(snapshot);\n")),Object(r.a)("p",null,"An example of logging the focused node's name:"),Object(r.a)("pre",null,Object(r.a)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"const snapshot = await page.accessibility.snapshot();\nconst node = findFocusedNode(snapshot);\nconsole.log(node && node.name);\n\nfunction findFocusedNode(node) {\n  if (node.focused)\n    return node;\n  for (const child of node.children || []) {\n    const foundNode = findFocusedNode(child);\n    return foundNode;\n  }\n  return null;\n}\n")))}p.isMDXComponent=!0},399:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var i=a(0),n=a.n(i);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(a),u=i,m=d["".concat(l,".").concat(u)]||d[u]||b[u]||r;return a?n.a.createElement(m,o(o({ref:t},s),{},{components:a})):n.a.createElement(m,o({ref:t},s))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);