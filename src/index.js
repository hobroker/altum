#!/usr/bin/env node

import yargs from 'yargs';
import { APP_NAME, REPOSITORY } from './constants';
import { requireDocker } from './middlewares';
import { handleYargsError } from './util/error';

import List from './commands/list';
import Stop from './commands/stop';
import Ping from './commands/ping';
import Start from './commands/start';
import Remove from './commands/remove';
import Restart from './commands/restart';

yargs
  .scriptName(APP_NAME)
  .middleware(requireDocker)

  .command(List)
  .command(Stop)
  .command(Start)
  .command(Restart)
  .command(Remove)
  .command(Ping)

  .demandCommand(1, 'I need a command to work')

  .fail(handleYargsError)
  .epilogue(`For more info, visit ${REPOSITORY}`)
  .parse();
