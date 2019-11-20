import {getRandomColor} from "../getRandomColor";

describe('getRandomColor', () => {
    it('should return proper string', () => {
        const color = getRandomColor();
        expect(color).toMatch(/^#[A-F0-9]{6}$/)
    });
});
