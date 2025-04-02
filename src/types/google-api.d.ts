
interface GapiWindow extends Window {
  gapi: {
    load: (api: string, callback: () => void) => void;
    client: {
      init: (args: {
        apiKey: string;
        clientId: string;
        discoveryDocs: string[];
        scope: string;
      }) => Promise<void>;
      drive: {
        files: {
          list: (args: {
            q?: string;
            fields?: string;
            pageSize?: number;
            pageToken?: string;
          }) => Promise<{
            result: {
              files?: Array<{
                id: string;
                name: string;
                mimeType: string;
                webContentLink?: string;
              }>;
              nextPageToken?: string;
            };
          }>;
          get: (args: {
            fileId: string;
            alt?: string;
          }) => Promise<{
            body: string;
          }>;
        };
      };
    };
    auth2: {
      getAuthInstance: () => {
        isSignedIn: {
          get: () => boolean;
        };
        signIn: () => Promise<any>;
        signOut: () => Promise<any>;
      };
    };
  };
}

declare let window: GapiWindow;
