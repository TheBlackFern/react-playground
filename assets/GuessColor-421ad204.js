import{r as a,j as e,B as b}from"./index-9a9909bf.js";const y=()=>{const[u,o]=a.useState(!1),[r,d]=a.useState("#ffffff"),[x,m]=a.useState(["#ffffff","#ffffff","#ffffff"]),[l,h]=a.useState(""),[f,g]=a.useState(""),[j,p]=a.useState(!1),i=()=>{const s=[];for(let t=0;t<3;t++){const c=Math.random().toString(16).substring(2,8);s.push(`#${c.toUpperCase()}`)}const n=s.map(t=>({value:t,sort:Math.random()})).sort((t,c)=>t.sort-c.sort).map(({value:t})=>t);m(n),h(s[0])},v=s=>{p(!0),d(s),g(l),o(s===l),i()};return a.useEffect(()=>{i()},[]),e.jsxs("div",{className:"flex flex-col items-center justify-center gap-3",children:[e.jsx("div",{className:"h-48 w-96 rounded-md",style:{backgroundColor:l}}),e.jsx("div",{className:"flex items-center justify-center gap-2",children:x.map((s,n)=>e.jsx(b,{variant:"outline",className:"w-24 transition duration-300 ease-in-out hover:scale-110",onClick:()=>v(s),children:s},n))}),j&&e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"text-xl font-thin ",children:["Your guessed the"," ",e.jsx("span",{className:"font-bold",style:{color:r},children:u?"correct":"wrong"})," ","hex value!"]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("div",{className:"flex flex-col justify-center",children:[e.jsx("div",{className:"relative flex h-20 w-32 items-center justify-center rounded-lg",style:{background:f},children:e.jsx("span",{className:"absolute right-0 top-0 w-16 rounded-bl-sm bg-background p-1 text-sm",children:f})}),e.jsx("span",{className:"text-center text-base font-light",children:"correct"})]}),e.jsxs("div",{className:"flex flex-col justify-center",children:[e.jsx("div",{className:"relative flex h-20 w-32 items-center justify-center rounded-lg",style:{background:r},children:e.jsx("span",{className:"absolute right-0 top-0 w-16 rounded-bl-sm bg-background p-1 text-sm",children:r})}),e.jsx("span",{className:"text-center text-base font-light",children:"your guess"})]})]})]})]})};export{y as default};
