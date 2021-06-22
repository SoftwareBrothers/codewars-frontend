/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const apiPaths = {
  user: {
    getDetails: {
      path: (userId:number): string => {
        return `/users/${userId}`;
      },
    },
    getStats: {
      path: (userId:number): string => {
        return `/users/${userId}/statistics/current`;
      },
    },
    getChallenges: {
      path: (userId:number): string => {
        return `/users/${userId}/challenges`;
      },
    },
  },
  board: {
    getDetails: {
      path: (language:string, dateFrom?:string, dateTo?:string): string => {
        return `/board/?language=${language.toUpperCase()}` +
          `${dateFrom && dateFrom !== undefined ? '&dateFrom=' + dateFrom : ''}` +
          `${dateTo && dateTo !== undefined ? '&dateTo=' + dateTo : ''}`;
      }
    },
  }
};