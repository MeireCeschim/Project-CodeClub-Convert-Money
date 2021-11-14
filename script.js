const button = document.getElementById("converter-button");
const select = document.getElementById("currency-select");

const dolar = 5.2;
const euro = 5.9;
const bitcoin = 0.0000059

const convertValues = () => {
  const inputReais = document.getElementById("input-real").value;
  const realValueText = document.getElementById("real-value-text");
  const currencyValueText = document.getElementById("currency-value-text");

  realValueText.innerText = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReais);

  if (select.value === "US$ Dólar americano") {
    currencyValueText.innerText = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputReais / dolar);
  }

  if (select.value === "€ Euro") {
    currencyValueText.innerText = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputReais / euro);
  }

  
  if (select.value === "Bitcoin") {
    currencyValueText.innerText = new Intl.NumberFormat('de-DE', {
    maximumFractionDigits:10,  
      style: "currency",
      currency:"XBT",
    }).format(inputReais * bitcoin);
  }
};

const changeCurrency = () => {
  const currencyName = document.getElementById("currency-name");
  const currencyImg = document.getElementById("currency-img");
  const inputReais = document.getElementById("input-real").value;

  if (select.value === "US$ Dólar americano") {
    currencyName.innerHTML = "Dólar americano";
    currencyImg.src = "./assets/eua.png";
  }

  if (select.value === "€ Euro") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "./assets/euro.png";
  }

  if (select.value === "Bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImg.src = "./assets/bitcoin.png";
  }

  if (inputReais > 0) {
    convertValues()
}
 
};

button.addEventListener("click", convertValues);
select.addEventListener("change", changeCurrency);
