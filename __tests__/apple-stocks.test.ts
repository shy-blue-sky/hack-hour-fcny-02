import { describe, it, expect } from 'vitest';
import highestProfit from '../challenges/apple-stocks';

describe('highestProfit', () => {
  let stocks: number[];

  it('should return 0 given an empty array', () => {
    expect(highestProfit([])).toEqual(0);
  });

  it('should return 0 when no profit is possible', () => {
    stocks = [100, 90, 70, 40, 0];
    expect(highestProfit(stocks)).toEqual(0);
    stocks = [400, 200, 125];
    expect(highestProfit(stocks)).toEqual(0);
  });

  it('should return the highest profit possible', () => {
    stocks = [0, 2000, 4000, 6000, 8000, 10000];
    expect(highestProfit(stocks)).toEqual(10000);
    stocks = [2000, 1000, 100, 200, 400, 100];
    expect(highestProfit(stocks)).toEqual(300);
    stocks = [8, 5, 4, 3, 2, 7, 2];
    expect(highestProfit(stocks)).toEqual(5);
  });

  it('should return the highest profit possible when the ideal buy price is not the min value', () => {
    stocks = [1000, 500, 1000, 1500, 0, 200, 800, 20, 0, 100];
    expect(highestProfit(stocks)).toEqual(1000);
    stocks = [0, 300, 200, 500, 600, 100, 399, 350, 500];
    expect(highestProfit(stocks)).toEqual(600);
    stocks = [200, 600, 700, 100, 300, 200, 620];
    expect(highestProfit(stocks)).toEqual(520);
  });
});
