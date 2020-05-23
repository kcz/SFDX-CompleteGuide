import { LightningElement, track, wire } from 'lwc';

export default class TestComponent extends LightningElement {

    @track
    screenText = 'Hi there';

    handleClick(){
        this.screenText = 'Button Clicked';
    }

}