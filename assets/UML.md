# interview-pathway UML Diagrams

## Project Structure (Component Hierarchy)

```mermaid
classDiagram
    App --> ThemeProvider
    App --> TooltipProvider
    App --> AuthProvider
    App --> BrowserRouter
    BrowserRouter --> Routes
    Routes --> Index
    Routes --> SubpathsList
    Routes --> Topic
    Routes --> NotFound
    Routes --> NestedPathExample
    Routes --> AskAI
    Routes --> AIConverter
    SubpathsList --> PathHeader
    SubpathsList --> FilterSearch
    SubpathsList --> PathCard
    SubpathsList --> NestedPathCard
    Topic --> Header
    Topic --> QuestionCard
    Topic --> QuestionFilter
    Topic --> ScrollToTopButton
    NestedPathCard --> NestedPathCardHeader
    NestedPathCard --> NestedPathCardContent
    NestedPathCard --> NestedPathCardFooter
```

## Application Design (Data Flow)

```mermaid
sequenceDiagram
    participant User
    participant App
    participant Router
    participant SubpathsList
    participant Topic
    participant useData
    participant usePath
    participant usePathQuestions

    User->>App: Loads application
    App->>Router: Initializes routes
    Router->>SubpathsList: Navigates to subpath
    SubpathsList->>useData: Fetches all paths
    SubpathsList->>usePath: Fetches current path
    SubpathsList->>PathCard/NestedPathCard: Renders subpaths
    Router->>Topic: Navigates to topic
    Topic->>usePath: Fetches topic path
    Topic->>usePathQuestions: Fetches questions
    Topic->>QuestionCard: Renders questions/answers
```

---

For more detailed diagrams, extend the Mermaid code blocks above with additional components, hooks, or data sources as needed.
