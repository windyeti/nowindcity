function Review() {
	Container.call(this);
	this.id = '';
	this.goodReviews = [];
	this.resultSearch = {};
}
Review.prototype = Object.create(Container.prototype);
Review.prototype.constructor = Review;

Review.prototype.render = function(idProduct, objSelected) {
	// console.log(objSelected.text());
	this.$goodSelected = objSelected;
	// console.log(this.$goodSelected.text())
	// this.$divReview = $('<div>').attr({'class' : 'review'});
	
	this.getReviews(idProduct);
	var proba = $('#review').text();
	console.log(proba);
};

Review.prototype.getReviews = function(idProduct) {
	function view(value) {
		this.resultSearch = value;
	}
	var resultSearch = 0;
	$.ajax({
		url : 'review.good.json',
		dataType : 'json',
		context : this,
		success : function(data) {
			var dataDiv = $('<div>', {'id' : 'review'})
			if(data.result == 1) {				
				$(data.goods).each(function(inx, value) {
					if(value.id_product == idProduct) {
						// view(value);
						// $.each(value.reviews, function(inx, value) {
						// 	var $divSubmit = $('<div>').attr('class', 'submit').text(value.submit);
						// 	$divSubmit.append( $('<span>').attr('class', 'plus').text('--одобрить--') );
						// 	var $divContainer = $('<div>').attr('class','reviewContainer');
						// 	$divContainer.append( $divSubmit );
						// 	$divContainer.append( $('<div>').attr('class', 'textReview').text(value.text) )
						// })
						
						// resultSearch = $divContainer;
						// console.log(resultSearch)
						dataDiv.text('проба')
					}
				});
			}
		},
		error : function() {
		}
	});
};