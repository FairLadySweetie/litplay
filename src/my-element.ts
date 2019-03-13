import { LitElement, html, customElement, property } from 'lit-element';

@customElement('my-element')
export class MyElement extends LitElement {
    @property()
    foo = {"firstName":"Jayce",
            "lastName":"Hauck",
            "username":"Domenic Kuhn81",
            "email":"Gladyce.Weber@yahoo.com"};

    render() {
        return html`
        <style> 
        .s1{
            color:Indigo  ;
            font-size: 25px;
            background-color: LightCoral  ;
            height: 30px;
            width: 200px;
            border-radius: 10px;
        }
        .s2{
            color:Indigo   ;
            font-size: 25px;
            background-color: LightCoral ;
            height: 30px;
            width: 200px;
            border-radius: 10px;
        }
        .s3{
            color:RebeccaPurple ;
            font-size: 20px;
            background-color: lightpink;
            height: 30px;
            width: 300px;
            border-radius: 10px;
        }
        </style>
        <h1 class="s1" style="font-family:sans-serif;">   ${this.foo.firstName}</h1>
        <h2 class="s2" style="font-family:sans-serif;">   ${this.foo.lastName}</h2>
        <p class="s3" style="font-family:sans-serif;">  ${this.foo.email}</p>
        `
        ;
    }

    firstUpdated(changedProperties:any) {
        changedProperties.forEach((oldValue:any , propName:any) => {
          console.log(`${propName} changed. oldValue: ${oldValue}`);
        });
        fetch('api/user')
            .then((response) => response.json())
            .then((bodyRes) => this.foo=bodyRes);

    }
}
