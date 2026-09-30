(function () {
  if (/[?&]embed=1/.test(location.search)) return;
  var FILES = ['Super Greens Landing Page - Retro.dc.html', 'Super Greens Landing Page - V2 Clean.dc.html', 'Super Greens Landing Page - Working Copy.dc.html'];
  var path = decodeURIComponent(location.pathname);
  var cur = /Retro/.test(path) ? 0 : /V2 Clean/.test(path) ? 1 : /Working Copy/.test(path) ? 2 : -1;
  if (cur < 0) return;

  function sectionNow() {
    var H = window.innerHeight, hit = null;
    document.querySelectorAll('[data-section]').forEach(function (s) {
      if (s.getAttribute('data-section') === 'sticky-cta') return;
      if (s.getBoundingClientRect().top <= H * 0.35) hit = s.getAttribute('data-section');
    });
    return hit;
  }

  function build() {
    var old = document.getElementById('sg-version-switch'); if (old) old.remove();
    var mobile = window.innerWidth < 900;
    var wrap = document.createElement('div');
    wrap.id = 'sg-version-switch';
    wrap.setAttribute('role', 'tablist');
    wrap.style.cssText = mobile
      ? 'position:relative;z-index:50;display:flex;justify-content:center;align-items:center;gap:6px;padding:8px 12px;background:#0C1A11;font-family:Poppins,Arial,sans-serif'
      : 'position:fixed;right:16px;bottom:16px;z-index:2147483000;display:flex;gap:4px;padding:5px;border-radius:999px;background:#0C1A11;box-shadow:0 10px 30px rgba(0,0,0,.35);font-family:Poppins,Arial,sans-serif';
    ['V1', 'V2', 'V3'].forEach(function (label, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.textContent = label + (mobile ? ' · ' + ['Retro', 'Clean', 'Legacy'][i] : '');
      b.title = ['Retro 3D', 'Clean', 'Legacy'][i];
      var on = i === cur;
      b.style.cssText = 'border:0;cursor:pointer;min-width:' + (mobile ? '0' : '46px') + ';flex:' + (mobile ? '1 1 0' : 'none') + ';height:' + (mobile ? '40px' : '38px') + ';padding:0 ' + (mobile ? '8px' : '14px') + ';border-radius:999px;font:700 ' + (mobile ? '12px' : '13px') + '/1 Poppins,Arial,sans-serif;letter-spacing:.03em;white-space:nowrap;background:' + (on ? '#F4DC2A' : 'rgba(255,255,255,.1)') + ';color:' + (on ? '#0C1A11' : '#fff');
      if (!on) b.onclick = function () {
        var id = sectionNow();
        location.href = encodeURI(FILES[i]) + (id ? '#sg=' + id : '');
      };
      wrap.appendChild(b);
    });
    if (mobile) document.body.insertBefore(wrap, document.body.firstChild); else document.body.appendChild(wrap);
    if (!window.__sgRs) { window.__sgRs = true; var w0 = window.innerWidth < 900; window.addEventListener('resize', function () { var m = window.innerWidth < 900; if (m !== w0) { w0 = m; build(); } }); }
  }

  function restore() {
    var m = /sg=([\w-]+)/.exec(location.hash || '');
    if (!m) return;
    var id = m[1], tries = 0;
    (function go() {
      var el = document.querySelector('[data-section="' + id + '"]');
      if (el && el.getBoundingClientRect().height > 20 && tries > 3) {
        window.scrollTo(0, Math.max(0, el.getBoundingClientRect().top + window.scrollY));
        try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {}
      } else if (tries++ < 30) setTimeout(go, 200);
    })();
  }

  function init() { build(); restore(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
