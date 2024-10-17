//export/define cartBoxHTML
//export/define purchaseButtonHTML
//should include event listener for purchase button

//when radio button is clicked... display transient state qty 1 ton of (mineralsminingfacilities -mineral id-mineral name ) from (goveid-colonyid -colony name) 

export const cartBoxHTML = async (clickEvent) => {
    const response = await fetch("http://localhost:8088/mineralsminingfacilities?_expand=mineral")
    const mineralMiningFacilitiesArray = await response.json()
    const spaceCartContainer = document.querySelector(".spaceCart")
    let spaceCartHTML = `<h3>Space Cart</h3>`

    for (const mineral of mineralMiningFacilitiesArray) {
        if (parseInt(clickEvent.target.id) === mineral.facilityId) {
            
            spaceCartHTML += `
            <div> 1 ton of ${mineral.mineral.name}</div>
            `
            
        }

        spaceCartContainer.innerHTML = spaceCartHTML
        
    }
}
    


export const purchaseButtonHTML = () => {
    return "<article><button id='purchase'>Purchase Button</button></article>" 
}


