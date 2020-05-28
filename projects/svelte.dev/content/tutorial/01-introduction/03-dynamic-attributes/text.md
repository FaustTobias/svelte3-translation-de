---
title: Dynamische Attribute
---

Genau so wie du geschweifte Klammern nutzen kannst, um Text anzuzeigen, kannst du sie auch dafür verwenden, um Element-Attribute zu veränden.

Unserem Bild fehlt ein `src` Attribut — Lass uns das ändern:

```html
<img src={src}>
```

Schon besser. Aber Svelte zeigt uns nun eine Warnung an:

> A11y: &lt;img&gt; element should have an alt attribute

Wenn man Web Applikationen baut ist es wichtig, sicherzustellen, dass sie *zugänglich* zu einer möglicht großen Nutzerbasis sind. Das beinhaltet (beispielsweise) auch Menschen, die eine Sehschwäche aufweisen, eine schwache Hardware besitzen oder eine schlechte Internetverbindung besitzen. Zugänglichkeit (engl. "Accessibility", hier kurz a11y) ist nicht immer leicht richtig umzusetzen. Svelte wird dir aber helfen, indem es dir eine Warnung bei unzugänglichem Markup anzeigt.

In diesem Fall fehlt uns das `alt` Attribute, welches eine Beschreibung des Bildes für Menschen mit Screenreadern oder mit langsamer Internetverbindung, die das Bild nicht herunterladen können bereitstellt. Fügen wir einfach eine Beschreibung hinzu:

```html
<img src={src} alt="Ein tanzender Mann.">
```

Wir könne auch geschweifte Klammern *innerhalb* von Attributen verwenden. Versuch doch mal das ganze durch `"Ein tanzender {name}."` zu erstezen — denke daran eine `name` Variable im Skript-Block zu deklarieren.


## Abgekürzte Attributschreibweise

Es ist nicht unüblich ein Attribute setzen zu wollen, dessen Name und Wert der gleiche ist, beispielsweise `src={src}`. Svelte gibt uns eine praktische Kurzschreibweise für diese Fälle:

```html
<img {src} alt="Ein tanzender Mann.">
```

