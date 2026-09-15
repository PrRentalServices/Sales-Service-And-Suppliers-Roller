const C=PR_CONFIG;
const topics=["Sales Enquiry","Machine Rental","Machine Availability","Rental / Booking Request","Quotation Request","Service & Repair","Supplier Enquiry","Supplier Registration / Contact","Payment / Transaction Issue","Invoice / GST","Payment Screenshot / UTR","General Enquiry","Complaint","Urgent Support","Other Help"];
const categories=[
 ["Walk Behind Roller","4 products","assets/embedded-20cc9c78442f5e7d.jpg"],["Construction Machines","7+ products","assets/embedded-46eb9d05c82b5372.jpg"],["Rental Service","3 products","assets/embedded-98eaabbb772ca621.jpg"],["Roller Rental Services","3 products","assets/embedded-9b61e39c2316a7f3.jpg"],["Compactors Rental Service","2 products","assets/embedded-e940f6cbb9d7c517.jpg"],["Steel Bar Bending Machine","1 product","assets/embedded-5eca0a7cc06c6b5e.jpg"],["Vibration Roller","1 product","assets/embedded-84ca55d40407b2eb.jpg"],["Bar Bending Machine","1 product","assets/embedded-acfefa263e3c1aa9.jpg"],["Mobile Light Tower","2 products",""],["New Items","1 product","assets/embedded-7266648f0cc55e9d.jpg"]
];
const products=[
 {id:"forward",name:"Forward Plate Compactor",price:"₹75,000 / Piece",images:["assets/embedded-46eb9d05c82b5372.jpg","assets/embedded-171cf6aa3df40df9.jpg","assets/embedded-1b359dab75ea3a27.jpg","assets/embedded-e9b9a8f6829c05be.jpg"],specs:[["Plate Size","400×500 mm"],["Operating Weight","100–120 kg"],["Centrifugal Force","15–20 kN"],["Engine Type","Diesel Engine"],["Compaction Depth","250 mm"],["Application","Paver Block, Landscaping, Industrial Floor, Soil Compaction, Trench Work, GSB Layer"],["Starting System","Recoil Start"],["Plate Material","Cast Steel"],["Travel Speed","0–20 m/min"],["Engine","Greaves 5 HP"]],desc:"A Forward Plate Compactor is a powerful and efficient construction machine designed for compacting soil, sand, gravel, asphalt, and paving materials. Its compact design, easy maneuverability and robust vibration system make it suitable for construction, landscaping, roadwork and infrastructure projects.",tag:"SALE / RENTAL"},
 {id:"rw750d",name:"Walk Behind Vibrating Roller — DYNAPAC RW 750 D REDLINE",price:"₹6,00,000 - ₹6,50,000",images:["assets/rw750d-user-1.jpg","assets/rw750d-user-2.jpg"],specs:[["Operating Weight","700 kg"],["Drum Width","600 mm"],["Engine Power","9 HP"],["Roller Type","Walk Behind"],["Fuel Type","Diesel"],["Starting System","Electric Start"],["Capacity","Approx. 3 Ton"],["Parking Brake","Hydraulic"],["Engine","Kohler"],["Location","Bengaluru"]],desc:"Dynapac REDLINE walk behind roller powered with Kohler engine. Approx. 750 kg weight / 3T capacity, diesel engine, electric start and hydraulic parking brake. Suitable for road, construction and compaction work. Rental and sales enquiry can be sent through PR Rental Services.",tag:"RENTAL / SALE"}, {id:"vib10",name:"Dynapac CC245 — Single Drum Vibratory Roller Rental Service",price:"₹95,000 / Month",images:["assets/embedded-47b05c07b56fdb0b.jpg"],specs:[["Roller Type","Vibratory Roller"],["Operating Weight","10 Ton"],["Drum Width","2000 mm"],["Power Source","Diesel"],["Rental Basis","Per Month"],["Operator","With Operator"]],desc:"10-ton soil compactor / vibratory roller available on monthly rental basis. Suitable for heavy compaction work and road construction requirements.",tag:"RENTAL"},
 {id:"mini",name:"Mini Roller Rental Services — Dynapac CC125",price:"₹70,000 / Month",images:["assets/embedded-98eaabbb772ca621.jpg","assets/embedded-03c778ef87debd42.jpg"],specs:[["Roller Type","Tandem Roller"],["Operating Weight","3 Ton"],["Drum Width","1200 mm"],["Power Source","Diesel"],["Fuel Type","Diesel"],["Rental Basis","Per Month"],["Operator","With Operator"]],desc:"Dynapac CC125 mini / baby roller available on rental basis. Supplied description highlights best-in-class compaction, auto water sprinkling and auto vibration.",tag:"RENTAL"},
 {id:"comp3",name:"3 Ton Compactor Rental Service",price:"₹90,000 / Month",images:["assets/embedded-e940f6cbb9d7c517.jpg","assets/embedded-e940f6cbb9d7c517.jpg"],specs:[["Compactor Type","All"],["Operating Weight","All"],["Drum Width","All"],["Fuel Type","As per requirement"],["Rental Basis","As per discussion"],["Operator","With Operator"],["Application","Building, Road Work, Pavement, Canal Work"],["Location","Karnataka, Telangana, Tamil Nadu, Pan India"]],desc:"Heavy-duty compaction performance, suitable for medium-scale projects, with efficient fuel consumption and easy-to-operate controls.",tag:"RENTAL"},
 {id:"soil",name:"Soil Compactor Road Roller Rental Service",price:"₹90,000 / Month",images:["assets/embedded-7266648f0cc55e9d.jpg","assets/embedded-7b04c4ff642ab78c.jpg"],specs:[["Machine Type","Ride On"],["Operating Weight","12 Ton"],["Fuel Type","Diesel"],["Roller Type","Single Drum"],["Vibration Force","35 kN"],["Engine Power","100 HP"],["Drum Width","2000 mm"],["Service Location","All over Bangalore and nearby Karnataka"]],desc:"Powerful soil compaction capability, suitable for heavy-duty work, smooth operation and control, and ideal for road construction projects.",tag:"RENTAL"},
 {id:"rammer",name:"Vibratory Rammer Machine",price:"₹70,000 / Piece",images:["assets/embedded-84ca55d40407b2eb.jpg","assets/embedded-f4de00ed6d902949.jpg","assets/embedded-3197094badb64d56.jpg","assets/embedded-22b6d52ce0bed5c3.jpg"],specs:[["Power Source","Petrol"],["Brand","STROKE EQUIPMENT"],["Weight","67 kg"],["Engine Type","Petrol Engine"],["Impact Force","13 kN"],["Voltage","220 V"],["Fuel Tank Capacity","2.0 L"]],desc:"A compact and powerful construction machine used for soil compaction in confined areas such as trenches, foundations and road repair sites. Strong impact vibration helps create a stable and solid base.",tag:"SALE / RENTAL"},
 {id:"steel",name:"Steel Bending Machine",price:"₹1,10,000 / Piece",images:["assets/embedded-5eca0a7cc06c6b5e.jpg","assets/embedded-acfefa263e3c1aa9.jpg"],specs:[["Application","Rebar"],["Max Work Size","42 mm"],["Operation Type","Full automatic"],["Automation Grade","Automatic"],["Suitable Steel Grade","MS"],["Phase Type","Three Phase"],["Body Material","Cast Iron"],["Control Interface","PLC Panel"]],desc:"A steel bending machine is a mechanical or hydraulic device used to bend steel bars, pipes or sheets into desired shapes and angles. It supports construction, fabrication and manufacturing applications and improves productivity and consistency.",tag:"SALE"}
];
function esc(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]));}
function words(s){return s.trim()?s.trim().split(/\s+/).length:0;}
function setCount(el,out){const n=words(el.value);out.textContent=`${n} / 500 words`; if(n>500){const a=el.value.trim().split(/\s+/).slice(0,500);el.value=a.join(" ");out.textContent="500 / 500 words";}}
function whatsapp(msg){window.open(`https://wa.me/${C.whatsapp}?text=${encodeURIComponent(msg)}`,'_blank');}
function makeMessage(title,name,phone,message){return `PR RENTAL SERVICES – WEBSITE REQUEST\n\nType: ${title}\nName: ${name}\nPhone: ${phone}\n\nRequirement:\n${message}\n\nSent from PR Rental Services website.`;}
function renderCategories(){document.getElementById('categoryGrid').innerHTML=categories.map((c,i)=>`<article class="cat-card" data-cat="${i}" tabindex="0" role="button"><div class="cat-media">${c[2]?`<img src="${c[2]}" alt="${esc(c[0])}">`:`<div class="cat-placeholder">PR</div>`}<span>${String(i+1).padStart(2,'0')}</span></div><h3>${esc(c[0])}</h3><small>${esc(c[1])}</small><button class="mini-btn" data-scroll-products>View Products →</button></article>`).join('');}
function renderProducts(){document.getElementById('productGrid').innerHTML=products.map((p,i)=>`<article class="product-card" data-product="${p.id}" tabindex="0" role="button"><div class="product-media"><img src="${p.images[0]}" alt="${esc(p.name)}"><span>${String(i+1).padStart(2,'0')}</span></div><div class="product-body"><div class="tag">${p.tag}</div><h3>${esc(p.name)}</h3><strong class="price">${esc(p.price)}</strong><p>${esc(p.desc.slice(0,150))}…</p><div class="card-actions"><button class="btn dark" data-product="${p.id}">Full Details</button><button class="btn light" data-enquiry="${esc(p.name)}">Enquiry</button></div></div></article>`).join('');}
function fillTopics(){const opts=topics.map(x=>`<option>${x}</option>`).join('');document.getElementById('helpType').innerHTML=opts;document.getElementById('quickHelp').innerHTML=topics.map(x=>`<button data-topic="${esc(x)}">${esc(x)}</button>`).join('');document.getElementById('aiChoices').innerHTML=topics.slice(0,10).map(x=>`<button data-topic="${esc(x)}">${esc(x)}</button>`).join('');}
function openProduct(id){const p=products.find(x=>x.id===id);if(!p)return;const body=document.getElementById('productModalBody');body.innerHTML=`<div class="detail-head"><div><span class="tag">${p.tag}</span><h2>${esc(p.name)}</h2><strong class="detail-price">${esc(p.price)}</strong></div><button class="btn dark" data-enquiry="${esc(p.name)}">Enquire Now</button></div><div class="gallery"><div class="gallery-main"><img id="mainProductImage" src="${p.images[0]}" alt="${esc(p.name)}"></div><div class="thumbs">${p.images.map((im,i)=>`<button class="thumb ${i===0?'active':''}" data-img="${im}"><img src="${im}"></button>`).join('')}</div></div><div class="spec-grid">${p.specs.map(s=>`<div><span>${esc(s[0])}</span><b>${esc(s[1])}</b></div>`).join('')}</div><div class="description"><h3>Product Description</h3><p>${esc(p.desc)}</p></div><div class="detail-actions"><button class="btn dark" data-enquiry="${esc(p.name)}">Yes, I am interested!</button><a class="btn light" href="tel:+917892123389">Call Now</a></div>`;document.getElementById('productModal').classList.add('open');}
const productModal=document.getElementById('productModal');
document.addEventListener('click',e=>{const p=e.target.closest('[data-product]');if(p && !e.target.closest('button,a'))openProduct(p.dataset.product);const en=e.target.closest('[data-enquiry]');if(en){whatsapp(makeMessage('Product Enquiry','Website Visitor','',`I am interested in: ${en.dataset.enquiry}. Please share availability, rental/sale terms, quotation and delivery details.`));}const topic=e.target.closest('[data-topic]');if(topic){document.getElementById('helpType').value=topic.dataset.topic;document.getElementById('helpMessage').focus();document.getElementById('aiPanel').classList.remove('open');document.getElementById('helpdesk').scrollIntoView({behavior:'smooth'});}const img=e.target.closest('[data-img]');if(img){document.getElementById('mainProductImage').src=img.dataset.img;document.querySelectorAll('.thumb').forEach(t=>t.classList.remove('active'));img.classList.add('active');}if(e.target.matches('[data-scroll-products]'))document.getElementById('products').scrollIntoView({behavior:'smooth'});});
document.getElementById('productClose').onclick=()=>productModal.classList.remove('open');productModal.addEventListener('click',e=>{if(e.target===productModal)productModal.classList.remove('open')});
const qrModal=document.getElementById('qrModal');document.getElementById('showQr').onclick=()=>qrModal.classList.add('open');document.getElementById('qrClose').onclick=()=>qrModal.classList.remove('open');qrModal.addEventListener('click',e=>{if(e.target===qrModal)qrModal.classList.remove('open')});document.getElementById('directUpi').onclick=()=>{const url=`upi://pay?pa=${encodeURIComponent(C.UPI_ID)}&pn=${encodeURIComponent(C.businessName)}&cu=INR`;window.location.href=url;};
document.getElementById('readMore').onclick=()=>{document.getElementById('moreAbout').classList.toggle('open');document.getElementById('readMore').textContent=document.getElementById('moreAbout').classList.contains('open')?'− Read Less':'+ Read More';};
const helpMsg=document.getElementById('helpMessage');helpMsg.addEventListener('input',()=>setCount(helpMsg,document.getElementById('wordCount')));document.getElementById('helpForm').addEventListener('submit',e=>{e.preventDefault();if(words(helpMsg.value)>500)return;whatsapp(makeMessage(document.getElementById('helpType').value,document.getElementById('helpName').value,document.getElementById('helpPhone').value,helpMsg.value));});document.getElementById('emailHelp').onclick=()=>{const subject=`PR Rental Services – ${document.getElementById('helpType').value}`;location.href=`mailto:${C.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(makeMessage(document.getElementById('helpType').value,document.getElementById('helpName').value,document.getElementById('helpPhone').value,helpMsg.value))}`;};
const reqMsg=document.getElementById('reqMessage');reqMsg.addEventListener('input',()=>setCount(reqMsg,document.getElementById('reqCount')));document.getElementById('requirementForm').addEventListener('submit',e=>{e.preventDefault();if(words(reqMsg.value)>500)return;whatsapp(makeMessage('Submit Requirement',document.getElementById('reqName').value,document.getElementById('reqPhone').value,reqMsg.value));});
const ai=document.getElementById('aiPanel');
const aiBtn=document.getElementById('aiBtn');
const aiClose=document.getElementById('aiClose');
const aiInput=document.getElementById('aiInput');
const aiChat=document.getElementById('aiChat');
const aiSend=document.getElementById('aiSend');
const aiMic=document.getElementById('aiMic');
const aiStop=document.getElementById('aiStop');
const aiLang=document.getElementById('aiLang');
const aiVoiceStatus=document.getElementById('aiVoiceStatus');
let recognition=null, speaking=false;
const SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;

