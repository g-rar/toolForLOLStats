import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HTMLFetcherError } from './HTMLFetcher.service';
import AngularHTMLFetcher from "./AngularHTMLFetcher.service";
import ControlModule from '../control.module';

describe('AngularHTMLFetcher', () => {
    let fetcher: AngularHTMLFetcher;
    let httpTestingController: HttpTestingController;
    const STUB_URL: string = '/fake/resource';
    const STUB_HTML: string = `
    <!DOCTYPE HTML>
    <html lang="en">
        <head>
            <title>HTML Response</title>
            <meta charset="UTF-8">
        </head>
        <body>
            <nav id="nav-id" class="nav-class">
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </nav>
            <article class="article-class">
                <section>
                    <div>
                        <h2 class="title-class">fake title</h2>
                    </div>
                </section>
            </article>
            <footer>
                <h6 class="title-class">fake footing</h6>
            </footer>
        </body>
    </html>`;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ ControlModule, HttpClientTestingModule ]
        });
        fetcher = TestBed.inject(AngularHTMLFetcher);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(fetcher).toBeTruthy();
    });

    it('should fail with broken URL', async () => {
        const htmlPromise: Promise<HTMLDocument> = fetcher.fetch(STUB_URL);
        const ERROR_404: object = { status: 404, statusText: 'Not Found' };
        httpTestingController.expectOne(STUB_URL).flush('deliberate 404 error', ERROR_404);
        await expectAsync(htmlPromise).toBeRejectedWith(
            new Error(HTMLFetcherError.HTTP_ERROR)
        );
    });

    it('should parse an html document', async () => {
        const htmlPromise: Promise<HTMLDocument> = fetcher.fetch(STUB_URL);
        httpTestingController.expectOne(STUB_URL).flush(STUB_HTML);
        const html: HTMLDocument = await htmlPromise;
        expect(html.getElementsByClassName('nav-class').length).toBe(1);
        expect(html.getElementsByClassName('article-class').length).toBe(1);
        expect(html.getElementsByClassName('title-class').length).toBe(2);
        expect(html.querySelectorAll('html body nav ul li').length).toBe(3);
        expect(html.querySelector('head title').innerHTML).toBe('HTML Response');
        expect(html.querySelector(
            'html body article section div h2.title-class').innerHTML
        ).toBe('fake title');
    });
});