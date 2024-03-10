declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NEXT_PUBLIC_CMS_API_URL: string;
        NEXT_PUBLIC_CMS_API_TOKEN: string;
        NEXT_PUBLIC_CONTENTFUL_SPACE_ID: string;
        NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN: string;
        NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN: string;
      }
    }
  }
  
  export {};
  