<h1 align="center">Svelte3: Deutsche Übersetzungen</h1>

<p align="center">
  Deutsche Übersetzungen für <a href="https://github.com/sveltejs/svelte">Svelte3</a>.
</p>

<br>

Dieses Repository enthält einige deutsche Übersetzungen für Svelte3. Aktuell wurde nur eine Übersetzung für [svelte.dev](https://svelte.dev/) gestartet.

Das Projekt ist **stark** von der [russischen Übersetzung](https://github.com/AlexxNB/svelte3-translation-ru) von [AlexxNB](https://github.com/AlexxNB) und Mitwirkenden abgeschaut.


## Starten der lokalen Seite

Im Repository sind Yarn-Skripte hinterlegt, mit denen die aktuelle Version der erforderlichen Rohdaten von GitHub heruntergeladen werden können. Es besteht die Möglichkeit, einen Dev-Server zu starten, in dem alle Übersetzungen Live angezeigt werden.

Aktuell besteht noch nicht die Möglichkeit, die Projekte entgültig zu bauen bzw zu deployen.

```
git clone git@github.com:fausttobias/svelte3-translation-de.git
cd svelte3-translation-de

# Zuerst alle Abhängigkeiten herunterladen
yarn

# Die neuste Version eines Repositories laden
yarn project update svelte.dev

# Den Dev-Server starten (nach kurzer Zeit unter http://localhost:3000 erreichbar)
yarn project start svelte.dev
```

Alle Änderungen an den Übersetzungen werden jetzt automatisch neugeladen.


## Übersetzungen anlegen

Übersetzungen können aktuell über zwei Wege angelegt werden.

### translations.yml

In einer `translations.yml` Datei im Stammverzeichnis eines Projekts (projects/PROJEKTNAME/translations.yml) können Übersetzungen hinterlegt werden, wenn Dateien übersetzt werden müssen, in denen nur ein kleiner Teil übersetzbar ist (beispielsweise Codebeispiele oder HTML-Seiten).

Beim Übersetzen wird einfach der linke Wert durch den rechten ersetzt. Es entspricht also im wesentlichen einem strg+f, strg+v Workflows. Wichtig zu beachten ist, dass die Übersetzungen von oben nach unten angewandt werden. Soll bedeuten, dass ein "hello" vor einem "hello world" das "hello" zuerst ersetzt, was das "hello world" nicht mehr matchen lässt.

Für ein Beispiel siehe [projects/svelte.dev/translations.yml](projects/svelte.dev/translations.yml).

Die Übersetzungen werden im folgenden Format angegeben:

```yaml
translations:
  - files:
      - datei/die/es/zu/uebersetzen/gilt.html
      - noch/eine/datei.svelte
    translations:
      hello world!: Hallo Welt!
      "has to be quoted: ':'": "muss gequoted werden: ':'"

  - files:
      - andere/datei.txt
    translations:
      hello: hallo
      hello world: das hier wird fehlschlagen, weil oben schon 'hello' durch 'hallo' ersetzt wurde

# ...
```

### Komplette Datei übersetzen

Es besteht auch die Möglichkeit, komplette Dateien zu übersetzen. Das ist vorallem sinnvoll bei Markdown Dateien, die generell nur Text beinhalten.

Die Dateien sind in projects/PROJEKTNAME/... zu finden und werden direkt ins Ursprungsprojekt eingefügt.

Um eine neue Datei zu übersetzen muss die Ursprungsdatei aus dem Repository selbst kopiert werden. Zu finden sind die Dateien unter `.projects/PROJECTNAME/...`. Wichtig hierbei ist, dass bei machen Projekten ein `subdir` definiert sein kann. Der Pfad liegt also nicht direkt im Stammverzeichnis des geclonedten Projekts, sondern im Stammverzeichnis + `subdir`.


## Mitwirken

Issues oder Pull Requests sind erwünscht!

Dieses Projekt ist aktuell ein Hobbyprojekt und ich würde mich sehr über Unterstützer freuen.


## Autor

[Tobias Faust](https://github.com/FaustTobias)
