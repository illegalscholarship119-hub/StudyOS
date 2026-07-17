export type Lesson = {
  id: number;
  slug: string;
  title: string;
  duration: string;
  completed: boolean;
};

export type Topic = {
  id: number;
  slug: string;
  subject: string;
  title: string;
  notes: number;
  progress: number;
  color: string;
  description: string;
  lessons: Lesson[];
};

export const topics: Topic[] = [
  {
    id: 1,
    slug: "stacks",
    subject: "DSA",
    title: "Stacks",
    notes: 12,
    progress: 85,
    color: "bg-teal-100 text-teal-700",
    description:
      "Learn stack operations, implementation, applications and interview problems.",
    lessons: [
      {
        id: 1,
        slug: "introduction-to-stack",
        title: "Introduction to Stack",
        duration: "10 min",
        completed: true,
      },
      {
        id: 2,
        slug: "push-pop",
        title: "Push & Pop",
        duration: "15 min",
        completed: true,
      },
      {
        id: 3,
        slug: "applications",
        title: "Applications",
        duration: "20 min",
        completed: false,
      },
    ],
  },

  {
    id: 2,
    slug: "queues",
    subject: "DSA",
    title: "Queues",
    notes: 8,
    progress: 65,
    color: "bg-orange-100 text-orange-700",
    description:
      "Understand FIFO, circular queue, deque and priority queue.",
    lessons: [
      {
        id: 1,
        slug: "queue-basics",
        title: "Queue Basics",
        duration: "12 min",
        completed: true,
      },
      {
        id: 2,
        slug: "circular-queue",
        title: "Circular Queue",
        duration: "18 min",
        completed: false,
      },
    ],
  },

  {
    id: 3,
    slug: "linked-list",
    subject: "DSA",
    title: "Linked List",
    notes: 15,
    progress: 40,
    color: "bg-purple-100 text-purple-700",
    description:
      "Single, double and circular linked list with coding examples.",
    lessons: [
      {
        id: 1,
        slug: "node-structure",
        title: "Node Structure",
        duration: "8 min",
        completed: true,
      },
      {
        id: 2,
        slug: "insertion",
        title: "Insertion",
        duration: "20 min",
        completed: false,
      },
    ],
  },

  {
    id: 4,
    slug: "trees",
    subject: "DSA",
    title: "Trees",
    notes: 10,
    progress: 25,
    color: "bg-yellow-100 text-yellow-700",
    description:
      "Binary Tree, BST, Traversals and interview questions.",
    lessons: [
      {
        id: 1,
        slug: "tree-basics",
        title: "Tree Basics",
        duration: "15 min",
        completed: false,
      },
    ],
  },

  {
    id: 5,
    slug: "oop",
    subject: "Java",
    title: "OOP",
    notes: 14,
    progress: 60,
    color: "bg-pink-100 text-pink-700",
    description:
      "Classes, Objects, Encapsulation, Inheritance, Polymorphism and Abstraction.",
    lessons: [
      {
        id: 1,
        slug: "class-object",
        title: "Class & Object",
        duration: "14 min",
        completed: true,
      },
      {
        id: 2,
        slug: "inheritance",
        title: "Inheritance",
        duration: "16 min",
        completed: false,
      },
    ],
  },

  {
    id: 6,
    slug: "vpc-peering",
    subject: "AWS",
    title: "VPC Peering",
    notes: 20,
    progress: 80,
    color: "bg-indigo-100 text-indigo-700",
    description:
      "Complete guide to AWS VPC Peering, routing and security groups.",
    lessons: [
      {
        id: 1,
        slug: "create-vpc",
        title: "Create VPC",
        duration: "18 min",
        completed: true,
      },
      {
        id: 2,
        slug: "peering-connection",
        title: "Peering Connection",
        duration: "22 min",
        completed: true,
      },
      {
        id: 3,
        slug: "route-tables",
        title: "Route Tables",
        duration: "15 min",
        completed: false,
      },
    ],
  },
];