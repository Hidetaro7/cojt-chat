$(".main_header .fa-bars").on("click", clicked);

function clicked () {
	$("body").addClass("menu_open");
}

$(".drawer_menu .close_btn .fa-times").on("click", closeClicked);

function closeClicked () {
	$("body").removeClass("menu_open");
}

/* 投稿する */

$(".submit").on("click", doSubmit);

function doSubmit () {
	var comment = $(".input_container input").val();
	if(comment === "") return;
	var dom = '<div class="chat_item from_us"><img class="face_icon" src="img/profile_chikuwa.jpg" alt=""><div class="talk_box">'+comment+'</div><div class="talk_time">12:34</div></div>';

	$(".chat_container").append(dom);
	$(".input_container input").val("");
}

/* 通信 */

var milkcocoa = new MilkCocoa('bluej1zy20tt.mlkcca.com');
var milkcocoa = MilkCocoa.connectWithApiKey('bluej1zy20tt.mlkcca.com', 'ELMHAFJIOFDIJFOO', 'jQVLGCMJVkfLHRNcKNdejIFTQXOOEXBBGETLiCZn');
var ds = milkcocoa.dataStore('messages');
ds.send({title : 'hoge', content : 'huga'});
