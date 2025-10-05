- Create a repository
- Initialize the repository
- node_modules, package.json ,package-lock.json
- Install express
- listen to port
- write request handlers for /test ,/hello
- Install nodemon and update scripts
- what is the use of "-g" while npm install
- Differnt between caret and tilde (^,~)

- initialize git
- gitignore
- Create a remote repo on github
- push all code to remote repo
- play routes
- order matter in routes
- Install Postman
- write handler GET,POST,PATCH,DELETE api
- explore routing use ?,\*,()
- use of regex in routing /a/,/\*fly&/
- Reading the query params in route
- Reading dynamic routes

- Multiple Route Handlers - play with the code
- next()
- next function and error along with res.send()
- app.use("/route",rh,[rh2,rh3],rh4)
- what is a Middleware ? why do we need it?
- How express JS basiclly handles req behind the sences
- Difference app.use and app,all
- write a dummy auth middleware for admin
- write a dummy auth middleware for all user routes, except user/login

- Create a free cluster on MongoDB official webside (Mongo Atlas)
- Install mongoose libray
- Connect your application to the Database 'Connect-url"
- call the connectDB function and connect to database befor starting appliction on port
- create a useSchema &user Model
- create POST /singup api to add data to database
- Push some documents using Api calls from postman
- Error Handing using try ,catch

- Js object vs Json (difference)
- Add the express .json middleware to your app
- Make your singup api dynamic to recive data fro the end user
- User .findOne with duplucate email ids, which object returned
- Api get user by email
- Api Feed api Get/feed - get all the users from the database
- Create a delete user api
- Difference between Patch and put
- api Update user
- Explore the Mongoose Documention for model methods
- What are options in a Model.findOneAndUpdate method, explore more about it
- api Update the user with email id

- Explore schematype options from the documention
- add required ,unique, lowercase ,min, minLength,trim
- add default
- Create a custom validate function for gender
- Improve the DB schema - PuT all validiation on each field in Schema
- add timeStamp to the userschema
- Add api level validation on patch request & singup post api
- Data sanitizing - Add api validation for each field
- Install Validator
- explore validator library function and use Validator funs for password , email
- never trust req.body

- Validate data in Signup API
- Install bcrypt package
- Create Password using bcrypt.hash & save the user is excrupted password
- Create login api
- Compare passwords and throw errors if email or password is inavlid



- install cookie-parse
- just send a dummmy cookie to user
- create get /profle Api and check if you get the cookie back
- In login API, after eamil and password validate ,create a jWt token and send it user data
- read the cookies inside your profle API and find the logged in user
- userAuth Middleware
- add the userAuth middle ware in profile Api and a new sendConnnectionRequest Api
- set the Expiry of JWT and cookies to 7 days 
- create userSchema method to getJwt()
- Create userSchema method to comparePassword(passwordInputUser)



- Explore tinder APIs
- Create a list all API you can think of in Dev Tinder
- Group multiple router under repective router
- read documentaion for express.Router
- Create router folder for manging auth , profile , request,routers
- Create authRouter ,profleRouter ,requestRouter
- Import these router in app.js