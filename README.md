# JavaScript Testing

Voraussetzung: Node.js ist installiert (http://nodejs.org)

Projekt Initialisierung: npm init

(Repo klonen)

Pakete installieren: npm install

Konfiguration für Karma erstellen: node_modules/.bin/karma init
(WICHTIG: windows: Backslashes)

Start Server: node_modules/.bin/karma start
Run Tests: node_modules/.bin/karma run


Links:
https://jasmine.github.io/

## jasmine

fit/fdescribe - exklusiv ausführen
xit/xdescribe - skippen

## Exception handling

Aufgabe: Werft eine Exception, wenn ein String übergeben wird

prüfung auf String: typeof myVar === 'string'

function func() {
  calc.add('2', 3);
}

func = calc.add.bind(add, '2', 3);

expect(func).toThrow()


## Logger
Schreibt einen Logger 
log(message, severety)

bei severety info wird console.log aufgerufen
bei severety error wird console.error 
aufgerufen


## Server communication

1. install jquery: npm install jquery
2. jquery laden: karma.conf.js files