import { HelloService } from '../src/hello-service.interface';
import { HelloComponent } from '../src/hello.component';


class MockHelloService implements HelloService {

    public sayHello(): string {
        return "Hello world!";
    }
}

describe("HelloComponent", () => {

    it("should say 'Hello world!'", () => {

        let mockHelloService = new MockHelloService();
        let helloComponent = new HelloComponent(mockHelloService);

        expect(helloComponent.sayHello()).to.be("Hello world!");
        expect(helloComponent.add(1, 2)).to.be(3);
    });
    it("1+1=2'", () => {

        let mockHelloService = new MockHelloService();
        let helloComponent = new HelloComponent(mockHelloService);
        expect(helloComponent.add(1, 1)).to.be(2);
    });
});
