// 评论和评分相关的类型定义

export interface Review {
  id: string;
  roomId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number; // 1-5 星级评分
  comment: string;
  createdAt: Date;
  updatedAt?: Date;
}

export interface RoomRating {
  roomId: string;
  averageRating: number; // 平均评分
  totalReviews: number; // 总评论数
  ratingDistribution: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
}

export interface ReviewFormData {
  rating: number;
  comment: string;
}
