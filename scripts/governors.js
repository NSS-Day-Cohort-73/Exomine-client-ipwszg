//export/define govGetterHTML
//should include fetch request for data from api
export async function govGetterHTML(){
    const response = await fetch('http://localhost:8088/governors?_expand=colony')
    const data = await response.json()

//should include event listener for gov drop down selection
    const governorHTML = data.map(gov => `<option value="${gov.colony.id}">${gov.name}</option>`).join('')

    document.addEventListener("change", async (event) => {
        if (event.target.id === "governorsDropdown") {
                const colonyId = event.target.value
                const resourcesHTML = await colonyResourcesHTML(colonyId)
            document.querySelector(".mineralsOwned").innerhtml = resourcesHTML
        }
    })
        return `<select id="governorsDropdown">${governorHTML}</select>`
}