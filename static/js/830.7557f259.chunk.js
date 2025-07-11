"use strict";(self.webpackChunkmywebby=self.webpackChunkmywebby||[]).push([[830],{830:(e,i,n)=>{n.r(i),n.d(i,{default:()=>W});var o=n(43),t=n(464),r=n(579);const s=t.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease-in-out;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`,a=t.Ay.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  margin: 0 20px;
  overflow: hidden;
  border-radius: 12px;
  background: #000;
  animation: scaleIn 0.3s ease-in-out;
  
  @keyframes scaleIn {
    from { transform: scale(0.9); }
    to { transform: scale(1); }
  }
`,d=t.Ay.img`
  width: 100%;
  display: block;
  object-fit: contain;
`,c=t.Ay.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,p=t.Ay.div`
  padding: 16px;
  color: white;
`,l=t.Ay.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 12px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,h=t.Ay.div`
  flex: 1;
  
  h4 {
    margin: 0;
    color: white;
    font-size: 16px;
  }
  
  span {
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
  }
`,x=t.Ay.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  z-index: 10;
`,g=t.Ay.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 15px;
  bottom: 100px;
  z-index: 5;
`,f=t.Ay.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  
  span {
    font-size: 12px;
    margin-top: 5px;
  }
`,m=t.Ay.div`
  padding: 16px;
  color: white;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  p {
    margin: 0;
    font-size: 14px;
    line-height: 1.5;
  }
  
  .hashtags {
    color: #5c8eff;
    margin-top: 8px;
  }
`;const b=function(e){let{photo:i,profileImage:n,username:o,onClose:t}=e;return(0,r.jsx)(s,{onClick:e=>{e.target===e.currentTarget&&t()},children:(0,r.jsxs)(a,{children:[(0,r.jsx)(x,{onClick:t,children:"\xd7"}),(0,r.jsxs)(c,{children:[(0,r.jsx)(l,{children:(0,r.jsx)("img",{src:n,alt:o})}),(0,r.jsxs)(h,{children:[(0,r.jsx)("h4",{children:o}),(0,r.jsx)("span",{children:"Original audio"})]})]}),(0,r.jsx)(d,{src:i.src,alt:`Photo ${i.id}`}),(0,r.jsxs)(g,{children:[(0,r.jsxs)(f,{children:["\u2764\ufe0f",(0,r.jsxs)("span",{children:[Math.floor(1e3*Math.random())+200,"K"]})]}),(0,r.jsxs)(f,{children:["\ud83d\udcac",(0,r.jsx)("span",{children:Math.floor(300*Math.random())+50})]}),(0,r.jsxs)(f,{children:["\ud83d\udd17",(0,r.jsx)("span",{children:"Share"})]})]}),(0,r.jsxs)(m,{children:[(0,r.jsx)("p",{children:i.caption||"Birthday memories! \ud83c\udf82\u2728"}),(0,r.jsx)("p",{className:"hashtags",children:"#birthday #memories #celebration"})]}),(0,r.jsxs)(p,{children:[i.views," views \u2022 ",i.pinned?"Pinned":"Posted recently"]})]})})},y=t.Ay.div`
  background: #fff;
  color: #161823;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  overflow-x: hidden;
`,u=t.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid #e1e1e2;
`,v=t.Ay.button`
  background: none;
  border: none;
  color: #161823;
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
`,j=t.Ay.div`
  display: flex;
  gap: 16px;
  
  button {
    background: none;
    border: none;
    color: #161823;
    font-size: 24px;
    cursor: pointer;
    padding: 8px;
  }
`,w=t.Ay.div`
  text-align: center;
  padding: 20px 16px;
`,k=t.Ay.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff0050, #00f5ff);
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  img {
    width: 88px;
    height: 88px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #fff;
  }
`,A=t.Ay.h1`
  font-size: 24px;
  font-weight: 700;
  margin: 8px 0 4px;
`,z=t.Ay.p`
  color: #161823;
  font-size: 16px;
  margin: 0 0 20px;
  opacity: 0.75;
`,M=t.Ay.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 20px 0;
`,_=t.Ay.div`
  text-align: center;
  
  .number {
    font-size: 20px;
    font-weight: 700;
    display: block;
  }
  
  .label {
    font-size: 14px;
    color: #161823;
    opacity: 0.75;
    margin-top: 4px;
  }
`,C=t.Ay.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin: 24px 0;
  padding: 0 16px;
`,N=t.Ay.button`
  background: #fe2c55;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  flex: 1;
  max-width: 200px;
  
  &:hover {
    background: #e91e63;
  }
`,K=t.Ay.button`
  background: #f1f1f2;
  color: #161823;
  border: 1px solid #e1e1e2;
  padding: 12px 16px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    background: #e1e1e2;
  }
`,I=t.Ay.div`
  text-align: center;
  padding: 0 16px;
  margin: 16px 0;
  
  .location {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 8px;
    color: #161823;
    opacity: 0.75;
  }
  
  .description {
    font-size: 16px;
    line-height: 1.4;
  }
`,S=t.Ay.div`
  display: flex;
  border-bottom: 1px solid #e1e1e2;
  margin-top: 24px;
`,$=t.Ay.button`
  background: none;
  border: none;
  color: ${e=>(e.active,"#161823")};
  opacity: ${e=>e.active?"1":"0.5"};
  padding: 16px;
  font-size: 16px;
  cursor: pointer;
  flex: 1;
  border-bottom: ${e=>e.active?"2px solid #161823":"none"};
  
  &:hover {
    opacity: 1;
  }
`,F=t.Ay.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  padding: 2px;
`,D=t.Ay.div`
  aspect-ratio: 9/16;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .overlay {
    position: absolute;
    bottom: 8px;
    left: 20px;
    display: flex;
    align-items: center;
    gap: 4px;
    color: white;
    font-size: 13px;
    font-weight: 700;
    text-shadow: 0 2px 4px rgba(0,0,0,0.9);
    background: rgba(0, 0, 0, 0.5);
    padding: 4px 6px;
    border-radius: 4px;
    backdrop-filter: blur(2px);
    z-index: 2;
    opacity: 1;
    visibility: visible;
    pointer-events: none;
  }
  
  .pinned {
    position: absolute;
    top: 8px;
    left: 8px;
    background: #fe2c55;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
  }
`,P=t.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
  overflow: hidden;
`,B=t.Ay.div`
  position: absolute;
  font-size: 28px;
  animation: confettiFall 6s linear forwards;
  
  @keyframes confettiFall {
    0% {
      transform: translateY(-100vh) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateY(100vh) rotate(1080deg);
      opacity: 0;
    }
  }
`;const W=function(){const[e,i]=(0,o.useState)("videos"),[n,t]=(0,o.useState)(!1),[s,a]=(0,o.useState)(null),[d,c]=(0,o.useState)(""),p=()=>{t(!0),setTimeout(()=>t(!1),8e3)};(0,o.useEffect)(()=>{p();const e=new Date("1999-06-15"),i=new Date,n=Math.abs(i-e),o=Math.ceil(n/864e5);c(o.toLocaleString())},[]);const l={videos:[{id:1,src:"/img/birthday/business_class.mp4",views:"2.1M",pinned:!0},{id:2,src:"/img/birthday/run_fuji.mp4",views:"1.8M",pinned:!0},{id:3,src:"/img/birthday/half_marathon.mp4",views:"956K",pinned:!0}],food:[{id:7,src:"/img/magazine/manten.jpg",views:"1.2M",pinned:!0},{id:8,src:"/img/birthday/food/curry_rice.jpg",views:"987K",pinned:!0},{id:9,src:"/img/magazine/cremia_2.jpg",views:"987K",pinned:!0},{id:10,src:"/img/birthday/food/uni_omak1.jpg",views:"756K"},{id:11,src:"/img/birthday/food/plane_duck.jpg",views:"645K"},{id:12,src:"/img/birthday/food/claypot.jpg",views:"523K"},{id:13,src:"/img/birthday/food/yoshi.jpg",views:"412K"},{id:14,src:"/img/birthday/food/udon.jpg",views:"412K"}],favourites:[{id:15,src:"/img/birthday/faves/conch_dragonfruit.jpg",views:"3.2M",pinned:!0},{id:16,src:"/img/birthday/faves/conch_jumbo.jpg",views:"2.8M",pinned:!0},{id:17,src:"/img/birthday/faves/conch_ogino.jpg",views:"2.1M",pinned:!0},{id:18,src:"/img/birthday/faves/conch_pizza.jpg",views:"1.9M"},{id:19,src:"/img/birthday/faves/conch_cremia.jpg",views:"1.5M"},{id:20,src:"/img/birthday/faves/conch_strawberry.jpg",views:"1.2M"}]},h=l[e]||l.videos;return(0,r.jsxs)(y,{children:[n&&(0,r.jsx)(P,{children:(()=>{const e=["\ud83e\udd3e\u200d\u2640\ufe0f\ud83e\udd52\ud83c\udfd3","\ud83c\udfc3\u200d\u2640\ufe0f","\ud83d\uddfb","\u26e9\ufe0f","\ud83c\udf89","\ud83c\udf2f","\ud83c\udf71","\ud83c\udf5c","\ud83c\udf72","\ud83c\udf82"],i=[];for(let n=0;n<100;n++){const o=e[Math.floor(Math.random()*e.length)],t=100*Math.random(),s=4*Math.random(),a=4+4*Math.random();i.push((0,r.jsx)(B,{style:{left:`${t}%`,animationDelay:`${s}s`,animationDuration:`${a}s`},children:o},n))}return i})()}),s&&(0,r.jsx)(b,{photo:s,profileImage:"/img/birthday/conch.jpeg",username:"@itsconch",onClose:()=>a(null)}),(0,r.jsxs)(u,{children:[(0,r.jsx)(v,{children:"\u2190"}),(0,r.jsxs)(j,{children:[(0,r.jsx)("button",{children:"\ud83d\udd14"}),(0,r.jsx)("button",{children:"\u2197"})]})]}),(0,r.jsxs)(w,{children:[(0,r.jsx)(k,{children:(0,r.jsx)("img",{src:"/img/birthday/conch.jpeg",alt:"Profile"})}),(0,r.jsx)(A,{children:"Happy Birthday! \ud83c\udf89"}),(0,r.jsx)(z,{children:"@itsconch"}),(0,r.jsxs)(M,{children:[(0,r.jsxs)(_,{children:[(0,r.jsx)("span",{className:"number",children:d}),(0,r.jsx)("div",{className:"label",children:"Days Old"})]}),(0,r.jsxs)(_,{children:[(0,r.jsx)("span",{className:"number",children:"300+"}),(0,r.jsx)("div",{className:"label",children:"Kilometers Run This Year"})]}),(0,r.jsxs)(_,{children:[(0,r.jsx)("span",{className:"number",children:"1"}),(0,r.jsx)("div",{className:"label",children:"Amazing You"})]})]}),(0,r.jsxs)(C,{children:[(0,r.jsx)(N,{onClick:p,children:"\ud83d\udc95 Happy Birthday!"}),(0,r.jsx)(K,{children:"\ud83c\udf82"})]}),(0,r.jsxs)(I,{children:[(0,r.jsx)("div",{className:"location",children:"\ud83c\udf0e\ud83e\udd38\ud83c\udffb\u200d\u2640\ufe0f\ud83c\udf75\ud83c\udf70\ud83e\udd3e\u200d\u2640\ufe0f\ud83e\udd52\ud83c\udfd3"}),(0,r.jsxs)("div",{className:"description",children:["toronto but really markham",(0,r.jsx)("br",{}),"just a lazy 26 year old gal tryna hack life\u2728"]})]})]}),(0,r.jsxs)(S,{children:[(0,r.jsx)($,{active:"videos"===e,onClick:()=>i("videos"),children:"\ud83d\udc10 Goat Moments"}),(0,r.jsx)($,{active:"food"===e,onClick:()=>i("food"),children:"\ud83c\udf73 Favourite Foods"}),(0,r.jsx)($,{active:"favourites"===e,onClick:()=>i("favourites"),children:"\ud83d\udc6c My Favorites"})]}),(0,r.jsx)(F,{children:h.map(e=>{const i=e.src&&(e.src.endsWith(".mp4")||e.src.endsWith(".mov")||e.src.endsWith(".webm")||e.src.endsWith(".avi"));return(0,r.jsxs)(D,{onClick:()=>a(e),children:[i?(0,r.jsx)("video",{src:e.src,muted:!0,loop:!0,playsInline:!0,onMouseEnter:e=>e.target.play(),onMouseLeave:e=>e.target.pause(),style:{width:"100%",height:"100%",objectFit:"cover"}}):(0,r.jsx)("img",{src:e.src,alt:`Memory ${e.id}`}),e.pinned&&(0,r.jsx)("div",{className:"pinned",children:"Pinned"}),(0,r.jsxs)("div",{className:"overlay",children:["\u25b6 ",e.views]})]},e.id)})})]})}}}]);
//# sourceMappingURL=830.7557f259.chunk.js.map