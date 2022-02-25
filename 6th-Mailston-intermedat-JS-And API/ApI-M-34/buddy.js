const loadBuddy = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}

loadBuddy();

const displayBuddies = data => {
    const buddies = data.results
    const buddiesElement = document.getElementById('buddyDiv')
    for (const buddiesUser of buddies) {
        const p = document.createElement('p')
        p.innerText = `Nmae: ${buddiesUser.name.title} ${buddiesUser.name.first} ${buddiesUser.name.last} Email:${buddiesUser.email}
       `
        buddiesUser.email
        buddiesElement.appendChild(p)

    }


}