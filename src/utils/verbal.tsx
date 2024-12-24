import { useFetch } from "./useFetch"

const get = (url: RequestInfo | URL) => {
    const global = useFetch(url);

    return global;
}

const postJson = (url: RequestInfo | URL, body: object) => {
    const global = useFetch(url,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
    });

    return global;
}

const postFormData = (url: RequestInfo | URL, formData: FormData) => {
    const global = useFetch(url, {
        method: 'POST',
        body: formData,
    });

    return global;
}

const putJson = (url: RequestInfo | URL, body: object) => {
    const global = useFetch(url, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
    });

    return global;
}

const del = (url: RequestInfo | URL) => {
    const global = useFetch(url, {
        method: 'DELETE'
    });

    return global;
}

