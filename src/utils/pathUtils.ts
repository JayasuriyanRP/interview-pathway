
interface PathItem {
  id: string;
  title: string;
}

interface Path {
  id: string;
  title: string;
  description?: string;
  level?: string;
  subpaths?: Path[];
}

export const buildBreadcrumbPath = (
  paths: Path[],
  pathSegments: string[]
): PathItem[] => {
  const breadcrumbPath: PathItem[] = [];
  let currentPaths = paths;
  
  for (const segment of pathSegments) {
    const foundPath = currentPaths.find(p => p.id === segment);
    if (foundPath) {
      breadcrumbPath.push({ id: foundPath.id, title: foundPath.title });
      currentPaths = foundPath.subpaths || [];
    } else {
      break;
    }
  }
  
  return breadcrumbPath;
};

export const findNestedPath = (
  paths: Path[],
  pathSegments: string[]
): Path | null => {
  let currentPaths = paths;
  let targetPath: Path | null = null;
  
  for (const segment of pathSegments) {
    const foundPath = currentPaths.find(p => p.id === segment);
    if (foundPath) {
      targetPath = foundPath;
      currentPaths = foundPath.subpaths || [];
    } else {
      return null;
    }
  }
  
  return targetPath;
};

export const getPathSegments = (params: Record<string, string | undefined>): string[] => {
  const segments: string[] = [];
  
  if (params.pathId) segments.push(params.pathId);
  if (params.parentId) segments.push(params.parentId);
  if (params.childId) segments.push(params.childId);
  if (params.grandchildId) segments.push(params.grandchildId);
  if (params.greatGrandchildId) segments.push(params.greatGrandchildId);
  
  return segments.filter(Boolean);
};

export const buildPathUrl = (pathSegments: string[]): string => {
  return `/path/${pathSegments.join('/')}`;
};
