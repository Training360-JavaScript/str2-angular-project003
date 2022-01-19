# Router - Gyakorlat 01

**_Instrukciók_**: jelenítsd meg az események részleteit a főoldalon. 

## Kezdő lépések
- Lépj be a letöltött mappába, és állítsd be a projektet:
- `cd <repo-name>`
- `code . -r`
- Telepítsd a függőségeket:
- `npm i`
- Indítsd el az Angular Development Server-t:
- `npm start`

Lépések:
> Az alkalmazás már rendelkezik az app-routing.module.ts állománnyal, ahol be tudod állítani a Router-t. Ezen kívül egy 
navigációs sávot is készítettem, amely megjeleníti majd a menüpontokat.

1. Hozd létre a `model/location` osztályt a következő változókkal: 
`@var address {string}`, 
`@var city {string}`, 
`@var country {string}`

1. Hozd létre a `model/event` osztályt a következő változókkal: 
`@var name {string}`, 
`@var date {string}`, 
`@var time {string}`,
`@var location {Location}`  
> FIGYELEM: vigyázz, hogy jó helyről importáld az Event és Location 
osztályokat, mert azonos néven léteznek natív JS-objektumok is.

1. Hozd létre a `service/event` service-t: 
`ng g service service/event`.  
Legyen egy getAll metódusa, amely legalább három esemény tömbjét adja vissza, ami megfelel a saját Event osztályunknak. Az adatok lehetnek szabadon választottak.

1. Hozd létre az EventsListComponent komponenst `ng g c page/events-list`.  
Injektáld be a constructor-ban az EventService-t, és vedd át a service 
getAll metódusa által visszaadott tömböt `eventList` néven.  
A HTML-ben jelenítsd meg az eseményeket (az eventList tömb elemeit) 
egy táblázatban.  
Az oszlopok sorrendje: Event, Date, Time, Location. (*ngFor-t használj)

1. Helyezd el az app.component.html-ben a router-outlet-et, és állítsd be az app-routing.module.ts-ben, hogy a kezdőlapon az EventsListComponent jelenjen meg (nem direktben, hanem a router-outlet segítségével).
