const x = document.querySelector('.popin1');
const y = document.querySelector('.popin2');
const w = document.querySelector('.popin3');
const z = document.querySelector('.popin4');

const a = document.querySelector('.spopin11');
const b = document.querySelector('.spopin12');
const c = document.querySelector('.spopin21');
const d = document.querySelector('.spopin22');

const e = document.querySelector('.hbt1');
const f = document.querySelector('.hbt2');
const g = document.querySelector('.hbt3');
const h = document.querySelector('.hbt4');

const k = document.querySelector('.sbt1');
const l = document.querySelector('.sbt2');
const m = document.querySelector('.sbt3');
const n = document.querySelector('.sbt4');

const i = document.querySelector('.user');
const j = document.querySelector('.usera');

const v = document.querySelector('.plogo');
const u = document.querySelector('.plogoa');

const o = document.querySelector('.search-phone');
const p = document.querySelector('.searchbar-phone');

o.addEventListener('click', ()=>{
   if (p.classList.contains('searchbar-phone')) {
      p.classList.remove('searchbar-phone');
      p.classList.add('searchbar-phone1');
   } else if (p.classList.contains('searchbar-phone1')) {
      p.classList.remove('searchbar-phone1');
      p.classList.add('searchbar-phone');
   }
})

function clk (cls1, cls11, cls2, cls22, cls3, cls33, cls4, cls44, v1, v2, v3, v4) {
   if (v1.classList.contains(cls1)) {
      v1.classList.remove(cls1);
      v1.classList.add(cls11);
      v2.classList.remove(cls22);
      v2.classList.add(cls2);
      v3.classList.remove(cls33);
      v3.classList.add(cls3);
      v4.classList.remove(cls44);
      v4.classList.add(cls4);
   } else if (v1.classList.contains(cls11)) {
      v1.classList.remove(cls11);
      v1.classList.add(cls1);
   }
}

function clk2 (cl1, cl2, cl3, cl4, x1, x2) {
   if (x1.classList.contains(cl1)) {
      x1.classList.remove(cl1);
      x1.classList.add(cl2);
      x2.classList.remove(cl3);
      x2.classList.add(cl4);
   } else if (x1.classList.contains(cl2)) {
      x1.classList.remove(cl2);
      x1.classList.add(cl1);
   }
}

i.addEventListener('click', () => {
   clk2('plogo', 'plogo2', 'plogoa', 'plogoa2', v, u);
   box.classList.add('cbox');
   box.classList.remove('box');

   x.classList.add('popin1');
   x.classList.remove('popup1');
   y.classList.add('popin2');
   y.classList.remove('popup2');
   w.classList.add('popin3');
   w.classList.remove('popup3');
   z.classList.add('popin4');
   z.classList.remove('popup4');

   e.classList.add('hbt1');
   e.classList.remove('hbt12');
   f.classList.add('hbt2');
   f.classList.remove('hbt22');
   g.classList.add('hbt3');
   g.classList.remove('hbt32');
   h.classList.add('hbt4');
   h.classList.remove('hbt42');

   a.classList.add('spopin11');
   a.classList.remove('spopup11');
   b.classList.add('spopin12');
   b.classList.remove('spopup12');
   c.classList.add('spopin21');
   c.classList.remove('spopup21');
   d.classList.add('spopup22');
   d.classList.remove('spopup22');

   k.classList.add('sbt1');
   k.classList.remove('sbt12');
   l.classList.add('sbt2');
   l.classList.remove('sbt22');
   m.classList.add('sbt3');
   m.classList.remove('sbt32');
   n.classList.add('sbt4');
   n.classList.remove('sbt42');

   co.innerHTML = '';
   co.innerHTML = '<img src="calculator.png" class="arrowu">';
   setTimeout(() => {
      cx.innerHTML = '';
       ca.value = '';
       cb.value = '';
       cc.value = '';
       cx.classList.remove('error');
       cx.classList.add('kcl');
      }, 1000);
})

j.addEventListener('click', () => {
   clk2('plogoa2', 'plogoa', 'plogo', 'plogo2', u, v);
   box.classList.add('cbox');
   box.classList.remove('box');

   x.classList.add('popin1');
   x.classList.remove('popup1');
   y.classList.add('popin2');
   y.classList.remove('popup2');
   w.classList.add('popin3');
   w.classList.remove('popup3');
   z.classList.add('popin4');
   z.classList.remove('popup4');

   e.classList.add('hbt1');
   e.classList.remove('hbt12');
   f.classList.add('hbt2');
   f.classList.remove('hbt22');
   g.classList.add('hbt3');
   g.classList.remove('hbt32');
   h.classList.add('hbt4');
   h.classList.remove('hbt42');

   a.classList.add('spopin11');
   a.classList.remove('spopup11');
   b.classList.add('spopin12');
   b.classList.remove('spopup12');
   c.classList.add('spopin21');
   c.classList.remove('spopup21');
   d.classList.add('spopup22');
   d.classList.remove('spopup22');

   k.classList.add('sbt1');
   k.classList.remove('sbt12');
   l.classList.add('sbt2');
   l.classList.remove('sbt22');
   m.classList.add('sbt3');
   m.classList.remove('sbt32');
   n.classList.add('sbt4');
   n.classList.remove('sbt42');

   co.innerHTML = '';
   co.innerHTML = '<img src="calculator.png" class="arrowu">';
   setTimeout(() => {
      cx.innerHTML = '';
       ca.value = '';
       cb.value = '';
       cc.value = '';
       cx.classList.remove('error');
       cx.classList.add('kcl');
      }, 1000);
})

