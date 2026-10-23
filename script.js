const descriptions={
'Lipo de papada':'Seu interesse no contorno da região abaixo do queixo será o ponto de partida da conversa.',
'Planejamento facial':'Suas expectativas sobre o cuidado com a face serão o ponto de partida da conversa.',
'Cuidado com o sorriso':'Suas dúvidas sobre saúde e estética do sorriso serão o ponto de partida da conversa.',
'Quero orientação da equipe':'Você pode começar com suas dúvidas. A equipe orienta como solicitar uma avaliação.'
};
const form=document.querySelector('#request-form');
const dialog=document.querySelector('#preview');
function update(){const value=new FormData(form).get('care');document.querySelector('#summary-title').textContent=value;document.querySelector('#summary-description').textContent=descriptions[value]}
function choose(value){for(const radio of form.elements.care)radio.checked=radio.value===value;update();document.querySelector('#avaliacao').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});form.elements.care[0].focus({preventScroll:true})}
document.querySelectorAll('[data-care]').forEach(button=>button.addEventListener('click',()=>choose(button.dataset.care)));
document.querySelector('#help-choice').addEventListener('click',()=>choose('Quero orientação da equipe'));
form.addEventListener('change',update);
form.addEventListener('submit',event=>{event.preventDefault();const data=new FormData(form);const name=String(data.get('person')).trim();const text=`Olá, equipe Lumino!${name?' Meu nome é '+name+'.':''}\n\nGostaria de conversar sobre uma avaliação.\nInteresse: ${data.get('care')}.\nPeríodo de preferência: ${data.get('period')}.\n\nPodem me orientar sobre os próximos passos e a disponibilidade?\n\nSolicitação preparada pela demonstração da página Lumino.`;document.querySelector('#message').textContent=text;document.querySelector('#whatsapp').href='https://wa.me/5563981131158?text='+encodeURIComponent(text);dialog.showModal()});
document.querySelector('.close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close()}});
const interest=new URLSearchParams(location.search).get('interesse');const routes={papada:'Lipo de papada',facial:'Planejamento facial',sorriso:'Cuidado com o sorriso'};if(routes[interest]){for(const radio of form.elements.care)radio.checked=radio.value===routes[interest];update()}
