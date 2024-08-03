export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type Comment = {
  id: string;
  comment: string;
  date?: Date;
  rating: number;
  user?: User;
}
