

import {cartBoxHTML} from "./orders.js"
//export/define facilityGetterHTML
//export/define facilityMineralsHTML (this creates radio buttons based on the facility selection + filterFacilities())
//define filterFacilities()
//should include event listener for facility drop down selection
//should include event listener for mineral radio buttons
//should include fetch request for data from api
export const facilityMineralsHTML = async(changeEvent) =>{
    document.addEventListener("click", cartBoxHTML)
    const response = await fetch ("http://localhost:8088/mineralsminingfacilities?_expand=mineral")
    const expandedMineralList = await response.json()
    const selectedValue = changeEvent.target.value
    const [selectedFacilityId, selectedFacilityName] = selectedValue.split("|")
    if (changeEvent.target.id === "facilities"){
    let FacilityHTML = `<h3>Facility Minerals</h3>`
       FacilityHTML =`<h3>Facility Minerals for ${selectedFacilityName}</h3>`
     for (const mineral of expandedMineralList) {
        if ( parseInt(selectedFacilityId) === mineral.facilityId){
            FacilityHTML+= `<input type= 'radio' name='${mineral.mineral.name}' value='${mineral.mineralId}' id='${mineral.facilityId}' /> ${mineral.mineralsAmount} tons of ${mineral.mineral.name}`
        }
     }
     document.querySelector('.mineralsAvailable').innerHTML = FacilityHTML
    }
}
export const facilityGetterHTML = async () => {
    document.addEventListener("change", facilityMineralsHTML)
    const response = await fetch ("http://localhost:8088/facilities")
    const facilityOptions = await response.json()
    let facilityOptionsHTML = ` <div>
    <select id= "facilities">
    <option value= "0">Click to see facility options...</option>`
    const facilityOptionsString = facilityOptions.map(
        (facility) => {
            return `<option value="${facility.id}|${facility.name}" name='facilityDropdown'> ${facility.name} </option>`
        }
    )
    facilityOptionsHTML += facilityOptionsString.join("")
    facilityOptionsHTML += `</select> </div>`
    return facilityOptionsHTML
}
