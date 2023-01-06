
function calculateReimbursement(projects, low_cost_cities, high_cost_cities){
    const low_cost_travel_day = 45;
    const high_cost_travel_day = 55;
    const low_cost_full_day = 75
    const high_cost_full_day = 85

    let final_reimbursement = 0;

    for(let project of projects){
        let start_date = new Date(project["start_date"])
        let end_date = new Date(project["end_date"])
        let city = project["city"]

        let full_days = end_date.getDate()-start_date.getDate()-1

        if(low_cost_cities.has(city)){
            final_reimbursement += (low_cost_travel_day*2)
            final_reimbursement += (low_cost_full_day*full_days)
        }else if(high_cost_cities.has(city)){
            final_reimbursement += (high_cost_travel_day*2)
            final_reimbursement += (high_cost_full_day*full_days)
        }
    }
    return final_reimbursement
}

let low_cost_cities = new Set(["Pittsburgh", "Cleveland", "Detroit"])
let high_cost_cities = new Set(["San Francisco", "New York", "Seattle"])
let ex_projects = [{city: "New York", start_date: "2021-03-25", end_date: "2021-03-30"},
{city: "Pittsburgh", start_date: "2021-03-12", end_date: "2021-03-15"}]

let output = calculateReimbursement(ex_small_project, low_cost_cities,high_cost_cities)

console.log(output)

//O(N) time complexity algorithm that loops through all cities in a project and sums up their needed
//reimbursement. Use a Set for storing cities for quick O(1) lookup, and store dates
//as strings to be converted to Date Object. 