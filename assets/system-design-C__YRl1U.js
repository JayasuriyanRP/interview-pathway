const e=[{id:"sd-1",question:"Design a URL shortening service like bit.ly.",answer:[{type:"text",content:"Designing a URL shortening service involves several components and considerations:"},{type:"text",content:"**Functional Requirements:**"},{type:"list",items:["URL shortening: Convert a long URL to a short URL","URL redirection: Redirect short URL to original URL","User accounts: Optional for analytics and URL management","Analytics: Track click rates, geographic data, etc.","Custom short URLs: Allow users to choose their custom short URLs"]},{type:"text",content:"**Non-Functional Requirements:**"},{type:"list",items:["High availability: System should be always available","Minimal latency: Redirection should happen with minimal delay","Scalability: System should handle high traffic","Security: Prevent abuse and malicious URLs"]},{type:"text",content:"**API Design:**"},{type:"list",items:["`POST /api/shorten` - Create a new short URL","`GET /{shortCode}` - Redirect to original URL","`GET /api/analytics/{shortCode}` - Get analytics for a short URL"]},{type:"text",content:"**Data Model:**"},{type:"code",language:"text",content:`URL {
  id: string (primary key)
  shortCode: string (indexed)
  originalUrl: string
  userId: string (optional)
  createdAt: timestamp
  expiresAt: timestamp (optional)
}

Click {
  id: string (primary key)
  urlId: string (foreign key)
  timestamp: timestamp
  userAgent: string
  ipAddress: string
  referrer: string
}`},{type:"text",content:"**URL Shortening Algorithm:**"},{type:"list",items:["Hash-based approach: Hash the long URL and take first few characters","Counter-based approach: Use an auto-incrementing counter and convert to base62","Random generation: Generate random strings and check for collisions"]},{type:"text",content:"**System Architecture:**"},{type:"list",items:["Load Balancer: Distribute traffic across application servers","Application Servers: Handle API requests and URL redirection","Database: Store URLs and analytics data","Cache: Store frequently accessed URLs for faster redirection"]},{type:"text",content:"**Database Choice:**"},{type:"list",items:["Relational DB (PostgreSQL/MySQL): For structured data and transactions","NoSQL DB (DynamoDB/Cassandra): For scalability and performance"]},{type:"text",content:"**Caching Strategy:**"},{type:"list",items:["Use Redis/Memcached to cache URL mappings","LRU (Least Recently Used) eviction policy"]},{type:"text",content:"**Scaling Considerations:**"},{type:"list",items:["Database sharding: Partition URLs based on shortCode hash","Caching: Implement multiple cache layers","CDN: Use for handling static content and reducing latency","Horizontal scaling: Add more application servers as needed"]},{type:"text",content:"**Security:**"},{type:"list",items:["Rate limiting: Prevent abuse","URL validation: Check for malicious URLs","User authentication: For managing URLs","HTTPS: Secure all communications"]},{type:"text",content:"This design balances simplicity, performance, and scalability while addressing the key requirements of a URL shortening service."}]}];export{e as default};
