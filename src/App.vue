<template>
  <div id="app" class="container">
    <div class="page-header">
      <h1>soulmates and strangers</h1>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Add New Books</h3>
      </div>
      <div class="panel-body">
         <form id="form" class="form-inline" v-on:submit.prevent="addPerson">
          <div class="form-group">
            <label for="personSecret">Secret:</label>
            <input type="text" id="personSecret" class="form-control" v-model="newPerson.title">
          </div>
          <div class="form-group">
            <label for="personLocation">Author:</label>
            <input type="text" id="personLocation" class="form-control" v-model="person.location">
          </div>
        
          <input type="submit" class="btn btn-primary" value="Add Person">
        </form>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">People List</h3>
      </div>
      <div class="panel-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Secret</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="person in people">
              <td>{{person.secret}}</td>
              <td>{{person.location}}</td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>

import firebase from 'firebase';
  var firebaseConfig = {
    apiKey: "AIzaSyBw8yKQWqUi131TEK-Wvrt3TFspoMCxLBU",
    authDomain: "soulmates-strangers.firebaseapp.com",
    databaseURL: "https://soulmates-strangers-default-rtdb.firebaseio.com",
    projectId: "soulmates-strangers",
    storageBucket: "soulmates-strangers.appspot.com",
    messagingSenderId: "797990605486",
    appId: "1:797990605486:web:be60d638ae7ce28e29933f",
    measurementId: "G-8TKWGNV9VG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// let db = app.database();

// let peopleRef= db.ref('people');

export default {
  name: 'App',
  firebase: {
    people: peopleRef
  },
  
  data () {
    return {
      newPerson: {
          secret: '',
          location: ''
      }
    }
  },

  
   methods: {
      addPerson: function () {
        peopleRef.push(this.newPerson);
        this.newPerson.secret = '';
        this.newPerson.location = '';
      },
      
    },


}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
