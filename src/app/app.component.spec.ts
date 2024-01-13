import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MockBuilder, ngMocks } from 'ng-mocks';
import { BlaPipe } from './bla.pipe';

describe('AppComponent', () => {
  let blaPipe: jasmine.SpyObj<BlaPipe>;
  let sut: AppComponent;

  beforeEach(() => MockBuilder(AppComponent));

  beforeEach(() => {
    blaPipe = TestBed.inject(BlaPipe) as jasmine.SpyObj<BlaPipe>;
    // blaPipe = ngMocks.findInstance(BlaPipe) as jasmine.SpyObj<BlaPipe>;

    blaPipe.transform.and.returnValue('test');

    sut = TestBed.createComponent(AppComponent).componentInstance;
  });

  it('should use the blaPipe', () => {
    let result = sut.doSomething();

    expect(blaPipe.transform).toHaveBeenCalled();
    expect(result).toBe('test');
  });
});
