define(function() {
  // application mode:
  var mode = 'mock';

  var mocksPath = 'js/mocks';

  var services = {
    dev: {
      'api/getAllItems': 'api/GetAllItems'
    },
    mock: {
      'api/getAllItems': mocksPath + '/getAllItems.json'
    }
  };

  return services[mode];
});
