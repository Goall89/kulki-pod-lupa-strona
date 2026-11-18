# Kulki pod lupą – strona

Statyczna strona (HTML/CSS/JS), bez budowania i bez instalacji.

## Uruchomienie
Otwórz folder w VS Code. Najwygodniej zainstalować rozszerzenie **Live Server**
i kliknąć „Go Live”. Można też po prostu otworzyć `index.html` w przeglądarce.

## Struktura
- `index.html` – cała strona (sekcje: hero, kampania, samobadanie, dla kogo, o nas, wiedza, FAQ, kontakt, stopka)
- `css/style.css` – style globalne i responsywność
- `js/form.js` – obsługa formularza
- `images/` – maskotka, ikony samobadania, zdjęcia współtwórców

## Do uzupełnienia
Wszystkie miejsca w nawiasach kwadratowych, np. `[X]`, `[DO USTALENIA]`, `[ODPOWIEDŹ]`,
`[NAZWISKO]`, `[OPINIA...]`, `[Przegląd merytoryczny...]`. Wyszukaj w VS Code: Ctrl+Shift+F i wpisz `[`.
Dodatkowo: linki do social mediów w stopce (`href="#"`), polityka prywatności, cookies, bio współtwórców.

## Formularz
W `index.html` ustaw `action` formularza `#kontakt-form` na adres usługi (Formspree, Netlify Forms itp.).
Dopóki jest `#`, formularz pokazuje komunikat zamiast wysyłać.

## Uwagi
- Treści medyczne wymagają przeglądu lekarza (w tekście jest „2 minuty”, NFZ podaje ok. 5 minut).
- Style są głównie inline (wynik wizualizacji); można je stopniowo przenosić do `css/style.css`.
