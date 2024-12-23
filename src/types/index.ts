export interface Article {
  id: string;
  title: string;
  description: string;
  category: Category;
  source: string;
  url: string;
  imageUrl: string;
  publishedAt: string;
}

export type Category = 'technology' | 'politics' | 'sports' | 'entertainment' | 'business';

export interface UserPreferences {
  categories: Category[];
  sources: string[];
}