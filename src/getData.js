export async function getData(type) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/' + type)
        if (!response.ok) throw new Error(response.statusText)
        return response.json()
    } catch (error) {
        console.error(error);
    }
}