/* Velvele teklif formu — 3 adım, merhaba@velvelekreatif.com adresine gider. */
(() => {
  const f = document.getElementById('talep'); if (!f) return;
  const EPOSTA = 'merhaba@velvelekreatif.com';
  const gc = (ad) => { try { window.goatcounter && window.goatcounter.count({ path: 'form-' + ad, title: 'Teklif formu: ' + ad, event: true }); } catch (e) {} };
  const S = { ihtiyac: [], zaman: '', sektor: '', butce: '' };
  let adim = 1, basladi = false;
  const $ = s => f.querySelector(s), $$ = s => [...f.querySelectorAll(s)];
  const v = id => (($('#' + id) || {}).value || '').trim();

  // seçimler
  $$('[data-sec]').forEach(grup => {
    const ad = grup.dataset.sec, coklu = grup.hasAttribute('data-coklu');
    grup.querySelectorAll('button').forEach(b => b.addEventListener('click', () => {
      if (!basladi) { basladi = true; gc('basladi'); }
      const d = b.dataset.d || b.textContent.trim();
      if (coklu) {
        const i = S[ad].indexOf(d); i < 0 ? S[ad].push(d) : S[ad].splice(i, 1);
        b.setAttribute('aria-pressed', i < 0 ? 'true' : 'false');
      } else {
        S[ad] = d; grup.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x === b ? 'true' : 'false'));
      }
      ozet(); hataGizle();
    }));
  });
  f.addEventListener('input', () => { if (!basladi) { basladi = true; gc('basladi'); } ozet(); hataGizle(); });
  f.addEventListener('change', () => hataGizle());

  function ozet() {
    const p = [];
    if (S.ihtiyac.length) p.push(S.ihtiyac.join(', '));
    if (v('t-isletme')) p.push(v('t-isletme') + (S.sektor ? ' (' + S.sektor + ')' : ''));
    else if (S.sektor) p.push(S.sektor);
    if (S.zaman) p.push(S.zaman);
    const o = $('.tf-ozet'); o.hidden = !p.length; $('.tf-ozet span').textContent = p.join(' · ');
  }
  const hata = t => { const h = $('.tf-hata'); h.textContent = t; h.hidden = false; };
  const hataGizle = () => { $('.tf-hata').hidden = true; };
  function gecerli() {
    if (adim === 1 && !S.ihtiyac.length) return hata('En az bir ihtiyaç seçin.'), false;
    if (adim === 2 && !v('t-isletme')) return hata('İşletmenizin adını yazın.'), $('#t-isletme').focus(), false;
    if (adim === 3) {
      if (!v('t-ad')) return hata('Adınızı yazın.'), $('#t-ad').focus(), false;
      const tel = v('t-tel').replace(/\D/g, '');
      if (tel.length < 10) return hata('Size ulaşabilmemiz için telefon numaranızı yazın.'), $('#t-tel').focus(), false;
      if (!/^\S+@\S+\.\S+$/.test(v('t-eposta'))) return hata('Size dönebilmemiz için e-posta adresinizi yazın.'), $('#t-eposta').focus(), false;
      if (!$('#t-onay').checked) return hata('Gönderebilmemiz için onay kutusunu işaretleyin.'), false;
    }
    hataGizle(); return true;
  }
  function goster() {
    $$('.tf-adim').forEach(a => a.hidden = +a.dataset.adim !== adim);
    $$('.tf-yol li').forEach((l, i) => { l.classList.toggle('aktif', i + 1 === adim); l.classList.toggle('bitti', i + 1 < adim); });
    $('#tf-geri').hidden = adim === 1;
    $('#tf-ileri').hidden = adim === 3; $('#tf-gonder').hidden = adim !== 3;
  }
  $('#tf-ileri').addEventListener('click', () => { if (!gecerli()) return; adim++; gc('adim-' + adim); goster(); f.scrollIntoView({ block: 'start', behavior: 'smooth' }); const ilk = $('.tf-adim[data-adim="' + adim + '"] input'); if (ilk && innerWidth > 700) ilk.focus(); });
  $('#tf-geri').addEventListener('click', () => { adim--; hataGizle(); goster(); });

  function metin() {
    return [
      'VELVELE · YENİ TEKLİF TALEBİ',
      'İhtiyaç: ' + S.ihtiyac.join(', '),
      'İşletme: ' + v('t-isletme') + (S.sektor ? ' (' + S.sektor + ')' : ''),
      'Yer: ' + (v('t-yer') || '-'), 'Instagram: ' + (v('t-ig') || '-'),
      'Başlangıç: ' + (S.zaman || '-') + ' · Kapsam: ' + (S.butce || '-'),
      'Not: ' + (v('t-not') || '-'),
      'İletişim: ' + v('t-ad') + ' · ' + v('t-tel') + ' · ' + v('t-eposta')
    ].join('\n');
  }

  f.addEventListener('submit', async e => {
    e.preventDefault(); if (adim !== 3) return;
    if (!gecerli()) return;
    const g = $('#tf-gonder'); g.disabled = true; g.textContent = 'Gönderiliyor…';
    const govde = { _subject: 'Velvele · Teklif talebi: ' + v('t-isletme'), _template: 'table', _captcha: 'false',
      'İhtiyaç': S.ihtiyac.join(', '), 'İşletme': v('t-isletme'), 'Sektör': S.sektor || '-', 'Yer': v('t-yer') || '-', 'Instagram': v('t-ig') || '-',
      'Ne zaman': S.zaman || '-', 'Kapsam': S.butce || '-', 'Not': v('t-not') || '-', 'Ad': v('t-ad'), 'Telefon': v('t-tel'), 'E-posta': v('t-eposta'),
      'Sayfa': location.pathname, _replyto: v('t-eposta') };
    try {
      const r = await fetch('https://formsubmit.co/ajax/' + EPOSTA, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(govde) });
      const d = await r.json().catch(() => ({}));
      if (!r.ok || String(d.success) !== 'true') throw new Error(d.message || 'hata');
      gc('gonderildi');
      $('#tf-ad-yaz').textContent = v('t-ad').split(' ')[0];
      $('.tf-govde').hidden = true; $('.tf-tamam').hidden = false; $$('.tf-yol li').forEach(l => { l.classList.remove('aktif'); l.classList.add('bitti'); }); f.scrollIntoView({ block: 'start', behavior: 'smooth' });
    } catch (err) {
      gc('hata');
      g.disabled = false; g.textContent = 'Tekrar dene';
      hata('Şu an gönderemedik. Talebinizi tek tıkla e-posta uygulamanızdan iletebilirsiniz.');
      const y = $('.tf-yedek'); y.hidden = false;
      $('#tf-ep-yedek').href = 'mailto:' + EPOSTA + '?subject=' + encodeURIComponent('Teklif talebi · ' + v('t-isletme')) + '&body=' + encodeURIComponent(metin());
    }
  });
  goster();
})();
