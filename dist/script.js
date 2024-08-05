const input = document.getElementById("input");
const box = document.getElementById("box");
const card = document.getElementById("card");
const submitBtn = document.getElementById("submitBtn");
const error = document.createElement("h1");

submitBtn.addEventListener("click", () => {
    if (input.value.trim() != "") {
        let item = input.value
        const itemBox = document.createElement("div");
        const itemText = document.createElement("div");
        const buttons = document.createElement("div");
        const editBtn = document.createElement("button");
        const removeBtn = document.createElement("button");

        itemBox.className = "grid grid-cols-12 gap-2 mb-1"
        itemText.className = "col-span-10 text-left"
        buttons.className = "flex items-center justify-center col-span-2"
        editBtn.className = "mr-2"
        editBtn.innerHTML = `<svg class="size-4 text-green-600" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path clip-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" fill-rule="evenodd"></path></svg>`
        removeBtn.innerHTML = `<svg class="size-4 text-red-600" data-slot="icon" aria-hidden="true" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z" fill-rule="evenodd"></path></svg>`
        itemText.textContent = item

        removeBtn.addEventListener("click", () => {
            itemBox.remove()
        })

        editBtn.addEventListener("click", () => {
            item = prompt("Edit item", item)
            if (item.trim() != "") {
                itemText.textContent = item
            }
        })

        buttons.appendChild(editBtn)
        buttons.appendChild(removeBtn)
        itemBox.appendChild(itemText)
        itemBox.appendChild(buttons)
        box.appendChild(itemBox)
        input.value = ""
    }
    else {
        error.className = "text-lg text-red-500 font-medium text-center"
        error.textContent = "Please enter an item"
        card.insertBefore(error, box);
        setTimeout(() => {
            error.remove()
        }, 1000)
    }
})