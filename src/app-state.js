export function createInitialState() {
  return {
    currentUser: {
      id: "user-1",
      name: "Avery",
      status: "Available"
    },
    users: [
      {
        id: "user-1",
        name: "Avery",
        status: "Available"
      },
      {
        id: "user-2",
        name: "Jordan",
        status: "Reviewing designs"
      },
      {
        id: "user-3",
        name: "Sam",
        status: "Writing docs"
      }
    ]
  };
}
