module.exports = function(options) {
  var seneca = this,
      plugin = 'api';

  // Set top-level options for API
  options = seneca.util.deepextend({
    prefix: '/api/'
  });


  // Add all API methods
  seneca.add({ role:plugin, cmd:'test' }, test);

  // Add all necessary routes to REST API
  seneca.act('role: web', { use:{
    prefix: options.prefix,
    pin:{ role:plugin, cmd:'*' },
    map:{
      'test':{ GET:true },
    }
  }});

  // BEGIN API DEFINITION

  // role:api, 
  // cmd:test
  // args: [None]
  // action: Returns a smoke test to make sure the project is working
  function test(args, done) {
    done(null, {working:true});
  }
}
