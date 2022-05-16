addEventListener("fetch", (event) => {
  const response = new Response("Hello! - shinshin86", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
