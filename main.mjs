import readline from "readline-sync";

/*
PROJEKTÖVERSIKT:
Detta är en recept-hanterare app där användaren kan:
1. Lägga till nytt recept
2. Visa alla recept
3. Ta bort ett recept
4. Uppdatera ett recept

PROGRAMMETS STRUKTUR:
- Array som lagrara alla våra recept-objekt
- Funktioner för att dela upp koden i små, hanterbara delar
- Varje funktion ska ha ETT specifikt jobb (Single Responsibility Principle)
- While-loop för att hålla programmet igång tills användaren väljer att avsluta
*/

// RECEPT ARRAY - Detta är "databasen" där alla recept lagras
// En array är som en lista där varje element har ett index [0, 1, 2, 3, osv.]
const recipes = [
    {
        name: "Pannkakor", // String
        portions: 4, // Number
        ingredients: "4 ägg, 4dl mjöl, 8dl mjölk", // String
        rating: 5, // Number 1-5
    },
    {
        name: "Äppelsmulpaj", // String
        portions: 6, // Number
        ingredients: "125g smör, 2dl vetemjöl, 1dl havregryn, 1.5dl socker, 0.5-1 tsk flingsalt", // String
        rating: 5, // Number 1-5
    },
    {
        name: "Chokladbollar", // String
        portions: 10, // Number
        ingredients: "100g smör, 1dl strösocker, 1msk vaniljsocker, 3msk kakao, 3dl havregryn, 3msk kallt starkt kaffe, kokos eller pärlsocker att rulla i", // String
        rating: 3, // Number 1-5
    },
    {
        name: "Kladdkaks muffins", // String
        portions: 10, // Number
        ingredients: "2 ägg, 3dl socker, 1.5dl vetemjöl, 2tsk vaniljsocker, 4msk kakao, 1krm salt, 100g smält smör", // String
        rating: 3, // Number 1-5
    },
    {
        name: "Blåbärspaj", // String
        portions: 7, // Number
        ingredients: "1L blåbär, 1dl socker, 2msk potatismjöl, 150g smör, 3/4dl socker, 3dl vetemjöl, vaniljsås eller glass till servering", // String
        rating: 5, // Number 1-5
    },
];

// FUNCTION: showRecipeMenu()
// VARFÖR EN FUNKTION? För möjligheten att kunna återanvända samma meny senare
function showRecipeMenu() {
    console.log("Välkommen till recept-hanteraren!");
    console.log("");
    console.log("Du har dessa val tillgängliga:");
    console.log("1. Lägg till nytt recept");
    console.log("2. Visa alla recept");
    console.log("3. Ta bort ett recept");
    console.log("4. Uppdatera ett recept");
    console.log("5. Avsluta applikationen");
    console.log("");
}

// Visa menyn när programmetstartar
showRecipeMenu();
