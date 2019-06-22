var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

/*document.querySelector(".checkbox").addEventListener("click", e => {
	document.querySelector(".tick").className = document
		.querySelector(".tick")
		.className.match("active")
		? "tick"
		: "tick active";
});
