const fs = require("fs");
const path = require("path");

const shoppingListFilePath = path.join(__dirname, "../../data/shoppingList.json");

exports.readShoppingList = () => {
    if (!fs.existsSync(shoppingListFilePath)) {
        return [];
    }
    const data = fs.readFileSync(shoppingListFilePath, "utf-8");
    return JSON.parse(data);
};

exports.writeShoppingList = (data) => {
    fs.writeFileSync(shoppingListFilePath, JSON.stringify(data, null, 2));
};
