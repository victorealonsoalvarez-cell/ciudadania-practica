/* Ciudadanía Práctica — Vietnamese beta UI layer.
 * Keeps official answers and all existing Spanish behavior in index.html.
 * This script is loaded after the main app and may be removed independently.
 */
(function(){
 'use strict';
 const localeKey='cp-support-language-v1';
 const $el=id=>document.getElementById(id);
 const originalText=new WeakMap(),originalHTML=new WeakMap();
 const isVi=()=>window.CP_UI_LANG==='vi';
 function text(node,v){
  if(!node)return;
  if(!originalText.has(node))originalText.set(node,node.textContent);
  node.textContent=isVi()?v:originalText.get(node);
 }
 function set(selector,v){text(document.querySelector(selector),v)}
 function html(node,v){
  if(!node)return;
  if(!originalHTML.has(node))originalHTML.set(node,node.innerHTML);
  node.innerHTML=isVi()?v:originalHTML.get(node);
 }
 function localizeStatic(){
  document.documentElement.lang=isVi()?'vi':'es';
  const choice=$el('supportLanguage');
  if(choice)choice.value=window.CP_UI_LANG;
  set('#supportLanguageLabel','Ngôn ngữ hỗ trợ');
  set('#supportLanguageNote','Câu hỏi và đáp án chính thức vẫn bằng tiếng Anh. Bản dịch tiếng Việt chỉ hỗ trợ việc ôn tập; nếu gặp lỗi, vui lòng gửi phản hồi.');
  set('#navHome','Trang chủ');
  set('#navPractice','Giới thiệu dự án');
  set('.feedback-top a','Phát hiện lỗi? Báo lỗi hoặc góp ý ↗');
  set('#home .welcome-copy .eyebrow','Hành trình học của bạn bắt đầu tại đây');
  set('#home .welcome-copy h1','Bạn đang tiến gần hơn đến mục tiêu nhập quốc tịch.');
  html(document.querySelector('#home .welcome-copy .lead'),'<strong>Nghe câu hỏi bằng tiếng Anh, hiểu nội dung bằng tiếng Việt</strong> và luyện tập theo tốc độ của bạn, mọi lúc mọi nơi.');
  set('#startHome','Bắt đầu luyện tập →');
  set('#installApp','Cài đặt trên điện thoại');
  set('#home .welcome-copy > p.small','Miễn phí · Không cần đăng ký · Trên điện thoại hoặc máy tính');
  set('#home .welcome-tutorial h2','Lần đầu sử dụng?');
  set('#home .welcome-tutorial > p','Hướng dẫn nhanh để bắt đầu luyện tập.');
  set('.pwa-count-label','Số lượt cài đặt Ciudadanía Práctica được ghi nhận');
  set('#pwaCountNote','Đếm từ khi tính năng được bật · Không phải số người dùng duy nhất');
  set('#home > div[style] .eyebrow','Được tạo ra để học tập');
  set('#home > div[style] h2','Luyện tập tự tin hơn');
  set('#home > div[style] p','Trải nghiệm đơn giản giúp bạn học, nghe và hiểu các câu hỏi.');
  const features=[...document.querySelectorAll('#home .feature-grid .card')];
  [
   ['Nghe bằng tiếng Anh','Làm quen với cách phát âm các câu hỏi khi luyện tập.'],
   ['Hiểu bằng tiếng Việt','Sử dụng bản dịch để hiểu câu hỏi tiếng Anh.'],
   ['Học theo tốc độ của bạn','Ôn lại các câu hỏi và tiếp tục khi có thời gian.']
  ].forEach(([h,p],i)=>{if(features[i]){text(features[i].querySelector('h3'),h);text(features[i].querySelector('p'),p)}});
  const panels=[...document.querySelectorAll('#home .home-panel')];
  if(panels[0]){
   text(panels[0].querySelector('h2'),'Chia sẻ cũng là một cách giúp đỡ.');
   text(panels[0].querySelector('p'),'Bạn biết ai đang chuẩn bị thi nhập quốc tịch? Hãy chia sẻ Ciudadanía Práctica với gia đình và bạn bè. Công cụ miễn phí, dùng được trên điện thoại và máy tính.');
  }
  set('#shareHome','Chia sẻ công cụ ↗');
  if(panels[1]){
   text(panels[1].querySelector('.eyebrow'),'Một dự án có ý nghĩa');
   text(panels[1].querySelector('h2'),'Mọi chuyện bắt đầu bằng một câu hỏi.');
   text(panels[1].querySelector('p'),'Ciudadanía Práctica ban đầu được tạo ra để giúp một người trong gia đình, và giờ đây chúng tôi hy vọng công cụ có thể giúp thêm nhiều người khác miễn phí.');
  }
  set('#aboutHome','Bạn muốn hỗ trợ dự án này? →');
  set('#storyBack','← Trở về trang chủ');
  set('#projectStory .eyebrow','Giới thiệu dự án');
  set('#projectStory h1','Tại sao chúng tôi tạo ra công cụ này?');
  const story=[...document.querySelectorAll('#projectStory > p')];
  [
   'Vợ tôi là thường trú nhân Hoa Kỳ và từ lâu đã mong muốn trở thành công dân. Tuy nhiên, như nhiều người khác, cô ấy gặp khó khăn khi giao tiếp bằng tiếng Anh. Dù đã mua thẻ học và đôi khi luyện các câu hỏi của bài thi, cô ấy vẫn chưa đủ tự tin để tiến bước tiếp.',
   'Một ngày nọ, cô ấy hỏi tôi có biết nơi nào giúp luyện tập và chuẩn bị tốt hơn không. Tôi chỉ trả lời: “Anh sẽ làm cho em một công cụ.”',
   'Thế là Ciudadanía Práctica ra đời.',
   'Điều bắt đầu như một công cụ giúp vợ tôi dần trở thành một ý tưởng có ý nghĩa rộng hơn. Tôi nhận ra nhiều người khác cũng muốn nhập quốc tịch và sẵn sàng học tập, nhưng rào cản ngôn ngữ khiến họ khó tự tin.',
   'Ciudadanía Práctica hướng đến việc giảm rào cản này bằng trải nghiệm học tập đơn giản và dễ tiếp cận. Người học có thể nghe câu hỏi bằng tiếng Anh, đồng thời đọc bản dịch để hiểu nghĩa và làm quen với cách phát âm.',
   'Tôi muốn công cụ luôn sẵn có, dễ dùng và đặc biệt là miễn phí trên điện thoại hoặc máy tính, không cần đăng ký hay trả phí bắt buộc.',
   'Chúng tôi tiếp tục cập nhật câu hỏi, đáp án và cải thiện trải nghiệm học tập; tính năng mô phỏng phỏng vấn bằng tiếng Anh vẫn đang được phát triển.',
   'Ciudadanía Práctica là công cụ miễn phí, độc lập. Nếu muốn đóng góp tự nguyện để hỗ trợ phát triển, chúng tôi rất cảm kích. Bạn cũng có thể giúp đỡ bằng cách chia sẻ công cụ với người cần.'
  ].forEach((v,i)=>text(story[i],v));
  const storyH=[...document.querySelectorAll('#projectStory h2')];
  text(storyH[0],'Một dự án đang tiếp tục phát triển');
  text(storyH[1],'Bạn muốn hỗ trợ dự án?');
  set('#projectStory a[href*="ko-fi.com"]','Ủng hộ dự án ↗');
  set('#infoTitle','Thông tin về bài thi nhập quốc tịch');
  set('#infoClose','Đã hiểu · Bắt đầu');
  set('#setup > strong','Bạn đã nộp đơn xin nhập quốc tịch (N-400) khi nào?');
  set('#setup > p.muted','Hãy chọn thời điểm nộp đơn để học đúng bộ câu hỏi. Đề 2008 có 100 câu hỏi; đề 2025 có 128 câu hỏi.');
  const filingLabels=[...document.querySelectorAll('input[name="filing"]')].map(e=>e.closest('label'));
  ['Trước ngày 20 tháng 10 năm 2025','Từ ngày 20 tháng 10 năm 2025 trở đi','Tôi chưa nộp đơn'].forEach((v,i)=>{if(filingLabels[i])text(filingLabels[i].lastChild,' '+v)});
  set('#setup fieldset legend strong','Chế độ học');
  const general=document.querySelector('input[name="track"][value="general"]')?.closest('label');
  const special=document.querySelector('input[name="track"][value="special"]')?.closest('label');
  if(general)text(general.lastChild,' Thông thường');
  if(special)text(special.lastChild,' Diện đặc biệt 65/20');
  set('#setup fieldset p','Diện 65/20 dành cho người ít nhất 65 tuổi và đã là thường trú nhân hợp pháp tối thiểu 20 năm khi nộp N-400. Người đủ điều kiện ôn 20 câu, được hỏi 10 câu và cần đúng 6 câu. Có thể thi kiến thức công dân bằng ngôn ngữ mình chọn.');
  set('#continue','Tiếp tục →');
  set('#backStudy','← Đổi phiên bản bài thi');
  set('#about','ⓘ Thông tin về bài thi');
  set('#practiceTools > strong','Bài luyện tập của tôi');
  set('#allQuestions','Tất cả câu hỏi');
  const review=$el('reviewQuestions');
  if(review)text(review.firstChild,'Ôn câu trả lời sai (');
  set('#reviewEmpty','Bạn đã sửa tất cả câu sai. Bạn có thể luyện tập lại khi muốn.');
  set('#previous','← Câu trước');
  set('#clearMarks','Đặt lại tiến độ');
  set('#practiceTools details summary','Các đáp án có thể thay đổi');
  const dynamicDetails=document.querySelector('#practiceTools details p');
  if(dynamicDetails&&isVi())html(dynamicDetails,'Tên một số quan chức thay đổi theo thời gian. Hãy kiểm tra <a href="https://www.uscis.gov/citizenship/testupdates" target="_blank" rel="noopener">USCIS</a> trước buổi phỏng vấn.');
  else if(dynamicDetails)html(dynamicDetails,'');
  set('#newReviewRound','Ôn lại câu sai theo thứ tự ngẫu nhiên');
  set('#listen','🔊 Nghe câu hỏi');
  set('#reveal','Hiển thị đáp án chính thức');
  set('#answerArea .answer:first-child strong','Đáp án chính thức được chấp nhận:');
  set('#answerArea .answer:nth-child(2) strong','Giải thích bằng tiếng Việt:');
  set('#locationAnswer > p','Đáp án này phụ thuộc vào nơi bạn cư trú. Hãy kiểm tra nguồn chính thức trước buổi phỏng vấn.');
  const markButtons=[...document.querySelectorAll('[data-mark]')];
  markButtons.forEach(b=>text(b,b.dataset.mark==='correct'?'✓ Đúng':'✕ Sai'));
  set('#practicePage > details summary','Nguồn tài liệu và lưu ý quan trọng');
  set('#practicePage > details p','Công cụ độc lập, không liên kết với USCIS. Câu hỏi và đáp án chính thức bằng tiếng Anh; bản dịch tiếng Việt chỉ hỗ trợ học tập và đang được hoàn thiện. Thông tin về quan chức có thể thay đổi. Tiến độ được lưu trong trình duyệt. Tính năng phỏng vấn bằng giọng nói chưa được cung cấp.');
  set('footer details summary','Quyền riêng tư');
  set('footer details strong','Quyền riêng tư tại Ciudadanía Práctica');
  const privacy=[...document.querySelectorAll('footer details p')];
  [
   'Chúng tôi sử dụng Cloudflare Web Analytics để xem số liệu tổng quan về lượt truy cập và hiệu suất. Công cụ này không dùng cookie theo dõi hoặc tạo hồ sơ từng người. Trình duyệt gửi dữ liệu kỹ thuật đến Cloudflare để tổng hợp thống kê.',
   'Trình duyệt lưu tùy chọn, tiến độ luyện tập và dữ liệu kỹ thuật tối thiểu về việc cài đặt và mở ứng dụng. Khi phát hiện cài đặt, trình duyệt gửi mã định danh ngẫu nhiên được lưu trên thiết bị cùng loại sự kiện đến dịch vụ Cloudflare để tránh đếm trùng theo mã. Chúng tôi không gửi tên, câu trả lời hay ghi âm. Số đếm là lượt cài đặt được ghi nhận, không phải số người riêng biệt. Xóa dữ liệu trình duyệt hoặc cài trên thiết bị khác có thể tạo mã mới. Không cần tài khoản để sử dụng.',
   'Trang web được lưu trữ trên GitHub Pages, có thể xử lý địa chỉ IP và dữ liệu kỹ thuật để vận hành, bảo vệ dịch vụ. Khi truy cập Ko-fi hoặc biểu mẫu phản hồi, chính sách của các dịch vụ đó cũng được áp dụng.',
   'Tính năng phỏng vấn thử nghiệm dùng micrô chưa mở công khai. Nếu được bật sau này, chúng tôi sẽ giải thích việc xử lý giọng nói vì trình duyệt có thể sử dụng dịch vụ bên ngoài.',
   'Chúng tôi không dùng Google Analytics hoặc quảng cáo cá nhân hóa.'
  ].forEach((v,i)=>text(privacy[i],v));
  const vid=$el('tutorialVideo'),videoError=$el('tutorialVideoError'),guide=$el('vietnameseTextTutorial');
  if(vid)vid.style.display=isVi()?'none':'';
  if(videoError&&isVi())videoError.classList.add('hidden');
  if(guide)guide.classList.toggle('hidden',!isVi());
  const beta=$el('languageBetaNote');
  if(beta)beta.classList.toggle('hidden',!isVi());
  updateAssignment();
  localizeTicker();
 }
 function updateAssignment(){
  const el=$el('assignment');
  if(!el||!isVi())return;
  el.textContent=chosenBank?'Đã chọn đề '+chosenBank+' · '+(chosenTrack==='special'?'65/20':'Thông thường')+'. Nhấn Tiếp tục.':'Chọn một tùy chọn để tiếp tục.';
 }
 function localizeTicker(){
  const copy=isVi()?
    {label:'ĐÃ CÓ SẴN',message:'Hiện đã hỗ trợ tiếng Việt 🇻🇳 · Góp ý hoặc báo lỗi dịch thuật để cùng cải thiện',region:'Cập nhật dự án'}:
    {label:'YA DISPONIBLE',message:'Ahora disponible en vietnamita 🇻🇳 · Comparte tus sugerencias o reporta problemas',region:'Actualización del proyecto'};
  for(const [id,value] of [['projectUpdateLabel',copy.label],['projectUpdateMessage',copy.message],['projectUpdateRepeat',copy.message]]){const node=$el(id);if(node)node.textContent=value}
  const update=$el('projectUpdate');if(update)update.setAttribute('aria-label',copy.region);
 }
 const statusMessages={
  'Este dispositivo no tiene voz disponible. Para escuchar sin internet, instala una voz en inglés en los ajustes de texto a voz del teléfono.':'Thiết bị không có giọng đọc. Để nghe khi không có mạng, hãy cài giọng tiếng Anh trong cài đặt đọc văn bản.',
  'Sin conexión no hay una voz inglesa instalada disponible. Descarga una voz en inglés (Estados Unidos) en los ajustes de texto a voz del dispositivo mientras tengas internet.':'Không có giọng tiếng Anh ngoại tuyến. Hãy tải giọng tiếng Anh (Hoa Kỳ) khi có mạng.',
  'Reproduciendo pregunta en inglés.':'Đang đọc câu hỏi bằng tiếng Anh.',
  'No se pudo reproducir sin conexión. Instala una voz inglesa sin conexión en los ajustes de texto a voz de tu dispositivo.':'Không thể phát khi ngoại tuyến. Hãy cài giọng tiếng Anh ngoại tuyến.',
  'No se pudo reproducir la pregunta. Revisa la configuración de texto a voz.':'Không phát được câu hỏi. Hãy kiểm tra cài đặt đọc văn bản.',
  'Usando voz alternativa.':'Đang dùng giọng đọc thay thế.',
  'Reproduciendo grabación.':'Đang phát bản ghi.',
  'No se pudo reproducir este archivo de audio.':'Không thể phát tệp âm thanh này.'
 };
 const originalStatus=status;
 status=function(id,msg){originalStatus(id,isVi()?(statusMessages[msg]||msg):msg)};
 const originalInfo=infoHtml;
 infoHtml=function(){
  if(!isVi())return originalInfo();
  if(chosenTrack==='special')return '<p><strong>Diện đặc biệt 65/20:</strong> người từ 65 tuổi trở lên, đã là thường trú nhân hợp pháp ít nhất 20 năm khi nộp N-400, có thể ôn 20 câu hỏi thuộc bộ đề '+chosenBank+'. USCIS hỏi 10 câu; cần đúng ít nhất 6 câu.</p><p>Người đủ điều kiện có thể thi kiến thức công dân bằng ngôn ngữ họ chọn. Đây chỉ là công cụ học tập, không phải bài thi chính thức.</p><p>Thông tin về quan chức hoặc địa phương có thể thay đổi. Kiểm tra <a href="https://www.uscis.gov/citizenship/testupdates" target="_blank" rel="noopener">USCIS</a> trước buổi phỏng vấn.</p>';
  if(chosenBank==='2008')return '<p>Đề thi công dân phiên bản 2008 có <strong>100 câu hỏi</strong>. USCIS hỏi tối đa 10 câu và cần đúng ít nhất 6 câu. Diện 65/20 có bộ 20 câu hỏi riêng.</p><p>Đây là công cụ ôn tập độc lập; câu hỏi và đáp án chính thức bằng tiếng Anh.</p>';
  return '<p>Bài thi công dân phiên bản 2025 có <strong>128 câu hỏi</strong>. USCIS hỏi tối đa 20 câu và cần đúng ít nhất 12 câu.</p><p>Công cụ này không tổ chức hoặc chấm điểm bài thi USCIS. Kiểm tra thông tin mới nhất tại <a href="https://www.uscis.gov/citizenship/testupdates" target="_blank" rel="noopener">USCIS</a> trước buổi phỏng vấn.</p>';
 };
 const originalRender=render;
 render=function(){
  originalRender();
  const milestone=$el('milestone65');
  if(milestone)milestone.classList.toggle('hidden',!(isVi()&&chosenTrack==='special'&&!reviewOnly&&milestone.dataset.shown==='1'&&!roundFinished));
  if(!isVi())return;
  const counter=$el('counter');
  if(counter)counter.textContent=counter.textContent
   .replace(/^Pregunta /,'Câu hỏi ').replace(/^Incorrecta /,'Câu sai ')
   .replace(' · Ronda aleatoria',' · Lượt ôn ngẫu nhiên').replace(' · Práctica aleatoria',' · Luyện tập ngẫu nhiên')
   .replace(' · 65/20 aleatoria',' · Diện 65/20 ngẫu nhiên');
  const next=$el('next');
  if(next)next.textContent=next.textContent.includes('Finalizar')?'Hoàn thành luyện tập →':(reviewOnly&&roundRated?'Tiếp tục →':'Câu tiếp theo →');
  set('#reveal','Hiển thị đáp án chính thức');
  const x=QUESTIONS[index];
  const dynamic08=chosenBank==='2008'?[20,23,28,29,39,40,43,44,46,47].includes(x.n):[23,29,30,38,39,57,61,62].includes(x.n);
  const explain=$el('explain'),answer=$el('answer');
  if(dynamic08&&answer)answer.textContent=answer.textContent.replace('⚠️ Respuesta variable. Confirma la información vigente antes de tu entrevista:','⚠️ Đáp án có thể thay đổi. Kiểm tra thông tin mới nhất tại:');
  if(explain&&dynamic08){
   const links=$el('locationAnswer');
   if(links&&!links.classList.contains('hidden'))explain.textContent='Hãy tra cứu nguồn chính thức và ghi nhớ đáp án phù hợp với nơi bạn sinh sống. Washington, D.C. và các lãnh thổ có một số trường hợp ngoại lệ theo USCIS.';
   else if(chosenBank==='2008'&&x.n===39)explain.textContent='Tòa án Tối cao có chín thẩm phán; hãy xác nhận lại nếu số lượng thay đổi.';
   else if(chosenBank==='2008'&&x.n===46)explain.textContent='Đảng của Tổng thống có thể thay đổi sau bầu cử. Hãy xác nhận lại trước ngày phỏng vấn.';
   else explain.textContent='Thông tin có thể thay đổi theo thời điểm. Hãy kiểm tra cập nhật chính thức của USCIS trước buổi phỏng vấn.';
  }
  const loc=$el('locationAnswer');
  if(loc&&!loc.classList.contains('hidden')){
   if(answer&&answer.textContent.startsWith('La respuesta depende'))answer.textContent='Đáp án phụ thuộc vào tiểu bang hoặc khu vực nơi bạn sống. Không có một đáp án chung cho toàn Hoa Kỳ.';
   const linkLabels={'Buscar senadores por estado':'Tra cứu thượng nghị sĩ theo tiểu bang','Buscar representante por dirección':'Tra cứu dân biểu theo địa chỉ','Consultar gobernador de tu estado':'Tra cứu thống đốc tiểu bang','Consultar capital de tu estado':'Tra cứu thủ phủ tiểu bang','Consultar gobernadores por estado':'Tra cứu thống đốc theo tiểu bang','Consultar información de tu estado':'Xem thông tin tiểu bang'};
   [...loc.querySelectorAll('a')].forEach(a=>{for(const [spanish,vietnamese] of Object.entries(linkLabels)){if(a.textContent.startsWith(spanish))a.textContent=vietnamese+' ↗'}});
  }
  const sum=$el('summary');
  if(sum)sum.textContent=sum.textContent.replace('Progreso:','Tiến độ:').replace(' incorrectas pendientes',' câu sai cần ôn').replace('Correctas:','Đúng:').replace('Incorrectas:','Sai:');
  const review=$el('reviewQuestions');
  if(review)review.title=review.disabled?'Hãy đánh dấu tất cả câu trả lời trước':'Ôn lại các câu sai';
  if(chosenTrack==='special')showMilestoneIfReached(false);
 };
 const originalEndReview=endReviewRound;
 endReviewRound=function(){
  originalEndReview();
  if(isVi()){
   const left=reviewIndices().length;
   $el('roundMessage').textContent=left?'Đã kết thúc lượt ôn tập. Còn '+left+' câu sai. Bạn có thể ôn lại theo thứ tự khác.':'🎉 Giỏi lắm! Bạn đã sửa tất cả câu sai. Hãy đặt lại tiến độ nếu muốn luyện từ đầu.';
  }
 };
 const originalFinish=finishPracticeRound;
 finishPracticeRound=function(){
  originalFinish();
  if(isVi()){
   const left=reviewIndices().length;
   $el('roundMessage').textContent='Đã hoàn thành '+QUESTIONS.length+' câu hỏi luyện tập. '+(left?'Còn '+left+' câu cần ôn lại.':'Không còn câu trả lời sai cần ôn.')+' Đây chỉ là bài luyện tập, không phải kết quả chính thức.';
  }
 };
 const originalSelection=updateSelection;
 updateSelection=function(){originalSelection();updateAssignment()};
 const originalNavigate=navigatePractice;
 navigatePractice=function(delta){
  const wasNotRated=!roundFinished&&marks[index]!=='correct'&&marks[index]!=='wrong';
  originalNavigate(delta);
  if(isVi()&&wasNotRated)$el('summary').textContent='Trước tiên hãy đánh dấu câu trả lời đúng hoặc sai để tiếp tục.';
 };
 function showMilestoneIfReached(byClick){
  const el=$el('milestone65');
  if(!el||!isVi()||chosenTrack!=='special'||reviewOnly||roundFinished||!Array.isArray(practiceOrder)||practiceOrder.length!==20)return;
  if(el.dataset.shown==='1'&&!byClick)return;
  const firstTen=practiceOrder.slice(0,10);
  const correct=firstTen.filter(i=>marks[i]==='correct').length;
  const rated=firstTen.filter(i=>marks[i]==='correct'||marks[i]==='wrong').length;
  if(correct>=6){
   el.dataset.shown='1';el.classList.remove('hidden');
   el.style.background='#eaf8ed';el.style.borderColor='#7ab68b';el.style.color='#205b34';
   el.textContent='🎉 Chúc mừng! Bạn đã trả lời đúng ít nhất 6 trong 10 câu luyện tập đầu tiên — đạt mốc tham khảo diện 65/20. Đây chỉ là luyện tập, không phải kết quả thi chính thức. Hãy tiếp tục học!';
  }else if(rated===10){
   el.dataset.shown='1';el.classList.remove('hidden');
   el.style.background='#fff5e7';el.style.borderColor='#dfb56f';el.style.color='#754b17';
   el.textContent='Bạn đã hoàn thành 10 câu đầu với '+correct+'/10 câu đúng. Mục tiêu 65/20 là 6/10. Hãy tiếp tục học và ôn các câu khó.';
  }
 }
 [...document.querySelectorAll('[data-mark]')].forEach(b=>b.addEventListener('click',()=>{
  if(!isVi()||mode!=='practice')return;
  showMilestoneIfReached(true);
  const summary=$el('summary');
  if(summary)summary.textContent=summary.textContent.replace('Progreso:','Tiến độ:').replace(' incorrectas pendientes',' câu sai cần ôn');
  const next=$el('next');
  if(reviewOnly&&next)next.textContent='Tiếp tục →';
 }));
 $el('clearMarks')?.addEventListener('click',()=>{
  const el=$el('milestone65');
  if(el&&Object.keys(marks).length===0){el.dataset.shown='';el.classList.add('hidden')}
 });
 $el('continue')?.addEventListener('click',()=>{
  const el=$el('milestone65');
  if(el){el.dataset.shown='';el.classList.add('hidden')}
 });
 function applyLanguage(next){
  if(next!=='vi'&&next!=='es')return;
  window.CP_UI_LANG=next;
  try{localStorage.setItem(localeKey,next)}catch(e){}
  const banner=$el('milestone65');
  if(banner){banner.dataset.shown='';banner.classList.add('hidden')}
  if(chosenBank&&!$el('study').classList.contains('hidden')){
   // Reopen the selected bank with the other language's own marks and order.
   if(!startStudy(false))return;
  }
  localizeStatic();
  if(chosenBank&&!$el('study').classList.contains('hidden'))render();
 }
 const selector=$el('supportLanguage');
 if(selector){selector.value=window.CP_UI_LANG;selector.addEventListener('change',()=>applyLanguage(selector.value))}
 const originalConfirm=window.confirm;
 $el('clearMarks')?.addEventListener('click',()=>{
  // No changes to Spanish confirmation or the original score/reset handlers.
 },{passive:true});
 // Quick Vietnamese onboarding instead of falsely presenting a Spanish video as Vietnamese.
 const vid=$el('tutorialVideo');
 if(vid){
  const guide=document.createElement('div');guide.id='vietnameseTextTutorial';guide.className='vi-beta-note hidden';
  guide.textContent='Cách học: chọn ngày nộp mẫu N-400 và chế độ phù hợp, bấm Tiếp tục, nghe câu hỏi tiếng Anh, đọc bản dịch, tự trả lời rồi xem đáp án chính thức. Đánh dấu đúng hoặc sai để chuyển sang câu tiếp theo.';
  vid.insertAdjacentElement('afterend',guide);
 }
 const beta=document.createElement('p');beta.id='languageBetaNote';beta.className='vi-beta-note hidden';
 beta.textContent='Bản tiếng Việt đang trong giai đoạn beta. Nếu thấy bản dịch chưa rõ, sai hoặc có đề xuất, vui lòng chọn “Báo lỗi hoặc góp ý” ở đầu trang.';
 $el('supportLanguageNote')?.insertAdjacentElement('afterend',beta);
 // Localized sharing: keep the same destination, do not alter the app's routing.
 async function shareLocalized(){
  if(!isVi())return shareProject();
  const data={title:'Ciudadanía Práctica',text:'Học câu hỏi nhập quốc tịch Hoa Kỳ bằng tiếng Anh với bản dịch hỗ trợ tiếng Việt.',url:location.origin+location.pathname};
  if(navigator.share){try{await navigator.share(data);return}catch(e){if(e.name==='AbortError')return}}
  try{await navigator.clipboard.writeText(data.url);$el('shareStatus').textContent='Đã sao chép liên kết.'}
  catch(e){$el('shareStatus').textContent='Chia sẻ liên kết: '+data.url}
 }
 $el('shareHome').onclick=shareLocalized;
 $el('shareStory').onclick=shareLocalized;
 localizeStatic();
})();
