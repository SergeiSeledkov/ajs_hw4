import { person } from '../index';

test.each([
  ['> 50%', { name: 'Маг', health: 51 }, 'healthy'],
  ['<= 50 and > 15', { name: 'Маг', health: 16 }, 'wounded'],
  ['<= 15%', { name: 'Маг', health: 15 }, 'critical'],
])(
  ('check status health %s for %o'),
  (percent, obj, status) => {
    const result = person(obj);

    expect(result).toBe(status);
  },
);
