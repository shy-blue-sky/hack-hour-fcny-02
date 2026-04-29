import { describe, it, expect } from 'vitest';
import { rps, passwords } from '../challenges/rps';

describe('rps', () => {
  it('handles rps combinations', () => {
    expect(rps(0)).toEqual(['']);
    expect(rps(1)).toEqual(['r', 'p', 's']);
    expect(rps(2)).toEqual([
      'rr',
      'rp',
      'rs',
      'pr',
      'pp',
      'ps',
      'sr',
      'sp',
      'ss',
    ]);
    expect(rps(3)).toEqual([
      'rrr',
      'rrp',
      'rrs',
      'rpr',
      'rpp',
      'rps',
      'rsr',
      'rsp',
      'rss',
      'prr',
      'prp',
      'prs',
      'ppr',
      'ppp',
      'pps',
      'psr',
      'psp',
      'pss',
      'srr',
      'srp',
      'srs',
      'spr',
      'spp',
      'sps',
      'ssr',
      'ssp',
      'sss',
    ]);
  });
});

describe.skip('passwords', () => {
  it('handles password combinations', () => {
    expect(passwords('ab', 1)).toEqual(['a', 'b']);
    expect(passwords('abxy', 2)).toEqual([
      'aa',
      'ab',
      'ax',
      'ay',
      'ba',
      'bb',
      'bx',
      'by',
      'xa',
      'xb',
      'xx',
      'xy',
      'ya',
      'yb',
      'yx',
      'yy',
    ]);
    expect(passwords('rps', 3)).toEqual([
      'rrr',
      'rrp',
      'rrs',
      'rpr',
      'rpp',
      'rps',
      'rsr',
      'rsp',
      'rss',
      'prr',
      'prp',
      'prs',
      'ppr',
      'ppp',
      'pps',
      'psr',
      'psp',
      'pss',
      'srr',
      'srp',
      'srs',
      'spr',
      'spp',
      'sps',
      'ssr',
      'ssp',
      'sss',
    ]);
  });
});
