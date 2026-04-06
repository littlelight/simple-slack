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
    ],
    conversations: [
      {
        id: "conversation-1",
        name: "Jordan"
      },
      {
        id: "conversation-2",
        name: "# launch-plan"
      }
    ],
    messages: [
      {
        id: "message-1",
        conversationId: "conversation-1",
        body: "Design review later today"
      },
      {
        id: "message-2",
        conversationId: "conversation-2",
        body: "Planning notes live here"
      }
    ]
  };
}
