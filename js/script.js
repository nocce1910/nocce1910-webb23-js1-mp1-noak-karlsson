// Sätter en konstant variabel 'hue' till 250
const hue = 250;

// Hämtar det första h1-elementet på sidan och sätter dess textfärg till en färg baserad på 'hue'-värdet
const h1 = document.querySelector('h1');
h1.style.color = `hsl(${hue}, 80%, 40%)`;

// Skapar 5 <p>-element och sätter deras stilattribut
for (let i = 0; i < 5; i++) {

    // Sätter pHue till en färg baserad på index i loopen
    const pHue = 150 + i * 10;

    // Skapar en <p>-tagg och lägger till den på sidan
    const p = document.createElement('p');
    document.body.append(p);

    // Ändrar texten i <p>-taggen
    p.innerText = `Rad ${i + 1}`;

    // Sätter textfärgen på <p>-taggen till blå
    p.style.color = 'blue';

    // Sätter bakgrundsfärgen på <p>-taggen till en färg baserad på pHue-värdet
    p.style.backgroundColor = `hsl(${pHue}, 80%, 80%)`;

    // Centrerar texten i <p>-taggen
    p.style.textAlign = 'center';

    // Sätter fontstorleken på <p>-taggen till 24px, och ändrar sedan storleken och radhöjden baserat på index i loopen
    p.style.fontSize = '24px';
    p.style.fontSize = `${50 + i * 40}%`;
    p.style.lineHeight = `${150 + i * 15}%`;
}

// Skapar en container <div>-tagg och sätter dess stilattribut
var containerDiv = document.createElement("div");
containerDiv.style.display = "flex";
containerDiv.style.flexDirection = "row";
containerDiv.style.justifyContent = "space-between";
containerDiv.style.alignItems = "flex-start";
containerDiv.style.border = "2px solid #000";
containerDiv.style.padding = "50px";
document.body.appendChild(containerDiv);

// Skapar en <div>-tagg för Loop 1 och sätter dess stilattribut
var loop1Div = document.createElement("div");
loop1Div.style.display = "flex";
loop1Div.style.flexDirection = "column";
loop1Div.style.justifyContent = "space-between";
loop1Div.style.alignItems = "center";
loop1Div.style.marginRight = "10px";
loop1Div.style.padding = "10px";
loop1Div.style.border = "10px solid #80008f";
loop1Div.style.listStyle = "none";
loop1Div.style.padding = "0";
containerDiv.appendChild(loop1Div); // Lägger till loop1Div inuti containerDiv


// Skapa en loop som itererar 10 gånger, med ett räknarvärde från 0 till 9
for (var i = 0; i < 10; i++) {

    // Skapa ett nytt <p> element
    var p = document.createElement("p");

    // Sätt texten i <p> elementet till det aktuella räknarvärdet (i)
    p.textContent = i;

    // Ange stilen för <p> elementet
    p.style.width = "50px";
    p.style.height = "30px";
    p.style.display = "flex";
    p.style.alignItems = "start";
    p.style.justifyContent = "start";
    p.style.margin = "0";

    // Om det aktuella räknarvärdet är 4, ändra bakgrundsfärgen på <p> elementet till lila och textfärgen till vit
    if (i === 4) {
        p.style.backgroundColor = "purple";
        p.style.color = "white";

        // Hämta referensen till ett tidigare element med id "loop1Div" och ändra dess ramfärg till lila
        loop1Div.style.borderColor = "purple";
    }
    // Om det aktuella räknarvärdet är jämnt, ändra bakgrundsfärgen på <p> elementet till svart och textfärgen till vit
    else if (i % 2 === 0) {
        p.style.backgroundColor = "black";
        p.style.color = "white";
    }
    // I alla andra fall, ändra bakgrundsfärgen på <p> elementet till vit och textfärgen till svart
    else {
        p.style.backgroundColor = "white";
        p.style.color = "black";
    }

    // Lägg till <p> elementet som ett barn till ett tidigare element med id "loop1Div"
    loop1Div.appendChild(p);
}


// Skapa ett nytt <div> element för loop 2
var loop2Div = document.createElement("div");

