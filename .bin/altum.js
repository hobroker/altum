#!/usr/bin/env node

if (process.env.NODE_ENV !== 'development') {
  const path = require('path');
  const oldPath = process.cwd();
  process.chdir(path.join(__dirname, '..'));

  require('@babel/register')({});
  process.chdir(oldPath);
  require('../src');
} else {
  require('../build');
}
