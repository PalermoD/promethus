import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

//Use describe to group similar tests 
describe('App Component', () => {
	
	//Use it to test a single attribute of a target 
	it('the component exists', () => {
		//Create an instance of App
		const component = renderComponent(App)
		//Use expect to make an assertion about a target 
		expect(component).to.exist
	})
})

