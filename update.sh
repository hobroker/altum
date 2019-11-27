#!/usr/bin/env bash

set -e

git stash
git pull origin HEAD
npm install
npm run build
npm link
