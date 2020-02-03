import { Bowling } from "./bowling";

describe("Bowling", () => {
    it("handles a very boring game", () => {
        const bowling = new Bowling();
        expect(bowling.getScore()).toBe(0);
    });
});
