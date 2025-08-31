const n=[{id:"80fa40e6-5bb6-4033-bd30-8b9424073f2a",question:"How do you reverse a string in Go?",answer:`\`\`\`go
// Reversing a string in Go

package main

import (
    "fmt"
)

func reverseString(s string) string {
    // Convert string to rune slice to handle Unicode characters
    runes := []rune(s)
    n := len(runes)
    for i := 0; i < n/2; i++ {
        // Swap runes
        runes[i], runes[n-1-i] = runes[n-1-i], runes[i]
    }
    return string(runes)
}

func main() {
    input := "hello 世界"
    reversed := reverseString(input)
    fmt.Println(reversed) // Output: 界世 olleh
}
\`\`\`

**Explanation:**

- Strings in Go are immutable and are sequences of bytes, which may not represent Unicode characters correctly if reversed byte-wise.
- To handle Unicode, convert the string to a slice of runes (\`[]rune\`), reverse the slice, and then convert it back to a string.
- The function \`reverseString\` swaps runes from both ends towards the center.
- The example demonstrates reversing a string containing both ASCII and Unicode characters.`,level:"Beginner",created_at:"2025-04-21T11:58:47.998599Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"251e7fb1-8a07-4e05-be47-de2bbeebdbfe",question:"How do you check if a given string is a palindrome in Go?",answer:`\`\`\`markdown
### How do you check if a given string is a palindrome in Go?

A palindrome is a string that reads the same backward as forward (e.g., "madam", "racecar"). To check if a string is a palindrome in Go, you can compare characters from the start and end of the string, moving towards the center.

Here's a simple Go function to check if a string is a palindrome:

\`\`\`go
package main

import (
    "fmt"
    "strings"
)

func isPalindrome(s string) bool {
    // Optional: Normalize the string (e.g., lowercase, remove spaces)
    s = strings.ToLower(s)
    left, right := 0, len(s)-1

    for left < right {
        if s[left] != s[right] {
            return false
        }
        left++
        right--
    }
    return true
}

func main() {
    fmt.Println(isPalindrome("madam"))      // true
    fmt.Println(isPalindrome("racecar"))    // true
    fmt.Println(isPalindrome("hello"))      // false
}
\`\`\`

**Explanation:**
- The function compares the characters at the start (\`left\`) and end (\`right\`) of the string.
- If any pair doesn't match, it returns \`false\`.
- If all pairs match, it returns \`true\`.
- The example also shows how to use the function.

You can further enhance this function to ignore spaces, punctuation, or handle Unicode characters as needed.
\`\`\`
`,level:"Beginner",created_at:"2025-04-21T11:58:47.998623Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"c9d75e6a-cfd0-47c7-9258-019e66caedf7",question:"How do you find the maximum element in an integer slice in Go?",answer:`\`\`\`markdown
## How do you find the maximum element in an integer slice in Go?

To find the maximum element in an integer slice in Go, you can iterate through the slice and keep track of the largest value found so far. Here's a simple example:

\`\`\`go
package main

import (
    "fmt"
)

func findMax(nums []int) int {
    if len(nums) == 0 {
        panic("slice is empty")
    }
    max := nums[0]
    for _, num := range nums {
        if num > max {
            max = num
        }
    }
    return max
}

func main() {
    numbers := []int{3, 7, 2, 9, 4}
    fmt.Println("Maximum element:", findMax(numbers))
}
\`\`\`

**Output:**
\`\`\`
Maximum element: 9
\`\`\`

**Explanation:**  
- The function \`findMax\` initializes \`max\` with the first element of the slice.
- It then iterates through each element, updating \`max\` if a larger value is found.
- If the slice is empty, it panics to avoid undefined behavior.
\`\`\`
`,level:"Beginner",created_at:"2025-04-21T11:58:47.998636Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"b09b4358-479a-4d2e-96e8-d99fe6e4fe51",question:"How do you implement binary search on a sorted slice in Go?",answer:`\`\`\`go
// BinarySearch performs binary search on a sorted slice of integers.
// It returns the index of the target if found, or -1 if not found.
func BinarySearch(nums []int, target int) int {
    left, right := 0, len(nums)-1

    for left <= right {
        mid := left + (right-left)/2
        if nums[mid] == target {
            return mid
        } else if nums[mid] < target {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
}

// Example usage:
// nums := []int{1, 3, 5, 7, 9, 11}
// index := BinarySearch(nums, 7) // index will be 3
\`\`\`

**Explanation:**
- The function takes a sorted slice of integers and a target value.
- It uses two pointers (\`left\` and \`right\`) to keep track of the search range.
- It repeatedly checks the middle element:
  - If the middle element equals the target, it returns the index.
  - If the middle element is less than the target, it searches the right half.
  - If the middle element is greater than the target, it searches the left half.
- If the target is not found, it returns -1.`,level:"Beginner",created_at:"2025-04-21T11:58:47.998648Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"5423e827-ab25-4b98-b3dc-2f3c2d56ceb5",question:"How do you remove duplicates from a slice of integers in Go?",answer:`\`\`\`go
// RemoveDuplicates removes duplicate integers from a slice.
func RemoveDuplicates(nums []int) []int {
    seen := make(map[int]bool)
    result := []int{}
    for _, num := range nums {
        if !seen[num] {
            seen[num] = true
            result = append(result, num)
        }
    }
    return result
}

// Example usage
func main() {
    nums := []int{1, 2, 2, 3, 4, 4, 5}
    uniqueNums := RemoveDuplicates(nums)
    fmt.Println(uniqueNums) // Output: [1 2 3 4 5]
}
\`\`\`

**Explanation:**
- We use a map to keep track of numbers we've already seen.
- As we iterate through the slice, we add each unique number to the result slice.
- This preserves the order of the first occurrence of each number.`,level:"Beginner",created_at:"2025-04-21T11:58:47.998662Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"a4bdcc59-eb2f-471d-a4d0-d850f3f98de3",question:"How do you find the factorial of a number using recursion in Go?",answer:`\`\`\`go
// Factorial using recursion in Go

package main

import (
	"fmt"
)

// factorial calculates the factorial of n using recursion
func factorial(n int) int {
	if n == 0 {
		return 1
	}
	return n * factorial(n-1)
}

func main() {
	num := 5
	result := factorial(num)
	fmt.Printf("Factorial of %d is %d\\n", num, result)
}
\`\`\`

**Explanation:**
- The factorial of a number n (written as n!) is the product of all positive integers less than or equal to n.
- The base case is when n is 0, where factorial(0) = 1.
- The recursive case multiplies n by the factorial of (n-1).
- In the example above, factorial(5) returns 120.`,level:"Beginner",created_at:"2025-04-21T11:58:47.998670Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"49423684-3beb-4f31-ad8c-5df62422132f",question:"How do you merge two sorted slices into a single sorted slice in Go?",answer:`\`\`\`go
// Merges two sorted slices into a single sorted slice in Go.
func mergeSortedSlices(a, b []int) []int {
    result := make([]int, 0, len(a)+len(b))
    i, j := 0, 0

    // Compare elements from both slices and append the smaller one.
    for i < len(a) && j < len(b) {
        if a[i] < b[j] {
            result = append(result, a[i])
            i++
        } else {
            result = append(result, b[j])
            j++
        }
    }

    // Append any remaining elements from a or b.
    result = append(result, a[i:]...)
    result = append(result, b[j:]...)

    return result
}

// Example usage
func main() {
    a := []int{1, 3, 5, 7}
    b := []int{2, 4, 6, 8}
    merged := mergeSortedSlices(a, b)
    fmt.Println(merged) // Output: [1 2 3 4 5 6 7 8]
}
\`\`\`

**Explanation:**
- The function \`mergeSortedSlices\` takes two sorted slices \`a\` and \`b\`.
- It uses two pointers (\`i\` and \`j\`) to iterate through both slices.
- It compares the current elements and appends the smaller one to the result.
- After one slice is exhausted, it appends the remaining elements from the other slice.
- The result is a single sorted slice containing all elements from both input slices.`,level:"Beginner",created_at:"2025-04-21T11:58:47.998680Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"681a41d0-711c-433c-846e-0f8e7fcd9171",question:"How do you implement bubble sort in Go?",answer:`\`\`\`go
// BubbleSort sorts a slice of integers in ascending order using the bubble sort algorithm.
func BubbleSort(arr []int) {
    n := len(arr)
    for i := 0; i < n-1; i++ {
        // Last i elements are already in place
        for j := 0; j < n-i-1; j++ {
            if arr[j] > arr[j+1] {
                // Swap arr[j] and arr[j+1]
                arr[j], arr[j+1] = arr[j+1], arr[j]
            }
        }
    }
}

func main() {
    nums := []int{5, 2, 9, 1, 5, 6}
    BubbleSort(nums)
    fmt.Println(nums) // Output: [1 2 5 5 6 9]
}
\`\`\`

**Explanation:**
- The function iterates over the slice multiple times.
- In each pass, it compares adjacent elements and swaps them if they are in the wrong order.
- After each pass, the largest unsorted element "bubbles up" to its correct position.
- This process repeats until the slice is sorted.`,level:"Beginner",created_at:"2025-04-21T11:58:47.998693Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"dec87548-cc61-4fe0-8bb9-9349c042b258",question:"How do you count the number of vowels in a string in Go?",answer:`\`\`\`go
// CountVowels returns the number of vowels in the given string.
func CountVowels(s string) int {
    count := 0
    vowels := "aeiouAEIOU"
    for _, ch := range s {
        if strings.ContainsRune(vowels, ch) {
            count++
        }
    }
    return count
}
\`\`\`

**Example usage:**
\`\`\`go
import (
    "fmt"
    "strings"
)

func main() {
    str := "Hello, World!"
    fmt.Println(CountVowels(str)) // Output: 3
}
\`\`\`

**Explanation:**
- The function iterates through each character in the string.
- It checks if the character is a vowel (either uppercase or lowercase).
- If it is, it increments the count.
- Finally, it returns the total count of vowels.`,level:"Beginner",created_at:"2025-04-21T11:58:47.998705Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"40d1f15c-4eb0-40f7-86d1-6131980ce429",question:"How do you check if two strings are anagrams in Go?",answer:`\`\`\`markdown
### How do you check if two strings are anagrams in Go?

To check if two strings are anagrams in Go, you can compare the frequency of each character in both strings. If both strings have the same length and the same character counts, they are anagrams.

Here's a simple way to do it:

\`\`\`go
package main

import (
    "fmt"
)

func areAnagrams(s1, s2 string) bool {
    if len(s1) != len(s2) {
        return false
    }

    count := make(map[rune]int)
    for _, ch := range s1 {
        count[ch]++
    }
    for _, ch := range s2 {
        count[ch]--
        if count[ch] < 0 {
            return false
        }
    }
    return true
}

func main() {
    fmt.Println(areAnagrams("listen", "silent")) // true
    fmt.Println(areAnagrams("hello", "world"))   // false
}
\`\`\`

**Explanation:**
- First, check if the lengths are equal.
- Use a map to count occurrences of each character in the first string.
- Decrease the count for each character in the second string.
- If any count goes below zero, the strings are not anagrams.
\`\`\`
`,level:"Beginner",created_at:"2025-04-21T11:58:47.998717Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"509c7ea7-096d-4e2f-bcc5-14df989396c8",question:"How do you find the nth Fibonacci number using iteration in Go?",answer:`\`\`\`go
// Find the nth Fibonacci number using iteration in Go
package main

import "fmt"

func fibonacci(n int) int {
    if n <= 1 {
        return n
    }
    a, b := 0, 1
    for i := 2; i <= n; i++ {
        a, b = b, a+b
    }
    return b
}

func main() {
    n := 10
    fmt.Printf("The %dth Fibonacci number is %d\\n", n, fibonacci(n))
}
\`\`\`

**Explanation:**

- The function \`fibonacci(n int) int\` calculates the nth Fibonacci number using a loop.
- It handles the base cases where \`n\` is 0 or 1.
- For \`n > 1\`, it iteratively computes the Fibonacci sequence by updating two variables, \`a\` and \`b\`.
- The result is printed in the \`main\` function for \`n = 10\`.`,level:"Beginner",created_at:"2025-04-21T11:58:47.998730Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"d1cc85f7-6022-4dad-b8bd-62604c7a6a4f",question:"How do you implement selection sort in Go?",answer:`\`\`\`go
// SelectionSort sorts an integer slice in ascending order using the selection sort algorithm.
func SelectionSort(arr []int) {
    n := len(arr)
    for i := 0; i < n-1; i++ {
        minIdx := i
        // Find the minimum element in the unsorted part
        for j := i + 1; j < n; j++ {
            if arr[j] < arr[minIdx] {
                minIdx = j
            }
        }
        // Swap the found minimum element with the first element
        arr[i], arr[minIdx] = arr[minIdx], arr[i]
    }
}

// Example usage:
func main() {
    nums := []int{64, 25, 12, 22, 11}
    SelectionSort(nums)
    fmt.Println(nums) // Output: [11 12 22 25 64]
}
\`\`\`

**Explanation:**

- The algorithm divides the slice into a sorted and an unsorted part.
- It repeatedly selects the smallest element from the unsorted part and swaps it with the first unsorted element.
- This process is repeated until the entire slice is sorted.`,level:"Beginner",created_at:"2025-04-21T11:58:47.998741Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"6ff40336-c80e-4a20-a885-172132d95de3",question:"How do you find the intersection of two slices in Go?",answer:`\`\`\`markdown
### How do you find the intersection of two slices in Go?

To find the intersection of two slices in Go (i.e., the elements that appear in both slices), you can use a map to efficiently check for common elements. Here's a simple example:

\`\`\`go
package main

import (
	"fmt"
)

func intersection(a, b []int) []int {
	set := make(map[int]struct{})
	result := []int{}

	// Add all elements from slice 'a' to the set
	for _, val := range a {
		set[val] = struct{}{}
	}

	// Check if elements in 'b' are in the set
	seen := make(map[int]struct{}) // To avoid duplicates in result
	for _, val := range b {
		if _, exists := set[val]; exists {
			if _, alreadyAdded := seen[val]; !alreadyAdded {
				result = append(result, val)
				seen[val] = struct{}{}
			}
		}
	}

	return result
}

func main() {
	a := []int{1, 2, 3, 4, 5}
	b := []int{3, 4, 5, 6, 7}
	fmt.Println("Intersection:", intersection(a, b)) // Output: [3 4 5]
}
\`\`\`

**Explanation:**
- We use a map to store elements of the first slice for fast lookup.
- We iterate over the second slice and check if each element exists in the map.
- To avoid duplicates in the result, we use another map called \`seen\`.

This approach works efficiently for slices of any size.
\`\`\`
`,level:"Beginner",created_at:"2025-04-21T11:58:47.998749Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"aa384026-55d8-48a3-8060-e8add9d7613c",question:"How do you reverse a linked list in Go?",answer:`\`\`\`markdown Certainly! Here’s an intermediate-level answer to reversing a singly linked list in Go, including a clear explanation and code example.

---

## How to Reverse a Linked List in Go

To reverse a singly linked list, you need to change the direction of the next pointers so that each node points to its previous node instead of the next one. This is typically done iteratively by maintaining three pointers: \`prev\`, \`current\`, and \`next\`.

### Step-by-Step Approach

1. Initialize \`prev\` as \`nil\` and \`current\` as the head of the list.
2. Iterate through the list:
    - Store \`current.Next\` in \`next\`.
    - Set \`current.Next\` to \`prev\`.
    - Move \`prev\` and \`current\` one step forward.
3. When \`current\` becomes \`nil\`, \`prev\` will be the new head of the reversed list.

### Go Implementation

\`\`\`go
package main

import "fmt"

// Definition for singly-linked list.
type ListNode struct {
    Val  int
    Next *ListNode
}

// Function to reverse the linked list
func reverseList(head *ListNode) *ListNode {
    var prev *ListNode
    current := head

    for current != nil {
        next := current.Next   // Store next node
        current.Next = prev    // Reverse the link
        prev = current         // Move prev forward
        current = next         // Move current forward
    }
    return prev
}

// Helper function to print the list
func printList(head *ListNode) {
    for head != nil {
        fmt.Printf("%d ", head.Val)
        head = head.Next
    }
    fmt.Println()
}

func main() {
    // Create a sample list: 1 -> 2 -> 3 -> 4 -> nil
    head := &ListNode{1, &ListNode{2, &ListNode{3, &ListNode{4, nil}}}}

    fmt.Print("Original list: ")
    printList(head)

    reversed := reverseList(head)

    fmt.Print("Reversed list: ")
    printList(reversed)
}
\`\`\`

### Output

\`\`\`
Original list: 1 2 3 4 
Reversed list: 4 3 2 1 
\`\`\`

---

**Summary:**  
To reverse a linked list in Go, iterate through the list and reverse the direction of the \`Next\` pointers. The provided code demonstrates this process with a simple example.`,level:"Intermediate",created_at:"2025-04-21T11:58:47.998762Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"9f35d263-396a-4ed0-9d9c-08109cfef89c",question:"How do you detect a cycle in a linked list in Go?",answer:`\`\`\`markdown
## How do you detect a cycle in a linked list in Go?

To detect a cycle in a linked list, you can use Floyd’s Cycle-Finding Algorithm, also known as the "tortoise and hare" algorithm. This approach uses two pointers that move at different speeds through the list:

- The slow pointer moves one step at a time.
- The fast pointer moves two steps at a time.

If there is a cycle, the fast pointer will eventually meet the slow pointer. If there is no cycle, the fast pointer will reach the end of the list.

### Example Implementation in Go

\`\`\`go
package main

import "fmt"

// Definition for singly-linked list.
type ListNode struct {
    Val  int
    Next *ListNode
}

func hasCycle(head *ListNode) bool {
    slow, fast := head, head
    for fast != nil && fast.Next != nil {
        slow = slow.Next
        fast = fast.Next.Next
        if slow == fast {
            return true
        }
    }
    return false
}

func main() {
    // Example: Create a list with a cycle
    node1 := &ListNode{Val: 1}
    node2 := &ListNode{Val: 2}
    node3 := &ListNode{Val: 3}
    node4 := &ListNode{Val: 4}
    node1.Next = node2
    node2.Next = node3
    node3.Next = node4
    node4.Next = node2 // Creates a cycle

    fmt.Println(hasCycle(node1)) // Output: true

    // Example: Create a list without a cycle
    node4.Next = nil
    fmt.Println(hasCycle(node1)) // Output: false
}
\`\`\`

### Explanation

- The \`hasCycle\` function returns \`true\` if a cycle is detected, otherwise \`false\`.
- The two pointers (\`slow\` and \`fast\`) traverse the list at different speeds.
- If they ever point to the same node, a cycle exists.
- If the fast pointer reaches the end (\`nil\`), there is no cycle.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-21T11:58:47.998775Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"84ae8d69-a1d0-4669-9eef-e0cc71fdb558",question:"How do you implement quicksort in Go?",answer:`\`\`\`markdown Certainly! Here’s how you can implement the Quicksort algorithm in Go:

\`\`\`go
package main

import (
    "fmt"
)

// quickSort sorts the slice in place using the quicksort algorithm.
func quickSort(arr []int) {
    if len(arr) < 2 {
        return
    }
    left, right := 0, len(arr)-1

    // Choose a pivot (here, the rightmost element)
    pivot := arr[right]

    // Partitioning
    for i := range arr {
        if arr[i] < pivot {
            arr[i], arr[left] = arr[left], arr[i]
            left++
        }
    }
    // Place the pivot after the last smaller element
    arr[left], arr[right] = arr[right], arr[left]

    // Recursively sort the subarrays
    quickSort(arr[:left])
    quickSort(arr[left+1:])
}

func main() {
    nums := []int{10, 7, 8, 9, 1, 5}
    quickSort(nums)
    fmt.Println("Sorted array:", nums)
}
\`\`\`

**Explanation:**

- The function \`quickSort\` sorts the input slice in place.
- It chooses the last element as the pivot.
- It partitions the array such that elements less than the pivot are on the left, and greater ones are on the right.
- It recursively sorts the subarrays before and after the pivot.
- The main function demonstrates sorting an example array.

**Output:**
\`\`\`
Sorted array: [1 5 7 8 9 10]
\`\`\`

This is a standard in-place quicksort implementation in Go.`,level:"Intermediate",created_at:"2025-04-21T11:58:47.998787Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"d0f25868-68e1-4b22-ab76-a007d21b42ea",question:"How do you implement merge sort in Go?",answer:`\`\`\`markdown Certainly! Here’s an explanation and implementation of Merge Sort in Go.

## Merge Sort in Go

**Merge Sort** is a classic divide-and-conquer sorting algorithm. It works by recursively splitting the array into halves, sorting each half, and then merging the sorted halves.

### Steps:
1. If the array has 1 or 0 elements, it's already sorted.
2. Split the array into two halves.
3. Recursively sort each half.
4. Merge the two sorted halves into a single sorted array.

### Go Implementation

\`\`\`go
package main

import (
    "fmt"
)

// merge merges two sorted slices into a single sorted slice.
func merge(left, right []int) []int {
    result := make([]int, 0, len(left)+len(right))
    i, j := 0, 0

    for i < len(left) && j < len(right) {
        if left[i] < right[j] {
            result = append(result, left[i])
            i++
        } else {
            result = append(result, right[j])
            j++
        }
    }

    // Append any remaining elements
    result = append(result, left[i:]...)
    result = append(result, right[j:]...)

    return result
}

// mergeSort recursively sorts the slice using merge sort algorithm.
func mergeSort(arr []int) []int {
    if len(arr) <= 1 {
        return arr
    }

    mid := len(arr) / 2
    left := mergeSort(arr[:mid])
    right := mergeSort(arr[mid:])

    return merge(left, right)
}

func main() {
    arr := []int{38, 27, 43, 3, 9, 82, 10}
    sorted := mergeSort(arr)
    fmt.Println("Sorted array:", sorted)
}
\`\`\`

### Output

\`\`\`
Sorted array: [3 9 10 27 38 43 82]
\`\`\`

---

**Explanation:**
- \`mergeSort\` splits the array until it cannot be split further (base case: 1 or 0 elements).
- \`merge\` combines two sorted slices into one sorted slice.
- The main function demonstrates sorting an example array.

Merge Sort has a time complexity of **O(n log n)** and is stable, making it a good choice for many sorting tasks.`,level:"Intermediate",created_at:"2025-04-21T11:58:47.998800Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"4ced4ded-36f2-4308-b3b5-3260d26430fe",question:"How do you find the lowest common ancestor in a binary tree in Go?",answer:`\`\`\`markdown
### How do you find the lowest common ancestor in a binary tree in Go?

To find the Lowest Common Ancestor (LCA) of two nodes in a binary tree, you can use a recursive approach. The idea is to traverse the tree from the root. If either of the two nodes is found, return that node. If both left and right subtrees return non-nil, the current node is the LCA.

Here's how you can implement it in Go:

\`\`\`go
package main

import "fmt"

// Definition for a binary tree node.
type TreeNode struct {
    Val   int
    Left  *TreeNode
    Right *TreeNode
}

func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
    if root == nil || root == p || root == q {
        return root
    }

    left := lowestCommonAncestor(root.Left, p, q)
    right := lowestCommonAncestor(root.Right, p, q)

    if left != nil && right != nil {
        return root
    }
    if left != nil {
        return left
    }
    return right
}

// Example usage
func main() {
    /*
            3
           / \\
          5   1
         / \\ / \\
        6  2 0  8
          / \\
         7   4
    */
    root := &TreeNode{Val: 3}
    root.Left = &TreeNode{Val: 5}
    root.Right = &TreeNode{Val: 1}
    root.Left.Left = &TreeNode{Val: 6}
    root.Left.Right = &TreeNode{Val: 2}
    root.Right.Left = &TreeNode{Val: 0}
    root.Right.Right = &TreeNode{Val: 8}
    root.Left.Right.Left = &TreeNode{Val: 7}
    root.Left.Right.Right = &TreeNode{Val: 4}

    p := root.Left        // Node with value 5
    q := root.Left.Right.Right // Node with value 4

    lca := lowestCommonAncestor(root, p, q)
    fmt.Printf("Lowest Common Ancestor: %d\\n", lca.Val) // Output: 5
}
\`\`\`

**Explanation:**
- If the current node is \`nil\`, or matches either \`p\` or \`q\`, return it.
- Recursively search left and right subtrees.
- If both calls return non-nil, the current node is the LCA.
- Otherwise, return the non-nil result.

This approach works for any binary tree (not just BSTs).
\`\`\`
`,level:"Intermediate",created_at:"2025-04-21T11:58:47.998812Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"b2fb120a-9d3a-443c-a216-be689e01f143",question:"How do you perform level order traversal of a binary tree in Go?",answer:`\`\`\`markdown
### Level Order Traversal of a Binary Tree in Go

Level order traversal (also known as Breadth-First Search, BFS) visits nodes of a binary tree level by level from left to right. This is typically implemented using a queue.

#### Implementation in Go

\`\`\`go
package main

import (
    "fmt"
)

// Definition for a binary tree node.
type TreeNode struct {
    Val   int
    Left  *TreeNode
    Right *TreeNode
}

// LevelOrder returns the level order traversal of a binary tree as a slice of slices.
func LevelOrder(root *TreeNode) [][]int {
    var result [][]int
    if root == nil {
        return result
    }

    queue := []*TreeNode{root}

    for len(queue) > 0 {
        levelSize := len(queue)
        var level []int

        for i := 0; i < levelSize; i++ {
            node := queue[0]
            queue = queue[1:]
            level = append(level, node.Val)

            if node.Left != nil {
                queue = append(queue, node.Left)
            }
            if node.Right != nil {
                queue = append(queue, node.Right)
            }
        }
        result = append(result, level)
    }

    return result
}

func main() {
    // Example tree:
    //     1
    //    / \\
    //   2   3
    //  / \\
    // 4   5
    root := &TreeNode{Val: 1}
    root.Left = &TreeNode{Val: 2}
    root.Right = &TreeNode{Val: 3}
    root.Left.Left = &TreeNode{Val: 4}
    root.Left.Right = &TreeNode{Val: 5}

    fmt.Println(LevelOrder(root)) // Output: [[1] [2 3] [4 5]]
}
\`\`\`

#### Explanation

- Use a queue to keep track of nodes at each level.
- For each level, process all nodes currently in the queue, add their values to the current level, and enqueue their children.
- Repeat until the queue is empty.

This approach ensures all nodes are visited level by level.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-21T11:58:47.998828Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"e190165d-8af4-4c55-816f-3471ef36aaa7",question:"How do you implement depth-first search (DFS) in Go?",answer:`\`\`\`markdown
## How do you implement depth-first search (DFS) in Go?

Depth-First Search (DFS) is a fundamental graph traversal algorithm. In Go, you can implement DFS either recursively or iteratively (using a stack). Below is a simple recursive implementation for an undirected graph represented using an adjacency list.

### Example: DFS in Go

\`\`\`go
package main

import (
    "fmt"
)

// Graph structure using adjacency list
type Graph struct {
    vertices int
    adjList  map[int][]int
}

// Initialize a new graph
func NewGraph(vertices int) *Graph {
    return &Graph{
        vertices: vertices,
        adjList:  make(map[int][]int),
    }
}

// Add an edge to the graph (undirected)
func (g *Graph) AddEdge(u, v int) {
    g.adjList[u] = append(g.adjList[u], v)
    g.adjList[v] = append(g.adjList[v], u)
}

// DFS utility function
func (g *Graph) dfsUtil(v int, visited map[int]bool) {
    visited[v] = true
    fmt.Printf("%d ", v)

    for _, neighbor := range g.adjList[v] {
        if !visited[neighbor] {
            g.dfsUtil(neighbor, visited)
        }
    }
}

// DFS traversal starting from vertex v
func (g *Graph) DFS(start int) {
    visited := make(map[int]bool)
    g.dfsUtil(start, visited)
}

func main() {
    g := NewGraph(5)
    g.AddEdge(0, 1)
    g.AddEdge(0, 2)
    g.AddEdge(1, 3)
    g.AddEdge(1, 4)

    fmt.Println("DFS traversal starting from vertex 0:")
    g.DFS(0)
}
\`\`\`

### Output

\`\`\`
DFS traversal starting from vertex 0:
0 1 3 4 2 
\`\`\`

### Explanation

- The graph is represented as an adjacency list.
- The \`DFS\` function initializes a \`visited\` map and calls the recursive helper \`dfsUtil\`.
- The \`dfsUtil\` function marks the current node as visited, prints it, and recursively visits all unvisited neighbors.

You can adapt this code for directed graphs or to perform iterative DFS using a stack.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-21T11:58:47.998835Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"f29348bb-1069-4dcd-b74b-dfffe4795b2e",question:"How do you implement breadth-first search (BFS) in Go?",answer:`\`\`\`markdown
### How do you implement breadth-first search (BFS) in Go?

Breadth-first search (BFS) is a graph traversal algorithm that explores all neighbors at the present depth prior to moving on to nodes at the next depth level. BFS is typically implemented using a queue.

Below is an example of BFS in Go for an unweighted graph represented as an adjacency list:

\`\`\`go
package main

import (
    "fmt"
)

// BFS traverses the graph from the start node and prints the order of traversal.
func BFS(graph map[int][]int, start int) {
    visited := make(map[int]bool)
    queue := []int{start}
    visited[start] = true

    for len(queue) > 0 {
        // Dequeue the first element
        node := queue[0]
        queue = queue[1:]
        fmt.Printf("%d ", node)

        // Enqueue all unvisited neighbors
        for _, neighbor := range graph[node] {
            if !visited[neighbor] {
                visited[neighbor] = true
                queue = append(queue, neighbor)
            }
        }
    }
}

func main() {
    // Example graph as an adjacency list
    graph := map[int][]int{
        1: {2, 3},
        2: {4, 5},
        3: {6},
        4: {},
        5: {6},
        6: {},
    }

    fmt.Print("BFS traversal starting from node 1: ")
    BFS(graph, 1)
}
\`\`\`

**Output:**
\`\`\`
BFS traversal starting from node 1: 1 2 3 4 5 6 
\`\`\`

**Explanation:**
- We use a queue to keep track of nodes to visit.
- A \`visited\` map ensures we do not process the same node more than once.
- We start from the given node, enqueue its neighbors, and repeat until the queue is empty.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-21T11:58:47.998843Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"d1499eb3-2646-48d3-8495-e7296f46387d",question:"How do you check if a binary tree is a valid binary search tree in Go?",answer:`\`\`\`markdown
### How do you check if a binary tree is a valid binary search tree in Go?

To determine if a binary tree is a valid Binary Search Tree (BST), you need to ensure that for every node:

- All nodes in the left subtree are less than the node's value.
- All nodes in the right subtree are greater than the node's value.
- Both left and right subtrees are also BSTs.

A common approach is to use recursion with a range (\`min\`, \`max\`) that each node's value must fall between.

#### Go Implementation

\`\`\`go
package main

import (
    "fmt"
    "math"
)

type TreeNode struct {
    Val   int
    Left  *TreeNode
    Right *TreeNode
}

func isValidBST(root *TreeNode) bool {
    return validate(root, math.MinInt64, math.MaxInt64)
}

func validate(node *TreeNode, min, max int) bool {
    if node == nil {
        return true
    }
    if node.Val <= min || node.Val >= max {
        return false
    }
    return validate(node.Left, min, node.Val) && validate(node.Right, node.Val, max)
}

// Example usage
func main() {
    root := &TreeNode{Val: 2}
    root.Left = &TreeNode{Val: 1}
    root.Right = &TreeNode{Val: 3}
    fmt.Println(isValidBST(root)) // Output: true
}
\`\`\`

#### Explanation

- The \`validate\` function checks if the current node's value is within the allowed range.
- For the left child, the maximum allowed value becomes the current node's value.
- For the right child, the minimum allowed value becomes the current node's value.
- If all nodes satisfy the BST property, the function returns \`true\`.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-21T11:58:47.998851Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"4614e364-baf8-41a3-adbc-73f8a468bba7",question:"How do you find the kth largest element in an array in Go?",answer:`\`\`\`markdown
## How do you find the kth largest element in an array in Go?

To find the kth largest element in an array, a common approach is to use a min-heap of size k. Alternatively, you can sort the array and pick the element at the appropriate index. For better performance, especially when k is much smaller than the array size, the heap approach is preferred.

Below is a Go implementation using the sort package (simple and easy to understand), and another using a min-heap for better efficiency.

### 1. Sorting Approach

\`\`\`go
import (
    "fmt"
    "sort"
)

func findKthLargest(nums []int, k int) int {
    sort.Sort(sort.Reverse(sort.IntSlice(nums)))
    return nums[k-1]
}

func main() {
    nums := []int{3, 2, 1, 5, 6, 4}
    k := 2
    fmt.Println(findKthLargest(nums, k)) // Output: 5
}
\`\`\`

### 2. Min-Heap Approach

\`\`\`go
import (
    "container/heap"
    "fmt"
)

// MinHeap implements heap.Interface
type MinHeap []int

func (h MinHeap) Len() int           { return len(h) }
func (h MinHeap) Less(i, j int) bool { return h[i] < h[j] }
func (h MinHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *MinHeap) Push(x interface{}) {
    *h = append(*h, x.(int))
}

func (h *MinHeap) Pop() interface{} {
    old := *h
    n := len(old)
    x := old[n-1]
    *h = old[0 : n-1]
    return x
}

func findKthLargest(nums []int, k int) int {
    h := &MinHeap{}
    heap.Init(h)
    for _, num := range nums {
        heap.Push(h, num)
        if h.Len() > k {
            heap.Pop(h)
        }
    }
    return (*h)[0]
}

func main() {
    nums := []int{3, 2, 1, 5, 6, 4}
    k := 2
    fmt.Println(findKthLargest(nums, k)) // Output: 5
}
\`\`\`

**Explanation:**  
- The sorting approach is straightforward but has O(n log n) time complexity.
- The min-heap approach maintains a heap of size k, resulting in O(n log k) time complexity, which is more efficient when k is much smaller than n.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-21T11:58:47.998859Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"befa9be5-707d-4748-8fe6-728793f06a0a",question:"How do you implement a stack using slices in Go?",answer:`\`\`\`markdown
## How do you implement a stack using slices in Go?

A stack is a Last-In-First-Out (LIFO) data structure. In Go, you can implement a stack using slices by providing methods to push (add) and pop (remove) elements from the end of the slice.

Here's a simple implementation:

\`\`\`go
package main

import (
    "fmt"
    "errors"
)

type Stack struct {
    elements []int
}

// Push adds an element to the top of the stack
func (s *Stack) Push(value int) {
    s.elements = append(s.elements, value)
}

// Pop removes and returns the top element of the stack
func (s *Stack) Pop() (int, error) {
    if len(s.elements) == 0 {
        return 0, errors.New("stack is empty")
    }
    index := len(s.elements) - 1
    value := s.elements[index]
    s.elements = s.elements[:index]
    return value, nil
}

// Peek returns the top element without removing it
func (s *Stack) Peek() (int, error) {
    if len(s.elements) == 0 {
        return 0, errors.New("stack is empty")
    }
    return s.elements[len(s.elements)-1], nil
}

// IsEmpty checks if the stack is empty
func (s *Stack) IsEmpty() bool {
    return len(s.elements) == 0
}

func main() {
    stack := &Stack{}

    stack.Push(10)
    stack.Push(20)
    stack.Push(30)

    fmt.Println(stack.Peek()) // Output: 30, <nil>

    for !stack.IsEmpty() {
        val, _ := stack.Pop()
        fmt.Println(val)
    }
}
\`\`\`

**Explanation:**

- The \`Stack\` struct contains a slice of integers.
- \`Push\` appends an element to the end of the slice.
- \`Pop\` removes and returns the last element.
- \`Peek\` returns the last element without removing it.
- \`IsEmpty\` checks if the stack is empty.

This approach leverages Go's slice operations for efficient stack behavior.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-21T11:58:47.998867Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"0ac95ced-ddec-4d89-aba7-ebecec31d518",question:"How do you implement a queue using slices in Go?",answer:`\`\`\`markdown
### How do you implement a queue using slices in Go?

A queue is a First-In-First-Out (FIFO) data structure. In Go, you can implement a queue using slices by adding elements to the end and removing them from the front.

Here's a simple implementation:

\`\`\`go
package main

import "fmt"

// Queue represents a queue using a slice
type Queue struct {
    items []int
}

// Enqueue adds an element to the end of the queue
func (q *Queue) Enqueue(item int) {
    q.items = append(q.items, item)
}

// Dequeue removes and returns the element from the front of the queue
func (q *Queue) Dequeue() (int, bool) {
    if len(q.items) == 0 {
        return 0, false // or return an error
    }
    item := q.items[0]
    q.items = q.items[1:]
    return item, true
}

// IsEmpty checks if the queue is empty
func (q *Queue) IsEmpty() bool {
    return len(q.items) == 0
}

// Front returns the element at the front without removing it
func (q *Queue) Front() (int, bool) {
    if len(q.items) == 0 {
        return 0, false
    }
    return q.items[0], true
}

func main() {
    q := Queue{}

    q.Enqueue(10)
    q.Enqueue(20)
    q.Enqueue(30)

    fmt.Println(q.Dequeue()) // Output: 10 true
    fmt.Println(q.Front())   // Output: 20 true
    fmt.Println(q.IsEmpty()) // Output: false
}
\`\`\`

**Explanation:**
- \`Enqueue\` appends elements to the end of the slice.
- \`Dequeue\` removes the first element by slicing from index 1 onward.
- \`IsEmpty\` checks if the queue is empty.
- \`Front\` peeks at the first element without removing it.

This approach is simple and idiomatic in Go for small to moderate queue sizes. For very large queues, consider using a circular buffer to avoid slice reallocation overhead.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-21T11:58:47.998874Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"19e7c31c-35ec-48a2-b068-8fb0448abbc2",question:"How do you find the longest substring without repeating characters in Go?",answer:`\`\`\`markdown
### How do you find the longest substring without repeating characters in Go?

To find the longest substring without repeating characters in a string, you can use the sliding window technique with a map to track the last seen index of each character. Here's a Go implementation:

\`\`\`go
package main

import (
    "fmt"
)

func lengthOfLongestSubstring(s string) int {
    charIndex := make(map[rune]int)
    maxLen := 0
    start := 0

    for i, ch := range s {
        if lastIdx, found := charIndex[ch]; found && lastIdx >= start {
            start = lastIdx + 1
        }
        charIndex[ch] = i
        if i-start+1 > maxLen {
            maxLen = i - start + 1
        }
    }
    return maxLen
}

func main() {
    s := "abcabcbb"
    fmt.Println(lengthOfLongestSubstring(s)) // Output: 3 ("abc")
}
\`\`\`

**Explanation:**
- We use a map \`charIndex\` to store the last index of each character.
- We maintain a \`start\` pointer for the current window.
- If we find a repeating character within the current window, we move \`start\` to one position after the last occurrence.
- We update \`maxLen\` with the length of the current window if it's larger than the previous maximum.

This algorithm runs in O(n) time, where n is the length of the string.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-21T11:58:47.998881Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"d6aac2b5-6f83-49be-8eed-5cf08afaa06e",question:"How do you implement Dijkstra's algorithm for shortest path in Go?",answer:`\`\`\`markdown
### Dijkstra's Algorithm for Shortest Path in Go

Dijkstra's algorithm finds the shortest path from a source node to all other nodes in a weighted graph with non-negative edge weights. Below is a Go implementation using an adjacency list and a min-heap (priority queue).

#### Implementation

\`\`\`go
package main

import (
    "container/heap"
    "fmt"
    "math"
)

// Edge represents a graph edge with a destination and weight.
type Edge struct {
    to     int
    weight int
}

// Item is an element in the priority queue.
type Item struct {
    node     int
    priority int
    index    int
}

// PriorityQueue implements heap.Interface and holds Items.
type PriorityQueue []*Item

func (pq PriorityQueue) Len() int { return len(pq) }
func (pq PriorityQueue) Less(i, j int) bool {
    return pq[i].priority < pq[j].priority
}
func (pq PriorityQueue) Swap(i, j int) {
    pq[i], pq[j] = pq[j], pq[i]
    pq[i].index = i
    pq[j].index = j
}
func (pq *PriorityQueue) Push(x interface{}) {
    n := len(*pq)
    item := x.(*Item)
    item.index = n
    *pq = append(*pq, item)
}
func (pq *PriorityQueue) Pop() interface{} {
    old := *pq
    n := len(old)
    item := old[n-1]
    old[n-1] = nil
    item.index = -1
    *pq = old[0 : n-1]
    return item
}

// Dijkstra finds shortest paths from source to all nodes.
func Dijkstra(graph map[int][]Edge, source int) map[int]int {
    dist := make(map[int]int)
    for node := range graph {
        dist[node] = math.MaxInt64
    }
    dist[source] = 0

    pq := &PriorityQueue{}
    heap.Init(pq)
    heap.Push(pq, &Item{node: source, priority: 0})

    for pq.Len() > 0 {
        curr := heap.Pop(pq).(*Item)
        u := curr.node
        if curr.priority > dist[u] {
            continue // Already found a better path
        }
        for _, e := range graph[u] {
            alt := dist[u] + e.weight
            if alt < dist[e.to] {
                dist[e.to] = alt
                heap.Push(pq, &Item{node: e.to, priority: alt})
            }
        }
    }
    return dist
}

func main() {
    // Example graph: adjacency list
    graph := map[int][]Edge{
        0: {{1, 4}, {2, 1}},
        1: {{3, 1}},
        2: {{1, 2}, {3, 5}},
        3: {},
    }
    source := 0
    dist := Dijkstra(graph, source)
    for node, d := range dist {
        fmt.Printf("Shortest distance from %d to %d is %d\\n", source, node, d)
    }
}
\`\`\`

#### Explanation

- The graph is represented as an adjacency list: \`map[int][]Edge\`.
- The \`PriorityQueue\` is a min-heap to always process the node with the smallest tentative distance.
- The \`dist\` map holds the shortest known distance from the source to each node.
- For each node, we update the distances to its neighbors if a shorter path is found.
- The algorithm runs in O((V + E) log V) time using a priority queue.

---
This implementation efficiently finds the shortest paths from a source node to all other nodes in a weighted, directed graph.
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T11:58:47.998888Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"359a7144-1505-4c9c-95cf-4dafdb219210",question:"How do you implement a Trie (prefix tree) in Go?",answer:`\`\`\`markdown
## How do you implement a Trie (prefix tree) in Go?

A Trie (prefix tree) is a tree data structure used for efficient retrieval of keys in a dataset of strings, commonly used for autocomplete and spell-checking.

### Implementation in Go

Below is a basic implementation of a Trie in Go, supporting insertion and search operations:

\`\`\`go
package main

import "fmt"

// TrieNode represents a node in the Trie
type TrieNode struct {
    children map[rune]*TrieNode
    isEnd    bool
}

// Trie represents the Trie structure
type Trie struct {
    root *TrieNode
}

// NewTrie initializes and returns a new Trie
func NewTrie() *Trie {
    return &Trie{root: &TrieNode{children: make(map[rune]*TrieNode)}}
}

// Insert adds a word to the Trie
func (t *Trie) Insert(word string) {
    node := t.root
    for _, ch := range word {
        if _, exists := node.children[ch]; !exists {
            node.children[ch] = &TrieNode{children: make(map[rune]*TrieNode)}
        }
        node = node.children[ch]
    }
    node.isEnd = true
}

// Search checks if a word exists in the Trie
func (t *Trie) Search(word string) bool {
    node := t.root
    for _, ch := range word {
        if _, exists := node.children[ch]; !exists {
            return false
        }
        node = node.children[ch]
    }
    return node.isEnd
}

// StartsWith checks if there is any word in the Trie that starts with the given prefix
func (t *Trie) StartsWith(prefix string) bool {
    node := t.root
    for _, ch := range prefix {
        if _, exists := node.children[ch]; !exists {
            return false
        }
        node = node.children[ch]
    }
    return true
}

func main() {
    trie := NewTrie()
    trie.Insert("apple")
    fmt.Println(trie.Search("apple"))    // true
    fmt.Println(trie.Search("app"))      // false
    fmt.Println(trie.StartsWith("app"))  // true
    trie.Insert("app")
    fmt.Println(trie.Search("app"))      // true
}
\`\`\`

### Explanation

- **TrieNode**: Each node contains a map of children nodes and a boolean indicating if it's the end of a word.
- **Insert**: Iterates through each character, creating child nodes as needed.
- **Search**: Traverses the Trie to check if the word exists.
- **StartsWith**: Checks if any word in the Trie starts with the given prefix.

This implementation can be extended with delete and other advanced operations as needed.
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T11:58:47.998895Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"654769d3-c918-4456-ac51-cc2bbb5b67cd",question:"How do you implement a LRU (Least Recently Used) cache in Go?",answer:`\`\`\`markdown
## How do you implement a LRU (Least Recently Used) cache in Go?

An LRU (Least Recently Used) cache is a data structure that evicts the least recently accessed item when it reaches its capacity. The typical implementation uses a combination of a doubly linked list and a hash map for O(1) get and put operations.

Below is a simple implementation in Go:

\`\`\`go
package main

import (
    "container/list"
    "fmt"
)

// Entry represents a key-value pair in the cache
type Entry struct {
    key   int
    value int
}

// LRUCache struct
type LRUCache struct {
    capacity int
    cache    map[int]*list.Element
    list     *list.List
}

// Constructor initializes the LRU cache
func Constructor(capacity int) LRUCache {
    return LRUCache{
        capacity: capacity,
        cache:    make(map[int]*list.Element),
        list:     list.New(),
    }
}

// Get returns the value of the key if present, else -1
func (l *LRUCache) Get(key int) int {
    if elem, ok := l.cache[key]; ok {
        l.list.MoveToFront(elem)
        return elem.Value.(*Entry).value
    }
    return -1
}

// Put inserts or updates the value of the key
func (l *LRUCache) Put(key int, value int) {
    if elem, ok := l.cache[key]; ok {
        // Update value and move to front
        elem.Value.(*Entry).value = value
        l.list.MoveToFront(elem)
    } else {
        // Evict if over capacity
        if l.list.Len() == l.capacity {
            backElem := l.list.Back()
            if backElem != nil {
                l.list.Remove(backElem)
                delete(l.cache, backElem.Value.(*Entry).key)
            }
        }
        // Insert new entry at front
        entry := &Entry{key, value}
        elem := l.list.PushFront(entry)
        l.cache[key] = elem
    }
}

// Example usage
func main() {
    lru := Constructor(2)
    lru.Put(1, 1)
    lru.Put(2, 2)
    fmt.Println(lru.Get(1)) // returns 1
    lru.Put(3, 3)           // evicts key 2
    fmt.Println(lru.Get(2)) // returns -1 (not found)
    lru.Put(4, 4)           // evicts key 1
    fmt.Println(lru.Get(1)) // returns -1 (not found)
    fmt.Println(lru.Get(3)) // returns 3
    fmt.Println(lru.Get(4)) // returns 4
}
\`\`\`

**Explanation:**

- \`list.List\` maintains the order of usage (most recent at the front).
- \`cache\` is a map for O(1) access to list elements.
- On \`Get\`, move the accessed element to the front.
- On \`Put\`, update if exists, else insert at front and evict the least recently used if over capacity.

This ensures both \`Get\` and \`Put\` operations run in O(1) time.
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T11:58:47.998903Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"f0ab79e2-e3b3-4006-95d4-3f49f0f3e9eb",question:"How do you implement a min heap in Go?",answer:`\`\`\`markdown
### How do you implement a min heap in Go?

A **min heap** is a complete binary tree where the value at each node is less than or equal to the values of its children. In Go, you can implement a min heap using a slice and by defining methods to maintain the heap property.

Below is an example implementation of a min heap in Go:

\`\`\`go
package main

import (
    "fmt"
)

// MinHeap struct
type MinHeap struct {
    arr []int
}

// Insert adds a new element to the heap
func (h *MinHeap) Insert(key int) {
    h.arr = append(h.arr, key)
    h.heapifyUp(len(h.arr) - 1)
}

// ExtractMin removes and returns the minimum element from the heap
func (h *MinHeap) ExtractMin() (int, error) {
    if len(h.arr) == 0 {
        return 0, fmt.Errorf("heap is empty")
    }
    min := h.arr[0]
    last := len(h.arr) - 1
    h.arr[0] = h.arr[last]
    h.arr = h.arr[:last]
    h.heapifyDown(0)
    return min, nil
}

// heapifyUp maintains the heap property after insertion
func (h *MinHeap) heapifyUp(index int) {
    for h.arr[parent(index)] > h.arr[index] {
        h.arr[parent(index)], h.arr[index] = h.arr[index], h.arr[parent(index)]
        index = parent(index)
    }
}

// heapifyDown maintains the heap property after extraction
func (h *MinHeap) heapifyDown(index int) {
    lastIndex := len(h.arr) - 1
    l, r := left(index), right(index)
    smallest := index

    if l <= lastIndex && h.arr[l] < h.arr[smallest] {
        smallest = l
    }
    if r <= lastIndex && h.arr[r] < h.arr[smallest] {
        smallest = r
    }
    if smallest != index {
        h.arr[smallest], h.arr[index] = h.arr[index], h.arr[smallest]
        h.heapifyDown(smallest)
    }
}

// Helper functions to get parent and children indices
func parent(i int) int { return (i - 1) / 2 }
func left(i int) int   { return 2*i + 1 }
func right(i int) int  { return 2*i + 2 }

// Example usage
func main() {
    h := &MinHeap{}
    h.Insert(3)
    h.Insert(1)
    h.Insert(6)
    h.Insert(5)
    h.Insert(2)
    h.Insert(4)

    fmt.Println("Min Heap array:", h.arr)

    min, _ := h.ExtractMin()
    fmt.Println("Extracted Min:", min)
    fmt.Println("Min Heap array after extraction:", h.arr)
}
\`\`\`

**Output:**
\`\`\`
Min Heap array: [1 2 4 5 3 6]
Extracted Min: 1
Min Heap array after extraction: [2 3 4 5 6]
\`\`\`

**Explanation:**
- The \`MinHeap\` struct uses a slice to store heap elements.
- \`Insert\` adds a new element and restores the heap property by moving the element up (\`heapifyUp\`).
- \`ExtractMin\` removes the root (minimum element), replaces it with the last element, and restores the heap property by moving the new root down (\`heapifyDown\`).
- Helper functions calculate the indices of parent and children nodes.

This implementation provides the basic operations for a min heap in Go.
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T11:58:47.998910Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"f41b19ee-bf4b-4af8-9849-ea9b96b29565",question:"How do you implement a max heap in Go?",answer:`\`\`\`markdown
### How do you implement a max heap in Go?

A **max heap** is a complete binary tree where each parent node is greater than or equal to its child nodes. The largest element is always at the root. In Go, you can implement a max heap by using a slice and defining methods for insertion, extraction, and heapifying.

Below is a simple implementation of a max heap in Go:

\`\`\`go
package main

import (
    "fmt"
)

// MaxHeap structure
type MaxHeap struct {
    array []int
}

// Insert adds an element to the heap
func (h *MaxHeap) Insert(key int) {
    h.array = append(h.array, key)
    h.heapifyUp(len(h.array) - 1)
}

// Extract returns the largest element and removes it from the heap
func (h *MaxHeap) Extract() int {
    if len(h.array) == 0 {
        fmt.Println("Heap is empty")
        return -1
    }
    root := h.array[0]
    lastIndex := len(h.array) - 1
    h.array[0] = h.array[lastIndex]
    h.array = h.array[:lastIndex]
    h.heapifyDown(0)
    return root
}

// heapifyUp moves the element at index up to maintain the heap property
func (h *MaxHeap) heapifyUp(index int) {
    for h.array[parent(index)] < h.array[index] {
        h.array[parent(index)], h.array[index] = h.array[index], h.array[parent(index)]
        index = parent(index)
    }
}

// heapifyDown moves the element at index down to maintain the heap property
func (h *MaxHeap) heapifyDown(index int) {
    lastIndex := len(h.array) - 1
    l, r := left(index), right(index)
    largest := index

    if l <= lastIndex && h.array[l] > h.array[largest] {
        largest = l
    }
    if r <= lastIndex && h.array[r] > h.array[largest] {
        largest = r
    }
    if largest != index {
        h.array[index], h.array[largest] = h.array[largest], h.array[index]
        h.heapifyDown(largest)
    }
}

// Helper functions to get parent and child indices
func parent(i int) int { return (i - 1) / 2 }
func left(i int) int   { return 2*i + 1 }
func right(i int) int  { return 2*i + 2 }

// Example usage
func main() {
    h := &MaxHeap{}
    h.Insert(10)
    h.Insert(20)
    h.Insert(5)
    h.Insert(30)
    fmt.Println("Heap array:", h.array)
    fmt.Println("Extracted max:", h.Extract())
    fmt.Println("Heap array after extraction:", h.array)
}
\`\`\`

**Output:**
\`\`\`
Heap array: [30 20 5 10]
Extracted max: 30
Heap array after extraction: [20 10 5]
\`\`\`

**Explanation:**
- The \`Insert\` method adds a new element and maintains the max heap property by moving the element up (\`heapifyUp\`).
- The \`Extract\` method removes and returns the root (maximum value), replaces it with the last element, and restores the heap property by moving the new root down (\`heapifyDown\`).
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T11:58:47.998918Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"c96cb8aa-22ab-4696-80e2-5377c42445ce",question:"How do you solve the N-Queens problem in Go?",answer:`\`\`\`markdown
### N-Queens Problem in Go

The N-Queens problem is a classic backtracking problem where the goal is to place \`N\` queens on an \`N x N\` chessboard such that no two queens threaten each other (i.e., no two queens share the same row, column, or diagonal).

Below is a Go implementation that finds all possible solutions for the N-Queens problem and returns them as a slice of string slices, where each string represents a row of the chessboard.

\`\`\`go
package main

import (
    "fmt"
)

func solveNQueens(n int) [][]string {
    var res [][]string
    board := make([][]byte, n)
    for i := range board {
        board[i] = make([]byte, n)
        for j := range board[i] {
            board[i][j] = '.'
        }
    }
    cols := make([]bool, n)
    diag1 := make([]bool, 2*n-1) // row+col
    diag2 := make([]bool, 2*n-1) // row-col+n-1
    var backtrack func(row int)
    backtrack = func(row int) {
        if row == n {
            var solution []string
            for _, r := range board {
                solution = append(solution, string(r))
            }
            res = append(res, solution)
            return
        }
        for col := 0; col < n; col++ {
            d1 := row + col
            d2 := row - col + n - 1
            if cols[col] || diag1[d1] || diag2[d2] {
                continue
            }
            board[row][col] = 'Q'
            cols[col], diag1[d1], diag2[d2] = true, true, true
            backtrack(row + 1)
            board[row][col] = '.'
            cols[col], diag1[d1], diag2[d2] = false, false, false
        }
    }
    backtrack(0)
    return res
}

func main() {
    n := 4
    solutions := solveNQueens(n)
    for i, sol := range solutions {
        fmt.Printf("Solution %d:\\n", i+1)
        for _, row := range sol {
            fmt.Println(row)
        }
        fmt.Println()
    }
}
\`\`\`

**Explanation:**

- We use backtracking to try placing a queen in each row.
- \`cols\`, \`diag1\`, and \`diag2\` are used to track if a column or diagonal is already occupied by a queen.
- When a solution is found (all rows are filled), we append the board configuration to the result.
- The function prints all possible solutions for \`n = 4\`.

**Sample Output:**
\`\`\`
Solution 1:
.Q..
...Q
Q...
..Q.

Solution 2:
..Q.
Q...
...Q
.Q..
\`\`\`
\`\`\``,level:"Advanced",created_at:"2025-04-21T11:58:47.998925Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"98186724-4b16-4752-a7fb-97115637c23a",question:"How do you find strongly connected components in a directed graph in Go?",answer:`\`\`\`markdown
### How do you find strongly connected components in a directed graph in Go?

To find strongly connected components (SCCs) in a directed graph, **Tarjan's Algorithm** is commonly used due to its efficiency (O(V + E) time complexity). Below is a Go implementation of Tarjan's Algorithm for finding SCCs.

#### Go Implementation

\`\`\`go
package main

import (
    "fmt"
)

type Graph struct {
    adj map[int][]int
}

func NewGraph() *Graph {
    return &Graph{adj: make(map[int][]int)}
}

func (g *Graph) AddEdge(u, v int) {
    g.adj[u] = append(g.adj[u], v)
}

func (g *Graph) TarjanSCC() [][]int {
    index := 0
    indices := make(map[int]int)
    lowlink := make(map[int]int)
    onStack := make(map[int]bool)
    stack := []int{}
    var sccs [][]int

    var strongConnect func(v int)
    strongConnect = func(v int) {
        indices[v] = index
        lowlink[v] = index
        index++
        stack = append(stack, v)
        onStack[v] = true

        for _, w := range g.adj[v] {
            if _, found := indices[w]; !found {
                strongConnect(w)
                if lowlink[w] < lowlink[v] {
                    lowlink[v] = lowlink[w]
                }
            } else if onStack[w] {
                if indices[w] < lowlink[v] {
                    lowlink[v] = indices[w]
                }
            }
        }

        if lowlink[v] == indices[v] {
            var scc []int
            for {
                w := stack[len(stack)-1]
                stack = stack[:len(stack)-1]
                onStack[w] = false
                scc = append(scc, w)
                if w == v {
                    break
                }
            }
            sccs = append(sccs, scc)
        }
    }

    for v := range g.adj {
        if _, found := indices[v]; !found {
            strongConnect(v)
        }
    }
    return sccs
}

func main() {
    g := NewGraph()
    g.AddEdge(1, 2)
    g.AddEdge(2, 3)
    g.AddEdge(3, 1)
    g.AddEdge(3, 4)
    g.AddEdge(4, 5)
    g.AddEdge(5, 4)
    g.AddEdge(6, 5)
    g.AddEdge(6, 7)
    g.AddEdge(7, 6)
    g.AddEdge(8, 7)
    g.AddEdge(8, 8)

    sccs := g.TarjanSCC()
    fmt.Println("Strongly Connected Components:")
    for _, scc := range sccs {
        fmt.Println(scc)
    }
}
\`\`\`

#### Explanation

- **Graph Representation:** The graph is represented using an adjacency list.
- **Tarjan's Algorithm:** Uses depth-first search, tracking discovery indices and low-link values.
- **Stack:** Maintains the current path in the DFS.
- **SCC Extraction:** When a root node of an SCC is found, nodes are popped off the stack to form the SCC.
- **Usage:** The \`main\` function demonstrates finding SCCs in a sample graph.

**Output Example:**
\`\`\`
Strongly Connected Components:
[3 2 1]
[4 5]
[6 7]
[8]
\`\`\`

This approach efficiently finds all strongly connected components in a directed graph using Go.
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T11:58:47.998932Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"d4885f88-9973-41c3-9b86-0b9c573c0bc5",question:"How do you implement topological sort in Go?",answer:`\`\`\`markdown
### Topological Sort in Go

Topological sort is used to order the vertices of a Directed Acyclic Graph (DAG) such that for every directed edge \`u -> v\`, vertex \`u\` comes before \`v\` in the ordering.

#### Implementation (using DFS):

\`\`\`go
package main

import (
    "fmt"
)

// Graph represents a directed graph using adjacency list
type Graph struct {
    vertices int
    adj      [][]int
}

// NewGraph creates a new graph with n vertices
func NewGraph(n int) *Graph {
    return &Graph{
        vertices: n,
        adj:      make([][]int, n),
    }
}

// AddEdge adds a directed edge from u to v
func (g *Graph) AddEdge(u, v int) {
    g.adj[u] = append(g.adj[u], v)
}

// topologicalSortUtil is a recursive helper function for DFS
func (g *Graph) topologicalSortUtil(v int, visited []bool, stack *[]int) {
    visited[v] = true

    for _, neighbor := range g.adj[v] {
        if !visited[neighbor] {
            g.topologicalSortUtil(neighbor, visited, stack)
        }
    }

    // Push current vertex to stack after visiting neighbors
    *stack = append(*stack, v)
}

// TopologicalSort returns a topological ordering of the graph
func (g *Graph) TopologicalSort() ([]int, error) {
    visited := make([]bool, g.vertices)
    stack := []int{}

    for i := 0; i < g.vertices; i++ {
        if !visited[i] {
            g.topologicalSortUtil(i, visited, &stack)
        }
    }

    // Reverse the stack to get the correct order
    for i, j := 0, len(stack)-1; i < j; i, j = i+1, j-1 {
        stack[i], stack[j] = stack[j], stack[i]
    }

    return stack, nil
}

func main() {
    g := NewGraph(6)
    g.AddEdge(5, 2)
    g.AddEdge(5, 0)
    g.AddEdge(4, 0)
    g.AddEdge(4, 1)
    g.AddEdge(2, 3)
    g.AddEdge(3, 1)

    order, _ := g.TopologicalSort()
    fmt.Println("Topological Sort:", order)
}
\`\`\`

#### Output

\`\`\`
Topological Sort: [5 4 2 3 1 0]
\`\`\`

#### Notes

- This implementation uses DFS and a stack to store the order.
- The time complexity is O(V + E), where V is the number of vertices and E is the number of edges.
- This implementation does not check for cycles. For cycle detection, you can add an extra visited state (e.g., "visiting") to detect back edges.
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T11:58:47.998940Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"9fe12942-e3e5-46b0-bc24-8babe7ff6726",question:"How do you implement the Knuth-Morris-Pratt (KMP) string matching algorithm in Go?",answer:`\`\`\`markdown
### Knuth-Morris-Pratt (KMP) String Matching Algorithm in Go

The **KMP algorithm** efficiently searches for occurrences of a "pattern" string within a "text" string by preprocessing the pattern to create a longest prefix suffix (LPS) array. This allows the algorithm to avoid unnecessary re-examinations of previously matched characters.

#### Steps:
1. **Preprocess the Pattern:** Build the LPS array for the pattern.
2. **Search:** Use the LPS array to skip characters while matching.

#### Go Implementation

\`\`\`go
package main

import (
    "fmt"
)

// ComputeLPSArray computes the Longest Prefix Suffix (LPS) array
func computeLPSArray(pattern string) []int {
    lps := make([]int, len(pattern))
    length := 0 // length of the previous longest prefix suffix

    i := 1
    for i < len(pattern) {
        if pattern[i] == pattern[length] {
            length++
            lps[i] = length
            i++
        } else {
            if length != 0 {
                length = lps[length-1]
            } else {
                lps[i] = 0
                i++
            }
        }
    }
    return lps
}

// KMPSearch returns the starting indices of all occurrences of pattern in text
func KMPSearch(text, pattern string) []int {
    lps := computeLPSArray(pattern)
    var result []int

    i, j := 0, 0 // i: index for text, j: index for pattern
    for i < len(text) {
        if pattern[j] == text[i] {
            i++
            j++
        }
        if j == len(pattern) {
            result = append(result, i-j)
            j = lps[j-1]
        } else if i < len(text) && pattern[j] != text[i] {
            if j != 0 {
                j = lps[j-1]
            } else {
                i++
            }
        }
    }
    return result
}

func main() {
    text := "ababcabcabababd"
    pattern := "ababd"
    matches := KMPSearch(text, pattern)
    fmt.Println("Pattern found at indices:", matches)
}
\`\`\`

#### Output
\`\`\`
Pattern found at indices: [10]
\`\`\`

#### Explanation
- The \`computeLPSArray\` function preprocesses the pattern to build the LPS array.
- The \`KMPSearch\` function uses the LPS array to efficiently search for the pattern in the text.
- The algorithm runs in O(N+M) time, where N is the length of the text and M is the length of the pattern.
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T11:58:47.998947Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"de48aceb-0c1d-4668-9e95-9672e76ee066",question:"How do you implement the Rabin-Karp string search algorithm in Go?",answer:`\`\`\`markdown
### Rabin-Karp String Search Algorithm in Go

The **Rabin-Karp algorithm** is an efficient string searching algorithm that uses hashing to find any one of a set of pattern strings in a text. It computes a hash of the pattern and then slides a window over the text, computing the hash at each position and comparing it to the pattern's hash. If the hashes match, it does a direct string comparison to confirm the match.

#### Go Implementation

\`\`\`go
package main

import (
    "fmt"
)

const (
    d = 256 // Number of characters in the input alphabet
    q = 101 // A prime number for modulo operations to reduce collisions
)

// RabinKarp searches for pattern in text and returns the starting indices of all matches.
func RabinKarp(text, pattern string) []int {
    n := len(text)
    m := len(pattern)
    if m == 0 || n < m {
        return nil
    }

    var result []int
    h := 1
    p, t := 0, 0

    // The value of h would be pow(d, m-1) % q
    for i := 0; i < m-1; i++ {
        h = (h * d) % q
    }

    // Calculate the hash value of pattern and first window of text
    for i := 0; i < m; i++ {
        p = (d*p + int(pattern[i])) % q
        t = (d*t + int(text[i])) % q
    }

    // Slide the pattern over text one by one
    for i := 0; i <= n-m; i++ {
        // Check the hash values of current window of text and pattern
        if p == t {
            // If the hash values match, check for characters one by one
            if text[i:i+m] == pattern {
                result = append(result, i)
            }
        }
        // Calculate hash value for next window of text
        if i < n-m {
            t = (d*(t-int(text[i])*h) + int(text[i+m])) % q
            // We might get negative value of t, converting it to positive
            if t < 0 {
                t += q
            }
        }
    }
    return result
}

func main() {
    text := "GEEKS FOR GEEKS"
    pattern := "GEEK"
    indices := RabinKarp(text, pattern)
    fmt.Println("Pattern found at indices:", indices)
}
\`\`\`

#### Output

\`\`\`
Pattern found at indices: [0 10]
\`\`\`

#### Explanation

- \`d\` is the number of possible characters (here, 256 for extended ASCII).
- \`q\` is a prime number to minimize hash collisions.
- The algorithm computes the hash for the pattern and the first window of the text, then slides the window, updating the hash efficiently.
- When the hash matches, it checks the actual substring to confirm the match.

This implementation efficiently finds all occurrences of the pattern in the text using the Rabin-Karp algorithm in Go.
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T11:58:47.998954Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"a11e7b3f-37f2-4c96-9f91-db14bcfa6a2f",question:"How do you implement union-find (disjoint set) in Go?",answer:`\`\`\`markdown
### How do you implement union-find (disjoint set) in Go?

The **union-find** (or **disjoint set**) data structure efficiently supports two operations:

- **Find**: Determine which subset a particular element is in.
- **Union**: Join two subsets into a single subset.

A common implementation uses **path compression** (to flatten the structure for fast finds) and **union by rank/size** (to keep trees shallow).

#### Go Implementation

\`\`\`go
package main

import "fmt"

// DisjointSet represents the union-find data structure.
type DisjointSet struct {
    parent []int
    rank   []int
}

// NewDisjointSet initializes a new disjoint set with n elements (0 to n-1).
func NewDisjointSet(n int) *DisjointSet {
    parent := make([]int, n)
    rank := make([]int, n)
    for i := 0; i < n; i++ {
        parent[i] = i
        rank[i] = 0
    }
    return &DisjointSet{parent, rank}
}

// Find returns the representative of the set containing x, with path compression.
func (ds *DisjointSet) Find(x int) int {
    if ds.parent[x] != x {
        ds.parent[x] = ds.Find(ds.parent[x]) // Path compression
    }
    return ds.parent[x]
}

// Union merges the sets containing x and y, using union by rank.
func (ds *DisjointSet) Union(x, y int) {
    xRoot := ds.Find(x)
    yRoot := ds.Find(y)
    if xRoot == yRoot {
        return
    }
    // Union by rank
    if ds.rank[xRoot] < ds.rank[yRoot] {
        ds.parent[xRoot] = yRoot
    } else if ds.rank[xRoot] > ds.rank[yRoot] {
        ds.parent[yRoot] = xRoot
    } else {
        ds.parent[yRoot] = xRoot
        ds.rank[xRoot]++
    }
}

// Example usage
func main() {
    ds := NewDisjointSet(5)
    ds.Union(0, 1)
    ds.Union(1, 2)
    fmt.Println(ds.Find(0)) // Output: representative of set containing 0
    fmt.Println(ds.Find(2)) // Output: same as above
    fmt.Println(ds.Find(3)) // Output: representative of set containing 3
    ds.Union(3, 4)
    ds.Union(2, 4)
    fmt.Println(ds.Find(4)) // Output: representative of set containing 0,1,2,3,4
}
\`\`\`

#### Key Points

- **Path compression** in \`Find\` makes future queries faster.
- **Union by rank** keeps the tree shallow, improving efficiency.
- Both operations are nearly constant time, amortized over a sequence of operations.
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T11:58:47.998962Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"b5513765-c7d1-46b0-8d7c-fce85d386e15",question:"How do you implement a binary search tree with insert, search, and delete operations in Go?",answer:`\`\`\`markdown
## Implementing a Binary Search Tree (BST) in Go

Below is an implementation of a Binary Search Tree in Go, supporting \`Insert\`, \`Search\`, and \`Delete\` operations.

\`\`\`go
package main

import (
    "fmt"
)

// Node represents a node in the BST
type Node struct {
    Key   int
    Left  *Node
    Right *Node
}

// Insert inserts a new key into the BST
func (n *Node) Insert(key int) *Node {
    if n == nil {
        return &Node{Key: key}
    }
    if key < n.Key {
        n.Left = n.Left.Insert(key)
    } else if key > n.Key {
        n.Right = n.Right.Insert(key)
    }
    // If key == n.Key, do nothing (no duplicates)
    return n
}

// Search searches for a key in the BST
func (n *Node) Search(key int) *Node {
    if n == nil || n.Key == key {
        return n
    }
    if key < n.Key {
        return n.Left.Search(key)
    }
    return n.Right.Search(key)
}

// findMin finds the node with the minimum key in the BST
func (n *Node) findMin() *Node {
    current := n
    for current != nil && current.Left != nil {
        current = current.Left
    }
    return current
}

// Delete deletes a key from the BST
func (n *Node) Delete(key int) *Node {
    if n == nil {
        return nil
    }
    if key < n.Key {
        n.Left = n.Left.Delete(key)
    } else if key > n.Key {
        n.Right = n.Right.Delete(key)
    } else {
        // Node with only one child or no child
        if n.Left == nil {
            return n.Right
        } else if n.Right == nil {
            return n.Left
        }
        // Node with two children: Get the inorder successor (smallest in the right subtree)
        minRight := n.Right.findMin()
        n.Key = minRight.Key
        n.Right = n.Right.Delete(minRight.Key)
    }
    return n
}

// InOrder prints the BST in-order (for testing)
func (n *Node) InOrder() {
    if n == nil {
        return
    }
    n.Left.InOrder()
    fmt.Printf("%d ", n.Key)
    n.Right.InOrder()
}

func main() {
    var root *Node
    keys := []int{50, 30, 20, 40, 70, 60, 80}
    for _, key := range keys {
        root = root.Insert(key)
    }

    fmt.Print("InOrder Traversal: ")
    root.InOrder()
    fmt.Println()

    // Search
    searchKey := 40
    if root.Search(searchKey) != nil {
        fmt.Printf("Found %d in BST\\n", searchKey)
    } else {
        fmt.Printf("%d not found in BST\\n", searchKey)
    }

    // Delete
    root = root.Delete(20)
    fmt.Print("After deleting 20: ")
    root.InOrder()
    fmt.Println()
}
\`\`\`

### Explanation

- **Insert:** Recursively finds the correct position and inserts the key.
- **Search:** Recursively searches for the key.
- **Delete:** Handles three cases: node with no child, one child, or two children (using inorder successor).
- **InOrder:** Helper function to print the BST in sorted order.

This implementation provides a basic, unbalanced BST. For self-balancing trees, consider AVL or Red-Black Trees.
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T11:58:47.998969Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"da3a7103-306a-470d-b84d-22271ee19de9",question:"How do you implement a graph using adjacency list in Go?",answer:`\`\`\`markdown
## How do you implement a graph using adjacency list in Go?

An adjacency list is a common way to represent a graph, where each node (vertex) maintains a list of its adjacent nodes. In Go, this can be implemented using a map where keys are node identifiers and values are slices of adjacent nodes.

Below is a simple implementation for an undirected graph using an adjacency list in Go:

\`\`\`go
package main

import (
    "fmt"
)

// Graph represents a graph using an adjacency list
type Graph struct {
    adjList map[int][]int
}

// NewGraph initializes a new graph
func NewGraph() *Graph {
    return &Graph{
        adjList: make(map[int][]int),
    }
}

// AddEdge adds an edge between two nodes (u and v)
func (g *Graph) AddEdge(u, v int) {
    g.adjList[u] = append(g.adjList[u], v)
    g.adjList[v] = append(g.adjList[v], u) // Remove this line for a directed graph
}

// Print prints the adjacency list of the graph
func (g *Graph) Print() {
    for node, neighbors := range g.adjList {
        fmt.Printf("%d: %v\\n", node, neighbors)
    }
}

func main() {
    g := NewGraph()
    g.AddEdge(1, 2)
    g.AddEdge(1, 3)
    g.AddEdge(2, 4)
    g.AddEdge(3, 4)

    g.Print()
}
\`\`\`

**Output:**
\`\`\`
1: [2 3]
2: [1 4]
3: [1 4]
4: [2 3]
\`\`\`

**Explanation:**
- The \`Graph\` struct uses a map to store adjacency lists.
- \`AddEdge\` adds an edge between two nodes. For undirected graphs, both directions are added.
- \`Print\` displays the adjacency list for each node.

You can modify this structure for directed graphs, weighted graphs, or use custom types for nodes as needed.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-21T11:58:47.998977Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"3555e524-d3ce-4630-ae06-aa8cfa3ccf7c",question:"How do you implement a priority queue in Go?",answer:`\`\`\`markdown
## How do you implement a priority queue in Go?

In Go, a priority queue can be implemented using the \`container/heap\` package, which provides heap operations for any type that implements the \`heap.Interface\`. Below is an example of how to implement a min-priority queue (where the smallest item has the highest priority):

### Step 1: Define the Item and PriorityQueue Types

\`\`\`go
package main

import (
    "container/heap"
    "fmt"
)

// Item is something we manage in a priority queue.
type Item struct {
    value    string // The value of the item; arbitrary.
    priority int    // The priority of the item in the queue.
    index    int    // The index of the item in the heap.
}

// PriorityQueue implements heap.Interface and holds Items.
type PriorityQueue []*Item

func (pq PriorityQueue) Len() int { return len(pq) }

func (pq PriorityQueue) Less(i, j int) bool {
    // We want Pop to give us the lowest priority so we use less than here.
    return pq[i].priority < pq[j].priority
}

func (pq PriorityQueue) Swap(i, j int) {
    pq[i], pq[j] = pq[j], pq[i]
    pq[i].index = i
    pq[j].index = j
}

func (pq *PriorityQueue) Push(x interface{}) {
    n := len(*pq)
    item := x.(*Item)
    item.index = n
    *pq = append(*pq, item)
}

func (pq *PriorityQueue) Pop() interface{} {
    old := *pq
    n := len(old)
    item := old[n-1]
    old[n-1] = nil  // avoid memory leak
    item.index = -1 // for safety
    *pq = old[0 : n-1]
    return item
}
\`\`\`

### Step 2: Using the Priority Queue

\`\`\`go
func main() {
    // Some items and their priorities.
    items := map[string]int{
        "banana": 3, "apple": 2, "pear": 4,
    }

    // Create a priority queue, put the items in it, and establish the heap invariants.
    pq := make(PriorityQueue, 0)
    heap.Init(&pq)
    for value, priority := range items {
        heap.Push(&pq, &Item{
            value:    value,
            priority: priority,
        })
    }

    // Insert a new item and then modify its priority.
    item := &Item{
        value:    "orange",
        priority: 1,
    }
    heap.Push(&pq, item)

    // Remove items in priority order.
    for pq.Len() > 0 {
        item := heap.Pop(&pq).(*Item)
        fmt.Printf("%s (priority: %d)\\n", item.value, item.priority)
    }
}
\`\`\`

### Output

\`\`\`
orange (priority: 1)
apple (priority: 2)
banana (priority: 3)
pear (priority: 4)
\`\`\`

### Notes

- The \`container/heap\` package requires you to implement the \`heap.Interface\` methods (\`Len\`, \`Less\`, \`Swap\`, \`Push\`, and \`Pop\`).
- You can adapt the \`Less\` method for a max-priority queue by reversing the comparison.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-21T11:58:47.998984Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"728b836f-ecb4-4397-9603-d91d41224069",question:"How do you find the shortest path in an unweighted graph using BFS in Go?",answer:`\`\`\`markdown
### How do you find the shortest path in an unweighted graph using BFS in Go?

To find the shortest path in an unweighted graph, you can use Breadth-First Search (BFS). BFS explores nodes in layers, ensuring that the first time you reach a node, it's via the shortest path. You can also keep track of the path by maintaining a predecessor map.

Here's a Go implementation that finds the shortest path between two nodes in an unweighted graph:

\`\`\`go
package main

import (
    "container/list"
    "fmt"
)

// Graph represented as an adjacency list
type Graph map[int][]int

// BFSShortestPath finds the shortest path from start to end in an unweighted graph
func BFSShortestPath(graph Graph, start, end int) []int {
    visited := make(map[int]bool)
    prev := make(map[int]int)
    queue := list.New()

    visited[start] = true
    queue.PushBack(start)

    for queue.Len() > 0 {
        node := queue.Remove(queue.Front()).(int)
        if node == end {
            break
        }
        for _, neighbor := range graph[node] {
            if !visited[neighbor] {
                visited[neighbor] = true
                prev[neighbor] = node
                queue.PushBack(neighbor)
            }
        }
    }

    // Reconstruct path
    path := []int{}
    at := end
    for {
        path = append([]int{at}, path...)
        if at == start {
            break
        }
        p, ok := prev[at]
        if !ok {
            return nil // No path found
        }
        at = p
    }
    return path
}

func main() {
    // Example graph
    graph := Graph{
        1: {2, 3},
        2: {1, 4, 5},
        3: {1, 6},
        4: {2},
        5: {2, 6},
        6: {3, 5},
    }
    start, end := 1, 6
    path := BFSShortestPath(graph, start, end)
    if path != nil {
        fmt.Printf("Shortest path from %d to %d: %v\\n", start, end, path)
    } else {
        fmt.Printf("No path found from %d to %d\\n", start, end)
    }
}
\`\`\`

**Explanation:**
- The graph is represented as an adjacency list.
- BFS is performed using a queue.
- A \`prev\` map is used to reconstruct the path once the end node is reached.
- The path is reconstructed by backtracking from the end node to the start node.

**Output:**
\`\`\`
Shortest path from 1 to 6: [1 3 6]
\`\`\`
\`\`\`
`,level:"Intermediate",created_at:"2025-04-21T11:58:47.998992Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"f13c75ed-3b0b-4223-b38a-485b19823294",question:"How do you implement a circular queue in Go?",answer:`\`\`\`markdown
## How do you implement a circular queue in Go?

A **circular queue** is a linear data structure that follows the FIFO (First In First Out) principle, but connects the end of the queue back to the front, forming a circle. This allows efficient utilization of space by reusing vacated slots.

Below is an implementation of a circular queue in Go:

\`\`\`go
package main

import (
    "fmt"
    "errors"
)

type CircularQueue struct {
    data        []int
    front, rear int
    size, cap   int
}

// Constructor to initialize the queue
func NewCircularQueue(capacity int) *CircularQueue {
    return &CircularQueue{
        data:  make([]int, capacity),
        front: 0,
        rear:  0,
        size:  0,
        cap:   capacity,
    }
}

// Enqueue adds an element to the queue
func (q *CircularQueue) Enqueue(val int) error {
    if q.IsFull() {
        return errors.New("queue is full")
    }
    q.data[q.rear] = val
    q.rear = (q.rear + 1) % q.cap
    q.size++
    return nil
}

// Dequeue removes and returns the front element
func (q *CircularQueue) Dequeue() (int, error) {
    if q.IsEmpty() {
        return 0, errors.New("queue is empty")
    }
    val := q.data[q.front]
    q.front = (q.front + 1) % q.cap
    q.size--
    return val, nil
}

// IsEmpty checks if the queue is empty
func (q *CircularQueue) IsEmpty() bool {
    return q.size == 0
}

// IsFull checks if the queue is full
func (q *CircularQueue) IsFull() bool {
    return q.size == q.cap
}

// Front returns the front element without removing it
func (q *CircularQueue) Front() (int, error) {
    if q.IsEmpty() {
        return 0, errors.New("queue is empty")
    }
    return q.data[q.front], nil
}

// Rear returns the last element without removing it
func (q *CircularQueue) Rear() (int, error) {
    if q.IsEmpty() {
        return 0, errors.New("queue is empty")
    }
    // (rear - 1 + cap) % cap handles wrap-around
    idx := (q.rear - 1 + q.cap) % q.cap
    return q.data[idx], nil
}

func main() {
    q := NewCircularQueue(3)
    fmt.Println(q.Enqueue(1)) // nil
    fmt.Println(q.Enqueue(2)) // nil
    fmt.Println(q.Enqueue(3)) // nil
    fmt.Println(q.Enqueue(4)) // queue is full

    fmt.Println(q.Dequeue()) // 1, nil
    fmt.Println(q.Enqueue(4)) // nil

    fmt.Println(q.Front()) // 2, nil
    fmt.Println(q.Rear())  // 4, nil
}
\`\`\`

**Explanation:**
- The queue uses a fixed-size slice.
- \`front\` and \`rear\` pointers are updated using modulo arithmetic to wrap around.
- \`size\` tracks the number of elements to distinguish between full and empty states.
- Enqueue and Dequeue operations are O(1).

This implementation efficiently utilizes the allocated space and provides all standard queue operations.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-21T11:58:47.999004Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"6a061d69-c5ad-4928-ae67-404017515aff",question:"How do you find the median of two sorted arrays in Go?",answer:`\`\`\`markdown
### How do you find the median of two sorted arrays in Go?

To find the median of two sorted arrays, you can use a binary search approach to achieve O(log(min(m, n))) time complexity, where \`m\` and \`n\` are the lengths of the two arrays. The idea is to partition the arrays such that the left part contains the same number of elements as the right part, and all elements in the left part are less than or equal to those in the right part.

Here's a Go implementation:

\`\`\`go
package main

import (
	"fmt"
	"math"
)

func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	// Ensure nums1 is the smaller array
	if len(nums1) > len(nums2) {
		return findMedianSortedArrays(nums2, nums1)
	}
	m, n := len(nums1), len(nums2)
	imin, imax, halfLen := 0, m, (m+n+1)/2

	for imin <= imax {
		i := (imin + imax) / 2
		j := halfLen - i

		if i < m && nums2[j-1] > nums1[i] {
			imin = i + 1 // i is too small
		} else if i > 0 && nums1[i-1] > nums2[j] {
			imax = i - 1 // i is too big
		} else { // i is perfect
			var maxOfLeft int
			if i == 0 {
				maxOfLeft = nums2[j-1]
			} else if j == 0 {
				maxOfLeft = nums1[i-1]
			} else {
				maxOfLeft = int(math.Max(float64(nums1[i-1]), float64(nums2[j-1])))
			}

			if (m+n)%2 == 1 {
				return float64(maxOfLeft)
			}

			var minOfRight int
			if i == m {
				minOfRight = nums2[j]
			} else if j == n {
				minOfRight = nums1[i]
			} else {
				minOfRight = int(math.Min(float64(nums1[i]), float64(nums2[j])))
			}

			return float64(maxOfLeft+minOfRight) / 2.0
		}
	}
	return 0.0
}

func main() {
	nums1 := []int{1, 3}
	nums2 := []int{2}
	fmt.Println(findMedianSortedArrays(nums1, nums2)) // Output: 2

	nums1 = []int{1, 2}
	nums2 = []int{3, 4}
	fmt.Println(findMedianSortedArrays(nums1, nums2)) // Output: 2.5
}
\`\`\`

**Explanation:**
- The function uses binary search on the smaller array to find a partition such that the left and right halves of the combined arrays are balanced.
- It handles both even and odd total lengths.
- The median is either the maximum of the left elements (for odd total length) or the average of the maximum of the left and the minimum of the right (for even total length).
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T11:58:47.999016Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"2425d271-d68a-40e9-b0b7-f875400e1df7",question:"How do you implement a concurrent-safe map in Go?",answer:`\`\`\`markdown
### How do you implement a concurrent-safe map in Go?

In Go, the built-in \`map\` type is **not safe for concurrent use**. To implement a concurrent-safe map, you have several options:

#### 1. Using \`sync.Map\`

Go's standard library provides \`sync.Map\`, which is designed for concurrent use without explicit locking.

\`\`\`go
import (
    "fmt"
    "sync"
)

func main() {
    var m sync.Map

    // Store a value
    m.Store("foo", 42)

    // Load a value
    if value, ok := m.Load("foo"); ok {
        fmt.Println("Found:", value)
    }

    // Delete a value
    m.Delete("foo")
}
\`\`\`

#### 2. Using \`sync.RWMutex\` with a Regular Map

For more control (e.g., custom logic), you can wrap a regular map with a \`sync.RWMutex\`:

\`\`\`go
import (
    "fmt"
    "sync"
)

type SafeMap struct {
    mu sync.RWMutex
    m  map[string]int
}

func NewSafeMap() *SafeMap {
    return &SafeMap{
        m: make(map[string]int),
    }
}

func (s *SafeMap) Get(key string) (int, bool) {
    s.mu.RLock()
    defer s.mu.RUnlock()
    val, ok := s.m[key]
    return val, ok
}

func (s *SafeMap) Set(key string, value int) {
    s.mu.Lock()
    defer s.mu.Unlock()
    s.m[key] = value
}

func (s *SafeMap) Delete(key string) {
    s.mu.Lock()
    defer s.mu.Unlock()
    delete(s.m, key)
}

func main() {
    sm := NewSafeMap()
    sm.Set("foo", 42)
    if val, ok := sm.Get("foo"); ok {
        fmt.Println("Found:", val)
    }
    sm.Delete("foo")
}
\`\`\`

#### Summary

- Use \`sync.Map\` for simple concurrent maps.
- Use a map protected by \`sync.RWMutex\` for more flexibility or custom logic.
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T11:58:47.999028Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"c472af58-6538-4b5a-a6c3-863fb4fa6766",question:"How do you implement the producer-consumer problem using channels in Go?",answer:`\`\`\`markdown
### Producer-Consumer Problem Using Channels in Go

The **producer-consumer problem** is a classic example of a multi-process synchronization problem. In Go, channels provide a simple and powerful way to solve this problem by allowing safe communication between goroutines.

Below is an example implementation where:
- The **producer** generates integers and sends them to a buffered channel.
- The **consumer** receives integers from the channel and processes them.
- The channel is closed by the producer to signal completion.

\`\`\`go
package main

import (
    "fmt"
    "time"
)

// Producer function
func producer(ch chan<- int, count int) {
    for i := 1; i <= count; i++ {
        fmt.Printf("Producing: %d\\n", i)
        ch <- i // Send data to channel
        time.Sleep(time.Millisecond * 500) // Simulate work
    }
    close(ch) // Close channel when done
}

// Consumer function
func consumer(ch <-chan int, done chan<- bool) {
    for item := range ch { // Receives until channel is closed
        fmt.Printf("Consuming: %d\\n", item)
        time.Sleep(time.Millisecond * 800) // Simulate work
    }
    done <- true // Signal completion
}

func main() {
    ch := make(chan int, 5) // Buffered channel
    done := make(chan bool)

    go producer(ch, 10)
    go consumer(ch, done)

    <-done // Wait for consumer to finish
    fmt.Println("All items produced and consumed.")
}
\`\`\`

#### Key Points:
- **Buffered channels** help decouple producer and consumer speeds.
- The producer closes the channel to indicate no more items will be sent.
- The consumer uses \`range\` to receive until the channel is closed.
- A \`done\` channel is used to signal the main goroutine when processing is complete.

This approach leverages Go's concurrency primitives for a clean and safe solution to the producer-consumer problem.
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T11:58:47.999040Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"12c679ae-e8d7-4c18-bf31-e86959d8e0a5",question:"How do you find all permutations of a string in Go?",answer:`\`\`\`markdown
## How do you find all permutations of a string in Go?

To find all permutations of a string in Go, you can use a recursive approach. The idea is to fix each character at the current position and recursively generate all permutations for the remaining characters.

Here's a sample implementation:

\`\`\`go
package main

import (
	"fmt"
)

// Helper function to swap characters in a slice
func swap(s []rune, i, j int) {
	s[i], s[j] = s[j], s[i]
}

// Recursive function to generate permutations
func permute(s []rune, l, r int, result *[]string) {
	if l == r {
		*result = append(*result, string(s))
	} else {
		for i := l; i <= r; i++ {
			swap(s, l, i)
			permute(s, l+1, r, result)
			swap(s, l, i) // backtrack
		}
	}
}

// Function to return all permutations of a string
func getPermutations(str string) []string {
	var result []string
	s := []rune(str)
	permute(s, 0, len(s)-1, &result)
	return result
}

func main() {
	str := "abc"
	perms := getPermutations(str)
	fmt.Println("Permutations of", str, ":")
	for _, p := range perms {
		fmt.Println(p)
	}
}
\`\`\`

### Output
\`\`\`
Permutations of abc :
abc
acb
bac
bca
cba
cab
\`\`\`

**Explanation:**
- The \`permute\` function recursively generates all permutations by swapping characters.
- The \`swap\` function exchanges two characters in the slice.
- The \`getPermutations\` function initializes the process and collects results.

This approach ensures all possible orderings of the input string are generated.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-21T11:58:47.999066Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"3ef10fd6-d11b-4b2e-867e-d511f5c037a4",question:"How do you implement memoization for recursive algorithms in Go?",answer:`\`\`\`markdown Certainly! Here’s an explanation and example of implementing memoization for recursive algorithms in Go.

---

## How to Implement Memoization for Recursive Algorithms in Go

Memoization is a technique to optimize recursive algorithms by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

### Steps:

1. **Create a cache (map) to store results.**
2. **Before computing, check if the result is already in the cache.**
3. **If not, compute and store the result in the cache.**
4. **Return the cached result.**

### Example: Fibonacci with Memoization

\`\`\`go
package main

import (
    "fmt"
)

// fibMemo is a helper function that takes the number n and a memoization map.
func fibMemo(n int, memo map[int]int) int {
    if n <= 1 {
        return n
    }
    // Check if result is already in the memo
    if val, exists := memo[n]; exists {
        return val
    }
    // Compute and store in memo
    memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo)
    return memo[n]
}

func main() {
    n := 10
    memo := make(map[int]int)
    fmt.Printf("Fibonacci(%d) = %d\\n", n, fibMemo(n, memo))
}
\`\`\`

### Output

\`\`\`
Fibonacci(10) = 55
\`\`\`

### Key Points

- The \`memo\` map stores previously computed Fibonacci numbers.
- Before each recursive call, the function checks if the value is already computed.
- This approach reduces the time complexity from exponential to linear for Fibonacci.

---

You can apply this memoization pattern to other recursive problems in Go by using a map to cache results based on input parameters.`,level:"Intermediate",created_at:"2025-04-21T11:58:47.999078Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"37c5ff0e-1e23-4508-8de6-0553cbc964e8",question:"How do you implement a doubly linked list in Go?",answer:`\`\`\`markdown
## How do you implement a doubly linked list in Go?

A doubly linked list is a data structure where each node contains a value and pointers to both the next and previous nodes. This allows traversal in both directions.

Below is a simple implementation of a doubly linked list in Go:

\`\`\`go
package main

import "fmt"

// Node represents a node in the doubly linked list
type Node struct {
    value int
    prev  *Node
    next  *Node
}

// DoublyLinkedList represents the linked list
type DoublyLinkedList struct {
    head *Node
    tail *Node
}

// InsertAtEnd adds a new node at the end of the list
func (dll *DoublyLinkedList) InsertAtEnd(value int) {
    newNode := &Node{value: value}
    if dll.head == nil {
        dll.head = newNode
        dll.tail = newNode
        return
    }
    dll.tail.next = newNode
    newNode.prev = dll.tail
    dll.tail = newNode
}

// Delete removes the first node with the given value
func (dll *DoublyLinkedList) Delete(value int) {
    current := dll.head
    for current != nil {
        if current.value == value {
            if current.prev != nil {
                current.prev.next = current.next
            } else {
                dll.head = current.next
            }
            if current.next != nil {
                current.next.prev = current.prev
            } else {
                dll.tail = current.prev
            }
            return
        }
        current = current.next
    }
}

// Display prints the list from head to tail
func (dll *DoublyLinkedList) Display() {
    current := dll.head
    for current != nil {
        fmt.Print(current.value, " ")
        current = current.next
    }
    fmt.Println()
}

func main() {
    dll := &DoublyLinkedList{}
    dll.InsertAtEnd(1)
    dll.InsertAtEnd(2)
    dll.InsertAtEnd(3)
    dll.Display() // Output: 1 2 3

    dll.Delete(2)
    dll.Display() // Output: 1 3
}
\`\`\`

**Explanation:**
- Each \`Node\` has a \`value\`, a pointer to the previous node (\`prev\`), and a pointer to the next node (\`next\`).
- The \`DoublyLinkedList\` struct keeps track of the \`head\` and \`tail\`.
- \`InsertAtEnd\` adds a new node at the end.
- \`Delete\` removes the first node with the given value.
- \`Display\` prints the list from head to tail.

This is a basic implementation; you can add more methods as needed (like insertion at the beginning, reverse traversal, etc.).
\`\`\`
`,level:"Intermediate",created_at:"2025-04-21T11:58:47.999091Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"eeeafc0d-7301-42a5-bf94-201706b6bac2",question:"How do you implement the Sieve of Eratosthenes to find prime numbers in Go?",answer:`\`\`\`markdown
### How do you implement the Sieve of Eratosthenes to find prime numbers in Go?

The Sieve of Eratosthenes is an efficient algorithm to find all prime numbers up to a given number \`n\`. It works by iteratively marking the multiples of each prime number starting from 2.

Here's how you can implement it in Go:

\`\`\`go
package main

import (
    "fmt"
)

// SieveOfEratosthenes returns a slice of all prime numbers up to n
func SieveOfEratosthenes(n int) []int {
    if n < 2 {
        return []int{}
    }

    // Create a boolean slice to track prime numbers
    isPrime := make([]bool, n+1)
    for i := 2; i <= n; i++ {
        isPrime[i] = true
    }

    for i := 2; i*i <= n; i++ {
        if isPrime[i] {
            for j := i * i; j <= n; j += i {
                isPrime[j] = false
            }
        }
    }

    // Collect all prime numbers
    primes := []int{}
    for i := 2; i <= n; i++ {
        if isPrime[i] {
            primes = append(primes, i)
        }
    }
    return primes
}

func main() {
    n := 30
    primes := SieveOfEratosthenes(n)
    fmt.Println("Prime numbers up to", n, ":", primes)
}
\`\`\`

**Output:**
\`\`\`
Prime numbers up to 30 : [2 3 5 7 11 13 17 19 23 29]
\`\`\`

**Explanation:**
- We create a boolean slice \`isPrime\` to keep track of which numbers are prime.
- We initialize all entries as \`true\` (except 0 and 1).
- For each number \`i\` starting from 2, if it's marked as prime, we mark all its multiples as not prime.
- Finally, we collect all numbers that are still marked as prime.

This algorithm has a time complexity of O(n log log n).
\`\`\`
`,level:"Beginner",created_at:"2025-04-21T11:58:47.999104Z",topic:"ad898ac4-4b4f-4708-aa5c-fe48de29104a"},{id:"40c0de51-89dd-42fd-aa0f-87d875704b5d",question:"What is a sorting algorithm?",answer:`\`\`\`markdown A **sorting algorithm** is a method or process used to arrange elements in a list or array in a specific order, such as ascending or descending. Sorting makes it easier to search, analyze, and visualize data. Common sorting algorithms include Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, and Quick Sort.

In Go, you can implement sorting algorithms manually or use the built-in sort package, which provides efficient sorting functions for slices of basic types.

**Example:** Sorting an integer slice in ascending order using the sort package in Go:

\`\`\`go
package main

import (
    "fmt"
    "sort"
)

func main() {
    numbers := []int{5, 2, 9, 1, 5, 6}
    sort.Ints(numbers)
    fmt.Println(numbers) // Output: [1 2 5 5 6 9]
}
\`\`\`

Sorting algorithms are fundamental in computer science and are widely used in various applications.`,level:"Beginner",created_at:"2025-04-21T12:16:44.449684Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"ea67d6be-3e51-41d2-b78c-fabc948ab9d6",question:"Name at least three common sorting algorithms.",answer:`\`\`\`markdown **Answer:**

Here are three common sorting algorithms:

1. **Bubble Sort**
2. **Selection Sort**
3. **Insertion Sort**

These algorithms are often used for educational purposes and are easy to implement in Go and other programming languages.`,level:"Beginner",created_at:"2025-04-21T12:16:44.449710Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"aef3e28e-99b0-473a-84e9-4dd46041c301",question:"How do you sort a slice of integers in Go using the standard library?",answer:`\`\`\`markdown To sort a slice of integers in Go using the standard library, you can use the sort package. Specifically, use sort.Ints, which sorts a slice of ints in increasing order.

Here's an example:

\`\`\`go
package main

import (
    "fmt"
    "sort"
)

func main() {
    nums := []int{5, 2, 9, 1, 5, 6}
    sort.Ints(nums)
    fmt.Println(nums) // Output: [1 2 5 5 6 9]
}
\`\`\`

**Explanation:**
- Import the sort package.
- Call sort.Ints(slice) to sort the slice in place.
- The original slice is modified to be in ascending order.`,level:"Beginner",created_at:"2025-04-21T12:16:44.449724Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"fe320306-9cd8-4413-86ad-3cc671cf9f31",question:"What package in Go provides sorting utilities?",answer:'```markdown The sort package in Go provides sorting utilities. You can import it using:\n\n```go\nimport "sort"\n```\n\nThis package offers functions to sort slices of built-in types (like int, float64, and string) and also allows custom sorting by implementing the sort.Interface.',level:"Beginner",created_at:"2025-04-21T12:16:44.449749Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"20232831-7b4e-4499-9007-67e5a07cf7f8",question:"What is the difference between stable and unstable sorting algorithms?",answer:`\`\`\`markdown **Difference Between Stable and Unstable Sorting Algorithms**

- **Stable Sorting Algorithm:**  
  A sorting algorithm is called *stable* if it preserves the relative order of elements with equal keys (values). That means, if two items are equal, they will appear in the same order in the sorted output as they did in the input.

  **Example:**  
  If you sort the following list of pairs by the first value:  
  \`\`\`
  [(2, 'a'), (1, 'b'), (2, 'c')]
  \`\`\`
  After stable sorting, the order of \`(2, 'a')\` and \`(2, 'c')\` will remain the same.

- **Unstable Sorting Algorithm:**  
  An *unstable* sorting algorithm does **not** guarantee to preserve the relative order of equal elements. The order of equal items may change after sorting.

  **Example:**  
  Sorting the same list above with an unstable algorithm could result in:  
  \`\`\`
  [(1, 'b'), (2, 'c'), (2, 'a')]
  \`\`\`
  Here, the order of \`(2, 'a')\` and \`(2, 'c')\` is not preserved.

---

**In Go:**  
- The \`sort.Stable\` function in Go uses a stable sorting algorithm.
- The \`sort.Sort\` function may use an unstable sorting algorithm, depending on the implementation.

**Summary Table:**

| Property      | Stable Sort         | Unstable Sort        |
|---------------|--------------------|----------------------|
| Order of equal elements | Preserved           | Not preserved         |
| Example in Go | \`sort.Stable\`      | \`sort.Sort\`          |`,level:"Beginner",created_at:"2025-04-21T12:16:44.449761Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"40cb2cd1-3432-4533-a600-cd9753d38d48",question:"How do you sort a slice of strings in Go?",answer:`\`\`\`markdown To sort a slice of strings in Go, you can use the sort package from the standard library. The sort.Strings function sorts a slice of strings in increasing order (lexicographically).

Here's an example:

\`\`\`go
package main

import (
    "fmt"
    "sort"
)

func main() {
    names := []string{"Charlie", "Alice", "Bob"}
    sort.Strings(names)
    fmt.Println(names) // Output: [Alice Bob Charlie]
}
\`\`\`

**Explanation:**
- Import the sort package.
- Call sort.Strings(yourSlice) to sort the slice in place.
- The original slice is modified to be in sorted order.`,level:"Beginner",created_at:"2025-04-21T12:16:44.449772Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"a3a48222-3221-464a-b99c-4dbfd6a25896",question:"What is the time complexity of Bubble Sort?",answer:`\`\`\`markdown **Bubble Sort** has a time complexity of:

- **Best Case:** O(n) (when the array is already sorted)
- **Average Case:** O(n²)
- **Worst Case:** O(n²)

Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process is repeated until the list is sorted, which leads to its quadratic time complexity in most cases.`,level:"Beginner",created_at:"2025-04-21T12:16:44.449784Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"41d1e917-a75d-499b-a9a8-ee0c63c8ff8b",question:"How do you implement Bubble Sort in Go?",answer:`\`\`\`markdown Certainly! Here’s how you can implement Bubble Sort in Go:

\`\`\`go
package main

import (
    "fmt"
)

func bubbleSort(arr []int) {
    n := len(arr)
    for i := 0; i < n-1; i++ {
        for j := 0; j < n-i-1; j++ {
            if arr[j] > arr[j+1] {
                // Swap arr[j] and arr[j+1]
                arr[j], arr[j+1] = arr[j+1], arr[j]
            }
        }
    }
}

func main() {
    nums := []int{5, 2, 9, 1, 5, 6}
    fmt.Println("Before sorting:", nums)
    bubbleSort(nums)
    fmt.Println("After sorting: ", nums)
}
\`\`\`

**Explanation:**
- The function \`bubbleSort\` takes a slice of integers and sorts it in ascending order.
- It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
- This process is repeated until the list is sorted.

**Output:**
\`\`\`
Before sorting: [5 2 9 1 5 6]
After sorting:  [1 2 5 5 6 9]
\`\`\``,level:"Beginner",created_at:"2025-04-21T12:16:44.449796Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"2edb21dc-aa5b-4b80-871e-bd5bb2f820cb",question:"What is the time complexity of Insertion Sort?",answer:`\`\`\`markdown **Answer:**

The time complexity of Insertion Sort is:

- **Best Case:** O(n) &nbsp;*(when the array is already sorted)*
- **Average Case:** O(n²)
- **Worst Case:** O(n²) &nbsp;*(when the array is sorted in reverse order)*

Where **n** is the number of elements in the array.`,level:"Beginner",created_at:"2025-04-21T12:16:44.449815Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"a1dc2a48-d734-4e12-9151-fa7f49a04c44",question:"How do you implement Selection Sort in Go?",answer:`\`\`\`go
package main

import (
    "fmt"
)

// selectionSort sorts an integer slice using the Selection Sort algorithm.
func selectionSort(arr []int) {
    n := len(arr)
    for i := 0; i < n-1; i++ {
        minIdx := i
        // Find the minimum element in the unsorted part
        for j := i + 1; j < n; j++ {
            if arr[j] < arr[minIdx] {
                minIdx = j
            }
        }
        // Swap the found minimum element with the first element
        arr[i], arr[minIdx] = arr[minIdx], arr[i]
    }
}

func main() {
    arr := []int{64, 25, 12, 22, 11}
    fmt.Println("Original array:", arr)
    selectionSort(arr)
    fmt.Println("Sorted array:  ", arr)
}
\`\`\`

**Explanation:**
- The selectionSort function iterates through the array, finds the minimum element in the unsorted part, and swaps it with the first unsorted element.
- This process repeats until the array is sorted.
- The main function demonstrates sorting an example array.`,level:"Beginner",created_at:"2025-04-21T12:16:44.449834Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"c054190a-ceba-4969-9ab4-69b4ed21817a",question:"What is the difference between Insertion Sort and Selection Sort?",answer:`\`\`\`markdown **Difference between Insertion Sort and Selection Sort in Go**

| Aspect            | Insertion Sort                                                                 | Selection Sort                                                                 |
|-------------------|-------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| **How it works**  | Builds the sorted array one element at a time by inserting each item into its correct position. | Repeatedly selects the smallest (or largest) element from the unsorted part and swaps it with the first unsorted element. |
| **Stability**     | Stable (does not change the relative order of equal elements)                  | Unstable (may change the relative order of equal elements)                    |
| **Best Case Time**| O(n) (when the array is already sorted)                                        | O(n²)                                                                         |
| **Worst Case Time**| O(n²)                                                                         | O(n²)                                                                         |
| **Number of Swaps**| Can be up to O(n²), but usually fewer than Selection Sort                     | Always O(n) swaps (one per pass)                                              |
| **Use Case**      | Efficient for small or nearly sorted arrays                                    | Simple to implement, but not efficient for large datasets                     |

**Example in Go:**

\`\`\`go
// Insertion Sort
func insertionSort(arr []int) {
    for i := 1; i < len(arr); i++ {
        key := arr[i]
        j := i - 1
        for j >= 0 && arr[j] > key {
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = key
    }
}

// Selection Sort
func selectionSort(arr []int) {
    n := len(arr)
    for i := 0; i < n-1; i++ {
        minIdx := i
        for j := i + 1; j < n; j++ {
            if arr[j] < arr[minIdx] {
                minIdx = j
            }
        }
        arr[i], arr[minIdx] = arr[minIdx], arr[i]
    }
}
\`\`\`

**Summary:**  
- Insertion Sort is better for nearly sorted arrays and is stable.
- Selection Sort is simple but less efficient and not stable.`,level:"Beginner",created_at:"2025-04-21T12:16:44.449845Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"4973b313-5711-47a5-8bac-9236472c7f6e",question:"How do you sort a slice of structs by a specific field in Go?",answer:`\`\`\`markdown To sort a slice of structs by a specific field in Go, you can use the sort.Slice function from the sort package. You provide the slice and a less function that defines the sorting logic based on the struct field.

Here's an example:

\`\`\`go
package main

import (
    "fmt"
    "sort"
)

type Person struct {
    Name string
    Age  int
}

func main() {
    people := []Person{
        {"Alice", 30},
        {"Bob", 25},
        {"Charlie", 35},
    }

    // Sort by Age (ascending)
    sort.Slice(people, func(i, j int) bool {
        return people[i].Age < people[j].Age
    })

    fmt.Println("Sorted by Age:", people)

    // Sort by Name (alphabetically)
    sort.Slice(people, func(i, j int) bool {
        return people[i].Name < people[j].Name
    })

    fmt.Println("Sorted by Name:", people)
}
\`\`\`

**Explanation:**

- \`sort.Slice\` takes the slice and a comparison function.
- The comparison function returns true if the element at index \`i\` should come before the element at index \`j\`.
- You can customize the comparison logic to sort by any field (e.g., \`Age\`, \`Name\`).

**Output:**
\`\`\`
Sorted by Age: [{Bob 25} {Alice 30} {Charlie 35}]
Sorted by Name: [{Alice 30} {Bob 25} {Charlie 35}]
\`\`\`

This approach is flexible and idiomatic for sorting slices of structs in Go.`,level:"Intermediate",created_at:"2025-04-21T12:16:44.449863Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"891886d6-7f5f-48d9-8134-e7ec6e351190",question:"Explain how the sort.Interface works in Go.",answer:`\`\`\`markdown Certainly! Here’s an explanation in markdown format:

---

## How \`sort.Interface\` Works in Go

Go’s standard library provides a flexible way to sort slices of any type using the \`sort.Interface\`. This interface allows you to define custom sorting logic for your data structures.

### The \`sort.Interface\`

To use Go’s sorting facilities, a type must implement the following three methods:

\`\`\`go
type Interface interface {
    Len() int           // returns the number of elements
    Less(i, j int) bool // reports whether element i should sort before element j
    Swap(i, j int)      // swaps the elements with indexes i and j
}
\`\`\`

### How It Works

1. **Len()**: Returns the length of the collection.
2. **Less(i, j int) bool**: Returns \`true\` if the element at index \`i\` should come before the element at index \`j\`.
3. **Swap(i, j int)**: Swaps the elements at indices \`i\` and \`j\`.

Once your type implements these methods, you can sort it using \`sort.Sort()\`:

\`\`\`go
sort.Sort(yourType)
\`\`\`

### Example

Suppose you have a slice of structs:

\`\`\`go
type Person struct {
    Name string
    Age  int
}

type ByAge []Person

func (a ByAge) Len() int           { return len(a) }
func (a ByAge) Less(i, j int) bool { return a[i].Age < a[j].Age }
func (a ByAge) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
\`\`\`

You can now sort a slice of \`Person\` by age:

\`\`\`go
people := []Person{
    {"Alice", 30},
    {"Bob", 25},
    {"Charlie", 35},
}

sort.Sort(ByAge(people))
\`\`\`

### Summary

- Implement \`Len()\`, \`Less(i, j int)\`, and \`Swap(i, j int)\` for your type.
- Use \`sort.Sort()\` to sort your collection.
- This approach allows sorting of any data structure, not just basic types.

---`,level:"Intermediate",created_at:"2025-04-21T12:16:44.449875Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"ee70f1a8-19a5-4946-bd81-7d2f1f33c187",question:"How do you implement Merge Sort in Go?",answer:`\`\`\`markdown Certainly! Here’s how you can implement Merge Sort in Go:

\`\`\`go
package main

import (
    "fmt"
)

// merge merges two sorted slices into one sorted slice
func merge(left, right []int) []int {
    result := make([]int, 0, len(left)+len(right))
    i, j := 0, 0

    for i < len(left) && j < len(right) {
        if left[i] < right[j] {
            result = append(result, left[i])
            i++
        } else {
            result = append(result, right[j])
            j++
        }
    }

    // Append remaining elements (if any)
    result = append(result, left[i:]...)
    result = append(result, right[j:]...)

    return result
}

// mergeSort recursively sorts the slice using merge sort algorithm
func mergeSort(arr []int) []int {
    if len(arr) <= 1 {
        return arr
    }

    mid := len(arr) / 2
    left := mergeSort(arr[:mid])
    right := mergeSort(arr[mid:])

    return merge(left, right)
}

func main() {
    arr := []int{38, 27, 43, 3, 9, 82, 10}
    sorted := mergeSort(arr)
    fmt.Println("Sorted array:", sorted)
}
\`\`\`

**Explanation:**

- The \`mergeSort\` function recursively splits the array into halves until each subarray has one element.
- The \`merge\` function combines two sorted slices into a single sorted slice.
- In \`main\`, you can test the function with an example array.

**Output:**
\`\`\`
Sorted array: [3 9 10 27 38 43 82]
\`\`\`

This is a classic implementation of Merge Sort in Go.`,level:"Intermediate",created_at:"2025-04-21T12:16:44.449886Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"ec4f3f5e-735d-44da-a07c-dd7ba2bef73b",question:"What is the time complexity of Merge Sort?",answer:`\`\`\`markdown **Merge Sort** is a divide-and-conquer sorting algorithm. Its time complexity is:

- **Best Case:** O(n log n)
- **Average Case:** O(n log n)
- **Worst Case:** O(n log n)

Where **n** is the number of elements to be sorted.

**Explanation:**  
Merge Sort recursively divides the array into halves (log n levels), and at each level, it merges all elements (n operations per level). Thus, the total time complexity is **O(n log n)**.`,level:"Intermediate",created_at:"2025-04-21T12:16:44.449898Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"4ba2c72b-8a37-4092-9323-534928ac9061",question:"How does Quick Sort work?",answer:`\`\`\`markdown **Quick Sort in Go: How It Works**

Quick Sort is a popular divide-and-conquer sorting algorithm. It works by selecting a "pivot" element from the array and partitioning the other elements into two sub-arrays: those less than the pivot and those greater than the pivot. The process is then recursively applied to the sub-arrays.

### Steps of Quick Sort

1. **Choose a Pivot:** Select an element from the array as the pivot (commonly the first, last, or a random element).
2. **Partitioning:** Rearrange the array so that all elements less than the pivot come before it, and all elements greater come after it.
3. **Recursion:** Recursively apply the above steps to the sub-arrays of elements with smaller and larger values.

### Example in Go

\`\`\`go
func quickSort(arr []int) []int {
    if len(arr) < 2 {
        return arr
    }
    left, right := 0, len(arr)-1

    // Choose the pivot
    pivot := rand.Int() % len(arr)

    // Move the pivot to the right
    arr[pivot], arr[right] = arr[right], arr[pivot]

    // Partitioning
    for i := range arr {
        if arr[i] < arr[right] {
            arr[i], arr[left] = arr[left], arr[i]
            left++
        }
    }

    // Move pivot to its final place
    arr[left], arr[right] = arr[right], arr[left]

    // Recursively sort left and right subarrays
    quickSort(arr[:left])
    quickSort(arr[left+1:])

    return arr
}
\`\`\`

### Key Points

- **Time Complexity:** Average case is O(n log n), but worst case is O(n²) (rare with good pivot selection).
- **In-place:** Quick Sort sorts the array in place, requiring little extra memory.
- **Not Stable:** The relative order of equal elements may not be preserved.

Quick Sort is efficient for large datasets and is widely used in practice due to its speed and simplicity.`,level:"Intermediate",created_at:"2025-04-21T12:16:44.449914Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"621622e4-d553-43f8-a94a-23c23e99d2d4",question:"How do you implement Quick Sort in Go?",answer:`\`\`\`markdown Certainly! Here’s how you can implement Quick Sort in Go:

\`\`\`go
package main

import (
    "fmt"
)

// quickSort recursively sorts the slice using the Quick Sort algorithm.
func quickSort(arr []int) []int {
    if len(arr) < 2 {
        return arr
    }

    left, right := 0, len(arr)-1

    // Choose the pivot (here, the rightmost element)
    pivot := arr[right]

    // Partitioning
    for i := range arr {
        if arr[i] < pivot {
            arr[i], arr[left] = arr[left], arr[i]
            left++
        }
    }
    // Place pivot in its correct position
    arr[left], arr[right] = arr[right], arr[left]

    // Recursively sort elements before and after partition
    quickSort(arr[:left])
    quickSort(arr[left+1:])

    return arr
}

func main() {
    arr := []int{10, 7, 8, 9, 1, 5}
    fmt.Println("Unsorted:", arr)
    sorted := quickSort(arr)
    fmt.Println("Sorted:  ", sorted)
}
\`\`\`

**Explanation:**

- The function \`quickSort\` uses recursion to sort the array.
- It selects the last element as the pivot.
- Elements less than the pivot are moved to the left, and greater ones to the right.
- The pivot is placed in its correct sorted position.
- The process is repeated recursively for the left and right subarrays.

**Output:**
\`\`\`
Unsorted: [10 7 8 9 1 5]
Sorted:   [1 5 7 8 9 10]
\`\`\`

This is a simple and efficient implementation of Quick Sort in Go.`,level:"Intermediate",created_at:"2025-04-21T12:16:44.449927Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"8870fa05-52fd-4885-85d1-07aee848e4eb",question:"What is the average and worst-case time complexity of Quick Sort?",answer:`\`\`\`markdown **Quick Sort** is a popular sorting algorithm that uses the divide-and-conquer approach.

- **Average-case time complexity:**  
  $O(n \\log n)$

- **Worst-case time complexity:**  
  $O(n^2)$

The worst-case occurs when the pivot selection consistently results in highly unbalanced partitions (for example, when the smallest or largest element is always chosen as the pivot in a sorted or nearly sorted array). However, with good pivot selection strategies (like choosing a random pivot or using the median-of-three method), the average-case performance is typically $O(n \\log n)$.`,level:"Intermediate",created_at:"2025-04-21T12:16:44.449940Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"1f8af3ef-b0b0-4fff-ac35-d746e2d87246",question:"How do you sort a custom data type in Go?",answer:`\`\`\`markdown To sort a custom data type in Go, you need to implement the sort.Interface for your type. This involves defining three methods: \`Len()\`, \`Less(i, j int)\`, and \`Swap(i, j int)\`. Then, you can use \`sort.Sort()\` to sort your data.

Here's an example:

\`\`\`go
package main

import (
    "fmt"
    "sort"
)

// Define a custom data type
type Person struct {
    Name string
    Age  int
}

// Create a slice of Person
type ByAge []Person

// Implement sort.Interface for ByAge
func (a ByAge) Len() int           { return len(a) }
func (a ByAge) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
func (a ByAge) Less(i, j int) bool { return a[i].Age < a[j].Age }

func main() {
    people := []Person{
        {"Alice", 30},
        {"Bob", 25},
        {"Charlie", 35},
    }

    // Sort by age
    sort.Sort(ByAge(people))

    fmt.Println(people)
}
\`\`\`

**Output:**
\`\`\`
[{Bob 25} {Alice 30} {Charlie 35}]
\`\`\`

**Explanation:**
- Define a type (\`ByAge\`) that is a slice of your custom type.
- Implement \`Len()\`, \`Swap()\`, and \`Less()\` for that type.
- Use \`sort.Sort()\` to sort the slice according to your custom logic.

Alternatively, for simple cases, you can use \`sort.Slice()\` with a less function:

\`\`\`go
sort.Slice(people, func(i, j int) bool {
    return people[i].Age < people[j].Age
})
\`\`\`

This approach is more concise and doesn't require defining a new type.`,level:"Intermediate",created_at:"2025-04-21T12:16:44.449951Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"923c8eeb-cecf-4fa0-87b4-29b2955c7bbe",question:"What are the advantages of using Merge Sort over Quick Sort?",answer:`\`\`\`markdown **Advantages of Using Merge Sort Over Quick Sort in Go**

1. **Stable Sorting**  
   Merge Sort is a stable sort, meaning that it preserves the relative order of equal elements. Quick Sort is not stable by default.

2. **Guaranteed O(n log n) Time Complexity**  
   Merge Sort always runs in O(n log n) time, regardless of the input data. Quick Sort, while having an average time complexity of O(n log n), can degrade to O(n²) in the worst case (e.g., when the pivot choices are poor).

3. **Better Performance on Linked Lists**  
   Merge Sort works efficiently with linked lists because it does not require random access to elements, whereas Quick Sort is less efficient on linked lists.

4. **Predictable Performance**  
   Since Merge Sort's time complexity does not depend on the input distribution, it is more predictable and reliable for time-critical applications.

5. **External Sorting**  
   Merge Sort is well-suited for external sorting (sorting data that does not fit into memory), as it accesses data sequentially and can efficiently merge large sorted chunks.

**Example in Go:**

\`\`\`go
import "sort"

// Go's sort package provides a stable sort (uses merge sort for large slices)
sort.Stable(yourSlice)
\`\`\`

**Summary Table**

| Feature                | Merge Sort         | Quick Sort         |
|------------------------|-------------------|--------------------|
| Stability              | Stable            | Not stable         |
| Worst-case Complexity  | O(n log n)        | O(n²)              |
| Linked List Support    | Efficient         | Inefficient        |
| External Sorting       | Suitable          | Not suitable       |
| In-place Sorting       | No                | Yes                |

**Conclusion:**  
Use Merge Sort in Go when you need stable sorting, predictable performance, or need to sort linked lists or data that doesn't fit into memory. For most in-memory array sorting, Quick Sort is often faster and uses less memory, but Merge Sort has the above advantages in specific scenarios.`,level:"Intermediate",created_at:"2025-04-21T12:16:44.449963Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"1dc66973-8c4e-4a26-94f2-3c073640f904",question:"How do you perform a descending sort in Go?",answer:`\`\`\`markdown To perform a descending sort in Go, you can use the sort package along with the sort.Sort function and sort.Reverse wrapper. Here's how you can do it for a slice of integers:

\`\`\`go
package main

import (
    "fmt"
    "sort"
)

func main() {
    nums := []int{5, 2, 9, 1, 5, 6}
    sort.Sort(sort.Reverse(sort.IntSlice(nums)))
    fmt.Println(nums) // Output: [9 6 5 5 2 1]
}
\`\`\`

**Explanation:**

- \`sort.IntSlice(nums)\` converts the slice to a type that implements sort.Interface.
- \`sort.Reverse(...)\` wraps this type to reverse the sorting order (descending).
- \`sort.Sort(...)\` sorts the slice in-place.

**For custom types**, implement the sort.Interface and wrap it with sort.Reverse in the same way.

**Example with strings:**

\`\`\`go
words := []string{"banana", "apple", "cherry"}
sort.Sort(sort.Reverse(sort.StringSlice(words)))
fmt.Println(words) // Output: [cherry banana apple]
\`\`\`

This approach works for all types supported by the sort package.`,level:"Intermediate",created_at:"2025-04-21T12:16:44.449976Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"e91b8a8b-cffb-4b58-a591-9818abefeadb",question:"What is the purpose of the Less method in sort.Interface?",answer:"```markdown The Less method in Go's sort.Interface is used to define the ordering between elements in a collection. When you implement sort.Interface for a type, you must provide three methods: Len(), Swap(), and Less(). The Less method specifically determines whether the element at index i should sort before the element at index j.\n\nHere’s a summary in markdown format:\n\n```markdown\n### What is the purpose of the `Less` method in `sort.Interface`?\n\nThe `Less` method is used to compare two elements in a collection and determine their order. It should return `true` if the element at index `i` should come before the element at index `j` in the sorted order.\n\nWhen you implement the `sort.Interface` in Go, you define the sorting logic by implementing:\n\n- `Len() int` — returns the number of elements.\n- `Swap(i, j int)` — swaps the elements at indices `i` and `j`.\n- `Less(i, j int) bool` — returns `true` if element at `i` should sort before element at `j`.\n\nThe sorting algorithm uses the `Less` method to decide how to order the elements.\n\n#### Example\n\n```go\ntype People []Person\n\nfunc (p People) Len() int           { return len(p) }\nfunc (p People) Swap(i, j int)      { p[i], p[j] = p[j], p[i] }\nfunc (p People) Less(i, j int) bool { return p[i].Age < p[j].Age }\n```\n\nIn this example, `Less` sorts people by age in ascending order.\n```\n",level:"Intermediate",created_at:"2025-04-21T12:16:44.449988Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"81ffd531-e5f5-4d9c-8d8d-467b15f1be3a",question:"How do you check if a slice is already sorted in Go?",answer:`\`\`\`markdown
In Go, you can check if a slice is already sorted by using the \`sort\` package, which provides the \`sort.SliceIsSorted\` function for generic slices and specific functions like \`sort.IntsAreSorted\`, \`sort.StringsAreSorted\`, and \`sort.Float64sAreSorted\` for slices of basic types.

### Example: Checking if an \`int\` slice is sorted

\`\`\`go
package main

import (
    "fmt"
    "sort"
)

func main() {
    nums := []int{1, 2, 3, 4, 5}
    if sort.IntsAreSorted(nums) {
        fmt.Println("The slice is sorted.")
    } else {
        fmt.Println("The slice is not sorted.")
    }
}
\`\`\`

### Example: Checking if a custom slice is sorted

For slices of custom types or when you want to define your own comparison, use \`sort.SliceIsSorted\`:

\`\`\`go
package main

import (
    "fmt"
    "sort"
)

type Person struct {
    Name string
    Age  int
}

func main() {
    people := []Person{
        {"Alice", 21},
        {"Bob", 25},
        {"Charlie", 30},
    }
    sorted := sort.SliceIsSorted(people, func(i, j int) bool {
        return people[i].Age < people[j].Age
    })
    if sorted {
        fmt.Println("The slice is sorted by age.")
    } else {
        fmt.Println("The slice is not sorted by age.")
    }
}
\`\`\`

### Summary

- Use \`sort.IntsAreSorted\`, \`sort.StringsAreSorted\`, or \`sort.Float64sAreSorted\` for basic types.
- Use \`sort.SliceIsSorted\` for custom types or custom sort orders.
\`\`\`
`,level:"Intermediate",created_at:"2025-04-21T12:16:44.450001Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"c427bf0c-34e6-4880-9d14-cc414615425c",question:"What is the difference between sort.Sort and sort.Stable in Go?",answer:`\`\`\`markdown
In Go, both \`sort.Sort\` and \`sort.Stable\` are used to sort slices, but they differ in how they handle elements with equal values (i.e., elements that compare as "equal" according to the comparison function).

### \`sort.Sort\`
- Uses an **unstable sorting algorithm** (typically quicksort).
- The **relative order of equal elements is not guaranteed to be preserved**.
- Faster in practice for most cases due to less overhead.

**Example:**
\`\`\`go
sort.Sort(sort.IntSlice{3, 2, 2, 1})
\`\`\`

### \`sort.Stable\`
- Uses a **stable sorting algorithm** (typically insertion sort for small slices, merge sort for larger ones).
- **Preserves the relative order of equal elements**.
- Slightly slower due to the extra work needed to maintain stability.

**Example:**
\`\`\`go
sort.Stable(sort.IntSlice{3, 2, 2, 1})
\`\`\`

### When to Use Which?
- Use \`sort.Sort\` when you do **not care** about the order of equal elements and want potentially better performance.
- Use \`sort.Stable\` when you **need to preserve** the original order of equal elements (important for multi-level sorting).

### Summary Table

| Function      | Stability | Performance | Use Case                                  |
|---------------|-----------|-------------|--------------------------------------------|
| \`sort.Sort\`   | Unstable  | Faster      | When order of equal elements doesn't matter|
| \`sort.Stable\` | Stable    | Slower      | When order of equal elements must be kept  |
\`\`\`
`,level:"Intermediate",created_at:"2025-04-21T12:16:44.450014Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"e0b46682-2f9a-4268-9ad2-04db22eb74f7",question:"How does Heap Sort work and how can it be implemented in Go?",answer:`\`\`\`markdown ### Heap Sort: How It Works

Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure. It works in two main phases:

1. **Build a Max Heap:** Rearrange the array into a max heap, where the largest element is at the root.
2. **Extract Elements:** Repeatedly remove the largest element (the root), swap it with the last item, reduce the heap size, and heapify the root. Repeat until the heap is empty.

**Time Complexity:**  
- Worst, Average, Best: O(n log n)

**Space Complexity:**  
- O(1) (in-place)

---

### Heap Sort Implementation in Go

\`\`\`go
package main

import "fmt"

// Heapify a subtree rooted at index i in arr[]
func heapify(arr []int, n, i int) {
    largest := i
    left := 2*i + 1
    right := 2*i + 2

    // If left child is larger than root
    if left < n && arr[left] > arr[largest] {
        largest = left
    }

    // If right child is larger than largest so far
    if right < n && arr[right] > arr[largest] {
        largest = right
    }

    // If largest is not root
    if largest != i {
        arr[i], arr[largest] = arr[largest], arr[i] // Swap

        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest)
    }
}

// Main function to do heap sort
func heapSort(arr []int) {
    n := len(arr)

    // Build max heap
    for i := n/2 - 1; i >= 0; i-- {
        heapify(arr, n, i)
    }

    // Extract elements from heap one by one
    for i := n - 1; i > 0; i-- {
        arr[0], arr[i] = arr[i], arr[0] // Swap
        heapify(arr, i, 0)
    }
}

func main() {
    arr := []int{12, 11, 13, 5, 6, 7}
    fmt.Println("Unsorted array:", arr)
    heapSort(arr)
    fmt.Println("Sorted array:  ", arr)
}
\`\`\`

---

### Key Points

- Heap Sort is **not stable** (equal elements may not retain their order).
- It is **in-place** (does not require extra memory).
- Useful for large datasets where memory usage is a concern.

---

**Summary:**  
Heap Sort builds a max heap from the input, then repeatedly extracts the maximum element and rebuilds the heap, resulting in a sorted array. The Go implementation above demonstrates this process.`,level:"Intermediate",created_at:"2025-04-21T12:16:44.450026Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"e6c90726-2823-438d-968f-c210b45b491d",question:"What is the time complexity of Heap Sort?",answer:`\`\`\`markdown **Heap Sort Time Complexity in Go**

Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure. Its time complexities are as follows:

- **Best Case:** O(n log n)
- **Average Case:** O(n log n)
- **Worst Case:** O(n log n)

This is because both the heap construction and the repeated removal of the maximum element (and subsequent heapification) each take O(log n) time, and these operations are performed n times.

**Summary Table:**

| Case         | Time Complexity |
|--------------|----------------|
| Best         | O(n log n)     |
| Average      | O(n log n)     |
| Worst        | O(n log n)     |

Heap Sort is efficient and guarantees O(n log n) performance regardless of the input data.`,level:"Intermediate",created_at:"2025-04-21T12:16:44.450037Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"cc201a7c-101f-4bbf-a929-5f6f7abc207d",question:"How do you sort a map by its values in Go?",answer:`\`\`\`markdown To sort a map by its values in Go, you need to extract the keys, sort them based on their corresponding values, and then use the sorted keys to access the map in value order. Here's how you can do it:

\`\`\`go
package main

import (
    "fmt"
    "sort"
)

// Example: Sorting a map[string]int by its values
func main() {
    m := map[string]int{
        "apple":  5,
        "banana": 2,
        "orange": 8,
        "grape":  3,
    }

    // Step 1: Extract keys into a slice
    keys := make([]string, 0, len(m))
    for k := range m {
        keys = append(keys, k)
    }

    // Step 2: Sort keys based on map values
    sort.Slice(keys, func(i, j int) bool {
        return m[keys[i]] < m[keys[j]] // Ascending order
    })

    // Step 3: Iterate over sorted keys
    fmt.Println("Sorted by value:")
    for _, k := range keys {
        fmt.Printf("%s: %d\\n", k, m[k])
    }
}
\`\`\`

**Output:**
\`\`\`
Sorted by value:
banana: 2
grape: 3
apple: 5
orange: 8
\`\`\`

**Explanation:**

- Maps in Go are inherently unordered, so you can't sort them directly.
- By extracting the keys and sorting them using sort.Slice with a custom comparison (based on the map's values), you can achieve a value-based ordering.
- You can then use the sorted keys to access the map's values in order.

**Note:**  
This approach works for any map type; just adjust the key and value types as needed. For descending order, change the comparison to m[keys[i]] > m[keys[j]].`,level:"Intermediate",created_at:"2025-04-21T12:16:44.450049Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"6d6e9960-b84b-404b-a98c-a94209ed2a58",question:"What is Counting Sort and when is it appropriate to use it?",answer:`\`\`\`markdown Counting Sort in Go
-------------------

**Counting Sort** is a non-comparison-based sorting algorithm that sorts elements by counting the number of occurrences of each unique value in the input array. It then uses this count information to place each element directly into its correct position in the output array.

### How Counting Sort Works

1. **Find the Range:** Determine the minimum and maximum values in the array.
2. **Count Occurrences:** Create a count array where each index corresponds to a value in the input array. Increment the count for each occurrence.
3. **Cumulative Count:** Modify the count array so that each element at each index stores the sum of previous counts. This helps in placing elements in the correct position.
4. **Build Output:** Iterate over the input array and place each element in its sorted position using the count array.

### Example in Go

\`\`\`go
func countingSort(arr []int) []int {
    if len(arr) == 0 {
        return arr
    }
    min, max := arr[0], arr[0]
    for _, v := range arr {
        if v < min { min = v }
        if v > max { max = v }
    }
    count := make([]int, max-min+1)
    for _, v := range arr {
        count[v-min]++
    }
    index := 0
    for i, c := range count {
        for c > 0 {
            arr[index] = i + min
            index++
            c--
        }
    }
    return arr
}
\`\`\`

### When to Use Counting Sort

Counting Sort is **appropriate** when:

- The range of input values (max - min) is not significantly larger than the number of elements to sort.
- The input consists of integers or objects that can be mapped to integers.
- You need a stable and fast sorting algorithm for small ranges.

**Not suitable** for:

- Sorting floating-point numbers or large ranges of integers.
- Cases where the range of input values is much larger than the number of elements (as it would require a large count array, wasting memory).

### Time and Space Complexity

- **Time Complexity:** O(n + k), where n is the number of elements and k is the range of input.
- **Space Complexity:** O(k)

### Summary Table

| Feature         | Counting Sort                  |
|-----------------|-------------------------------|
| Type            | Non-comparison-based           |
| Best Use Case   | Small range of integer values  |
| Stability       | Stable                         |
| Time Complexity | O(n + k)                       |
| Space Complexity| O(k)                           |

Counting Sort is a powerful tool for sorting integers efficiently when the range of values is limited and known in advance.`,level:"Intermediate",created_at:"2025-04-21T12:16:44.450061Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"decaa8be-c4cc-4cd5-8c3a-d152498332ae",question:"How do you implement Counting Sort in Go?",answer:`\`\`\`markdown Certainly! Here’s how you can implement Counting Sort in Go:

\`\`\`go
package main

import (
    "fmt"
)

// CountingSort sorts an array of non-negative integers using counting sort algorithm
func CountingSort(arr []int) []int {
    if len(arr) == 0 {
        return arr
    }

    // Find the maximum value in arr
    max := arr[0]
    for _, v := range arr {
        if v > max {
            max = v
        }
    }

    // Initialize count array
    count := make([]int, max+1)

    // Store the count of each element
    for _, v := range arr {
        count[v]++
    }

    // Build the sorted array
    idx := 0
    sorted := make([]int, len(arr))
    for i, c := range count {
        for c > 0 {
            sorted[idx] = i
            idx++
            c--
        }
    }

    return sorted
}

func main() {
    arr := []int{4, 2, 2, 8, 3, 3, 1}
    sortedArr := CountingSort(arr)
    fmt.Println("Sorted array:", sortedArr)
}
\`\`\`

**Explanation:**

- **CountingSort** works efficiently for sorting arrays of non-negative integers where the range of input values is not significantly greater than the number of elements.
- The algorithm:
  1. Finds the maximum value to determine the size of the count array.
  2. Counts the occurrences of each value.
  3. Iterates through the count array to reconstruct the sorted output.

**Note:**  
Counting Sort is not suitable for sorting arrays with negative numbers or very large ranges unless you adjust the implementation accordingly.`,level:"Intermediate",created_at:"2025-04-21T12:16:44.450073Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"05200977-06bf-45be-a0a4-dd3c5b1c7218",question:"What is Radix Sort and what are its advantages?",answer:`\`\`\`markdown
## Radix Sort in Go

**Radix Sort** is a non-comparative integer sorting algorithm that sorts data with integer keys by grouping keys by individual digits that share the same significant position and value. It processes the digits of the numbers from the least significant digit (LSD) to the most significant digit (MSD), or vice versa, depending on the implementation.

### How Radix Sort Works

1. **Digit by Digit Sorting:** Radix Sort sorts the numbers digit by digit, starting from either the least significant digit (LSD) or the most significant digit (MSD).
2. **Stable Sub-sorting:** For each digit position, a stable sorting algorithm (like Counting Sort) is used to sort the numbers based on that digit.
3. **Multiple Passes:** The process is repeated for each digit position until the entire list is sorted.

### Example in Go

\`\`\`go
package main

import (
    "fmt"
)

func getMax(arr []int) int {
    max := arr[0]
    for _, v := range arr {
        if v > max {
            max = v
        }
    }
    return max
}

func countingSort(arr []int, exp int) {
    n := len(arr)
    output := make([]int, n)
    count := make([]int, 10)

    for i := 0; i < n; i++ {
        index := (arr[i] / exp) % 10
        count[index]++
    }

    for i := 1; i < 10; i++ {
        count[i] += count[i-1]
    }

    for i := n - 1; i >= 0; i-- {
        index := (arr[i] / exp) % 10
        output[count[index]-1] = arr[i]
        count[index]--
    }

    for i := 0; i < n; i++ {
        arr[i] = output[i]
    }
}

func radixSort(arr []int) {
    max := getMax(arr)
    for exp := 1; max/exp > 0; exp *= 10 {
        countingSort(arr, exp)
    }
}

func main() {
    arr := []int{170, 45, 75, 90, 802, 24, 2, 66}
    radixSort(arr)
    fmt.Println(arr)
}
\`\`\`

### Advantages of Radix Sort

- **Linear Time Complexity:** For fixed-length integer keys, Radix Sort can achieve O(nk) time complexity, where n is the number of elements and k is the number of digits in the largest number. This can be faster than comparison-based algorithms like Quick Sort or Merge Sort for large datasets with small key sizes.
- **Stable Sorting:** Radix Sort is stable, meaning that it preserves the relative order of elements with equal keys.
- **Efficient for Large Data:** Particularly efficient for sorting large sets of integers or strings (when treated as sequences of characters/digits).
- **No Comparisons:** Unlike comparison-based sorts, Radix Sort does not compare elements directly, which can be advantageous for certain data types.

### Limitations

- **Restricted to Integers or Strings:** Radix Sort is generally applicable to data that can be broken down into digits or characters (like integers or fixed-length strings).
- **Extra Space:** Requires additional space for temporary arrays (like the output and count arrays in Counting Sort).
- **Not In-Place:** Standard implementations are not in-place due to the use of auxiliary arrays.

### Summary Table

| Feature            | Radix Sort         |
|--------------------|-------------------|
| Time Complexity    | O(nk)             |
| Space Complexity   | O(n + k)          |
| Stable             | Yes               |
| In-place           | No                |
| Comparison-based   | No                |
| Best for           | Integers, Strings |

Radix Sort is a powerful tool in the right context, especially when dealing with large datasets of integers or strings where comparison-based sorts become less efficient.
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T12:16:44.450084Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"1e74b54d-ca93-4d7c-bd68-fab919b3def7",question:"How do you implement Radix Sort in Go?",answer:`\`\`\`go
// Radix Sort implementation in Go

package main

import (
    "fmt"
)

// getMax finds the maximum value in the array
func getMax(arr []int) int {
    max := arr[0]
    for _, v := range arr {
        if v > max {
            max = v
        }
    }
    return max
}

// countingSort performs a counting sort based on the digit represented by exp
func countingSort(arr []int, exp int) {
    n := len(arr)
    output := make([]int, n)
    count := make([]int, 10) // base 10 digits

    // Store count of occurrences in count[]
    for i := 0; i < n; i++ {
        index := (arr[i] / exp) % 10
        count[index]++
    }

    // Change count[i] so that count[i] now contains actual
    // position of this digit in output[]
    for i := 1; i < 10; i++ {
        count[i] += count[i-1]
    }

    // Build the output array
    for i := n - 1; i >= 0; i-- {
        index := (arr[i] / exp) % 10
        output[count[index]-1] = arr[i]
        count[index]--
    }

    // Copy the output array to arr[], so that arr[] now
    // contains sorted numbers according to current digit
    for i := 0; i < n; i++ {
        arr[i] = output[i]
    }
}

// radixSort sorts arr[] using Radix Sort algorithm
func radixSort(arr []int) {
    // Find the maximum number to know number of digits
    max := getMax(arr)

    // Do counting sort for every digit. Note that instead
    // of passing digit number, exp is passed. exp is 10^i
    // where i is current digit number
    for exp := 1; max/exp > 0; exp *= 10 {
        countingSort(arr, exp)
    }
}

func main() {
    arr := []int{170, 45, 75, 90, 802, 24, 2, 66}
    fmt.Println("Original array:", arr)
    radixSort(arr)
    fmt.Println("Sorted array:  ", arr)
}
\`\`\`

**Explanation:**

- Radix Sort sorts numbers digit by digit starting from the least significant digit (LSD).
- It uses a stable sub-sorting algorithm (here, Counting Sort) for each digit position.
- The algorithm first finds the maximum number to determine the number of digits.
- For each digit position (units, tens, hundreds, ...), it sorts the array using Counting Sort based on that digit.
- The process repeats for each digit position until the entire array is sorted.

**Note:**  
This implementation works for non-negative integers. For negative numbers, you would need to adapt the algorithm.`,level:"Advanced",created_at:"2025-04-21T12:16:44.450095Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"f2eb9b8f-d896-4b02-bdde-1b3805cbabfc",question:"What is Bucket Sort and how does it differ from Counting Sort?",answer:`\`\`\`markdown
### Bucket Sort in Go

**Bucket Sort** is a sorting algorithm that distributes elements of an array into several groups called "buckets." Each bucket is then sorted individually, either using a different sorting algorithm or recursively applying the bucket sort. Finally, the sorted buckets are concatenated to form the final sorted array.

#### How Bucket Sort Works:
1. **Divide**: The input array is divided into a number of buckets.
2. **Distribute**: Each element is placed into a bucket based on a mapping function (often based on value range).
3. **Sort Buckets**: Each bucket is sorted individually, often using another sorting algorithm (like Insertion Sort).
4. **Concatenate**: The sorted buckets are combined to form the final sorted array.

#### Example in Go:
\`\`\`go
func bucketSort(arr []float64) []float64 {
    n := len(arr)
    if n <= 0 {
        return arr
    }

    // 1. Create n empty buckets
    buckets := make([][]float64, n)

    // 2. Put array elements in different buckets
    for _, num := range arr {
        idx := int(num * float64(n))
        buckets[idx] = append(buckets[idx], num)
    }

    // 3. Sort individual buckets
    for i := 0; i < n; i++ {
        sort.Float64s(buckets[i])
    }

    // 4. Concatenate all buckets into arr[]
    idx := 0
    for _, bucket := range buckets {
        for _, num := range bucket {
            arr[idx] = num
            idx++
        }
    }
    return arr
}
\`\`\`

---

### How Bucket Sort Differs from Counting Sort

| Feature            | Bucket Sort                                         | Counting Sort                                  |
|--------------------|----------------------------------------------------|------------------------------------------------|
| **Approach**       | Distributes elements into buckets, sorts buckets   | Counts occurrences of each value               |
| **Data Type**      | Works well with uniformly distributed floating-point or integer data | Works best with integers in a small range      |
| **Sorting**        | Each bucket is sorted individually                 | No comparison-based sorting; uses counting     |
| **Stability**      | Can be stable if stable sort is used for buckets   | Stable by nature                               |
| **Time Complexity**| O(n + k), where k is the number of buckets         | O(n + k), where k is the range of input        |
| **Space Complexity**| O(n + k)                                          | O(n + k)                                       |
| **Use Case**       | When input is uniformly distributed over a range   | When input is integers in a limited range      |

#### Key Differences:
- **Bucket Sort** is more general and can handle floating-point numbers, while **Counting Sort** is limited to integers.
- **Bucket Sort** divides data into ranges (buckets) and sorts each range, whereas **Counting Sort** counts the frequency of each unique element.
- **Counting Sort** is not comparison-based, while **Bucket Sort** may use comparison-based sorting within buckets.

---

**Summary:**  
Bucket Sort is ideal for sorting data that is uniformly distributed over a range (including floating-point numbers), while Counting Sort is best for sorting integers within a small, known range. The main difference lies in how they organize and process the data: Bucket Sort groups and sorts, Counting Sort counts and reconstructs.
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T12:16:44.450108Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"12874759-4a33-4d90-9387-584d142e8cbd",question:"How do you implement Bucket Sort in Go?",answer:`\`\`\`go
// Bucket Sort implementation in Go

package main

import (
	"fmt"
	"sort"
)

// bucketSort sorts an array of float64 numbers using Bucket Sort algorithm.
func bucketSort(arr []float64) []float64 {
	n := len(arr)
	if n <= 0 {
		return arr
	}

	// 1. Create n empty buckets
	buckets := make([][]float64, n)

	// 2. Put array elements in different buckets
	for _, num := range arr {
		// Assuming the input is in [0,1)
		index := int(num * float64(n))
		buckets[index] = append(buckets[index], num)
	}

	// 3. Sort individual buckets
	for i := range buckets {
		sort.Float64s(buckets[i])
	}

	// 4. Concatenate all buckets into arr[]
	result := make([]float64, 0, n)
	for _, bucket := range buckets {
		result = append(result, bucket...)
	}

	return result
}

func main() {
	arr := []float64{0.42, 0.32, 0.23, 0.52, 0.25, 0.47, 0.51}
	fmt.Println("Original array:", arr)
	sorted := bucketSort(arr)
	fmt.Println("Sorted array:  ", sorted)
}
\`\`\`

**Explanation:**

- **Bucket Sort** works best when input is uniformly distributed over a range (commonly [0, 1)).
- The array is divided into \`n\` buckets (where \`n\` is the length of the array).
- Each element is placed in a bucket based on its value.
- Each bucket is sorted individually (using Go's built-in \`sort.Float64s\`).
- Finally, all buckets are concatenated to produce the sorted array.

**Note:**  
If your input is not in [0, 1), you should normalize it before applying bucket sort. Adjust the bucket index calculation accordingly for different ranges.`,level:"Advanced",created_at:"2025-04-21T12:16:44.450120Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"f576e6cd-44aa-44ef-806f-a6f6db1cb3c0",question:"What is TimSort and does Go use it in its standard library?",answer:`\`\`\`markdown **TimSort** is a hybrid sorting algorithm derived from merge sort and insertion sort. It was designed to perform well on many kinds of real-world data and is the default sorting algorithm in languages like Python and Java (for object arrays). TimSort works by identifying small runs of already sorted elements in the data, then merging them efficiently. Its time complexity is O(n log n) in the worst case, and it performs especially well on partially ordered datasets.

**Does Go use TimSort in its standard library?**

No, Go does **not** use TimSort in its standard library. Instead, Go’s sort package (as of Go 1.18+) uses a variant of **SymMerge sort** for general sorting (sort.Sort and sort.Slice), which is a stable, in-place merge sort. For small slices, Go uses insertion sort for efficiency. For numeric slices (like sort.Ints), Go uses an optimized version of **quick sort** (with some tweaks for worst-case performance).

**Summary Table**

| Language | Default Sort Algorithm | Stable? | TimSort Used? |
|----------|-----------------------|---------|--------------|
| Python   | TimSort               | Yes     | Yes          |
| Java     | TimSort (objects)     | Yes     | Yes          |
| Go       | SymMerge/QuickSort    | Yes/No  | No           |

**References:**
- [Go source code: sort package](https://github.com/golang/go/blob/master/src/sort/sort.go)
- [TimSort Wikipedia](https://en.wikipedia.org/wiki/Timsort)`,level:"Advanced",created_at:"2025-04-21T12:16:44.450132Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"401721f4-bdce-4b57-a3f0-79605a8e9bbc",question:"How does Go's sort package choose which sorting algorithm to use?",answer:`\`\`\`markdown
Go's \`sort\` package uses an adaptive sorting algorithm that selects the most efficient method based on the data and the type being sorted. Here's how it works:

### 1. For Built-in Types (\`sort.Ints\`, \`sort.Strings\`, etc.)

- **Small Arrays (length < 12):**  
  Go uses **insertion sort** for small slices because it has low overhead and performs well on small datasets.

- **Larger Arrays:**  
  Go uses a variant of **quicksort** (specifically, a non-recursive version with median-of-three partitioning and a fallback to heap sort for worst-case scenarios). This approach provides good average-case performance and avoids stack overflows.

### 2. For Custom Types (\`sort.Sort\` with \`sort.Interface\`)

- The same adaptive approach is used:
  - **Insertion sort** for small slices.
  - **Quicksort** for larger slices, with a fallback to **heap sort** if the recursion depth exceeds a certain limit (to guard against pathological cases).

### 3. Stability

- The basic \`sort.Sort\` is **not stable** (equal elements may not retain their original order).
- For stable sorting, Go provides \`sort.Stable\`, which uses a **stable mergesort** algorithm.

### Summary Table

| Data Size      | Algorithm Used   | Stability   |
|----------------|------------------|-------------|
| Small (<12)    | Insertion Sort   | Unstable    |
| Large          | Quicksort/Heap   | Unstable    |
| \`sort.Stable\`  | Mergesort        | Stable      |

### References

- [Go source code: sort package](https://github.com/golang/go/blob/master/src/sort/sort.go)
- [Go Blog: Sorting slices and user-defined collections](https://blog.golang.org/slices-intro)

**In summary:**  
Go's \`sort\` package adaptively chooses between insertion sort, quicksort, and heap sort for efficiency and safety, and uses mergesort for stable sorting.
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T12:16:44.450144Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"39215201-0342-4231-8ff3-bddb1d0f7625",question:"What are the memory requirements of Merge Sort compared to Quick Sort?",answer:`\`\`\`markdown ### Memory Requirements of Merge Sort vs Quick Sort in Go

#### **Merge Sort**
- **Space Complexity:**  
  - **O(n)** auxiliary space.
  - Merge Sort requires additional memory to store temporary arrays during the merging process.
  - For an array of size \`n\`, it typically allocates a new array of size \`n\` for merging.
- **In Go:**  
  - When implementing Merge Sort, you usually create slices to hold the left and right halves, leading to extra memory usage proportional to the input size.

#### **Quick Sort**
- **Space Complexity:**  
  - **O(log n)** auxiliary space (best and average case, due to recursion stack).
  - **O(n)** in the worst case (when the pivot choices are poor and recursion depth increases).
  - Quick Sort is an **in-place** sorting algorithm, so it does not require extra arrays for sorting.
- **In Go:**  
  - The standard implementation uses recursion, so the main memory overhead comes from the call stack, not from allocating new arrays.

---

#### **Summary Table**

| Algorithm    | Auxiliary Space | In-place? | Notes                                              |
|--------------|----------------|-----------|----------------------------------------------------|
| Merge Sort   | O(n)           | No        | Needs extra arrays for merging                     |
| Quick Sort   | O(log n) avg   | Yes       | Only uses stack space for recursion                |
|              | O(n) worst     |           | Worst case with poor pivot selection               |

---

#### **Conclusion**
- **Merge Sort** uses more memory than **Quick Sort** because it requires additional arrays for merging.
- **Quick Sort** is generally more memory-efficient, especially with good pivot selection, as it sorts in-place and only needs stack space for recursion.

---

**References:**
- [Go Programming Language: Sorting Algorithms](https://golang.org/pkg/sort/)
- [Merge Sort vs Quick Sort - GeeksforGeeks](https://www.geeksforgeeks.org/merge-sort-vs-quick-sort/)`,level:"Advanced",created_at:"2025-04-21T12:16:44.450156Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"074faa98-63dc-4820-b28b-4638e44e16cd",question:"How do you optimize sorting for large datasets in Go?",answer:`\`\`\`markdown Optimizing Sorting for Large Datasets in Go
===========================================

When dealing with large datasets in Go, sorting efficiently is crucial for performance and resource management. Here are advanced strategies and best practices to optimize sorting in Go:

1. **Choose the Right Algorithm**
   - Go’s standard library uses an adaptive, hybrid sorting algorithm (\`sort.Sort\`, \`sort.Ints\`, etc.), which is efficient for most cases.
   - For very large datasets, consider external or parallel sorting if data doesn't fit in memory.

2. **Minimize Memory Allocations**
   - Use slices instead of creating new arrays during sorting.
   - Implement the \`sort.Interface\` directly on your data structure to avoid copying.

3. **Parallel Sorting**
   - For CPU-bound sorts on multi-core systems, split the dataset and sort chunks in parallel using goroutines, then merge the results.
   - Example using goroutines and channels:

     \`\`\`go
     func parallelSort(data []int, workers int) []int {
         chunkSize := (len(data) + workers - 1) / workers
         sortedChunks := make([][]int, workers)
         var wg sync.WaitGroup

         for i := 0; i < workers; i++ {
             start := i * chunkSize
             end := start + chunkSize
             if end > len(data) {
                 end = len(data)
             }
             wg.Add(1)
             go func(i, start, end int) {
                 defer wg.Done()
                 chunk := make([]int, end-start)
                 copy(chunk, data[start:end])
                 sort.Ints(chunk)
                 sortedChunks[i] = chunk
             }(i, start, end)
         }
         wg.Wait()
         // Merge sortedChunks here (e.g., k-way merge)
         return mergeChunks(sortedChunks)
     }
     \`\`\`

4. **External Sorting**
   - For datasets larger than available memory, use external sorting: split data into chunks, sort each chunk, write to disk, then merge sorted chunks.
   - Libraries like [external-sort](https://github.com/gnulab/external-sort) can help, or implement your own using file I/O.

5. **Custom Comparators and Stable Sort**
   - Use \`sort.SliceStable\` for stable sorting when order preservation is needed.
   - Implement custom comparators for complex data structures to avoid unnecessary conversions.

6. **Avoid Reflection**
   - Prefer \`sort.Slice\` over \`sort.Sort\` with reflection-based interfaces for better performance.

7. **Profile and Benchmark**
   - Use Go’s \`pprof\` and \`testing\` packages to benchmark and profile your sorting code.
   - Identify bottlenecks and optimize accordingly.

8. **Leverage Specialized Libraries**
   - For highly specialized needs, consider third-party libraries like [gonum](https://github.com/gonum/gonum) for scientific data or [sortutil](https://github.com/shenwei356/sortutil) for large file sorting.

**Example: Efficient In-Memory Sort**

\`\`\`go
sort.Slice(data, func(i, j int) bool {
    return data[i].Key < data[j].Key
})
\`\`\`

**Summary Table**

| Technique                | Use Case                                 | Benefit                |
|--------------------------|------------------------------------------|------------------------|
| Standard sort            | Fits in memory, general use              | Simplicity, speed      |
| Parallel sort            | Multi-core CPUs, large in-memory data    | Faster sorting         |
| External sort            | Data exceeds memory                      | Scalability            |
| Custom comparators       | Complex data structures                  | Flexibility            |
| Avoid reflection         | Performance-critical applications        | Speed                  |

**References**
- [Go sort package documentation](https://pkg.go.dev/sort)
- [Go Blog: Sorting slices and user-defined collections](https://blog.golang.org/slices-intro)

By combining these techniques, you can efficiently sort large datasets in Go, balancing speed, memory usage, and code maintainability.`,level:"Advanced",created_at:"2025-04-21T12:16:44.450175Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"05ec1237-96d4-4940-912b-5860b15bf2c6",question:"How can you parallelize sorting in Go?",answer:`\`\`\`markdown ### Parallelizing Sorting in Go

Parallelizing sorting in Go can significantly improve performance on large datasets by utilizing multiple CPU cores. The most common approach is to parallelize **divide-and-conquer** sorting algorithms, such as **Merge Sort** or **Quick Sort**. Go's built-in concurrency primitives—**goroutines** and **channels**—make this relatively straightforward.

#### Example: Parallel Merge Sort

Below is an example of how you might parallelize Merge Sort in Go:

\`\`\`go
package main

import (
    "fmt"
    "sync"
)

// Merge merges two sorted slices into one sorted slice.
func Merge(left, right []int) []int {
    result := make([]int, 0, len(left)+len(right))
    i, j := 0, 0
    for i < len(left) && j < len(right) {
        if left[i] < right[j] {
            result = append(result, left[i])
            i++
        } else {
            result = append(result, right[j])
            j++
        }
    }
    result = append(result, left[i:]...)
    result = append(result, right[j:]...)
    return result
}

// ParallelMergeSort sorts the slice in parallel.
func ParallelMergeSort(arr []int, wg *sync.WaitGroup, depth int) []int {
    defer wg.Done()

    if len(arr) <= 1 {
        return arr
    }

    mid := len(arr) / 2
    var left, right []int

    // Limit the depth of parallelism to avoid oversubscription.
    if depth > 0 {
        var wgInner sync.WaitGroup
        wgInner.Add(2)
        go func() {
            left = ParallelMergeSort(arr[:mid], &wgInner, depth-1)
        }()
        go func() {
            right = ParallelMergeSort(arr[mid:], &wgInner, depth-1)
        }()
        wgInner.Wait()
    } else {
        left = ParallelMergeSort(arr[:mid], &sync.WaitGroup{}, 0)
        right = ParallelMergeSort(arr[mid:], &sync.WaitGroup{}, 0)
    }

    return Merge(left, right)
}

func main() {
    arr := []int{38, 27, 43, 3, 9, 82, 10}
    var wg sync.WaitGroup
    wg.Add(1)
    // Set depth to log2(numCPU) for optimal parallelism
    sorted := ParallelMergeSort(arr, &wg, 3)
    wg.Wait()
    fmt.Println(sorted)
}
\`\`\`

#### Key Points

- **Goroutines** are used to sort subarrays in parallel.
- **sync.WaitGroup** ensures all goroutines finish before merging results.
- **Depth control** prevents spawning too many goroutines, which could degrade performance.
- This approach can be adapted for other divide-and-conquer algorithms like Quick Sort.

#### Libraries

For production use, consider libraries like [sort](https://pkg.go.dev/sort) (standard, not parallel) or third-party packages such as [parsort](https://github.com/tylertreat/parallel-sort) for parallel sorting.

#### Summary Table

| Algorithm      | Parallelizable? | Typical Approach in Go          |
|----------------|----------------|---------------------------------|
| Merge Sort     | Yes            | Goroutines for subarrays        |
| Quick Sort     | Yes            | Goroutines for partitions       |
| Heap Sort      | No             | Not naturally parallelizable    |
| Bubble/Insertion| No            | Inefficient for parallelization |

---

**In summary:**  
Parallelizing sorting in Go involves splitting the data, sorting partitions concurrently using goroutines, and merging the results. Always balance the number of goroutines with available CPU cores for optimal performance.`,level:"Advanced",created_at:"2025-04-21T12:16:44.450241Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"e3acc279-2f97-48ed-b87b-7c19c0cacea9",question:"What are the trade-offs between stable and unstable sorting algorithms?",answer:`\`\`\`markdown ### Trade-offs Between Stable and Unstable Sorting Algorithms in Go

When choosing a sorting algorithm in Go (or any language), one important consideration is whether the algorithm is **stable** or **unstable**. Here’s a breakdown of the trade-offs:

#### Stable Sorting Algorithms

A **stable** sorting algorithm preserves the relative order of records with equal keys (i.e., values). For example, if two elements \`A\` and \`B\` are equal and \`A\` appears before \`B\` in the input, \`A\` will still appear before \`B\` in the output.

**Advantages:**
- **Preserves Order:** Useful when sorting complex data structures where secondary sorting criteria matter.
- **Predictable Results:** Multiple sorts on different keys can be chained without losing previous orderings.
- **Essential for Multi-level Sorting:** For example, sorting by last name, then by first name.

**Disadvantages:**
- **Potentially Slower:** Stable algorithms may require extra operations or memory to maintain stability.
- **Higher Memory Usage:** Some stable algorithms (like Merge Sort) require additional memory.

#### Unstable Sorting Algorithms

An **unstable** sorting algorithm does not guarantee the preservation of the relative order of equal elements.

**Advantages:**
- **Faster in Practice:** Some unstable algorithms (like Quick Sort or Heap Sort) are faster or have better average-case performance.
- **Lower Memory Overhead:** Many unstable algorithms are in-place and require less additional memory.

**Disadvantages:**
- **Order Not Preserved:** Can be problematic if the original order of equal elements is important.
- **Not Suitable for Multi-level Sorting:** Chaining sorts may not produce the expected results.

#### Go Standard Library Examples

- \`sort.Sort\`: Uses an **unstable** sorting algorithm (introsort).
- \`sort.Stable\`: Uses a **stable** sorting algorithm (merge sort).

#### Summary Table

| Aspect             | Stable Sort                | Unstable Sort             |
|--------------------|---------------------------|---------------------------|
| Order Preservation | Yes                        | No                        |
| Memory Usage       | Often higher               | Often lower               |
| Speed              | Sometimes slower           | Often faster              |
| Use Case           | Multi-level, complex data  | Simple, performance-critical |

#### When to Use Which?

- **Use stable sort** when the order of equal elements matters (e.g., multi-key sorting, sorting structs with multiple fields).
- **Use unstable sort** when performance is critical and the order of equal elements is irrelevant.

---

**In Go, choose \`sort.Stable\` for stability, and \`sort.Sort\` for performance when stability is not required.**`,level:"Advanced",created_at:"2025-04-21T12:16:44.450256Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"35031190-684a-4a54-bdf0-f34eaceeacf8",question:"How do you sort a slice of pointers in Go?",answer:`\`\`\`markdown To sort a slice of pointers in Go, you can use the sort.Slice function, which allows you to define a custom comparison for your data. Here’s how you can do it:

Suppose you have a struct and a slice of pointers to that struct:

\`\`\`go
type Person struct {
    Name string
    Age  int
}

people := []*Person{
    {Name: "Alice", Age: 30},
    {Name: "Bob", Age: 25},
    {Name: "Charlie", Age: 35},
}
\`\`\`

To sort people by Age in ascending order:

\`\`\`go
import "sort"

sort.Slice(people, func(i, j int) bool {
    return people[i].Age < people[j].Age
})
\`\`\`

**Explanation:**

- \`sort.Slice\` takes the slice and a less function.
- The less function receives indices \`i\` and \`j\` and should return true if \`people[i]\` should come before \`people[j]\`.
- Since \`people\` is a slice of pointers, you access fields with \`people[i].Age\`.

**Full Example:**

\`\`\`go
package main

import (
    "fmt"
    "sort"
)

type Person struct {
    Name string
    Age  int
}

func main() {
    people := []*Person{
        {Name: "Alice", Age: 30},
        {Name: "Bob", Age: 25},
        {Name: "Charlie", Age: 35},
    }

    sort.Slice(people, func(i, j int) bool {
        return people[i].Age < people[j].Age
    })

    for _, p := range people {
        fmt.Printf("%s: %d\\n", p.Name, p.Age)
    }
}
\`\`\`

**Output:**
\`\`\`
Bob: 25
Alice: 30
Charlie: 35
\`\`\`

**Summary:**  
To sort a slice of pointers in Go, use \`sort.Slice\` with a custom less function that dereferences the pointers as needed. This approach is flexible and works for any sorting criteria.`,level:"Advanced",created_at:"2025-04-21T12:16:44.450269Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"e6e17083-fa7b-49a9-8b52-3a362d316944",question:"How can you sort data in Go that does not fit into memory?",answer:`\`\`\`markdown To sort data in Go that does not fit into memory (external sorting), you typically use an **external sort** algorithm, such as an external merge sort. This approach involves breaking the data into manageable chunks, sorting each chunk individually, and then merging the sorted chunks. Here’s how you can approach this in Go:

## Steps for External Sorting in Go

1. **Divide the Data into Chunks**
   - Read the data from the source (file, stream, etc.) in chunks that fit into memory.
   - For each chunk:
     - Load it into memory.
     - Sort it using Go’s in-memory sorting (e.g., \`sort.Slice\`, \`sort.Ints\`, etc.).
     - Write the sorted chunk to a temporary file.

2. **Merge the Sorted Chunks**
   - Open all the sorted chunk files.
   - Use a min-heap (priority queue) to efficiently merge the sorted chunks:
     - Read the smallest element from each chunk.
     - Insert these elements into the heap.
     - Repeatedly extract the smallest element from the heap and write it to the output.
     - When you extract an element from a chunk, read the next element from that chunk and insert it into the heap.
   - Continue until all chunks are fully merged.

## Example Outline in Go

\`\`\`go
package main

import (
    "container/heap"
    "os"
    // ... other imports
)

// Define a struct for heap elements and implement heap.Interface

func main() {
    // 1. Read and sort chunks, write to temp files
    // 2. Open temp files and initialize heap
    // 3. Merge chunks using heap, write to output
}
\`\`\`

*Note: Implementing a full external sort is a non-trivial task and requires careful management of file I/O and memory.*

## Libraries and Tools

- **No built-in external sort in Go**: You need to implement the logic yourself or use third-party libraries.
- **Third-party options**: Libraries like [external-sort](https://github.com/gnames/external-sort) can help, or you can use Unix tools (e.g., \`sort\` command) from Go via \`os/exec\` if appropriate.

## References

- [External Sorting - Wikipedia](https://en.wikipedia.org/wiki/External_sorting)
- [Go sort package](https://pkg.go.dev/sort)

## Summary Table

| Step         | Description                              |
|--------------|------------------------------------------|
| Chunking     | Split data into memory-sized chunks      |
| Sorting      | Sort each chunk in memory                |
| Saving       | Write sorted chunks to temporary files   |
| Merging      | Merge sorted files using a min-heap      |

---

**In summary:**  
To sort data that does not fit into memory in Go, implement an external sort by chunking, sorting, saving, and merging using file I/O and a heap-based merge process. There is no built-in Go function for this, so you need to manage the process manually or use third-party tools.`,level:"Advanced",created_at:"2025-04-21T12:16:44.450281Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"d3679726-6897-4b96-82d6-c9c8caf28aee",question:"How do you benchmark the performance of different sorting algorithms in Go?",answer:`\`\`\`markdown
To benchmark the performance of different sorting algorithms in Go, you can use Go's built-in testing and benchmarking framework provided by the \`testing\` package. Here’s a step-by-step guide:

### 1. Implement Sorting Algorithms

Suppose you have two sorting functions: \`BubbleSort\` and \`QuickSort\`.

\`\`\`go
func BubbleSort(arr []int) {
    n := len(arr)
    for i := 0; i < n; i++ {
        for j := 0; j < n-i-1; j++ {
            if arr[j] > arr[j+1] {
                arr[j], arr[j+1] = arr[j+1], arr[j]
            }
        }
    }
}

func QuickSort(arr []int) {
    if len(arr) < 2 {
        return
    }
    left, right := 0, len(arr)-1
    pivot := rand.Int() % len(arr)
    arr[pivot], arr[right] = arr[right], arr[pivot]
    for i := range arr {
        if arr[i] < arr[right] {
            arr[i], arr[left] = arr[left], arr[i]
            left++
        }
    }
    arr[left], arr[right] = arr[right], arr[left]
    QuickSort(arr[:left])
    QuickSort(arr[left+1:])
}
\`\`\`

### 2. Write Benchmark Functions

Create a file named \`sort_bench_test.go\` and write benchmark functions. Use \`b.N\` to run the sort multiple times for reliable results.

\`\`\`go
package main

import (
    "math/rand"
    "testing"
)

func generateRandomSlice(size int) []int {
    arr := make([]int, size)
    for i := range arr {
        arr[i] = rand.Intn(100000)
    }
    return arr
}

func BenchmarkBubbleSort(b *testing.B) {
    for i := 0; i < b.N; i++ {
        arr := generateRandomSlice(1000)
        BubbleSort(arr)
    }
}

func BenchmarkQuickSort(b *testing.B) {
    for i := 0; i < b.N; i++ {
        arr := generateRandomSlice(1000)
        QuickSort(arr)
    }
}
\`\`\`

### 3. Run the Benchmarks

Use the following command to run the benchmarks:

\`\`\`sh
go test -bench=.
\`\`\`

This will output the time taken per operation for each sorting algorithm, allowing you to compare their performance.

### 4. Tips for Accurate Benchmarking

- **Avoid side effects:** Make sure each benchmark iteration uses a fresh copy of the data.
- **Use realistic data sizes:** Test with different array sizes to see how algorithms scale.
- **Control randomness:** Use a fixed seed for reproducibility if needed.
- **Profile memory:** Use \`go test -bench=. -benchmem\` to measure memory allocations.

### 5. Example Output

\`\`\`
BenchmarkBubbleSort-8        1    123456789 ns/op
BenchmarkQuickSort-8      1000      123456 ns/op
\`\`\`

### Summary

By leveraging Go's \`testing\` package and writing proper benchmark functions, you can systematically compare the performance of different sorting algorithms under various conditions.
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T12:16:44.450292Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"fbb3f655-3235-4940-b9de-741cad0127f1",question:"What are the best practices for sorting large files in Go?",answer:`\`\`\`markdown
## Best Practices for Sorting Large Files in Go

Sorting large files that do not fit entirely into memory requires special strategies beyond standard in-memory sorting. Here are some best practices for efficiently sorting large files in Go:

### 1. Use External Sorting (External Merge Sort)
- **Divide and Conquer:** Split the large file into manageable chunks that fit into memory.
- **Sort Each Chunk:** Load each chunk into memory, sort it (using Go's \`sort\` package), and write the sorted chunk back to disk as a temporary file.
- **Merge Chunks:** Use a k-way merge algorithm to merge all sorted chunks into a single sorted output file. This can be done efficiently using a min-heap (priority queue).

### 2. Stream Data Efficiently
- **Buffered I/O:** Use \`bufio.Reader\` and \`bufio.Writer\` for efficient reading and writing of large files.
- **Line-by-Line Processing:** Process files line by line or in blocks to avoid loading the entire file into memory.

### 3. Optimize Disk Usage
- **Temporary Files:** Store intermediate sorted chunks as temporary files using \`os.CreateTemp\`.
- **Clean Up:** Ensure temporary files are deleted after use to free up disk space.

### 4. Parallel Processing
- **Concurrent Sorting:** Sort different chunks in parallel using goroutines to utilize multiple CPU cores.
- **Channel Communication:** Use channels to coordinate between goroutines for reading, sorting, and merging.

### 5. Use Efficient Data Structures
- **Heap for Merging:** Use \`container/heap\` for efficient k-way merging of sorted chunks.
- **Custom Comparators:** Implement custom sorting logic by defining the \`sort.Interface\` for your data type.

### 6. Handle Large Records
- **Fixed vs. Variable Length:** If records are variable length, ensure your chunking logic does not split records.
- **Serialization:** For complex data, use efficient serialization formats (e.g., CSV, JSON, or binary).

### 7. Error Handling and Resource Management
- **Graceful Error Handling:** Check for errors at every I/O operation.
- **Resource Cleanup:** Use \`defer\` to close files and release resources.

### Example Libraries and Tools
- **sort package:** For in-memory sorting.
- **container/heap:** For merging sorted chunks.
- **github.com/cheggaaa/pb/v3:** For progress bars (optional).
- **Third-party tools:** Consider using or learning from tools like [gosort](https://github.com/psilva261/gosort) for inspiration.

### Sample Workflow

\`\`\`go
// Pseudocode for external merge sort in Go
1. Split the large file into N chunks.
2. For each chunk:
    a. Read into memory.
    b. Sort using sort.Slice or sort.Sort.
    c. Write sorted chunk to a temp file.
3. Merge all sorted temp files into the final sorted output using a min-heap.
\`\`\`

### References

- [External Sorting - Wikipedia](https://en.wikipedia.org/wiki/External_sorting)
- [Go sort package documentation](https://pkg.go.dev/sort)

---

**Summary:**  
For sorting large files in Go, use external merge sort, efficient buffered I/O, parallel processing, and proper resource management. Always handle errors and clean up temporary files. Use Go's standard library and consider third-party tools for inspiration.
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T12:16:44.450312Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"ed8236f3-8ea2-4ff7-9c67-31c45916085a",question:"How do you sort a slice of interfaces in Go?",answer:`\`\`\`markdown To sort a slice of interfaces in Go, you need to implement the sort.Interface for your slice. The sort.Interface requires three methods: Len(), Less(i, j int) bool, and Swap(i, j int). Once implemented, you can use the sort.Sort function from the sort package.

Here's an example of how to sort a slice of interface{} values (e.g., []interface{}) based on their integer values:

\`\`\`go
package main

import (
    "fmt"
    "sort"
)

// Define a type for a slice of interface{}
type InterfaceSlice []interface{}

// Implement sort.Interface
func (s InterfaceSlice) Len() int {
    return len(s)
}

func (s InterfaceSlice) Less(i, j int) bool {
    // Type assertion to int for comparison
    return s[i].(int) < s[j].(int)
}

func (s InterfaceSlice) Swap(i, j int) {
    s[i], s[j] = s[j], s[i]
}

func main() {
    // Example slice of interface{}
    data := InterfaceSlice{5, 2, 9, 1, 7}

    // Sort the slice
    sort.Sort(data)

    fmt.Println(data) // Output: [1 2 5 7 9]
}
\`\`\`

**Key Points:**
- You must define how to compare elements in the Less method, usually via type assertion.
- This approach works for any type, but you must handle type assertions and possible panics if types are mixed.
- For custom types, adjust the Less method accordingly.

**Note:**  
If you have a slice of a concrete type (e.g., []int, []string), you can use sort.Ints, sort.Strings, etc., directly. The above method is necessary when working with []interface{} or custom types.`,level:"Advanced",created_at:"2025-04-21T12:16:44.450322Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"0c7be4fb-6d5d-4565-8404-5982f44e6df7",question:"How does Go's sort.Search function relate to sorting algorithms?",answer:`\`\`\`markdown Go’s sort.Search function is not itself a sorting algorithm, but it is closely related to sorting and the use of sorted data. Here’s how:

## Relationship to Sorting Algorithms

- **Purpose**: \`sort.Search\` is used to perform efficient binary search operations on sorted data. It finds the smallest index \`i\` in the range \`[0, n)\` at which a user-defined condition is true.
- **Precondition**: The data must already be sorted (or at least partitioned according to the search predicate) for \`sort.Search\` to work correctly. If the data is not sorted, the result is undefined.
- **Sorting Algorithms**: Go provides several sorting algorithms (like \`sort.Ints\`, \`sort.Strings\`, and custom sorts using \`sort.Sort\`) to arrange data in order. After sorting, \`sort.Search\` can be used to quickly locate elements or insertion points.

## Example

\`\`\`go
import (
    "fmt"
    "sort"
)

func main() {
    nums := []int{1, 3, 5, 7, 9}
    // nums must be sorted for sort.Search to work correctly
    x := 5
    idx := sort.Search(len(nums), func(i int) bool { return nums[i] >= x })
    if idx < len(nums) && nums[idx] == x {
        fmt.Printf("Found %d at index %d\\n", x, idx)
    } else {
        fmt.Printf("%d not found, can insert at index %d\\n", x, idx)
    }
}
\`\`\`

## Summary Table

| Function         | Role                                 |
|------------------|--------------------------------------|
| \`sort.Sort\`      | Sorts data using a sorting algorithm |
| \`sort.Search\`    | Searches in sorted data              |

## Conclusion

\`sort.Search\` is a binary search utility that relies on data being sorted—typically by a sorting algorithm provided by Go’s \`sort\` package. Sorting algorithms prepare data for efficient searching, and \`sort.Search\` leverages this order to perform fast lookups.`,level:"Advanced",created_at:"2025-04-21T12:16:44.450337Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"401f1820-4a21-49af-85b3-efa7af10418f",question:"What are the limitations of Go's built-in sorting functions?",answer:`\`\`\`markdown ### Limitations of Go's Built-in Sorting Functions

Go's standard library provides convenient sorting functions in the \`sort\` package (e.g., \`sort.Ints\`, \`sort.Strings\`, \`sort.Sort\`, etc.). However, these built-in sorting functions have several limitations:

1. **Limited to In-Place Sorting**
   - The built-in functions sort slices in place and do not return a new sorted slice. This can be problematic if you need to preserve the original order.

2. **No Support for Custom Comparators in Convenience Functions**
   - Functions like \`sort.Ints\` and \`sort.Strings\` only work with basic types and do not allow custom comparison logic. For custom types or complex sorting criteria, you must implement the \`sort.Interface\`.

3. **Requires Implementation of \`sort.Interface\`**
   - For custom sorting, you must define a type that implements the \`Len()\`, \`Less(i, j int)\`, and \`Swap(i, j int)\` methods. This can be verbose and less ergonomic compared to languages that allow passing comparator functions directly.

4. **No Built-in Stable Sort for Custom Types**
   - While \`sort.Stable\` exists, it still requires you to implement \`sort.Interface\`. There are no convenience functions for stable sorting of slices of basic types.

5. **No Built-in Support for Descending Order**
   - The built-in functions sort in ascending order only. To sort in descending order, you must implement custom logic in the \`Less\` method.

6. **Not Generic (Pre Go 1.18)**
   - Prior to Go 1.18, sorting functions were not generic and required boilerplate code for each type. With Go 1.18+, generics can be used, but the standard library's sorting functions are not yet fully generic.

7. **No Parallel Sorting**
   - The built-in sorting algorithms are single-threaded and do not utilize multiple cores for large datasets.

8. **No Built-in Support for Sorting Maps**
   - Go maps are unordered, and the sort package does not provide direct support for sorting map keys or values.

9. **No Direct Support for Multi-Level Sorting**
   - For sorting by multiple fields (e.g., primary and secondary keys), you must implement custom logic in the \`Less\` method.

---

#### Example: Custom Sorting

\`\`\`go
type Person struct {
    Name string
    Age  int
}

type ByAge []Person

func (a ByAge) Len() int           { return len(a) }
func (a ByAge) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
func (a ByAge) Less(i, j int) bool { return a[i].Age < a[j].Age }

// Usage:
people := []Person{{"Alice", 30}, {"Bob", 25}}
sort.Sort(ByAge(people))
\`\`\`

---

### Summary Table

| Limitation                                 | Workaround/Note                                  |
|---------------------------------------------|--------------------------------------------------|
| In-place only                              | Manually copy slice before sorting               |
| No custom comparator in convenience funcs  | Implement \`sort.Interface\`                       |
| Requires \`sort.Interface\` for custom types | Boilerplate code needed                          |
| No stable sort for basic types             | Use \`sort.Stable\` with custom type               |
| No descending order                        | Reverse logic in \`Less\`                          |
| Not generic (pre Go 1.18)                  | Use generics in Go 1.18+                         |
| No parallel sorting                        | Implement custom parallel sort if needed         |
| No map sorting                             | Extract keys/values and sort separately          |
| No multi-level sorting                     | Implement logic in \`Less\`                        |

---

**In summary:**  
Go's built-in sorting functions are efficient and easy for basic use cases, but they lack flexibility for more advanced or customized sorting needs. For complex scenarios, additional code or third-party libraries may be required.`,level:"Advanced",created_at:"2025-04-21T12:16:44.450357Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"c18b12c1-b9ec-442b-906d-6438e1b06254",question:"How do you handle sorting with nil values in Go slices?",answer:`\`\`\`markdown
Handling Sorting with Nil Values in Go Slices
---------------------------------------------

When sorting slices in Go that may contain \`nil\` values (for example, slices of pointers or interfaces), you need to define how \`nil\` should be ordered relative to non-\`nil\` values. The standard \`sort\` package does not handle \`nil\` values specially, so you must implement a custom \`Less\` function.

### Example: Sorting a Slice of Pointers with Nil Values

Suppose you have a slice of pointers to integers:

\`\`\`go
nums := []*int{nil, ptr(3), ptr(1), nil, ptr(2)}
\`\`\`

You want to sort so that all \`nil\` values come first.

#### Step 1: Define a Helper Function

\`\`\`go
func ptr(i int) *int { return &i }
\`\`\`

#### Step 2: Implement Custom Sort

\`\`\`go
import "sort"

sort.Slice(nums, func(i, j int) bool {
    // Place nils first
    if nums[i] == nil && nums[j] != nil {
        return true
    }
    if nums[i] != nil && nums[j] == nil {
        return false
    }
    if nums[i] == nil && nums[j] == nil {
        return false // keep original order
    }
    // Both non-nil: compare values
    return *nums[i] < *nums[j]
})
\`\`\`

### Example: Sorting a Slice of Interfaces with Nil Values

If you have a slice of \`interface{}\` that may contain \`nil\`, you can use a similar approach:

\`\`\`go
sort.Slice(data, func(i, j int) bool {
    if data[i] == nil && data[j] != nil {
        return true
    }
    if data[i] != nil && data[j] == nil {
        return false
    }
    if data[i] == nil && data[j] == nil {
        return false
    }
    // Add type assertion and comparison logic here
    return data[i].(int) < data[j].(int)
})
\`\`\`

### Key Points

- Always check for \`nil\` before dereferencing pointers or asserting types.
- Decide whether \`nil\` should come first or last.
- The same pattern applies for custom types and structs with pointer fields.

### Summary

To handle sorting with \`nil\` values in Go slices, use \`sort.Slice\` (or implement \`sort.Interface\`) with a custom comparison function that explicitly checks for \`nil\` and defines the desired ordering.
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T12:16:44.450368Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"7c94616a-31a1-48a0-bb71-ae05db4d6478",question:"How do you sort multi-dimensional slices in Go?",answer:`\`\`\`markdown
To sort multi-dimensional slices (e.g., \`[][]int\`) in Go, you can use the \`sort.Slice\` function from the \`sort\` package. This function allows you to define a custom less function, which is ideal for sorting slices of slices based on one or more criteria.

### Example: Sorting a Slice of Slices by the First Element

Suppose you have the following data:

\`\`\`go
data := [][]int{
    {3, 4, 5},
    {1, 2, 3},
    {2, 3, 4},
}
\`\`\`

To sort \`data\` by the first element of each inner slice:

\`\`\`go
import (
    "fmt"
    "sort"
)

func main() {
    data := [][]int{
        {3, 4, 5},
        {1, 2, 3},
        {2, 3, 4},
    }

    sort.Slice(data, func(i, j int) bool {
        return data[i][0] < data[j][0]
    })

    fmt.Println(data)
}
\`\`\`

**Output:**
\`\`\`
[[1 2 3] [2 3 4] [3 4 5]]
\`\`\`

### Sorting by Multiple Elements (Lexicographical Order)

To sort lexicographically (by the first element, then the second, etc.):

\`\`\`go
sort.Slice(data, func(i, j int) bool {
    for k := 0; k < len(data[i]) && k < len(data[j]); k++ {
        if data[i][k] != data[j][k] {
            return data[i][k] < data[j][k]
        }
    }
    return len(data[i]) < len(data[j])
})
\`\`\`

### Sorting in Descending Order

Reverse the comparison:

\`\`\`go
sort.Slice(data, func(i, j int) bool {
    return data[i][0] > data[j][0]
})
\`\`\`

### Summary

- Use \`sort.Slice\` for custom sorting logic.
- Define the comparison based on your sorting criteria (single or multiple elements).
- This approach works for any multi-dimensional slice (e.g., \`[][]string\`, \`[][]float64\`).

**References:**
- [sort.Slice documentation](https://pkg.go.dev/sort#Slice)
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T12:16:44.450379Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"},{id:"da3b43b9-c5ae-4ffe-ba47-2130cad4e91c",question:"How do you implement a custom comparator for sorting in Go?",answer:`\`\`\`markdown
To implement a custom comparator for sorting in Go, you need to define a type that implements the \`sort.Interface\`, which requires three methods: \`Len()\`, \`Less(i, j int)\`, and \`Swap(i, j int)\`. The \`Less(i, j int)\` method acts as the custom comparator, determining the sorting order.

### Example: Sorting a Slice of Structs with a Custom Comparator

Suppose you have a slice of \`Person\` structs and want to sort them by age in descending order:

\`\`\`go
package main

import (
    "fmt"
    "sort"
)

type Person struct {
    Name string
    Age  int
}

// ByAgeDesc implements sort.Interface for []Person based on the Age field (descending).
type ByAgeDesc []Person

func (a ByAgeDesc) Len() int           { return len(a) }
func (a ByAgeDesc) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
func (a ByAgeDesc) Less(i, j int) bool { return a[i].Age > a[j].Age } // Descending

func main() {
    people := []Person{
        {"Alice", 30},
        {"Bob", 25},
        {"Charlie", 35},
    }

    sort.Sort(ByAgeDesc(people))

    fmt.Println(people)
}
\`\`\`

### Using \`sort.Slice\` for Inline Comparators

Go 1.8+ provides \`sort.Slice\`, which allows you to define the comparator inline using a closure:

\`\`\`go
sort.Slice(people, func(i, j int) bool {
    return people[i].Age > people[j].Age // Descending
})
\`\`\`

### Summary

- Implement \`sort.Interface\` for your type and define the \`Less\` method as your custom comparator.
- Alternatively, use \`sort.Slice\` for an inline comparator function.
\`\`\`
`,level:"Advanced",created_at:"2025-04-21T12:16:44.450390Z",topic:"72779b51-719d-44b7-a558-9fe3c3ed7d16"}];export{n as default};
