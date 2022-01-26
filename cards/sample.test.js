import cases from 'jest-in-case';
import fn from './cards';

function run(input, userOutput) {
  if (!Array.isArray(userOutput)) return false;
  const cards = Array.from(input).map(i => Number(i));
  for (let idx of userOutput) {
    if (cards[idx] !== 1) return false;

    cards[idx] = '.';
    if (idx > 0 && cards[idx - 1] !== '.') cards[idx - 1] = 1 - cards[idx - 1];
    if (idx + 1 < cards.length && cards[idx + 1] !== '.')
      cards[idx + 1] = 1 - cards[idx + 1];
  }

  return !cards.some(c => c !== '.');
}

cases(
  'Test case validation for cards question',
  ([cards, hasAnswer]) => {
    if (hasAnswer) expect(run(cards, fn(cards))).toBeTruthy();
    else expect(fn(cards)).toBeFalsy();
  },
  [
    ['0100110', true],
    ['01001100111', false],
  ],
);
