#!/usr/bin/env bash

set -e

url="https://github.com/hobroker/altum/releases/download/latest/altum-latest.tar.gz"

curl url --output altum-latest.tar.gz
npm install altum-latest.tar.gz
