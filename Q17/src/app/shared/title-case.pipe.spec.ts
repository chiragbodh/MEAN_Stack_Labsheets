import { describe, it, expect } from 'vitest';
import { TitleCasePipe } from './title-case.pipe';
describe('TitleCasePipe', () => {
  it('handles mixed case and surrounding whitespace', () => {
    expect(new TitleCasePipe().transform('  aNGULAR cLI  ')).toBe('Angular Cli');
  });
  it('handles empty text', () => { expect(new TitleCasePipe().transform('')).toBe(''); });
});
