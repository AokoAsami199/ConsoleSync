logger.setConsole(true);

mc.listen('onJoin', function (pl) {
	var join = '<'+pl.name+'> joined';
	colorLog('green', join);
	return true;
});

mc.listen("onLeft", function (pl) {
	var left = '<'+pl.name+'> left';
	colorLog('red', left);
	return true;
});

mc.listen("onChat", function (pl, msg) {
	var chat = ' <'+pl.name+'> '+msg;
	colorLog('blue', chat);
	return true;
});