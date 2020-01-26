const containerDiv = document.querySelector("#container")

document.querySelectorAll("button").forEach(item =>
    item.addEventListener("click", function () {
        containerDiv.innerText = this.getAttribute("data-text")
    })
)