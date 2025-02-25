/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_REACT_APP_BACKEND_URL: string;
  // ...other env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
