const characters = [
    { id: 1, name: "キャラ1", gender: "male", age: 20, str: 15, img: "link1.jpg" },
    { id: 2, name: "キャラ2", gender: "female", age: 25, str: 10, img: "link2.jpg" },
    { id: 3, name: "キャラ3", gender: "other", age: 30, str: 20, img: "link3.jpg" },
    // 追加キャラクター
];

const characterList = document.getElementById("character-list");
const maleCheckbox = document.getElementById("male");
const femaleCheckbox = document.getElementById("female");
const otherCheckbox = document.getElementById("other");
const sortSelect = document.getElementById("sort-select");

function renderCharacters() {
    characterList.innerHTML = "";
    let filteredCharacters = characters.filter(char => {
        if (char.gender === "male" && !maleCheckbox.checked) return false;
        if (char.gender === "female" && !femaleCheckbox.checked) return false;
        if (char.gender === "other" && !otherCheckbox.checked) return false;
        return true;
    });

    const sortValue = sortSelect.value;
    if (sortValue === "name") {
        filteredCharacters.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortValue === "age") {
        filteredCharacters.sort((a, b) => a.age - b.age);
    } else if (sortValue === "str") {
        filteredCharacters.sort((a, b) => a.str - b.str);
    }

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

maleCheckbox.addEventListener("change", renderCharacters);
femaleCheckbox.addEventListener("change", renderCharacters);
otherCheckbox.addEventListener("change", renderCharacters);
sortSelect.addEventListener("change", renderCharacters);

// 初期描画
renderCharacters();
