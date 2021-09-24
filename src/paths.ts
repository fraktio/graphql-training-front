import { useRouter } from "next/router";

export type HrefOnly = {
  href: string;
};

export type HrefAndAs = {
  href: string;
  as: string;
};

export const useParams = <T>(): T => {
  const router = useRouter();

  return router.query as unknown as T;
};

export const getIndexPath = (): HrefOnly => ({
  href: "/",
});

export const getPersonsPath = (): HrefOnly => ({
  href: "/persons",
});

export const getDirectCachePath = (): HrefOnly => ({
  href: "/direct-cache",
});

export const getUploadPath = (): HrefOnly => ({
  href: "/upload",
});

export const isServerSide = () => typeof window === "undefined";
