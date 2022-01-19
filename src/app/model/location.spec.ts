import { Location } from './location';

describe('Location', () => {
  it('should create an instance', () => {
    expect(new Location()).toBeTruthy();
  });

  /*
  `@var address {string}`,
  `@var city {string}`,
  `@var country {string}`
  */

  it('location.address shoduld be created', () => {
    const location = new Location();
    expect(location.address).toBeDefined();
  });

  it('location.city shoduld be created', () => {
    const location = new Location();
    expect(location.city).toBeDefined();
  });

  it('location.country shoduld be created', () => {
    const location = new Location();
    expect(location.country).toBeDefined();
  });
});
