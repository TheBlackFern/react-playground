import{c as N,R as p,r as d,_ as P,v as A,j as i,S as E,B as L}from"./index-9a9909bf.js";const I=N("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]),M=N("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);function j(){return j=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},j.apply(this,arguments)}function z(e,a){if(e==null)return{};var t={},r=Object.keys(e),n,o;for(o=0;o<r.length;o++)n=r[o],!(a.indexOf(n)>=0)&&(t[n]=e[n]);return t}function B(e){d.useEffect(e,[])}function U(e,a){a===void 0&&(a={});var t=a,r=t.volume,n=r===void 0?1:r,o=t.playbackRate,f=o===void 0?1:o,x=t.soundEnabled,h=x===void 0?!0:x,c=t.interrupt,m=c===void 0?!1:c,b=t.onload,v=z(t,["id","volume","playbackRate","soundEnabled","interrupt","onload"]),y=p.useRef(null),u=p.useRef(!1),g=p.useState(null),V=g[0],_=g[1],k=p.useState(null),s=k[0],R=k[1],w=function(){typeof b=="function"&&b.call(this),u.current&&_(this.duration()*1e3),R(this)};B(function(){return P(()=>import("./howler-75026d26.js").then(l=>l.h),["assets/howler-75026d26.js","assets/index-9a9909bf.js","assets/index-3f59413a.css"]).then(function(l){if(!u.current){var S;y.current=(S=l.Howl)!==null&&S!==void 0?S:l.default.Howl,u.current=!0,new y.current(j({src:Array.isArray(e)?e:[e],volume:n,rate:f,onload:w},v))}}),function(){u.current=!1}}),p.useEffect(function(){y.current&&s&&R(new y.current(j({src:Array.isArray(e)?e:[e],volume:n,onload:w},v)))},[JSON.stringify(e)]),p.useEffect(function(){s&&(s.volume(n),s.rate(f))},[n,f]);var $=p.useCallback(function(l){typeof l>"u"&&(l={}),!(!s||!h&&!l.forceSoundEnabled)&&(m&&s.stop(),l.playbackRate&&s.rate(l.playbackRate),s.play(l.id))},[s,h,m]),O=p.useCallback(function(l){s&&s.stop(l)},[s]),T=p.useCallback(function(l){s&&s.pause(l)},[s]),C=[$,{sound:s,stop:O,pause:T,duration:V}];return C}function X(e,a){const[r,n]=d.useState(0);return d.useEffect(()=>{n(o=>o+15*a/1e3)},[e,a]),[r]}function D(e,a){const[t,r]=d.useState(180),[n,o]=d.useState(!1);return d.useEffect(()=>{e>=t&&(a(),o(!0),setTimeout(()=>{o(!1)},400),r(f=>f+180))},[e,t,a]),[n]}const F=({elapsedTime:e,syncTime:a,currentNumber:t,isPlaying:r,volume:n})=>{const f=360/a,x=(50-t)*f,h=8,c=2,m=(t+1)*h,[b]=U(A.get(t)??"",{volume:n}),[v]=X(e,x),[y]=D(v,b),u={height:`${m*2-c*2}px`,width:`${m*2-c*2}px`},g={top:`calc(50% - ${c}px)`,left:`calc(50% - ${c}px)`,width:`${c*2}px`,height:`${c*2}px`,transform:`rotate(${v}deg) translateX(${m-c}px)`,transformOrigin:"50% 50%"};return i.jsx("div",{style:u,className:`absolute inset-0 m-auto rounded-full border transition-all duration-500 ${r&&y?"border-primary dark:border-primary":"border-input dark:border-input"}`,children:i.jsx("div",{style:g,className:"absolute rounded-full bg-primary"})})},H=({handleTogglePlay:e,handleChangeSpeed:a,handleChangeVolume:t,isPlaying:r,syncTime:n})=>i.jsxs("div",{className:"z-10 grid w-52 grid-flow-row grid-cols-5 place-items-center gap-y-1",children:[i.jsx("p",{className:"col-span-1 w-18 place-self-end text-right font-thin",children:"Sync time"}),i.jsx(E,{defaultValue:[600],onValueChange:a,min:100,max:900,step:50,className:"col-span-2 col-start-3 h-2 w-24 cursor-pointer appearance-none rounded-lg bg-destructive text-destructive dark:bg-destructive"}),i.jsx("p",{className:"ml-3 w-16 place-self-start ",children:`${n} sec`}),i.jsx("p",{className:"place-self-end text-right font-thin",children:"Volume"}),i.jsx(M,{className:"col-span-1",size:16}),i.jsx(E,{defaultValue:[.5],onValueChange:t,min:0,max:1,step:.01,className:"col-span-2 h-2 w-24 cursor-pointer appearance-none rounded-lg bg-destructive text-destructive dark:bg-destructive"}),i.jsx(I,{className:"col-span-1",size:16}),i.jsx(L,{onClick:e,className:"col-span-5 mt-3 h-8 w-20 text-lg",children:r?"Pause":"Start"})]}),K=()=>{const[e,a]=d.useState(!1),[t,r]=d.useState(0),[n,o]=d.useState(600),[f,x]=d.useState(.5),h=d.useRef(),c=15,m=21;function b(){a(u=>!u),e?clearInterval(h.current):h.current=setInterval(()=>{r(u=>u+c)},c)}const v=u=>{o(u[0])},y=u=>{x(u[0])};return i.jsxs("div",{className:"flex flex-col items-center gap-4",children:[i.jsx(H,{handleTogglePlay:b,handleChangeSpeed:v,handleChangeVolume:y,isPlaying:e,syncTime:n}),i.jsx("div",{className:"relative h-[336px] w-[336px]",children:[...Array(m)].map((u,g)=>i.jsx(F,{elapsedTime:t,currentNumber:g,isPlaying:e,syncTime:n,volume:f},g))})]})};export{K as default};