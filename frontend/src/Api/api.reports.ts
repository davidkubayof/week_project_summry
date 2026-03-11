const url = 'http://localhost:3000/reports'

export async function createReport(token: string, data: FormData) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
        },
        body: data
    });

    if (!response.ok) throw new Error('failed');
    return await response.json();
}
