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

	function addAsyncPromise(x,y){
		console.log(`	[@Service] processing ${x} and ${y}`);
		
		var promise = new Promise(function(resolveFn, rejectFn){
			setTimeout(function(){
				var result = x + y;
				console.log(`	[@Service] returning result`);
				resolveFn(result);
			}, 4000);
		});
		
		return promise;
	}

	window['addAsyncPromise'] = addAsyncPromise;

	/*function addAsyncPromiseClient(x,y){
		console.log(`[@Client] triggering addAsyncPromose`);
		addAsyncPromise(x,y)
			.then(result => {
				console.log(`[@Client result = ${result}`);
			});
	}*/

	async function addAsyncPromiseClient(x,y){
		console.log(`[@Client] triggering addAsyncPromose`);
		var result = await addAsyncPromise(x,y);
		console.log(`[@Client result = ${result}`);
	}

	window['addAsyncPromiseClient'] = addAsyncPromiseClient;

})();