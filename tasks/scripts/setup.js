function sendMessage() {
  var args = Array.prototype.slice.call( arguments );
  alert( JSON.stringify( args ) );
}

window.onerror = function( e ) {
  sendMessage( 'benchmark.error', e );
};

// create the benchmark suite
var suite = new Benchmark.Suite();

suite.on( 'cycle', function( event ) {
  sendMessage( 'benchmark.cycle', String( event.target ) );
});

suite.on( 'complete', function() {
  sendMessage('benchmark.done');
});
