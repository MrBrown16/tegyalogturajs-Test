describe('InputCheck in: input', () => {
    it('in: "a"', () => {
        let act = inputCheck("a");
        expect(act).toBe(false);
    });
    it('in: 10', () => {
        let act = inputCheck(10);
        expect(act).toBe(true);
    });
    it('in: "a10"', () => {
        let act = inputCheck("a10");
        expect(act).toBe(false);
    });
    it('in: "10"', () => {
        let act = inputCheck("10");
        expect(act).toBe(true);
    });
});