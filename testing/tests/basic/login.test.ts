import { app, assert, interact } from "../../utils";
import { TestResult, TestSuite } from "../interface";
/**
 * TODO: login while online
 * TODO: login while offline
 * TODO: login while online using cookies
 * TODO: login while offline using saved session
 * TODO: login for user with PIN
 */

const staffName = "Alex Corvi";

export const loginSuite: TestSuite = {
	async noServer(): TestResult {
		// start no server
		await app.reset();
		await interact.waitAndClick(".no-server-mode");
		// create new staff member
		await interact.waitAndInput("#new-user-name", staffName);
		interact.waitAndClick("#create-new-user-btn");

		// go to staff page and make sure it's there
		await interact.waitForEl(".main-component");
		await app.goToPage("staff");
		await interact.waitForEl(`.staff-component`);
		assert.elContains(".staff-component", staffName);

		// after resetting the application, staff member must still be there
		await app.reset();
		await interact.waitAndClick(".no-server-mode");
		await interact.waitForEl("#choose-user");
		assert.elContains("#choose-user", staffName);
	},

	async defaultServerField() {
		app.reset();
		await interact.waitForEl(".input-server input");
		assert.elValue(".input-server input", "http://localhost:5984");
	}
};
