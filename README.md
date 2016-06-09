# Firebase Data Relation Example

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## 1. Create an Account
The first thing needed to do is [sign up for a free Firebase account](https://firebase.google.com/).
A brand new Firebase project will automatically be created for you which you will use in conjunction with AngularFire to authenticate users and store and sync data.

## 2. Initialize the Firebase SDK

You'll need to initialize the Firebase SDK. You can find more details on the
[web](https://firebase.google.com/docs/web/setup)

```js
<script>
  // Initialize the Firebase SDK
  var config = {
    apiKey: '<your-api-key>',
    authDomain: '<your-auth-domain>',
    databaseURL: '<your-database-url>',
    storageBucket: '<your-storage-bucket>'
  };
  firebase.initializeApp(config);
</script>
```
## 3. Project install
- Run `npm install` and `bower install` 

## 4. Build & development
- Run `grunt` for building and `grunt serve` for preview.

## 5. Testing
Running `grunt test` will run the unit tests with karma.

## 6. Live Demo
[Demo](https://relation-example.firebaseapp.com/)
