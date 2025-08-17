import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, FileText } from 'lucide-react';
import { authors, articles } from '../data/mockData';

export const AuthorPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  const author = authors.find(a => a.id === id);
  const authorArticles = articles.filter(a => a.authorId === id);
  
  if (!author) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Back button */}
        <Link 
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mb-6"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Article
        </Link>

        {/* Author Profile Card */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Author Avatar */}
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-4xl shadow-lg">
              {author.avatar || author.name.charAt(0)}
            </div>
            
            {/* Author Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {author.name}
              </h1>
              
              <p className="text-gray-700 leading-relaxed mb-6 max-w-2xl">
                {author.bio}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-8">
                <div className="flex items-center text-gray-600">
                  <Calendar size={20} className="mr-2" />
                  <span>Joined {author.joinDate}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FileText size={20} className="mr-2" />
                  <span>{author.articlesCount} Articles</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Author's Articles */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Articles</h2>
          
          <div className="space-y-6">
            {authorArticles.map((article) => (
              <Link
                key={article.id}
                to={`/article/${article.id}`}
                className="block p-6 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-200">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-3 line-clamp-2">
                  {article.content.split('\n')[0].substring(0, 150)}...
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{article.date}</span>
                  <div className="flex items-center space-x-4">
                    <span>👍 {article.reactions.like}%</span>
                    <span>❤️ {article.reactions.love}%</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {authorArticles.length === 0 && (
            <div className="text-center py-12">
              <FileText size={48} className="mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600">No articles found for this author.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};