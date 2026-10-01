const books = [
{t:'The Shining',a:'Stephen King',c:'Horror',p:17.00,op:20.00,isbn:'9780307743657',r:4.8,d:'A landmark haunted-hotel novel blending isolation, family tension and supernatural terror.'},
{t:'It',a:'Stephen King',c:'Horror',p:22.00,isbn:'9781501142970',r:4.7,d:'A group of childhood friends confront an ancient evil haunting their hometown.'},
{t:'Dracula',a:'Bram Stoker',c:'Horror',p:9.99,isbn:'9780141439846',r:4.5,d:'The definitive Gothic vampire classic that helped shape modern horror.'},
{t:'The Haunting of Hill House',a:'Shirley Jackson',c:'Horror',p:17.00,isbn:'9780143039983',r:4.6,d:'A chilling psychological ghost story set inside an infamous mansion.'},
{t:'Mexican Gothic',a:'Silvia Moreno-Garcia',c:'Horror',p:18.00,isbn:'9780525620808',r:4.4,d:'A glamorous 1950s Gothic mystery filled with family secrets and dread.'},

{t:'The Hunger Games',a:'Suzanne Collins',c:'Action & Adventure',p:14.99,isbn:'9780439023528',r:4.8,d:'A high-stakes fight for survival in a dystopian televised arena.'},
{t:'Jurassic Park',a:'Michael Crichton',c:'Action & Adventure',p:12.99,isbn:'9780345538987',r:4.7,d:'Science, suspense and survival collide when cloned dinosaurs escape control.'},
{t:'The Martian',a:'Andy Weir',c:'Action & Adventure',p:19.00,isbn:'9780553418026',r:4.8,d:'An astronaut stranded on Mars engineers his own impossible rescue.'},
{t:'Treasure Island',a:'Robert Louis Stevenson',c:'Action & Adventure',p:9.99,isbn:'9780141321004',r:4.4,d:'Pirates, buried treasure and betrayal in the adventure classic.'},
{t:'The Bourne Identity',a:'Robert Ludlum',c:'Action & Adventure',p:10.99,isbn:'9780553593549',r:4.5,d:'An amnesiac operative races to uncover his identity while enemies close in.'},

{t:'The Hobbit',a:'J. R. R. Tolkien',c:'Fantasy',p:18.99,isbn:'9780547928227',r:4.9,d:'Bilbo Baggins leaves his quiet home for an unforgettable quest.'},
{t:'Fourth Wing',a:'Rebecca Yarros',c:'Fantasy',p:29.99,isbn:'9781649374042',r:4.7,d:'A young scribe enters a brutal war college for dragon riders.'},
{t:"Harry Potter and the Sorcerer's Stone",a:'J. K. Rowling',c:'Fantasy',p:12.99,isbn:'9780590353427',r:4.9,d:'The beginning of a magical school adventure that became a modern classic.'},
{t:'A Game of Thrones',a:'George R. R. Martin',c:'Fantasy',p:22.00,isbn:'9780553593716',r:4.8,d:'Noble houses battle for power while an ancient danger returns.'},
{t:'The Name of the Wind',a:'Patrick Rothfuss',c:'Fantasy',p:19.00,isbn:'9780756404741',r:4.8,d:'A legendary hero tells the true story behind his own myth.'},

{t:'Gone Girl',a:'Gillian Flynn',c:'Mystery & Thriller',p:18.00,isbn:'9780307588371',r:4.6,d:'A marriage becomes a media spectacle after a wife disappears.'},
{t:'The Silent Patient',a:'Alex Michaelides',c:'Mystery & Thriller',p:17.99,isbn:'9781250301697',r:4.7,d:'A psychotherapist becomes obsessed with a famous patient who refuses to speak.'},
{t:'The Girl with the Dragon Tattoo',a:'Stieg Larsson',c:'Mystery & Thriller',p:16.00,isbn:'9780307454546',r:4.7,d:'A journalist and hacker investigate a decades-old disappearance.'},
{t:'The Thursday Murder Club',a:'Richard Osman',c:'Mystery & Thriller',p:18.00,isbn:'9781984880987',r:4.6,d:'Four retirees turn their weekly cold-case hobby into a real investigation.'},
{t:'The Woman in the Window',a:'A. J. Finn',c:'Mystery & Thriller',p:18.00,isbn:'9780062678423',r:4.4,d:'An agoraphobic woman believes she witnessed a crime across the street.'},

{t:'It Ends with Us',a:'Colleen Hoover',c:'Romance',p:14.50,isbn:'9781501110368',r:4.6,d:'A relationship forces one woman to confront difficult patterns from her past.'},
{t:'The Love Hypothesis',a:'Ali Hazelwood',c:'Romance',p:16.00,isbn:'9780593336823',r:4.7,d:'A fake relationship between scientists starts feeling unexpectedly real.'},
{t:'Pride and Prejudice',a:'Jane Austen',c:'Romance',p:9.99,isbn:'9780141439518',r:4.9,d:'Wit, class and attraction collide in one of literature’s defining romances.'},
{t:'The Notebook',a:'Nicholas Sparks',c:'Romance',p:17.99,isbn:'9781455582877',r:4.6,d:'A sweeping love story about memory, devotion and enduring connection.'},
{t:'People We Meet on Vacation',a:'Emily Henry',c:'Romance',p:16.99,isbn:'9781984806758',r:4.6,d:'Two best friends take one last vacation to repair what changed between them.'},

{t:'Dune',a:'Frank Herbert',c:'Science Fiction',p:18.00,isbn:'9780441172719',r:4.9,d:'Politics, ecology, prophecy and survival on the desert world of Arrakis.'},
{t:'Project Hail Mary',a:'Andy Weir',c:'Science Fiction',p:18.00,isbn:'9780593135228',r:4.9,d:'A lone astronaut wakes on a mission that may determine humanity’s future.'},
{t:'1984',a:'George Orwell',c:'Science Fiction',p:9.99,isbn:'9780451524935',r:4.8,d:'A chilling vision of surveillance, propaganda and authoritarian control.'},
{t:'Ready Player One',a:'Ernest Cline',c:'Science Fiction',p:18.00,isbn:'9780307887443',r:4.6,d:'A virtual-reality treasure hunt turns into a race for control of a digital world.'},
{t:"Ender's Game",a:'Orson Scott Card',c:'Science Fiction',p:9.99,isbn:'9780812550702',r:4.7,d:'A gifted child is trained through war games to fight an alien threat.'},

{t:'Atomic Habits',a:'James Clear',c:'Self-Help',p:22.00,isbn:'9780735211292',r:4.9,d:'A practical system for building better habits through small, repeatable changes.'},
{t:'The 7 Habits of Highly Effective People',a:'Stephen R. Covey',c:'Self-Help',p:16.99,isbn:'9781982137274',r:4.7,d:'A principle-centered framework for effectiveness in work and life.'},
{t:'The Subtle Art of Not Giving a F*ck',a:'Mark Manson',c:'Self-Help',p:16.99,isbn:'9780062457714',r:4.5,d:'An unconventional guide to choosing what deserves your attention.'},
{t:'How to Win Friends and Influence People',a:'Dale Carnegie',c:'Self-Help',p:16.99,isbn:'9780671027032',r:4.8,d:'Timeless communication principles for stronger personal and professional relationships.'},
{t:'Deep Work',a:'Cal Newport',c:'Self-Help',p:18.99,isbn:'9781455586691',r:4.7,d:'A guide to focused, distraction-free work in a noisy world.'},

{t:'The Psychology of Money',a:'Morgan Housel',c:'Business & Money',p:19.99,isbn:'9780857197689',r:4.9,d:'Short lessons on the behavior and emotions that shape financial decisions.'},
{t:'Rich Dad Poor Dad',a:'Robert T. Kiyosaki',c:'Business & Money',p:12.99,isbn:'9781612680194',r:4.6,d:'A popular introduction to assets, liabilities and financial thinking.'},
{t:'Zero to One',a:'Peter Thiel',c:'Business & Money',p:18.00,isbn:'9780804139298',r:4.6,d:'Ideas on startups, innovation and creating something genuinely new.'},
{t:'The Lean Startup',a:'Eric Ries',c:'Business & Money',p:18.00,isbn:'9780307887894',r:4.6,d:'A methodology for testing ideas quickly and building sustainable businesses.'},
{t:'Good to Great',a:'Jim Collins',c:'Business & Money',p:18.99,isbn:'9780066620992',r:4.7,d:'Research-driven lessons on how companies make sustained leaps in performance.'},

{t:'Steve Jobs',a:'Walter Isaacson',c:'Biography',p:24.00,isbn:'9781451648539',r:4.8,d:'A deeply reported biography of the Apple cofounder and product visionary.'},
{t:'Becoming',a:'Michelle Obama',c:'Biography',p:20.00,isbn:'9781524763138',r:4.8,d:'A memoir tracing family, education, public life and personal growth.'},
{t:'Spare',a:'Prince Harry',c:'Biography',p:22.00,isbn:'9780593593806',r:4.5,d:'A personal memoir about royal life, grief, family and independence.'},
{t:'Elon Musk',a:'Walter Isaacson',c:'Biography',p:35.00,isbn:'9781982181284',r:4.6,d:'A detailed portrait of the entrepreneur behind Tesla, SpaceX and other ventures.'},
{t:'The Diary of a Young Girl',a:'Anne Frank',c:'Biography',p:8.99,isbn:'9780553577129',r:4.9,d:'Anne Frank’s enduring wartime diary of adolescence, fear and hope.'},

{t:'Sapiens',a:'Yuval Noah Harari',c:'History',p:24.99,isbn:'9780062316097',r:4.7,d:'A sweeping account of human history from early Homo sapiens to modern societies.'},
{t:'Guns, Germs, and Steel',a:'Jared Diamond',c:'History',p:22.00,isbn:'9780393354324',r:4.5,d:'An influential exploration of geography, technology and uneven societal development.'},
{t:'1776',a:'David McCullough',c:'History',p:18.00,isbn:'9780743226721',r:4.7,d:'A vivid account of the pivotal military year of the American Revolution.'},
{t:'The Wright Brothers',a:'David McCullough',c:'History',p:22.00,isbn:'9781476728742',r:4.7,d:'The story of two brothers whose persistence changed transportation forever.'},
{t:"A People's History of the United States",a:'Howard Zinn',c:'History',p:21.00,isbn:'9780062397348',r:4.6,d:'A widely read alternative narrative of U.S. history focused on social movements.'},

{t:"Charlotte's Web",a:'E. B. White',c:'Children',p:10.99,isbn:'9780064400558',r:4.9,d:'A beloved story of friendship between a pig and a remarkably clever spider.'},
{t:'The Very Hungry Caterpillar',a:'Eric Carle',c:'Children',p:10.99,isbn:'9780399226908',r:4.9,d:'A colorful picture-book classic about counting, food and transformation.'},
{t:'Where the Wild Things Are',a:'Maurice Sendak',c:'Children',p:9.99,isbn:'9780064431781',r:4.9,d:'A timeless imaginative journey into a land of wild creatures.'},
{t:'The Gruffalo',a:'Julia Donaldson',c:'Children',p:8.99,isbn:'9780142403877',r:4.9,d:'A clever little mouse invents a monster — then meets one.'},
{t:'Matilda',a:'Roald Dahl',c:'Children',p:8.99,isbn:'9780142410370',r:4.9,d:'A brilliant young reader discovers unusual powers and stands up to cruel adults.'},

{t:'The Great Gatsby',a:'F. Scott Fitzgerald',c:'Classics',p:17.00,isbn:'9780743273565',r:4.7,d:'A glittering, tragic portrait of ambition and illusion in the Jazz Age.'},
{t:'To Kill a Mockingbird',a:'Harper Lee',c:'Classics',p:11.99,isbn:'9780061120084',r:4.9,d:'A coming-of-age classic centered on justice, empathy and moral courage.'},
{t:'The Alchemist',a:'Paulo Coelho',c:'Classics',p:17.99,isbn:'9780061122415',r:4.7,d:'A philosophical fable about a shepherd pursuing a personal legend.'},
{t:'Little Women',a:'Louisa May Alcott',c:'Classics',p:11.99,isbn:'9780147514011',r:4.8,d:'The enduring story of the March sisters growing up, creating and loving.'},
{t:'Jane Eyre',a:'Charlotte Brontë',c:'Classics',p:9.99,isbn:'9780141441146',r:4.8,d:'A fiercely independent heroine searches for dignity, love and belonging.'},

{t:'The Fault in Our Stars',a:'John Green',c:'Young Adult',p:14.99,isbn:'9780525478812',r:4.7,d:'Two teenagers fall in love while confronting illness and the limits of time.'},
{t:'The Book Thief',a:'Markus Zusak',c:'Young Adult',p:14.99,isbn:'9780375842207',r:4.8,d:'A young girl in wartime Germany finds refuge in stolen books and words.'},
{t:'The Lightning Thief',a:'Rick Riordan',c:'Young Adult',p:8.99,isbn:'9780786838653',r:4.8,d:'A modern demigod discovers Greek myths are very real — and very dangerous.'},
{t:'The Giver',a:'Lois Lowry',c:'Young Adult',p:11.99,isbn:'9780544336261',r:4.7,d:'A boy discovers the hidden costs behind his seemingly perfect society.'},
{t:'Divergent',a:'Veronica Roth',c:'Young Adult',p:15.99,isbn:'9780062024039',r:4.6,d:'A teenager challenges the rigid factions dividing a dystopian city.'},

{t:'Milk and Honey',a:'Rupi Kaur',c:'Poetry',p:14.99,isbn:'9781449474256',r:4.5,d:'A collection exploring love, loss, trauma, healing and femininity.'},
{t:'The Sun and Her Flowers',a:'Rupi Kaur',c:'Poetry',p:16.99,isbn:'9781449486792',r:4.5,d:'Poems about growth, ancestry, migration, love and self-renewal.'},
{t:'Leaves of Grass',a:'Walt Whitman',c:'Poetry',p:13.99,isbn:'9780140421996',r:4.7,d:'Whitman’s expansive celebration of self, nature, democracy and the body.'},
{t:'The Complete Poems of Emily Dickinson',a:'Emily Dickinson',c:'Poetry',p:18.99,isbn:'9780316184137',r:4.8,d:'A broad collection of Dickinson’s compressed, inventive and enduring poems.'},
{t:'The Odyssey',a:'Homer',c:'Poetry',p:14.99,isbn:'9780140268867',r:4.9,d:'The foundational epic of Odysseus’s long journey home after the Trojan War.'}
];