const AI_GREETING='Welcome to PR Rental Services. How are you today? How can I help you?';
let aiWelcomed=false;
function openAi(){
  ai.classList.add('open'); ai.setAttribute('aria-hidden','false'); aiBtn.setAttribute('aria-expanded','true');
  setTimeout(()=>{aiInput.focus(); if(!aiWelcomed){aiWelcomed=true; aiSpeak(AI_GREETING);}},120);
}
function closeAi(){
  ai.classList.remove('open'); ai.setAttribute('aria-hidden','true'); aiBtn.setAttribute('aria-expanded','false');
  if(recognition){try{recognition.stop();}catch(e){}}
}
aiBtn.addEventListener('click',()=>ai.classList.contains('open')?closeAi():openAi());
aiClose.addEventListener('click',closeAi);

// Stop all AI speech/listening whenever the user touches/clicks anywhere outside the AI controls.
function stopAiVoice(){
  if('speechSynthesis' in window) speechSynthesis.cancel();
  if(recognition){try{recognition.stop();}catch(e){}}
  speaking=false;
  if(aiVoiceStatus) aiVoiceStatus.textContent='Voice stopped';
}
document.addEventListener('pointerdown',e=>{
  if(!e.target.closest('#aiPanel,#aiBtn')) stopAiVoice();
},{passive:true});
document.addEventListener('touchstart',e=>{
  if(!e.target.closest('#aiPanel,#aiBtn')) stopAiVoice();
},{passive:true});
window.addEventListener('blur',stopAiVoice);

