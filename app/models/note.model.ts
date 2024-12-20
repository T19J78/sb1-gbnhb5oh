export interface Note {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  attachments?: string[]; // Paths to attached files
}

export interface Category {
  id: string;
  name: string;
  color: string;
}