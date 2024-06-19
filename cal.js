let kcl = 0;
const ca = document.querySelector('.age');
const cb = document.querySelector('.weight');
const cc = document.querySelector('.height');
const cd = document.querySelector('.coe');
const ce = document.querySelector('.gender');
let cx = document.querySelector('.kcl');
const cy = document.querySelector('.bt1');
const cw = document.body;
const cz = document.querySelector('.bt2');

const co = document.querySelector('.co');
const box = document.querySelector('.cbox');
const arrow = document.querySelector('.arrowu');
function clc () {
  if (ca.value > 0 && cb.value > 0 && cc.value > 0) {
    if (ce.value==='Man') {
      kcl = Math.round((((10*cb.value) + (6.25*cc.value) - (5*ca.value) + 5)*cd.value*100) / 100);
      cx.innerHTML = `Your daily calorie intake : ${kcl} cal`;
      cx.classList.remove('error');
      cx.classList.add('kcl');
    } else if (ce.value==='Woman') {
      kcl = Math.round((((10*cb.value) + (6.25*cc.value) - (5*ca.value) -  161)*cd.value*100) / 100);
      cx.innerHTML = `Your daily calorie intake : ${kcl} cal.`;
      cx.classList.remove('error');
      cx.classList.add('kcl');
    } 
  } 
}

cy.addEventListener('click', () => {
  clc();
});

cw.addEventListener('keydown', (event) => {7
  if (event.key === 'Enter') {
   clc();
  }
});

cz.addEventListener('click', () => {
   cx.innerHTML = '';
   ca.value = '';
   cb.value = '';
   cc.value = '';
   cx.classList.remove('error');
   cx.classList.add('kcl');
});

co.addEventListener('click', () => {
   if (box.classList.contains('cbox')) {
     box.classList.add('box');
     box.classList.remove('cbox');

     co.innerHTML = '';
     co.innerHTML = '<img src="close.png" class="arrowu">';
   } else if (box.classList.contains('box')) {
     box.classList.add('cbox');
     box.classList.remove('box');

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
   }
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

   u.classList.add('plogoa');
   u.classList.remove('plogoa2');
   v.classList.add('plogo');
   v.classList.remove('plogo2');
})