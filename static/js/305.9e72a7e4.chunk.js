"use strict";(self.webpackChunkmywebby=self.webpackChunkmywebby||[]).push([[305],{305:(e,t,i)=>{i.r(t),i.d(t,{default:()=>D});var o=i(43),n=i(464),a=i(579);const r=n.Ay.div`
  background: linear-gradient(135deg, #f5f3f0 0%, #e8e2db 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: 'Playfair Display', 'Georgia', serif;
`,s=n.Ay.div`
  position: relative;
  width: 100%;
  max-width: ${e=>e.isCover?"600px":"1200px"};
  height: 800px;
  background: white;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  transition: max-width 0.5s ease;
`,d=n.Ay.div`
  width: ${e=>e.isCover?"100%":"50%"};
  height: 100%;
  position: relative;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  transform-origin: ${e=>e.isLeft?"right center":"left center"};
  
  ${e=>e.isFlipping&&`\n    transform: ${e.isLeft?"rotateY(-180deg)":"rotateY(180deg)"};\n  `}
`,l=n.Ay.div`
  width: 100%;
  height: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  position: relative;
  background: ${e=>e.background||"white"};
  
  &.cover {
    background-image: url('img/magazine/fuji_landscape.jpg');
    background-size: cover;
    background-position: center;
    color: white;
    padding: 0;
    position: relative;
    overflow: hidden;
    display: block;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(180deg, 
        rgba(0,0,0,0.4) 0%, 
        rgba(0,0,0,0.1) 30%, 
        rgba(0,0,0,0.1) 70%, 
        rgba(0,0,0,0.6) 100%);
      z-index: 1;
    }
    
    & > * {
      position: relative;
      z-index: 2;
    }
  }
  
  &.contents {
    background: linear-gradient(135deg, #fff8f0 0%, #f5f0e8 100%);
    border-left: 4px solid #d4af37;
  }
`,g=n.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(180deg, rgba(0,0,0,0.8) 0%, transparent 100%);
`,c=n.Ay.h1`
  font-size: 2.5rem;
  font-weight: 900;
  margin: 0;
  color: #FFD700;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
  letter-spacing: 3px;
`,p=n.Ay.div`
  text-align: right;
  font-size: 0.9rem;
  color: white;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
  
  .price { font-weight: bold; font-size: 1.1rem; }
  .date { opacity: 0.9; }
`,x=n.Ay.h1`
  position: absolute;
  top: 25%;
  left: 50%;
  width: 60%;
  font-size: 3.2rem;
  font-weight: 900;
  margin: 0;
  text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.9);
  letter-spacing: 2px;
  color: white;
  line-height: 0.85;
  transform: translate(-50%, -50%);
  text-align: center;
`,h=n.Ay.div`
  position: absolute;
  top: 40%;
  left: 50%;
  width: 60%;
  background: rgba(255, 215, 0, 0.95);
  color: #1a1a1a;
  padding: 10px 14px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  line-height: 1.2;
  transform: translateX(-50%);
  text-align: center;
`,m=n.Ay.div`
  position: absolute;
  right: -5px;
  top: 10%;
  bottom: 30%;
  width: 130px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
  
  .story {
    background: rgba(0,0,0,0.85);
    color: white;
    padding: 6px 8px;
    border-left: 3px solid #FFD700;
    font-size: 0.7rem;
    line-height: 1.2;
    border-radius: 2px;
    flex-shrink: 0;
    
    .title {
      font-weight: bold;
      text-transform: uppercase;
      font-size: 0.65rem;
      color: #FFD700;
      margin-bottom: 2px;
      letter-spacing: 0.5px;
    }
  }
`,b=n.Ay.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px 30px;
  background: linear-gradient(0deg, rgba(0,0,0,0.9) 0%, transparent 100%);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`,f=n.Ay.div`
  background: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  color: black;
  
  .bars {
    height: 30px;
    background: repeating-linear-gradient(
      90deg,
      black 0px,
      black 2px,
      white 2px,
      white 4px
    );
    margin-bottom: 5px;
  }
`,u=n.Ay.div`
  color: white;
  font-size: 0.8rem;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
  
  .website {
    font-weight: bold;
    color: #FFD700;
  }
`,y=(n.Ay.div`
  font-size: 1.1rem;
  margin-top: 50px;
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: rgba(0, 0, 0, 0.3);
  padding: 15px 30px;
  border-radius: 25px;
  border: 1px solid rgba(255, 215, 0, 0.3);
`,n.Ay.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 40px;
  text-align: center;
`),v=n.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(102, 126, 234, 0.1);
    padding-left: 10px;
  }
  
  .title {
    font-size: 1.2rem;
    color: #333;
  }
  
  .page {
    font-size: 1rem;
    color: #666;
    font-weight: bold;
  }
`,j=n.Ay.div`
  display: flex;
  height: 100%;
  
  .left-page {
    width: 50%;
    padding: 60px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(135deg, #fff 0%, #f8f5f0 100%);
    border-right: 3px solid #d4af37;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 20px;
      left: 20px;
      width: 60px;
      height: 4px;
      background: linear-gradient(90deg, #d4af37, #ff6347);
    }
  }
  
  .right-page {
    width: 50%;
    background-size: cover;
    background-position: center;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, rgba(0,0,0,0.2), transparent 70%);
    }
  }
`,w=n.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 100%;
  gap: 2px;
  
  .main-photo {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    background-size: cover;
    background-position: center;
    position: relative;
    
    .overlay-text {
      position: absolute;
      bottom: 40px;
      left: 40px;
      right: 40px;
      background: rgba(0, 0, 0, 0.8);
      padding: 30px;
      border-radius: 10px;
      color: white;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 215, 0, 0.3);
    }
  }
  
  .side-photo {
    background-size: cover;
    background-position: center;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(212, 175, 55, 0.2), transparent);
    }
  }
`,k=n.Ay.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  
  .top-section {
    height: 60%;
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    align-items: flex-end;
    
    .title-overlay {
      width: 100%;
      background: linear-gradient(transparent, rgba(0,0,0,0.8));
      padding: 60px 40px 40px;
      color: white;
    }
  }
  
  .bottom-section {
    height: 40%;
    padding: 40px;
    background: linear-gradient(135deg, #2c1810 0%, #1a1a1a 100%);
    color: white;
    display: flex;
    align-items: center;
    position: relative;
    
    &::before {
      content: '☆';
      position: absolute;
      top: 20px;
      right: 40px;
      font-size: 2rem;
      color: rgba(255, 215, 0, 0.6);
    }
  }
`,z=n.Ay.h1`
  font-size: 3.5rem;
  color: #2c1810;
  margin-bottom: 25px;
  line-height: 1.1;
  font-weight: 800;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #d4af37, #ff6347);
  }
`,A=n.Ay.h1`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 15px;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`,N=n.Ay.h1`
  font-size: 4rem;
  color: white;
  margin-bottom: 20px;
  font-weight: 900;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
  letter-spacing: 2px;
`,F=n.Ay.p`
  font-size: 1.2rem;
  line-height: 1.9;
  color: #4a4a4a;
  margin-bottom: 25px;
  font-weight: 400;
  text-align: justify;
`,C=n.Ay.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 15px;
`,I=n.Ay.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 20px;
  font-style: italic;
`,T=n.Ay.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 20px;
  z-index: 100;
`,$=n.Ay.button`
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,_=n.Ay.div`
  position: absolute;
  top: 30px;
  right: 30px;
  background: rgba(0, 0, 0, 0.1);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 12px;
  color: #666;
`;const D=function(){const[e,t]=(0,o.useState)(0),[i,n]=(0,o.useState)(!1),D=[{id:"cover",type:"cover",content:{title:"JAPAN",subtitle:"Conch and Danny take on Japan",date:"Winter 2024 \u2022 A Digital Memory"}},{id:"contents",type:"contents",content:{items:[{title:"Tokyo Nights",page:"04"},{title:"Kyoto Temples",page:"08"},{title:"Mount Fuji Journey",page:"12"},{title:"Food Adventures",page:"16"},{title:"Cherry Blossoms",page:"20"},{title:"Our Favorite Moments",page:"24"}]}},{id:"tokyo",type:"feature",layout:"classic",content:{title:"Tokyo Coffee",text:"Coffee baby, some much to say.",image:"/img/magazine/kizasu.jpg"}},{id:"kyoto",type:"feature",layout:"grid",content:{title:"Kyoto River thang",text:"Bamboo, monkey, green tea ice cream, lakeside Kyoto.",mainImage:"/img/magazine/monkey.jpg",sideImages:["/img/magazine/kyoto_greentea_icecream.jpg","/img/magazine/lakeside_kyoto.jpg"]}},{id:"fuji",type:"feature",layout:"vertical",content:{title:"Mount Fuji",text:"Standing before the majestic Mount Fuji, we were reminded of the beauty that exists when patience and persistence come together - much like our journey together. This sacred mountain witnessed our promises and dreams.",image:"/img/magazine/OGINO.jpg"}},{id:"food",type:"feature",layout:"grid",content:{title:"Cremia Adventure",text:"From street-side ramen to elegant kaiseki dining, every meal was an adventure. We discovered flavors that danced on our tongues and created memories around every table we shared.",mainImage:"/img/magazine/cremia_1.jpg",sideImages:["/img/magazine/cremia_2.jpg","/img/magazine/cremia_3.jpg"]}},{id:"moments",type:"feature",layout:"grid",content:{title:"Hiroshima",text:"The little things that made this trip extraordinary - your laughter echoing through train stations, quiet moments watching cherry blossoms fall, and the way you looked at everything with wonder.",mainImage:"/img/magazine/hiroshima_1.jpg",sideImages:["/img/magazine/hiroshima_2.jpg","/img/magazine/hiroshima_3.jpg"]}}],P=i=>{var o;switch(i.type){case"cover":return(0,a.jsxs)(l,{className:"cover",children:[(0,a.jsxs)(g,{children:[(0,a.jsx)(c,{children:"EXPLORE"}),(0,a.jsx)(p,{children:(0,a.jsx)("div",{className:"date",children:"WINTER 2025"})})]}),(0,a.jsxs)(x,{children:["JAPAN",(0,a.jsx)("br",{}),"ADVENTURE"]}),(0,a.jsx)(h,{children:"HEHE"}),(0,a.jsxs)(m,{children:[(0,a.jsxs)("div",{className:"story",children:[(0,a.jsx)("div",{className:"title",children:"Tokyo Nights"}),"Neon-lit adventures in the world's busiest city"]}),(0,a.jsxs)("div",{className:"story",children:[(0,a.jsx)("div",{className:"title",children:"Mount Fuji"}),"Breathtaking views and spiritual moments"]}),(0,a.jsxs)("div",{className:"story",children:[(0,a.jsx)("div",{className:"title",children:"Food Journey"}),"From street ramen to Michelin stars"]}),(0,a.jsxs)("div",{className:"story",children:[(0,a.jsx)("div",{className:"title",children:"Cherry Blossoms"}),"Perfect timing for sakura season"]})]}),(0,a.jsxs)(b,{children:[(0,a.jsxs)(f,{children:[(0,a.jsx)("div",{className:"bars"}),"9 781234 567890"]}),(0,a.jsxs)(u,{children:[(0,a.jsx)("div",{className:"website",children:"Connie & Danny"}),(0,a.jsx)("div",{children:"Japan Travels"})]})]})]});case"contents":return(0,a.jsxs)(l,{className:"contents",children:[(0,a.jsx)(y,{children:"Contents"}),i.content.items.map((i,o)=>(0,a.jsxs)(v,{onClick:()=>(i=>{i!==e&&(n(!0),setTimeout(()=>{t(i),n(!1)},300))})(o+2),children:[(0,a.jsx)("span",{className:"title",children:i.title}),(0,a.jsx)("span",{className:"page",children:i.page})]},o))]});case"feature":switch(i.layout){case"classic":default:return(0,a.jsxs)(j,{children:[(0,a.jsxs)("div",{className:"left-page",children:[(0,a.jsx)(z,{children:i.content.title}),(0,a.jsx)(F,{children:i.content.text})]}),(0,a.jsx)("div",{className:"right-page",style:{backgroundImage:`url(${i.content.image})`}})]});case"grid":return(0,a.jsxs)(w,{children:[(0,a.jsx)("div",{className:"main-photo",style:{backgroundImage:`url(${i.content.mainImage})`},children:(0,a.jsxs)("div",{className:"overlay-text",children:[(0,a.jsx)(A,{children:i.content.title}),(0,a.jsx)(C,{children:i.content.text})]})}),null===(o=i.content.sideImages)||void 0===o?void 0:o.map((e,t)=>(0,a.jsx)("div",{className:"side-photo",style:{backgroundImage:`url(${e})`}},t))]});case"vertical":return(0,a.jsxs)(k,{children:[(0,a.jsx)("div",{className:"top-section",style:{backgroundImage:`url(${i.content.image})`},children:(0,a.jsx)("div",{className:"title-overlay",children:(0,a.jsx)(N,{children:i.content.title})})}),(0,a.jsx)("div",{className:"bottom-section",children:(0,a.jsx)(I,{children:i.content.text})})]})}default:return(0,a.jsx)(l,{children:"Page content"})}},E=0===e,M=D[e];return(0,a.jsx)(r,{children:(0,a.jsxs)(s,{isCover:E,children:[E?(0,a.jsx)(d,{isCover:!0,children:P(M)}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d,{isLeft:!0,isFlipping:i,children:P(M)}),(0,a.jsx)(d,{isLeft:!1,isFlipping:i,children:(0,a.jsx)(l,{children:(0,a.jsx)("div",{style:{padding:"40px",display:"flex",alignItems:"center",justifyContent:"center",height:"100%",fontSize:"1.2rem",color:"#666"},children:M.rightPageContent||"Additional content or images can go here"})})})]}),(0,a.jsxs)(_,{children:[e+1," / ",D.length]}),(0,a.jsxs)(T,{children:[(0,a.jsx)($,{onClick:()=>{e>0&&(n(!0),setTimeout(()=>{t(e-1),n(!1)},300))},disabled:0===e,children:"\u2190 Previous"}),(0,a.jsx)($,{onClick:()=>{e<D.length-1&&(n(!0),setTimeout(()=>{t(e+1),n(!1)},300))},disabled:e===D.length-1,children:"Next \u2192"})]})]})})}}}]);
//# sourceMappingURL=305.9e72a7e4.chunk.js.map