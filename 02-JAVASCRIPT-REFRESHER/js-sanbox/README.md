# JavaScript SandBox

A lightweight playground to experiment with JavaScript.

### Getting Started

* Right-click on index.html → “Open with Live Server”.

### Using ES6 Modules

To enable modern JavaScript (ES6+ features), import your scripts in index.html like this:

```html
  <script src="./scripts/app.js" defer type="module"></script>
```

* type="module" → enables ES6 module syntax (import / export).
* defer → ensures the script runs after the HTML has loaded.