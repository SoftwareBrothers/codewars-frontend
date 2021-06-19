/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const apiPaths = {
  user: {
    getDetails: {
      path: (userId:number): string => {
        return `/users/${userId}`;
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
      path: (language:string): string => {
        return `/board/?language=${language.toUpperCase()}`;
      }
    },
  }
};