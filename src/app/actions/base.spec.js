// @ actions
import * as actions from './base';
// @ constants
import * as types from '../constants/ActionTypes';

describe('base actions', () => {
  it('reset should create RESET action', () => {
    expect(actions.reset()).toEqual({
      type: types.RESET
    });
  });
});
