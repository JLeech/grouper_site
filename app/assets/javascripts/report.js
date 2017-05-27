
$(document).on("turbolinks:load", function() {

	$("#report_search").keyup(function(event){
	    if(event.keyCode == 13){
	        $.ajax({
		      contentType: "application/json",
		      url: '/report_from_tab',
		      data: {report_id: $("#report_search").val()},
		      async: true,
		    }).done(function(answer) {
		      $("h2#report_id").html(answer["report_id"]);
		      $("h2#report_state").html(answer["report_state"]);
		      $("h2#report_created_at").html(answer["report_created_at"]);
		      if(answer["load_link"] != undefined){
		        $("a#download_report_btn").removeClass("disabled");
		        $("a#download_report_btn").attr('href',answer["load_link"])
		      }
		    });
	    }
	});
})