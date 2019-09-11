import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";

describe("AppComponent", () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent],
        }).compileComponents();
    }));

    it("should create the app", () => {
        // tslint:disable-next-line: typedef
        const fixture = TestBed.createComponent(AppComponent);
        // tslint:disable-next-line: typedef
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'angular-app-sandbox'`, () => {
        // tslint:disable-next-line: typedef
        const fixture = TestBed.createComponent(AppComponent);
        // tslint:disable-next-line: typedef
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual("angular-app-sandbox");
    });

    it("should render title", () => {
        // tslint:disable-next-line: typedef
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        // tslint:disable-next-line: typedef
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector(".content span").textContent).toContain("angular-app-sandbox app is running!");
    });
});
