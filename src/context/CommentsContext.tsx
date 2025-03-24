'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Comment = {
  name: string;
  email: string;
  comment: string;
};

type CommentsStore = {
  [episodeId: string]: Comment[];
};

type CommentsContextType = {
  getComments: (episodeId: string) => Comment[];
  addComment: (episodeId: string, comment: Comment) => void;
};

const CommentsContext = createContext<CommentsContextType | undefined>(undefined);

export function CommentsProvider({ children }: { children: ReactNode }) {
  const [commentsByEpisode, setCommentsByEpisode] = useState<CommentsStore>({});

  const getComments = (episodeId: string) => {
    return commentsByEpisode[episodeId] || [];
  };

  const addComment = (episodeId: string, comment: Comment) => {
    setCommentsByEpisode((prev) => ({
      ...prev,
      [episodeId]: [...(prev[episodeId] || []), comment],
    }));
  };

  return (
    <CommentsContext.Provider value={{ getComments, addComment }}>
      {children}
    </CommentsContext.Provider>
  );
}

export function useComments() {
  const context = useContext(CommentsContext);
  if (!context) throw new Error('useComments must be used within a CommentsProvider');
  return context;
}
