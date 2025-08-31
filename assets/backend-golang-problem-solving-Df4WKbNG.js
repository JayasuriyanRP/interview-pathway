const t=[{id:"cps-1",question:"Implement a thread-safe in-memory key-value store in Golang.",answer:[{type:"text",content:"A thread-safe key-value store requires synchronization mechanisms like `sync.Mutex` or `sync.RWMutex` to prevent race conditions when multiple goroutines access the store."},{type:"text",content:"**Example Implementation:**"},{type:"code",language:"go",content:`package main

import (
	"sync"
	"fmt"
)

type Store struct {
	data map[string]string
	mu   sync.RWMutex
}

func NewStore() *Store {
	return &Store{data: make(map[string]string)}
}

func (s *Store) Set(key, value string) {
	s.mu.Lock()
	s.data[key] = value
	s.mu.Unlock()
}

func (s *Store) Get(key string) (string, bool) {
	s.mu.RLock()
	defer s.mu.RUnlock()
	val, exists := s.data[key]
	return val, exists
}

func main() {
	store := NewStore()
	store.Set("foo", "bar")
	val, _ := store.Get("foo")
	fmt.Println("Value:", val)
}`}]},{id:"cps-2",question:"Write a rate limiter using Golang middleware.",answer:[{type:"text",content:"Rate limiting ensures API requests are restricted to a fixed rate. We use `golang.org/x/time/rate` package to implement a token bucket rate limiter in middleware."},{type:"text",content:"**Example Implementation:**"},{type:"code",language:"go",content:`package main

import (
	"fmt"
	"net/http"
	"time"
	"golang.org/x/time/rate"
)

type rateLimiter struct {
	limiter *rate.Limiter
}

func (rl *rateLimiter) middleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if !rl.limiter.Allow() {
			http.Error(w, "Too Many Requests", http.StatusTooManyRequests)
			return
		}
		next.ServeHTTP(w, r)
	})
}

func main() {
	rl := &rateLimiter{limiter: rate.NewLimiter(1, 5)} // 1 request per second, burst of 5

	http.Handle("/", rl.middleware(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintln(w, "Hello, World!")
	})))

	http.ListenAndServe(":8080", nil)
}`}]},{id:"cps-3",question:"Implement a concurrent worker pool in Golang.",answer:[{type:"text",content:"A worker pool limits the number of concurrent workers processing tasks. It distributes tasks among workers using channels."},{type:"text",content:"**Example Implementation:**"},{type:"code",language:"go",content:`package main

import (
	"fmt"
	"sync"
	"time"
)

func worker(id int, jobs <-chan int, wg *sync.WaitGroup) {
	defer wg.Done()
	for job := range jobs {
		fmt.Printf("Worker %d processing job %d\\n", id, job)
		time.Sleep(time.Second)
	}
}

func main() {
	jobs := make(chan int, 5)
	var wg sync.WaitGroup

	for i := 1; i <= 3; i++ {
		wg.Add(1)
		go worker(i, jobs, &wg)
	}

	for j := 1; j <= 5; j++ {
		jobs <- j
	}
	close(jobs)

	wg.Wait()
}`}]},{id:"cps-4",question:"Implement a REST API in Golang that connects to a PostgreSQL database.",answer:[{type:"text",content:"This implementation uses `gorm` for database interactions and `gin` for REST API handling."},{type:"text",content:"**Example Implementation:**"},{type:"code",language:"go",content:`package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type User struct {
	ID   uint   \`json:"id"\`
	Name string \`json:"name"\`
}

var db *gorm.DB

func initDB() {
	dsn := "host=localhost user=postgres password=yourpassword dbname=testdb port=5432 sslmode=disable"
	var err error
	db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("Failed to connect to database")
	}
	db.AutoMigrate(&User{})
}

func getUsers(c *gin.Context) {
	var users []User
	db.Find(&users)
	c.JSON(200, users)
}

func main() {
	initDB()
	r := gin.Default()
	r.GET("/users", getUsers)
	r.Run(":8080")
}`}]},{id:"cps-5",question:"Design a task scheduler in Golang where tasks run at specific intervals.",answer:[{type:"text",content:"A task scheduler can be implemented using `time.Ticker` or `cron` library for periodic execution."},{type:"text",content:"**Example Implementation (Using time.Ticker):**"},{type:"code",language:"go",content:`package main

import (
	"fmt"
	"time"
)

func task() {
	fmt.Println("Task executed at", time.Now())
}

func main() {
	ticker := time.NewTicker(5 * time.Second)
	defer ticker.Stop()

	for range ticker.C {
		task()
	}
}`}]}];export{t as default};
