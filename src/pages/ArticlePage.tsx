import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { AuthorCard } from '../components/AuthorCard';
import { EngagementBar } from '../components/EngagementBar';
import { CommentSection } from '../components/CommentSection';
import { Pagination } from '../components/Pagination';
import { articles, authors, comments } from '../data/mockData';
import { ReactionType } from '../types';




export const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedReaction, setSelectedReaction] = useState<ReactionType | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  
  const article = articles.find(a => a.id === id);
  const author = article ? authors.find(a => a.id === article.authorId) : null;
  
  if (!article || !author) {
    return <Navigate to="/" replace />;
  }

  const breadcrumbItems = ['Section', 'Sub-section'];
  const totalPages = 10; // Mock total pages for pagination

  const handleReactionClick = (reaction: ReactionType) => {
    setSelectedReaction(selectedReaction === reaction ? null : reaction);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // In a real app, this would fetch new data
    console.log('Navigating to page:', page);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Breadcrumb items={breadcrumbItems} />
        
        <article className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>
          
          <p className="text-gray-700 leading-relaxed mb-8">
            {article.content.split('\n')[0]}
          </p>

          {/* Hero Image Section */}
          <div className="bg-red-900 h-64 md:h-80 rounded-lg mb-8 flex items-center justify-center">
            <div className="text-red-100 text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-red-800 flex items-center justify-center">
                <div className="w-12 h-12 bg-red-700 rounded"></div>
              </div>
              <p className="text-sm opacity-75">Hero Image Placeholder</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum
          </p>

          <AuthorCard 
            name={author.name} 
            date={article.date} 
            authorId={author.id}
          />

          <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4 mb-8">
            {article.content.split('\n').slice(1).map((paragraph, index) => (
              paragraph.trim() && (
                <p key={index}>
                  {paragraph.trim()}
                </p>
              )
            ))}
          </div>

          <EngagementBar 
            data={article.reactions} 
            selectedReaction={selectedReaction}
            onReactionClick={handleReactionClick}
          />
          
          <CommentSection comments={comments} commentCount={20} />
        </article>

        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};