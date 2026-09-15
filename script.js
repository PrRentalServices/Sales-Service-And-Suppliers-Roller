const C=PR_CONFIG;
const topics=["Sales Enquiry","Machine Rental","Machine Availability","Rental / Booking Request","Quotation Request","Service & Repair","Supplier Enquiry","Supplier Registration / Contact","Payment / Transaction Issue","Invoice / GST","Payment Screenshot / UTR","General Enquiry","Complaint","Urgent Support","Other Help"];
const categories=[
 ["Walk Behind Roller","4 products","assets/rw750d-2.webp"],["Construction Machines","7+ products","assets/forward-plate-1.jpg"],["Rental Service","3 products","assets/cc125-2.jpg"],["Roller Rental Services","3 products","assets/rw750d-1.webp"],["Compactors Rental Service","2 products","assets/compactor-3t-1.jpg"],["Steel Bar Bending Machine","1 product","assets/steel-bending-1.jpeg"],["Vibration Roller","1 product","assets/rammer-1.png"],["Bar Bending Machine","1 product","assets/steel-bending-2.webp"],["Mobile Light Tower","2 products",""],["New Items","1 product","assets/soil-roller-1.jpg"]
];
const products=[
 {id:"forward",name:"Forward Plate Compactor",price:"₹75,000 / Piece",images:["assets/forward-plate-1.jpg","assets/forward-plate-2.jpg","assets/forward-plate-3.jpg","assets/forward-plate-4.jpg"],specs:[["Plate Size","400×500 mm"],["Operating Weight","100–120 kg"],["Centrifugal Force","15–20 kN"],["Engine Type","Diesel Engine"],["Compaction Depth","250 mm"],["Application","Paver Block, Landscaping, Industrial Floor, Soil Compaction, Trench Work, GSB Layer"],["Starting System","Recoil Start"],["Plate Material","Cast Steel"],["Travel Speed","0–20 m/min"],["Engine","Greaves 5 HP"]],desc:"A Forward Plate Compactor is a powerful and efficient construction machine designed for compacting soil, sand, gravel, asphalt, and paving materials. Its compact design, easy maneuverability and robust vibration system make it suitable for construction, landscaping, roadwork and infrastructure projects.",tag:"SALE / RENTAL"},
 {id:"rw750d",name:"Walk Behind Roller Rental Service — DYNAPAC RW 750 D",price:"₹3,500 / Day",images:["assets/rw750d-1.webp","assets/rw750d-2.webp","assets/rw750d-3.webp","assets/rw750d-4.jpg","assets/rw750d-5.png","assets/rw750d-6.jpeg"],specs:[["Roller Type","Tandem Roller"],["Operating Weight","750 kg (listing also states 5 Ton; confirm before quotation)"],["Drum Width","600–650 mm (listing contains both values)"],["Power / Fuel","Diesel"],["Rental Basis","Per Day"],["Operator","Without Operator"],["Brand","Dynapac"],["Application","Parking, Compaction, Canal Work, Road Work"],["Location","Karnataka"],["Features","Auto parking brake, keyless entry system"]],desc:"Redline Walk Behind Roller RW 750 D for rental applications. The supplied listing mentions 750 kg and a 600–650 mm drum width, while another listing line contains conflicting figures; PR Rental Services can confirm the exact machine specification before quotation.",tag:"RENTAL"},
 {id:"vib10",name:"Dynapac CC245 — Single Drum Vibratory Roller Rental Service",price:"₹95,000 / Month",images:["assets/cc245.jpg"],specs:[["Roller Type","Vibratory Roller"],["Operating Weight","10 Ton"],["Drum Width","2000 mm"],["Power Source","Diesel"],["Rental Basis","Per Month"],["Operator","With Operator"]],desc:"10-ton soil compactor / vibratory roller available on monthly rental basis. Suitable for heavy compaction work and road construction requirements.",tag:"RENTAL"},
 {id:"mini",name:"Mini Roller Rental Services — Dynapac CC125",price:"₹70,000 / Month",images:["assets/cc125-2.jpg","assets/cc125-3.jpg"],specs:[["Roller Type","Tandem Roller"],["Operating Weight","3 Ton"],["Drum Width","1200 mm"],["Power Source","Diesel"],["Fuel Type","Diesel"],["Rental Basis","Per Month"],["Operator","With Operator"]],desc:"Dynapac CC125 mini / baby roller available on rental basis. Supplied description highlights best-in-class compaction, auto water sprinkling and auto vibration.",tag:"RENTAL"},
 {id:"comp3",name:"3 Ton Compactor Rental Service",price:"₹90,000 / Month",images:["assets/compactor-3t-1.jpg","assets/compactor-3t-2.jpg"],specs:[["Compactor Type","All"],["Operating Weight","All"],["Drum Width","All"],["Fuel Type","As per requirement"],["Rental Basis","As per discussion"],["Operator","With Operator"],["Application","Building, Road Work, Pavement, Canal Work"],["Location","Karnataka, Telangana, Tamil Nadu, Pan India"]],desc:"Heavy-duty compaction performance, suitable for medium-scale projects, with efficient fuel consumption and easy-to-operate controls.",tag:"RENTAL"},
 {id:"soil",name:"Soil Compactor Road Roller Rental Service",price:"₹90,000 / Month",images:["assets/soil-roller-1.jpg","assets/soil-roller-2.png"],specs:[["Machine Type","Ride On"],["Operating Weight","12 Ton"],["Fuel Type","Diesel"],["Roller Type","Single Drum"],["Vibration Force","35 kN"],["Engine Power","100 HP"],["Drum Width","2000 mm"],["Service Location","All over Bangalore and nearby Karnataka"]],desc:"Powerful soil compaction capability, suitable for heavy-duty work, smooth operation and control, and ideal for road construction projects.",tag:"RENTAL"},
 {id:"rammer",name:"Vibratory Rammer Machine",price:"₹70,000 / Piece",images:["assets/rammer-1.png","assets/rammer-2.png","assets/rammer-3.png","assets/rammer-4.png"],specs:[["Power Source","Petrol"],["Brand","STROKE EQUIPMENT"],["Weight","67 kg"],["Engine Type","Petrol Engine"],["Impact Force","13 kN"],["Voltage","220 V"],["Fuel Tank Capacity","2.0 L"]],desc:"A compact and powerful construction machine used for soil compaction in confined areas such as trenches, foundations and road repair sites. Strong impact vibration helps create a stable and solid base.",tag:"SALE / RENTAL"},
 {id:"steel",name:"Steel Bending Machine",price:"₹1,10,000 / Piece",images:["assets/steel-bending-1.jpeg","assets/steel-bending-2.webp"],specs:[["Application","Rebar"],["Max Work Size","42 mm"],["Operation Type","Full automatic"],["Automation Grade","Automatic"],["Suitable Steel Grade","MS"],["Phase Type","Three Phase"],["Body Material","Cast Iron"],["Control Interface","PLC Panel"]],desc:"A steel bending machine is a mechanical or hydraulic device used to bend steel bars, pipes or sheets into desired shapes and angles. It supports construction, fabrication and manufacturing applications and improves productivity and consistency.",tag:"SALE"}
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

function openAi(){
  ai.classList.add('open'); ai.setAttribute('aria-hidden','false'); aiBtn.setAttribute('aria-expanded','true');
  setTimeout(()=>aiInput.focus(),80);
}
function closeAi(){
  ai.classList.remove('open'); ai.setAttribute('aria-hidden','true'); aiBtn.setAttribute('aria-expanded','false');
  if(recognition){try{recognition.stop();}catch(e){}}
}
aiBtn.addEventListener('click',()=>ai.classList.contains('open')?closeAi():openAi());
aiClose.addEventListener('click',closeAi);

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
    ['rw750d',['rw750d','rw 750','walk behind','redline','walk-behind']],
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
  if(/service|services|offer|available|सेवा|सर्विस/.test(s)) return hindi?'PR Rental Services roller rental, sales aur construction equipment services deta hai, including RW750D, Dynapac CC125, Dynapac CC245, plate compactor, soil compactor road roller, vibratory rammer, steel bending machine aur related rental/support services.':'PR Rental Services offers roller rental, sales and construction equipment services, including RW750D, Dynapac CC125, Dynapac CC245, plate compactor, soil compactor road roller, vibratory rammer, steel bending machine and related rental/support services.';
  if(/about|company|business|established|owner|chairman|ceo|leadership|कंपनी|चेयरमैन|सीईओ/.test(s)) return hindi?'PR Rental Services 2025 mein established hua. Business proprietorship hai. Praveen Polepalli Chairman aur Proprietor hain. Pratibha Polepalli CEO hain.':'PR Rental Services was established in 2025. The business is a proprietorship. Praveen Polepalli is Chairman and Proprietor. Pratibha Polepalli is CEO.';
  if(/help|helpdesk|complaint|quotation|supplier|booking|availability|repair|urgent|मदद|शिकायत|बुकिंग/.test(s)) return hindi?'Helpdesk mein Sales Enquiry, Machine Rental, Machine Availability, Booking Request, Quotation, Service & Repair, Supplier Enquiry, Payment/Transaction, Invoice/GST, UTR, General Enquiry, Complaint aur Urgent Support options hain.':'The Helpdesk supports Sales Enquiry, Machine Rental, Machine Availability, Booking Request, Quotation, Service & Repair, Supplier Enquiry, Payment or Transaction, Invoice/GST, UTR, General Enquiry, Complaint and Urgent Support.';
  if(/why|reliable|support|quality|क्यों|सपोर्ट/.test(s)) return 'PR Rental Services focuses on timely and reliable service, affordable rental plans, a wide range of options, customer-focused support, trained staff, flexible rental terms, 24x7 support and trusted client relationships.';
  return hindi?'Main PR Rental Services ke products, rollers, specifications, prices, rental options, services, contact, address, payment, GSTIN aur Helpdesk ke baare mein jawab de sakta hoon. Aap apna sawal bolkar ya type karke pooch sakte hain.':'I can help with PR Rental Services products, roller specifications, prices, rental options, services, contact details, address, payment, GSTIN and Helpdesk. You can type your question or press Speak and ask by voice.';
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
const vp=document.getElementById('zoomViewport'),stage=document.getElementById('siteStage');let scale=1,tx=0,ty=0,drag=false,sx=0,sy=0,stx=0,sty=0;
function apply(){stage.style.transform=`translate(${tx}px,${ty}px) scale(${scale})`;document.getElementById('zoomLevel').textContent=Math.round(scale*100)+'%';}
function clamp(){const lim=scale>1?2200:250;tx=Math.max(-lim,Math.min(lim,tx));ty=Math.max(-lim,Math.min(lim,ty));}
function zoomAt(f,cx,cy){const old=scale;scale=Math.max(.5,Math.min(6,scale*f));const r=vp.getBoundingClientRect();const x=cx-r.left,y=cy-r.top;tx=x-(x-tx)*(scale/old);ty=y-(y-ty)*(scale/old);clamp();apply();}
document.getElementById('zoomIn').onclick=()=>zoomAt(1.2,vp.clientWidth/2,vp.clientHeight/2);document.getElementById('zoomOut').onclick=()=>zoomAt(1/1.2,vp.clientWidth/2,vp.clientHeight/2);document.getElementById('zoomReset').onclick=()=>{scale=1;tx=0;ty=0;apply();};vp.addEventListener('wheel',e=>{e.preventDefault();zoomAt(e.deltaY<0?1.12:1/1.12,e.clientX,e.clientY)},{passive:false});vp.addEventListener('pointerdown',e=>{if(scale<=1)return;drag=true;sx=e.clientX;sy=e.clientY;stx=tx;sty=ty;vp.setPointerCapture(e.pointerId);vp.classList.add('dragging')});vp.addEventListener('pointermove',e=>{if(!drag)return;e.preventDefault();tx=stx+(e.clientX-sx);ty=sty+(e.clientY-sy);clamp();apply()});vp.addEventListener('pointerup',()=>{drag=false;vp.classList.remove('dragging')});vp.addEventListener('pointercancel',()=>{drag=false;vp.classList.remove('dragging')});apply();
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
})();

// Touch-friendly cards and address map.
document.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){const el=e.target.closest('[data-product]');if(el){e.preventDefault();openProduct(el.dataset.product);}}});
const mapUrl='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent('Ground Floor, No. 194, 6th Cross, Maruthi Nagar, Near G R Kalyana Mandapa, Nagashetty Halli, RMV Extension 2nd Stage, Bengaluru Urban, Karnataka 560094');
const addressCard=document.querySelector('.address-card'); if(addressCard){addressCard.setAttribute('role','link');addressCard.setAttribute('tabindex','0');addressCard.addEventListener('click',e=>{if(!e.target.closest('a')) window.open(mapUrl,'_blank');});addressCard.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();window.open(mapUrl,'_blank');}});}
