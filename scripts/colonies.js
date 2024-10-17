 
export const colonyResourcesHTML = async () => {
    const response = await fetch("http://localhost:8088/governors?_expand=colony")
    const colonies = await response.json()

    let resourcesHTML = ""

    for (const colony of colonies) {
        if (parseInt(changeEvent.target.value) === colony.id) {
            resourcesHTML += await filterColonies(colony.id)
        }
    } 
    return resourcesHTML
}

const filterColonies = async (colonyId) => {
    const response = await fetch("http://localhost:8088/coloniesminerals?_expand=mineral")
    const filters = await response.json()

    let coloniesHTML = ""

    for (const filter of filters) {
        if (colonyId === filter.colonyId) {
            coloniesHTML += `${filter.mineralsAmount} tons of ${filter.mineral.name}`
        }
    }
    return coloniesHTML
}   
