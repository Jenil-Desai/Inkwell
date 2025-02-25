/// <reference types="react-scripts" />

declare global {
  interface Window {
    process: {
      env: {
        NODE_ENV: string;
        [key: string]: string | undefined;
      };
    };
  }
}
