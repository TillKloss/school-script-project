# Quiz- & Lernplattform

## Projektbeschreibung
Ich werde eine interaktive Quiz- & Lernplattform entwickeln, die es Nutzern ermöglicht, Fragen aus verschiedenen Kategorien zu beantworten und dabei ihren Fortschritt zu speichern. Das Projekt wird mit HTML, CSS und JavaScript (jQuery) umgesetzt und nutzt zunächst Local Storage zur Speicherung. Falls Zeit bleibt, kann eine Online-Speicherung über Cloudflare Workers integriert werden.

### Kernelemente
- **Dynamisches Quizsystem** mit Fragen aus einer JSON-Datei (✓)
- **Benutzerfreundliche Oberfläche** mit HTML, CSS und jQuery (✓)
- **Speicherung des Fortschritts und Highscores** per Local Storage (✓)  
- **Kategorisierung der Quizfragen** zur thematischen Auswahl (✓)
- **Belohnungssystem** zur langfristigen Motivation der Nutzer 
  - **Credits sammeln** für richtige Antworten (✓)
  - **Freischaltungen** für verschiedene Themes (Dark Mode, Farbschemata) (✓)
  - **Zusätzliche Fragenkataloge** (z. B. Python, Java, C, Netzwerktechnik) (✗ | standartmäßig enthalten)

### Erweiterungen (optional, falls Zeit bleibt)
- **Hosting & Speicherung** über Cloudflare Workers für eine längerfristige Erweiterbarkeit (✓)
- **Highscore-Ranglisten** mit serverseitiger Speicherung (✗)
- **Login** zur Sicherung des eigenen Fortschritts (✗)

## Erklärungen
Allgemeine Erklärungen zu Kernfeatures auf der Webseite.

### Quizfragen- und Tippsystem
Quizfragen werden in Schwierigkeitsstufen aufgeteilt. Die Belohnung für das Lösen einer Frage und die Kosten
für einen Tipp werden anhand der Schwierigkeit berechnet.
- **easy** Belohnung: 10 Credits | Kosten Tipp: 5 Credits
- **medium** Belohnung 20 Credits | Kosten für Tipp: 10 Credits
- **hard** Belohnung 30 Credits | Kosten für Tipp: 15 Credits

Falsch beantwortete Fragen können nochmal beantwortet werden.

## Hosting über Cloudflare
*https://knowplex.pages.dev/*
