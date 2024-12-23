import React from 'react';
import { Newspaper } from 'lucide-react';
import { Article, Category } from '../types';
import { CategoryFilter } from '../components/CategoryFilter';
import { NewsFeed } from '../components/NewsFeed';

interface NewsFeedPageProps {
  articles: Article[];
  selectedCategories: Category[];
  onCategoryChange: (category: Category) => void;
}

export function NewsFeedPage({ 
  articles, 
  selectedCategories, 
  onCategoryChange 
}: NewsFeedPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <Newspaper className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-2xl font-bold text-gray-900">News Feed Organizer</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CategoryFilter
          selectedCategories={selectedCategories}
          onCategoryChange={onCategoryChange}
        />
        <NewsFeed articles={articles} />
      </main>
    </div>
  );
}