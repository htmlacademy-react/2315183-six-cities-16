import { Comment } from '../types/comments.ts';

export const comments: Comment[] = [
  {
    id: '72c7a320-49a1-4d6a-8706-52e375d06947',
    comment: 'Home is amazing. It\'s like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius',
    date: new Date('2024-06-30T21:00:00.536Z'),
    rating: 3,
    user: {
      name: 'Mollie',
      avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/1.jpg',
      isPro: false
    }
  },
  {
    id: '17b64013-2b7c-4060-a882-be5dbace2e80',
    comment: 'The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.',
    date: new Date('2024-06-28T21:00:00.536Z'),
    rating: 3,
    user: {
      name: 'Emely',
      avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/5.jpg',
      isPro: false
    }
  },
  {
    id: '17b64013-2b7c-4060-a882-be5dbace2e80',
    comment: 'The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.',
    date: new Date('2024-06-25T21:00:00.536Z'),
    rating: 3,
    user: {
      name: 'Mollie',
      avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/5.jpg',
      isPro: false
    }
  }
];
