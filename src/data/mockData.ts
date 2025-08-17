import { Author, Article, Comment } from '../types';

export const authors: Author[] = [
  {
    id: '1',
    name: 'Author Name',
    bio: 'Passionate writer and technology enthusiast with over 5 years of experience in creating engaging content about web development, design, and digital innovation.',
    joinDate: '7 January 2024',
    articlesCount: 24
  },
  {
    id: '2',
    name: 'Jane Smith',
    bio: 'Senior content strategist specializing in user experience and digital marketing.',
    joinDate: '15 March 2023',
    articlesCount: 18
  }
];

export const articles: Article[] = [
  {
    id: '1',
    title: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
    content: `Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum 
    Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor

    Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum
    
    Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum 
    Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum 
    Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum 
    Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum 
    Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum 
    Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum 
    Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor`,
    authorId: '1',
    date: '7 January 2024',
    reactions: {
      like: 20,
      love: 60,
      angry: 5,
      sad: 5
    }
  },
  {
    id: '2',
    title: 'Understanding Modern Web Development',
    content: 'A comprehensive guide to modern web development practices and technologies.',
    authorId: '2',
    date: '15 February 2024',
    reactions: {
      like: 35,
      love: 45,
      angry: 10,
      sad: 10
    }
  },
  {
    id: '3',
    title: 'The Future of User Experience Design',
    content: 'Exploring the latest trends and innovations in UX design.',
    authorId: '1',
    date: '22 February 2024',
    reactions: {
      like: 40,
      love: 30,
      angry: 15,
      sad: 15
    }
  }
];

export const comments: Comment[] = [
  {
    id: 1,
    author: 'Author Name',
    authorId: '1',
    date: '10 February 2024',
    content: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
    reactions: {
      like: 15,
      love: 25,
      angry: 5,
      sad: 5
    }
  },
  {
    id: 2,
    author: 'Jane Smith',
    authorId: '2',
    date: '10 February 2024',
    content: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
    reactions: {
      like: 20,
      love: 30,
      angry: 0,
      sad: 0
    }
  }
];