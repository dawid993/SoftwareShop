import questionIterator from "../questionIterator";

describe("question iterator", () => {
    it("should create empty iterator", () => {
        const iterator = questionIterator([]);
        expect(iterator.hasNext()).toBe(false);
        expect(iterator.hasPrevious()).toBe(false);
        expect(iterator.next()).toEqual({ done: true });
        expect(iterator.previous()).toEqual({ done: true });
    });

    it("should iterate forward and back", () => {
        const iterator = questionIterator([1, 2, 3]);
        expect(iterator.hasNext()).toBe(true);
        expect(iterator.hasPrevious()).toBe(false);

        expect(iterator.next()).toEqual({ done: false, value: 1 });
        expect(iterator.next()).toEqual({ done: false, value: 2 });
        expect(iterator.next()).toEqual({ done: false, value: 3 });

        expect(iterator.hasNext()).toEqual(false);
        expect(iterator.next()).toEqual({ done: true });

        expect(iterator.hasPrevious()).toBe(true);
        expect(iterator.previous()).toEqual({ done: false, value: 2 });
        expect(iterator.previous()).toEqual({ done: false, value: 1 });

        expect(iterator.previous()).toEqual({ done: true });
        expect(iterator.hasNext()).toEqual(true);
        expect(iterator.hasPrevious()).toEqual(false);
    });
});
