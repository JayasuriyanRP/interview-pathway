# URL Patterns for Shareable Learning Paths

This document describes the URL structure for sharing learning paths in the Interview Pathway application.

## Base URL Structure

All learning paths use the following base structure:
```
https://your-domain.com/interview-pathway/path/{nested-path-segments}
```

## URL Examples

### Root Paths
- Backend Development: `/interview-pathway/path/backend`
- Frontend Development: `/interview-pathway/path/frontend`
- Data Structures: `/interview-pathway/path/data-structures-and-algorithms`

### Nested SubPaths (Level 2)
- C# Backend: `/interview-pathway/path/backend/backend-csharp`
- React Frontend: `/interview-pathway/path/frontend/react`
- Binary Search: `/interview-pathway/path/data-structures-and-algorithms/binary-search`

### Deep Nested Paths (Level 3+)
- C# OOP Questions: `/interview-pathway/path/backend/backend-csharp/backend-csharp-oops`
- React Hooks: `/interview-pathway/path/frontend/react/react-hooks`
- Advanced Algorithms: `/interview-pathway/path/data-structures-and-algorithms/algorithms-csharp`

## URL Features

### 1. **Direct Navigation**
- Any URL can be shared and accessed directly
- Users will be navigated to the exact path/subpath
- Invalid paths show a helpful 404 page

### 2. **SEO-Friendly**
- URLs are human-readable
- Each page has unique title and meta description
- Breadcrumb navigation reflects URL structure

### 3. **Social Sharing**
- Open Graph meta tags for social media
- Proper title, description, and URL for sharing
- Share button with native sharing API support

### 4. **URL Encoding**
- Special characters in path IDs are properly encoded
- URLs are safe for sharing across platforms

## How URLs are Generated

The system uses the `PathNavigator` utility class to:

1. **Generate URLs**: `PathNavigator.generateNestedUrl(pathId)`
2. **Parse URLs**: `PathNavigator.parseNestedUrl(urlSegments)`
3. **Create Breadcrumbs**: `PathNavigator.generateBreadcrumbs(pathId)`
4. **Generate Metadata**: `PathNavigator.generateMetaData(pathId)`

## Usage Examples

### Sharing a Specific Learning Path
```javascript
// Get shareable URL for a path
const shareableUrl = PathNavigator.getShareableUrl('backend-csharp-oops');
// Result: https://your-domain.com/interview-pathway/path/backend/backend-csharp/backend-csharp-oops
```

### Copying Current URL
Users can use the "Copy URL" button on any learning path to get the direct link.

### Social Sharing
The "Share" button provides:
- Native device sharing (mobile/desktop)
- Fallback to clipboard copy
- Proper metadata for social platforms

## Benefits for Users

1. **Easy Sharing**: Share exact learning paths with colleagues or students
2. **Bookmarking**: Bookmark specific topics for quick access
3. **Progress Tracking**: Direct links preserve learning context
4. **SEO Benefits**: Each path is indexable by search engines
5. **Deep Linking**: Skip navigation, go directly to content