import { HelloService } from "./hello-service.interface";

export class HelloComponent {

    constructor(private helloService: HelloService) {}

    public sayHello(): string {

        return this.helloService.sayHello();
    }
    public add(x: number, y: number): any {
        return ((a:number, b:number):number => {
            return x + y;
        })(x, y);
    }
    
}
