import { TestBed } from '@angular/core/testing';
import ControlModule from '../control.module';
import { Controller } from './Controller.service';
import DefaultController from './DefaultController.service';

describe('AngularHTMLFetcher', () => {

    let controller: Controller;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ ControlModule ],
            providers: [ { provide: Controller, useClass: DefaultController } ] 
        });
        controller = TestBed.inject(Controller);
    });

    /*
    it('should ', () => {

    });*/
});