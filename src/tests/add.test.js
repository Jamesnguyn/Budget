const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}!`;

test('add two numbers', () => {
  const result = add(3, 4);

  expect(result).toBe(7);
});

test('generate greeting', () => {
  const name = generateGreeting("James");

  expect(name).toBe("Hello James!");
});