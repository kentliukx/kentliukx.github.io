(() => {
 const root = document.documentElement;
 const toggle = document.querySelector('.theme-toggle');
 const colorScheme = window.matchMedia('(prefers-color-scheme: dark)');
 let stored;
 try { stored = localStorage.getItem('kaixuan-homepage-theme'); } catch {}
 const apply = theme => {
  root.dataset.theme = theme;
  const dark = theme === 'dark';
  if (toggle) {
   toggle.setAttribute('aria-pressed', String(dark));
   toggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
   toggle.innerHTML = dark
    ? '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></svg>'
    : '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M20.3 14.1A8.5 8.5 0 0 1 9.9 3.7 8.5 8.5 0 1 0 20.3 14.1Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }
  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) themeColor.content = dark ? '#1f1f1f' : '#ffffff';
 };
 apply(stored === 'dark' || stored === 'light' ? stored : colorScheme.matches ? 'dark' : 'light');
 colorScheme.addEventListener('change', event => {
  if (stored !== 'dark' && stored !== 'light') apply(event.matches ? 'dark' : 'light');
 });
 toggle?.addEventListener('click', () => {
  const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  stored = theme;
  apply(theme);
  try { localStorage.setItem('kaixuan-homepage-theme', theme); } catch {}
 });

})();
