import { describe, it, expect, beforeEach } from "vitest";
import {
  memoize,
  cachePromiseFunction,
  PFunc,
} from "../challenges/cache-promise-function";

describe("memoize", () => {
  let calls: number;
  let memStringify: Function;

  const stringify = (value: any): string => {
    calls++;
    return JSON.stringify(value);
  };

  beforeEach(() => {
    calls = 0;
    memStringify = memoize(stringify);
  });

  it("returns the proper results", () => {
    expect(memStringify(3)).toBe(JSON.stringify(3));
    expect(memStringify([7, 4])).toBe(JSON.stringify([7, 4]));
    expect(memStringify(3)).toBe(JSON.stringify(3));
    expect(memStringify([7, 4])).toBe(JSON.stringify([7, 4]));
  });

  it("draws from the cache upon subsequent invocations", () => {
    memStringify(3);
    expect(calls).toBe(1);
    memStringify(3);
    expect(calls).toBe(1);

    memStringify("hi");
    expect(calls).toBe(2);
    memStringify(3);
    expect(calls).toBe(2);
    memStringify("hi");
    expect(calls).toBe(2);

    memStringify(["cool", "whatever"]);
    expect(calls).toBe(3);
  });
});

describe("cachePromiseFunction", () => {
  let apiCalls: number;
  let cachedFakeApi: PFunc;

  const fakeApi = (url: string): Promise<any> => {
    return new Promise((resolve) => {
      apiCalls++;
      setTimeout(() => {
        resolve({ data: url }); // just resolve with the url within an object
      }, 5);
    });
  };

  beforeEach(() => {
    apiCalls = 0;
    cachedFakeApi = cachePromiseFunction(fakeApi);
  });

  it("correctly resolves response data from different urls", (done) => {
    Promise.all(["foo.com", "bar.com", "baz.com"].map(cachedFakeApi)).then(
      (results) => {
        expect(results[0]).toEqual({ data: "foo.com" });
        expect(results[1]).toEqual({ data: "bar.com" });
        expect(results[2]).toEqual({ data: "baz.com" });
      },
    );
  });

  it("draws from the cache upon subsequent requests", (done) => {
    let firstResult: any, secondResult: any;

    cachedFakeApi("foo.com")
      .then((result) => {
        expect(result).toEqual({ data: "foo.com" });
        expect(apiCalls).toBe(1);
        firstResult = result;

        return cachedFakeApi("foo.com");
      })
      .then((result) => {
        expect(result).toBe(firstResult);
        expect(apiCalls).toBe(1);

        return cachedFakeApi("bar.com");
      })
      .then((result) => {
        expect(result).toEqual({ data: "bar.com" });
        expect(apiCalls).toBe(2);
        secondResult = result;

        return cachedFakeApi("foo.com");
      })
      .then((result) => {
        expect(result).toBe(firstResult);
        expect(apiCalls).toBe(2);

        return cachedFakeApi("bar.com");
      })
      .then((result) => {
        expect(result).toBe(secondResult);
        expect(apiCalls).toBe(2);
      })
  });

  it.skip("extension: prevents multiple API requests to the same url", (done) => {
    Promise.all(new Array(4).fill("foo.com").map(cachedFakeApi))
      .then((results) => {
        expect(results[0]).toEqual({ data: "foo.com" });
        expect(results[1]).toEqual({ data: "foo.com" });
        expect(results[2]).toEqual({ data: "foo.com" });
        expect(results[3]).toEqual({ data: "foo.com" });

        expect(apiCalls).toBe(1);

        return Promise.all(
          ["bar.com", "foo.com", "bar.com"].map(cachedFakeApi),
        );
      })
      .then((results) => {
        expect(results[0]).toEqual({ data: "bar.com" });
        expect(results[1]).toEqual({ data: "foo.com" });
        expect(results[2]).toEqual({ data: "bar.com" });

        expect(apiCalls).toBe(2);
      });
  });
});
