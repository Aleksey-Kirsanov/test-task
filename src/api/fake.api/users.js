const users = [
  {
    id: "67rdca3eeb7f6fgeed471815",
    phone: "+ 7 (111) 111-11-11",
    password: 1111,
  },
  {
    id: "67rdca3eeb7f6fgeed471816",
    phone: "+ 7 (222) 222-22-22",
    password: 2222,
  },
  {
    id: "67rdca3eeb7f6fgeed471817",
    phone: "+ 7 (333) 333-33-33",
    password: 3333,
  },
];

if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify(users));
}

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(JSON.parse(localStorage.getItem("users")));
    }, 1000);
  });

export default {
  users,
  fetchAll,
};
