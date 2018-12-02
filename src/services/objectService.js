import axios from 'axios'

export function getObjects (page = 0) {
    axios.get("http://localhost:8080/objetos/")
}