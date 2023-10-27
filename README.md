# PipeArticle

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Exploring the Power of Angular Pipes.

Angular is a powerful and versatile framework for building web applications, and one of its most useful and often underutilized features is pipes. These unassuming components of Angular play a significant role in transforming and presenting data in a user-friendly way. In this article, we will take a closer look at Angular pipes and how they can simplify data transformation, making your web development tasks more efficient.
Understanding Angular Pipes
Angular Pipes are fundamental part of Angular's template syntax, enabling developers to transform and format data within the template without modifying the underlying data source. They are simple to use and can be applied to various data types,including strings,numbers, dates and custom objects.
Transformation of Input based on built-in PipesAngular comes with a range of built-in pipes, such as DatePipe, UpperCasePipe, CurrencyPipe, etc… . Additionally, developers can create their custom pipes to provide to specific requirements, further enhancing the versatility of this feature. Below we will provide an example of a custom filter Pipe.
DatePipe ExampleCustom Angular Pipe  - FilterArray 

The 'filter' is a custom Angular tool that filters lists of items. It's used to make Angular templates cleaner and easier to read.
 It works by checking if certain conditions are met:
If no items or conditions are given, it returns the items as they are.
If 'inStock' is chosen, it shows only available items.
It can also filter items by category like 'Electronics,' 'Furniture,' and 'Stationery.'
If none of the above conditions match, it looks for items with a property that matches the given condition.

In short, this tool is great for sorting items in online stores or catalogs.
Usage:
As seen at line 31 and 38 we are using our pipe to filter the category and the availability of the products. 
  Access full code here
Conclusion:
Angular pipes are a valuable tool in a developer's arsenal, simplifying data transformation, presentation, and manipulation.
Angular's FilterArrayPipe offers a declarative approach to filtering array data right within our templates. By understanding how to leverage built-in and custom pipes, you can enhance the user experience of your web applications and make your code more efficient and organized. So, next time you find yourself working on an Angular project, don't forget to explore the potential of Angular pipes for seamless data transformation.
Happy Coding ! :)
