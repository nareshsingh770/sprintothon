export interface ContactFormData {
    fullname: string;
    email: string;
    mobile: string;
    message: string;
  }
  
  export interface Blog {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    image?: string;
  }
  
  export interface PortfolioItem {
    id: string;
    title: string;
    screenshot: string;
    description: string;
    technologies: string[];
    liveUrl?: string;
  }
  
  export interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
    bio: string;
  }