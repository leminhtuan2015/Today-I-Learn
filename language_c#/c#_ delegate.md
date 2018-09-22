### C# Delegate

* **Delegates** are similar to pointers to functions, in C or C++.
* A delegate is a reference type variable that holds the reference to a method
* Delegates là 1 con trỏ hàm, Delegates là kiểu tham chiếu (con trỏ), trỏ đến một hàm.
* Delegates are especially used for implementing events and the **call-back methods**.


```c#

using System;

delegate int NumberChanger(int n);
namespace DelegateAppl {
   
   class TestDelegate {
      static int num = 10;
      
      public static int AddNum(int p) {
         num += p;
         return num;
      }
      public static int MultNum(int q) {
         num *= q;
         return num;
      }
      public static int getNum() {
         return num;
      }
      static void Main(string[] args) {
         //create delegate instances
         NumberChanger nc1 = new NumberChanger(AddNum);
         NumberChanger nc2 = new NumberChanger(MultNum);
         
         //calling the methods using the delegate objects
         nc1(25);
         Console.WriteLine("Value of Num: {0}", getNum());
         nc2(5);
         Console.WriteLine("Value of Num: {0}", getNum());
         Console.ReadKey();
      }
   }
}
```
