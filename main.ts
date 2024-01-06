import { App } from "@tinyhttp/app";

const app = new App();

app.get("/", (_request, response) => {
  return response.json({
    message: 'hello world'
  })
});

app.listen(3000, () => console.log(`Started on http://localhost:3000`));
