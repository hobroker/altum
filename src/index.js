#!/usr/bin/env node

import yargs from 'yargs';
import { handleYargsError } from './util/error';
import { APP_NAME, REPOSITORY } from './constants';
import completion from './completion';
import { requireDocker, silentOption } from './middlewares';
import * as globalOptions from './global-options';
import config from './config';

import Deploy from './commands/deploy';
import Util from './commands/util';
import List from './commands/list';
import Ping from './commands/ping';
import Remove from './commands/remove';
import Restart from './commands/restart';
import Start from './commands/start';
import Stop from './commands/stop';
import Init from './commands/init';

yargs
  .scriptName(APP_NAME)
  .config(config)

  .middleware(silentOption)
  .middleware(requireDocker)

  .options(globalOptions)

  .command(Init)
  .command(List)
  .command(Start)
  .command(Stop)
  .command(Restart)
  .command(Remove)
  .command(Deploy)
  .command(Util)
  .command(Ping)
  .completion('completion', 'Generate completion script', completion)

  .demandCommand(1, 'I need a command to work')

  .help()
  .fail(handleYargsError)
  .epilogue(`For more info, visit ${REPOSITORY}`)
  .parse();
