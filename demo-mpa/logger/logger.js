import {
	TYPE_LOG
} from '../constants.js'

function logger(log, type = TYPE_LOG) {
	console[type](log);
}

export default logger;
export const defaultType = TYPE_LOG;