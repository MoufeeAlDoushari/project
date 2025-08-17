import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, Flag, Heart, ThumbsUp, Frown, Angry } from 'lucide-react';
import { Comment, ReactionType } from '../types';

interface CommentSectionProps {
  comments: Comment[];
  commentCount: number;
}

export const CommentSection: React.FC<CommentSectionProps> = ({ comments, commentCount }) => {
  const [newComment, setNewComment] = useState('');
  const [selectedReactions, setSelectedReactions] = useState<Record<number, ReactionType | null>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      // Handle comment submission
      console.log('New comment:', newComment);
      setNewComment('');
    }
  };

  const handleCommentReaction = (commentId: number, reaction: ReactionType) => {
    setSelectedReactions(prev => ({
      ...prev,
      [commentId]: prev[commentId] === reaction ? null : reaction
    }));
  };

  const getReactionIcon = (type: ReactionType) => {
    switch (type) {
      case 'like': return ThumbsUp;
      case 'love': return Heart;
      case 'angry': return Angry;
      case 'sad': return Frown;
    }
  };

  const getReactionColor = (type: ReactionType, isSelected: boolean) => {
    const colors = {
      like: isSelected ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600',
      love: isSelected ? 'text-red-600' : 'text-gray-500 hover:text-red-600',
      angry: isSelected ? 'text-orange-600' : 'text-gray-500 hover:text-orange-600',
      sad: isSelected ? 'text-gray-700' : 'text-gray-500 hover:text-gray-700',
    };
    return colors[type];
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">{commentCount} Comments</h3>
      
      {/* Comment form */}
      <form onSubmit={handleSubmit} className="relative">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your comment..."
          className="w-full p-4 border border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          rows={3}
        />
        <button
          type="submit"
          className="absolute bottom-3 right-3 p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-full transition-colors duration-200"
        >
          <Send size={18} />
        </button>
      </form>

      {/* Comments list */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-blue-50 p-4 rounded-lg">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {comment.avatar || comment.author.charAt(0)}
                </div>
                <div>
                  <Link 
                    to={`/author/${comment.authorId}`}
                    className="font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    {comment.author}
                  </Link>
                  <p className="text-xs text-gray-600">{comment.date}</p>
                </div>
              </div>
              <button className="text-gray-500 hover:text-red-600 transition-colors duration-200 p-1">
                <Flag size={16} />
                <span className="ml-1 text-xs">Report</span>
              </button>
            </div>
            <p className="text-gray-700 mb-3">{comment.content}</p>
            
            {/* Comment reactions */}
            <div className="flex items-center space-x-4 mb-3">
              {(['like', 'love', 'angry', 'sad'] as ReactionType[]).map((reactionType) => {
                const Icon = getReactionIcon(reactionType);
                const isSelected = selectedReactions[comment.id] === reactionType;
                return (
                  <button
                    key={reactionType}
                    onClick={() => handleCommentReaction(comment.id, reactionType)}
                    className={`flex items-center space-x-1 transition-colors duration-200 ${getReactionColor(reactionType, isSelected)}`}
                  >
                    <Icon size={16} />
                    <span className="text-xs">{comment.reactions[reactionType]}%</span>
                  </button>
                );
              })}
            </div>
            
            <div className="flex items-center space-x-4 text-sm">
              <button className="text-blue-600 hover:text-blue-700 transition-colors duration-200">
                Reply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};