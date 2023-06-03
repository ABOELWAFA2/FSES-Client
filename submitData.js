// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAIeO2rS7cLi8pngrfHhXH2s9POBqWSvcA",
  authDomain: "fast-8d133.firebaseapp.com",
  projectId: "fast-8d133",
  storageBucket: "fast-8d133.appspot.com",
  messagingSenderId: "48619615319",
  appId: "1:48619615319:web:ff891495ba805157145f12"
};

firebase.initializeApp(firebaseConfig);

var firestore = firebase.firestore();
var storage = firebase.storage();
function submitData() {
  var name = document.getElementById('name').value;
  var age = document.getElementById('age').value;
  var gender = document.getElementById('gender').value;
  var videoFile = document.getElementById('video').files[0];
  var imageFile = document.getElementById('image').files[0];

  if (!name || !age || !gender || !videoFile) {
    alert("Please fill in all fields");
    return;
  }

  // Upload video file to Firebase Storage
  var videoStorageRef = storage.ref('videos/' + videoFile.name);
  var videoUploadTask = videoStorageRef.put(videoFile);

  // Upload image file to Firebase Storage
  var imageStorageRef = storage.ref('images/' + imageFile.name);
  var imageUploadTask = imageStorageRef.put(imageFile);

  videoUploadTask.on('state_changed',
    function(snapshot) {
      // Handle video upload progress or other events if needed
    },
    function(error) {
      console.error('Error uploading video:', error);
    },
    function() {
      // Video uploaded successfully, get video download URL
      videoUploadTask.snapshot.ref.getDownloadURL()
        .then(function(videoDownloadURL) {
          imageUploadTask.on('state_changed',
            function(snapshot) {
              // Handle image upload progress or other events if needed
            },
            function(error) {
              console.error('Error uploading image:', error);
            },
            function() {
              // Image uploaded successfully, get image download URL
              imageUploadTask.snapshot.ref.getDownloadURL()
                .then(function(imageDownloadURL) {
                  // Create a document in Firestore
                  firestore.collection('userData').add({
                    name: name,
                    age: age,
                    gender: gender,
                    videoURL: videoDownloadURL,
                    imageURL: imageDownloadURL,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                  })
                  .then(function() {
                    alert('Data submitted successfully!');
                    // Reset form fields
                    document.getElementById('name').value = '';
                    document.getElementById('age').value = '';
                    document.getElementById('gender').value = '';
                    document.getElementById('video').value = '';
                    document.getElementById('image').value = '';
                  })
                  .catch(function(error) {
                    console.error('Error submitting data:', error);
                  });
                })
                .catch(function(error) {
                  console.error('Error getting image download URL:', error);
                });
            }
          );
        })
        .catch(function(error) {
          console.error('Error getting video download URL:', error);
        });
    }
  );
}