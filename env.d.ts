declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NEXT_PUBLIC_CMS_API_URL: string;
        NEXT_PUBLIC_CMS_API_TOKEN: string;
      }
    }
  }
  
  export {};
  