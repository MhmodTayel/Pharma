
const API = 'http://localhost:5000/users';

export async function fetchFromAPI(endpointURL, opts) {
  const { method, body } = { method: 'POST', body: null, ...opts };

//   const user = auth.currentUser;
//   const token = user && (await user.getIdToken());

  const res = await fetch(`${API}/${endpointURL}`, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      'Content-Type': 'application/json',
    //   Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
}