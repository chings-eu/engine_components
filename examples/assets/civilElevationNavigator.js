import"./web-ifc-api-Du2rJhcJ.js";import{p as y,C as b,o as S,a as B,d as E,h as k}from"./index-BPLzurvS.js";import{B as A,E as C,b as I,g as M}from"./index-BUF35rMs.js";import{m as x}from"./index-tywNknxv.js";import{r as D}from"./index-BF3DopxS.js";import{S as U}from"./stats.min-BpIepu9J.js";x.init();D.init();const f=document.getElementById("container"),t=new y,z=t.get(b),e=z.create();e.scene=new S(t);e.renderer=new A(t,f);e.camera=new B(t);t.init();e.scene.setup();e.camera.controls.setLookAt(5,5,5,0,0,0);f.appendChild(e.renderer.three2D.domElement);const L=t.get(E);L.create(e);e.scene.three.background=null;const N=t.get(k),P=await fetch("https://thatopen.github.io/engine_components/resources/road.frag"),T=await P.arrayBuffer(),W=new Uint8Array(T),c=N.load(W);e.scene.three.add(c);const i=t.get(C);i.world=e;i.draw(c);const g=document.getElementById("scene-2d-left");g.components=t;if(!g.world)throw new Error("World not found!");const l=new I(t);l.world=g.world;l.draw(c);const a=document.getElementById("scene-2d-right");a.components=t;if(!a.world)throw new Error("World not found!");const s=t.get(M);s.world=a.world;s.draw(c);l.onMarkerChange.add(({alignment:r,percentage:d})=>{s.setMarker(r,d,"hover"),i.setMarker(r,d,"hover")});l.onHighlight.add(({mesh:r,point:d})=>{const{index:v,alignment:h}=r.curve,m=h.getPercentageAt(d,"horizontal");if(m===null)return;const{curve:n}=h.getCurveAt(m,"vertical");if(s.highlighter.select(n.mesh),s.setMarker(n.alignment,m,"select"),a.world){n.mesh.geometry.boundingSphere||n.mesh.geometry.computeBoundingSphere();const w=n.mesh.geometry.boundingSphere.clone();w.radius*=1.5,a.world.camera.controls.fitToSphere(w,!0)}i.highlighter.select(r);const p=r.curve.alignment.absolute[v];p.mesh.geometry.computeBoundingSphere();const u=p.mesh.geometry.boundingSphere;u&&e.camera.controls.fitToSphere(u,!0)});const o=new U;o.showPanel(2);document.body.append(o.dom);o.dom.style.left="0px";o.dom.style.zIndex="unset";e.renderer.onBeforeUpdate.add(()=>o.begin());e.renderer.onAfterUpdate.add(()=>o.end());
