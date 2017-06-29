# CodeceptjsNightmare

1. java -jar  activeadmin-demo.war
2. http://localhost:8080 
3. npm install download all dependencies
4. since all test file written in ES6. so need change the IDE support ES6(Preferences -> Languages & Frameworks -> Javascript -> ECMASript6)
5. codeceptjs run --reporter/debug/steps/


#What is Nightmare?

It is modern Electron based testing framework which allows to execute tests in headless mode as well as in window mode for debug purposes. This makes Nightmare very useful, much more handy than PhantomJS. Nightmare is in active development and has nice API for writing acceptance tests. Unfortunately, as all other JavaScript testing frameworks it has its own very custom API. What if you choose it for a project and suddenly you realize that you need something more powerful, like Selenium? Yes, that might be a problem if you are not using CodeceptJS. The one idea behind CodeceptJS is to unify different testing backends under one API, so you could easily write tests the same way no matter what engines you use: webdriverio, Protractor, or Nightmare.
