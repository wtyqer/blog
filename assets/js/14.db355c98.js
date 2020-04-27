(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{337:function(t,s,e){"use strict";e.r(s);var a=e(33),o=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"deploying"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deploying"}},[t._v("#")]),t._v(" Deploying")]),t._v(" "),e("p",[t._v("The following guides assumes you are placing your docs inside the "),e("code",[t._v("docs")]),t._v(" directory of your project and using the default build output location.")]),t._v(" "),e("h2",{attrs:{id:"github-pages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github-pages"}},[t._v("#")]),t._v(" GitHub Pages")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Set "),e("code",[t._v("base")]),t._v(" in "),e("code",[t._v(".vuepress/config.js")]),t._v(" to your repository's name. For example, if your repository is "),e("code",[t._v("https://github.com/foo/bar")]),t._v(", the deployed pages will be available at "),e("code",[t._v("https://foo.github.io/bar")]),t._v(". In this case, you should set "),e("code",[t._v("base")]),t._v(" to "),e("code",[t._v('"/bar/"')]),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("Inside your project, run:")])])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# build")]),t._v("\nvuepress build docs\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# navigate into the build output directory")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" docs/.vuepress/dist\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -A\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# push to the gh-pages branch of your repo.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# replace <USERNAME>/<REPO> with your info")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -f git@github.com:"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("USERNAME"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("REPO"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".git master:gh-pages\n")])])]),e("p",[t._v("You can run this script in your CI setup to enable automatic deployment on each push.")]),t._v(" "),e("h2",{attrs:{id:"netlify"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#netlify"}},[t._v("#")]),t._v(" Netlify")]),t._v(" "),e("ol",[e("li",[t._v("Make sure you have npm scripts for building your docs:")])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build-docs"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress build docs"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("On Netlify, setup up a new project from GitHub with the following settings:")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Build Command:")]),t._v(" "),e("code",[t._v("npm run build-docs")]),t._v(" or "),e("code",[t._v("yarn build-docs")])]),t._v(" "),e("li",[e("strong",[t._v("Publish directory:")]),t._v(" "),e("code",[t._v("docs/.vuepress/dist")])])]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("Hit the deploy button!")])])])}),[],!1,null,null,null);s.default=o.exports}}]);