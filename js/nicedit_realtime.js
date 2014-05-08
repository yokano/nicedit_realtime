$(function() {
	var editor = null,
		preview = null;
	
	init();
	
	/**
	 * 初期化処理
	 */
	function init() {
		nicEditors.allTextAreas();
		editor = nicEditors.findEditor('editor');
		preview = $('#preview');
		bindEvents();
	}
	
	/**
	 * イベントの設定
	 */
	function bindEvents() {
		$('#editor').prev().on('keyup', update);
		$('#editor').prev().prev().on('mouseup', update);
		$(document).on('click', '.nicEdit-pane', function() {
			setTimeout(update, 100);
		});
	}
	
	// 更新
	function update() {
		preview.html(editor.getContent());
	}
});