"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wait = void 0;

const wait = ms => new Promise(r => setTimeout(r, ms));

exports.wait = wait;