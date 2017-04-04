### POD dependencies

---------------------------------

### POD dependencies
  -  You can use other pod in your pod when use as dependencies

  ```
  Pod::Spec.new do |s|
    ......

    s.dependency 'Alamofire', '~> 4.4'
    s.dependency 'SwiftyJSON'
    s.dependency 'SomeOtherPod'

    ......

  end
  ```
