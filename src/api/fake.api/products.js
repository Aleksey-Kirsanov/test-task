import { defineAsyncComponent } from "vue";

const products = [
  {
    id: "67rdca3eeb7f6fgeed471102",
    title: "Кольцо с бриллиантом",
    price: "11990",
    type: "кольца",
    material: "белое золото",
    type: "кольца",
    sale: true,
    bascket: false,
  },
  {
    id: "67rdca3eeb7f6fgeed471103",
    title: "Кольцо с бриллиантом",
    price: "6990",
    type: "кольца",
    material: "серебро",
    type: "кольца",
    sale: false,
    bascket: false,
  },
  {
    id: "67rdca3eeb7f6fgeed471104",
    title: "Кольцо с бриллиантом",
    price: "22990",
    type: "кольца",
    material: "красное золото",
    type: "кольца",
    sale: false,
    bascket: false,
  },
  {
    id: "67rdca3eeb7f6fgeed371102",
    title: "Браслет с бриллиантом",
    price: "10990",
    type: "браслеты",
    material: "белое золото",
    type: "кольца",
    sale: true,
    bascket: false,
  },
  {
    id: "67rdca3eeb7f6fgeed371103",
    title: "Браслет с бриллиантом",
    price: "7990",
    type: "кольца",
    material: "серебро",
    type: "браслеты",
    sale: true,
    bascket: false,
  },
  {
    id: "67rdca3eeb7f6fgeed371104",
    title: "Браслет с бриллиантом",
    price: "20990",
    type: "браслеты",
    material: "красное золото",
    type: "кольца",
    sale: false,
    bascket: false,
  },
];

if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify(products));
}

const fetchAll = () =>
  defineAsyncComponent(
    () =>
      new Promise((resolve) => {
        window.setTimeout(function () {
          resolve(JSON.parse(localStorage.getItem("products")));
        }, 1000);
      })
  );

export default {
  products,
  fetchAll,
};
