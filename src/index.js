#!/usr/bin/env node

import yargs from 'yargs';
import { APP_NAME, REPOSITORY } from './constants';
import { requireDocker, silentCondition } from './middlewares';
import { handleYargsError } from './util/error';

import Deploy from './commands/deploy';
import List from './commands/list';
import Ping from './commands/ping';
import Remove from './commands/remove';
import Restart from './commands/restart';
import Start from './commands/start';
import Stop from './commands/stop';
import FreePort from './commands/free-port';

yargs
  .scriptName(APP_NAME)
  .middleware(silentCondition)
  .middleware(requireDocker)

  .command(FreePort)
  .command(List)
  .command(Start)
  .command(Deploy)
  .command(Stop)
  .command(Restart)
  .command(Remove)
  .command(Ping)

  .demandCommand(1, 'I need a command to work')

  .help()
  .fail(handleYargsError)
  .epilogue(`For more info, visit ${REPOSITORY}`)
  .parse();