e.addEventListener('click', () => {
   clk('popin1', 'popup1', 'popin2', 'popup2', 'popin3', 'popup3', 'popin4','popup4', x, y, w, z); 
   clk('hbt1', 'hbt12', 'hbt2', 'hbt22', 'hbt3', 'hbt32', 'hbt4', 'hbt42', e, f, g, h);

   clk ('spopin11', 'spopup11', 'spopin12', 'spopup12', 'spopin21', 'spopup21', 'spopin22','spopup22', a, b, c, d);
   clk('sbt1', 'sbt12', 'sbt2', 'sbt22', 'sbt3', 'sbt32', 'sbt4', 'sbt42', k, l, m, n);
   box.classList.add('cbox');
   box.classList.remove('box');

   u.classList.add('plogoa');
   u.classList.remove('plogoa2');
   v.classList.add('plogo');
   v.classList.remove('plogo2');

   co.innerHTML = '';
   co.innerHTML = '<img src="calculator.png" class="arrowu">';
   setTimeout(() => {
      cx.innerHTML = '';
       ca.value = '';
       cb.value = '';
       cc.value = '';
       cx.classList.remove('error');
       cx.classList.add('kcl');
      }, 1000);
})

f.addEventListener('click', () => {
   clk('popin2', 'popup2', 'popin1', 'popup1', 'popin3', 'popup3', 'popin4','popup4', y, x, w, z); 
   clk('hbt2', 'hbt22', 'hbt1', 'hbt12', 'hbt3', 'hbt32', 'hbt4', 'hbt42', f, e, g, h);

   clk ('spopin12', 'spopup12', 'spopin11', 'spopup11', 'spopin21', 'spopup21', 'spopin22','spopup22', b, a, c, d);
   clk('sbt2', 'sbt22', 'sbt1', 'sbt12', 'sbt3', 'sbt32', 'sbt4', 'sbt42', l, k, m, n);
   box.classList.add('cbox');
   box.classList.remove('box');

   u.classList.add('plogoa');
   u.classList.remove('plogoa2');
   v.classList.add('plogo');
   v.classList.remove('plogo2');

   co.innerHTML = '';
   co.innerHTML = '<img src="calculator.png" class="arrowu">';
   setTimeout(() => {
      cx.innerHTML = '';
       ca.value = '';
       cb.value = '';
       cc.value = '';
       cx.classList.remove('error');
       cx.classList.add('kcl');
      }, 1000);
})

g.addEventListener('click', () => {
   clk('popin3', 'popup3', 'popin2', 'popup2', 'popin1', 'popup1', 'popin4','popup4', w, y, x, z); 
   clk('hbt3', 'hbt32', 'hbt2', 'hbt22', 'hbt1', 'hbt12', 'hbt4', 'hbt42', g, f, e, h);

   clk ('spopin21', 'spopup21', 'spopin12', 'spopup12', 'spopin11', 'spopup11', 'spopin22','spopup22', c, b, a, d);
   clk('sbt3', 'sbt32', 'sbt2', 'sbt22', 'sbt1', 'sbt12', 'sbt4', 'sbt42', m, l, k, n);
   box.classList.add('cbox');
   box.classList.remove('box');

   u.classList.add('plogoa');
   u.classList.remove('plogoa2');
   v.classList.add('plogo');
   v.classList.remove('plogo2');

   co.innerHTML = '';
   co.innerHTML = '<img src="calculator.png" class="arrowu">';

   setTimeout(() => {
      cx.innerHTML = '';
       ca.value = '';
       cb.value = '';
       cc.value = '';
       cx.classList.remove('error');
       cx.classList.add('kcl');
      }, 1000);
})

h.addEventListener('click', () => {
   clk('popin4', 'popup4', 'popin2', 'popup2', 'popin3', 'popup3', 'popin1','popup1', z, y, w, x); 
   clk('hbt4', 'hbt42', 'hbt2', 'hbt22', 'hbt3', 'hbt32', 'hbt1', 'hbt12', h, f, g, e);

   clk ('spopin22', 'spopup22', 'spopin12', 'spopup12', 'spopin21', 'spopup21', 'spopin11','spopup11', d, b, c, a);
   clk('sbt4', 'sbt42', 'sbt2', 'sbt22', 'sbt3', 'sbt32', 'sbt1', 'sbt12', n, l, m, k);
   box.classList.add('cbox');
   box.classList.remove('box');

   u.classList.add('plogoa');
   u.classList.remove('plogoa2');
   v.classList.add('plogo');
   v.classList.remove('plogo2');

   co.innerHTML = '';
   co.innerHTML = '<img src="calculator.png" class="arrowu">';

   setTimeout(() => {
      cx.innerHTML = '';
       ca.value = '';
       cb.value = '';
       cc.value = '';
       cx.classList.remove('error');
       cx.classList.add('kcl');
      }, 1000);
})

