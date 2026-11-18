// Formularz kontaktowy.
// Żeby wysyłał wiadomości, ustaw atrybut action formularza w index.html
// na adres usługi formularzy (np. https://formspree.io/f/TWOJE_ID albo Netlify Forms).
(function () {
  var form = document.getElementById('kontakt-form');
  if (!form) return;
  var status = document.getElementById('form-status');
  form.addEventListener('submit', function (e) {
    var action = form.getAttribute('action');
    if (!action || action === '#') {
      e.preventDefault();
      status.textContent = 'Formularz nie jest jeszcze podłączony do wysyłki. Napisz do nas: kulkipodlupa@gmail.com';
      return;
    }
    e.preventDefault();
    status.textContent = 'Wysyłam…';
    fetch(action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
      .then(function (r) {
        if (!r.ok) throw new Error('http ' + r.status);
        form.reset();
        status.textContent = 'Dziękujemy! Odezwiemy się wkrótce.';
      })
      .catch(function () {
        status.textContent = 'Nie udało się wysłać. Napisz do nas: kulkipodlupa@gmail.com';
      });
  });
})();
