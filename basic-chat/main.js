$(document).ready(function(){

	var database = firebase.database();

	// database.ref("/user").set({
	// 	name: "Mudit",
	// 	age: 5
	// });

	function sendMessage() {
		var message = $("#msgBox").val();
		var msgRef = database.ref("/messages").push();
		msgRef.set({
			body: message,
			author: "Mudit"
		})
		$("#msgBox").val("");
	}

	function readMessages() {
		var msgRef = database.ref("/messages");
		msgRef.on("value", function(snapshot){
			var messages = snapshot.val();
			$("#msgDiv").empty();
			for (key in messages) {
				var message = messages[key];
				$("#msgDiv").append(`
					<p>
					${message.body} - ${message.author}
					</p>
				`);
			}
		})
	}

	$("#sendBtn").click(sendMessage)

	readMessages();

})












