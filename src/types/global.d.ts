export {};

declare global {
  interface Window {
    dataLayer?: Record<string, any>[];
    UC_UI: {
      isInitialized(): boolean;
      acceptAllConsents(): void;
      rejectAllConsents(): void;
      showFirstLayer(): void;
      hideFirstLayer(): void;
      getServicesBaseInfo(): Array<{
        id: string;
        consent: {
          status: boolean;
        };
      }>;
    };
  }
}
