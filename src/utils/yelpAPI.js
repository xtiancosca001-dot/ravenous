const yelpApiKey = "sgQbdUUiGB4aYe2fugofqQ0GWtun9GYiZoA9tQqs8OUmMXQfTKkzUGEwrMUN7MmnxzDU8aQ2ACvImdisivs5biUshsdr5hNhxXO4l-HhL3bTE_SAu2lIB0cf0hItaHYx";

// Yelp API Module
const searchRestaurants = async (searchTerm, location, sortBy) => {
    const term = 'term=' + searchTerm;
    const loc = 'location=' + location;
    const sort = 'sort_by=' + sortBy;
    const apiURL = `https://api.yelp.com/v3/businesses/search?${sort}&${term}&${loc}`;
    const options = {
        method: 'GET',
        headers: {accept: 'application/json', authorization: `Bearer ${yelpApiKey}`}
    };
    try {
        const response = await fetch(apiURL, options);
        if (response.ok) {
            console.log('SUCCESS: ' + response.status);
            const jsonResponse = await response.json();
            return jsonResponse.businesses;
        } else {
            console.log("Error occurred: " + response.status);
            return [];
        }
    } catch(e) {
        console.log(e);
        return [];
    }
}

/* const testSearch = {
    searchTerm: 'italian',
    location: 'maginhawa',
    sortBy: 'rating'
 */

// searchRestaurants(testSearch.searchTerm, testSearch.location, testSearch.sortBy).then(b=>{console.log(b)})

export default searchRestaurants;