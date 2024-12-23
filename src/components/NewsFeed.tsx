import React from 'react';
import { Article } from '../types';
import { ArticleCard } from './ArticleCard';

interface NewsFeedProps {
  articles: Article[];
}

export function NewsFeed({ articles }: NewsFeedProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}