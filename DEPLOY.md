# Публикация VERIDICA на Cloudflare Pages

Сайт: **veridica.net**  
Репозиторий: **github.com/DianaLukovskyi/veridica-site**

---

## Тип проекта

Статический сайт: HTML + CSS + JavaScript.  
Сборка (npm, webpack и т.д.) **не требуется**.

---

## Настройки Cloudflare Pages

| Параметр | Значение |
|----------|----------|
| **Framework preset** | None |
| **Build command** | *(оставить пустым)* |
| **Build output directory** | `/` |
| **Root directory** | *(оставить пустым — корень репозитория)* |
| **Production branch** | `main` |

> Если Cloudflare не принимает `/` как output directory, укажите `.` (точка).

---

## Шаг 1. Загрузить файлы на GitHub

В корне репозитория должны лежать:

- все `*.html` (66 страниц)
- `style.css`, `script.js`, `favicon.svg`
- `polygraph.jpg`, `diana.jpg`
- `robots.txt`, `sitemap.xml`, `index.html`

Через терминал:

```bash
cd /Users/feling/Desktop/VERIDICA2
git add .
git commit -m "Prepare site for Cloudflare Pages"
git push origin main
```

---

## Шаг 2. Создать проект в Cloudflare Pages

1. [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages**
2. **Create** → **Pages** → **Connect to Git**
3. Выберите репозиторий **veridica-site**
4. Укажите настройки из таблицы выше
5. **Save and Deploy**

После деплоя сайт будет доступен на `https://<имя-проекта>.pages.dev`.

---

## Шаг 3. Подключить домен veridica.net

1. В проекте Pages → **Custom domains**
2. **Set up a custom domain** → введите `veridica.net`
3. Подтвердите (**Activate domain**)
4. По желанию добавьте `www.veridica.net`

Если домен куплен в Cloudflare, DNS-записи создаются автоматически.

---

## DNS-записи для veridica.net

При ручной настройке (обычно Cloudflare делает сам):

| Тип | Имя | Значение | Proxy |
|-----|-----|----------|-------|
| **CNAME** | `@` (veridica.net) | `<ваш-проект>.pages.dev` | Proxied (оранжевое облако) |
| **CNAME** | `www` | `<ваш-проект>.pages.dev` | Proxied |

SSL (HTTPS) включается автоматически.

**Email Routing** (`info@veridica.net`) не конфликтует с Pages — это отдельные записи MX/Email Routing.

---

## Шаг 4. Проверка после публикации

- https://veridica.net
- https://veridica.net/ua.html
- https://veridica.net/ru-about.html
- https://veridica.net/robots.txt
- https://veridica.net/sitemap.xml

---

## Обновление сайта

1. Измените файлы локально
2. `git add .` → `git commit -m "..."` → `git push`
3. Cloudflare Pages пересоберёт сайт за 1–2 минуты

---

## Локальная проверка

```bash
cd /Users/feling/Desktop/VERIDICA2
python3 -m http.server 8080
```

Откройте: http://127.0.0.1:8080/ua.html
