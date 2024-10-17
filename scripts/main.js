
import { facilityGetterHTML } from "./facilities.js"
//import { facilityMineralsHTML } from "./facilities.js"
import { purchaseButtonHTML } from "./orders.js"
// import { cartBoxHTML } from "./orders.js"
// import { colonyResourcesHTML } from "./colonies.js"


const render = async () => {
// const governorHTML = await govGetterHTML()
const facilityHTML = await facilityGetterHTML()
//const mineralsHTML = await facilityMineralsHTML()
const purchaseButton = await purchaseButtonHTML()
//const cartHTML = await cartBoxHTML()
// const resourcesProduced = await colonyResourcesHTML()


const container = document.querySelector('.container')

const structureHTML = `
<h1> Solar System Mining Marketplace </h1>

<article class="dropDowns">
    <section class="gov">
        <h3>Choose a governor</h3>
       
    </section>
    
    <section class="facilities">
        <h3>Choose a facility</h3>
        ${facilityHTML}
    </section>
</article>

<article class="facilityMinerals">
    <section class="mineralsAvailable">
    <h3>Facility Minerals </h3>
   
    </section>
</article>
    
<article class="cart">
    <section class="spaceCart">
    <h3>Space Cart</h3>
   
    
    </section>
    <section class= "button">
    ${purchaseButton}
    </section>
</article>

<article class="availableResources">
    <section class="mineralsOwned">
    <h3> Minerals</h3>
    
    </section>
</article>
`

container.innerHTML = structureHTML

}

render()

// ${governorHTML}
// ${facilityHTML}
// ${mineralsHTML}
// ${insertfacilityname}
// ${mineralsHTML}
// ${cartHTML}
// ${insertcolonyname(basedoffgov)}
// ${resourcesProduced}
// ${purchaseButton}
