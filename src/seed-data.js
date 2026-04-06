export const seedUsers = [
  {
    id: "user-1",
    name: "Avery",
    avatarUrl: "",
    status: "Available"
  },
  {
    id: "user-2",
    name: "Jordan",
    avatarUrl: "",
    status: "Reviewing designs"
  },
  {
    id: "user-3",
    name: "Sam",
    avatarUrl: "",
    status: "Writing docs"
  }
];

export const seedConversations = [
  {
    id: "dm-1",
    type: "direct",
    name: "Jordan",
    memberIds: ["user-1", "user-2"]
  },
  {
    id: "channel-1",
    type: "channel",
    name: "# launch-plan",
    memberIds: ["user-1", "user-2", "user-3"]
  }
];

export const seedMessages = [
  {
    id: "message-1",
    conversationId: "dm-1",
    senderId: "user-2",
    body: "Morning. I dropped the first wireframes in the folder.",
    createdAt: "2026-04-05T16:05:00.000Z"
  },
  {
    id: "message-2",
    conversationId: "dm-1",
    senderId: "user-1",
    body: "Perfect. I will pair that with the navigation notes.",
    createdAt: "2026-04-05T16:07:00.000Z"
  },
  {
    id: "message-3",
    conversationId: "channel-1",
    senderId: "user-3",
    body: "I can take the rollout checklist once the shell is ready.",
    createdAt: "2026-04-05T16:10:00.000Z"
  }
];
