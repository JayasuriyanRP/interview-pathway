
/**
 * Service to interact with Google Drive API
 */

declare global {
  interface Window {
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
}

interface GoogleDriveConfig {
  apiKey: string;
  clientId: string;
  folderId: string;
}

interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
  webContentLink?: string;
}

/**
 * Initializes the Google Drive API
 * @returns Promise that resolves when API is initialized
 */
export const initGoogleDriveApi = async (): Promise<boolean> => {
  try {
    const configString = localStorage.getItem('google_drive_config');
    if (!configString) {
      console.warn('Google Drive configuration not found');
      return false;
    }

    // Load the Google Drive API script
    if (!window.gapi) {
      await new Promise<void>((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://apis.google.com/js/api.js';
        script.onload = () => resolve();
        document.body.appendChild(script);
      });
    }

    // Initialize the Google API client
    await new Promise<void>((resolve) => {
      window.gapi.load('client:auth2', resolve);
    });

    const config: GoogleDriveConfig = JSON.parse(configString);
    
    await window.gapi.client.init({
      apiKey: config.apiKey,
      clientId: config.clientId,
      discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
      scope: 'https://www.googleapis.com/auth/drive.readonly',
    });

    return true;
  } catch (error) {
    console.error('Error initializing Google Drive API:', error);
    return false;
  }
};

/**
 * Lists all JSON files in the configured folder
 */
export const listJsonFiles = async (): Promise<DriveFile[]> => {
  try {
    const configString = localStorage.getItem('google_drive_config');
    if (!configString) {
      console.warn('Google Drive configuration not found');
      return [];
    }
    
    const config: GoogleDriveConfig = JSON.parse(configString);
    
    const response = await window.gapi.client.drive.files.list({
      q: `'${config.folderId}' in parents and mimeType='application/json'`,
      fields: 'files(id, name, mimeType, webContentLink)',
    });
    
    return response.result.files || [];
  } catch (error) {
    console.error('Error listing files from Google Drive:', error);
    return [];
  }
};

/**
 * Fetches a file from Google Drive by ID
 */
export const fetchFileById = async (fileId: string): Promise<any> => {
  try {
    const response = await window.gapi.client.drive.files.get({
      fileId,
      alt: 'media',
    });
    
    return JSON.parse(response.body);
  } catch (error) {
    console.error(`Error fetching file ${fileId} from Google Drive:`, error);
    return null;
  }
};

/**
 * Fetches a file from Google Drive by name
 */
export const fetchFileByName = async (fileName: string): Promise<any> => {
  try {
    const configString = localStorage.getItem('google_drive_config');
    if (!configString) {
      console.warn('Google Drive configuration not found');
      return null;
    }
    
    const config: GoogleDriveConfig = JSON.parse(configString);
    
    // Search for the file by name in the configured folder
    const response = await window.gapi.client.drive.files.list({
      q: `'${config.folderId}' in parents and name='${fileName}' and mimeType='application/json'`,
      fields: 'files(id)',
    });
    
    if (response.result.files && response.result.files.length > 0) {
      const fileId = response.result.files[0].id;
      return fetchFileById(fileId);
    }
    
    return null;
  } catch (error) {
    console.error(`Error fetching file ${fileName} from Google Drive:`, error);
    return null;
  }
};