const icons={'Horror':'☾','Action & Adventure':'⚔','Fantasy':'✦','Mystery & Thriller':'⌕','Romance':'♥','Science Fiction':'◌','Self-Help':'↗','Business & Money':'▦','Biography':'◉','History':'⌛','Children':'☀','Classics':'❦','Young Adult':'★','Poetry':'✎'};
const categoryOrder=[...new Set(books.map(b=>b.c))];
let active='All'; let cart=JSON.parse(localStorage.getItem('almatv-cart')||'[]');
const $=s=>document.querySelector(s);
const cover=b=>`https://covers.openlibrary.org/b/isbn/${b.isbn}-L.jpg`;
const esc=s=>s.replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
function fallback(el,b){const colors=['#123047','#1d4d42','#6f2330','#78622f','#2d355c','#5c326b']; const bg=colors[Math.abs([...b.t].reduce((n,c)=>n+c.charCodeAt(0),0))%colors.length]; const svg=`<svg xmlns='http://www.w3.org/2000/svg' width='480' height='680'><rect width='100%' height='100%' fill='${bg}'/><rect x='26' y='26' width='428' height='628' rx='8' fill='none' stroke='rgba(255,255,255,.26)' stroke-width='2'/><text x='42' y='86' fill='#83ead3' font-family='Arial' font-size='18' font-weight='700'>${esc(b.c.toUpperCase())}</text><text x='42' y='270' fill='white' font-family='Georgia' font-size='38' font-weight='700'>${esc(b.t).match(/.{1,18}(?:\s|$)/g)?.slice(0,4).map((x,i)=>`<tspan x='42' dy='${i?48:0}'>${x.trim()}</tspan>`).join('')||esc(b.t)}</text><text x='42' y='585' fill='rgba(255,255,255,.75)' font-family='Arial' font-size='20'>${esc(b.a)}</text><text x='42' y='625' fill='#83ead3' font-family='Arial' font-size='15'>almatv-es</text></svg>`; el.onerror=null; el.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg)}
function imgHTML(b){return `<img src="${cover(b)}" alt="${esc(b.t)} book cover" loading="lazy" onerror='fallback(this, books[${books.indexOf(b)}])'>`}
function renderCategories(){const tiles=$('#categoryTiles');tiles.innerHTML=categoryOrder.map(c=>`<button class="category-tile" onclick="selectCategory('${c.replace(/'/g,"\\'")}')"><span class="cat-icon">${icons[c]||'◇'}</span><div><b>${c}</b><span>${books.filter(b=>b.c===c).length} books</span></div></button>`).join(''); const chips=$('#filterChips');chips.innerHTML=['All',...categoryOrder].map(c=>`<button class="filter-chip ${c===active?'active':''}" onclick="selectCategory('${c.replace(/'/g,"\\'")}')">${c}</button>`).join('')}
function selectCategory(c){active=c;renderCategories();renderBooks();document.getElementById('catalog').scrollIntoView({behavior:'smooth',block:'start'})}
function getFiltered(){const q=$('#searchInput').value.toLowerCase().trim();let arr=books.filter(b=>(active==='All'||b.c===active)&&(!q||`${b.t} ${b.a} ${b.c}`.toLowerCase().includes(q)));const sort=$('#sortSelect').value;if(sort==='price-low')arr.sort((x,y)=>x.p-y.p);if(sort==='price-high')arr.sort((x,y)=>y.p-x.p);if(sort==='title')arr.sort((x,y)=>x.t.localeCompare(y.t));return arr}
function renderBooks(){const arr=getFiltered();$('#resultCount').textContent=`${arr.length} title${arr.length===1?'':'s'} available`;$('#emptyState').classList.toggle('hidden',arr.length>0);$('#bookGrid').innerHTML=arr.map((b)=>{const i=books.indexOf(b);return `<article class="book-card"><div class="cover-wrap" onclick="openBook(${i})">${imgHTML(b)}<span class="book-badge">${b.op?'SALE':'POPULAR'}</span><button class="wish" onclick="event.stopPropagation();this.textContent=this.textContent==='♡'?'♥':'♡'">♡</button></div><div class="card-body"><div class="card-category">${b.c}</div><h3>${b.t}</h3><div class="author">${b.a}</div><div class="rating">★★★★★ <span style="color:var(--muted)">${b.r}</span></div><div class="price-row"><div><span class="price">$${b.p.toFixed(2)}</span>${b.op?`<span class="old-price">$${b.op.toFixed(2)}</span>`:''}</div><button class="add-btn" onclick="addCart(${i})">Add</button></div></div></article>`}).join('')}
function addCart(i){cart.push(i);localStorage.setItem('almatv-cart',JSON.stringify(cart));updateCart();$('#cartBtn').animate?.([{transform:'scale(1)'},{transform:'scale(1.06)'},{transform:'scale(1)'}],{duration:220})}
function updateCart(){const count=$('#cartCount');count.textContent=cart.length;const items=$('#cartItems');if(!cart.length){items.innerHTML='<p style="color:var(--muted);padding:25px 0">Your cart is empty.</p>'}else{items.innerHTML=cart.map((idx,pos)=>{const b=books[idx];return `<div class="cart-item">${imgHTML(b)}<div><b>${b.t}</b><span>${b.a}<br>$${b.p.toFixed(2)}</span></div><button class="remove-btn" onclick="removeCart(${pos})">×</button></div>`}).join('')}$('#cartTotal').textContent='$'+cart.reduce((s,i)=>s+books[i].p,0).toFixed(2)}
function removeCart(pos){cart.splice(pos,1);localStorage.setItem('almatv-cart',JSON.stringify(cart));updateCart()}
function toggleCart(open){$('#cartDrawer').classList.toggle('open',open);$('#overlay').classList.toggle('show',open);$('#cartDrawer').setAttribute('aria-hidden',String(!open))}
function openBook(i){const b=books[i];$('#modalContent').innerHTML=`<div class="modal-grid"><div>${imgHTML(b)}</div><div><span class="eyebrow">${b.c.toUpperCase()}</span><h2>${b.t}</h2><div class="modal-meta">by ${b.a} • ISBN ${b.isbn}</div><div class="rating">★★★★★ ${b.r}</div><div class="modal-price">$${b.p.toFixed(2)} ${b.op?`<span class="old-price">$${b.op.toFixed(2)}</span>`:''}</div><p class="modal-copy">${b.d}</p><p class="modal-copy"><b>Edition note:</b> Cover art is loaded from Open Library using this edition’s ISBN. Price is a U.S. retail reference and may change by retailer or edition.</p><button class="modal-add" onclick="addCart(${i});closeModal()">Add to cart</button></div></div>`;$('#bookModal').classList.add('show');$('#bookModal').setAttribute('aria-hidden','false')}
function closeModal(){$('#bookModal').classList.remove('show');$('#bookModal').setAttribute('aria-hidden','true')}
$('#searchInput').addEventListener('input',renderBooks);$('#sortSelect').addEventListener('change',renderBooks);$('#cartBtn').addEventListener('click',()=>toggleCart(true));$('#closeCart').addEventListener('click',()=>toggleCart(false));$('#overlay').addEventListener('click',()=>toggleCart(false));$('#modalClose').addEventListener('click',closeModal);$('#bookModal').addEventListener('click',e=>{if(e.target===$('#bookModal'))closeModal()});$('#themeBtn').addEventListener('click',()=>{document.body.classList.toggle('dark');$('#themeBtn').textContent=document.body.classList.contains('dark')?'☀':'☾'});
renderCategories();renderBooks();updateCart();
