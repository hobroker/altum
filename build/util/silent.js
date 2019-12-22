"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSilent = exports.setSilent = void 0;
let silent = false;

const setSilent = value => {
  silent = !!value;
  return silent;
};

exports.setSilent = setSilent;

const isSilent = () => silent;

exports.isSilent = isSilent;