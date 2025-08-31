const e=[{id:"mq-5",question:"What are advanced RabbitMQ messaging patterns?",answer:[{type:"list",items:["**Work Queues**: Distribute workload across multiple workers to ensure load balancing.","**Publish/Subscribe (Fanout Exchange)**: Broadcast messages to multiple consumers simultaneously.","**RPC (Remote Procedure Call) with RabbitMQ**: Implement request-response patterns for microservices.","**Dead-Letter Queues (DLQ)**: Capture failed messages for analysis and retry mechanisms.","**Delayed Messages**: Schedule message delivery using RabbitMQ plugins.","**High Availability (HA) Queues**: Ensure resilience by mirroring queues across multiple nodes in a RabbitMQ cluster."]}]},{id:"mq-6",question:"How do you publish a message to RabbitMQ in Golang?",answer:[{type:"code",language:"go",content:`package main

import (
    "log"
    "github.com/streadway/amqp"
)

func main() {
    conn, err := amqp.Dial("amqp://guest:guest@localhost:5672/")
    if err != nil {
        log.Fatal(err)
    }
    defer conn.Close()

    ch, err := conn.Channel()
    if err != nil {
        log.Fatal(err)
    }
    defer ch.Close()

    q, err := ch.QueueDeclare("task_queue", true, false, false, false, nil)
    if err != nil {
        log.Fatal(err)
    }

    body := "Hello RabbitMQ!"
    err = ch.Publish("", q.Name, false, false, 
        amqp.Publishing{
            DeliveryMode: amqp.Persistent,
            ContentType:  "text/plain",
            Body:         []byte(body),
        })
    if err != nil {
        log.Fatal(err)
    }
    log.Println("Message sent!")
}`}]},{id:"mq-7",question:"How do you consume messages from RabbitMQ in C#?",answer:[{type:"code",language:"csharp",content:`using System;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;
using System.Text;

class Receive {
    public static void Main() {
        var factory = new ConnectionFactory() { HostName = "localhost" };
        using var connection = factory.CreateConnection();
        using var channel = connection.CreateModel();
        
        channel.QueueDeclare(queue: "task_queue", durable: true, exclusive: false, autoDelete: false, arguments: null);

        var consumer = new EventingBasicConsumer(channel);
        consumer.Received += (model, ea) => {
            var body = ea.Body.ToArray();
            var message = Encoding.UTF8.GetString(body);
            Console.WriteLine("Received {0}", message);
        };

        channel.BasicConsume(queue: "task_queue", autoAck: true, consumer: consumer);
        Console.WriteLine("Waiting for messages...");
        Console.ReadLine();
    }
}`}]},{id:"mq-8",question:"What are Dead-Letter Queues (DLQ) in RabbitMQ, and why are they useful?",answer:[{type:"text",content:"A Dead-Letter Queue (DLQ) is a queue where messages that cannot be processed successfully are moved instead of being lost."},{type:"list",items:["**Use Cases:**","Messages that exceed retry limits can be stored for debugging.","Unroutable messages that do not match any binding keys.","Handling expired messages that exceed their TTL (Time-to-Live)."]},{type:"code",language:"go",content:`args := amqp.Table{"x-dead-letter-exchange": "dlx-exchange"}
ch.QueueDeclare("task_queue", true, false, false, false, args)`}]},{id:"mq-9",question:"How can you scale RabbitMQ consumers in Golang?",answer:[{type:"list",items:["**Multiple Consumers**: Run multiple instances of the consumer application.","**Prefetch Count (QoS settings)**: Limit the number of unacknowledged messages per consumer to prevent overload.","**Load Balancing**: RabbitMQ automatically distributes messages across consumers.","**Clustered Deployment**: Deploy RabbitMQ nodes in a cluster to distribute queues across multiple servers."]},{type:"code",language:"go",content:"ch.Qos(1, 0, false) // Prefetch count of 1 for fair load balancing"}]},{id:"mq-01",question:"What is QueueDeclare in RabbitMQ?",answer:[{type:"text",content:"QueueDeclare is a function that creates a queue if it does not exist. It ensures that messages can be sent and received reliably."},{type:"code",content:`q, err := ch.QueueDeclare(
    "task_queue", true, false, false, false, nil
)`,language:"go"}]},{id:"mq-02",question:"What are the QueueDeclare parameters and their impact?",answer:[{type:"table",columns:["Parameter","Type","Description"],rows:[["name","String","Queue name (if empty, RabbitMQ assigns a random name)."],["durable","Bool","If true, the queue persists after a RabbitMQ restart."],["autoDelete","Bool","If true, queue is deleted when the last consumer disconnects."],["exclusive","Bool","If true, the queue is only for the current connection."],["noWait","Bool","If true, does not wait for a response from RabbitMQ."],["arguments","Map","Custom queue settings like TTL, DLQ, priority."]]}]},{id:"mq-03",question:"How do you configure a Dead-Letter Queue (DLQ) in RabbitMQ?",answer:[{type:"text",content:"Dead-Letter Queues (DLQs) store messages that cannot be processed successfully."},{type:"code",content:`args := amqp.Table{
    "x-dead-letter-exchange": "dlx-exchange",
}
q, err := ch.QueueDeclare("task_queue", true, false, false, false, args)`,language:"go"}]}];export{e as default};
