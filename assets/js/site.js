(() => {
  const root = document.documentElement;
  const body = document.body;

  // Stagger reveal
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    }
  }, { threshold: 0.15 });
  document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));

  // Sticky mobile CTA
  const mobileCta = document.querySelector('[data-mobile-cta]');
  const heroActions = document.querySelector('.actions');
  if (mobileCta && heroActions) {
    const heroObs = new IntersectionObserver(([entry]) => {
      mobileCta.classList.toggle('show', !entry.isIntersecting);
    }, { threshold: 0.2 });
    heroObs.observe(heroActions);
  }

  // Testimonial slider
  const rail = document.querySelector('[data-quote-rail]');
  if (rail) {
    const cards = Array.from(rail.querySelectorAll('.quote-card'));
    let i = 0;
    setInterval(() => {
      i = (i + 1) % cards.length;
      rail.style.setProperty('--quote-index', String(i));
      cards.forEach((c, idx) => c.classList.toggle('active', idx === i));
    }, 3500);
  }

  // Soft parallax glow
  window.addEventListener('pointermove', (e) => {
    const x = (e.clientX / window.innerWidth).toFixed(3);
    const y = (e.clientY / window.innerHeight).toFixed(3);
    root.style.setProperty('--mx', x);
    root.style.setProperty('--my', y);
  }, { passive: true });

  // Existing event tracking hooks
  const payloadBase = {
    business_slug: body.dataset.businessSlug || '',
    template_variant_id: body.dataset.templateVariantId || '',
    copy_variant_id: body.dataset.copyVariantId || '',
    image_variant_id: body.dataset.imageVariantId || '',
    variant_bundle_id: body.dataset.variantBundleId || '',
    page_url: window.location.href,
    user_agent: navigator.userAgent || ''
  };

  const collector = (localStorage.getItem('site_event_collector_url') || window.SITE_EVENT_COLLECTOR_URL || '').trim();
  const emit = (eventName, extra = {}) => {
    const payload = { ...payloadBase, ...extra, event: eventName, ts: new Date().toISOString() };
    if (collector) {
      try { navigator.sendBeacon(collector, JSON.stringify(payload)); } catch (_) {}
    }
  };
  emit('page_view', {});
  document.querySelectorAll('[data-track-event]').forEach((el) => {
    const eventName = el.getAttribute('data-track-event');
    if (!eventName) return;
    el.addEventListener('click', () => emit(eventName, { element: el.tagName.toLowerCase() }));
  });
})();