# Publikowanie ilmaforge

Strona: https://ilmaforge.pages.dev/
Repozytorium: https://github.com/gopodgopod/ilmaforge

## Połączenie z Cloudflare

Projekt Pages `ilmaforge` jest połączony bezpośrednio z GitHub. Gałąź produkcyjna to `main`, a automatyczne wdrożenia są włączone. Zmiany połączone z `main` aktualizują stronę automatycznie. Nie potrzeba dodatkowego workflow GitHub Actions ani sekretów Cloudflare w GitHub.

Ustawienia w Cloudflare > Workers & Pages > ilmaforge > Settings:

- Framework preset: None.
- Build command: `node scripts/build.mjs`.
- Build output directory: `dist`.
- Root directory: katalog główny repozytorium (puste).
- Production branch: `main`.
- Automatic deployments: Enabled.
- Build watch paths: Include `*`, Exclude puste. Wykluczenie `*` pomija wszystkie wdrożenia.

Skrypt przygotowuje śledzone przez Git pliki strony w `dist/`, zachowuje ścieżki obrazów i filmów oraz `_redirects`, pomija konfigurację i dokumentację oraz sprawdza limity Pages. Nie wymaga instalacji zależności. Lokalnie uruchom `node scripts/build.mjs`.

## Własna domena

Domeny ustawia się w Cloudflare > ilmaforge > Custom domains. DNS i certyfikat są zarządzane po stronie Cloudflare. Samo repozytorium nie ustawia DNS.

## Sprawdzenie po publikacji

W zakładce Deployments sprawdź, czy najnowsza publikacja `main` ma status Success. Otwórz stronę i sprawdź obrazy, film oraz podstrony.

Formularz w `main.js` nadal zawiera adres `https://formspree.io/f/YOUR_FORM_ID`. Wysyłanie wiadomości wymaga osobnej konfiguracji Formspree.

Dokumentacja: https://developers.cloudflare.com/pages/configuration/git-integration/
