# Altum - CD on dockers
[![GitHub package.json version](https://img.shields.io/github/package-json/v/hobroker/altum?style=flat-square)](package.json)
[![License](https://img.shields.io/github/license/hobroker/altum)](LICENSE)
![GitHub top language](https://img.shields.io/github/languages/top/hobroker/altum)

## Documentation
```
altum <command>

Commands:
  altum list [filter]           Lists the managed apps             [aliases: ls]
  altum start <image> <commit>  Starts an app                      [aliases: up]
  altum stop <id>               Stops an app                     [aliases: down]
  altum restart <id>            Restarts an app                    [aliases: rs]
  altum remove <id>             Removes an app                     [aliases: rm]
  altum deploy                  Informs Github about the app deployment
  altum util                    A set of utils/helpers
  altum ping                    Pings the app
  altum completion              Generate completion script

Options:
  --silent   Do not print shell executions            [boolean] [default: false]
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]

For more info, visit https://github.com/hobroker/altum
```
