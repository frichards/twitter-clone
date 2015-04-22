
$( document ).ready(function(){

var tweetCompose = $(".tweet-compose");
var tweetSubmit = $("#tweet-submit");
var charCount = $("#char-count");
var time = $('.time');
	$(".stats").hide();
	$(".reply").hide();




tweetCompose.on("click", function() {
			$(".tweet-compose").css("height", "5em");
			// $("#tweet-controls").css("display", "block");
			tweetSubmit.attr("disabled", true);
			$("#tweet-controls").toggle();

	});

	tweetCompose.on("keyup", function() {
		console.log("keyup");
		var count = tweetCompose.val().length;
		var totalCount = 140 - count;

		charCount.html(totalCount);
		
		
		if(totalCount<=10){
		charCount.css("color", "red");
		}
		else{
		charCount.css("color", "#999");	
		}


		if (totalCount === 140 || totalCount < 0){
		tweetSubmit.attr("disabled", true);
		}
		else{
		tweetSubmit.attr("disabled", false);
		}
		

	});

		$(".tweet").on("click", function() {
			$(this).find($('.stats')).show({duration:400});
			$(this).find($('.reply')).show();
		});

	
	tweetSubmit.on("click", function() {
		console.log("submit click");
		$("#tweet-controls").toggle();
		var el = $('.tweet:first').clone().addClass('tweet');
		el.find('.avatar').prop('src', 'img/alagoon.jpg');
		el.find('.fullname').html('Fumiko Richards');
		el.find('.username').html('@fr');
		el.find('.tweet-text').html(tweetCompose.val());
		el.find('.time').html(time.timeago());
		el.addClass('tweet');
		$('#tweet-controls').css({display: 'none'});
		$('#stream').prepend(el);
		$(".tweet-compose").val = '';
	});



});


