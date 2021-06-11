import axios from "axios";
const getListEvents = async () => {
    console.log("Loading events");
    try {
        const response = await axios.get("http://localhost:3001/events");
        console.log("Loaded events", response.data);
        return response.data.data;
    } catch (error) {
        console.log(error);
        alert("Ocurrió un error cargando los eventos");
    }
};

const saveEventSpence = async (spence) => {
    console.log("Save event spence");
    try {
        const response = await axios.post("http://localhost:3001/spences", spence);
        return response.data.data;
    } catch (error) {
        console.log(error);
        alert("Ocurrió un error agregando el gasto al evento");
    }
};



export { getListEvents, saveEventSpence };