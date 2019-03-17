(function(){
	function addSync(x,y){
		console.log(`	[@Service] processing ${x} and ${y}`);
		var result = x + y;
		console.log(`	[@Service] returning result`);
		return result;
	}

	function addSyncClient(x,y){
		console.log(`[@Client] triggering addSync`);
		var result = addSync(x,y);
		console.log(`[@Client] result = ${result}`)
	}

	window['addSyncClient'] = addSyncClient;

	function addAsync(x,y, callback){
		console.log(`	[@Service] processing ${x} and ${y}`);
		setTimeout(function(){
			var result = x + y;
			console.log(`	[@Service] returning result`);
			callback(result);
		}, 4000);
	}

	function addAsyncClient(x,y){
		console.log(`[@Client] triggering addAsync`);
		addAsync(x,y, function(result){
			console.log(`[@Client] result = ${result}`)
		});
	}

	window['addAsyncClient'] = addAsyncClient;

	var addAsyncEvents = (function(){
		var _listeners = [];

		function subscribe(listenerFn){
			_listeners.push(listenerFn);
		}

		function process(x,y){
			console.log(`	[@Service] processing ${x} and ${y}`);
			setTimeout(function(){
				var result = x + y;
				console.log(`	[@Service] returning result`);
				_listeners.forEach(listenerFn => listenerFn(result));
			}, 4000);
		}

		return { process, subscribe };

	})();

	window['addAsyncEvents'] = addAsyncEvents;

})();