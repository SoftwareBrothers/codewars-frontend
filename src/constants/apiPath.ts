/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const apiPaths = {
  profile: {
    getDetails: {
      path: (id:number): string => {
        return `/profiles/${id}/`;
      },
    },
  }
};