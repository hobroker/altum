"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEPLOYMENT_STATUSES = exports.REPOSITORY = exports.APP_NAME = void 0;

var _package = require("../../package");

const APP_NAME = Object.keys(_package.bin).pop() || _package.name;

exports.APP_NAME = APP_NAME;
const REPOSITORY = _package.repository;
exports.REPOSITORY = REPOSITORY;
const DEPLOYMENT_STATUSES = {
  SUCCESS: 'success',
  ERROR: 'error',
  IN_PROGRESS: 'in_progress',
  INACTIVE: 'inactive',
  QUEUED: 'queued'
};
exports.DEPLOYMENT_STATUSES = DEPLOYMENT_STATUSES;