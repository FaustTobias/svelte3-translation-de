---
title: Daten hinzufügen
---

Eine Komponente die nur statisches Markup Anzeigt ist nicht wirklich interessant. Lass uns ein paar Daten hinzufügen.

Als erstes musst du ein Script-Tag zu deiner Komponente hinzufügen und eine `name` Variable hinzufügen:

```html
<script>
	let name = 'Welt';
</script>

<h1>Hallo Welt!</h1>
```

Dann können wir `name` im Markup referenzieren:

```html
<h1>Hallo {name}!</h1>
```

In den geschweiften Klammern kannst du sämtlichen JavaScript Code packen. Versuche mal, `name` durch `name.toUpperCase()`zu ersetzen, um etwas lauter zu grüßen.
