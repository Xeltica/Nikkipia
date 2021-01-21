import { defineController } from './$relay';

export default defineController(() => ({
	get: () => ({ status: 200, body: {
		status: 'pong',
		ts: new Date(),
	}})
}));
