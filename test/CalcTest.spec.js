describe('Unsuccessful count in:competitors, reached', () => {
    it('in: 10, 10', () => {
        let act = getUnsuccessCount(10, 10);
        expect(act).toBe(0);
    });
    // Needs inputchecking so competitor>=reached
    // it('in: 0, 10', () => {
    //     let act = getUnsuccessCount(0, 10);
    //     expect(act).toBe("error");
    // });
    it('in: 100, 10', () => {
        let act = getUnsuccessCount(100, 10);
        expect(act).toBe(90);
    });
    it('in: 100, 0', () => {
        let act = getUnsuccessCount(100, 0);
        expect(act).toBe(100);
    });
});



describe('Unsuccessful percent in:competitors, getUnsuccessCount(competitor, reached)', () => {
    it('in: 10, (10, 10)', () => {
        let act = getUnsuccessPercent(10, getUnsuccessCount(10, 10));
        expect(act).toBe(0);
    });
    // Needs inputchecking so competitor>=reached
    // it('in: 0, (0, 10)', () => {
    //     let act = getUnsuccessPercent(0, getUnsuccessCount(0, 10));
    //     expect(act).toBe("error");
    // });
    it('in: 100, (100, 10)', () => {
        let act = getUnsuccessPercent(100, getUnsuccessCount(100, 10));
        expect(act).toBe(90);
    });
    it('in: 100, (100, 0)', () => {
        let act = getUnsuccessPercent(100, getUnsuccessCount(100, 0));
        expect(act).toBe(100);
    });
});