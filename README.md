# Sample React registration page

This is simple user registration app built using React

### Run instruction

do yarn install and run:

```
yarn start-app
```

This will run both server and front end code

### Features

- User can go to the login page. To login, use the credentials-
  user name: <b>admin</b>
  password: <b>admin</b>

- User can login to the app with above mentioned credential and they will be landed to dashboard page

- User can click on the logout button from Dashboard page and they will be landed to Login page

- On login page, there is SignUp link which will take user to sign up page

- All fields are mandatory to do signup. On successful signup, user will be landed to login page

- Once user logged in, they cant come to login page. Once user logged iut, then cant navigate to dashboard page

### Notes

- This app has been built with minimal features. Approx dev time: 2hrs 45 mins

- No extra form validation has been implemented. Standard browser form validation is in place

- There is no data persistence in place. Values are hardcoded

- No session validation is done. Only basic auth is in place

- Coding standard best practices have been followed

- No separate Webpack is used because create-react-app uses webpack internally
