const url = 'http://localhost:3000/auth'

export async function getToken(user: any) {
  const response = await fetch(url + "/login", {
    method: "POST",
    body: JSON.stringify(user),
    headers: { "Content-Type": "application/json" },
  });  
  if (!response.ok) throw new Error('faild')
  return await response.json();
}

export async function getMe() {
  const token = localStorage.getItem("token");
  console.log(token);

  const response = await fetch(url + "/me", {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) throw new Error('faild')
  return response.json();
}