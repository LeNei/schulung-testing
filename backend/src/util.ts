type User = {
  id: number;
  name: string;
};

const users: User[] = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];
export function getUsers(): Promise<User[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 1000); // Simulate a delay
  });
}

export function getUserById(id: number): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((user) => user.id === id);
      if (!user) {
        reject(new Error(`User with id ${id} not found`));
        return;
      }
      resolve(user);
    }, 1000); // Simulate a delay
  });
}