k.addEventListener('click', () => {
   clk ('spopin11', 'spopup11', 'spopin12', 'spopup12', 'spopin21', 'spopup21', 'spopin22','spopup22', a, b, c, d);
   clk('sbt1', 'sbt12', 'sbt2', 'sbt22', 'sbt3', 'sbt32', 'sbt4', 'sbt42', k, l, m, n);

   clk('popin1', 'popup1', 'popin2', 'popup2', 'popin3', 'popup3', 'popin4','popup4', x, y, w, z); 
   clk('hbt1', 'hbt12', 'hbt2', 'hbt22', 'hbt3', 'hbt32', 'hbt4', 'hbt42', e, f, g, h);

   box.classList.add('cbox');
   box.classList.remove('box');

   u.classList.add('plogoa');
   u.classList.remove('plogoa2');
   v.classList.add('plogo');
   v.classList.remove('plogo2');

   co.innerHTML = '';
   co.innerHTML = '<img src="calculator.png" class="arrowu">';

   setTimeout(() => {
      cx.innerHTML = '';
       ca.value = '';
       cb.value = '';
       cc.value = '';
       cx.classList.remove('error');
       cx.classList.add('kcl');
      }, 1000);
})

l.addEventListener('click', () => {
   clk ('spopin12', 'spopup12', 'spopin11', 'spopup11', 'spopin21', 'spopup21', 'spopin22','spopup22', b, a, c, d);
   clk('sbt2', 'sbt22', 'sbt1', 'sbt12', 'sbt3', 'sbt32', 'sbt4', 'sbt42', l, k, m, n);

   clk('popin2', 'popup2', 'popin1', 'popup1', 'popin3', 'popup3', 'popin4','popup4', y, x, w, z); 
   clk('hbt2', 'hbt22', 'hbt1', 'hbt12', 'hbt3', 'hbt32', 'hbt4', 'hbt42', f, e, g, h);
   box.classList.add('cbox');
   box.classList.remove('box');

   u.classList.add('plogoa');
   u.classList.remove('plogoa2');
   v.classList.add('plogo');
   v.classList.remove('plogo2');

   co.innerHTML = '';
   co.innerHTML = '<img src="calculator.png" class="arrowu">';

   setTimeout(() => {
      cx.innerHTML = '';
       ca.value = '';
       cb.value = '';
       cc.value = '';
       cx.classList.remove('error');
       cx.classList.add('kcl');
      }, 1000);
})

m.addEventListener('click', () => {
   clk ('spopin21', 'spopup21', 'spopin12', 'spopup12', 'spopin11', 'spopup11', 'spopin22','spopup22', c, b, a, d);
   clk('sbt3', 'sbt32', 'sbt2', 'sbt22', 'sbt1', 'sbt12', 'sbt4', 'sbt42', m, l, k, n);

   clk('popin3', 'popup3', 'popin2', 'popup2', 'popin1', 'popup1', 'popin4','popup4', w, y, x, z); 
   clk('hbt3', 'hbt32', 'hbt2', 'hbt22', 'hbt1', 'hbt12', 'hbt4', 'hbt42', g, f, e, h);
   box.classList.add('cbox');
   box.classList.remove('box');

   u.classList.add('plogoa');
   u.classList.remove('plogoa2');
   v.classList.add('plogo');
   v.classList.remove('plogo2');

   co.innerHTML = '';
   co.innerHTML = '<img src="calculator.png" class="arrowu">';

   setTimeout(() => {
      cx.innerHTML = '';
       ca.value = '';
       cb.value = '';
       cc.value = '';
       cx.classList.remove('error');
       cx.classList.add('kcl');
      }, 1000);
})

n.addEventListener('click', () => {
   clk ('spopin22', 'spopup22', 'spopin12', 'spopup12', 'spopin21', 'spopup21', 'spopin11','spopup11', d, b, c, a);
   clk('sbt4', 'sbt42', 'sbt2', 'sbt22', 'sbt3', 'sbt32', 'sbt1', 'sbt12', n, l, m, k);

   clk('popin4', 'popup4', 'popin2', 'popup2', 'popin3', 'popup3', 'popin1','popup1', z, y, w, x); 
   clk('hbt4', 'hbt42', 'hbt2', 'hbt22', 'hbt3', 'hbt32', 'hbt1', 'hbt12', h, f, g, e);
   box.classList.add('cbox');
   box.classList.remove('box');

   u.classList.add('plogoa');
   u.classList.remove('plogoa2');
   v.classList.add('plogo');
   v.classList.remove('plogo2');

   co.innerHTML = '';
   co.innerHTML = '<img src="calculator.png" class="arrowu">';

   setTimeout(() => {
      cx.innerHTML = '';
       ca.value = '';
       cb.value = '';
       cc.value = '';
       cx.classList.remove('error');
       cx.classList.add('kcl');
      }, 1000);
})