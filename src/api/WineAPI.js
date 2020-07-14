const fetchWines = () => {
  return fetch(`https://wine-api-1.herokuapp.com/wines`).then((response) =>
    response.json()
  );
};

const fetchWineByID = (wineID) => {
  return fetch(
    `https://wine-api-1.herokuapp.com/wines/${wineID}`
  ).then((response) => response.json());
};

const addWine = (wineObject) => {
  return fetch("https://wine-api-1.herokuapp.com/wines/new", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(wineObject),
  });
};

export default {
  fetchWineByID,
  fetchWines,
  addWine,
};
