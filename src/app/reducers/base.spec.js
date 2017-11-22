// @ reducers
import base from './base';

describe('base reducer', () => {
  it('should handle initial state', () => {
    expect(base(undefined, {})).toEqual([{
      error: '',
      id: 0,
      isFetching: false
    }]);
  });
});
