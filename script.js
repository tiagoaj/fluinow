const form = document.getElementById('quote-form');
const status = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton?.textContent || 'Solicitar orçamento';

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Enviando...';
    }

    const formData = new FormData(form);
    const payload = new URLSearchParams();

    payload.append('name', String(formData.get('name') || ''));
    payload.append('company', String(formData.get('company') || ''));
    payload.append('email', String(formData.get('email') || ''));
    payload.append('phone', String(formData.get('phone') || ''));
    payload.append('solution', String(formData.get('solution') || ''));
    payload.append('message', String(formData.get('message') || ''));
    payload.append('_subject', 'Novo orçamento recebido via site Fluinow');
    payload.append('_template', 'table');
    payload.append('_captcha', 'false');

    try {
      const response = await fetch('https://formsubmit.co/ajax/agfluinow@gmail.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: payload.toString()
      });

      if (response.ok) {
        status.textContent = 'Obrigado! Seu orçamento foi enviado com sucesso. Em breve retornaremos.';
        form.reset();
      } else {
        throw new Error('Falha ao enviar');
      }
    } catch (error) {
      status.textContent = 'Não foi possível enviar agora. Entre em contato pelo WhatsApp: 49 92001-9125.';
      window.location.href = 'mailto:agfluinow@gmail.com?subject=Orçamento%20Fluinow&body=' + encodeURIComponent(
        `Nome: ${String(formData.get('name') || '')}\nEmpresa: ${String(formData.get('company') || '')}\nE-mail: ${String(formData.get('email') || '')}\nWhatsApp: ${String(formData.get('phone') || '')}\nSolução: ${String(formData.get('solution') || '')}\nDescrição: ${String(formData.get('message') || '')}`
      );
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
      }
    }
  });
}
