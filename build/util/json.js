"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseJsonOutput = void 0;

const parse = value => JSON.parse(value);
/**
 * @param {String} output
 * @param {String} [splitter='\n']
 * @returns {Array<Object>}
 */


const parseJsonOutput = (output, splitter = '\n') => !output ? [] : output.split(splitter).map(parse);

exports.parseJsonOutput = parseJsonOutput;