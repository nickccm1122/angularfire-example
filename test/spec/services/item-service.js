'use strict';

describe('Service: itemService', function () {

  // load the service's module
  beforeEach(module('exampleApp'));

  // instantiate service
  var itemService;
  beforeEach(inject(function (_itemService_) {
    itemService = _itemService_;
  }));

  it('should do something', function () {
    expect(!!itemService).toBe(true);
  });

});
