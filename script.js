const button = document.getElementById("converter-button")
const select = document.getElementById("currency-select")

const dolar = 5
const euro = 6

const convertValues = () => {
    const inputReais = document.getElementById("input-real").value
    const realValueText = document.getElementById("real-value-text")
    const currencyValueText = document.getElementById("currency-value-text")

    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReais);

    if (select.value === "US$ Dólar americano")
        currencyValueText.innerHTML = new Intl.NumberFormat("en-Us", {
            style: "currency",
            currency: "USD",
        }).format(inputReais / dolar);

    if (select.value === "€ Euro")
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReais / euro);
}

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if (select.value === 'US$ Dólar americano') {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/eua.png.png"
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png.png"
    }

    convertValues()
}

button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)