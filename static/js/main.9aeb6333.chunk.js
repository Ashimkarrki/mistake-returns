(this.webpackJsonplo=this.webpackJsonplo||[]).push([[0],{49:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),s=n(31),r=n.n(s),i=n(5),o=n(0),b=n.n(o),j=n(1),u=n(15),l=n(12),d=n(11),O=n(27),h=n(40),m=Object(h.a)({authDomain:"my-books-8f324.firebaseapp.com",apiKey:"AIzaSyCKd1o_y0xWBtsupPJyM4O958ib8QouJeU",projectId:"my-books-8f324",storageBucket:"my-books-8f324.appspot.com",messagingSenderId:"68736729662",appId:"1:68736729662:web:00ffbd51f9faff6ae5c76f"}),f=Object(O.b)(m),x=n(14),p=function(e,t){switch(t.type){case"SET-BOOK-NAME":return Object(l.a)(Object(l.a)({},e),{},{bookName:t.payload});case"TOGGLE-SIDEBAR":return Object(l.a)(Object(l.a)({},e),{},{openSidebar:!e.openSidebar});case"SET-CURRENT-USER":return Object(l.a)(Object(l.a)({},e),{},{currentUser:t.payload});case"INSTALL-SEARCH-BOOKS":var n=t.payload.items,a=n.length,c=n.map((function(e){if(e.volumeInfo.imageLinks)t=e.volumeInfo.imageLinks.thumbnail;else var t="https://img.whaleshares.io/wls-img/einstei1/d765e65f432e7e6f0d062616d19364ecdc5631da.png";return{id:e.id,selfLink:e.selfLink,title:e.volumeInfo.title,author:e.volumeInfo.authors,desc:e.volumeInfo.description,published:e.volumeInfo.publishedDate,img:t}}));return Object(l.a)(Object(l.a)({},e),{},{searchLoading:!1,searchBookInfo:{totalItem:a,books:c}})}},v=n(3),g=c.a.createContext(),k={bookName:"",searchBookInfo:{},searchLoading:!0,openSidebar:!1,currentUser:""},S=function(e){var t,n=e.children,s=Object(x.e)(),r=c.a.useState(!0),o=Object(d.a)(r,2),h=o[0],m=o[1],S=c.a.useState(),I=Object(d.a)(S,2),N=I[0],y=I[1],w=c.a.useState({userName:"",library:[],bookStatus:[],rated:[],review:[]}),L=Object(d.a)(w,2),T=L[0],B=L[1],C=Object(a.useReducer)(p,k),E=Object(d.a)(C,2),R=E[0],F=E[1],M=c.a.useRef(!0),P=function(){var e=Object(j.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/books/v1/volumes?q=intitle:"+R.bookName+"&key=AIzaSyBGiwbvE0SI4x9H2X2DJMGL2sjQMn4M9NU");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,F({type:"INSTALL-SEARCH-BOOKS",payload:n});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(j.a)(b.a.mark((function e(t,n){var a,c,r,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(x.b)(s,"comments"),c=Object(x.b)(s,"user"),r=Object(x.c)(a,t),i=T.review.map((function(e){return e.bookId===t?Object(l.a)(Object(l.a)({},e),{},{comment:[].concat(Object(u.a)(e.comment),[n])}):{bookId:t,comment:[n]}})),B(Object(l.a)(Object(l.a)({},T),{},{review:Object(u.a)(i)})),e.next=7,Object(x.d)(r);case 7:return e.sent.exists()?Object(x.g)(Object(x.c)(a,t),{commentField:Object(x.a)({userName:T.userName,comment:n})}):Object(x.f)(Object(x.c)(a,t),{commentField:[{userName:T.userName,comment:n}]}),e.abrupt("return",Object(x.f)(Object(x.c)(c,N.uid),Object(l.a)(Object(l.a)({},T),{},{review:Object(u.a)(i)})));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){m(!0);var e=Object(O.c)(f,(function(e){if(y(e),m(!1),e){var t=Object(x.c)(s,"user",e.uid);Object(x.d)(t).then((function(e){B(e.data())}))}F({type:"SET-CURRENT-USER",payload:e})}));return function(){e()}}),[]),Object(a.useEffect)((function(){M.current?M.current=!1:P()}),[R.bookName]),Object(v.jsx)(g.Provider,{value:Object(l.a)(Object(l.a)({},R),{},(t={toggleSidebar:function(){F({type:"TOGGLE-SIDEBAR"})},setBookName:function(e){F({type:"SET-BOOK-NAME",payload:e})},createUser:function(e,t){return Object(O.a)(f,e,t)},logIn:function(e,t){return Object(O.d)(f,e,t)},logOut:function(){return B({userName:"",library:[],bookStatus:[],rated:[],review:[]}),Object(O.e)(f)},user:N,addToLibrary:function(e){var t=Object(x.b)(s,"user");return T.library.includes(e)?(B(Object(l.a)(Object(l.a)({},T),{},{library:T.library.filter((function(t){return t!=e}))})),Object(x.f)(Object(x.c)(t,N.uid),Object(l.a)(Object(l.a)({},T),{},{library:T.library.filter((function(t){return t!=e}))}))):(B(Object(l.a)(Object(l.a)({},T),{},{library:[].concat(Object(u.a)(T.library),[e])})),Object(x.f)(Object(x.c)(t,N.uid),Object(l.a)(Object(l.a)({},T),{},{library:[].concat(Object(u.a)(T.library),[e])})))},setUser:y,userInfo:T,addBookStatus:function(e,t){var n=Object(x.b)(s,"user"),a=T.bookStatus.filter((function(t){return t.bookId!=e}));return"none"===t?(B(Object(l.a)(Object(l.a)({},T),{},{bookStatus:Object(u.a)(a)})),Object(x.f)(Object(x.c)(n,N.uid),Object(l.a)(Object(l.a)({},T),{},{bookStatus:Object(u.a)(a)}))):(B(Object(l.a)(Object(l.a)({},T),{},{bookStatus:[].concat(Object(u.a)(a),[{bookId:e,status:t}])})),Object(x.f)(Object(x.c)(n,N.uid),Object(l.a)(Object(l.a)({},T),{},{bookStatus:[].concat(Object(u.a)(a),[{bookId:e,status:t}])})))},addRating:function(e,t){var n=Object(x.b)(s,"user"),a=T.rated.filter((function(t){return t.bookId!=e}));return"none"===t?(B(Object(l.a)(Object(l.a)({},T),{},{rated:Object(u.a)(a)})),Object(x.f)(Object(x.c)(n,N.uid),Object(l.a)(Object(l.a)({},T),{},{rated:Object(u.a)(a)}))):(B(Object(l.a)(Object(l.a)({},T),{},{rated:[].concat(Object(u.a)(a),[{bookId:e,rating:t}])})),Object(x.f)(Object(x.c)(n,N.uid),Object(l.a)(Object(l.a)({},T),{},{rated:[].concat(Object(u.a)(a),[{bookId:e,rating:t}])})))}},Object(i.a)(t,"userInfo",T),Object(i.a)(t,"addComment",D),Object(i.a)(t,"userLoading",h),t)),children:n})},I=function(){return Object(a.useContext)(g)},N=n(13),y=n(18),w=function(){var e=I(),t=(e.openSidebar,e.toggleSidebar),n=e.user;Object(N.f)();return Object(v.jsxs)("div",{className:"nav",children:[Object(v.jsx)(y.b,{className:"book-holic",to:"/",children:"Book-holic"}),Object(v.jsxs)("div",{className:"left",children:[n&&Object(v.jsx)("button",{className:"jhur",onClick:t,children:"menu"}),!n&&Object(v.jsx)("button",{children:Object(v.jsx)(y.b,{className:"jhur",to:"/login",children:"Login"})}),!n&&Object(v.jsx)("button",{children:Object(v.jsx)(y.b,{className:"jhur",to:"/signin",children:"signin"})}),Object(v.jsx)("button",{children:n&&Object(v.jsx)(y.b,{className:"jhur",to:"/logout",children:"log out"})})]})]})},L=function(){return Object(v.jsxs)("div",{className:"sidebar",children:[Object(v.jsx)("h4",{children:Object(v.jsx)(y.b,{to:"/library",children:"Library"})}),Object(v.jsx)("h4",{children:Object(v.jsx)(y.b,{to:"/bookstatus",children:"Book Status"})}),Object(v.jsx)("h4",{children:Object(v.jsx)(y.b,{to:"/rated",children:"Rated"})})]})},T=(n(49),n(26)),B=function(e){var t=e.id,n=Object(a.useState)([]),c=Object(d.a)(n,2),s=c[0],r=c[1],i=Object(T.e)(),o=Object(T.b)(i,"comments"),u=function(){var e=Object(j.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.d)(Object(T.c)(o,t));case 2:(n=e.sent).exists()&&r(n.data().commentField);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){t&&u(t)}),[t]),Object(v.jsx)("div",{children:s.map((function(e){var t=e.userName,n=e.comment;return Object(v.jsxs)("div",{className:"sub",children:[Object(v.jsx)("h2",{children:n}),Object(v.jsxs)("h4",{children:["-by ",t]})]})}))})},C=n(41),E=function(){return Object(v.jsx)("div",{className:"loading",children:Object(v.jsx)(C.WifiLoader,{background:"transparent",desktopSize:"150px",mobileSize:"150px",text:"Loading",backColor:"#E8F2FC",frontColor:"#4645F6"})})},R=function(){var e,t,n=I(),s=n.user,r=(n.bookName,n.setBookName),i=n.addToLibrary,o=n.userInfo,u=n.addRating,O=n.addBookStatus,h=n.addComment,m=Object(N.h)(),f=m.id,x=m.bookname,p=c.a.useState(""),g=Object(d.a)(p,2),k=g[0],S=g[1],y={rating:["none",1,2,3,4,5],status:["none","read","currently reading","want to read"]},w=function(e){var t=[];return"bookStatus"===e?t=o.bookStatus.map((function(e){return e.bookId})):"rated"===e&&(t=o.rated.map((function(e){return e.bookId}))),t.includes(P.id)?{bo:!0,position:t.indexOf(P.id)}:{bo:!1}},L=c.a.useState(!0),T=Object(d.a)(L,2),C=T[0],R=T[1],F=c.a.useState({}),M=Object(d.a)(F,2),P=M[0],D=M[1],A=I(),U=A.searchBookInfo,G=A.searchLoading,q=(A.pushToFirebase,c.a.useRef()),K=c.a.useRef();q.current=null===(e=U.books)||void 0===e?void 0:e.filter((function(e){return e.id===f})),K.current=null===(t=q.current)||void 0===t?void 0:t.map((function(e){return e.selfLink}))[0];var J=function(){var e=Object(j.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(K.current);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,D(Object(l.a)(Object(l.a)({},q.current[0]),{},{totalPage:n.volumeInfo.pageCount,rating:n.volumeInfo.averageRating,language:n.volumeInfo.language,publisher:n.volumeInfo.publisher})),R(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){R(!0),r(x),J()}),[K.current]),C||G?Object(v.jsx)("div",{className:"loadingKoMathi",children:Object(v.jsx)(E,{})}):Object(v.jsxs)("div",{className:"up",children:[Object(v.jsxs)("div",{className:"onebook",children:[Object(v.jsxs)("div",{className:"pictureRwname",children:[Object(v.jsx)("img",{src:null===P||void 0===P?void 0:P.img}),Object(v.jsxs)("h3",{children:[P.title,"!"]})]}),Object(v.jsxs)("div",{className:"subOnebook",children:[Object(v.jsx)("h3",{children:"SYPNOSIS: "}),Object(v.jsx)("h4",{children:Object(v.jsx)("p",{children:P.desc})})]})]}),Object(v.jsxs)("div",{className:"extra",children:[Object(v.jsxs)("h4",{children:["Total page :",Object(v.jsxs)("span",{children:[" ",P.totalPage]})]}),Object(v.jsxs)("h4",{children:["Rating :",Object(v.jsxs)("span",{children:[" ",null===P||void 0===P?void 0:P.rating]})]}),Object(v.jsxs)("h4",{children:["Language :",Object(v.jsxs)("span",{children:[" ",P.language]})]}),Object(v.jsxs)("h4",{children:["Publisher:",Object(v.jsxs)("span",{children:[" ",P.publisher]})]}),Object(v.jsxs)("h4",{children:["Author :",Object(v.jsxs)("span",{children:[" ",P.author]})]}),Object(v.jsxs)("h4",{children:["Published Date :",Object(v.jsxs)("span",{children:[" ",P.published]})]}),s&&Object(v.jsxs)("div",{className:"features",children:[Object(v.jsxs)("select",{name:"status",onClick:function(e){O(P.id,e.target.value)},children:[(!o.bookStatus||!w("bookStatus").bo)&&Object(v.jsx)(v.Fragment,{children:y.status.map((function(e,t){return"none"===e?Object(v.jsx)("option",{selected:!0,value:e,children:"select one"},t):Object(v.jsx)("option",{value:e,children:e},t)}))}),o.bookStatus&&w("bookStatus").bo&&Object(v.jsx)(v.Fragment,{children:y.status.map((function(e,t){var n=w("bookStatus").position;return e===o.bookStatus[n].status?Object(v.jsx)("option",{selected:!0,value:e,children:e},t):Object(v.jsx)("option",{value:e,children:e},t)}))})]}),Object(v.jsx)("button",{onClick:function(){i(P.id)},children:"Add to library +"}),Object(v.jsxs)("select",{name:"rating",onClick:function(e){u(P.id,e.target.value)},children:[(!o.rated||!w("rated").bo)&&Object(v.jsx)(v.Fragment,{children:y.rating.map((function(e,t){return"none"===e?Object(v.jsx)("option",{selected:!0,value:e,children:"select one"},t):Object(v.jsx)("option",{value:e,children:e},t)}))}),o.rated&&w("rated").bo&&Object(v.jsx)(v.Fragment,{children:y.rating.map((function(e,t){var n=w("rated").position;return e==o.rated[n].rating?Object(v.jsx)("option",{selected:!0,value:e,children:e},t):Object(v.jsx)("option",{value:e,children:e},t)}))})]})]}),Object(v.jsx)(B,{id:P.id}),s&&Object(v.jsxs)("div",{className:"reviewsection",children:[Object(v.jsx)("h2",{children:"Review"}),Object(v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h(P.id,k).finally((function(){S("")}))},children:[Object(v.jsx)("textarea",{onChange:function(e){return S(e.target.value)},value:k,rows:"4",cols:"50"}),Object(v.jsx)("button",{type:"submit",children:"Submit"})]})]})]})]})},F=function(){var e=I().searchLoading,t=I(),n=t.searchBookInfo,a=t.bookName;return e?Object(v.jsx)("div",{className:"booklist"}):Object(v.jsxs)("div",{className:"booklist",children:[Object(v.jsx)("h4",{children:n.totalItem}),Object(v.jsx)("div",{className:"map",children:n.books.map((function(e){return Object(v.jsx)(y.b,{to:"/oneBook/".concat(a,"/").concat(e.id),children:Object(v.jsxs)("div",{className:"individual",children:[Object(v.jsx)("img",{src:e.img}),Object(v.jsxs)("div",{className:"something",children:[Object(v.jsx)("h4",{children:e.title}),Object(v.jsxs)("h5",{children:["By ",e.author]}),Object(v.jsx)("h6",{children:e.published})]})]})},e.id)}))})]})},M=function(){var e=I(),t=e.setBookName,n=(e.bookName,e.searchLoading,c.a.useState("")),a=Object(d.a)(n,2),s=a[0],r=a[1];return Object(v.jsxs)("div",{className:"home",children:[Object(v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(s)},children:[Object(v.jsx)("input",{type:"text",required:!0,placeholder:"Search By Book Title",value:s,onChange:function(e){r(e.target.value)},name:"bookName"}),Object(v.jsx)("h4",{children:Object(v.jsx)("button",{type:"submit",children:"Search"})})]}),Object(v.jsx)(F,{})]})},P=n(22),D=(n(60),function(){var e,t=Object(N.f)(),n=Object(x.e)(),c=Object(N.g)(),s=I(),r=s.createUser,o=s.userInfo,b=Object(a.useState)({email:"",password:"",userName:""}),j=Object(d.a)(b,2),u=j[0],O=j[1],h=function(e){var t=e.target.name,n=e.target.value;O(Object(l.a)(Object(l.a)({},u),{},Object(i.a)({},t,n)))};return Object(v.jsx)("div",{className:"form",children:Object(v.jsxs)("form",{onSubmit:function(a){a.preventDefault(),r(u.email,u.password).then((function(e){var t=Object(x.b)(n,"user");Object(x.f)(Object(x.c)(t,e.user.uid),Object(l.a)(Object(l.a)({},o),{},{userName:u.userName}))})).catch((function(t){e=!0,P.b.warn("invalid password or email",{position:P.b.POSITION.BOTTOM_LEFT,theme:"dark"})})).finally((function(){var n,a;(O({email:"",password:"",userName:""}),e)?c({pathname:"/signin"}):(P.b.success("welcome",{position:P.b.POSITION.BOTTOM_LEFT,theme:"dark"}),c({pathname:(null===(n=t.state)||void 0===n||null===(a=n.from)||void 0===a?void 0:a.pathname)?t.state.from.pathname:"/"}))}))},children:[Object(v.jsx)("h3",{children:" SIGN IN"})," ",Object(v.jsx)("input",{value:u.email,required:!0,placeholder:"Email",type:"email",name:"email",onChange:function(e){h(e)}}),Object(v.jsx)("input",{value:u.password,required:!0,placeholder:"Password",type:"password",name:"password",onChange:function(e){h(e)}}),Object(v.jsx)("input",{value:u.userName,required:!0,type:"text",name:"userName",placeholder:"User-Name",onChange:function(e){h(e)}}),Object(v.jsx)("button",{value:"submit",children:"SUBMIT"})]})})}),A=function(){var e,t=Object(N.g)(),n=I(),c=n.logIn,s=(n.user,Object(a.useState)({email:"",password:""})),r=Object(d.a)(s,2),o=r[0],b=r[1],j=function(e){var t=e.target.name,n=e.target.value;b(Object(l.a)(Object(l.a)({},o),{},Object(i.a)({},t,n)))};return Object(v.jsx)("div",{className:"form",children:Object(v.jsxs)("form",{onSubmit:function(n){n.preventDefault(),c(o.email,o.password).catch((function(t){e=!0,P.b.warn("invalid password or email",{position:P.b.POSITION.BOTTOM_LEFT,theme:"dark"})})).finally((function(){b({email:"",password:""}),e?t({pathname:"/login"}):(P.b.success("welcome",{position:P.b.POSITION.BOTTOM_LEFT,theme:"dark"}),t({pathname:"/"}))}))},children:[Object(v.jsx)("h3",{children:"LOG IN"}),Object(v.jsx)("input",{value:o.email,placeholder:"Email",type:"text",name:"email",onChange:function(e){j(e)}}),Object(v.jsx)("input",{value:o.password,placeholder:"Password",type:"password",name:"password",onChange:function(e){j(e)}}),Object(v.jsx)("button",{value:"submit",children:"SUBMIT"})]})})},U=function(){var e=Object(N.f)(),t=Object(N.g)(),n=I().logOut;return Object(v.jsx)("div",{className:"logout",children:Object(v.jsx)("button",{className:"okies",onClick:function(){var a,c;n(),P.b.success("bye",{position:P.b.POSITION.BOTTOM_LEFT,theme:"dark"}),t({pathname:(null===(a=e.state)||void 0===a||null===(c=a.from)||void 0===c?void 0:c.pathname)?e.state.from.pathname:"/"})},children:"Log out"})})},G=function(e){var t=e.library,n=e.whatIsInThere,c=e.reqData,s=Object(a.useState)([]),r=Object(d.a)(s,2),i=r[0],o=r[1],u=function(e){var t;if("BookStatus"===n)c.map((function(n){n.bookId===e&&(t=n.status)}));else if("rating"===n)c.map((function(n){n.bookId===e&&(t=n.rating)}));return t},l=function(){var e=Object(j.a)(b.a.mark((function e(t){var n,a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map((function(e){return fetch("https://www.googleapis.com/books/v1/volumes/".concat(e,"?key=").concat("AIzaSyBGiwbvE0SI4x9H2X2DJMGL2sjQMn4M9NU"))})));case 2:return n=e.sent,e.next=5,Promise.all(n.map((function(e){return e.json()})));case 5:a=e.sent,c=a.map((function(e){var t,n;if(e.volumeInfo.imageLinks)a=e.volumeInfo.imageLinks.thumbnail;else var a="https://img.whaleshares.io/wls-img/einstei1/d765e65f432e7e6f0d062616d19364ecdc5631da.png";return n=(null===(t=e.volumeInfo.industryIdentifiers[1])||void 0===t?void 0:t.identifier)?e.volumeInfo.industryIdentifiers[1].identifier:null,{id:e.id,selfLink:e.selfLink,title:e.volumeInfo.title,author:e.volumeInfo.authors,published:e.volumeInfo.publishedDate,isbn:n,img:a}})),o(c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){l(t)}),[JSON.stringify(t)]),Object(v.jsx)("div",{className:"booklist",children:Object(v.jsx)("div",{className:"map",children:i.map((function(e,t){return Object(v.jsx)(y.b,{to:"/onebook2/".concat(e.isbn),children:Object(v.jsxs)("div",{className:"individual",children:[Object(v.jsx)("img",{src:e.img}),Object(v.jsxs)("div",{className:"something",children:[Object(v.jsx)("h4",{children:e.title}),Object(v.jsxs)("h5",{children:["By ",e.author]}),Object(v.jsx)("h6",{children:e.published}),"rating"===n&&Object(v.jsxs)("h5",{children:["Rated : ",u(e.id)]}),"BookStatus"===n&&Object(v.jsxs)("h5",{children:["Status : ",u(e.id)]})]})]})},t)}))})})},q=function(){var e=I().userInfo.library;return Object(v.jsx)("div",{children:Object(v.jsx)(G,{library:e,whatIsInThere:"library"})})},K=function(){var e=c.a.useState(""),t=Object(d.a)(e,2),n=t[0],s=t[1],r=I(),i=r.user,o=(r.bookName,r.setBookName,r.addToLibrary),u=r.userInfo,l=r.addRating,O=r.addBookStatus,h=r.addComment,m=(Object(N.g)(),Object(N.h)().isbn),f=c.a.useState(!0),x=Object(d.a)(f,2),p=x[0],g=x[1],k=c.a.useState({}),S=Object(d.a)(k,2),y=S[0],w=S[1],L=I(),T=(L.searchBookInfo,L.searchLoading,L.pushToFirebase,Object(N.h)()),C=(T.id,T.bookname,{rating:["none",1,2,3,4,5],status:["none","Read","Currently reading","Want to read"]}),R=function(e){var t=[];return"bookStatus"===e?t=u.bookStatus.map((function(e){return e.bookId})):"rated"===e&&(t=u.rated.map((function(e){return e.bookId}))),t.includes(y.id)?{bo:!0,position:t.indexOf(y.id)}:{bo:!1}},F=function(){var e=Object(j.a)(b.a.mark((function e(){var t,n,a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:".concat(m,"&key=").concat("AIzaSyBGiwbvE0SI4x9H2X2DJMGL2sjQMn4M9NU"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a=n.items[0],c=a.volumeInfo.imageLinks?a.volumeInfo.imageLinks.thumbnail:"https://img.whaleshares.io/wls-img/einstei1/d765e65f432e7e6f0d062616d19364ecdc5631da.png",w({id:a.id,title:a.volumeInfo.title,author:a.volumeInfo.authors,published:a.volumeInfo.publishedDate,img:c,totalPage:a.volumeInfo.pageCount,rating:a.volumeInfo.averageRating,language:a.volumeInfo.language,publisher:a.volumeInfo.publisher}),g(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){g(!0),F()}),[]),p?Object(v.jsx)("div",{className:"loadingKoMathi",children:Object(v.jsx)(E,{})}):Object(v.jsxs)("div",{className:"up",children:[Object(v.jsxs)("div",{className:"onebook",children:[Object(v.jsxs)("div",{className:"pictureRwname",children:[Object(v.jsx)("img",{src:null===y||void 0===y?void 0:y.img}),Object(v.jsxs)("h3",{children:[y.title,"!"]})]}),Object(v.jsxs)("div",{className:"subOnebook",children:[Object(v.jsx)("h3",{children:"SYPNOSIS: "}),Object(v.jsx)("h4",{children:Object(v.jsx)("p",{children:y.desc})})]})]}),Object(v.jsxs)("div",{className:"extra",children:[Object(v.jsxs)("h4",{children:["Total page :",Object(v.jsxs)("span",{children:[" ",y.totalPage]})]}),Object(v.jsxs)("h4",{children:["Rating :",Object(v.jsxs)("span",{children:[" ",null===y||void 0===y?void 0:y.rating]})]}),Object(v.jsxs)("h4",{children:["Language :",Object(v.jsxs)("span",{children:[" ",y.language]})]}),Object(v.jsxs)("h4",{children:["Publisher :",Object(v.jsxs)("span",{children:[" ",y.publisher]})]}),Object(v.jsxs)("h4",{children:["Author:",Object(v.jsx)("span",{children:y.author})]}),Object(v.jsxs)("h4",{children:["Published Date:",Object(v.jsx)("span",{children:y.published})]}),i&&Object(v.jsxs)("div",{className:"features",children:[Object(v.jsxs)("select",{name:"status",onClick:function(e){O(y.id,e.target.value)},children:[(!u.bookStatus||!R("bookStatus").bo)&&Object(v.jsx)(v.Fragment,{children:C.status.map((function(e,t){return"none"===e?Object(v.jsx)("option",{selected:!0,value:e,children:"select one"},t):Object(v.jsx)("option",{value:e,children:e},t)}))}),u.bookStatus&&R("bookStatus").bo&&Object(v.jsx)(v.Fragment,{children:C.status.map((function(e,t){var n=R("bookStatus").position;return e===u.bookStatus[n].status?Object(v.jsx)("option",{selected:!0,value:e,children:e},t):Object(v.jsx)("option",{value:e,children:e},t)}))})]}),Object(v.jsx)("button",{onClick:function(){o(y.id)},children:"Add to library +"}),Object(v.jsxs)("select",{name:"rating",onClick:function(e){l(y.id,e.target.value)},children:[(!u.rated||!R("rated").bo)&&Object(v.jsx)(v.Fragment,{children:C.rating.map((function(e,t){return"none"===e?Object(v.jsx)("option",{selected:!0,value:e,children:"select one"},t):Object(v.jsx)("option",{value:e,children:e},t)}))}),u.rated&&R("rated").bo&&Object(v.jsx)(v.Fragment,{children:C.rating.map((function(e,t){var n=R("rated").position;return e==u.rated[n].rating?Object(v.jsx)("option",{selected:!0,value:e,children:e},t):Object(v.jsx)("option",{value:e,children:e},t)}))})]})]}),Object(v.jsx)(B,{id:y.id}),i&&Object(v.jsxs)("div",{className:"reviewsection",children:[Object(v.jsx)("h2",{children:"Review"}),Object(v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h(y.id,n).finally((function(){s("")}))},children:[Object(v.jsx)("textarea",{onChange:function(e){return s(e.target.value)},value:n,rows:"4",cols:"50"}),Object(v.jsx)("button",{type:"submit",children:"Submit"})]})]})]})]})},J=function(){var e=I().userInfo.bookStatus,t=e.map((function(e){return e.bookId}));return Object(v.jsx)("div",{children:Object(v.jsx)(G,{library:t,reqData:e,whatIsInThere:"BookStatus"})})},z=function(){var e=I().userInfo.rated,t=e.map((function(e){return e.bookId}));return Object(v.jsx)("div",{children:Object(v.jsx)(G,{library:t,reqData:e,whatIsInThere:"rating"})})};var _=function(){var e=I(),t=e.openSidebar;return e.userLoading?Object(v.jsx)("div",{className:"loadingKoMathi",children:Object(v.jsx)(E,{})}):Object(v.jsxs)("div",{className:"app",children:[Object(v.jsx)(P.a,{}),Object(v.jsx)(w,{}),t&&Object(v.jsx)(L,{}),Object(v.jsxs)(N.d,{children:[Object(v.jsx)(N.b,{path:"/",element:Object(v.jsx)(M,{})}),Object(v.jsx)(N.b,{path:"/signin",element:Object(v.jsx)(Q,{children:Object(v.jsx)(D,{})})}),Object(v.jsx)(N.b,{path:"/login",element:Object(v.jsx)(Q,{children:Object(v.jsx)(A,{})})}),Object(v.jsx)(N.b,{path:"/logout",element:Object(v.jsx)(H,{children:Object(v.jsx)(U,{})})}),Object(v.jsx)(N.b,{path:"/library",element:Object(v.jsx)(H,{children:Object(v.jsx)(q,{})})}),Object(v.jsx)(N.b,{path:"/bookstatus",element:Object(v.jsx)(H,{children:Object(v.jsx)(J,{})})}),Object(v.jsx)(N.b,{path:"/rated",element:Object(v.jsx)(H,{children:Object(v.jsx)(z,{})})}),Object(v.jsx)(N.b,{path:"/onebook2/:isbn",element:Object(v.jsx)(K,{})}),Object(v.jsx)(N.b,{path:"/oneBook/:bookname/:id",element:Object(v.jsx)(R,{})})]})]})},H=function(e){var t=e.children,n=I().user,a=Object(N.f)();return n?t:Object(v.jsx)(N.a,{to:"/signin",state:{from:a}})},Q=function(e){var t=e.children,n=I().user,a=Object(N.f)();return n?Object(v.jsx)(N.a,{to:"/logout",state:{from:a}}):t},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(S,{children:Object(v.jsx)(y.a,{children:Object(v.jsx)(_,{})})})}),document.getElementById("root")),W()}},[[61,1,2]]]);
//# sourceMappingURL=main.9aeb6333.chunk.js.map