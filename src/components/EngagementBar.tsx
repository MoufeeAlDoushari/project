import React from 'react';
import { Heart, ThumbsUp, Frown, Angry } from 'lucide-react';
import { ReactionType } from '../types';

interface EngagementData {
  like: number;
  love: number;
  angry: number;
  sad: number;
}

interface EngagementBarProps {
  data: EngagementData;
  selectedReaction?: ReactionType | null;
  onReactionClick: (reaction: ReactionType) => void;
}

export const EngagementBar: React.FC<EngagementBarProps> = ({ data, selectedReaction, onReactionClick }) => {
  const reactions = [
    { 
      key: 'like' as ReactionType, 
      label: 'Like', 
      value: data.like, 
      icon: ThumbsUp, 
      color: 'bg-blue-100 hover:bg-blue-200 text-blue-700',
      activeColor: 'bg-blue-600 text-white'
    },
    { 
      key: 'love' as ReactionType, 
      label: 'Love', 
      value: data.love, 
      icon: Heart, 
      color: 'bg-red-100 hover:bg-red-200 text-red-700',
      activeColor: 'bg-red-600 text-white'
    },
    { 
      key: 'angry' as ReactionType, 
      label: 'Angry', 
      value: data.angry, 
      icon: Angry, 
      color: 'bg-orange-100 hover:bg-orange-200 text-orange-700',
      activeColor: 'bg-orange-600 text-white'
    },
    { 
      key: 'sad' as ReactionType, 
      label: 'Sad', 
      value: data.sad, 
      icon: Frown, 
      color: 'bg-gray-100 hover:bg-gray-200 text-gray-700',
      activeColor: 'bg-gray-600 text-white'
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 my-8">
      {reactions.map((reaction) => {
        const Icon = reaction.icon;
        const isSelected = selectedReaction === reaction.key;
        return (
          <button
            key={reaction.label}
            onClick={() => onReactionClick(reaction.key)}
            className={`${isSelected ? reaction.activeColor : reaction.color} p-4 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95`}
          >
            <div className="flex flex-col items-center space-y-2">
              <Icon size={24} />
              <span className="font-semibold text-sm">{reaction.label}</span>
              <span className="text-xs font-bold">{reaction.value}%</span>
            </div>
          </button>
        );
      })}
    </div>
  );
};