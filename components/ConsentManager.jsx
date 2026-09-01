"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "fluinow_consent_v1";
const CONSENT_VERSION = "2026-09-01";
const defaults = { necessary: true, analytics: false, marketing: false };

function loadMetaPixel(pixelId) {
  if (!pixelId || window.fbq) return;
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/pt_BR/fbevents.js";
  script.dataset.fluinowConsent = "marketing";
  document.head.appendChild(script);
  window.fbq = function fbq() {
    window.fbq.callMethod ? window.fbq.callMethod.apply(window.fbq, arguments) : window.fbq.queue.push(arguments);
  };
  window.fbq.push = window.fbq;
  window.fbq.loaded = true;
  window.fbq.version = "2.0";
  window.fbq.queue = [];
  window.fbq("consent", "grant");
  window.fbq("init", pixelId);
  window.fbq("track", "PageView");
}

export default function ConsentManager() {
  const [ready, setReady] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState(defaults);
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  useEffect(() => {
    let stored;
    try { stored = JSON.parse(localStorage.getItem(STORAGE_KEY)); } catch { stored = null; }
    if (stored?.version === CONSENT_VERSION && stored?.preferences) {
      const restored = { ...defaults, ...stored.preferences, necessary: true };
      setPreferences(restored);
      if (restored.marketing) loadMetaPixel(pixelId);
    } else setShowBanner(true);
    setReady(true);
    const open = () => setShowPreferences(true);
    window.addEventListener("fluinow:open-consent", open);
    return () => window.removeEventListener("fluinow:open-consent", open);
  }, [pixelId]);

  function save(next) {
    const normalized = { ...next, necessary: true };
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: CONSENT_VERSION, savedAt: new Date().toISOString(), preferences: normalized }));
    setPreferences(normalized);
    setShowBanner(false);
    setShowPreferences(false);
    if (normalized.marketing) loadMetaPixel(pixelId);
    else if (window.fbq) window.fbq("consent", "revoke");
    window.dispatchEvent(new CustomEvent("fluinow:consent-updated", { detail: normalized }));
  }

  if (!ready) return null;
  return (
    <>
      {showBanner && (
        <section className="consent-banner" aria-label="Preferências de privacidade" role="dialog" aria-live="polite">
          <div className="consent-copy"><strong>Sua privacidade importa</strong><p>Usamos cookies necessários para o site funcionar. Com sua autorização, também podemos usar cookies de medição e marketing para entender resultados de campanhas. Você pode aceitar, recusar ou personalizar. Saiba mais na <a href="/privacidade">Política de Privacidade</a>.</p></div>
          <div className="consent-actions">
            <button className="consent-button secondary" onClick={() => save(defaults)}>Recusar opcionais</button>
            <button className="consent-button secondary" onClick={() => setShowPreferences(true)}>Personalizar</button>
            <button className="consent-button primary" onClick={() => save({ necessary: true, analytics: true, marketing: true })}>Aceitar todos</button>
          </div>
        </section>
      )}
      {showPreferences && (
        <div className="consent-modal-backdrop">
          <section className="consent-modal" role="dialog" aria-modal="true" aria-labelledby="consent-title">
            <button className="consent-close" aria-label="Fechar preferências" onClick={() => setShowPreferences(false)}>×</button>
            <span className="kicker">/ Centro de privacidade</span><h2 id="consent-title">Preferências de cookies</h2>
            <p>Escolha quais categorias podem ser utilizadas. Cookies opcionais permanecem desligados até sua autorização.</p>
            <div className="consent-option"><div><strong>Necessários</strong><small>Guardam sua escolha de privacidade e viabilizam recursos essenciais.</small></div><span className="always-active">Sempre ativos</span></div>
            <label className="consent-option"><div><strong>Medição e desempenho</strong><small>Ajudam a entender, de forma agregada, como o site é utilizado.</small></div><input type="checkbox" checked={preferences.analytics} onChange={(e) => setPreferences((p) => ({ ...p, analytics: e.target.checked }))} /></label>
            <label className="consent-option"><div><strong>Marketing e anúncios</strong><small>Permitem medir campanhas, incluindo o Meta Pixel quando configurado.</small></div><input type="checkbox" checked={preferences.marketing} onChange={(e) => setPreferences((p) => ({ ...p, marketing: e.target.checked }))} /></label>
            <div className="consent-modal-actions"><button className="consent-button secondary" onClick={() => save(defaults)}>Recusar opcionais</button><button className="consent-button primary" onClick={() => save(preferences)}>Salvar preferências</button></div>
            <p className="consent-legal-links"><a href="/cookies">Política de Cookies</a><a href="/privacidade">Política de Privacidade</a></p>
          </section>
        </div>
      )}
    </>
  );
}
