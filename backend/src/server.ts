import { api } from "./app";

const PORT = process.env.PORT || 8080;
api.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
