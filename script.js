const $=(s,e=document)=>e.querySelector(s),$$=(s,e=document)=>[...e.querySelectorAll(s)];
$('#mb').onclick=()=>$('#nv').classList.toggle('o');

// scroll reveal
const io=new IntersectionObserver(a=>a.forEach(x=>{if(x.isIntersecting){x.target.classList.add('v');io.unobserve(x.target)}}),{threshold:.15});
$$('.r').forEach(e=>io.observe(e));

// hero typing text
const ty=$('#ty');
if(ty){const w=['stand out.','go viral.','get clients.','look professional.'];let i=0,j=0,d=false;
(function t(){const s=w[i];ty.firstChild?ty.firstChild.nodeValue=s.slice(0,j):ty.prepend(s.slice(0,j));
j+=d?-1:1;let ms=d?40:90;
if(!d&&j>s.length){d=true;ms=1400}else if(d&&j<0){d=false;i=(i+1)%w.length;j=0;ms=300}
setTimeout(t,ms)})()}

// portfolio filter
$$('.fl button').forEach(b=>b.onclick=()=>{
  $$('.fl button').forEach(x=>x.classList.remove('on'));b.classList.add('on');
  $$('.pj').forEach(c=>c.style.display=b.dataset.f==='all'||c.dataset.c===b.dataset.f?'':'none')});

// contact form -> WhatsApp
const cf=$('#cf');
if(cf)cf.onsubmit=e=>{e.preventDefault();const f=new FormData(cf);
  const m=`Hi AS Graphics Studio, I'm ${f.get('n')}. Service: ${f.get('s')}. Details: ${f.get('m')}`;
  window.open('https://wa.me/923702057404?text='+encodeURIComponent(m),'_blank')};