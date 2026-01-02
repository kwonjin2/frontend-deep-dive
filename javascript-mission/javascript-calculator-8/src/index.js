import App from "./App.js";

try {
  const app = new App();
  await app.run();
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
