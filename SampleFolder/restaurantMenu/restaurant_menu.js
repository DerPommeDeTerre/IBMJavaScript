
const breakfastMenu = ["Pancakes", "Eggs Benedict", "Oatmeal"];
const mainCourseMenu = ["Steak", "Pasta", "Burger", "Salmon"];
const dessertMenu = ["Cake", "Ice Cream", "Pudding", "Fruit Salad"];

const breakfastMenuPrices = [10, 11, 12, 13];
const mainCourseMenuPrices = [14, 15, 16, 17];
const dessertMenuPrices = [18, 19, 20, 21];


const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item} - $${breakfastMenuPrices[index]}</p>`).join('');
document.getElementById("breakfastMenuItems").innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item,index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item} - $${mainCourseMenuPrices[index]}</p>`;
});
document.getElementById("maincourseMenuItems").innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]} - $${dessertMenuPrices[i]}</p>`;
}
document.getElementById("dessertMenuItems").innerHTML = dessertItem;