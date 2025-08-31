const e=[{id:"mq-1",question:"What is RabbitMQ, and how does it work?",answer:[{type:"text",content:"RabbitMQ is an open-source message broker that enables asynchronous communication between services by sending messages via queues."},{type:"list",items:["**Producer**: Sends messages to an exchange.","**Exchange**: Routes messages to the appropriate queue based on bindings.","**Queue**: Stores messages until they are consumed.","**Consumer**: Receives and processes messages from the queue."]}]},{id:"mq-2",question:"What are the types of exchanges in RabbitMQ?",answer:[{type:"list",items:["**Direct Exchange**: Routes messages based on an exact match of the routing key.","**Fanout Exchange**: Broadcasts messages to all bound queues, ignoring routing keys.","**Topic Exchange**: Uses pattern-based routing (e.g., `logs.*` for all log messages).","**Headers Exchange**: Routes messages based on header attributes instead of routing keys."]}]},{id:"mq-3",question:"How do you implement a basic producer and consumer in RabbitMQ using Python?",answer:[{type:"code",language:"python",content:`import pika

# Establish connection
connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
channel = connection.channel()

# Declare a queue
channel.queue_declare(queue='hello')

# Publish message
channel.basic_publish(exchange='', routing_key='hello', body='Hello RabbitMQ!')
print(" [x] Sent 'Hello RabbitMQ!'")
connection.close()`},{type:"code",language:"python",content:`import pika

connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
channel = connection.channel()

# Declare queue
channel.queue_declare(queue='hello')

# Callback function
def callback(ch, method, properties, body):
    print(f" [x] Received {body.decode()}")

# Start consuming
channel.basic_consume(queue='hello', on_message_callback=callback, auto_ack=True)
print(' [*] Waiting for messages. To exit, press CTRL+C')
channel.start_consuming()`}]},{id:"mq-4",question:"What are some real-world use cases for RabbitMQ?",answer:[{type:"list",items:["**Event-Driven Architecture**: Decouple microservices by using RabbitMQ for event-based communication.","**Task Queueing**: Distribute background jobs to multiple workers (e.g., processing images, sending emails).","**Log Aggregation**: Collect logs from multiple services and route them to the appropriate storage or monitoring tools.","**Rate Limiting**: Control API request rates by enqueueing requests and processing them at a controlled rate.","**IoT Communication**: Send and receive messages from IoT devices in a scalable way."]}]}];export{e as default};
