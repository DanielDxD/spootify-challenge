import axios from "axios";
import config from "../config";



export async function getThisWeek(token) {
    const response = await axios.get(`${config.api.baseUrl}/browse/new-releases`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response.data
}
export async function getFeaturedPlaylists(token) {
    const response = await axios.get(`${config.api.baseUrl}/browse/featured-playlists`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response.data
}
export async function getCategories(token) {
    const response = await axios.get(`${config.api.baseUrl}/browse/categories`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response.data
}