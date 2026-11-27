/* Ukrainian pilot interface; study logic and official English answers stay in the source app. */
(function(){
 'use strict';
 const isUk=()=>window.CP_UI_LANG==='uk',$=id=>document.getElementById(id);
 const backup=new WeakMap();
 const originalHtml=new WeakMap();
 function localize(sel,value){
  const n=document.querySelector(sel);
  if(!n)return;
  if(!backup.has(n))backup.set(n,n.textContent);
  n.textContent=isUk()?value:backup.get(n);
 }
 function localizeHtml(sel,value){
  const n=document.querySelector(sel);if(!n)return;
  if(!originalHtml.has(n))originalHtml.set(n,n.innerHTML);
  n.innerHTML=isUk()?value:originalHtml.get(n);
 }
 function setupLabels(){
  document.documentElement.lang=isUk()?'uk':'es';
  if($('supportLanguage'))$('supportLanguage').value=window.CP_UI_LANG;
  localize('#supportLanguageLabel','Мова підтримки');
  localize('#supportLanguageNote','Офіційні запитання та відповіді залишаються англійською. Український переклад призначений для навчання. Якщо ви помітили неточність, надішліть відгук.');
  localize('#navHome','Головна');
  localize('#navPractice','Про проєкт');
  localize('.feedback-top a','Помітили помилку? Повідомте або запропонуйте виправлення ↗');
  localize('#home .welcome-copy .eyebrow','Підготовка починається тут');
  localize('#home .welcome-copy h1','Ваша мета — громадянство США — стає ближчою.');
  localizeHtml('#home .welcome-copy .lead','<strong>Слухайте запитання англійською та читайте пояснення українською.</strong> Навчайтеся у власному темпі, де вам зручно.');
  localize('#startHome','Почати підготовку →');
  localize('#home .welcome-tutorial h2','Ви тут уперше?');
  localize('#home .welcome-tutorial > p','Скористайтеся короткою інструкцією для початку навчання.');
  const video=$('tutorialVideo');
  if(video)video.style.display=isUk()?'none':'';
  if($('ukQuickGuide'))$('ukQuickGuide').classList.toggle('hidden',!isUk());
  const error=$('tutorialVideoError');if(error&&isUk())error.classList.add('hidden');
  localize('#home .welcome-copy > p.small:not(#installHelp)','Безплатно · Без реєстрації · На телефоні або комп’ютері');
  localize('#home > div[style] .eyebrow','Створено для навчання');
  localize('#home > div[style] h2','Практикуйтеся впевненіше');
  localize('#home > div[style] p','Простий спосіб читати, слухати та засвоювати матеріал.');
  const features=[...document.querySelectorAll('#home .feature-grid .card')];
  [['Слухайте англійською','Звикайте до вимови запитань.'],['Розумійте українською','Використовуйте переклад як допомогу.'],['Навчайтеся у власному темпі','Повертайтеся до складних запитань, коли вам зручно.']].forEach(([h,p],i)=>{if(!features[i])return;const a=features[i].querySelector('h3'),b=features[i].querySelector('p');if(a)localize('#home .feature-grid .card:nth-child('+(i+1)+') h3',h);if(b)localize('#home .feature-grid .card:nth-child('+(i+1)+') p',p)});
  const cards=[...document.querySelectorAll('#home .home-panel')];
  if(cards[0]){localize('#home .home-panel:first-of-type h2','Поширити інформацію — теж допомога.');localize('#home .home-panel:first-of-type p','Знаєте когось, хто готується до громадянства США? Поділіться Ciudadanía Práctica з рідними та друзями. Інструмент безплатний і доступний на телефоні та комп’ютері.')}
  localize('#shareHome','Поділитися інструментом ↗');
  localize('#aboutHome','Хочете підтримати проєкт? →');
  localize('#storyBack','← На головну');
  localize('#projectStory .eyebrow','Про проєкт');
  localize('#projectStory h1','Чому ми створили цей інструмент?');
  const story=[...document.querySelectorAll('#projectStory > p')];
  [
   'Моя дружина має статус постійної резидентки США і давно хоче стати громадянкою. Але розмовна англійська для неї — складність. Хоча вона купила навчальні картки та іноді практикує запитання, їй бракувало впевненості для наступного кроку.',
   'Одного дня вона запитала, чи знаю я спосіб краще підготуватися. Я відповів: «Я зроблю тобі такий інструмент».',
   'Так з’явилася Ciudadanía Práctica.',
   'Те, що почалося як допомога одній людині, згодом перетворилося на ідею для багатьох. Мовний бар’єр часто заважає людям, які хочуть отримати громадянство та готові вчитися.',
   'Ми створили простий навчальний інструмент, де можна слухати офіційні запитання англійською та читати пояснення рідною мовою. Це допомагає звикнути до вимови й поступово зміцнити впевненість.',
   'Мені хотілося, щоб ним можна було користуватися на телефоні чи комп’ютері, без підписки та обов’язкової оплати.',
   'Ми оновлюємо матеріали та вдосконалюємо навчання. Симулятор усної співбесіди англійською ще розробляється.',
   'Ciudadanía Práctica — безплатний незалежний проєкт. За бажанням ви можете підтримати його розвиток пожертвою або поділитися посиланням із тими, кому він потрібен.'
  ].forEach((p,i)=>{if(story[i]){if(!backup.has(story[i]))backup.set(story[i],story[i].textContent);story[i].textContent=isUk()?p:backup.get(story[i])}});
  const titles=[...document.querySelectorAll('#projectStory h2')];
  ['Проєкт продовжує розвиватися','Хочете підтримати проєкт?'].forEach((t,i)=>{if(titles[i]){if(!backup.has(titles[i]))backup.set(titles[i],titles[i].textContent);titles[i].textContent=isUk()?t:backup.get(titles[i])}});
  localize('#projectStory a[href*="ko-fi.com"]','Підтримати проєкт ↗');
  localize('#infoTitle','Інформація про співбесіду');
  localize('#infoClose','Зрозуміло · Почати');
  localize('#setup > strong','Коли ви подали заяву на громадянство (форма N-400)?');
  localize('#setup > p.muted','Дата подання визначає версію тесту: 100 запитань для версії 2008 року або 128 для версії 2025 року.');
  const filing=[...document.querySelectorAll('input[name="filing"]')];
  ['До 20 жовтня 2025 року','20 жовтня 2025 року або пізніше','Я ще не подав(-ла) заяву'].forEach((v,i)=>{const l=filing[i]?.closest('label');if(!l)return;const n=l.lastChild;if(!backup.has(n))backup.set(n,n.textContent);n.textContent=isUk()?' '+v:backup.get(n)});
  localize('#setup fieldset legend strong','Режим навчання');
  const gen=document.querySelector('input[name="track"][value="general"]')?.closest('label');
  const spec=document.querySelector('input[name="track"][value="special"]')?.closest('label');
  if(gen){const n=gen.lastChild;if(!backup.has(n))backup.set(n,n.textContent);n.textContent=isUk()?' Звичайний':backup.get(n)}
  if(spec){const n=spec.lastChild;if(!backup.has(n))backup.set(n,n.textContent);n.textContent=isUk()?' Спеціальні умови 65/20':backup.get(n)}
  localize('#setup fieldset p','Якщо на дату подання N-400 вам було щонайменше 65 років і ви мали статус законного постійного резидента щонайменше 20 років, для вас діє набір із 20 запитань. На співбесіді ставлять 10, потрібно правильно відповісти щонайменше на 6. Можна складати тест із громадянознавства обраною мовою.');
  localize('#continue','Продовжити →');
  localize('#backStudy','← Змінити версію тесту');
  localize('#about','ⓘ Інформація про тест');
  localize('#practiceTools > strong','Моя практика');
  localize('#allQuestions','Усі запитання');
  const review=$('reviewQuestions');if(review){const n=review.firstChild;if(!backup.has(n))backup.set(n,n.textContent);n.textContent=isUk()?'Повторити помилки (':backup.get(n)}
  localize('#reviewEmpty','Ви вже виправили всі помилки! Можна почати тренування знову.');
  localize('#previous','← Попереднє');
  localize('#clearMarks','Скинути прогрес');
  localize('#practiceTools details summary','Відповіді, які можуть змінюватися');
  if(isUk())localizeHtml('#practiceTools details p','Імена посадовців можуть змінюватися. Перевіряйте актуальні дані на <a href="https://www.uscis.gov/citizenship/testupdates" target="_blank" rel="noopener">USCIS</a> перед співбесідою.');
  else localizeHtml('#practiceTools details p','');
  localize('#newReviewRound','Новий випадковий порядок повторення помилок');
  localize('#listen','🔊 Прослухати запитання');
  localize('#reveal','Показати офіційну відповідь');
  localize('#answerArea .answer:first-child strong','Прийнята офіційна відповідь:');
  localize('#answerArea .answer:nth-child(2) strong','Пояснення українською:');
  localize('#locationAnswer > p','Відповідь залежить від вашого місця проживання. Перевірте офіційне джерело перед співбесідою.');
  document.querySelectorAll('[data-mark]').forEach(b=>{if(!backup.has(b))backup.set(b,b.textContent);b.textContent=isUk()?(b.dataset.mark==='correct'?'✓ Правильно':'✕ Неправильно'):backup.get(b)});
  localize('#practicePage > details summary','Джерела та важливі зауваження');
  localize('#practicePage > details p','Це незалежний навчальний ресурс, не пов’язаний з USCIS. Офіційні запитання й відповіді залишаються англійською. Українські пояснення — чернетка для навчання, вони ще проходять перевірку. Імена посадовців можуть змінюватися. Прогрес зберігається в цьому браузері. Голосовий симулятор поки недоступний.');
  localize('footer details summary','Конфіденційність');
  const footer=[...document.querySelectorAll('footer details p')];
  if(footer.length&&isUk()){
   const privacy=['Ми використовуємо Cloudflare Web Analytics для загальної статистики відвідувань і швидкодії без cookies для відстеження чи індивідуальних профілів. Браузер передає технічні дані Cloudflare.','Налаштування та прогрес зберігаються локально. Для підрахунку встановлень Cloudflare отримує випадковий постійний ідентифікатор браузера та тип події; зберігається один запис на ідентифікатор. Імена, відповіді та записи голосу не передаються. Лічильник показує встановлення, а не унікальних людей. Обліковий запис не потрібен.','GitHub Pages може обробляти технічні дані, зокрема IP-адреси. Для зовнішніх посилань діють правила відповідних сервісів.','Експериментальний голосовий режим недоступний публічно. Перед його запуском ми пояснимо обробку голосу.','Ми не використовуємо Google Analytics чи персоналізовану рекламу.'];
   footer.forEach((n,i)=>{if(!backup.has(n))backup.set(n,n.textContent);n.textContent=privacy[i]||privacy[privacy.length-1]})
  }else footer.forEach(n=>{if(backup.has(n))n.textContent=backup.get(n)});
  if($('ukBetaNotice'))$('ukBetaNotice').classList.toggle('hidden',!isUk());
  refreshAssignment();
 }
 function refreshAssignment(){
  const el=$('assignment');if(!el||!isUk())return;
  el.textContent=chosenBank?'Обрано тест '+chosenBank+' · '+(chosenTrack==='special'?'65/20':'звичайний')+'. Натисніть «Продовжити».':'Оберіть відповідний варіант, щоб продовжити.';
 }
 const baseInfo=infoHtml;
 infoHtml=function(){
  if(!isUk())return baseInfo();
  if(chosenTrack==='special')return '<p><strong>Спеціальний режим 65/20:</strong> якщо на дату подання N-400 вам було щонайменше 65 років і ви мали статус законного постійного резидента не менше 20 років, можна готуватися за 20 спеціально обраними запитаннями версії '+chosenBank+'. USCIS ставить 10 запитань; для успіху потрібні 6 правильних відповідей.</p><p>Тест з громадянознавства можна складати обраною мовою за умовами цього винятку. Це навчальний ресурс, а не офіційний іспит.</p><p>Відомості про посадовців і штати можуть змінюватися: перевірте <a href="https://www.uscis.gov/citizenship/testupdates" target="_blank" rel="noopener">USCIS</a>.</p>';
  if(chosenBank==='2008')return '<p>Загальний тест версії 2008 року містить <strong>100 можливих запитань</strong>. На співбесіді ставлять до 10 запитань; потрібно правильно відповісти на 6.</p><p>Офіційні запитання та відповіді подано англійською. Український переклад використовується лише для підготовки.</p>';
  return '<p>Загальний тест версії 2025 року містить <strong>128 можливих запитань</strong>. На співбесіді ставлять до 20 запитань; потрібно правильно відповісти на 12.</p><p>Офіційні запитання та відповіді подано англійською. Українські переклади є навчальними й ще не перевірені незалежним фахівцем.</p>';
 };
 const speech={
 'Este dispositivo no tiene voz disponible. Para escuchar sin internet, instala una voz en inglés en los ajustes de texto a voz del teléfono.':'На цьому пристрої немає доступного голосу. Для роботи без інтернету встановіть англійський голос у налаштуваннях синтезу мовлення.',
 'Sin conexión no hay una voz inglesa instalada disponible. Descarga una voz en inglés (Estados Unidos) en los ajustes de texto a voz del dispositivo mientras tengas internet.':'Англійський голос для роботи без інтернету не встановлено. Завантажте голос English (United States) за наявності з’єднання.',
 'Reproduciendo pregunta en inglés.':'Відтворюється запитання англійською.',
 'No se pudo reproducir la pregunta. Revisa la configuración de texto a voz.':'Не вдалося відтворити запитання. Перевірте налаштування синтезу мовлення.',
 'No se pudo reproducir sin conexión. Instala una voz inglesa sin conexión en los ajustes de texto a voz de tu dispositivo.':'Не вдалося відтворити без інтернету. Встановіть англійський голос для офлайн-режиму.',
 'Usando voz alternativa.':'Використовується альтернативний голос.',
 'Reproduciendo grabación.':'Відтворюється запис.',
 'No se pudo reproducir este archivo de audio.':'Не вдалося відтворити аудіофайл.'
 };
 const originalStatus=status;
 status=function(id,msg){originalStatus(id,isUk()?(speech[msg]||msg):msg)};
 const originSelection=updateSelection;
 updateSelection=function(){originSelection();refreshAssignment()};
 document.querySelectorAll('input[name="filing"],input[name="track"]').forEach(x=>x.addEventListener('change',refreshAssignment));
 const originRender=render;
 render=function(){
  originRender();
  if(!isUk())return;
  const counter=$('counter');if(counter)counter.textContent=counter.textContent.replace('Pregunta','Запитання').replace('Incorrecta','Помилка').replace('Ronda aleatoria','Випадкове повторення').replace('Práctica aleatoria','Випадкова практика').replace('65/20 aleatoria','Практика 65/20');
  const n=$('next');if(n)n.textContent=n.textContent.includes('Finalizar')?'Завершити практику →':reviewOnly&&roundRated?'Продовжити →':'Наступне запитання →';
  localize('#reveal','Показати офіційну відповідь');
  const q=QUESTIONS[index],answer=$('answer'),explain=$('explain'),sum=$('summary'),location=$('locationAnswer');
  if(q&&answer){
   answer.textContent=answer.textContent.replace('⚠️ Respuesta variable. Confirma la información vigente antes de tu entrevista:','⚠️ Відповідь може змінитися. Перевірте актуальні дані перед співбесідою:');
  }
  if(q&&location&&!location.classList.contains('hidden')){
   if(answer&&answer.textContent.startsWith('La respuesta depende'))answer.textContent='Відповідь залежить від вашого штату або округу; єдиної відповіді для всіх жителів США немає.';
   if(explain)explain.textContent='Знайдіть правильну відповідь для вашого місця проживання в офіційному джерелі. Для округу Колумбія й територій США можливі винятки.';
   const names={'Buscar senadores por estado':'Знайти сенаторів за штатом','Buscar representante por dirección':'Знайти представника за адресою','Consultar gobernador de tu estado':'Дізнатися губернатора штату','Consultar capital de tu estado':'Дізнатися столицю штату','Consultar gobernadores por estado':'Перелік губернаторів штатів','Consultar información de tu estado':'Інформація про штат'};
   location.querySelectorAll('a').forEach(a=>{for(const [es,uk] of Object.entries(names)){if(a.textContent.startsWith(es))a.textContent=uk+' ↗'}});
  }else if(q&&explain){
   const old=chosenBank==='2008',dynamic=old?[20,23,28,29,39,40,43,44,46,47].includes(q.n):[23,29,30,38,39,57,61,62].includes(q.n);
   if(dynamic)explain.textContent='Ця відповідь може змінитися. Перевірте дані на USCIS перед співбесідою.';
  }
  if(sum)sum.textContent=sum.textContent.replace('Progreso:','Прогрес:').replace('incorrectas pendientes','помилок для повторення');
  const review=$('reviewQuestions');if(review)review.title='Повторити помилки';
  update65Milestone(false);
 };
 const baseFinish=finishPracticeRound;
 finishPracticeRound=function(){
  baseFinish();
  if(!isUk())return;
  const wrong=reviewIndices().length;
  $('roundMessage').textContent='Ви завершили '+QUESTIONS.length+' запитань. '+(wrong?'Залишилося '+wrong+' помилок для повторення.':'Не залишилося неправильних відповідей.')+' Це тренування, не офіційний результат іспиту.';
 };
 const baseReview=endReviewRound;
 endReviewRound=function(){
  baseReview();
  if(isUk()){
   const n=reviewIndices().length;
   $('roundMessage').textContent=n?'Повторення завершено. Залишилося '+n+' помилок.':'🎉 Чудова робота! Ви виправили всі помилки.';
  }
 };
 const baseNext=navigatePractice;
 navigatePractice=function(delta){
  const notRated=!roundFinished&&marks[index]!=='correct'&&marks[index]!=='wrong';
  baseNext(delta);
  if(notRated&&isUk())$('summary').textContent='Спершу позначте відповідь як правильну або неправильну.';
 };
 function update65Milestone(force){}
 document.querySelectorAll('[data-mark]').forEach(b=>b.addEventListener('click',()=>{
  if(!isUk()||mode!=='practice')return;
  update65Milestone(true);
  const summary=$('summary');if(summary)summary.textContent=summary.textContent.replace('Progreso:','Прогрес:').replace('incorrectas pendientes','помилок для повторення');
  if(reviewOnly&&$('next'))$('next').textContent='Продовжити →';
 }));
 function clearMilestone(){if($('milestone65'))$('milestone65').classList.add('hidden')}
 $('clearMarks')?.addEventListener('click',clearMilestone);
 $('continue')?.addEventListener('click',clearMilestone);
 function changeLanguage(lang){
  if(!['es','vi','uk'].includes(lang))return;
  window.CP_UI_LANG=lang;
  try{localStorage.setItem('cp-support-language-v1',lang)}catch(e){}
  location.reload();
 }
 const choice=$('supportLanguage');
 if(choice){choice.value=window.CP_UI_LANG;choice.addEventListener('change',()=>changeLanguage(choice.value))}
 const tutorial=$('tutorialVideo');
 if(tutorial){
  const info=document.createElement('div');info.id='ukQuickGuide';info.className='vi-beta-note hidden';
  info.textContent='Як навчатися: оберіть дату подання N-400 та режим. Натисніть «Продовжити», прослухайте запитання англійською, прочитайте переклад, дайте власну відповідь, потім відкрийте офіційну відповідь і позначте результат. Перейдіть до наступного запитання.';
  tutorial.insertAdjacentElement('afterend',info);
 }
 const notice=document.createElement('p');notice.id='ukBetaNotice';notice.className='vi-beta-note hidden';
 notice.textContent='Пробна українська версія: переклади та пояснення ще не перевірені незалежним фахівцем. Будь ласка, повідомляйте про неточності через форму зворотного зв’язку.';
 $('supportLanguageNote')?.insertAdjacentElement('afterend',notice);
 // The pilot intentionally does not change installation metrics or production statistics.
 setupLabels();
})();
