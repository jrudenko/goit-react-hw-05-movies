"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[613],{445:function(n,t,e){e.d(t,{Z:function(){return o}});var r="HeadingPage_title__ma9pD",c=e(184);var o=function(n){var t=n.text;return(0,c.jsx)("h1",{className:r,children:t})}},613:function(n,t,e){e.r(t),e.d(t,{default:function(){return h}});var r=e(439),c={searchForm:"SearchBox_searchForm__SdqTH",searchInput:"SearchBox_searchInput__RgkWt"},o=e(791),u=e(184),a=function(n){var t=n.onChange,e=(0,o.useState)(""),a=(0,r.Z)(e,2),i=a[0],s=a[1];return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("form",{onSubmit:function(n){n.preventDefault(),""===i.trim()&&alert("Enter the film title"),t(i),s("")},className:c.searchForm,children:[(0,u.jsx)("input",{type:"text",name:"searchQuery",value:i,autoComplete:"off",autoFocus:!0,placeholder:"Search movies ...",onChange:function(n){s(n.target.value.toLowerCase())},className:c.searchInput}),(0,u.jsx)("button",{type:"submit",className:c.searchButton,children:"Search"})]})})},i=e(445),s=e(87),f=e(228),h=function(){var n,t=(0,s.lr)(),e=(0,r.Z)(t,2),c=e[0],h=e[1],l=(0,o.useState)([]),m=(0,r.Z)(l,2),d=m[0],v=m[1],_=null!==(n=c.get("query"))&&void 0!==n?n:"";(0,o.useEffect)((function(){_&&(0,f.V0)(_).then(v)}),[_,c]);return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("ul",{children:[(0,u.jsx)(i.Z,{text:"Movie Search"}),(0,u.jsx)(a,{value:_,onChange:function(n){h(""!==n?{query:n}:{})}}),d.map((function(n){return(0,u.jsx)("li",{children:(0,u.jsx)(s.rU,{to:"/movies/".concat(n.id),children:n.title||n.name})},n.id)}))]})})}},228:function(n,t,e){e.d(t,{Df:function(){return o},TP:function(){return a},V0:function(){return u},jW:function(){return s},z0:function(){return i}});var r="https://api.themoviedb.org/3/",c="94dbe73fcd84ac739d9a0f3a17326b65";function o(){return fetch("".concat(r,"trending/all/day?api_key=").concat(c)).then((function(n){return n.json()})).then((function(n){return n.results}))}function u(n){return fetch("".concat(r,"search/movie?api_key=").concat(c,"&query=").concat(n)).then((function(n){return n.json()})).then((function(n){return n.results}))}function a(n){return fetch("".concat(r,"/movie/").concat(n,"?api_key=").concat(c)).then((function(n){return n.json()}))}function i(n){return fetch("".concat(r,"/movie/").concat(n,"/credits?api_key=").concat(c)).then((function(n){return n.json()})).then((function(n){return n.cast}))}function s(n){return fetch("".concat(r,"/movie/").concat(n,"/reviews?api_key=").concat(c)).then((function(n){return n.json()}))}}}]);
//# sourceMappingURL=613.2e75954b.chunk.js.map