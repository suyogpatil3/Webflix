(this.webpackJsonpwebflix=this.webpackJsonpwebflix||[]).push([[0],{37:function(e,t,c){},58:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),i=c(16),n=c.n(i),r=(c(37),c(11)),o=c(5),l=c(63),d=c(62),j=c(64),b=c(1),h=function(){return Object(b.jsx)("header",{children:Object(b.jsx)(l.a,{variant:"dark",expand:"lg",className:"navigation",children:Object(b.jsxs)(d.a,{children:[Object(b.jsxs)(l.a.Brand,{className:"brand",children:[" ",Object(b.jsx)(r.b,{to:"/",style:{fontSize:"45px"},children:"WebFlix"})]}),Object(b.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav",style:{background:"#438ec8"}}),Object(b.jsx)(l.a.Collapse,{id:"basic-navbar-nav",children:Object(b.jsxs)(j.a,{className:"me-auto",style:{marginLeft:"40%",fontWeight:600},children:[Object(b.jsxs)(j.a.Link,{children:[" ",Object(b.jsx)(r.b,{to:"/Webflix",children:"Home"})]}),Object(b.jsx)(j.a.Link,{children:Object(b.jsx)(r.b,{to:"/Webflix/watchlist",children:"Watchlist"})}),Object(b.jsx)(j.a.Link,{children:Object(b.jsx)(r.b,{to:"/Webflix/watched",children:"Watched"})}),Object(b.jsx)(j.a.Link,{children:Object(b.jsx)(r.b,{to:"/Webflix/add",children:"Search"})})]})})]})})})},m=c(24),u=c.n(m),O=c(36),p=c(12),x=c(30),v=c(2);function f(e,t){switch(t.type){case"ADD_TO_WATCHLIST":return Object(v.a)(Object(v.a)({},e),{},{watchList:[t.payload].concat(Object(x.a)(e.watchList))});case"REMOVE_FROM_WATCHLIST":return Object(v.a)(Object(v.a)({},e),{},{watchList:e.watchList.filter((function(e){return e.id!==t.payload}))});case"ADD_TO_WATCHED":return Object(v.a)(Object(v.a)({},e),{},{watched:[t.payload].concat(Object(x.a)(e.watched)),watchList:e.watchList.filter((function(e){return e.id!==t.payload.id}))});case"MOVE_TO_WATCHLIST_FROM_WATCHED":return Object(v.a)(Object(v.a)({},e),{},{watched:e.watched.filter((function(e){return e.id!==t.payload.id})),watchList:[t.payload].concat(Object(x.a)(e.watchList))});case"REMOVE_FROM_WATCHED":return Object(v.a)(Object(v.a)({},e),{},{watched:e.watched.filter((function(e){return e.id!==t.payload}))});case"VIEW_MORE_DETAILS":return Object(v.a)(Object(v.a)({},e),{},{movieDetails:t.payload});case"SET_CAST":return Object(v.a)(Object(v.a)({},e),{},{cast:t.payload});default:return e}}var g={watchList:JSON.parse(localStorage.getItem("watchList"))||[],watched:JSON.parse(localStorage.getItem("watched"))||[],movieDetails:{},cast:[]},_=Object(a.createContext)(g);function y(e){var t=Object(a.useReducer)(f,g),c=Object(p.a)(t,2),s=c[0],i=c[1];Object(a.useEffect)((function(){localStorage.setItem("watchList",JSON.stringify(s.watchList)),localStorage.setItem("watched",JSON.stringify(s.watched))}),[s]);return Object(b.jsx)(_.Provider,{value:{watchList:s.watchList,watched:s.watched,movieDetails:s.movieDetails,addToWatchList:function(e){i({type:"ADD_TO_WATCHLIST",payload:e})},removeFromWatchList:function(e){i({type:"REMOVE_FROM_WATCHLIST",payload:e})},addMovieToWatched:function(e){i({type:"ADD_TO_WATCHED",payload:e})},moveToWatchlistFromWatched:function(e){i({type:"MOVE_TO_WATCHLIST_FROM_WATCHED",payload:e})},removeFromWatched:function(e){i({type:"REMOVE_FROM_WATCHED",payload:e})},viewMoreDetails:function(e){i({type:"VIEW_MORE_DETAILS",payload:e})},setCastMembers:function(e){i({type:"SET_CAST",payload:e})}},children:e.children})}var w=function(e){var t=e.movies,c=e.title,s=e.type,i=Object(a.useContext)(_).viewMoreDetails;return Object(b.jsxs)("div",{className:"rowBody",children:[Object(b.jsx)("h2",{className:"rowHeading",children:c}),Object(b.jsxs)("div",{className:"broadPoster"===s?"row_broadCards":"row_normalCards",style:{paddingLeft:"30px"},children:[t.map((function(e){return Object(b.jsxs)("div",{className:"movie-container",children:[Object(b.jsx)("img",{className:"broadPoster"===s?"row_broadPoster":"row_poster",src:"https://image.tmdb.org/t/p/w300".concat("broadPoster"===s?e.backdrop_path:e.poster_path),alt:e.name},e.id),Object(b.jsxs)("div",{className:"broadPoster"===s?"movie-broadPoster-overlay":"movie-overlay",children:[Object(b.jsx)("p",{className:"movie_title",children:e.title}),Object(b.jsxs)("div",{children:[Object(b.jsx)("i",{class:"fas fa-star rating",style:{opacity:"100%"}}),Object(b.jsx)("span",{className:"rating",children:e.vote_average}),Object(b.jsx)("p",{className:"overview",children:e.overview})]}),Object(b.jsx)("button",{className:"moreButton",onClick:function(){return i(e)},children:Object(b.jsx)(r.b,{to:"/Webflix/details",style:{textDecoration:"none",color:"white"},children:" more"})})]})]})})),Object(b.jsx)("div",{})]})]})},N=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)([]),n=Object(p.a)(i,2),r=n[0],o=n[1],l=Object(a.useState)([]),d=Object(p.a)(l,2),j=d[0],h=d[1],m=Object(a.useState)([]),x=Object(p.a)(m,2),v=x[0],f=x[1],g=Object(a.useState)([]),_=Object(p.a)(g,2),y=_[0],N=_[1],W=Object(a.useState)([]),T=Object(p.a)(W,2),C=T[0],S=[{url:"https://api.themoviedb.org/3/trending/movie/week?api_key=9bacece0951133e3bcf8bccf45202444",method:s},{url:" https://api.themoviedb.org/3/discover/movie?api_key=9bacece0951133e3bcf8bccf45202444&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=free",method:o},{url:"https://api.themoviedb.org/3/movie/top_rated?api_key=9bacece0951133e3bcf8bccf45202444&language=en-US&page=1",method:h},{url:"https://api.themoviedb.org/3/discover/movie?api_key=9bacece0951133e3bcf8bccf45202444&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=free",method:f},{url:"https://api.themoviedb.org/3/discover/movie?api_key=9bacece0951133e3bcf8bccf45202444&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=18&with_watch_monetization_types=free",method:N},{url:"https://api.themoviedb.org/3/discover/movie?api_key=9bacece0951133e3bcf8bccf45202444&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_watch_monetization_types=free",method:T[1]}];return Object(a.useEffect)((function(){function e(){return(e=Object(O.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S.forEach(function(){var e=Object(O.a)(u.a.mark((function e(t){var c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.url);case 2:return c=e.sent,e.next=5,c.json();case 5:a=e.sent,(0,t.method)(a.results);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:Object(b.jsx)(w,{title:"Trending this week",movies:c})}),Object(b.jsx)("div",{children:Object(b.jsx)(w,{title:"Popular",movies:r,type:"broadPoster"})}),Object(b.jsx)("div",{children:Object(b.jsx)(w,{title:"Top Rated",movies:j})}),Object(b.jsx)("div",{children:Object(b.jsx)(w,{title:"Top Comedy Movies",movies:v,type:"broadPoster"})}),Object(b.jsx)("div",{children:Object(b.jsx)(w,{title:"Top Action Movies",movies:y,type:"broadPoster"})}),Object(b.jsx)("div",{children:Object(b.jsx)(w,{title:"Top Animated Movies",movies:C,type:"broadPoster"})})]})},W=c(21),T=function(e){var t=e.movie,c=e.type,s=Object(a.useContext)(_),i=s.removeFromWatchList,n=s.addMovieToWatched,o=s.moveToWatchlistFromWatched,l=s.removeFromWatched,d=Object(a.useContext)(_).viewMoreDetails,j=Object(W.b)(),h=function(e,t,c){j.success(Object(b.jsx)("div",{style:{textTransform:"none",fontFamily:"'Gowun Dodum', sans-serif",fontWeight:600,fontSize:"20px",minWidth:"50%"},children:"add"===e?"".concat(c," Added to ").concat(t):"Deleted ".concat(c," from your ").concat(t)}),{timeout:4e3})};return Object(b.jsxs)("div",{className:"cardControlWrapper",children:["watchList"===c&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("button",{className:"controlButton",onClick:function(){n(t),h("add","Watched movies",t.title)},children:[Object(b.jsx)("i",{className:"fa fa-plus"}),"Watched"]}),Object(b.jsx)("button",{className:"controlButton",onClick:function(){return d(t)},children:Object(b.jsx)(r.b,{to:"/details",className:"moreControlButton",children:"More"})}),Object(b.jsx)("button",{className:"controlButton",onClick:function(){i(t.id),h("delete","Watched movies",t.title)},children:Object(b.jsx)("i",{class:"fa fa-trash","aria-hidden":"true"})})]}),"watched"===c&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("button",{className:"controlButton",onClick:function(){o(t),h("add","Watch List",t.title)},children:[Object(b.jsx)("i",{className:"fa fa-plus"}),"Watchlist"]}),Object(b.jsx)("button",{className:"controlButton",onClick:function(){return d(t)},children:Object(b.jsx)(r.b,{to:"/Webflix/details",className:"moreControlButton",children:"More"})}),Object(b.jsx)("button",{className:"controlButton",onClick:function(){l(t.id),h("delete","Watched movies list",t.title)},children:Object(b.jsx)("i",{class:"fa fa-trash","aria-hidden":"true"})})]})]})},C=function(e){var t=e.movie,c=e.type;return Object(b.jsxs)("div",{className:"cardDesign",children:[Object(b.jsx)("div",{className:"posterWrapper",children:t.poster_path?Object(b.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),alt:t.title,style:{borderRadius:"5px 5px 0px 0px"}},t.id):Object(b.jsxs)("div",{className:"filler-poster",children:[Object(b.jsx)("i",{class:"fa fa-ban",style:{fontSize:"60px"},"aria-hidden":"true"}),"Image Not Found!!"]})}),Object(b.jsx)("div",{className:"cardControls",children:Object(b.jsx)(T,{type:c,movie:t})})]})},S=function(){var e=Object(a.useContext)(_).watchList;return Object(b.jsx)("div",{className:"watchWrapper",children:Object(b.jsxs)("div",{className:"movie-page",children:[Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("h1",{className:"heading",children:"WatchListed Movies"}),Object(b.jsxs)("span",{className:"count-pill",children:[e.length," ",1==e.length?"Movie":"Movies"]})]}),Object(b.jsx)("div",{children:e.length>0?e.map((function(e){return Object(b.jsx)(C,{movie:e,type:"watchList"})})):Object(b.jsxs)("div",{className:"no-movies",children:[Object(b.jsx)("h4",{className:"no-movies",children:"Your Watchlist is empty!!"}),Object(b.jsx)("h5",{children:'View details of a movie and add it to your list by clicking on "more" button on the movie'})]})})]})})},k=function(){var e=Object(a.useContext)(_).watched;return Object(b.jsxs)("div",{className:"movie-page",children:[Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("h1",{className:"heading",children:"Watched Movies"}),Object(b.jsxs)("span",{className:"count-pill",children:[e.length," ",1==e.length?"Movie":"Movies"]})]}),Object(b.jsx)("div",{children:e.length>0?e.map((function(e){return Object(b.jsx)(C,{movie:e,type:"watched"})})):Object(b.jsxs)("div",{className:"no-movies",children:[Object(b.jsx)("h4",{className:"no-movies",children:"Your Watched movies list is empty!!"}),Object(b.jsx)("h5",{children:'Add some movies by clicking on "more" button on a movie'})]})})]})},L=function(e){var t=e.movie,c=Object(a.useContext)(_).viewMoreDetails;return Object(b.jsx)("div",{className:"movie-container resultCard",children:Object(b.jsxs)("div",{className:"resultCardDesign",children:[Object(b.jsx)("div",{className:"posterWrapper",children:t.poster_path?Object(b.jsx)("img",{className:"search_poster",src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:t.title},t.id):Object(b.jsxs)("div",{className:"search-filler-poster",children:[Object(b.jsx)("i",{class:"fa fa-ban",style:{fontSize:"60px"},"aria-hidden":"true"}),"Image Not Found!!"]})}),Object(b.jsxs)("div",{className:"search-overlay",children:[Object(b.jsx)("p",{className:"movie_title",children:t.title}),Object(b.jsxs)("div",{children:[Object(b.jsx)("i",{class:"far fa-star rating",style:{opacity:"100%"}}),t.vote_average,Object(b.jsx)("p",{className:"overview",children:t.overview})]}),Object(b.jsx)("button",{className:"moreButton",onClick:function(){return c(t)},children:Object(b.jsx)(r.b,{to:"/Webflix/details",style:{textDecoration:"none",color:"white"},children:" more"})})]})]})})},M=function(){var e,t=Object(a.useState)(""),c=Object(p.a)(t,2),s=(c[0],c[1],Object(a.useState)([])),i=Object(p.a)(s,2),n=i[0],r=i[1];return Object(b.jsxs)("div",{className:"searchPage",children:[Object(b.jsx)("div",{children:Object(b.jsx)("input",{type:"text",placeholder:"Search movies",onChange:function(t){clearTimeout(e),e=setTimeout((function(){!function(e){var t=e.target.value;t&&fetch("https://api.themoviedb.org/3/search/movie?api_key=9bacece0951133e3bcf8bccf45202444&language=en-US&page=1&include_adult=false&query=".concat(t)).then((function(e){return e.json()})).then((function(e){e.errors?r([]):(console.log(e.results),r(e.results))}))}(t),e=void 0}),400)},className:"searchBox"})}),Object(b.jsx)("div",{className:"movieGrid",children:n.map((function(e){return Object(b.jsx)(L,{movie:e},e.id)}))})]})},D=function(e){var t=e.castMembers;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"cast_heading",children:"Cast Details"}),Object(b.jsx)("div",{className:"cast_cards",children:t.map((function(e){return Object(b.jsxs)("div",{className:"cast_poster",children:[e.profile_path?Object(b.jsx)("img",{src:"https://image.tmdb.org/t/p/w92/".concat(e.profile_path),className:"details_image"}):Object(b.jsx)("div",{className:"missing_cast",children:Object(b.jsx)("img",{src:"https://img.icons8.com/pastel-glyph/64/000000/person-male--v3.png",className:"missing_pic"})}),Object(b.jsxs)("div",{className:"character",children:[Object(b.jsx)("h5",{className:"cast_name",children:e.original_name}),Object(b.jsxs)("p",{className:"character_name",children:['"',e.character,'"']})]})]})}))})]})},A=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],E=function(){var e=Object(a.useContext)(_).movieDetails,t=Object(a.useState)([]),c=Object(p.a)(t,2),s=c[0],i=c[1],n=Object(a.useState)(""),r=Object(p.a)(n,2),o=r[0],l=r[1],d=Object(W.b)();Object(a.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(e.id,"/credits?api_key=9bacece0951133e3bcf8bccf45202444&language=en-US")).then((function(e){return e.json()})).then((function(e){e.errors?i([]):(console.log("Cast members",e.cast),i(e.cast))})),e!==[]&&fetch("https://api.themoviedb.org/3/movie/".concat(e.id,"/videos?api_key=9bacece0951133e3bcf8bccf45202444&language=en-US")).then((function(e){return e.json()})).then((function(e){if(e.errors)l("");else{var t=e.results.find((function(e){return"Trailer"===e.type&&"YouTube"===e.site}));console.log(t.key),l(void 0!==t?t.key:"")}})).catch((function(e){return null}))}),[e]);var j=Object(a.useContext)(_),h=j.addMovieToWatched,m=j.addToWatchList,u=j.watchList,O=j.watched,x=u.find((function(t){return t.id===e.id})),v=O.find((function(t){return t.id===e.id}));console.log("Id is",e.id);var f=!!x||!!v,g=!!v;return Object(b.jsxs)("div",{children:[" ",void 0!==e&&void 0!==e.genre_ids?Object(b.jsx)("div",{style:{backgroundImage:'url("https://image.tmdb.org/t/p/w500'.concat(e.backdrop_path,'")'),width:"100%",backgroundRepeat:"no-repeat",backgroundSize:"100%",height:"100%"},children:Object(b.jsxs)("div",{className:"detailsContent row",children:[Object(b.jsx)("div",{className:"col-xs-4 col-sm-6 col-md-5 col-lg-4",children:Object(b.jsx)("img",{className:"image",alt:"image-error",src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path)})}),Object(b.jsxs)("div",{className:"col-xs-8 col-sm-6 col-md-7 col-lg-8",children:[Object(b.jsx)("h2",{className:"detailsTitle",children:e.title}),Object(b.jsxs)("span",{children:[" Released: ",e.release_date.toLocaleString()]})," ",Object(b.jsx)("span",{className:"genreWrapper",children:e.genre_ids.map((function(e){return A.map((function(t){return t.id==e?Object(b.jsx)("span",{className:"genre",children:t.name}):""}))}))}),Object(b.jsx)("h5",{className:"detailsOverview",children:e.overview}),Object(b.jsxs)("span",{className:"details_actions",children:[Object(b.jsxs)("span",{className:"rating",children:[Object(b.jsx)("img",{src:"https://img.icons8.com/color/35/000000/christmas-star.png",className:"rating_image"}),Object(b.jsxs)("span",{style:{fontSize:"21px"},children:[e.vote_average,"/10"]})]}),Object(b.jsx)("span",{className:"control",children:Object(b.jsxs)("button",{className:"addButton",disabled:f,onClick:function(){m(e),d.success("Added to Watch List!",{timeout:3e3})},children:[f?Object(b.jsx)("i",{class:"fas fa-check"}):Object(b.jsx)("i",{class:"fas fa-plus"}),"Watchlist"]})}),Object(b.jsx)("span",{className:"control",children:Object(b.jsxs)("button",{className:"addButton",disabled:g,onClick:function(){h(e),d.success("Added to Watched",{timeout:3e3})},children:[g?Object(b.jsx)("i",{class:"fas fa-check"}):Object(b.jsx)("i",{class:"fas fa-plus"}),"Watched"]})}),""!==o?Object(b.jsx)("span",{children:Object(b.jsxs)("button",{className:"addButton",onClick:function(){return window.open("https://www.youtube.com/watch?v=".concat(o),"_blank")},children:[Object(b.jsx)("img",{src:"https://img.icons8.com/color/24/ffffff/youtube-play.png"})," Trailer"]})}):""]}),Object(b.jsx)("div",{children:Object(b.jsx)(D,{castMembers:s})})]})]})}):Object(b.jsx)("h1",{className:"Error",children:"Details Not Found"})]})};c(57);var F=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(y,{children:Object(b.jsxs)(r.a,{children:[Object(b.jsx)(h,{}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",children:Object(b.jsx)(N,{})}),Object(b.jsx)(o.a,{exact:!0,path:"/Webflix/watchlist",children:Object(b.jsx)(S,{})}),Object(b.jsx)(o.a,{exact:!0,path:"/Webflix",children:Object(b.jsx)(N,{})}),Object(b.jsx)(o.a,{path:"/Webflix/watched",children:Object(b.jsx)(k,{})}),Object(b.jsx)(o.a,{path:"/Webflix/add",children:Object(b.jsx)(M,{})}),Object(b.jsx)(o.a,{path:"/Webflix/details",children:Object(b.jsx)(E,{})}),Object(b.jsx)(o.a,{children:Object(b.jsx)(N,{})})]})]})})})},I=c(42);n.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(W.a,{template:I.a,children:Object(b.jsx)(F,{})})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.f03f4668.chunk.js.map