# ILMA Forge

Portfolio studia ILMA: https://ilmaforge.com

## Struktura

- `index.html`, `styles.css`, `main.js` — strona główna, portfolio i nawigacja.
- `project-lure.js`, `project-lure.css` — projekt „From concept to campaign”.
- `assets/lure/` — oryginalne obrazy tego projektu.
- `project-ghx.js`, `project-ghx.css`, `assets/ghx/` — projekt „GHX — Trailer” z Behance, film Vimeo i lokalne pętle animacji.
- `project-studies.js`, `project-studies.css`, `assets/studies/<projekt>/` — Crypto Coint Generator, Nalgene Bottle Outdoor, PCB board RISC-V Challenge, GamerHash. Każdy projekt ma osobny katalog materiałów i SOURCES.md.
- Pozostałe zdjęcia i katalog `canal/` — materiały wcześniejszych projektów.
- `scripts/build.mjs` — przygotowanie katalogu `dist/` dla Cloudflare Pages i wersjonowanie plików CSS/JS.
- `_redirects` — obsługa adresów podstron.
- `.github/workflows/site-check.yml` — automatyczna kontrola składni i budowania strony.

- `project-duolife.js`, `project-duolife.css`, `assets/duolife/` — projekt DuoLife zgodny z dostarczonym layoutem, tekst w HTML i oryginalne materiały.
- `assets/brand/ilma-wordmark.svg` — wektorowy znak ILMA używany jako podpis projektów.

## Praca nad zmianami

`main` zawiera aktualną wersję produkcyjną. Dla każdej zmiany utwórz krótkotrwałą gałąź od `main`, np. `feature/nazwa`, `bugfix/nazwa` lub `chore/nazwa`. Zmiany wykonywane przez Codex używają prefiksu `codex/`.

1. Wprowadź zmiany w gałęzi roboczej.
2. Otwórz Pull Request do `main`.
3. Poczekaj na wynik „Site check / Build static site” i sprawdź wygląd strony.
4. Połącz PR metodą squash; użyj zwięzłego komunikatu, np. `feat:`, `fix:`, `chore:` lub `docs:`.
5. Usuń zakończoną gałąź roboczą. Historię zmian zachowuje PR.

Dodatkowa gałąź `develop` nie jest potrzebna przy obecnym rozmiarze projektu. Gdy pracuje więcej osób, warto wymagać niezależnego zatwierdzenia PR przed połączeniem.

## Sprawdzenie i publikacja

Wymagany jest Node.js 22 i Git. Po dodaniu nowych plików do Git uruchom:

```sh
node --check main.js
node --check project-lure.js
node --check project-ghx.js
node --check project-studies.js
node scripts/build.mjs
```

Cloudflare Pages jest połączony z tym repozytorium i automatycznie publikuje zmiany z `main`. Polecenie budowania: `node scripts/build.mjs`. Katalog wynikowy: `dist`. Nie dodawaj `dist/` do repozytorium i nie twórz drugiego procesu wdrażania przez GitHub Actions.

Układ kafelków strony głównej jest naprzemienny: szeroki–mały, mały–szeroki. Na telefonie kafelki tworzą jedną kolumnę.
