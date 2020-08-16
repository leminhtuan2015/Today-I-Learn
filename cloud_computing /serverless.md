### Serverless

* BaaS – Backend as a Service: Using API from third-party
* FaaS – Function as a Service: Write code and deploy, no need to care about the hardware, config, management server

* Run your code on server with zero server management.
* Serverless – dịch ra tiếng Việt là "Không có máy chủ", nhưng thực chất thì nó không đúng theo nghĩa đen đâu nhé, 
không có máy chủ thì làm sao mà chạy được ứng dụng, ở đây, 
không máy chủ nghĩa là bạn làm lập trình viên (có ít kinh nghiệm về system) , 
bạn chỉ cần viết code, và không cần quan tâm nhiều về máy chủ, phần đó để cho các nhà cung cấp điện toán đám mây quản lý.


### Serverless computing providers
* Google Cloud Functions
* Amazon Lambda
* MicroSoft Azure Functions

### Serverless Framework:
* https://www.serverless.com/
* https://github.com/serverless/serverless#how-to-install-a-service
* Serverless Framework – Build web, mobile and IoT applications with serverless architectures using AWS Lambda, Azure Functions, Google CloudFunctions & more
* Serverless is just the adapter support deploy Serverless code on any provider  (Amazon, GG, Microsoft)

* Call serverless at local

```
	serverless invoke local -f hello --data “my data”

  # param --data is the event pass to handler 
```

### AWS Lambda

* https://github.com/awslabs/serverless-application-model

* Call serverless at local

```
sam local invoke "HelloWorldFunction"

sam local invoke  HelloWorldFunction --event events/event.json

# param --event is the event pass to handler 

event.json
{
	"username": "xxx,
	"password": "yyy”,
 }

```
