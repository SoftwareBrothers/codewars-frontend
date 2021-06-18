/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const apiPaths = {
  user: {
    getDetails: {
      path: (userId:number): string => {
        return `/users/${userId}`;
      },
    },
  },
  board: {
    getDetails: {
      path: "/board/"
    },
  }
};