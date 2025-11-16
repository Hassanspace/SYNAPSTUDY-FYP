export const fetchWithToken = async (url, options = {}) => {
  let access = localStorage.getItem("access");
  const refresh = localStorage.getItem("refresh");

  const headers = options.headers || {};
  headers["Authorization"] = `Bearer ${access}`;
  options.headers = headers;

  let res = await fetch(url, options);

  // If token expired
  if (res.status === 401 && refresh) {
    // Refresh access token
    const tokenRes = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh }),
    });

    if (!tokenRes.ok) {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      window.location.href = "/login"; // redirect to login
      return;
    }

    const tokenData = await tokenRes.json();
    access = tokenData.access;
    localStorage.setItem("access", access);

    // Retry original request
    headers["Authorization"] = `Bearer ${access}`;
    res = await fetch(url, options);
  }

  return res;
};