// Ange stilen för <div> elementet
loop2Div.style.display = "flex";
loop2Div.style.flexDirection = "column";
loop2Div.style.justifyContent = "space-between";
loop2Div.style.alignItems = "center";
loop2Div.style.marginRight = "10px";
loop2Div.style.padding = "10px";
loop2Div.style.border = "10px solid #800080";
loop2Div.style.listStyle = "none";
loop2Div.style.padding = "0";

// Lägg till <div> elementet som ett barn till ett tidigare element med id "containerDiv"
containerDiv.appendChild(loop2Div);

// Skapa en loop som itererar från 9 till 0
for (var i = 9; i >= 0; i--) {

    // Skapa ett nytt <p> element
    var p = document.createElement("p");

    // Sätt texten i <p> elementet till det aktuella räknarvärdet (i)
    p.textContent = i;

    // Ange stilen för <p> elementet
    p.style.width = "50px";
    p.style.height = "30px";
    p.style.display = "flex";
    p.style.alignItems = "center";
    p.style.justifyContent = "center";
    p.style.margin = "0";

    // Om det aktuella räknarvärdet är 8, ändra bakgrundsfärgen på <p> elementet till lila och textfärgen till vit
    if (i === 8) {
        p.style.backgroundColor = "purple";
        p.style.color = "white";

        // Hämta referensen till ett tidigare element med id "loop2Div" och ändra dess ramfärg till lila
        loop2Div.style.borderColor = "purple";
    }
    // Om det aktuella räknarvärdet är jämnt, ändra bakgrundsfärgen på <p> elementet till svart och textfärgen till vit
    else if (i % 2 === 0) {
        p.style.backgroundColor = "black";
        p.style.color = "white";
    }
    // I alla andra fall, ändra bakgrundsfärgen på <p> elementet till vit och textfärgen till svart
    else {
        p.style.backgroundColor = "white";
        p.style.color = "black";
    }

    // Lägg till <p> elementet som ett barn till <div> elementet för loop 2
    loop2Div.appendChild(p);
}


// Skapa en ny <div> för Loop 3
var loop3Div = document.createElement("div");

// Sätt stilattribut för <div>-elementet
loop3Div.style.display = "flex";
loop3Div.style.flexDirection = "column";
loop3Div.style.justifyContent = "space-between";
loop3Div.style.alignItems = "center";
loop3Div.style.marginRight = "10px";
loop3Div.style.padding = "10px";
loop3Div.style.border = "10px solid #800080";
loop3Div.style.listStyle = "none";
loop3Div.style.padding = "0";

// Lägg till <div>-elementet i containerDiv
containerDiv.appendChild(loop3Div);

// Skapa en array med strängar av siffror på svenska
var numbers = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];

// Loopa igenom numbers-arrayen
for (var i = 0; i < numbers.length; i++) {
    // Skapa en ny <p>-tagg för varje siffra
    var p = document.createElement("p");
    // Sätt textinnehållet för <p>-taggen
    p.textContent = numbers[i];
    // Sätt stilattribut för <p>-taggen
    p.style.width = "50px";
    p.style.height = "30px";
    p.style.display = "flex";
    p.style.alignItems = "end";
    p.style.justifyContent = "end";
    p.style.margin = "0";

    // Om siffran är "sex"
    if (numbers[i] === "sex") {
        // Sätt bakgrundsfärg till lila och textfärg till svart
        p.style.backgroundColor = "purple";
        p.style.color = "black";
        // Sätt ramfärg på <div>-elementet till lila
        loop3Div.style.borderColor = "purple";
    }
    // Om siffrans index i arrayen är jämnt delbart med 2
    else if (i % 2 === 0) {
        // Sätt bakgrundsfärg till svart och textfärg till vit
        p.style.backgroundColor = "black";
        p.style.color = "white";
    }
    // Annars (siffrans index i arrayen är udda)
    else {
        // Sätt bakgrundsfärg till vit och textfärg till svart
        p.style.backgroundColor = "white";
        p.style.color = "black";
    }

    // Lägg till <p>-taggen i Loop 3 <div>-elementet
    loop3Div.appendChild(p);
}