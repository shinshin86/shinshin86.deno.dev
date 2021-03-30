addEventListener("fetch", (event) => {
  const response = new Response("Hello World! - shinshin86", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
