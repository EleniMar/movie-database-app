(this["webpackJsonpomdb-project"]=this["webpackJsonpomdb-project"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(2),r=a.n(o),i=(a(12),a(3)),s=a(4),l=a(6),h=a(5),m=function(e){var t=e.searchChange;return c.a.createElement("div",{className:"pa2 "},c.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue tc",type:"search",placeholder:"Enter Movie Title",onChange:t}))},u=(a(13),function(e){var t=e.Title,a=e.imdbID,n=e.Year,o=e.Plot;return c.a.createElement("div",{className:"fl w-100 w-25-ns pa2 "},c.a.createElement("div",{className:"b--solid b--light-silver grow bg-lightest-blue shadow-5 tc",style:{height:"550px"}},c.a.createElement("img",{src:"http://img.omdbapi.com/?i=".concat(a,"&apikey=51d5b5fa"),alt:"No Poster"}),c.a.createElement("h2",null,t),c.a.createElement("p",null,n),c.a.createElement("p",null,o)))}),d=function(e){var t=e.movies,a=t.map((function(e,a){return c.a.createElement(u,{key:t[a].imdbID,Title:t[a].Title,imdbID:t[a].imdbID,Year:t[a].Year,Plot:t[a].Plot})}));return c.a.createElement("div",{className:"cf ph2-ns"},a)},v=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value,searchedMovies:[]}),fetch("http://www.omdbapi.com/?s=".concat(e.state.searchfield,"&apikey=51d5b5fa")).then((function(e){return e.json()})).then((function(t){void 0!==t.Search&&(e.setState({searchedMovies:t.Search,movies:[]}),e.state.searchedMovies.map((function(t,a){fetch("http://www.omdbapi.com/?i=".concat(e.state.searchedMovies[a].imdbID,"&apikey=51d5b5fa")).then((function(e){return e.json()})).then((function(t){e.setState({movies:e.state.movies.concat(t)})}))})))}))},e.state={movies:[],searchfield:"",searchedMovies:[]},e}return Object(s.a)(a,[{key:"render",value:function(){return console.log(this.state.searchedMovies),c.a.createElement("div",{className:"tc mw9 center ph3-ns"},c.a.createElement("h1",{className:"f1 lightest-blue"},"Search for a movie "),c.a.createElement(m,{searchChange:this.onSearchChange}),c.a.createElement(d,{movies:this.state.movies}))}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(14);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.a52137ae.chunk.js.map