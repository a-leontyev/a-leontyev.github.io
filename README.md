# leontevanton.github.io

Личный сайт-визитка Антона Леонтьева — Team Lead / Senior C++ Developer.

## Что это

Визитка-хаб: компактная точка входа в бренд с ссылками на все активы + собственный контент (оцифрованные публикации, витрина VSCode расширений).

**Не резюме-дамп.** Три вопроса за пять секунд: кто, чем ценен, что дальше.

## Структура

```
/
├── index.html              — визитка (one-pager, 8 блоков)
├── style.css               — единый стиль, dark/light mode
├── script.js               — переключение RU/EN (~15 строк)
├── Resume.pdf              — для скачивания
├── robots.txt
├── sitemap.xml
│
├── publications/
│   └── index.html          — каталог статей с фильтрами
│
├── extensions/
│   └── index.html          — витрина VSCode расширений L.A.L.
│
├── articles/
│   ├── cpp-performance-optimization.html
│   ├── fpga-topology.html
│   ├── hydrodynamics.html
│   └── hydrophysical-processes-fpga.html
│
├── assets/
│   ├── photo.jpg
│   └── logo.jpg
│
└── .github/
    └── workflows/
        └── deploy.yml      — автодеплой на GitHub Pages
```

## Стек

- Vanilla HTML / CSS / JS — без фреймворков, без сборщиков
- CSS Custom Properties — dark/light mode через `prefers-color-scheme`
- DM Sans + DM Mono — типографика (Google Fonts, TODO: self-host woff2)
- GitHub Pages + GitHub Actions — хостинг и CI/CD
- Рекомендуется: Cloudflare DNS поверх для CDN-кэширования в РФ

## Дизайн-принципы

1. **Минимализм** — уровень Stripe/Linear. Ноль декоративных эффектов
2. **Hub-модель** — сайт ведёт на активы, а не дублирует их
3. **Числа > прилагательные** — «40 инженеров» вместо «опытный руководитель»
4. **Dark/light auto** — переключается по системным настройкам
5. **RU/EN** — через data-атрибуты, одна кнопка

## Локальная разработка

```bash
# Любой статический сервер, например:
python3 -m http.server 8000
# или
npx serve .
```

Открыть `http://localhost:8000`

## Деплой

Push в `main` → GitHub Actions автоматически деплоит на GitHub Pages.

Для первого запуска:
1. Settings → Pages → Source: GitHub Actions
2. Push в main
3. Сайт доступен по `https://<username>.github.io`

## L.A.L. Development — VSCode Extensions

| Расширение | Цвет | Метафора | Статус |
|-----------|------|----------|--------|
| **Lector** | Gold `#CFB53B` | Читает документы вглубь | Soon |
| **Noctua** | Blue `#4FC3F7` | Сова — видит runtime в темноте | Soon |
| **Augur** | Purple `#A87CE8` | Предсказывает проблемы C++ | Soon |
| **Vigil** | Gold `#CFB53B` | Страж Gitea | Coming days |
| **Ephemeris** | Copper `#C47B3A` | Дневник разработки | Soon |

## Лицензия

MIT — см. [LICENSE](LICENSE)

---

*Антон Леонтьев · [habr.com/ru/users/aleontyev](https://habr.com/ru/users/aleontyev) · [linkedin.com/in/leontevanton](https://linkedin.com/in/leontevanton)*
