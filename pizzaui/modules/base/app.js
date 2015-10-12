/*         ______________________________________
  ________|                                      |_______
  \       |           PizzaUI WebApp          |      /
   \      |      Copyright © none             |     /
   /      |______________________________________|     \
  /__________)                                (_________\

*/

define(function(require, exports, module) {

  //初始化权限节点 
	initPowerFunc();
	//初始化树的点击事件
	initTreeEven();
	
	initSysBtnEvens();
	
	
	/**
	 * 加载权限节点 后台给出的权限节点Json 包括
	 */
	function initPowerFunc(){
		//权限设置
		
	}

	/**
	 * 初始化树的点击事件
	 */
	function initTreeEven(){
		$("#left-panel").on("click", 'a[path]',function(a) {
			var a = $(a.currentTarget);
			//取消其他的active样式
			$("#left-panel nav li.active").removeClass("active");
			a.addClass("active");
			openPage(a.attr('path'));
		});
	}

  /**
	 * 打开一个页面
	 */
  function openPage(path){
			$.ajax({
				type : "GET",
				url : path,
				dataType : "html",
				cache : !0,
				beforeSend : function() {
					//跳转之前可以干点别的
					$('#main').html('<h1 class="ajax-loading-animation"><i class="fa fa-cog fa-spin"></i> Loading...</h1>');
				},
				success : function(a) {
					$('#main').css({ opacity : "0.0" }).html(a).delay(50).animate({
						opacity : "1.0"
					}, 300);
					path = null;
				},
				error : function() {
					openPage('../../app/base/errors/404.jsp')
				},
				async : !0
			})
  	
  }
	/**
	 * 初始化监听，是系统级别的，比如右上角的几个按钮
	 */
	function initSysBtnEvens(){

		//左边树的
		$("#minifyMenu,#collmenu").click(function(){
			var btn = $(this);
			$("body").toggleClass("minified"); 
		})

		$(window).resize(function() {
			if($(window).width() < 979){
				$("body").addClass("minified"); 
			}else{
				$("body").removeClass("minified"); 
			}
		});

		$("#logout").click(function(e){
			Lobibox.confirm({
				title:'提示',
				msg: '真的要退出吗?',
				callback:function($this, type, ev){
					if (type === 'yes') {
						var inter;
						Lobibox.progress({
							title: '请稍等',
							label: '正在退出...',
							onShow: function ($this) {
								var i = 0;
								inter = setInterval(function () {
									if (i > 100) {
										inter = clearInterval(inter);
										window.location.href = "/fslogout";
									}
									i = i + 1;
									$this.setProgress(i);
								}, 1);
							},
							closed: function () {
								inter = clearInterval(inter);
							}
						});

					}
				}
			});
		})

    //构造树的样式以及动作
		$.fn.extend({
			jarvismenu : function(a) {
				var b = {
						accordion : "true",
						speed : 200,
						closedSign : "[+]",
						openedSign : "[-]"
				}, 
				c = $.extend(b, a), 
				d = $(this);
				d.find("li").each(function() {
					0 !== $(this).find("ul").size()
					&& ($(this).find("a:first").append("<b class='collapse-sign'>" + c.closedSign + "</b>"),
							"#" == $(this).find("a:first").attr("href")
							&& $(this).find("a:first").click(function() { return !1 }))
				}), d.find("li.active").each(function() {
					$(this).parents("ul").slideDown(c.speed), $(this).parents("ul")
					.parent("li").find("b:first").html(c.openedSign), $(this)
					.parents("ul").parent("li").addClass("open")
				}), d.find("li a").click(function() {
					0 !== $(this).parent().find("ul").size()
					&& (c.accordion
							&& ($(this).parent().find("ul").is(":visible") || (parents = $(this)
									.parent().parents("ul"), visible = d
									.find("ul:visible"), visible.each(function(
											a) {
										var b = !0;
										parents.each(function(c) {
											return parents[c] == visible[a] ? (b = !1, !1) : void 0
										}), b
										&& $(this).parent().find("ul") != visible[a]
										&& $(visible[a]).slideUp(c.speed,
												function() {
											$(this).parent("li")
											.find("b:first")
											.html(c.closedSign), $(this)
											.parent("li")
											.removeClass("open")
										})
									}))), 
									$(this).parent().find("ul:first").is(":visible")
									&& !$(this).parent().find("ul:first").hasClass("active") ?
											$(this).parent().find("ul:first").slideUp(c.speed, function() {
												$(this).parent("li").removeClass("open"), 
												$(this).parent("li")
												.find("b:first")
												.delay(c.speed)
												.html(c.closedSign)
											})
											: $(this).parent().find("ul:first").slideDown(
													c.speed, function() {
														$(this).parent("li").addClass("open"), 
														$(this).parent("li")
														.find("b:first")
														.delay(c.speed)
														.html(c.openedSign)
													})
					)
				})
			}
		});

		$("nav ul").jarvismenu({
			accordion : !0,
			speed : 235,
			closedSign : '<em class="fa fa-plus-square-o"></em>',
			openedSign : '<em class="fa fa-minus-square-o"></em>'
		})
	}

});