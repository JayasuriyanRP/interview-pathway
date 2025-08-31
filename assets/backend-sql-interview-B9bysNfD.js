const e=[{id:"fb83e0aa-9700-45b1-9708-518b3cfccbdc",question:"What is SQL and what are its main uses?",answer:`\`\`\`markdown **Answer:**

SQL (Structured Query Language) is a standard programming language used to manage and manipulate relational databases. It allows users to create, read, update, and delete data stored in a database.

**Main uses of SQL:**
- **Querying data:** Retrieve specific information from one or more tables using SELECT statements.
- **Inserting data:** Add new records to database tables with the INSERT statement.
- **Updating data:** Modify existing records using the UPDATE statement.
- **Deleting data:** Remove records from tables with the DELETE statement.
- **Database management:** Create and modify database structures (tables, views, indexes) using Data Definition Language (DDL) commands like CREATE, ALTER, and DROP.
- **Access control:** Manage user permissions and security within the database.

SQL is widely used in various applications, from small-scale projects to large enterprise systems, to efficiently store and retrieve data.`,level:"Beginner"},{id:"9de33bca-585c-4e72-a933-42969bbaf4dc",question:"What is the difference between SQL and MySQL?",answer:`\`\`\`markdown **Answer:**

SQL (Structured Query Language) is a standard programming language used to manage and manipulate relational databases. It is used for tasks such as querying data, updating records, and creating or modifying database structures.

MySQL, on the other hand, is a popular open-source relational database management system (RDBMS) that uses SQL as its language for interacting with the database. In other words, SQL is the language, while MySQL is a software application that implements SQL to store, retrieve, and manage data.

**Key Differences:**

| SQL                                 | MySQL                                      |
|--------------------------------------|--------------------------------------------|
| A language for managing databases    | A database management system (DBMS)        |
| Standardized by ANSI/ISO             | Software developed by Oracle Corporation   |
| Used in many RDBMSs (MySQL, SQL Server, PostgreSQL, etc.) | Specific to MySQL database                |
| Cannot be used to store data         | Used to store, retrieve, and manage data   |

**Summary:**  
SQL is the language used to interact with databases, while MySQL is a database system that uses SQL to manage its data.`,level:"Beginner"},{id:"ac0e528c-6641-4f28-af63-0d3f059cf348",question:"What are the different types of SQL statements?",answer:"```markdown **Answer:**\n\nSQL statements can be categorized into several types based on their functionality:\n\n1. **Data Definition Language (DDL):**\n   - Used to define and manage database structure.\n   - Examples: `CREATE`, `ALTER`, `DROP`, `TRUNCATE`\n\n2. **Data Manipulation Language (DML):**\n   - Used to manipulate data within tables.\n   - Examples: `SELECT`, `INSERT`, `UPDATE`, `DELETE`\n\n3. **Data Control Language (DCL):**\n   - Used to control access to data in the database.\n   - Examples: `GRANT`, `REVOKE`\n\n4. **Transaction Control Language (TCL):**\n   - Used to manage transactions in the database.\n   - Examples: `COMMIT`, `ROLLBACK`, `SAVEPOINT`\n\n**Summary Table:**\n\n| Type | Purpose | Examples |\n|------|---------|----------|\n| DDL  | Define database structure | CREATE, ALTER, DROP, TRUNCATE |\n| DML  | Manipulate data | SELECT, INSERT, UPDATE, DELETE |\n| DCL  | Control access | GRANT, REVOKE |\n| TCL  | Manage transactions | COMMIT, ROLLBACK, SAVEPOINT |",level:"Beginner"},{id:"257286ae-7b89-4215-9543-ddc654291814",question:"What is a primary key?",answer:`\`\`\`markdown A **primary key** is a column (or a set of columns) in a database table that uniquely identifies each row in that table. The primary key must contain unique values and cannot contain NULL values. Each table can have only one primary key.

**Example:**

\`\`\`sql
CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(50),
    Age INT
);
\`\`\`

In this example, \`StudentID\` is the primary key, ensuring that each student has a unique identifier.`,level:"Beginner"},{id:"376fef44-1280-42ee-9e90-cf24f835081c",question:"What is a foreign key?",answer:`\`\`\`markdown A **foreign key** is a field (or a collection of fields) in one table that uniquely identifies a row of another table. The foreign key establishes a relationship between two tables by linking the foreign key column(s) in one table to the primary key column(s) of another table. This helps maintain referential integrity in the database.

**Example:**

\`\`\`sql
CREATE TABLE Departments (
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(50)
);

CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    Name VARCHAR(50),
    DepartmentID INT,
    FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
);
\`\`\`

In this example, \`DepartmentID\` in the Employees table is a foreign key that references the \`DepartmentID\` in the Departments table. This ensures that every employee is assigned to a valid department.`,level:"Beginner"},{id:"cad13d97-659a-4aa5-b148-31d94db1ec45",question:"What is the difference between WHERE and HAVING clauses?",answer:`\`\`\`markdown **Answer:**

The main difference between the \`WHERE\` and \`HAVING\` clauses in SQL is:

- **WHERE** is used to filter rows before any groupings are made (i.e., before the \`GROUP BY\` clause is applied).
- **HAVING** is used to filter groups after the \`GROUP BY\` clause has been applied.

**Example:**

\`\`\`sql
-- Using WHERE to filter rows before grouping
SELECT department, COUNT(*)
FROM employees
WHERE salary > 50000
GROUP BY department;

-- Using HAVING to filter groups after grouping
SELECT department, COUNT(*)
FROM employees
GROUP BY department
HAVING COUNT(*) > 10;
\`\`\`

**Summary Table:**

| Clause  | When is it applied?         | Can use aggregate functions? |
|---------|----------------------------|------------------------------|
| WHERE   | Before grouping            | No                           |
| HAVING  | After grouping (GROUP BY)  | Yes                          |`,level:"Beginner"},{id:"42022668-7c8f-4819-8727-6aa2b35b52cd",question:"How do you retrieve unique records from a table?",answer:`\`\`\`markdown To retrieve unique records from a table in SQL, you use the DISTINCT keyword. This ensures that duplicate rows are removed from the result set.

**Example:**

\`\`\`sql
SELECT DISTINCT column_name
FROM table_name;
\`\`\`

If you want unique combinations of multiple columns:

\`\`\`sql
SELECT DISTINCT column1, column2
FROM table_name;
\`\`\`

**Explanation:**  
- DISTINCT filters out duplicate rows and returns only unique values for the specified columns.`,level:"Beginner"},{id:"218a2d33-c929-49c1-8a5f-64b00b862b48",question:"What is the use of the GROUP BY clause?",answer:`\`\`\`markdown The GROUP BY clause in SQL is used to group rows that have the same values in specified columns into summary rows, like "total sales by region" or "number of employees by department." It is often used with aggregate functions such as COUNT(), SUM(), AVG(), MAX(), or MIN() to perform calculations on each group of data.

**Example:**

\`\`\`sql
SELECT department, COUNT(*) AS num_employees
FROM employees
GROUP BY department;
\`\`\`

This query counts the number of employees in each department.`,level:"Beginner"},{id:"8e9c5362-6e95-4dc0-a753-f837d23049ba",question:"What is normalization? Why is it important?",answer:`\`\`\`markdown **Normalization** is the process of organizing data in a database to reduce redundancy and improve data integrity. It involves dividing large tables into smaller, related tables and defining relationships between them according to rules called "normal forms."

**Importance of Normalization:**
- **Reduces Data Redundancy:** Prevents duplication of data, saving storage and making updates easier.
- **Improves Data Integrity:** Ensures data is consistent and accurate by enforcing relationships and constraints.
- **Simplifies Queries:** Makes it easier to maintain and query the database.
- **Prevents Anomalies:** Helps avoid issues like update, insert, and delete anomalies.

In summary, normalization helps create efficient, reliable, and scalable database structures.`,level:"Beginner"},{id:"eaa74997-0f43-48b5-b818-7b356f1c0d0f",question:"What is a JOIN? Name different types of JOINs.",answer:`\`\`\`markdown A **JOIN** in SQL is used to combine rows from two or more tables based on a related column between them. It allows you to retrieve data from multiple tables in a single query.

**Different types of JOINs:**

1. **INNER JOIN**  
   Returns only the rows that have matching values in both tables.

2. **LEFT JOIN** (or LEFT OUTER JOIN)  
   Returns all rows from the left table, and the matched rows from the right table. If there is no match, NULL values are returned for columns from the right table.

3. **RIGHT JOIN** (or RIGHT OUTER JOIN)  
   Returns all rows from the right table, and the matched rows from the left table. If there is no match, NULL values are returned for columns from the left table.

4. **FULL JOIN** (or FULL OUTER JOIN)  
   Returns all rows when there is a match in either left or right table. Rows without a match in one of the tables will have NULLs for the missing values.

5. **CROSS JOIN**  
   Returns the Cartesian product of the two tables, i.e., all possible combinations of rows.

**Example:**
\`\`\`sql
SELECT *
FROM employees
INNER JOIN departments
ON employees.department_id = departments.id;
\`\`\`

This query retrieves data from both \`employees\` and \`departments\` tables where the \`department_id\` matches.`,level:"Beginner"},{id:"ce37a1c3-9e86-44c4-a573-75f2e1f9258c",question:"What is the difference between INNER JOIN and LEFT JOIN?",answer:`\`\`\`markdown **Answer:**

The main difference between \`INNER JOIN\` and \`LEFT JOIN\` in SQL is how they handle unmatched rows between two tables:

- **INNER JOIN** returns only the rows that have matching values in both tables.
- **LEFT JOIN** (also called LEFT OUTER JOIN) returns all rows from the left table, and the matched rows from the right table. If there is no match, the result is NULL on the side of the right table.

**Example:**

Suppose you have two tables:

**Customers**
| customer_id | name    |
|-------------|---------|
| 1           | Alice   |
| 2           | Bob     |
| 3           | Charlie |

**Orders**
| order_id | customer_id | amount |
|----------|-------------|--------|
| 101      | 1           | 50     |
| 102      | 2           | 30     |

**INNER JOIN:**
\`\`\`sql
SELECT Customers.name, Orders.amount
FROM Customers
INNER JOIN Orders ON Customers.customer_id = Orders.customer_id;
\`\`\`
**Result:**
| name  | amount |
|-------|--------|
| Alice | 50     |
| Bob   | 30     |

**LEFT JOIN:**
\`\`\`sql
SELECT Customers.name, Orders.amount
FROM Customers
LEFT JOIN Orders ON Customers.customer_id = Orders.customer_id;
\`\`\`
**Result:**
| name    | amount |
|---------|--------|
| Alice   | 50     |
| Bob     | 30     |
| Charlie | NULL   |

**Summary Table:**

| JOIN Type   | Returns rows when...                           |
|-------------|-----------------------------------------------|
| INNER JOIN  | There is a match in both tables                |
| LEFT JOIN   | All rows from the left table, matched or not   |`,level:"Beginner"},{id:"91d43d65-120c-49a3-a224-e33b45b0badf",question:"What is a subquery?",answer:`\`\`\`markdown A **subquery** is a query nested inside another SQL query. It is also known as an "inner query" or "nested query." Subqueries are used to perform operations that require multiple steps, such as filtering results based on the outcome of another query.

**Example:**
\`\`\`sql
SELECT name
FROM employees
WHERE department_id = (
    SELECT id
    FROM departments
    WHERE name = 'Sales'
);
\`\`\`

In this example, the subquery \`(SELECT id FROM departments WHERE name = 'Sales')\` finds the department ID for 'Sales', and the main query retrieves the names of employees who work in that department.

**Key Points:**
- Subqueries can be used in SELECT, INSERT, UPDATE, or DELETE statements.
- They can return a single value, a single row, or multiple rows.
- Subqueries are enclosed in parentheses.`,level:"Beginner"},{id:"ea5aaada-57e2-4a3c-aba9-b60fd4d111a3",question:"What is the difference between DELETE and TRUNCATE?",answer:"```markdown **Answer:**\n\nThe main differences between `DELETE` and `TRUNCATE` in SQL are:\n\n| DELETE                                   | TRUNCATE                                 |\n|-------------------------------------------|------------------------------------------|\n| Removes rows one at a time based on a condition (can use WHERE clause). | Removes all rows from a table at once (cannot use WHERE clause). |\n| Each row deletion is logged, so it is slower. | Minimal logging, so it is faster.        |\n| Can be rolled back if used within a transaction. | Cannot be rolled back in some databases (depends on DBMS). |\n| Does not reset identity columns.           | Resets identity columns to the seed value. |\n| Triggers are fired for each deleted row.   | Triggers are not fired.                  |\n| Syntax: `DELETE FROM table_name WHERE condition;` | Syntax: `TRUNCATE TABLE table_name;`     |\n\n**Summary:**  \n- Use `DELETE` when you need to remove specific rows or want to use conditions.\n- Use `TRUNCATE` when you want to quickly remove all rows from a table and reset it.",level:"Beginner"},{id:"67b4be28-4d2b-4ff9-9cfb-f3089cf4cd4c",question:"How do you add a new column to an existing table?",answer:"```markdown To add a new column to an existing table in SQL, you use the ALTER TABLE statement with the ADD COLUMN clause. Here’s the basic syntax:\n\n```sql\nALTER TABLE table_name\nADD column_name data_type;\n```\n\n**Example:**  \nSuppose you have a table called employees and you want to add a new column named email of type VARCHAR(100):\n\n```sql\nALTER TABLE employees\nADD email VARCHAR(100);\n```\n\nThis command will add the email column to the employees table.",level:"Beginner"},{id:"0d555126-1311-4910-a3ed-0e3098a10d46",question:"What is the purpose of the ORDER BY clause?",answer:"```markdown The ORDER BY clause in SQL is used to sort the result set of a query by one or more columns. By default, it sorts the data in ascending order (from lowest to highest), but you can also specify descending order. This helps in organizing and presenting the data in a meaningful way.\n\n**Example:**\n\n```sql\nSELECT * FROM Employees\nORDER BY LastName ASC;\n```\n\nThis query retrieves all records from the Employees table and sorts them by the LastName column in ascending order. To sort in descending order, you can use DESC:\n\n```sql\nSELECT * FROM Employees\nORDER BY LastName DESC;\n```",level:"Beginner"},{id:"b632ba88-a782-47e1-a58c-09b6759d2940",question:"What is an index? Why is it used?",answer:`\`\`\`markdown An **index** in SQL is a database object that improves the speed of data retrieval operations on a table at the cost of additional space and maintenance overhead. It is similar to an index in a book, allowing the database engine to find rows more quickly without scanning the entire table.

### Why is it used?

- **Faster Query Performance:** Indexes help locate data quickly, especially for large tables, by reducing the amount of data the database needs to scan.
- **Efficient Searching:** They are particularly useful for columns that are frequently searched, filtered, or used in JOIN, WHERE, and ORDER BY clauses.
- **Improved Sorting:** Indexes can speed up sorting operations on columns.

> **Note:** While indexes speed up read operations, they can slow down write operations (INSERT, UPDATE, DELETE) because the index must also be updated.

---

**Example:**
\`\`\`sql
-- Creating an index on the 'email' column of the 'users' table
CREATE INDEX idx_users_email ON users(email);
\`\`\`

---

**Summary Table:**

| Benefit                | Drawback                        |
|------------------------|---------------------------------|
| Faster data retrieval  | Slower data modification        |
| Efficient searching    | Extra storage space required    |
| Improved sorting       | Maintenance overhead            |`,level:"Intermediate"},{id:"92da6635-5958-47f3-ac8b-8038344d3640",question:"Explain the ACID properties in SQL databases.",answer:`\`\`\`markdown **ACID Properties in SQL Databases**

ACID is an acronym that represents the four key properties of a reliable database transaction: **Atomicity, Consistency, Isolation,** and **Durability**. These properties ensure that database transactions are processed reliably and help maintain data integrity.

1. **Atomicity**
   - Ensures that a transaction is treated as a single, indivisible unit.
   - Either all operations within the transaction are completed successfully, or none are applied.
   - If any part of the transaction fails, the entire transaction is rolled back.

2. **Consistency**
   - Guarantees that a transaction brings the database from one valid state to another.
   - All data integrity constraints (such as unique keys, foreign keys, etc.) are preserved after the transaction.
   - Prevents the database from ending up in an invalid state.

3. **Isolation**
   - Ensures that concurrent transactions do not interfere with each other.
   - The intermediate state of a transaction is invisible to other transactions.
   - The final result is as if transactions were executed sequentially, even if they were run in parallel.

4. **Durability**
   - Once a transaction is committed, its changes are permanent, even in the case of a system failure.
   - The database will preserve committed data, typically by writing it to non-volatile storage.

**Summary Table**

| Property    | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| Atomicity   | All or nothing execution of transactions                                    |
| Consistency | Transactions maintain database integrity and rules                          |
| Isolation   | Transactions do not affect each other's execution                           |
| Durability  | Committed changes persist even after system failures                        |

These ACID properties are fundamental to ensuring reliable, predictable, and safe operations in SQL databases.`,level:"Intermediate"},{id:"89279e02-3c1a-4849-8a63-d9c19936f5e0",question:"What is a view? How is it different from a table?",answer:`\`\`\`markdown A **view** in SQL is a virtual table that is based on the result of a SELECT query. It does not store data physically; instead, it presents data from one or more tables through a predefined SQL query. Views can be used to simplify complex queries, enhance security by restricting access to specific data, and present data in a particular format.

### Key Differences Between a View and a Table

| Aspect           | Table                                      | View                                         |
|------------------|--------------------------------------------|----------------------------------------------|
| Storage          | Physically stores data in the database      | Does not store data; stores only the query   |
| Data Retrieval   | Directly retrieves data from storage        | Retrieves data dynamically from underlying tables |
| Modification     | Supports INSERT, UPDATE, DELETE operations  | May not always support data modification (depends on the view definition) |
| Security         | Access control at the table level           | Can restrict access to specific columns/rows |
| Performance      | Faster for large data operations            | May be slower, as data is fetched on demand  |

**Example:**

\`\`\`sql
-- Creating a view
CREATE VIEW EmployeeView AS
SELECT EmployeeID, Name, Department
FROM Employees
WHERE Status = 'Active';
\`\`\`

**Summary:**  
A view is a virtual table created by a query, while a table is a physical structure that stores data. Views provide abstraction, security, and convenience, but do not store data themselves.`,level:"Intermediate"},{id:"1703e1dc-99c1-449f-8354-d6692024592f",question:"What is a stored procedure?",answer:`\`\`\`markdown A **stored procedure** is a precompiled collection of one or more SQL statements that are stored and executed on the database server. Stored procedures can accept input parameters, return output parameters, and contain programming constructs such as loops and conditional statements. They are commonly used to encapsulate complex business logic, improve performance by reducing network traffic, and enhance security by controlling access to data.

**Key Points:**
- Stored procedures are saved in the database and can be executed by applications or users.
- They help in reusing code and maintaining consistency.
- They can return results, such as data sets or status values.
- Using stored procedures can help prevent SQL injection attacks.

**Example (in SQL Server):**
\`\`\`sql
CREATE PROCEDURE GetEmployeeById
    @EmployeeID INT
AS
BEGIN
    SELECT * FROM Employees WHERE EmployeeID = @EmployeeID;
END;
\`\`\`

To execute the stored procedure:
\`\`\`sql
EXEC GetEmployeeById @EmployeeID = 5;
\`\`\`

**Benefits:**
- Improved performance due to precompilation.
- Enhanced security and access control.
- Simplified code maintenance and reuse.`,level:"Intermediate"},{id:"f46348ae-b310-4e56-bf9f-cf8633723a7a",question:"What is a trigger in SQL?",answer:`\`\`\`markdown A **trigger** in SQL is a special type of stored procedure that is automatically executed (or "triggered") in response to certain events on a particular table or view in a database. Triggers are commonly used to enforce business rules, maintain audit trails, or automatically update related data.

### Key Points about Triggers

- **Events:** Triggers can be set to fire before or after \`INSERT\`, \`UPDATE\`, or \`DELETE\` operations.
- **Automatic Execution:** Unlike regular procedures, triggers are invoked automatically when the specified event occurs.
- **Scope:** Triggers can reference both the old and new values of the data being modified.
- **Use Cases:** Commonly used for auditing changes, enforcing complex constraints, or synchronizing tables.

### Example

\`\`\`sql
CREATE TRIGGER trg_after_insert
AFTER INSERT ON employees
FOR EACH ROW
BEGIN
    INSERT INTO audit_log (employee_id, action, action_time)
    VALUES (NEW.id, 'INSERT', NOW());
END;
\`\`\`

This example trigger automatically logs every new employee insertion into an \`audit_log\` table.

---

**In summary:**  
A trigger in SQL is a database object that automatically executes a predefined action in response to specific changes in a table or view, helping automate tasks and enforce rules at the database level.`,level:"Intermediate"},{id:"2629a485-d5cc-4333-afb1-7adf51fc0c8d",question:"Explain the difference between UNION and UNION ALL.",answer:`\`\`\`markdown **UNION vs. UNION ALL in SQL**

- **UNION**  
  - Combines the result sets of two or more SELECT queries.
  - Removes duplicate rows from the final result set.
  - Performs a distinct sort operation, which can impact performance.

- **UNION ALL**  
  - Also combines the result sets of two or more SELECT queries.
  - Does **not** remove duplicates; all rows from each SELECT statement are included in the result set.
  - Generally faster than UNION because it skips the duplicate-checking step.

**Example:**

\`\`\`sql
SELECT city FROM customers
UNION
SELECT city FROM suppliers;
\`\`\`
*Returns a list of unique cities from both tables.*

\`\`\`sql
SELECT city FROM customers
UNION ALL
SELECT city FROM suppliers;
\`\`\`
*Returns all cities from both tables, including duplicates.*

**Summary Table:**

| Feature        | UNION         | UNION ALL     |
|----------------|--------------|---------------|
| Removes Duplicates | Yes          | No            |
| Performance    | Slower        | Faster        |
| Use Case       | Unique results| All results   |`,level:"Intermediate"},{id:"11a4fc94-3b54-4e4b-b8f9-271e83348b9d",question:"What is a composite key?",answer:`\`\`\`markdown A **composite key** in SQL is a combination of two or more columns in a table that together uniquely identify a row. Unlike a single-column primary key, a composite key uses multiple columns because no single column can uniquely identify records on its own.

**Example:**

\`\`\`sql
CREATE TABLE Enrollment (
    student_id INT,
    course_id INT,
    enrollment_date DATE,
    PRIMARY KEY (student_id, course_id)
);
\`\`\`

In this example, neither \`student_id\` nor \`course_id\` alone can uniquely identify a record in the \`Enrollment\` table. However, the combination of both forms a unique identifier for each enrollment.

**Key Points:**
- Composite keys are used when a single column is not sufficient to uniquely identify records.
- All columns in the composite key must be NOT NULL.
- Composite keys can be defined using the \`PRIMARY KEY\` or \`UNIQUE\` constraints with multiple columns.

**Use Case:**  
Composite keys are common in many-to-many relationship tables, such as linking students to courses, where the combination of both IDs is unique.`,level:"Intermediate"},{id:"357c22f8-f27c-4f93-8a0c-7bbf11716190",question:"How do you handle NULL values in SQL?",answer:"```markdown ### How do you handle NULL values in SQL?\n\nIn SQL, `NULL` represents missing or unknown data. Handling `NULL` values is important to ensure accurate query results and avoid unexpected behavior. Here are common ways to handle `NULL` values:\n\n#### 1. **Using IS NULL and IS NOT NULL**\nTo check for `NULL` values in a column:\n```sql\nSELECT * FROM employees WHERE manager_id IS NULL;\nSELECT * FROM employees WHERE manager_id IS NOT NULL;\n```\n\n#### 2. **Using COALESCE()**\n`COALESCE()` returns the first non-NULL value in the list:\n```sql\nSELECT name, COALESCE(phone, 'N/A') AS phone_number FROM customers;\n```\n\n#### 3. **Using IFNULL() or NVL()**\n- `IFNULL()` is used in MySQL.\n- `NVL()` is used in Oracle.\n\n```sql\n-- MySQL\nSELECT name, IFNULL(phone, 'N/A') AS phone_number FROM customers;\n\n-- Oracle\nSELECT name, NVL(phone, 'N/A') AS phone_number FROM customers;\n```\n\n#### 4. **Using NULLIF()**\n`NULLIF()` returns `NULL` if two expressions are equal:\n```sql\nSELECT NULLIF(salary, 0) FROM employees;\n```\n\n#### 5. **Handling NULLs in Aggregations**\nMost aggregate functions ignore `NULL` values (e.g., `SUM`, `AVG`), but `COUNT(*)` counts all rows, while `COUNT(column)` ignores `NULL`s:\n```sql\nSELECT COUNT(*) AS total_rows, COUNT(email) AS emails_provided FROM users;\n```\n\n#### 6. **Using CASE Statements**\nYou can use `CASE` to handle `NULL` values in custom ways:\n```sql\nSELECT name,\n       CASE\n           WHEN phone IS NULL THEN 'No phone'\n           ELSE phone\n       END AS phone_number\nFROM customers;\n```\n\n---\n\n**Summary:**  \nHandling `NULL` values in SQL involves using functions like `COALESCE()`, `IFNULL()`, `NVL()`, and conditional logic with `CASE` or `IS NULL` checks to ensure your queries return meaningful and accurate results.",level:"Intermediate"},{id:"4482dc8a-ec7f-42de-8d10-53593237fd2e",question:"What is the difference between CHAR and VARCHAR data types?",answer:"```markdown **Answer:**\n\nThe main difference between `CHAR` and `VARCHAR` data types in SQL is how they store and handle string data:\n\n- **CHAR(n):**\n  - Fixed-length character data type.\n  - Always reserves space for `n` characters, padding with spaces if the input is shorter.\n  - Faster for fixed-size data because storage size is predictable.\n  - Example: `CHAR(5)` will store `'abc'` as `'abc  '` (with two spaces).\n\n- **VARCHAR(n):**\n  - Variable-length character data type.\n  - Stores only the actual number of characters entered, up to a maximum of `n`.\n  - More space-efficient for variable-length data.\n  - Example: `VARCHAR(5)` will store `'abc'` as `'abc'` (no extra spaces).\n\n**Summary Table:**\n\n| Feature      | CHAR           | VARCHAR         |\n|--------------|----------------|----------------|\n| Length       | Fixed          | Variable       |\n| Storage      | Always `n`     | Actual length  |\n| Padding      | Yes (spaces)   | No             |\n| Performance  | Slightly faster for fixed size | More efficient for varying sizes |\n\n**When to use:**\n- Use `CHAR` for fields with a consistent length (e.g., country codes).\n- Use `VARCHAR` for fields with varying lengths (e.g., names, addresses).",level:"Intermediate"},{id:"41e97315-186d-4bd6-bea8-140daa9a4773",question:"What is a transaction? How do you implement it in SQL?",answer:`\`\`\`markdown A **transaction** in SQL is a sequence of one or more SQL operations that are executed as a single unit of work. Transactions ensure data integrity and consistency by following the ACID properties:

- **Atomicity:** All operations in the transaction are completed; if not, none are.
- **Consistency:** The database remains in a consistent state before and after the transaction.
- **Isolation:** Transactions are isolated from each other until completed.
- **Durability:** Once a transaction is committed, its changes are permanent.

### Implementing Transactions in SQL

Most relational databases support transactions using the following commands:

\`\`\`sql
BEGIN TRANSACTION; -- or START TRANSACTION

-- Your SQL statements here
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;

COMMIT; -- Saves the changes
\`\`\`

If an error occurs and you want to undo the changes:

\`\`\`sql
ROLLBACK; -- Reverts all changes since BEGIN TRANSACTION
\`\`\`

#### Example

\`\`\`sql
BEGIN TRANSACTION;

UPDATE inventory SET quantity = quantity - 1 WHERE product_id = 101;
UPDATE sales SET amount = amount + 1 WHERE product_id = 101;

IF @@ERROR <> 0
    ROLLBACK;
ELSE
    COMMIT;
\`\`\`

> **Note:** The exact syntax may vary slightly depending on the SQL database (e.g., MySQL, PostgreSQL, SQL Server).

### Summary

A transaction groups multiple SQL statements into a single, all-or-nothing operation, ensuring data reliability. Use \`BEGIN TRANSACTION\`, \`COMMIT\`, and \`ROLLBACK\` to manage transactions in SQL.`,level:"Intermediate"},{id:"86aef2b1-f14d-4d20-80b3-6c7f05f57e1c",question:"How can you optimize a SQL query?",answer:`\`\`\`markdown **How can you optimize a SQL query?**

Optimizing a SQL query involves improving its performance so it runs faster and uses fewer resources. Here are some common techniques:

1. **Use Proper Indexing**
   - Create indexes on columns used in WHERE, JOIN, and ORDER BY clauses.
   - Avoid over-indexing, as too many indexes can slow down write operations.

2. **Select Only Needed Columns**
   - Use SELECT column1, column2 instead of SELECT * to reduce data retrieval.

3. **Write Efficient WHERE Clauses**
   - Use appropriate conditions to filter data early.
   - Avoid functions or calculations on indexed columns in WHERE clauses.

4. **Use Joins Wisely**
   - Prefer INNER JOIN over OUTER JOIN if possible.
   - Ensure join columns are indexed.

5. **Avoid N+1 Query Problem**
   - Use JOINs or IN clauses instead of running multiple queries in a loop.

6. **Limit Result Set**
   - Use LIMIT or TOP to restrict the number of rows returned when possible.

7. **Analyze and Refactor Subqueries**
   - Replace correlated subqueries with JOINs when possible.
   - Use EXISTS instead of IN for subqueries returning many rows.

8. **Use Query Execution Plans**
   - Analyze the query execution plan to identify bottlenecks and missing indexes.

9. **Update Database Statistics**
   - Ensure the database statistics are up-to-date for the query optimizer.

10. **Partition Large Tables**
    - Use table partitioning to improve performance on very large datasets.

**Example:**
\`\`\`sql
-- Inefficient query
SELECT * FROM orders WHERE YEAR(order_date) = 2023;

-- Optimized query (assuming order_date is indexed)
SELECT order_id, customer_id, order_date
FROM orders
WHERE order_date >= '2023-01-01' AND order_date < '2024-01-01';
\`\`\`

**Summary:**  
Optimizing SQL queries involves indexing, selecting only necessary data, writing efficient conditions, using joins and subqueries wisely, and analyzing execution plans. Always test and measure performance improvements after making changes.`,level:"Intermediate"},{id:"7633c343-abcd-41c7-8462-835fc8d23e87",question:"What is denormalization and when would you use it?",answer:`\`\`\`markdown **Denormalization** is the process of intentionally introducing redundancy into a database by combining tables or adding duplicate data. This is done to improve read performance and simplify complex queries, often at the expense of increased storage requirements and potential data anomalies.

You would use denormalization when:

- **Query performance is critical:** Denormalization can reduce the number of joins required, speeding up data retrieval for read-heavy applications.
- **Reporting and analytics:** When frequent complex queries or aggregations are needed, denormalized tables can simplify and accelerate these operations.
- **Data is relatively static:** If the data doesn't change often, the risk of update anomalies is lower, making denormalization more practical.
- **Scalability requirements:** In distributed systems, denormalization can help avoid expensive joins across nodes.

**Example:**  
Suppose you have separate \`Customers\` and \`Orders\` tables. To speed up reporting, you might denormalize by adding customer information directly into the \`Orders\` table, reducing the need for joins.

**Note:** Denormalization should be used judiciously, as it can lead to data inconsistency and increased maintenance complexity. Always weigh the trade-offs between normalization (data integrity) and denormalization (performance).`,level:"Intermediate"},{id:"26a069b4-00db-4a21-9d08-b23ce05c7f6a",question:"Explain the concept of referential integrity.",answer:`\`\`\`markdown **Referential integrity** is a concept in relational databases that ensures the consistency and validity of relationships between tables. It means that a foreign key in one table must either match a primary key value in another table or be null.

### Key Points

- **Foreign Key Constraint:** Referential integrity is enforced using foreign key constraints. A foreign key in a child table references a primary key in a parent table.
- **Prevents Orphan Records:** It ensures that you cannot have a record in the child table that refers to a non-existent record in the parent table.
- **Cascading Actions:** Referential integrity can define actions such as \`ON DELETE CASCADE\` or \`ON UPDATE CASCADE\`, which automatically update or delete related records to maintain consistency.

### Example

Suppose you have two tables: \`Orders\` and \`Customers\`.

\`\`\`sql
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    Name VARCHAR(100)
);

CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);
\`\`\`

- Here, \`CustomerID\` in the \`Orders\` table is a foreign key referencing \`CustomerID\` in the \`Customers\` table.
- You cannot insert an order with a \`CustomerID\` that does not exist in the \`Customers\` table.
- If you try to delete a customer who has orders, the database will prevent the deletion unless you handle it with cascading rules.

### Summary

Referential integrity helps maintain accurate and consistent data by ensuring relationships between tables remain valid throughout all database operations.`,level:"Intermediate"},{id:"be9efc3d-0ccb-4b97-a4a3-e2299f78f557",question:"What are aggregate functions? Give examples.",answer:"```markdown Aggregate functions in SQL are functions that perform a calculation on a set of values and return a single value. They are commonly used with the GROUP BY clause to summarize data.\n\n**Examples of aggregate functions:**\n\n- `COUNT()`: Returns the number of rows.\n  ```sql\n  SELECT COUNT(*) FROM employees;\n  ```\n\n- `SUM()`: Returns the total sum of a numeric column.\n  ```sql\n  SELECT SUM(salary) FROM employees;\n  ```\n\n- `AVG()`: Returns the average value of a numeric column.\n  ```sql\n  SELECT AVG(salary) FROM employees;\n  ```\n\n- `MIN()`: Returns the minimum value in a column.\n  ```sql\n  SELECT MIN(salary) FROM employees;\n  ```\n\n- `MAX()`: Returns the maximum value in a column.\n  ```sql\n  SELECT MAX(salary) FROM employees;\n  ```\n\nThese functions help in generating summarized reports from data stored in tables.",level:"Intermediate"},{id:"ef6d870a-d469-42e8-a833-75013d98dc52",question:"What is a self join? Provide an example.",answer:`\`\`\`markdown A **self join** is a regular join, but the table is joined with itself. This is useful when you want to compare rows within the same table or find relationships among rows in the same table.

### Example

Suppose you have an \`employees\` table:

| employee_id | name    | manager_id |
|-------------|---------|------------|
| 1           | Alice   | NULL       |
| 2           | Bob     | 1          |
| 3           | Carol   | 1          |
| 4           | Dave    | 2          |

To find each employee along with their manager's name, you can use a self join:

\`\`\`sql
SELECT 
    e.name AS employee_name,
    m.name AS manager_name
FROM 
    employees e
LEFT JOIN 
    employees m
ON 
    e.manager_id = m.employee_id;
\`\`\`

**Result:**

| employee_name | manager_name |
|---------------|-------------|
| Alice         | NULL        |
| Bob           | Alice       |
| Carol         | Alice       |
| Dave          | Bob         |

**Explanation:**  
Here, the \`employees\` table is joined with itself:  
- \`e\` refers to the employee  
- \`m\` refers to the manager  
The join condition matches each employee's \`manager_id\` to the \`employee_id\` of another row in the same table.`,level:"Intermediate"},{id:"238b9396-92e0-416b-a37e-018d6ad8385a",question:"What is a correlated subquery?",answer:`\`\`\`markdown A **correlated subquery** is a subquery that references columns from the outer query. Unlike a regular (or non-correlated) subquery, which can be executed independently of the outer query, a correlated subquery is evaluated once for each row processed by the outer query. This means the subquery depends on the outer query for its values.

### Example

\`\`\`sql
SELECT e1.employee_id, e1.name, e1.salary
FROM employees e1
WHERE e1.salary > (
    SELECT AVG(e2.salary)
    FROM employees e2
    WHERE e2.department_id = e1.department_id
);
\`\`\`

In this example:

- The subquery \`SELECT AVG(e2.salary) FROM employees e2 WHERE e2.department_id = e1.department_id\` references \`e1.department_id\` from the outer query.
- For each row in the outer query (\`e1\`), the subquery calculates the average salary for that specific department.

### Key Points

- **Dependency:** The subquery depends on the outer query for its values.
- **Execution:** The subquery is executed repeatedly, once for each row of the outer query.
- **Use Cases:** Often used when you need to compare each row to an aggregate value calculated from a related set of rows.

### When to Use

Correlated subqueries are useful for row-by-row comparisons, such as finding employees who earn more than the average salary in their department, as shown above.

---

**Tip:** Correlated subqueries can be less efficient than joins or non-correlated subqueries, especially on large datasets, so consider performance implications.`,level:"Advanced"},{id:"d882afda-3372-4e5c-b3e7-005118725d31",question:"Explain window functions and provide an example.",answer:`\`\`\`markdown ### Window Functions in SQL

**Window functions** perform calculations across a set of table rows that are somehow related to the current row. Unlike aggregate functions, window functions do not cause rows to become grouped into a single output row—the rows retain their separate identities. This makes window functions extremely useful for tasks like running totals, moving averages, ranking, and more.

#### Syntax

\`\`\`sql
function_name (expression) OVER (
    [PARTITION BY partition_expression]
    [ORDER BY order_expression]
    [ROWS frame_specification]
)
\`\`\`

- **PARTITION BY**: Divides the result set into partitions to which the function is applied.
- **ORDER BY**: Defines the logical order of rows within each partition.
- **ROWS**: Specifies the window frame (optional).

---

#### Example: Ranking Employees by Salary within Departments

Suppose you have an \`employees\` table:

| emp_id | emp_name | department | salary |
|--------|----------|------------|--------|
| 1      | Alice    | HR         | 50000  |
| 2      | Bob      | HR         | 60000  |
| 3      | Carol    | IT         | 70000  |
| 4      | Dave     | IT         | 80000  |

You want to rank employees by salary within each department.

\`\`\`sql
SELECT
    emp_id,
    emp_name,
    department,
    salary,
    RANK() OVER (
        PARTITION BY department
        ORDER BY salary DESC
    ) AS salary_rank
FROM
    employees;
\`\`\`

**Result:**

| emp_id | emp_name | department | salary | salary_rank |
|--------|----------|------------|--------|-------------|
| 2      | Bob      | HR         | 60000  | 1           |
| 1      | Alice    | HR         | 50000  | 2           |
| 4      | Dave     | IT         | 80000  | 1           |
| 3      | Carol    | IT         | 70000  | 2           |

---

### Key Points

- Window functions operate on a "window" of rows defined by the \`OVER\` clause.
- Common window functions: \`ROW_NUMBER()\`, \`RANK()\`, \`DENSE_RANK()\`, \`SUM()\`, \`AVG()\`, \`LEAD()\`, \`LAG()\`, etc.
- They are powerful for analytical queries without collapsing rows like traditional aggregation.`,level:"Advanced"},{id:"db4720aa-53c0-4b40-aeea-91634faccafc",question:"What is indexing and what are the different types of indexes?",answer:`\`\`\`markdown **Indexing in SQL**

Indexing is a database optimization technique used to speed up the retrieval of rows from a table. An index is a data structure (usually a B-tree or hash table) that allows the database engine to find data quickly without scanning the entire table. Indexes are created on one or more columns of a table and are especially useful for large tables and frequently queried columns.

**Types of Indexes in SQL**

1. **Primary Index**
   - Automatically created when a primary key is defined.
   - Ensures uniqueness and fast access based on the primary key column(s).

2. **Unique Index**
   - Ensures that all values in the indexed column(s) are unique.
   - Can be created explicitly using the \`UNIQUE\` keyword.

3. **Clustered Index**
   - Determines the physical order of data in the table.
   - Only one clustered index per table.
   - The table data is stored in the order of the clustered index.

4. **Non-Clustered Index**
   - Does not alter the physical order of the table.
   - Contains a pointer to the actual data rows.
   - Multiple non-clustered indexes can be created on a table.

5. **Composite (or Concatenated) Index**
   - An index on two or more columns of a table.
   - Useful for queries that filter on multiple columns.

6. **Full-Text Index**
   - Used for efficient searching of text-based data.
   - Supports advanced search queries like \`CONTAINS\` and \`FREETEXT\`.

7. **Bitmap Index**
   - Uses bitmaps for each key value.
   - Efficient for columns with a low number of distinct values (low cardinality).
   - Common in data warehousing environments.

8. **Spatial Index**
   - Used for spatial data types (e.g., geometry, geography).
   - Optimizes queries involving spatial operations.

**Summary Table**

| Index Type         | Description                                             | Use Case                                  |
|--------------------|--------------------------------------------------------|-------------------------------------------|
| Primary            | Unique, auto-created on primary key                    | Fast access via primary key               |
| Unique             | Ensures uniqueness on column(s)                        | Enforce unique constraints                |
| Clustered          | Orders table data physically                           | Range queries, only one per table         |
| Non-Clustered      | Separate structure, points to data rows                | Multiple indexes, fast lookups            |
| Composite          | Index on multiple columns                              | Multi-column search/filter                |
| Full-Text          | For text search                                        | Searching large text fields               |
| Bitmap             | Uses bitmaps, efficient for low cardinality columns    | Data warehousing, analytics               |
| Spatial            | For spatial/geographical data                          | GIS applications, spatial queries         |

**Note:**  
While indexes improve read/query performance, they can slow down write operations (INSERT, UPDATE, DELETE) due to the overhead of maintaining the index structure. Proper indexing strategy is crucial for optimal database performance.`,level:"Advanced"},{id:"ba29525a-cd4b-4871-bc32-241bc5fd47c7",question:"How do you detect and resolve deadlocks in SQL?",answer:`\`\`\`markdown
### Detecting and Resolving Deadlocks in SQL

#### **Detecting Deadlocks**

- **Automatic Detection:** Most modern RDBMSs (like SQL Server, Oracle, MySQL, PostgreSQL) have built-in mechanisms to detect deadlocks. When a deadlock occurs, the database engine automatically identifies the cycle of conflicting locks.
- **Error Messages:** When a deadlock is detected, the database aborts one of the transactions (the "victim") and returns an error (e.g., SQL Server: \`Error 1205\`, MySQL: \`ER_LOCK_DEADLOCK\`).
- **Monitoring Tools:**
  - **SQL Server:** Use \`SQL Server Profiler\`, Extended Events, or query the system views like \`sys.dm_os_ring_buffers\` and \`sys.dm_tran_locks\`.
  - **MySQL:** Check the \`SHOW ENGINE INNODB STATUS\` output for recent deadlocks.
  - **Oracle:** Review the \`alert.log\` and trace files for deadlock information.
- **Custom Logging:** Implement application-level logging to capture deadlock errors for further analysis.

#### **Resolving Deadlocks**

1. **Immediate Resolution (by RDBMS):**
   - The database engine automatically rolls back one of the conflicting transactions, allowing the other to proceed.

2. **Preventive Strategies:**
   - **Consistent Locking Order:** Ensure all transactions acquire locks in the same order to prevent cyclical dependencies.
   - **Keep Transactions Short:** Minimize the time transactions hold locks by keeping them as short as possible.
   - **Use Lower Isolation Levels:** Where appropriate, use \`READ COMMITTED\` instead of \`SERIALIZABLE\` to reduce locking contention.
   - **Optimize Queries:** Ensure queries use indexes efficiently to avoid unnecessary locking.
   - **Explicit Locking:** Use \`WITH (NOLOCK)\` or \`READ UNCOMMITTED\` (with caution) for read operations, or use explicit \`LOCK\` hints to control locking behavior.
   - **Retry Logic:** Implement retry logic in the application to handle deadlock errors gracefully.

#### **Example: Handling Deadlock in SQL Server**

\`\`\`sql
BEGIN TRY
    BEGIN TRANSACTION
    -- Your SQL statements here
    COMMIT TRANSACTION
END TRY
BEGIN CATCH
    IF (XACT_STATE()) <> 0
        ROLLBACK TRANSACTION
    -- Handle error, possibly retry
END CATCH
\`\`\`

#### **Summary Table**

| Step                  | Description                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| Detection             | RDBMS logs, error codes, monitoring tools                                   |
| Immediate Resolution  | RDBMS aborts one transaction                                                |
| Prevention            | Consistent locking, short transactions, optimized queries, retry logic      |

**Key Point:**  
Deadlocks are a normal occurrence in concurrent systems. The goal is to minimize their frequency and handle them gracefully when they occur.
\`\`\`
`,level:"Advanced"},{id:"b75488d0-55a2-4ea9-aa61-573593820bcf",question:"What is a CTE (Common Table Expression)?",answer:`\`\`\`markdown A **CTE (Common Table Expression)** is a temporary, named result set in SQL that you can reference within a \`SELECT\`, \`INSERT\`, \`UPDATE\`, or \`DELETE\` statement. It is defined using the \`WITH\` keyword and is particularly useful for organizing complex queries, improving readability, and enabling recursive queries.

### Syntax

\`\`\`sql
WITH cte_name (column1, column2, ...)
AS (
    -- CTE Query Definition
    SELECT ...
)
SELECT ...
FROM cte_name
WHERE ...;
\`\`\`

### Key Features

- **Readability:** Breaks down complex queries into simpler, logical building blocks.
- **Reusability:** Can reference the CTE multiple times within the main query.
- **Recursion:** Supports recursive queries, which is useful for hierarchical data (e.g., organizational charts, tree structures).

### Example

\`\`\`sql
WITH SalesCTE AS (
    SELECT salesperson_id, SUM(amount) AS total_sales
    FROM sales
    GROUP BY salesperson_id
)
SELECT s.name, cte.total_sales
FROM SalesCTE cte
JOIN salesperson s ON cte.salesperson_id = s.id
WHERE cte.total_sales > 10000;
\`\`\`

### Recursive CTE Example

\`\`\`sql
WITH RECURSIVE EmployeeHierarchy AS (
    SELECT id, name, manager_id
    FROM employees
    WHERE manager_id IS NULL
    UNION ALL
    SELECT e.id, e.name, e.manager_id
    FROM employees e
    INNER JOIN EmployeeHierarchy eh ON e.manager_id = eh.id
)
SELECT * FROM EmployeeHierarchy;
\`\`\`

### Summary

A CTE is a powerful SQL feature that enhances query clarity and enables advanced operations like recursion, making it invaluable for complex data retrieval tasks.`,level:"Advanced"},{id:"8ad9fe29-bdbb-42e6-b368-382caa354099",question:"Explain the difference between clustered and non-clustered indexes.",answer:`\`\`\`markdown **Clustered vs. Non-Clustered Indexes in SQL**

| Feature                | Clustered Index                                        | Non-Clustered Index                                  |
|------------------------|--------------------------------------------------------|------------------------------------------------------|
| **Definition**         | Sorts and stores the actual data rows of the table in the order of the index key. | Maintains a separate structure from the data rows; contains a pointer to the actual data. |
| **Physical Order**     | Alters the physical order of data in the table to match the index. | Does not affect the physical order of data in the table. |
| **Number per Table**   | Only one clustered index per table (since data rows can be sorted in only one order). | Multiple non-clustered indexes can exist per table.   |
| **Structure**          | B-tree structure where leaf nodes contain actual data pages. | B-tree structure where leaf nodes contain index key and a pointer (row locator) to the data. |
| **Use Case**           | Ideal for columns that are often used for range queries or sorting (e.g., primary key). | Useful for columns frequently used in search conditions (WHERE), joins, or as foreign keys. |
| **Performance Impact** | Faster for retrieving large ranges of data.            | Faster for point queries (single value lookups).      |
| **Storage**            | No separate storage; data rows themselves are organized. | Requires additional storage for the index structure.  |

**Example:**

\`\`\`sql
-- Clustered Index (often created automatically on PRIMARY KEY)
CREATE CLUSTERED INDEX idx_customer_id ON Customers(CustomerID);

-- Non-Clustered Index
CREATE NONCLUSTERED INDEX idx_customer_name ON Customers(CustomerName);
\`\`\`

**Summary:**  
A clustered index determines the physical order of data in a table and is limited to one per table, while a non-clustered index is a separate structure that improves query performance without affecting the table’s physical order, and multiple non-clustered indexes can exist on a table.`,level:"Advanced"},{id:"a9a9730b-21da-4ce7-9ebc-7e68f55dbdfa",question:"How do you implement pagination in SQL?",answer:'```markdown\n### How do you implement pagination in SQL?\n\nPagination is the process of dividing query results into discrete pages, which is essential for efficiently displaying large datasets in applications. The implementation of pagination in SQL depends on the database system, but the most common approaches use the `LIMIT` and `OFFSET` clauses (in MySQL, PostgreSQL, SQLite) or the `ROW_NUMBER()` window function (in SQL Server, Oracle).\n\n#### Example: Using `LIMIT` and `OFFSET` (MySQL, PostgreSQL, SQLite)\n\n```sql\nSELECT *\nFROM employees\nORDER BY employee_id\nLIMIT 10 OFFSET 20;\n```\n- `LIMIT 10` returns 10 rows.\n- `OFFSET 20` skips the first 20 rows.\n- This retrieves rows 21 to 30.\n\n#### Example: Using `ROW_NUMBER()` (SQL Server, Oracle)\n\n```sql\nSELECT *\nFROM (\n    SELECT\n        *,\n        ROW_NUMBER() OVER (ORDER BY employee_id) AS rn\n    FROM employees\n) AS numbered\nWHERE rn BETWEEN 21 AND 30;\n```\n- `ROW_NUMBER()` assigns a unique sequential integer to rows.\n- The outer query filters rows for the desired page.\n\n#### Key Points\n\n- Always use `ORDER BY` to ensure consistent and predictable pagination.\n- For large datasets, pagination with high offsets can become slow; consider using keyset pagination (also known as the "seek method") for better performance.\n- Syntax may vary slightly between database systems.\n\n#### Keyset Pagination Example (MySQL/PostgreSQL)\n\n```sql\nSELECT *\nFROM employees\nWHERE employee_id > 100\nORDER BY employee_id\nLIMIT 10;\n```\n- Instead of using `OFFSET`, this retrieves the next 10 rows after a specific `employee_id`, which is more efficient for large tables.\n\n---\n**Summary:**  \nPagination in SQL is typically implemented using `LIMIT` and `OFFSET` or window functions like `ROW_NUMBER()`. Always use `ORDER BY` for consistent results, and consider keyset pagination for better performance with large datasets.\n```\n',level:"Advanced"},{id:"c74e6507-af14-4057-b8b3-b3ed2429da86",question:"What are materialized views and how are they different from regular views?",answer:`\`\`\`markdown **Materialized Views vs. Regular Views in SQL**

A **materialized view** is a database object that stores the result of a query physically on disk. Unlike a regular (or virtual) view, which is simply a saved SQL query that is executed every time the view is referenced, a materialized view actually holds the data and can be refreshed periodically.

### Key Differences

| Feature                | Regular View                        | Materialized View                        |
|------------------------|-------------------------------------|------------------------------------------|
| Storage                | No physical storage (virtual)       | Physically stores data                   |
| Data Freshness         | Always up-to-date (real-time)       | May be stale; refreshed on demand/schedule|
| Performance            | Slower for complex queries          | Faster for repeated, complex queries     |
| Update Mechanism       | No refresh needed                   | Needs explicit refresh (manual or auto)  |
| Use Cases              | Simple abstraction, security        | Reporting, data warehousing, performance |

### Example

\`\`\`sql
-- Regular View
CREATE VIEW employee_view AS
SELECT id, name, department FROM employees WHERE active = TRUE;

-- Materialized View (syntax may vary by RDBMS)
CREATE MATERIALIZED VIEW employee_mv AS
SELECT id, name, department FROM employees WHERE active = TRUE;
\`\`\`

### Summary

- **Regular views** are virtual and always reflect the current data.
- **Materialized views** store data physically and need to be refreshed to stay up-to-date, but can greatly improve performance for expensive queries.`,level:"Advanced"},{id:"b6130368-190c-4c79-bef7-6f4906d84243",question:"How do you perform recursive queries in SQL?",answer:`\`\`\`markdown
### How do you perform recursive queries in SQL?

Recursive queries in SQL are typically performed using **Common Table Expressions (CTEs)** with the \`WITH RECURSIVE\` clause (supported in databases like PostgreSQL, SQL Server, Oracle, and newer versions of MySQL). Recursive CTEs allow you to query hierarchical or tree-structured data, such as organizational charts or file systems.

#### Syntax

\`\`\`sql
WITH RECURSIVE cte_name (column_list) AS (
    -- Anchor member: the base query
    SELECT ...
    FROM ...
    WHERE ...

    UNION ALL

    -- Recursive member: references the CTE itself
    SELECT ...
    FROM ...
    JOIN cte_name ON ...
    WHERE ...
)
SELECT * FROM cte_name;
\`\`\`

#### Example: Finding All Subordinates in an Employee Hierarchy

Suppose you have an \`employees\` table:

| id | name    | manager_id |
|----|---------|------------|
| 1  | Alice   | NULL       |
| 2  | Bob     | 1          |
| 3  | Carol   | 2          |
| 4  | Dave    | 2          |
| 5  | Eve     | 3          |

To find all subordinates of 'Alice' (id = 1):

\`\`\`sql
WITH RECURSIVE subordinates AS (
    -- Anchor member: start with Alice
    SELECT id, name, manager_id
    FROM employees
    WHERE id = 1

    UNION ALL

    -- Recursive member: find employees managed by those already found
    SELECT e.id, e.name, e.manager_id
    FROM employees e
    INNER JOIN subordinates s ON e.manager_id = s.id
)
SELECT * FROM subordinates;
\`\`\`

#### Key Points

- **Anchor member**: The initial query that forms the base result set.
- **Recursive member**: The query that references the CTE itself to build upon the previous results.
- **UNION ALL**: Combines the anchor and recursive results.
- The recursion continues until no new rows are returned.

#### Use Cases

- Hierarchical data (organizational charts, category trees)
- Graph traversals (finding paths, dependencies)
- Generating sequences or series

#### Notes

- Some databases (like MySQL before version 8.0) do not support recursive CTEs.
- Always ensure a termination condition to avoid infinite recursion.
\`\`\`
`,level:"Advanced"},{id:"801686e1-e9ea-4be3-83bd-5b0f15189784",question:"What is sharding in databases?",answer:`\`\`\`markdown **Sharding in Databases**

Sharding is a database architecture pattern that involves splitting a large dataset into smaller, more manageable pieces called "shards." Each shard is a separate database that holds a subset of the data, typically distributed across multiple servers. The main goal of sharding is to improve scalability, performance, and availability of large databases.

### Key Points

- **Horizontal Partitioning:** Sharding is a form of horizontal partitioning, where rows of a table are distributed across multiple database instances, rather than splitting tables by columns (vertical partitioning).
- **Shard Key:** A shard key is used to determine how data is distributed. For example, user ID or geographic region can be used as a shard key.
- **Independent Shards:** Each shard operates independently and can be located on different physical machines or even in different data centers.
- **Improved Performance:** By distributing data and workload, sharding reduces contention and bottlenecks, allowing for better query performance and faster response times.
- **Scalability:** Sharding enables horizontal scaling, meaning you can add more servers to handle increased load, rather than upgrading a single server (vertical scaling).

### Example

Suppose you have a user table with millions of records. Instead of storing all users in a single database, you can shard the table by user ID:

- Shard 1: Users with IDs 1–1,000,000
- Shard 2: Users with IDs 1,000,001–2,000,000
- Shard 3: Users with IDs 2,000,001–3,000,000

Each shard is stored on a different server, and queries for a specific user are routed to the appropriate shard.

### Challenges

- **Complexity:** Sharding adds complexity to application logic, especially for cross-shard queries and transactions.
- **Rebalancing:** As data grows, shards may become unbalanced and require re-sharding or data migration.
- **Consistency:** Maintaining consistency and integrity across shards can be challenging.

### Summary Table

| Aspect         | Description                                      |
|----------------|--------------------------------------------------|
| Definition     | Splitting data across multiple databases (shards)|
| Purpose        | Scalability, performance, availability           |
| Partition Type | Horizontal (by rows)                             |
| Key Component  | Shard key                                        |
| Challenges     | Complexity, rebalancing, consistency             |

**In summary:**  
Sharding is a powerful technique for scaling databases, but it requires careful planning and management to handle its inherent challenges.`,level:"Advanced"},{id:"27508a9c-c83b-41e7-92b6-be30e56f4d16",question:"Explain the concept of database partitioning.",answer:`\`\`\`markdown **Database Partitioning Explained**

Database partitioning is a technique used to divide large database tables or indexes into smaller, more manageable pieces called partitions. Each partition is stored and accessed separately, but together they represent a single logical object within the database.

### Key Concepts

- **Logical vs. Physical Partitioning:**  
  Partitioning is logical from the application's perspective (the table appears as one), but physically, data is stored in separate segments.

- **Partitioning Methods:**  
  - **Range Partitioning:** Data is divided based on a range of values (e.g., dates, IDs).
  - **List Partitioning:** Data is split based on a list of discrete values.
  - **Hash Partitioning:** A hash function determines the partition for each row, distributing data evenly.
  - **Composite Partitioning:** Combines two or more partitioning methods (e.g., range-hash).

### Benefits

- **Improved Performance:** Queries that target specific partitions can be faster due to partition pruning.
- **Easier Maintenance:** Maintenance operations (backups, archiving, purging) can be performed on individual partitions.
- **Enhanced Manageability:** Large tables are easier to manage when divided into partitions.
- **Better Availability:** Some systems allow partitions to be managed independently, improving availability.

### Example

\`\`\`sql
CREATE TABLE sales (
    sale_id INT,
    sale_date DATE,
    amount DECIMAL(10,2)
)
PARTITION BY RANGE (YEAR(sale_date)) (
    PARTITION p2022 VALUES LESS THAN (2023),
    PARTITION p2023 VALUES LESS THAN (2024)
);
\`\`\`

### Use Cases

- Large historical tables (e.g., logs, transactions)
- Data warehousing
- Multi-tenant databases

### Considerations

- Not all databases support all partitioning types.
- Partitioning adds complexity to schema design and management.
- Poorly chosen partition keys can lead to unbalanced partitions and performance issues.

---

**In summary:**  
Database partitioning is a strategy to split large tables into smaller, more manageable pieces, optimizing performance, maintenance, and scalability. The choice of partitioning method and key is crucial for achieving the desired benefits.`,level:"Advanced"},{id:"bcdc1dc0-f17a-4739-8453-f95d902aa4e2",question:"How do you enforce data integrity in SQL?",answer:`\`\`\`markdown **Answer:**

Enforcing data integrity in SQL involves ensuring the accuracy, consistency, and reliability of data within a database. This is achieved through a combination of constraints, keys, and database features. Here are the primary mechanisms:

1. **Primary Keys**
   - Ensure each row in a table is uniquely identifiable.
   - Example:
     \`\`\`sql
     CREATE TABLE employees (
         employee_id INT PRIMARY KEY,
         name VARCHAR(100)
     );
     \`\`\`

2. **Foreign Keys**
   - Enforce referential integrity between tables by ensuring that a value in one table matches a value in another.
   - Example:
     \`\`\`sql
     CREATE TABLE orders (
         order_id INT PRIMARY KEY,
         employee_id INT,
         FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
     );
     \`\`\`

3. **Unique Constraints**
   - Ensure that all values in a column or a set of columns are unique across the table.
   - Example:
     \`\`\`sql
     ALTER TABLE employees ADD CONSTRAINT unique_email UNIQUE (email);
     \`\`\`

4. **Check Constraints**
   - Restrict the range of values that can be placed in a column.
   - Example:
     \`\`\`sql
     ALTER TABLE employees ADD CONSTRAINT check_salary CHECK (salary > 0);
     \`\`\`

5. **Not Null Constraints**
   - Ensure that a column cannot have NULL values.
   - Example:
     \`\`\`sql
     ALTER TABLE employees ALTER COLUMN name SET NOT NULL;
     \`\`\`

6. **Default Constraints**
   - Assign default values to columns if no value is specified during insertion.
   - Example:
     \`\`\`sql
     ALTER TABLE employees ALTER COLUMN status SET DEFAULT 'active';
     \`\`\`

7. **Triggers**
   - Automatically enforce complex integrity rules or business logic.
   - Example:
     \`\`\`sql
     CREATE TRIGGER trg_check_age
     BEFORE INSERT ON employees
     FOR EACH ROW
     BEGIN
         IF NEW.age < 18 THEN
             SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Age must be at least 18';
         END IF;
     END;
     \`\`\`

**Summary Table**

| Integrity Type      | Mechanism         | Example Constraint      |
|---------------------|------------------|------------------------|
| Entity Integrity    | Primary Key      | PRIMARY KEY            |
| Referential         | Foreign Key      | FOREIGN KEY            |
| Domain              | Check, Not Null  | CHECK, NOT NULL        |
| Uniqueness          | Unique           | UNIQUE                 |
| Business Rules      | Triggers         | TRIGGER                |

**Best Practices:**
- Use appropriate constraints at the database level rather than relying solely on application logic.
- Regularly review and update constraints as business requirements evolve.
- Combine multiple types of constraints for robust data integrity.

By leveraging these SQL features, you can effectively enforce data integrity and maintain a reliable and consistent database.`,level:"Advanced"},{id:"3568cf5b-782f-4878-9db1-c55e3c41eeba",question:"What is the difference between OLTP and OLAP databases?",answer:`\`\`\`markdown **OLTP vs. OLAP Databases**

| Feature                | OLTP (Online Transaction Processing)           | OLAP (Online Analytical Processing)         |
|------------------------|-----------------------------------------------|--------------------------------------------|
| **Purpose**            | Handles day-to-day transactional data         | Supports complex queries and data analysis |
| **Operations**         | Insert, Update, Delete, Simple Queries        | Complex Queries, Aggregations, Reporting   |
| **Data Structure**     | Highly normalized (to reduce redundancy)      | Often denormalized (star/snowflake schema) |
| **Query Complexity**   | Simple, short, fast queries                   | Complex, long-running queries              |
| **Data Volume**        | Handles large numbers of small transactions   | Handles fewer, but larger, analytical queries |
| **Users**              | Clerks, database admins, application users    | Data analysts, business intelligence users |
| **Examples**           | Banking systems, e-commerce, order entry      | Data warehouses, business reporting        |
| **Response Time**      | Milliseconds to seconds (very fast)           | Seconds to minutes (optimized for analysis)|
| **Data Integrity**     | Very high (ACID compliance is critical)       | May relax some constraints for performance |
| **Historical Data**    | Typically stores current data                 | Stores historical and aggregated data      |

**Summary:**  
- **OLTP** systems are optimized for transactional tasks, ensuring data integrity and fast processing of large numbers of simple operations.
- **OLAP** systems are designed for analytical tasks, enabling complex queries and data analysis over large volumes of historical data.`,level:"Advanced"},{id:"3a47906c-5bd5-4245-9e36-438344771eec",question:"How do you handle concurrency in SQL databases?",answer:`\`\`\`markdown ### Handling Concurrency in SQL Databases

Concurrency in SQL databases refers to the ability of the system to handle multiple transactions simultaneously without compromising data integrity. Here’s how concurrency is managed:

#### 1. **Transactions**
- **Atomicity, Consistency, Isolation, Durability (ACID):** Transactions ensure that operations are completed fully or not at all, maintaining data integrity.
- **BEGIN TRANSACTION, COMMIT, ROLLBACK:** SQL provides commands to manage transactions explicitly.

#### 2. **Isolation Levels**
SQL databases provide different isolation levels to control how and when the changes made by one transaction become visible to others:
- **Read Uncommitted:** Allows dirty reads.
- **Read Committed:** Prevents dirty reads.
- **Repeatable Read:** Prevents non-repeatable reads.
- **Serializable:** Highest isolation, prevents phantom reads.

\`\`\`sql
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
BEGIN TRANSACTION;
-- SQL statements
COMMIT;
\`\`\`

#### 3. **Locking Mechanisms**
- **Pessimistic Locking:** Locks data when a transaction starts, preventing other transactions from modifying it until the lock is released.
    - **Row-level locks:** Lock specific rows.
    - **Table-level locks:** Lock entire tables.
- **Optimistic Locking:** Assumes conflicts are rare; checks for conflicts before committing.

#### 4. **Deadlock Detection and Resolution**
Databases detect deadlocks (when two or more transactions block each other) and resolve them by rolling back one of the transactions.

#### 5. **MVCC (Multi-Version Concurrency Control)**
- Used by databases like PostgreSQL and Oracle.
- Allows readers to access the previous version of data while writers are updating it, reducing lock contention.

#### 6. **Best Practices**
- Keep transactions short.
- Access objects in the same order in all transactions.
- Use the lowest isolation level that meets requirements.
- Properly index tables to minimize locking conflicts.

---

**Summary:**  
Concurrency in SQL databases is handled through transactions, isolation levels, locking mechanisms, deadlock detection, and MVCC. The choice of strategy depends on the specific requirements for consistency, performance, and scalability.`,level:"Advanced"},{id:"a1bebf18-9a76-414f-986c-9c1420f8aea3",question:"What are the different isolation levels in SQL transactions?",answer:`\`\`\`markdown
### Different Isolation Levels in SQL Transactions

SQL defines four standard isolation levels that determine how transaction integrity is visibly affected by the concurrent execution of transactions. These levels are specified by the SQL standard (SQL-92) and are supported by most relational database systems, although implementation details may vary.

#### 1. **Read Uncommitted**
- **Description:** The lowest isolation level. Transactions can read data that has been modified by other transactions but not yet committed ("dirty reads").
- **Phenomena Allowed:** Dirty reads, non-repeatable reads, and phantom reads.

#### 2. **Read Committed**
- **Description:** A transaction can only read data that has been committed. Dirty reads are prevented, but non-repeatable reads and phantom reads can still occur.
- **Phenomena Allowed:** Non-repeatable reads and phantom reads.

#### 3. **Repeatable Read**
- **Description:** Ensures that if a transaction reads a row, subsequent reads within the same transaction will see the same data (prevents non-repeatable reads). However, phantom reads can still occur.
- **Phenomena Allowed:** Phantom reads.

#### 4. **Serializable**
- **Description:** The highest isolation level. Transactions are completely isolated from one another, as if they were executed serially. Prevents dirty reads, non-repeatable reads, and phantom reads.
- **Phenomena Allowed:** None (all phenomena are prevented).

---

| Isolation Level     | Dirty Reads | Non-repeatable Reads | Phantom Reads |
|---------------------|:-----------:|:-------------------:|:-------------:|
| Read Uncommitted    |     Yes     |        Yes          |     Yes       |
| Read Committed      |     No      |        Yes          |     Yes       |
| Repeatable Read     |     No      |        No           |     Yes       |
| Serializable        |     No      |        No           |     No        |

#### **Summary**
- **Dirty Read:** Reading uncommitted changes from other transactions.
- **Non-repeatable Read:** Data changes between two reads in the same transaction.
- **Phantom Read:** New rows added or removed by another transaction are visible in subsequent reads.

Choosing the appropriate isolation level involves balancing data consistency with system performance and concurrency.
\`\`\`
`,level:"Advanced"},{id:"9a378a82-b079-4453-b230-5de95f478712",question:"How do you migrate data between two SQL databases?",answer:`\`\`\`markdown ### How do you migrate data between two SQL databases?

Migrating data between two SQL databases involves several steps to ensure data integrity, minimal downtime, and consistency. The approach can vary based on the database systems involved (e.g., SQL Server to MySQL, or Oracle to PostgreSQL), but the general process is as follows:

#### 1. **Assessment and Planning**
- **Analyze Source and Target Schemas:** Compare table structures, data types, constraints, indexes, and relationships.
- **Identify Data Dependencies:** Understand foreign keys and application dependencies.
- **Estimate Data Volume:** Plan for large datasets and potential downtime.

#### 2. **Schema Migration**
- **Generate Schema Scripts:** Use tools or manual scripts to create the schema in the target database.
  - For homogeneous migrations (same DBMS), tools like \`mysqldump\`, \`pg_dump\`, or SQL Server Management Studio (SSMS) can generate schema scripts.
  - For heterogeneous migrations, use tools like AWS Database Migration Service, Oracle SQL Developer, or custom ETL scripts.

#### 3. **Data Migration**
- **Export Data:** Extract data from the source database using \`SELECT INTO OUTFILE\`, \`bcp\`, or similar utilities.
- **Transform Data (if needed):** Convert data types, formats, or encodings to match the target schema.
- **Import Data:** Load data into the target database using \`LOAD DATA\`, \`BULK INSERT\`, or ETL tools.

#### 4. **Data Validation**
- **Row Counts:** Compare row counts between source and target tables.
- **Checksums/Hashes:** Use checksums or hashes to validate data integrity.
- **Spot Checks:** Manually verify critical data points.

#### 5. **Delta Migration (if required)**
- If the source database is still active during migration, capture and apply changes (CDC - Change Data Capture) to the target after the initial load.

#### 6. **Testing**
- **Application Testing:** Ensure applications work correctly with the new database.
- **Performance Testing:** Validate query performance and indexing.

#### 7. **Cutover and Go-live**
- **Switch Applications:** Point applications to the new database.
- **Monitor:** Closely monitor for issues post-migration.

#### 8. **Cleanup**
- **Decommission Old Database:** Once confident, decommission or archive the old database.

---

#### **Example: Migrating from MySQL to PostgreSQL**

1. **Schema Conversion:** Use tools like \`pgloader\` or \`AWS Schema Conversion Tool\`.
2. **Data Export/Import:** Use \`mysqldump\` to export data and \`pgloader\` or \`COPY\` to import into PostgreSQL.
3. **Validation:** Run queries to compare data between MySQL and PostgreSQL.
4. **Application Update:** Update connection strings and test application functionality.

---

#### **Best Practices**
- Always back up both source and target databases before migration.
- Test the migration process in a staging environment.
- Automate and document the migration steps for repeatability.
- Plan for rollback in case of issues.

---

**In summary:** Data migration between SQL databases is a multi-step process involving schema and data transfer, validation, and testing. The exact tools and methods depend on the source and target database systems.`,level:"Advanced"},{id:"fe48afd5-e769-4a52-9120-f47e8b466d8d",question:"What are the best practices for database security in SQL?",answer:`\`\`\`markdown **Best Practices for Database Security in SQL**

1. **Principle of Least Privilege (PoLP):**
   - Grant users only the minimum permissions necessary to perform their tasks.
   - Avoid using administrative or root accounts for application access.

2. **Strong Authentication and Authorization:**
   - Enforce strong password policies (complexity, expiration, lockout).
   - Use multi-factor authentication (MFA) where possible.
   - Regularly review and update user roles and permissions.

3. **Encryption:**
   - Encrypt sensitive data at rest using Transparent Data Encryption (TDE) or similar features.
   - Use SSL/TLS to encrypt data in transit between clients and the database server.
   - Consider column-level encryption for highly sensitive fields.

4. **Regular Patching and Updates:**
   - Keep the database management system (DBMS) and underlying OS up to date with security patches.
   - Monitor for new vulnerabilities and apply fixes promptly.

5. **Input Validation and SQL Injection Prevention:**
   - Always use parameterized queries or prepared statements to prevent SQL injection.
   - Validate and sanitize all user inputs.

6. **Database Auditing and Monitoring:**
   - Enable auditing to track access and changes to data and schema.
   - Monitor logs for suspicious activities and set up alerts for unusual behavior.

7. **Network Security:**
   - Restrict database access to trusted hosts and networks using firewalls and network segmentation.
   - Avoid exposing the database directly to the internet.

8. **Backup Security:**
   - Encrypt database backups.
   - Store backups securely and restrict access to them.
   - Regularly test backup restoration procedures.

9. **Remove Unused Services and Accounts:**
   - Disable or remove unused database features, services, and default accounts.
   - Change default ports and credentials.

10. **Secure Configuration:**
    - Harden database configuration settings (e.g., disable remote root access, limit max connections).
    - Use secure defaults and review security baselines.

**References:**
- [OWASP SQL Injection Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html)
- [Microsoft SQL Server Security Best Practices](https://learn.microsoft.com/en-us/sql/relational-databases/security/security-best-practices-database-engine?view=sql-server-ver16)
- [PostgreSQL Security Best Practices](https://www.postgresql.org/docs/current/security.html)

By following these best practices, you can significantly reduce the risk of unauthorized access, data breaches, and other security threats to your SQL databases.`,level:"Advanced"},{id:"effe96c0-df5c-4804-a9fb-29fc8a1cd465",question:"How would you troubleshoot a slow-running SQL query?",answer:`\`\`\`markdown ### Troubleshooting a Slow-Running SQL Query

To troubleshoot a slow-running SQL query, follow these steps:

1. **Analyze the Execution Plan**
   - Use \`EXPLAIN\` (MySQL/PostgreSQL) or \`SET SHOWPLAN_ALL ON\` (SQL Server) to view the query execution plan.
   - Look for full table scans, missing indexes, or costly operations (e.g., sorts, nested loops).

2. **Check Index Usage**
   - Ensure appropriate indexes exist on columns used in \`WHERE\`, \`JOIN\`, and \`ORDER BY\` clauses.
   - Use the execution plan to verify if indexes are being utilized.

3. **Review Query Structure**
   - Simplify complex queries by breaking them into smaller parts.
   - Avoid unnecessary columns in \`SELECT\` (use explicit columns instead of \`SELECT *\`).
   - Remove redundant joins or subqueries.

4. **Examine Table Statistics**
   - Ensure database statistics are up-to-date so the optimizer can make informed decisions.
   - Use commands like \`ANALYZE TABLE\` (MySQL/PostgreSQL) or \`UPDATE STATISTICS\` (SQL Server).

5. **Check for Blocking or Locking**
   - Investigate if other transactions are locking the tables or rows needed by your query.
   - Use monitoring tools or system views (e.g., \`pg_locks\`, \`sys.dm_tran_locks\`).

6. **Optimize Joins and Subqueries**
   - Use appropriate join types (\`INNER JOIN\` vs. \`OUTER JOIN\`).
   - Consider rewriting subqueries as joins or using \`WITH\` (Common Table Expressions).

7. **Review Server and Resource Utilization**
   - Check for CPU, memory, or disk bottlenecks on the database server.
   - Ensure sufficient resources are available for query execution.

8. **Test with Sample Data**
   - Run the query on a smaller dataset to isolate performance issues.
   - Compare execution times and plans.

9. **Consider Query Caching**
   - Leverage query or result caching if supported by your database.

10. **Monitor and Log Slow Queries**
    - Enable slow query logs to identify problematic queries over time.
    - Analyze logs for recurring patterns.

---

**Example: Using EXPLAIN in MySQL**
\`\`\`sql
EXPLAIN SELECT * FROM orders WHERE customer_id = 123;
\`\`\`

**Key Points:**
- Always start with the execution plan.
- Indexes and up-to-date statistics are crucial.
- Query structure and server health both impact performance.

---

**References:**
- [MySQL EXPLAIN Statement](https://dev.mysql.com/doc/refman/8.0/en/explain.html)
- [SQL Server Query Execution Plans](https://docs.microsoft.com/en-us/sql/relational-databases/performance/display-an-actual-execution-plan)
- [PostgreSQL EXPLAIN](https://www.postgresql.org/docs/current/using-explain.html)`,level:"Advanced"}];export{e as default};
