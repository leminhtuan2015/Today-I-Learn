### What is Serialization?
### What are the types of Serialization?

------------------------------------------------------------------------------------------------

### What is Serialization?

  * Serialization is the process of converting the **state of an object instance** to a **stream of data (bytes)**
  * Deserialization is its reverse process, that is unpacking stream of bytes to their original form
  
  * Uses for serialization: Use Serialization, a developer can perform actions like **sending the object** to a remote application by means of a Web Service
  
  
  ```c#
  Product product = new Product();

  product.Name = "Apple";
  product.ExpiryDate = new DateTime(2008, 12, 28);
  product.Price = 3.99M;
  product.Sizes = new string[] { "Small", "Medium", "Large" };

  // SerializeObject
  string output = JsonConvert.SerializeObject(product);
  //{
  //  "Name": "Apple",
  //  "ExpiryDate": "2008-12-28T00:00:00",
  //  "Price": 3.99,
  //  "Sizes": [
  //    "Small",
  //    "Medium",
  //    "Large"
  //  ]
  //}

  // DeserializeObject
  Product deserializedProduct = JsonConvert.DeserializeObject<Product>(output);
  ```
  
### What are the types of Serialization?

  * The different types of Serialization are: 
    * XML serialization
    * SOAP serialization
    * Binary serialization
    
    * XML serialization – It serializes all the public properties to the XML document. Since the data is in XML format, it can be easily read and manipulated in various formats. The classes reside in System.sml.Serialization.
    * SOAP – Classes reside in System.Runtime.Serialization. Similar to XML but produces a complete SOAP compliant envelope which can be used by any system that understands SOAP.
    * Binary Serialization – Allows any code to be converted to its binary form. Can serialize and restore public and non-public properties. It is faster and occupies less space.
