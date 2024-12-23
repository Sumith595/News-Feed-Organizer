import React, { useState } from 'react';
import { Article, Category } from './types';
import { LandingPage } from './pages/LandingPage';
import { NewsFeedPage } from './pages/NewsFeedPage';
import { sampleArticles } from './data/sampleNews';

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

  const handleCategoryChange = (category: Category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredArticles = selectedCategories.length
    ? sampleArticles.filter((article) => selectedCategories.includes(article.category))
    : sampleArticles;

  if (!isStarted) {
    return <LandingPage onGetStarted={() => setIsStarted(true)} />;
  }

  return (
    <NewsFeedPage
      articles={filteredArticles}
      selectedCategories={selectedCategories}
      onCategoryChange={handleCategoryChange}
    />
  );
}

export default App;