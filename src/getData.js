export async function getData(type, userId) {
    try {
        let URL
        if (type === 'users') URL = 'https://jsonplaceholder.typicode.com/users'
        else URL = `https://jsonplaceholder.typicode.com/users/${userId}/${type}`

        const response = await fetch(URL)
        if (!response.ok) throw new Error(response.statusText)
        return response.json()
    } catch (error) {
        console.error(error);
    }
}