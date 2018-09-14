### Project Structure
### Important Files
### Project Structure

---------------------------------------------------------------------------

### Project Structure

* models — Contains database models. We will discuss this later in further detail.
* public — Static resources publicly available to the app.
* routes — Javascript files, such as view controllers and api controllers.
* templates —Contains semantic view templates.

### Important Files

* keystone.js- The main application file which configures and starts the app.
* routes/index.js- Route endpoints are registered here.
* templates/views/layouts/default.hbs- This is the main template file.

### Project Structure diagram

```
|--lib
|  Custom libraries and other code
|--models
|  Your application's database models
|--public
|  Static files (css, js, images, etc.) that are publicly available
|--routes
|  |--api
|  |  Your application's api controllers
|  |--views
|  |  Your application's view controllers
|  |--index.js
|  |  Initialises your application's routes and views
|  |--middleware.js
|  |  Custom middleware for your routes
|--templates
|  |--includes
|  |  Common .pug includes go in here
|  |--layouts
|  |  Base .pug layouts go in here
|  |--mixins
|  |  Common .pug mixins go in here
|  |--views
|  |  Your application's view templates
|--updates
|  Data population and migration scripts
|--package.json
|  Project configuration for npm
|--keystone.js
|  Main script that starts your application
```
