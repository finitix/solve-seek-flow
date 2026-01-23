// Mock data for demo purposes

import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Trainer {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  skills: string[];
  rating: number;
  reviews: number;
  solvedTickets: number;
  experience: string;
  bio: string;
  verified: boolean;
  hourlyRate: number;
}

export interface Ticket {
  id: string;
  title: string;
  description: string;
  category: string;
  urgency: "normal" | "high" | "critical";
  status: "open" | "pending" | "in-progress" | "solved";
  createdAt: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  trainerId?: string;
  trainerName?: string;
  trainerAvatar?: string;
  solution?: string;
  likes: number;
  comments: number;
}

export interface Message {
  id: string;
  ticketId: string;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: string;
  isTrainer: boolean;
}

export const trainers: Trainer[] = [
  {
    id: "t1",
    name: "Alex Thompson",
    email: "alex@techsolve.com",
    avatar: trainer1,
    skills: ["Software Installation", "Network Issues", "Cloud Services"],
    rating: 4.9,
    reviews: 156,
    solvedTickets: 234,
    experience: "5 years",
    bio: "Expert in software troubleshooting and network configuration. Microsoft certified professional.",
    verified: true,
    hourlyRate: 45,
  },
  {
    id: "t2",
    name: "Sarah Chen",
    email: "sarah@techsolve.com",
    avatar: trainer2,
    skills: ["Security", "Database Support", "Email Configuration"],
    rating: 4.8,
    reviews: 89,
    solvedTickets: 178,
    experience: "4 years",
    bio: "Cybersecurity specialist with expertise in data protection and email server configuration.",
    verified: true,
    hourlyRate: 55,
  },
  {
    id: "t3",
    name: "Mike Johnson",
    email: "mike@techsolve.com",
    avatar: trainer3,
    skills: ["Hardware Problems", "Network Issues", "Software Installation"],
    rating: 4.7,
    reviews: 203,
    solvedTickets: 312,
    experience: "7 years",
    bio: "Hardware expert with 7 years of experience in troubleshooting and repairs.",
    verified: true,
    hourlyRate: 40,
  },
  {
    id: "t4",
    name: "Emily Davis",
    email: "emily@techsolve.com",
    avatar: trainer2,
    skills: ["Cloud Services", "Database Support", "Software Installation"],
    rating: 4.9,
    reviews: 124,
    solvedTickets: 189,
    experience: "3 years",
    bio: "AWS and Azure certified cloud specialist. Expert in database management.",
    verified: true,
    hourlyRate: 60,
  },
  {
    id: "t5",
    name: "David Wilson",
    email: "david@techsolve.com",
    avatar: trainer1,
    skills: ["Email Configuration", "Network Issues", "Security"],
    rating: 4.6,
    reviews: 67,
    solvedTickets: 98,
    experience: "2 years",
    bio: "IT support specialist focusing on email systems and network security.",
    verified: true,
    hourlyRate: 35,
  },
];

export const solvedTickets: Ticket[] = [
  {
    id: "TCK001",
    title: "Fixed VPN connection dropping every 10 minutes",
    description: "My VPN was disconnecting frequently. The trainer helped me configure the network adapter settings and update the VPN client.",
    category: "Network Issues",
    urgency: "high",
    status: "solved",
    createdAt: "2 days ago",
    userId: "u1",
    userName: "John Doe",
    trainerId: "t1",
    trainerName: "Alex Thompson",
    trainerAvatar: trainer1,
    solution: "Updated network adapter drivers and reconfigured VPN client settings. Also disabled IPv6 which was causing conflicts.",
    likes: 24,
    comments: 5,
  },
  {
    id: "TCK002",
    title: "Resolved Adobe Creative Suite installation error 1603",
    description: "Couldn't install Adobe CC on Windows 11. Error code 1603 kept appearing. Trainer identified conflicting software and fixed it.",
    category: "Software Installation",
    urgency: "normal",
    status: "solved",
    createdAt: "3 days ago",
    userId: "u2",
    userName: "Jane Smith",
    trainerId: "t3",
    trainerName: "Mike Johnson",
    trainerAvatar: trainer3,
    solution: "Removed conflicting antivirus temporarily, cleared Adobe temp files, and ran installer with admin privileges.",
    likes: 42,
    comments: 8,
  },
  {
    id: "TCK003",
    title: "Configured email server for small business",
    description: "Needed help setting up email for my team. The trainer set up everything perfectly with proper security.",
    category: "Email Configuration",
    urgency: "high",
    status: "solved",
    createdAt: "5 days ago",
    userId: "u3",
    userName: "Robert Chen",
    trainerId: "t2",
    trainerName: "Sarah Chen",
    trainerAvatar: trainer2,
    solution: "Set up Microsoft 365 with custom domain, configured SPF, DKIM, and DMARC records for email security.",
    likes: 31,
    comments: 12,
  },
  {
    id: "TCK004",
    title: "Recovered data from failing hard drive",
    description: "My laptop hard drive was making clicking sounds. Trainer helped recover all my important files before it completely failed.",
    category: "Hardware Problems",
    urgency: "critical",
    status: "solved",
    createdAt: "1 week ago",
    userId: "u4",
    userName: "Lisa Park",
    trainerId: "t3",
    trainerName: "Mike Johnson",
    trainerAvatar: trainer3,
    solution: "Used data recovery software to clone the failing drive. Recovered 98% of data and set up automatic cloud backup.",
    likes: 56,
    comments: 15,
  },
  {
    id: "TCK005",
    title: "Set up AWS cloud infrastructure for startup",
    description: "Needed help migrating our app to AWS. Trainer configured everything including load balancing and auto-scaling.",
    category: "Cloud Services",
    urgency: "high",
    status: "solved",
    createdAt: "1 week ago",
    userId: "u5",
    userName: "Mark Williams",
    trainerId: "t4",
    trainerName: "Emily Davis",
    trainerAvatar: trainer2,
    solution: "Configured EC2 instances, RDS database, S3 storage, and CloudFront CDN. Set up CI/CD pipeline with CodePipeline.",
    likes: 67,
    comments: 21,
  },
];

export const categories = [
  "Software Installation",
  "Network Issues",
  "Hardware Problems",
  "Security",
  "Email Configuration",
  "Cloud Services",
  "Database Support",
  "Other",
];

export const getRecommendedTrainers = (category: string): Trainer[] => {
  return trainers.filter((t) => t.skills.includes(category)).slice(0, 3);
};

export const getTrainerById = (id: string): Trainer | undefined => {
  return trainers.find((t) => t.id === id);
};
