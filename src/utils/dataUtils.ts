/**
 * Utility functions for data loading and manipulation
 */

/**
 * Dynamically imports a JSON file from a nested path
 * @param filePath Path to the JSON file
 * @returns Promise containing the JSON data
 */
export const loadJsonFromPath = async (filePath: string) => {
  try {
    const module = await import(`../data/${filePath}`);
    return module.default;
  } catch (error) {
    console.error(`Error loading JSON from path ${filePath}:`, error);
    return null;
  }
};

/**
 * Builds a path to a JSON file based on topic and subtopic
 * @param topic Main topic/path ID
 * @param subtopic Optional subtopic/path ID
 * @returns Constructed file path
 */
export const buildJsonPath = (topic: string, subtopic?: string) => {
  // Define potential folder mappings for common topics
  const folderMappings: Record<string, string> = {
    'frontend': 'html',
    'backend': 'c-sharp',
    'algorithm': 'data-structures-and-algorithms',
    'golang': 'golang',
    'react': 'react',
    'javascript': 'js',
    'typescript': 'ts',
    'c-sharp': 'c-sharp',
    'csharp': 'c-sharp',
    'dotnet': 'c-sharp',
    'job-role': 'job-roles',
    'career': 'job-roles',
  };

  // Determine base folder name from topic
  let folder = '';
  for (const [key, value] of Object.entries(folderMappings)) {
    if (topic.toLowerCase().includes(key)) {
      folder = value;
      break;
    }
  }

  // Fall back to the topic ID if no mapping is found
  if (!folder) {
    folder = topic;
  }

  // Build the path
  let path = `questions/${folder}/${subtopic || topic}.json`;
  
  return path;
};

/**
 * Cleans and prepares data for display
 * @param data Raw data object
 * @returns Cleaned data object
 */
export const cleanData = (data: any) => {
  if (!data) return null;
  
  // Remove any circular references
  return JSON.parse(JSON.stringify(data));
};

/**
 * Converts response data to match the expected format
 * @param data Input data that might need conversion
 * @returns Data in the expected format
 */
export const normalizeQuestionData = (data: any) => {
  if (!data) return [];
  
  // If data is already an array, return it
  if (Array.isArray(data)) return data;
  
  // If data has questions property that is an array, return that
  if (data.questions && Array.isArray(data.questions)) return data.questions;
  
  // Otherwise convert to array with a single item
  return [data];
};
