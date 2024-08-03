import Validator from "../src";
const username = new Validator();
test('valid usernames', () => {
    expect(username.validateUsername('user1')).toBe(true);
  });