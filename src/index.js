#!/usr/bin/env node

import yargs from 'yargs';
import { handleYargsError } from './util/error';
import { APP_NAME, REPOSITORY } from './constants';
import { requireDocker, silentCondition } from './middlewares';

import Deploy from './commands/deploy';
import Util from './commands/util';
import List from './commands/list';
import Ping from './commands/ping';
import Remove from './commands/remove';
import Restart from './commands/restart';
import Start from './commands/start';
import Stop from './commands/stop';

yargs
  .scriptName(APP_NAME)
  .middleware(silentCondition)
  .middleware(requireDocker)

  .command(List)
  .command(Start)
  .command(Stop)
  .command(Restart)
  .command(Remove)
  .command(Deploy)
  .command(Util)
  .command(Ping)

  .demandCommand(1, 'I need a command to work')

  .help()
  .fail(handleYargsError)
  .epilogue(`For more info, visit ${REPOSITORY}`)
  .parse();
