# Status Checker
## Ihr helft Christian damit er seinen Porsche bekommt und ihr bekommt ein Danke
Ich möchte ein kleines Tool bauen, welches meine Kundenwebseiten aus einer JSON liest.
Jede Seite prüft ob sie erreichbar ist
Mir in der Konsole das ergebnis ausgibt
Mir eine Logdatei erstellt mit vergangenen Prüfungen

### Inhalt
- Datum der Prüfung
- host name
- IP Adresse
- Status Code

### Neue Dinge für uns
1. NPM NodePackage manager https://www.npmjs.com/ 
 - mit npm init erstellen wir ein eigenes Node Package

### Alte Dinge für uns
1. Git
 - mit (git init) erstellen wir ein neues Git Repository
 -> Versionsverwaltung (aktuelle ehere für uns als Code Backup auf Github)
 - mit (git add `<filename>`) fügen wir dateien in die staging area ein
 - mit (git commit) erstellen wir einen commit aus der aktuellen staging area
  - git (git commit -m 'message')
 - wir wollen github nutzen und dafür müssen wir ein remote repository dort erstellen und hier lokal einbingen
 - (git remote add origin `<url zum remote repository>`)
 - aktuelle commits werden mit (git push origini main) auf das remote repository gebracht

 ## Starten der Anwendung
 1. Rename webseiten.example.json zu webseiten.json
 2. Füge die zu prüfenden Webseiten in das Array von webseiten.json ein
 3. node index.js