if(document.addEventListener) document.addEventListener('keydown',e=>{if(e.key==='Escape'&&ai.classList.contains('open'))closeAi();});

function aiAdd(text, who='bot'){
  const el=document.createElement('div'); el.className='ai-msg '+(who==='user'?'ai-msg-user':'ai-msg-bot'); el.textContent=text; aiChat.appendChild(el); aiChat.scrollTop=aiChat.scrollHeight;
}
function aiSpeak(text){
  if(!('speechSynthesis' in window)){aiVoiceStatus.textContent='Voice playback is not supported';return;}
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text);
  u.lang=aiLang.value||'en-IN'; u.rate=.94; u.pitch=1; u.volume=1;
  const voices=speechSynthesis.getVoices();
  const wanted=u.lang.toLowerCase();
  const v=voices.find(x=>x.lang&&x.lang.toLowerCase()===wanted)||voices.find(x=>x.lang&&x.lang.toLowerCase().startsWith(wanted.slice(0,2)))||voices.find(x=>/^en/i.test(x.lang));
  if(v)u.voice=v;
  u.onstart=()=>{speaking=true;aiVoiceStatus.textContent='Speaking…'};
  u.onend=()=>{speaking=false;aiVoiceStatus.textContent='Voice ready'};
  u.onerror=()=>{speaking=false;aiVoiceStatus.textContent='Voice playback unavailable'};
  speechSynthesis.speak(u);
}
function aiProductAnswer(q){
  const s=q.toLowerCase();
  const aliases=[
    ['rw750d',['rw750d','rw 750','walk behind','walk behind vibrating roller','redline','walk-behind','700 kg','600 mm','9 hp','kholer','kohler','3t','3 ton capacity']],
    ['mini',['cc125','cc 125','mini roller','baby roller','baby roller mini']],
    ['vib10',['cc245','cc 245','10 ton','10-ton','single drum vibratory','vibratory roller']],
    ['soil',['12 ton','12-ton','soil compactor','road roller']],
    ['plate',['plate compactor','forward plate','rv80']],
    ['comp3',['3 ton','3-ton compactor']],
    ['steel',['steel bending','bar bending','rebar']],
    ['rammer',['rammer','earth rammer','vibratory rammer']]
  ];
  for(const [id,keys] of aliases){
    if(keys.some(k=>s.includes(k))){const p=products.find(x=>x.id===id);if(!p)continue;return `${p.name}. Price: ${p.price}. ${p.desc} ${p.specs.map(x=>x[0]+': '+x[1]).join('. ')}.`;}
  }
  return null;
}
function aiAnswer(q){
  const s=q.toLowerCase().trim(); if(!s)return 'Please ask me a question about PR Rental Services.';
  const p=aiProductAnswer(s); if(p)return p;
  const hindi=/[\u0900-\u097F]/.test(q);
  if(/price|rate|cost|rent|rental|how much|कितना|किराया|रेट|कीमत/.test(s)) return hindi?'PR Rental Services ke current listed rates: Forward Plate Compactor ₹75,000 per piece; RW750D ₹3,500 per day; Dynapac CC245 ₹95,000 per month; Dynapac CC125 ₹70,000 per month; 3 Ton Compactor ₹90,000 per month; Soil Compactor Road Roller ₹90,000 per month; Vibratory Rammer ₹70,000 per piece; Steel Bending Machine ₹1,10,000 per piece.':'Current listed PR Rental Services rates are: Forward Plate Compactor ₹75,000 per piece; RW750D ₹3,500 per day; Dynapac CC245 ₹95,000 per month; Dynapac CC125 ₹70,000 per month; 3 Ton Compactor ₹90,000 per month; Soil Compactor Road Roller ₹90,000 per month; Vibratory Rammer ₹70,000 per piece; Steel Bending Machine ₹1,10,000 per piece.';
  if(/phone|mobile|call|contact number|number|फोन|मोबाइल|नंबर/.test(s)) return hindi?'PR Rental Services ke phone numbers 7892123389 aur 9980615715 hain. Website par Call buttons se seedha dialer khulega.':'You can call PR Rental Services on 7892123389 or 9980615715. The website Call buttons open the phone dialer.';
  if(/whatsapp|whats app|व्हाट्स/.test(s)) return hindi?'WhatsApp button se PR Rental Services ko direct WhatsApp message bhej sakte hain.':'Use the WhatsApp button to open a direct WhatsApp chat with PR Rental Services.';
  if(/email|mail|ईमेल/.test(s)) return hindi?'Email: sales.prrentals25@gmail.com. Email button se mail app khul jayega.':'The PR Rental Services email is sales.prrentals25@gmail.com. Tap the email button to open your email app.';
  if(/address|location|where|map|office|पता|कहां|लोकेशन/.test(s)) return hindi?'Office address: Ground Floor, No. 194, 6th Cross, Maruthi Nagar, Near G R Kalyana Mandapa, Nagashetty Halli, RMV Extension 2nd Stage, Bengaluru Urban, Karnataka 560094. Address ya Get Directions dabakar map khol sakte hain.':'The office address is Ground Floor, No. 194, 6th Cross, Maruthi Nagar, Near G R Kalyana Mandapa, Nagashetty Halli, RMV Extension 2nd Stage, Bengaluru Urban, Karnataka 560094. Tap Address or Get Directions to open the map.';
  if(/gst|gstin|tax/.test(s)) return 'The GSTIN is 29BFVPP3412E1Z6.';
  if(/upi|payment|pay|qr|transaction|utr|भुगतान|पेमेंट|क्यूआर/.test(s)) return hindi?'PR Rental Services ke liye payment QR aur direct UPI button website par hai. Payment ke baad UTR ya screenshot Helpdesk se submit kar sakte hain.':'PR Rental Services has a payment QR and a direct UPI button on the website. After payment, submit the UTR or payment screenshot through Helpdesk.';
  if(/service|services|offer|available|सेवा|सर्विस/.test(s)) return hindi?'PR Rental Services roller rental, sales aur construction equipment services deta hai, including RW750D, Dynapac CC125, Dynapac CC245, plate compactor, soil compactor road roller, vibratory rammer, steel bending machine aur related rental/support services.':'PR Rental Services offers sales, service and rental support for construction equipment. Services include Walk Behind Vibrating Roller / DYNAPAC RW 750 D REDLINE, Walk Behind Roller rental, Dynapac CC125 Mini Roller, Dynapac CC245 Single Drum Vibratory Roller, 3 Ton Compactor, Soil Compactor Road Roller, Forward Plate Compactor, Reversible Plate Compactor, Vibratory Rammer, Steel/Bar Bending Machine and related equipment support.';
  if(/about|company|business|established|owner|chairman|ceo|leadership|कंपनी|चेयरमैन|सीईओ/.test(s)) return hindi?'PR Rental Services 2025 mein established hua. Business proprietorship hai. Praveen Polepalli Chairman aur Proprietor hain. Pratibha Polepalli CEO hain.':'PR Rental Services was established in 2025. The business is a proprietorship. Praveen Polepalli is Chairman and Proprietor. Pratibha Polepalli is CEO.';
  if(/help|helpdesk|complaint|quotation|supplier|booking|availability|repair|urgent|मदद|शिकायत|बुकिंग/.test(s)) return hindi?'Helpdesk mein Sales Enquiry, Machine Rental, Machine Availability, Booking Request, Quotation, Service & Repair, Supplier Enquiry, Payment/Transaction, Invoice/GST, UTR, General Enquiry, Complaint aur Urgent Support options hain.':'The Helpdesk supports Sales Enquiry, Machine Rental, Machine Availability, Booking Request, Quotation, Service & Repair, Supplier Enquiry, Payment or Transaction, Invoice/GST, UTR, General Enquiry, Complaint and Urgent Support.';
  if(/why|reliable|support|quality|क्यों|सपोर्ट/.test(s)) return 'PR Rental Services focuses on timely and reliable service, affordable rental plans, a wide range of options, customer-focused support, trained staff, flexible rental terms, 24x7 support and trusted client relationships.';
  return 'Welcome to PR Rental Services. How are you today? I can help with our services, machines, specifications, prices, rental or sale options, availability, booking, quotation, contact details, address, payment, GSTIN and Helpdesk. You can type your question or press Speak.';
}
function aiAsk(q){const text=q.trim();if(!text)return;aiAdd(text,'user');const ans=aiAnswer(text);aiAdd(ans,'bot');aiSpeak(ans);}
aiSend.onclick=()=>{aiAsk(aiInput.value);aiInput.value='';aiInput.focus();};
aiInput.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();aiSend.click();}});
aiStop.onclick=()=>{if('speechSynthesis'in window)speechSynthesis.cancel();if(recognition){try{recognition.stop();}catch(e){}}aiVoiceStatus.textContent='Voice stopped';};
function setupRecognition(){
  if(!SpeechRecognition){aiMic.disabled=true;aiVoiceStatus.textContent='Speech input not supported in this browser';return;}
  recognition=new SpeechRecognition(); recognition.lang=aiLang.value||'en-IN'; recognition.interimResults=false; recognition.continuous=false; recognition.maxAlternatives=2;
  recognition.onstart=()=>{aiVoiceStatus.textContent='Listening…';aiMic.classList.add('listening');};
  recognition.onend=()=>{aiMic.classList.remove('listening');if(aiVoiceStatus.textContent==='Listening…')aiVoiceStatus.textContent='Voice ready';};
  recognition.onerror=e=>{aiMic.classList.remove('listening');aiVoiceStatus.textContent=e.error==='not-allowed'?'Microphone permission denied':'Could not hear. Try again.';};
  recognition.onresult=e=>{const text=e.results[0][0].transcript;aiInput.value=text;aiAsk(text);aiInput.value='';};
}
setupRecognition();
aiLang.addEventListener('change',()=>{if(recognition)recognition.lang=aiLang.value;});
aiMic.onclick=()=>{if(!SpeechRecognition){aiVoiceStatus.textContent='Speech input not supported in this browser';return;}openAi();try{speechSynthesis.cancel();recognition.lang=aiLang.value||'en-IN';recognition.start();}catch(err){aiVoiceStatus.textContent='Microphone is already active';}};
if('speechSynthesis'in window)speechSynthesis.onvoiceschanged=()=>{};

