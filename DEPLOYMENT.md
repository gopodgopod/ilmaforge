# Publikowanie ilmaforge

Strona: https://ilmaforge.pages.dev/

Projekt Cloudflare Pages: `ilmaforge`. Pliki strony są w katalogu głównym repozytorium. Nie wymagają instalacji zależności. `node scripts/build.mjs` kopiuje śledzone przez Git pliki strony do `dist/`, zachowując ich ścieżki. Dokumentacja, skrypty i konfiguracja GitHub nie są publikowane.

## Jednorazowe ustawienia przed połączeniem pull requestu

1. W Cloudflare sprawdź, czy istniejący projekt `ilmaforge` należy do Twojego konta i ma gałąź produkcyjną `main`. Jeżeli jest już połączony z GitHub i publikuje automatycznie, wybierz jeden sposób publikowania. Przy użyciu tego workflow wyłącz automatyczne wdrożenia integracji Git, aby uniknąć podwójnych publikacji.
2. Skopiuj identyfikator konta Cloudflare (Account ID).
3. Utwórz token API z uprawnieniem **Account > Cloudflare Pages > Edit**, ograniczony do konta zawierającego projekt `ilmaforge`.
4. W GitHub otwórz **Settings > Secrets and variables > Actions > New repository secret** i dodaj:
   - `CLOUDFLARE_ACCOUNT_ID`: identyfikator konta.
   - `CLOUDFLARE_API_TOKEN`: token Cloudflare.

Nie zapisuj tokenu w kodzie, pull requeście ani czacie. Uprawnienie Pages Edit obejmuje projekty Pages na wybranym koncie; token nie potrzebuje uprawnień DNS do publikowania na istniejącym adresie.

## Publikacja

Po połączeniu pull requestu z `main` workflow **Deploy to Cloudflare Pages** opublikuje stronę w istniejącym projekcie `ilmaforge`. Kolejne zmiany na `main` aktualizują stronę automatycznie. Ręczne uruchomienie: **Actions > Deploy to Cloudflare Pages > Run workflow**, gałąź `main`.

Pull requesty nie uruchamiają publikacji. Brak wymaganych sekretów powoduje czytelny błąd przed wysłaniem plików. Udane przygotowanie plików lokalnie nie potwierdza dostępu do konta Cloudflare ani zdalnego wdrożenia.

## Własna domena

W istniejącym projekcie Cloudflare wybierz **Custom domains > Set up a custom domain** i postępuj zgodnie z instrukcjami DNS. Domeny nie ustawia się samym pull requestem. Powiązania domeny z projektem pozostają po stronie Cloudflare.

## Sprawdzenie

Po udanym workflow sprawdź stronę, obrazy, film i podstrony. Formularz kontaktowy w `main.js` ma jeszcze adres `https://formspree.io/f/YOUR_FORM_ID`: wysyłanie wiadomości wymaga osobnej konfiguracji Formspree.

Dokumentacja: https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/
