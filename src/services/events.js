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
const getSpencesByEvents = async (eventId) => {
    console.log("Loading spences by events", eventId);
    try {
        const response = await axios.get(`http://localhost:3001/spences/${eventId}`);
        console.log("Loaded spences", response.data);
        return response.data.data;
    } catch (error) {
        console.log(error);
        alert("Ocurrió un error cargando los gastos");
    }
};
const getContactsByUser = async (userId) => {
    console.log("Loading contacts by user", userId);
    try {
        const response = await axios.get(`http://localhost:3001/contacts/${userId}`);
        console.log("Loaded contacts", response.data);
        return response.data.data;
    } catch (error) {
        console.log(error);
        alert("Ocurrió un error cargando los gastos");
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


const inviteContactToEvent = async (data) => {
    console.log("Invite event contact");
    try {
        const response = await axios.post("http://localhost:3001/invite", data);
        return response.data.data;
    } catch (error) {
        console.log(error);
        alert("Ocurrió un error invitando a alguien");
    }
};


export { getListEvents, saveEventSpence, getSpencesByEvents, getContactsByUser, inviteContactToEvent };