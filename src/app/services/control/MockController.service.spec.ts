import MockController from './MockController.service'

fdescribe('MockController', () => {
    let controller: MockController;

    beforeEach(() => { controller = new MockController() });

    it('should be created', () => {
        expect(controller).toBeTruthy();
    });
});