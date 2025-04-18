import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://api.jsonbin.io/v3/qs/67ff47e58960c979a5862a56",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

const FilmService = {
    getFilmRegionData() {
        return apiClient
            .get()
            .then((response) => response.data)
            .catch((error) => {
                console.error("Error fetching film region data:", error);
                throw error;
            });
    },
};

export default FilmService;
