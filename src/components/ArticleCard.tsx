import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-blue-600">{article.source}</span>
          <span className="text-sm text-gray-500">
            {new Date(article.publishedAt).toLocaleDateString()}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
        <p className="text-gray-600 mb-4">{article.description}</p>
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            {article.category}
          </span>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            Read more <ExternalLink className="ml-1 w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}