(function(){
  var burger=document.getElementById('burger'), menu=document.getElementById('menu');
  if(burger&&menu){
    burger.addEventListener('click',function(){var o=menu.classList.toggle('open');burger.setAttribute('aria-expanded',o);});
    menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){menu.classList.remove('open');burger.setAttribute('aria-expanded',false);});});
  }
  var rm=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els=document.querySelectorAll('.rev');
  if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');});return;}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});
  els.forEach(function(e){io.observe(e);});
})();
