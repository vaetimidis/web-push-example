/// <reference types="vite/client" />

interface ImportMetaEnv {
  NUXT_PUBLIC_STAND: string
  NODE_ENV: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
