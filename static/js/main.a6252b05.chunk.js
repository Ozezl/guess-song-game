(this["webpackJsonpsong-guesser-game"]=this["webpackJsonpsong-guesser-game"]||[]).push([[0],{109:function(e,t,s){},181:function(e,t,s){},182:function(e,t,s){},188:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),r=s(18),c=s.n(r),o=(s(109),s(75)),u=s.n(o),i=s(90),j=s(25),g=s(190),d=s(191),b=s(193),l=s(8),h=d.a.Title,O=d.a.Paragraph;var m=function(e){return Object(l.jsxs)("div",{className:"result-window",children:[Object(l.jsx)(h,{children:"Results"}),0===e.guessedSongs&&Object(l.jsx)(O,{children:"You haven't guessed anything, there is probably no cure for you."}),1===e.guessedSongs&&Object(l.jsxs)(O,{children:["You have guessed literally ",e.guessedSongs," song, are you baka ?"]}),e.guessedSongs>1&&e.guessedSongs<10&&Object(l.jsxs)(O,{children:["You have guessed like ",e.guessedSongs," songs, are you baka ?"]}),e.guessedSongs>=10&&e.guessedSongs<=15&&Object(l.jsxs)(O,{children:["You have guessed ",e.guessedSongs," songs, Not great not terrible."]}),e.guessedSongs>15&&Object(l.jsxs)(O,{children:["You have guessed ",e.guessedSongs," songs, I see that you are a man / woman of culture aswell."]}),Object(l.jsx)(b.a,{type:"primary",onClick:function(){return e.restart()},children:"Replay"})]})},f=s(77),p=s(102),x=s(192),v=s(194),S=(s(181),d.a.Title);var y=function(e){var t=Object(n.useState)(-1),s=Object(j.a)(t,2),a=s[0],r=s[1],c=Object(n.useState)(e.state),o=Object(j.a)(c,2),u=o[0],i=o[1],g=Object(n.useState)(Object(f.a)(e.songs)[u]),d=Object(j.a)(g,2),h=d[0],O=d[1],m=Object(n.useState)(Object(f.a)(e.songs)),y=Object(j.a)(m,1)[0],w=Object(n.useState)(C(h)),k=Object(j.a)(w,2),Y=k[0],N=k[1];function C(e){for(var t=[e];t.length<4;){for(var s=R();M(s,t);)s=R();t.push(s)}return function(e){return e.sort((function(e,t){return.5-Math.random()}))}(t)}function M(e,t){return t.map((function(e){return e.name})).includes(e.name)}function R(){return y[Math.floor(Math.random()*y.length)]}return Object(l.jsxs)("div",{className:"round",children:[Object(l.jsx)(S,{children:"What is the given song name ?"}),Object(l.jsxs)("audio",{controls:!0,children:[Object(l.jsx)("source",{src:h.preview_url,type:"audio/mpeg"}),"Your browser does not support the audio element."]}),Object(l.jsx)(x.a.Group,{onChange:function(e){r(e.target.value)},children:Object(l.jsxs)(v.b,{direction:"vertical",children:[Object(l.jsx)(x.a,{value:0,children:Y[0].name}),Object(l.jsx)(x.a,{value:1,children:Y[1].name}),Object(l.jsx)(x.a,{value:2,children:Y[2].name}),Object(l.jsx)(x.a,{value:3,children:Y[3].name})]})}),Object(l.jsx)(b.a,{type:"primary",onClick:function(){-1!==a?(Y[a].name===h.name?(e.setGuessedSongs(e.guessedSongs+1),p.b.success("You correctly guessed the song name !")):p.b.error("You didn't guess the song name !"),u!==y.length-1?(O(y[u+1]),N(C(y[u+1])),i(u+1),r(-1)):e.setState(u)):p.b.warning("You have to choose song before pressing button !")},children:"Next"})]},u)},w=d.a.Title,k=d.a.Paragraph;var Y=function(e){return Object(l.jsxs)("div",{className:"main-menu",children:[Object(l.jsx)(w,{children:"A song guessing game"}),Object(l.jsx)(k,{children:"A game where you have to guess the name of a randomly given song"}),Object(l.jsx)(b.a,{type:"primary",onClick:function(){return e.getRandomSongs()},children:"Play"})]})};s(182);var N=function(){var e=Object(n.useState)(0),t=Object(j.a)(e,2),s=t[0],a=t[1],r=Object(n.useState)(!1),c=Object(j.a)(r,2),o=c[0],d=c[1],b=Object(n.useState)(!1),h=Object(j.a)(b,2),O=h[0],f=h[1],p=Object(n.useState)(!1),x=Object(j.a)(p,2),v=x[0],S=x[1],w=Object(n.useState)({}),k=Object(j.a)(w,2),N=k[0],C=k[1],M=Object(n.useState)(0),R=Object(j.a)(M,2),A=R[0],G=R[1];function P(){return(P=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,fetch("https://spotify-song-guesser-api.herokuapp.com/v1/song").then((function(e){return e.json()})).then((function(e){C(e),console.log(e),f(!0)})).catch((function(e){console.error("Error:",e)}));case 3:d(!1);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(l.jsxs)("div",{className:"App",children:[!O&&!v&&Object(l.jsx)(Y,{getRandomSongs:function(){return P.apply(this,arguments)}}),o&&Object(l.jsx)(g.a,{}),O&&Object(l.jsx)(y,{state:s,setState:function(e){if(19===e)return f(!1),void S(!0);a(e)},guessedSongs:A,setGuessedSongs:G,songs:N}),v&&Object(l.jsx)(m,{guessedSongs:A,restart:function(){f(!1),S(!1),G(0),a(0)}})]},O)};c.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root"))}},[[188,1,2]]]);
//# sourceMappingURL=main.a6252b05.chunk.js.map