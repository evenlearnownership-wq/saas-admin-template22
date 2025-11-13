export default {
  async fetch(request, env) {
    if (request.method === "POST") {
      const { username, password } = await request.json();

      const ADMIN_USER = env.ADMIN_USER;
      const ADMIN_PASS = env.ADMIN_PASS;

      if (username === ADMIN_USER && password === ADMIN_PASS) {
        return new Response(JSON.stringify({
          success: true,
          message: "Login successful!"
        }), { headers: { "Content-Type": "application/json" } });
      }

      return new Response(JSON.stringify({
        success: false,
        message: "Invalid username or password"
      }), { headers: { "Content-Type": "application/json" } });
    }

    return new Response("Not Found", { status: 404 });
  }
};

