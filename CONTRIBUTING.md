# Contributing

This is a personal site, but contributions are welcome for:

- Bug fixes (broken links, typos, layout issues)
- Accessibility improvements
- Performance optimizations
- Translation corrections (RU/EN)

## Style guide

- Vanilla HTML/CSS/JS only — no frameworks, no build tools
- CSS: use existing custom properties from `style.css`
- Dark/light mode: test both via `prefers-color-scheme`
- RU/EN: add `data-ru` and `data-en` attributes to all user-facing text
- Keep total JS under 50 lines
- No external dependencies except Google Fonts

## Testing

```bash
python3 -m http.server 8000
```

Check:
1. Light mode
2. Dark mode (browser DevTools → Rendering → prefers-color-scheme: dark)
3. Mobile layout (640px viewport)
4. RU/EN toggle
5. All links
