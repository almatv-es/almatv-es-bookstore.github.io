# almatv-es — Online Bookstore

A polished static bookstore storefront built with HTML, CSS and JavaScript. It is ready to deploy on GitHub Pages and includes a large multi-category catalog, search, filters, sorting, product details, a local cart, newsletter UI and responsive design.

## Included

- 60+ books across horror, action & adventure, fantasy, mystery & thriller, romance, science fiction, self-help, business, biography, history, children, classics, young adult and poetry.
- Real edition ISBNs and cover-image URLs loaded from the Open Library Covers service.
- U.S. retail reference prices in USD. Prices can change by retailer, edition and promotion, so verify before a commercial launch.
- Responsive desktop, tablet and mobile layout.
- Search, category filtering, sorting, book modal, favorites UI and cart using `localStorage`.
- Custom `almatv-es` logo optimized to a lightweight WebP file.
- Demo support numbers using the reserved fictional 555 range.

## Run locally

Open `index.html` in a browser. For best results, use a local web server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## GitHub Pages

1. Upload all files to the repository root.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose your main branch and `/ (root)`.
5. Save.

## Catalog note

Book cover images are requested from Open Library by ISBN. If a cover cannot load, the site automatically creates a branded fallback cover. Prices are reference U.S. retail prices and should be rechecked before using the site as a live commercial catalog.

## Contact placeholders

- Support: `+1 (212) 555-0147`
- Book advisory: `+1 (212) 555-0183`
- Email: `support@almatv-es.com`

Replace these with your actual business contact details before launch.
