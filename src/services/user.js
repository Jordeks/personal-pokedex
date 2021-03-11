const URL = 'http://localhost:3000/api/v1'

export const login = (credentials) => {
  return fetch(`${URL}/login`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials)
  })
    .then(r => r.json())
}