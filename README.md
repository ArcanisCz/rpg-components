Components for Morosystems

Demo TODO

## Usage

1. install from npm `npm i rpg-components --save`
2. include in project `import {SampleComponent} from 'rpg-components';`
3. include less `@import "~rpg-components/lib/index.less";`
4. (or optionally compiled css) `./node-modules/rpg-components/dist/index.css`

## Demo
https://arcaniscz.github.io/rpg-components/

# Components

## `ResourceBar`

Show amount of some resource (hp/mana/...)


| Prop | Required | Default | Description |
|---|---|---|---|
| value | | 0 | Value of resource. If not between 0 and Max, it will be cropped|
| max | required|    | Max value of resource|
| className | | "" | can pass classname to customize styles. Will be added at top level |

### Styles

can be customized by less mixin ` .makeResourceBar(fullColor, emptyColor, subtractingColor, addingColor)` or by css classes

|  name  |   css-equivalent     | description |
|---|---|---|
| fullColor | .full-part   | filled part of resource bar |
| emptyColor| .empty-part | not filled part of resource bar (can be set to transparent)  |
| subtractingColor | .full-temp-part | part, which is temporary shown in animation while substracting (taking damage) |
| addingColor | .empty-temp-part | part, which is temporary shown in animation while adding (heal)|




#### `name : String` [required]

A string name, which will be printed.

# Contributing
TODO
