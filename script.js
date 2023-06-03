
    // Initialize Firebase with your project's credentials
    var firebaseConfig = {
  apiKey: 'AIzaSyCFPsHgfd80s1uIoxyUHtswvqCOR7RvFHU',
  authDomain: 'video-230d5.firebaseapp.com',
  databaseURL: 'https://video-230d5-default-rtdb.firebaseio.com',
  projectId: 'video-230d5',
  storageBucket: 'video-230d5.appspot.com',
  messagingSenderId: '1074717185701',
  appId: '1:1074717185701:web:7a9ce216abd74f47a19f4c'
    };

    firebase.initializeApp(firebaseConfig);

    function handleFileUpload() {
      var fileInput = document.getElementById('fileInput');
      var file = fileInput.files[0];

      var storageRef = firebase.storage().ref();
      var fileRef = storageRef.child('videos/' + file.name);

      var uploadTask = fileRef.put(file);

      uploadTask.on('state_changed',
        function(snapshot) {
          // Observe upload progress if needed
        },
        function(error) {
          console.error('Error uploading file:', error);
          alert('Error uploading file.');
        },
        function() {
          alert('File uploaded successfully!');
        }
      );
    }
