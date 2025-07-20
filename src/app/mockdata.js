

export const tribes = [
  { id: 1, name: "Quantum Computing", icon: "/resources/quantum-icon.png", description: "Explore the future of computing with quantum mechanics." },
  { id: 2, name: "Artificial Intelligence", icon: "/resources/ai-icon.png", description: "Discuss advancements in AI and machine learning." },
  { id: 3, name: "Music", icon: "/resources/music-icon.png", description: "Share your passion for music and discover new genres." },
  { id: 4, name: "Space Exploration", icon: "/resources/space-icon.png", description: "Dive into the mysteries of the cosmos." },
  { id: 5, name: "Photography", icon: "/resources/photo-icon.png", description: "Capture and share moments through the lens." }
];

export const posts = [
  { id: 1, tribeId: 1, author: "Alice Smith", content: "Quantum entanglement is mind-blowing! Anyone working on quantum algorithms?", date: "2025-07-19", likes: 23, comments: [{ id: 1, author: "Bob Wilson", content: "Totally agree! I'm experimenting with Qiskit.", date: "2025-07-19" }], media: null },
  { id: 2, tribeId: 1, author: "Bob Wilson", content: "Just attended a quantum computing seminar. Excited for the future!", date: "2025-07-18", likes: 15, comments: [], media: null },
  ...Array.from({ length: 28 }, (_, i) => ({
    id: i + 3,
    tribeId: 1,
    author: `User${i + 1}`,
    content: `Exploring quantum topic ${i + 1} in computing!`,
    date: `2025-07-${17 - (i % 10)}`,
    likes: Math.floor(Math.random() * 50),
    comments: [],
    media: null
  })),
  { id: 31, tribeId: 2, author: "Charlie Brown", content: "AI is transforming industries! What's your favorite application?", date: "2025-07-19", likes: 30, comments: [{ id: 2, author: "Diana Prince", content: "I love AI in healthcare!", date: "2025-07-19" }], media: null },
  { id: 32, tribeId: 2, author: "Diana Prince", content: "Training my first neural network. Any tips?", date: "2025-07-18", likes: 12, comments: [], media: null },
  ...Array.from({ length: 28 }, (_, i) => ({
    id: i + 33,
    tribeId: 2,
    author: `User${i + 31}`,
    content: `AI discussion ${i + 1}: machine learning insights.`,
    date: `2025-07-${17 - (i % 10)}`,
    likes: Math.floor(Math.random() * 50),
    comments: [],
    media: null
  })),
  { id: 61, tribeId: 3, author: "Eve Adams", content: "Just discovered a new indie band! Anyone into lo-fi?", date: "2025-07-19", likes: 18, comments: [{ id: 3, author: "Frank Green", content: "Love lo-fi! Check out Chillhop.", date: "2025-07-19" }], media: null },
  { id: 62, tribeId: 3, author: "Frank Green", content: "What's the best music festival you've attended?", date: "2025-07-18", likes: 10, comments: [], media: null },
  ...Array.from({ length: 18 }, (_, i) => ({
    id: i + 63,
    tribeId: 3,
    author: `User${i + 61}`,
    content: `Music topic ${i + 1}: favorite genres and artists.`,
    date: `2025-07-${17 - (i % 10)}`,
    likes: Math.floor(Math.random() * 50),
    comments: [],
    media: null
  })),
  { id: 81, tribeId: 4, author: "Grace Lee", content: "Mars rover updates are exciting! What's next for space?", date: "2025-07-19", likes: 25, comments: [{ id: 4, author: "Henry Black", content: "Hoping for a manned mission soon!", date: "2025-07-19" }], media: null },
  { id: 82, tribeId: 4, author: "Henry Black", content: "Dreaming of a trip to the moon. Anyone else?", date: "2025-07-18", likes: 8, comments: [], media: null },
  ...Array.from({ length: 8 }, (_, i) => ({
    id: i + 83,
    tribeId: 4,
    author: `User${i + 81}`,
    content: `Space topic ${i + 1}: exploring the universe.`,
    date: `2025-07-${17 - (i % 10)}`,
    likes: Math.floor(Math.random() * 50),
    comments: [],
    media: null
  })),
  { id: 91, tribeId: 5, author: "Isabella White", content: "Tips for low-light photography?", date: "2025-07-19", likes: 20, comments: [{ id: 5, author: "James Blue", content: "Use a tripod and high ISO!", date: "2025-07-19" }], media: null },
  { id: 92, tribeId: 5, author: "James Blue", content: "Just got a new DSLR! Excited to start shooting.", date: "2025-07-18", likes: 14, comments: [], media: null },
  ...Array.from({ length: 8 }, (_, i) => ({
    id: i + 93,
    tribeId: 5,
    author: `User${i + 91}`,
    content: `Photography tip ${i + 1}: capturing the moment.`,
    date: `2025-07-${17 - (i % 10)}`,
    likes: Math.floor(Math.random() * 50),
    comments: [],
    media: null
  }))
];