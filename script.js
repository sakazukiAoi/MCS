const characters = [
    { id: 1, name: "あただ", gender: "male", age: 20, str: 15, img: "画像/アイコン/1png" },
    { id: 2, name: "なら", gender: "female", age: 25, str: 10, img: "画像/アイコン/3png" },
    { id: 3, name: "ゆう", gender: "other", age: 30, str: 20, img: "画像/アイコン/4png" },
    { id: 4, name: "ぼうせいくろね", height :140, gender: "female", birthday "12/12", age: 32, occupation: "", STR: 7, CON: 8, POW:13,  DEX:17,  APP:17,  SIZ: 9, INT:12,  EDU: 14, img: "画像/アイコン/5png"},
    // 追加キャラクター
];
let isAscending = true; // 昇順か降順かのフラグ


const characterList = document.getElementById("character-list");
const maleCheckbox = document.getElementById("male");
const femaleCheckbox = document.getElementById("female");
const otherCheckbox = document.getElementById("other");
const sortSelect = document.getElementById("sort-select");
const toggleOrderBtn = document.getElementById("toggle-order");
function renderCharacters() {
    characterList.innerHTML = "";
    let filteredCharacters = characters.filter(char => {
        if (char.gender === "male" && !maleCheckbox.checked) return false;
        if (char.gender === "female" && !femaleCheckbox.checked) return false;
        if (char.gender === "other" && !otherCheckbox.checked) return false;
        return true;
    });

    const sortValue = sortSelect.value;
    filteredCharacters.sort((a, b) => {
        let comparison = 0;
        if (sortValue === "name") {
            comparison = a.name.localeCompare(b.name);
        } else if (sortValue === "age") {
            comparison = a.age - b.age;
        } else if (sortValue === "str") {
            comparison = a.str - b.str;
        }
        return isAscending ? comparison : -comparison; // 昇順または降順を切り替え
    });

    filteredCharacters.forEach(char => {
        const card = document.createElement("div");
        card.className = "character-card";
        card.innerHTML = `
            <img src="${char.img}" alt="${char.name}">
            <h3>${char.name}</h3>
            <p>性別: ${char.gender}</p>
            <p>年齢: ${char.age}</p>
            <p>STR: ${char.str}</p>
        `;
        characterList.appendChild(card);
    });
}

toggleOrderBtn.addEventListener("click", () => {
    isAscending = !isAscending;
    toggleOrderBtn.textContent = isAscending ? "昇順 ▼" : "降順 ▲";
    renderCharacters();
});

maleCheckbox.addEventListener("change", renderCharacters);
femaleCheckbox.addEventListener("change", renderCharacters);
otherCheckbox.addEventListener("change", renderCharacters);
sortSelect.addEventListener("change", renderCharacters);

// 初期描画
renderCharacters();
