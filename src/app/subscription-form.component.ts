import { Component } from '@angular/core';


@Component({
    selector: 'subscription-form',
    templateUrl: './subscription-form-template.html'
})
export class SubscriptionFormComponent {
    statusValueToSet : string = "";
    frequencies = [
        { value: "1", text: "Daily" }
        , { value: "2", text: "Weekly" }
        , { value: "3", text: "Monthly" }
    ]

    onSubmit(form) {
        console.log(form);
    }
    log(e) {
        console.log(e);
    }
    onSelected_Change(e){
        console.log("frequency: ",e); 
    }
}