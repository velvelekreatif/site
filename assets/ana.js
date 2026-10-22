/* İLETİŞİM AYARLARI — numara ve hesap adı gelince burayı doldur */
const ILETISIM = { whatsapp: "905454554129", instagram: "", eposta: "merhaba@velvelekreatif.com" }; // örn. whatsapp: "905xxxxxxxxx", instagram: "velvelekreatif"

if (document.getElementById('kaydir')) {
// Karşılaştırma kaydırıcısı
const kd = document.getElementById('kaydir'), kr = document.getElementById('kaydirma');
kr.addEventListener('input', () => kd.style.setProperty('--k', kr.value + '%'));

}
// Filtre
const btns = document.querySelectorAll('.filtre button'), isler = document.querySelectorAll('.is');
btns.forEach(b => b.addEventListener('click', () => {
  btns.forEach(x => x.setAttribute('aria-pressed', x === b ? 'true' : 'false'));
  const f = b.dataset.f;
  isler.forEach(i => { i.hidden = !(f === 'hepsi' || i.dataset.t === f); });
}));

if (document.getElementById('buyut')) {
// Büyütme
const dlg = document.getElementById('buyut');
document.querySelectorAll('[data-buyut]').forEach(b => b.addEventListener('click', () => {
  document.getElementById('buyut-img').src = b.dataset.buyut;
  document.getElementById('buyut-img').alt = b.dataset.alt;
  document.getElementById('buyut-alt').textContent = b.dataset.alt;
  if (dlg.showModal) dlg.showModal();
}));
document.getElementById('kapat').addEventListener('click', () => dlg.close());
dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });

}
// ---------- FİKİR MAKİNESİ ----------
const FIKIR = {
  "Kafe": [
    ["Wi-Fi şifresi bir espri", "Şifre: \"BugunIzinliyim\". Soran herkes gülümser, masadaki kartın fotoğrafını çeker, story'ye koyar."],
    ["Yağmur modu", "Yağmur başladığı an story: \"Şemsiyesini unutanlara ikinci çay bizden.\" Hava durumu sizin reklamınız olur."],
    ["Müdavim pasaportu", "Her gelişte damga. 10. damgada müşterinin adı bir haftalığına menüdeki bir içeceğe verilir."],
    ["Sessiz masa", "Bazı masalara kart: \"Bu masa ders çalışanlara ayrıldı, sessiz mod.\" Öğrenciler sizi kütüphane yapar."]
  ],
  "Restoran / dönerci": [
    ["Ustanın imzası", "Her paketin üstüne ustanın el yazısıyla adı. Müşteri artık bir dükkândan değil, bir ustadan yemek söyler."],
    ["Son sipariş geri sayımı", "Gece kapanıştan bir saat önce story serisi: \"Son 60 dakika. Acıkan acele etsin.\""],
    ["Porsiyon ölçüsü", "\"Bu dürümün boyu: bir İstanbulkart artı iki parmak.\" Ölçüyü abartmadan gösterir, herkes test etmek ister."],
    ["Komşu esnaf kartı", "Çevredeki dükkânlara \"Öğle arası çalışana\" kartı. Yeni müşteri, kapı komşunuzdan gelir."]
  ],
  "Catering / toplu yemek": [
    ["Menü, maç fikstürü gibi", "\"Pazartesi: Mercimek – Pilav (ev sahibi).\" Haftalık menü yemekhane panosunda en çok okunan şey olur."],
    ["Doyan sayacı", "Fabrika panosuna sayaç: \"Bu yıl doyurduğumuz kişi sayısı.\" Gerçek rakamla, her ay güncel."],
    ["Besin değeri etiketi", "Diyetisyen kontrollü menüyü ürün etiketi gibi göstermek. İK müdürlerinin LinkedIn'de paylaşacağı tür içerik."],
    ["Yemekhanenin en iyi yorumu", "Her ay çalışanların yorum kartından en güzel cümle, büyük harflerle bir post olur."]
  ],
  "Berber / güzellik": [
    ["Kesim menüsü, kahve menüsü gibi", "\"Klasik (sade), Fade (sütlü), Sakal (ekstra shot).\" Menü panosu da Instagram postu da aynı dil."],
    ["Saçın seni özledi", "Randevu hatırlatma mesajı: \"Saçın seni özledi. Perşembe 18.00 boş.\""],
    ["Önce/sonra aynası", "Aynaya sticker: \"Sonra fotoğrafını burada çek.\" Müşteri reklamı kendi çeker, sizi etiketler."],
    ["Bekleme listesi", "Koltuğa QR: \"Sıra sende olana kadar bu çalma listesi.\" Beklemek eğlenceye döner."]
  ],
  "Butik / giyim": [
    ["Kombin reçetesi", "Eczane reçetesi dili: \"Günde 1 kez, cumaları 2. Yan etkisi: iltifat.\""],
    ["Kabin aynası", "Aynada tek cümle: \"Bunu alıyorsun, ikimiz de biliyoruz.\""],
    ["Hava durumu kombini", "Her sabah sıcaklığa göre bir kombin story'si. Hava durumuna bakan sizi de görür."],
    ["Askıda parça", "Sezon sonu indirimini \"askıda ekmek\" geleneği diliyle anlatmak: iyilik ve indirim bir arada."]
  ],
  "Sanayi / ambalaj / B2B": [
    ["Üretim ASMR", "Üretim hattından 15 saniyelik sesli videolar. Fabrika videoları en çok izlenen B2B içerik türlerinden."],
    ["Çözüm menüsü", "Katalog yerine restoran menüsü gibi bir teklif dosyası: \"Başlangıçlar, ana ürünler, özel siparişler.\""],
    ["En zor kutu", "Fuarda meydan okuma: \"En zor ürününüzü getirin, kutusunu biz yapalım.\""],
    ["Termin sözü", "Teslim tarihini takvimde kırmızı daireyle gösteren sade bir seri: \"Söz verdiğimiz gün.\""]
  ],
  "Kahve / kuruyemiş": [
    ["Kavurma bildirimi", "\"Şu an kavruluyor, koku sokağa çıktı.\" Kavurma saatini haber yapan story serisi."],
    ["Misafir alarmı kutusu", "Bayramlar için hazır paket: \"Misafir geldi, panik yok.\" Kahve, lokum, kuruyemiş bir arada."],
    ["Fal kartı", "Her paketin içinden el yazısı bir kart: \"Fincanını kapattığında ne görüyorsun? Bize yaz.\""],
    ["Mahalle haritası", "Kahvenizin ulaştığı mahalleleri gösteren el çizimi harita. Her yeni mahalle bir post."]
  ],
  "Klinik / sağlık": [
    ["Bekleme salonunun sorusu", "Bekleme salonunda en çok sorulan soru, her hafta hekimin tek cümlelik cevabıyla. Kahraman hekim değil, soru."],
    ["Doğru mu, yanlış mı?", "Herkesin bildiği yanlışlar tek tek düzeltilir. Bilgilendirme, sağlıkta reklamdan güçlü güven kurar."],
    ["Görünmeyen oda", "Sterilizasyon odasından 20 saniyelik sessiz tur. Güven cümleyle değil, görüntüyle verilir."],
    ["Nazik hatırlatma", "Kontrol zamanı gelen hastaya: \"Altı ay oldu, bir bakalım mı?\" Randevu, bir tebrik kartı tonunda."]
  ],
  "Emlak / inşaat": [
    ["Pencereden sabah", "İlanın ilk fotoğrafı daire değil: salon penceresinden sabah 8 manzarası. İnsan evi değil, hayatı alır."],
    ["Mahalle rehberi", "Her ilanın altında kısa rehber: en yakın fırın, okul, durak, yürüyerek kaç dakika."],
    ["Şantiye günlüğü", "İnşaatın her ayı aynı açıdan tek fotoğraf. Bir yılın sonunda bina alıcının gözü önünde yükselmiş olur."],
    ["Anahtar günü", "Her teslimde yeni ev sahibi kapının önünde, elinde anahtar (izniyle). En güçlü referans budur."]
  ],
  "Otomotiv / galeri / servis": [
    ["Ekspertiz ilk karede", "Ekspertiz raporu ilanın ilk karesinde. Hiçbir şey saklamayan galeri, ilk aranan galeri olur."],
    ["Kilometrenin hikâyesi", "\"Bu araç 84.000 km'de üç kez İzmir'e gitti, hiç yolda bırakmadı.\" Önceki sahibinden tek cümle."],
    ["Araban seni çağırıyor", "Bakımı yaklaşan müşteriye mesaj: \"Arabanız bize bir şey söylemek istiyor.\""],
    ["İlk sürüş", "Teslimde 10 saniyelik video: kontak, gülümseme, korna. Her satış kendi Reels'ini çeker."]
  ],
  "Eğitim / kurs": [
    ["Geri sayım", "Sınava kalan gün sayacı, her gün tek bir taktikle. Öğrenci sayaç için takip eder."],
    ["Velinin sorusu", "Velilerden en çok gelen soru, her hafta bir post. Kararı çoğu zaman veli verir."],
    ["Hata defteri", "Öğrencilerin en sık yaptığı tek hata, 15 saniyede düzeltilir. Kaydedilen içerik türü."],
    ["Mezun duvarı", "Kazanan öğrencilerin el yazısıyla tek cümlesi, kurumun duvarında ve Instagram'da."]
  ],
  "Spor salonu / stüdyo": [
    ["Antrenör itirafı", "\"Ben de bacak gününü sevmiyorum.\" Antrenörün insan tarafı, kampanyadan çok üye getirir."],
    ["Boş saat haritası", "Salonun en boş saatleri her hafta story'de. Kalabalıktan çekinen üye tam bunu bekliyordu."],
    ["Dambıllar seni sordu", "Üç haftadır gelmeyen üyeye tek mesaj: \"Dambıllar seni sordu.\""],
    ["Erken karar", "Ocakta değil ekimde kampanya: \"Yeni yıl kararını erken alanlara.\" Rakipler uyurken."]
  ],
  "Otel / turizm": [
    ["Odadan sabah 7", "Her oda tipinin penceresinden sabah 7 görüntüsü. Fiyat listesinden çok satan şey."],
    ["Resepsiyonun listesi", "Resepsiyonistin \"turistlerin bilmediği üç yer\" listesi. Misafirin kaydettiği rehber sizden çıkar."],
    ["İkinci geliş", "İkinci kez gelen misafirin odasında adına el yazısı not. Fotoğrafını kendisi paylaşır."],
    ["Kışın gelmek için", "Sezon dışı için beş sebep: kalabalık yok, fiyat, şömine, sessizlik ve bütün ekip sizinle ilgilenir."]
  ],
  "E-ticaret": [
    ["Bugün yola çıkanlar", "Paketleme masasından gün sonu hızlandırılmış video: \"Bugün 64 paket yola çıktı.\""],
    ["İade, üç karede", "İade sürecini üç karelik çizgi romanla anlatmak. Tereddüt eden alıcının son engeli kalkar."],
    ["Sepet seni bekliyor", "Sepette ürün bırakan müşteriye: \"Bugün sipariş verirsen yarın kapında.\""],
    ["Kutunun içi", "Kutudan el yazısı bir kart ve küçük bir sürpriz çıkar. Kutu açılışını müşteri kendisi çeker."]
  ],
  "Danışmanlık / kişisel marka": [
    ["60 saniyede değişiklik", "Haftanın bir mevzuat ya da sektör değişikliği, sade dille. Bilgi veren, güven kazanır."],
    ["Tek soru, tek kart", "Müşterilerden gelen en sık soru, her hafta bir kart. Bir yılın sonunda elinizde bir rehber olur."],
    ["Unvanın arkası", "Bir iş gününden beş kare: kahve, dosya, toplantı, yol, akşam. Unvanın arkasındaki insan."],
    ["Net görüş", "Sektörde konuşulan konuya ayda iki net görüş yazısı. Akılda kalan kişi, aranan kişidir."]
  ],
  "Mobilya / dekorasyon": [
    ["Bir oda, üç bütçe", "Aynı oda üç farklı bütçeyle döşenir. Herkes kendi bütçesini bulur ve kaydeder."],
    ["Bir sandalyenin doğuşu", "Atölyede tek bir sandalyenin yapımı, hızlandırılmış. Fiyatın neden o olduğunu kendisi anlatır."],
    ["Kapıdan geçer mi?", "QR'lı ölçü rehberi. En büyük satın alma korkusu biter."],
    ["Müşterinin evinde", "Teslim edilen ürünün müşterinin evindeki hali (izniyle). Showroom'dan daha inandırıcı."]
  ],
  "Kuyumcu / takı": [
    ["Alyansın içindeki tarih", "Alyansa kazınan tarihlerin hikâyesi (izniyle). Romantizm satılmaz, anlatılır."],
    ["Ne takılır rehberi", "Söz, nişan, düğün: ailelerin \"ne takılır?\" sorusuna sade bir rehber. Kaydedilen içerik."],
    ["Vitrin ışığında", "Akşam vitrin ışığında beş saniyelik parıltı. Gece kaydırılan ekranda parmağı durdurur."],
    ["Bakım daveti", "Yılda bir ücretsiz temizlik daveti. Müşteri dükkâna döner, yeni parçaya bakar."]
  ],
  "Market / perakende": [
    ["Bu sabah gelenler", "Sabah 8'de tek story: bugün taze gelen beş ürün. Mahalle sabah kahvesiyle size bakar."],
    ["Hazır liste", "Okul açılışı, bayram, misafir listeleri hazır. Tek mesajla WhatsApp'tan sipariş."],
    ["Kasiyerin seçimi", "Haftanın kasiyer önerisi rafı. Tanıdık yüz, tanıdık tavsiye."],
    ["Onuncu alışveriş", "Damga kartı: onuncu alışverişte mahallenin en sevilen ürünü hediye."]
  ],
  "Teknoloji / yazılım": [
    ["Kurucu günlüğü", "Kurucunun haftalık tek gerçek rakamı ve tek dersi. Müşteri de yatırımcı da takip eder."],
    ["Önce sorun", "Ürünü göstermeden önce çözdüğü sorunu 10 saniyede canlandırmak."],
    ["Eskiden, şimdi", "\"Eskiden 3 saat, şimdi 4 dakika.\" Tek bir işin zaman farkı, bütün özellik listesinden güçlü."],
    ["Destek masasından", "Haftanın en ilginç destek talebi (anonim, izinli) ve çözümü. Ürün insan diliyle anlatılır."]
  ]
};
const GENEL_FIKIR = [
  ["Müşterinin cümlesi", "Müşterilerinizin size söylediği en güzel cümle, büyük harflerle afiş olur. Reklamı müşteri yazar."],
  ["Mesleğin gizli dili", "Sektörünüzün içeriden bilinen bir terimi, herkesin anlayacağı bir espriye dönüşür."],
  ["Perde arkası", "Kimsenin görmediği tek bir an: sabah açılış, ilk iş, son kontrol. Gerçeklik güven verir."],
  ["Rakamın hikâyesi", "Yıllardır yaptığınız işin tek bir rakamı: kaç müşteri, kaç ürün, kaç yıl. Gerçek ve somut."]
];
if (document.getElementById('fm-sek')) {
const fmSek = document.getElementById('fm-sek'); let fmAktif = null, fmIdx = -1;
Object.keys(FIKIR).forEach((k, i) => {
  const b = document.createElement('button'); b.type = 'button'; b.textContent = k; b.setAttribute('aria-pressed', 'false');
  b.addEventListener('click', () => { fmAktif = k; fmIdx = -1; fmSek.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x === b ? 'true' : 'false')); fmGoster(); });
  fmSek.appendChild(b);
});
function fmGoster() {
  if (!fmAktif) { fmAktif = Object.keys(FIKIR)[0]; fmSek.firstChild.setAttribute('aria-pressed', 'true'); }
  const l = FIKIR[fmAktif]; fmIdx = (fmIdx + 1) % l.length;
  document.getElementById('fm-no').textContent = String(fmIdx + 1).padStart(2, '0') + ' / ' + String(l.length).padStart(2, '0');
  document.getElementById('fm-baslik').textContent = l[fmIdx][0];
  document.getElementById('fm-metin').textContent = l[fmIdx][1];
}
document.getElementById('fm-yeni').addEventListener('click', fmGoster);

}
// ---------- INSTAGRAM KONTROLÜ ----------
const KT = [
  ["Profil fotoğrafınız küçük daire içinde bile net okunuyor mu?", "Profil fotoğrafını sadeleştirin: logonun daire içinde okunan bir versiyonu."],
  ["Biyografinizde ne yaptığınız, semtiniz ve bir bağlantı var mı?", "Biyografiyi 3 satıra indirin: ne yapıyorsunuz, neredesiniz, nasıl ulaşılır."],
  ["Son 7 günde en az 2 paylaşım yaptınız mı?", "Düzen kurun: haftada en az 3 paylaşım, ayın başında hazırlanmış bir takvimle."],
  ["Ürün fotoğraflarınız gün ışığında, temiz bir zeminde mi çekiliyor?", "Ürün fotoğraflarını tek tip yapın: aynı zemin, aynı ışık, aynı açı."],
  ["Profilinize bakınca hepsi aynı markanın paylaşımı gibi mi duruyor?", "Renk ve yazı karakterini sabitleyin; 9'lu ızgara tek bir marka gibi görünmeli."],
  ["Yorum ve mesajlara 24 saat içinde dönüyor musunuz?", "Hazır cevap metinleri ve günlük 10 dakikalık bir kontrol saati belirleyin."],
  ["Google Haritalar'daki saatleriniz ve fotoğraflarınız güncel mi?", "Google profilinizi güncelleyin; \"kapalı\" görünen bir işletme müşteri kaybeder."],
  ["Paylaşımlarınızda insanı durduran bir fikir var mı, yoksa sadece ürün mü?", "Her paylaşıma tek bir fikir koyun: ürün göstermek yetmez, bir sebep verin."]
];
if (document.getElementById('kt-liste')) {
const ktL = document.getElementById('kt-liste'); const ktC = {};
KT.forEach(([s], i) => {
  const li = document.createElement('li');
  li.innerHTML = '<p></p><div class="kt-btn"><button type="button" data-v="1">Evet</button><button type="button" data-v="0">Hayır</button></div>';
  li.querySelector('p').textContent = s;
  li.querySelectorAll('button').forEach(b => b.addEventListener('click', () => {
    ktC[i] = b.dataset.v === '1';
    li.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x === b ? 'true' : 'false'));
    ktHesapla();
  }));
  ktL.appendChild(li);
});
function ktHesapla() {
  const n = Object.keys(ktC).length, p = Object.values(ktC).filter(Boolean).length;
  document.getElementById('kt-puan').textContent = p;
  const d = document.getElementById('kt-durum'), o = document.getElementById('kt-oneri');
  const hayir = KT.map((x, i) => [i, x[1]]).filter(([i]) => ktC[i] === false).slice(0, 3);
  if (n < KT.length) d.textContent = (KT.length - n) + ' soru kaldı.';
  else d.textContent = p >= 7 ? 'Çok iyi durumdasınız. Sıradaki adım: insanı durduran fikirler ve reklam.' : p >= 4 ? 'Temel var, ama müşteri kaçıran açıklar var.' : 'Hesabınız şu an size müşteri kaybettiriyor olabilir. İyi haber: hepsi düzeltilebilir.';
  o.innerHTML = '';
  if (hayir.length) { const h = document.createElement('p'); h.className = 'etiket'; h.textContent = 'Önce bunları düzeltin'; o.appendChild(h); const ul = document.createElement('ul'); hayir.forEach(([, t]) => { const li = document.createElement('li'); li.textContent = t; ul.appendChild(li); }); o.appendChild(ul); }
  document.getElementById('kt-cta').hidden = n < KT.length;
}

}
// ---------- BRİF SİHİRBAZI ----------
const SEC = {
  sektor: [...Object.keys(FIKIR), "Diğer"],
  hedef: ["Daha çok müşteri gelsin", "Instagram'ımız düzene girsin", "Reklamla satış artsın", "Açılış ya da yeni şube", "Logo ve kimlik yenilensin", "Tabela, branda, giydirme", "Kurumsal tanıtım (B2B)", "Google'da görünür olalım", "Paket serviste daha çok sipariş", "Müşteri tekrar gelsin (müdavim)", "Marka danışmanlığı / konumlandırma"],
  ig: ["Aktif kullanıyoruz", "Ara sıra paylaşıyoruz", "Var ama ölü", "Hesabımız yok"],
  yonetim: ["Kendimiz", "Bir yakınımız", "Bir ajans", "Kimse"],
  reklam: ["Düzenli veriyoruz", "Birkaç kez denedik", "Hiç vermedik"],
  butce: ["Küçük başlayıp görmek istiyorum", "Düzenli aylık hizmet", "Kapsamlı, her şey dâhil", "Önce teklif görmek istiyorum"],
  zaman: ["Hemen", "Bu ay içinde", "Önümüzdeki ay", "Sadece bilgi alıyorum"],
  kanal: ["WhatsApp", "Telefon", "E-posta", "Instagram DM"]
};
const TARZ = [["esprili", "Esprili ve cesur", "Güldüren, konuşturan, paylaşılan"], ["sicak", "Sıcak ve samimi", "Mahalleden, içten, tanıdık"], ["sik", "Şık ve premium", "Sade, zarif, kaliteli"], ["kurumsal", "Kurumsal ve güven veren", "Net, ciddi, profesyonel"]];
const B = { sektor: [], hedef: [], ig: [], yonetim: [], reklam: [], butce: [], zaman: [], kanal: [], tarz: [] };
if (document.getElementById('brif')) {
document.querySelectorAll('#brif .cips').forEach(c => {
  const ad = c.dataset.ad, tek = c.dataset.tek === '1';
  SEC[ad].forEach(t => {
    const b = document.createElement('button'); b.type = 'button'; b.textContent = t; b.setAttribute('aria-pressed', 'false');
    b.addEventListener('click', () => {
      if (tek) { B[ad] = [t]; c.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x === b ? 'true' : 'false')); }
      else { const on = B[ad].includes(t); B[ad] = on ? B[ad].filter(x => x !== t) : [...B[ad], t]; b.setAttribute('aria-pressed', on ? 'false' : 'true'); }
    });
    c.appendChild(b);
  });
});
const tz = document.querySelector('#brif .tarz');
TARZ.forEach(([k, a, d]) => {
  const b = document.createElement('button'); b.type = 'button'; b.className = 'tz tz-' + k; b.setAttribute('aria-pressed', 'false');
  b.innerHTML = '<b></b><span></span>'; b.querySelector('b').textContent = a; b.querySelector('span').textContent = d;
  b.addEventListener('click', () => { B.tarz = [a]; tz.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x === b ? 'true' : 'false')); });
  tz.appendChild(b);
});
let adim = 1; const TOPLAM = 6;
const val = id => (document.getElementById(id).value || '').trim();
function goster() {
  document.querySelectorAll('#brif .adm').forEach(f => f.hidden = +f.dataset.adim !== adim);
  document.getElementById('adim-no').textContent = 'Adım ' + adim + ' / ' + TOPLAM;
  document.getElementById('ilerleme-dolu').style.width = (adim / TOPLAM * 100) + '%';
  document.getElementById('geri').hidden = adim === 1;
  document.getElementById('ileri').textContent = adim === TOPLAM ? 'Önerimi göster' : 'Devam';
}
function gecerli() {
  let ok = true;
  if (adim === 1) ok = !!val('b-isletme') && B.sektor.length > 0;
  if (adim === 2) ok = B.hedef.length > 0;
  const h = document.querySelector('[data-hata="' + adim + '"]'); if (h) h.hidden = ok;
  return ok;
}
document.getElementById('ileri').addEventListener('click', () => {
  if (!gecerli()) return;
  if (adim < TOPLAM) { adim++; goster(); document.getElementById('brif').scrollIntoView({ block: 'start' }); }
  else sonuc();
});
document.getElementById('geri').addEventListener('click', () => { if (adim > 1) { adim--; goster(); } });
document.getElementById('bastan').addEventListener('click', () => {
  document.getElementById('sonuc').hidden = true; document.getElementById('gez').hidden = false;
  document.querySelector('#brif .ilerleme').hidden = false; document.getElementById('adim-no').hidden = false; adim = 1; goster();
});
function paketSec() {
  const h = B.hedef, b = B.butce[0] || '';
  if (h.includes('Marka danışmanlığı / konumlandırma')) return ['Marka danışmanlığı', 'Önce markanın ne söylediğini netleştirelim: konumlandırma, rakip analizi, fiyat algısı ve marka rehberi. Sonraki her iş bu temelin üstüne kurulur.'];
  if (h.includes('Paket serviste daha çok sipariş') && h.length <= 2) return ['Paket servis', 'Siparişin büyük kısmı uygulamalardan geliyorsa önce oradaki vitrin: fotoğraflar, açıklamalar, kombo kurgusu ve puan takibi. Instagram bunu destekler.'];
  if (h.includes('Müşteri tekrar gelsin (müdavim)') && h.length <= 2) return ['Müdavim sistemi', 'Yeni müşteri bulmak, geleni geri getirmekten pahalıdır. WhatsApp, izinli müşteri listesi ve dijital damga kartıyla gelen müşteriyi müdavime çevirelim.'];
  if (h.includes('Tabela, branda, giydirme') || h.includes('Açılış ya da yeni şube') || h.includes('Logo ve kimlik yenilensin')) return ['Basılı + dijital', 'Hedeflerinizde marka ve mekân var. Kimliği, tabelayı, giydirmeyi ve sosyal medyayı tek fikirle birlikte kurmak en doğrusu.'];
  if (h.includes('Kurumsal tanıtım (B2B)') || B.sektor[0] === 'Sanayi / ambalaj / B2B') return ['Kurumsal', 'Alıcılarınız işletmeler. Tanıtım dosyası, LinkedIn ve sosyal medya birlikte güven kurar.'];
  if (b === 'Kapsamlı, her şey dâhil' || h.includes('Reklamla satış artsın')) return ['Tam hizmet', 'Satış hedefi için içerik tek başına yetmez. İçerik, Meta reklamları ve aylık rapor birlikte çalışmalı.'];
  if (b === 'Küçük başlayıp görmek istiyorum' || (B.ig[0] === 'Hesabımız yok')) return ['Başlangıç', 'Önce temeli kuralım: profil düzeni ve düzenli, kaliteli paylaşım. Sonuçları görünce büyütürüz.'];
  return ['Büyüme', 'Düzenli görünmek ve konuşulmak için aylık takvim, Reels ve gündem işleri birlikte gider.'];
}
function fikirTaslak() {
  const s = B.sektor[0]; const l = FIKIR[s] || GENEL_FIKIR;
  const f = l[(val('b-isletme').length) % l.length];
  return f[0] + ': ' + f[1];
}
function sonuc() {
  const [p, neden] = paketSec();
  document.getElementById('s-paket').textContent = p + ' paketi';
  document.getElementById('s-neden').textContent = neden;
  document.getElementById('s-fikir').textContent = fikirTaslak() + ' Size özel olanı görüşmemizde sunacağız.';
  const brif = [
    'VELVELE · YENİ BRİF',
    'İşletme: ' + val('b-isletme') + ' (' + (B.sektor[0] || '-') + ')',
    'Yer: ' + (val('b-yer') || '-'),
    'Hedef: ' + B.hedef.join(', '),
    'Instagram: ' + (B.ig[0] || '-') + (val('b-hesap') ? ' · ' + val('b-hesap') : ''),
    'Yöneten: ' + (B.yonetim[0] || '-') + ' · Reklam: ' + (B.reklam[0] || '-'),
    'Tarz: ' + (B.tarz[0] || '-'),
    'Beğendiği: ' + (val('b-sevdigi') || '-'),
    'İstemediği: ' + (val('b-asla') || '-'),
    'Başlangıç: ' + (B.butce[0] || '-') + ' · Zaman: ' + (B.zaman[0] || '-'),
    'Not: ' + (val('b-not') || '-'),
    'Önerilen paket: ' + p,
    'İletişim: ' + (val('b-ad') || '-') + (val('b-tel') ? ' · ' + val('b-tel') : '') + (document.getElementById('b-eposta') && val('b-eposta') ? ' · ' + val('b-eposta') : '') + ' · ' + (B.kanal[0] || '-')
  ].join('\n');
  document.getElementById('s-brif').textContent = brif;
  const wa = document.getElementById('wa'), kanal = document.getElementById('kanal');
  if (ILETISIM.whatsapp) { wa.href = 'https://wa.me/' + ILETISIM.whatsapp + '?text=' + encodeURIComponent(brif); wa.hidden = false; kanal.textContent = ''; }
  else kanal.textContent = '';
  if (ILETISIM.instagram) kanal.textContent = (ILETISIM.whatsapp ? '' : 'Brifi kopyalayıp ') + 'Instagram: @' + ILETISIM.instagram;
  document.querySelectorAll('#brif .adm').forEach(f => f.hidden = true);
  document.getElementById('gez').hidden = true; document.querySelector('#brif .ilerleme').hidden = true; document.getElementById('adim-no').hidden = true;
  document.getElementById('sonuc').hidden = false;
}
document.getElementById('kopyala').addEventListener('click', async e => {
  const b = e.currentTarget, el = document.getElementById('s-brif'), t = el.textContent;
  try { await navigator.clipboard.writeText(t); b.textContent = 'Kopyalandı'; }
  catch { el.closest('details').open = true; const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); b.textContent = 'Seçildi, Ctrl+C ile kopyalayın'; }
});
goster();

}
if (document.getElementById('seda')) {
// Açılış videosu: sessiz başlar, "Sesi aç" ile baştan sesli oynar; ekrandan çıkınca durur
(() => {
  const v = document.getElementById('seda'), b = document.getElementById('sedaSes'), ilr = document.getElementById('sedaIlerleme');
  if (!v) return;
  const az = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let gorunur = false;
  const etiket = b.querySelector('span');
  const oynat = () => { const p = v.play(); if (p) p.catch(() => {}); };
  new IntersectionObserver(es => es.forEach(e => {
    gorunur = e.isIntersecting;
    if (gorunur && (!az || !v.muted)) oynat(); else v.pause();
  }), { threshold: .35 }).observe(v);
  b.addEventListener('click', () => {
    if (v.muted) { v.muted = false; v.currentTime = 0; oynat(); b.setAttribute('aria-pressed', 'true'); etiket.textContent = 'Sesi kapatın'; }
    else { v.muted = true; b.setAttribute('aria-pressed', 'false'); etiket.textContent = "Sesi açın, Seda'yı dinleyin"; }
  });
  v.addEventListener('click', () => b.click());
  const ciz = () => { if (v.duration) ilr.style.width = (v.currentTime / v.duration * 100) + '%'; requestAnimationFrame(ciz); };
  requestAnimationFrame(ciz);
})();
}
if (document.getElementById('gonder')) {
  const g = document.getElementById('gonder'), dr = document.getElementById('gonder-durum'), ok = document.getElementById('kvkk-onay'), ep = document.getElementById('eposta-gonder');
  const v = id => ((document.getElementById(id) || {}).value || '').trim();
  const brifMetni = () => document.getElementById('s-brif').textContent;
  const durum = (t, s) => { dr.textContent = t; dr.className = 'ipucu ' + (s || ''); };
  ep.addEventListener('click', e => { e.preventDefault(); location.href = 'mailto:' + ILETISIM.eposta + '?subject=' + encodeURIComponent('Velvele brif · ' + (v('b-isletme') || v('b-ad'))) + '&body=' + encodeURIComponent(brifMetni()); });
  g.addEventListener('click', async () => {
    if (!v('b-tel') && !v('b-eposta')) { durum('Size dönebilmemiz için telefon ya da e-posta yazın (son adım).', 'kotu'); return; }
    if (!ok.checked) { durum('Gönderebilmemiz için onay kutusunu işaretleyin.', 'kotu'); ok.focus(); return; }
    g.disabled = true; g.textContent = 'Gönderiliyor…'; durum('');
    try {
      const r = await fetch('https://formsubmit.co/ajax/' + ILETISIM.eposta, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ _subject: 'Velvele · Yeni brif: ' + (v('b-isletme') || v('b-ad')), _template: 'table', _captcha: 'false', ...(v('b-eposta') ? { _replyto: v('b-eposta') } : {}),
          'İşletme': v('b-isletme'), 'Ad': v('b-ad'), 'Telefon': v('b-tel'), 'E-posta': v('b-eposta'), 'Brif': brifMetni(), 'Sayfa': location.pathname }) });
      const d = await r.json().catch(() => ({}));
      if (!r.ok || String(d.success) !== 'true') throw new Error(d.message || 'hata');
      g.textContent = 'Gönderildi ✓'; durum('Teşekkürler! Brifiniz ekibimize ulaştı; en kısa sürede size dönüyoruz.', 'iyi');
    } catch (e) {
      g.disabled = false; g.textContent = 'Tekrar dene';
      durum('Şu an gönderemedik. Yandaki düğmeyle e-posta uygulamanızdan gönderebilirsiniz: ' + ILETISIM.eposta, 'kotu');
    }
  });
}