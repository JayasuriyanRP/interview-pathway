export interface PathItem {
  id: string;
  title: string;
  description: string;
  level: string;
  icon?: string;
  subpaths?: PathItem[];
}

export interface BreadcrumbItem {
  id: string;
  title: string;
  url: string;
}

export class PathNavigator {
  private static pathsData: PathItem[] = [];

  static initialize(paths: PathItem[]) {
    this.pathsData = paths;
  }

  // Find a path by ID in the nested structure
  static findPath(pathId: string, paths: PathItem[] = this.pathsData): PathItem | null {
    for (const path of paths) {
      if (path.id === pathId) {
        return path;
      }
      if (path.subpaths) {
        const found = this.findPath(pathId, path.subpaths);
        if (found) return found;
      }
    }
    return null;
  }

  // Get the full path hierarchy for a given pathId
  static getPathHierarchy(pathId: string, paths: PathItem[] = this.pathsData, currentPath: PathItem[] = []): PathItem[] {
    for (const path of paths) {
      const newPath = [...currentPath, path];
      
      if (path.id === pathId) {
        return newPath;
      }
      
      if (path.subpaths) {
        const found = this.getPathHierarchy(pathId, path.subpaths, newPath);
        if (found.length > 0) return found;
      }
    }
    return [];
  }

  // Generate breadcrumbs for a path
  static generateBreadcrumbs(pathId: string): BreadcrumbItem[] {
    const hierarchy = this.getPathHierarchy(pathId);
    const breadcrumbs: BreadcrumbItem[] = [
      { id: 'home', title: 'Home', url: '/' }
    ];

    let currentUrl = '';
    for (const pathItem of hierarchy) {
      currentUrl += `/${pathItem.id}`;
      breadcrumbs.push({
        id: pathItem.id,
        title: pathItem.title,
        url: `/path${currentUrl}`
      });
    }

    return breadcrumbs;
  }

  // Generate nested URL for a path
  static generateNestedUrl(pathId: string): string {
    const hierarchy = this.getPathHierarchy(pathId);
    const pathSegments = hierarchy.map(path => path.id);
    return `/path/${pathSegments.join('/')}`;
  }

  // Parse nested URL to get the target pathId
  static parseNestedUrl(urlSegments: string[]): string {
    return urlSegments[urlSegments.length - 1];
  }

  // Check if a path has questions (no subpaths)
  static hasQuestions(pathId: string): boolean {
    const path = this.findPath(pathId);
    return path ? !path.subpaths || path.subpaths.length === 0 : false;
  }

  // Get all parent paths for a given path
  static getParentPaths(pathId: string): PathItem[] {
    const hierarchy = this.getPathHierarchy(pathId);
    return hierarchy.slice(0, -1); // All except the last one (which is the path itself)
  }

  // Check if path is a root path (no parents)
  static isRootPath(pathId: string): boolean {
    const hierarchy = this.getPathHierarchy(pathId);
    return hierarchy.length === 1;
  }

  // Get depth level of a path
  static getPathDepth(pathId: string): number {
    const hierarchy = this.getPathHierarchy(pathId);
    return hierarchy.length - 1;
  }
}