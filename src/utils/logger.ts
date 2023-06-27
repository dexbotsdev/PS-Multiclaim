import Logger from "@ptkdev/logger";

 
const options = { 

	path: {
		// remember: add string *.log to .gitignore
		debug_log: "./debug.log",
		error_log: "./errors.log",
	},
};

const logger = new Logger(options);
 
export default logger;