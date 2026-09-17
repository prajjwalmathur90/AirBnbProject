import { AsyncLocalStorage } from "async_hooks";

type AsyncLocalStorageType = {
  correlationid: string;
};

export const asyncLocalStorage = new AsyncLocalStorage<AsyncLocalStorageType>();

export const getCorrelationId = () => {
  const asyncStore = asyncLocalStorage.getStore();

  return (
    asyncStore?.correlationid || "unknown-error-happend-while-generating-id"
  );
};
