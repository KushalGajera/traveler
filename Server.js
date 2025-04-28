import express from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());

// Mock data for trips
const mockTrips = [
    {
        id: '1',
        destination: 'Tokyo',
        startDate: '2025-01-27',
        endDate: '2025-02-02',
        duration: 8,
        groupSize: '4 (2M,2F)',
        activities: 14,
        image: '/assets/tokyo.jpg',
    },
    {
        id: '2',
        destination: 'Kyoto',
        startDate: '2025-01-20',
        endDate: '2025-01-25',
        duration: 6,
        groupSize: '2 (2M,2F)',
        activities: 8,
        image: '/assets/kyoto.jpg',
    },
    {
        id: '3',
        destination: 'Osaka',
        startDate: '2025-03-10',
        endDate: '2025-03-15',
        duration: 5,
        groupSize: '3 (2M,2F)',
        activities: 10,
        image: '/assets/osaka.jpg',
    },
];

// Mock data for flights
const mockFlights = [
    {
        id: '1',
        date: '2025-01-26',
        time: '10:50 am',
        origin: 'DEL',
        originFull: 'Delhi, India',
        destination: 'NRT',
        destinationFull: 'Narita, Tokyo',
    },
    {
        id: '2',
        date: '2025-01-28',
        time: '09:00 am',
        origin: 'NRT',
        originFull: 'Narita, Tokyo',
        destination: 'ICN',
        destinationFull: 'Incheon, Seoul',
    },
];

// Mock data for accommodations
const mockAccommodations = [
    {
        id: '1',
        name: 'Hotel Name 1',
        city: 'City A',
        country: 'Country A',
        image: '/assets/hotel1.jpg',
    },
    {
        id: '2',
        name: 'Hotel Name 2',
        city: 'City B',
        country: 'Country B',
        image: '/assets/hotel2.jpg',
    },
    {
        id: '3',
        name: 'Resort Name 1',
        city: 'Beach City',
        country: 'Country C',
        image: '/assets/hotel3.jpg',
    },
    {
        id: '4',
        name: 'Villa Name 1',
        city: 'Mountain Town',
        country: 'Country D',
        image: '/assets/hotel4.jpg',
    },
];

// Define API endpoints
app.get('/trips', (req, res) => {
    res.json(mockTrips);
});

app.get('/flights', (req, res) => {
    res.json(mockFlights);
});

app.get('/accommodations', (req, res) => {
    res.json(mockAccommodations);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
