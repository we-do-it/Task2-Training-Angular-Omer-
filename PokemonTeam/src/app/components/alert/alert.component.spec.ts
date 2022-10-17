import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { AlertComponent } from "./alert.component";
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { getErrorMessage } from "src/app/state/pokemon/pokemon.selectors";

describe("AlertComponent", () => {
    let component: AlertComponent;
    let fixture: ComponentFixture<AlertComponent>;
    let de: DebugElement;
    let store: MockStore;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [AlertComponent],
            providers: [provideMockStore({
                initialState: { errorMessage: undefined },
                selectors: [
                    { selector: getErrorMessage, value: "This is a error message" }
                ]
            })]
        }).compileComponents() // Compiles template and scss
        store = TestBed.inject(MockStore);
    }));


    beforeEach(() => {
        fixture = TestBed.createComponent(AlertComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement
        fixture.detectChanges();
    });

    it("Component should be created", () => {
        expect(component).toBeTruthy();
    });
    it("errorMessage should be not undefined", () => {
        expect(component.errorMessage).toBe("This is a error message");
    })
    it("successMessage should be undefined", () => {
        expect(component.successMessage).toBeUndefined();
    });



})