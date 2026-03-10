const url = 'http://localhost:3000/reports'

export async function createReport(token: string, data: {
    category: string
    message: string
    location: string
    image?: File
}) {
    const formData = new FormData();

    formData.append("category", data.category);
    formData.append("message", data.message);
    formData.append("location", data.location);

    if (data.image) {
        formData.append("image", data.image);
    }

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: formData
    });

    if (!response.ok) throw new Error('failed');
    return await response.json();
}