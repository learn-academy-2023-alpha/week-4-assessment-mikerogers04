# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: OOP is where everything is an object and all objects are an instance of a class. When objects are an instance of a class, it makes it easier to reuse code and refactor functions as needed. You can create many instances of a single class. The major difference between OOP and functional programming is functions would be static. By static I mean that functions were only usable on whatever the function data called for. This created a major problem because if functions were not reusable, then programs would get very large in size with redudant code and break easier. The idea of OOP, allowed for functions and code in general to become reusable. The more reusable the code, the more scalable programs could be written. 

Researched answer: Functional programming has benefits in it's own right. You could create functions for any type of data that would be passed in the functions argument. But, the problem with this type of programming is once a function is written for a specific data, it cannot be reused on other types of data. More functions would need to be written to support other data types. Continuing this trend would lead to inefficiency and non-reusable code. OOP allows for different data types to be stored in objects or in other words everything is an object. Functions can be passed these objects and can be reusable for different data types. 

1. What is the difference between a Float and an Integer in Ruby?

Your answer: In Ruby, Floats have decimal points, while Integers are whole numbers. When mathmetical operations are applied to these data types, there is also a difference. For Integers, simple addition, subtraction, and multiplication is standard. For example, 5 + 5 = 25 or 10 * 5 = 50. For division for Integers in Ruby, you will get a zero division error for dividing any Integer by 0. Whereas, for Floats, you will receive infinity for dividing two float numbers by zero. For example, 5.0 / 0.0 = infinity in Ruby.

Researched answer: Float numbers are the only that can return a NaN or Infinity. You can do mathmetical operations on an integer and a float and the return will be a float number. Floats have decimals and are a fractional part of a number. Integers are whole numbers that can be positive, negative, and zero. 

1. Ruby has an implicit return. What does that mean?

Your answer: In Ruby, an implicit return means an automatic return. When creating a block or if/else conditionals for example, it is implied in Ruby that there will be a return without having to define what that return is. There is no need for the keyword return unlike in JavaScript. 

Researched answer: Ruby has the keyword return, but is not necessary to return something from a defined method. 

1. What is a block in Ruby?

Your answer: A Ruby block consists of a defined method that has a do/end. Methods can run without a block inside of them. But, to manipulate data inside of the method, a do/end is needed. 

Researched answer: A do/end is an anonymous function inside of a method to determine outcome of the return. 

1. How do you extract a value in a Ruby hash?

Your answer: The word extract is a bit arbitrary but, I believe it means how can you print out a value from a hash. You can simply print out the value using bracket notation and calling on the symbol inside the brackets.

For exmaple: 
my_hash = {:item1 => 'apple'}
p my_hash[:item1] => "apple" 

Researched answer: Alternatively, you can print the entire hash to show everything in it. You can also print just the keys or values inside the hash. 

For exmaple:
p my_hash = {:item1=>"apple"}   
p my_hash.keys => [:item1]  
p my_hash.values => ["apple"]  

## Looking Ahead: Terms for Next Week

1. Class Inheritance: Inheritance is one of the four pillars of OOP. Inheritance allows classes to share behaviors with one another. A superclass can be created that can have similar behavior between multiple classes. This superclass can pass down these behaviors to sub classes. (Parent to child relationship)

2. RSpec: Request Specification is used for testing behavior on objects in Ruby. RSpec is used in BDD(Behavior Driven Development). 

3. CRUD: Ruby concept: Create, read, update, delete is how CRUD is defined to. The four basic maniupulations to data. 

4. Test-driven development: TDD: Test, Test failed, Pseudo/write code, pass test, refactor if needed

5. HTTP: Hypertext Transfer Protocol is a protocol in the application layer on the TCP/IP stack. Basically, a user on a local machine can open a browser and enter in a url to go to a website. The local machine when the url is entered will create a request to the server that url is located at. The request will either be accepted or denied based on protocol standards on the server system. The request sent to the server is called a SSL (Secure Socket Layer). An SSL is a hand shake idea where the the requester and the server are in agreement on something. If there is an agreement, the request will be accepted and a response will be sent back to the local machine giving access to that website. Webpages can have HTTP or HTTPS depending on the creator of the webpage. The S stands for secure. 
