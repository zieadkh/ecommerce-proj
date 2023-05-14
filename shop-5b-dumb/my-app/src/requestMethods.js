import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGQyMTNjZmQ5MmIwZTI5NjNkNTI1NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MzUwMzI5OSwiZXhwIjoxNjgzNzYyNDk5fQ.JVpYf7eApGnAoSfh27bDGRbGTWmqFO3L7RXuN8v_gu0";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{ token: `Bearer${TOKEN}` },
});
