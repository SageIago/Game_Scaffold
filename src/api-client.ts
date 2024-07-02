import axios from "axios";

export default axios.create({
    baseURL: "https://free-to-play-games-database.p.rapidapi.com/api/",
    headers: {
        'x-rapidapi-key': '357e7576f7msh935c6b4a5088bfcp156af7jsn1a983ebf1854',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
})