document.getElementById('menuBtn').onclick=()=>document.getElementById('nav').classList.toggle('open');
// Zoom + drag/pan stage
const vp=document.getElementById('zoomViewport'),stage=document.getElementById('siteStage');
let scale=1;
function apply(){
  stage.style.zoom=scale;
  document.getElementById('zoomLevel').textContent=Math.round(scale*100)+'%';
}
function zoomTo(next){scale=Math.max(0.75,Math.min(3,next));apply();}
document.getElementById('zoomIn').onclick=()=>zoomTo(scale*1.2);
document.getElementById('zoomOut').onclick=()=>zoomTo(scale/1.2);
document.getElementById('zoomReset').onclick=()=>zoomTo(1);
vp.addEventListener('wheel',e=>{
  // Normal mouse-wheel always scrolls the page. Ctrl+wheel is reserved for website zoom.
  if(e.ctrlKey){e.preventDefault();zoomTo(scale*(e.deltaY<0?1.08:1/1.08));}
},{passive:false});
apply();

renderCategories();renderProducts();fillTopics();


// Main heading/logo photo strip: drag on desktop/mobile and keep every photo reachable.
(() => {
  const strip = document.getElementById('photoStrip');
  if (!strip) return;
  let down = false, startX = 0, startScroll = 0, moved = false;
  strip.addEventListener('pointerdown', e => { down = true; moved = false; startX = e.clientX; startScroll = strip.scrollLeft; strip.classList.add('dragging'); strip.setPointerCapture?.(e.pointerId); });
  strip.addEventListener('pointermove', e => { if (!down) return; const dx = e.clientX - startX; if (Math.abs(dx) > 4) moved = true; strip.scrollLeft = startScroll - dx; });
  const end = () => { down = false; strip.classList.remove('dragging'); };
  strip.addEventListener('pointerup', end); strip.addEventListener('pointercancel', end); strip.addEventListener('pointerleave', end);
  strip.addEventListener('wheel', e => { if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) { e.preventDefault(); strip.scrollLeft += e.deltaY; } }, {passive:false});
  strip.addEventListener('click', e => { if (moved) { e.preventDefault(); e.stopPropagation(); } }, true);

  // Fast, continuous right-to-left auto-scroll. User can still touch/drag/wheel normally.
  const track = document.getElementById('photoTrack');
  if (track && track.children.length) {
    const originals = Array.from(track.children);
    originals.forEach(item => {
      const clone = item.cloneNode(true);
      clone.setAttribute('aria-hidden','true');
      track.appendChild(clone);
    });
    let pausedUntil = 0;
    const pauseAuto = () => { pausedUntil = performance.now() + 1800; };
    strip.addEventListener('pointerdown', pauseAuto);
    strip.addEventListener('wheel', pauseAuto, {passive:true});
    strip.addEventListener('touchstart', pauseAuto, {passive:true});
    const step = () => {
      if (!down && performance.now() >= pausedUntil) {
        strip.scrollLeft += 1.85;
        const half = track.scrollWidth / 2;
        if (half > 0 && strip.scrollLeft >= half) strip.scrollLeft -= half;
      }
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
})();

// Touch-friendly cards and address map.
document.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){const el=e.target.closest('[data-product]');if(el){e.preventDefault();openProduct(el.dataset.product);}}});
const mapUrl='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent('Ground Floor, No. 194, 6th Cross, Maruthi Nagar, Near G R Kalyana Mandapa, Nagashetty Halli, RMV Extension 2nd Stage, Bengaluru Urban, Karnataka 560094');
const addressCard=document.querySelector('.address-card'); if(addressCard){addressCard.setAttribute('role','link');addressCard.setAttribute('tabindex','0');addressCard.addEventListener('click',e=>{if(!e.target.closest('a')) window.open(mapUrl,'_blank');});addressCard.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();window.open(mapUrl,'_blank');}});}
