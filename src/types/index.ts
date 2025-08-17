export interface Author {
  id: string;
  name: string;
  avatar?: string;
  bio?: string;
  joinDate: string;
  articlesCount: number;
}

export interface Article {
  id: string;
  title: string;
  content: string;
  authorId: string;
  date: string;
  reactions: {
    like: number;
    love: number;
    angry: number;
    sad: number;
  };
}

export interface Comment {
  id: number;
  author: string;
  authorId: string;
  date: string;
  content: string;
  avatar?: string;
  reactions: {
    like: number;
    love: number;
    angry: number;
    sad: number;
  };
}

export type ReactionType = 'like' | 'love' | 'angry' | 'sad';