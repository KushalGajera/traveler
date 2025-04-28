const conn = process.env.REACT_APP_API_BASE_URL;

console.log(conn);  // This should log 'http://localhost:3001'

// Helper function for making API requests
const fetchData = async (endpoint) => {
    const url = `${conn}${endpoint}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};

// Fetch trips
export const fetchTrips = async () => {
    return await fetchData('/trips');
};

// Fetch flights
export const fetchFlights = async () => {
    return await fetchData('/flights');
};

// Fetch accommodations
export const fetchAccommodations = async () => {
    return await fetchData('/accommodations');
};
