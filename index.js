let countEl = document.getElementById("count-el") 

let logNumber = document.getElementById("log-number")

let count = 0

function increment () {
    count += + 1
    countEl.innerText = count
}

const decrease = () => {
    count += - 1
    countEl.textContent = count
}

const log = () => {
    logNumber.textContent += count + " - "
    countEl.textContent = 0
  count = 0
}
