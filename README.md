# KeySim

design and test virtual 3d keyboards.

https://xivilay.dev/kbd

## current fork diff

* update packages and fix dependencies
* fix 87 keyboard (remove badge)
* add blank keycaps as alternative options
* add a couple of new themes 


## getting started

```
yarn install
yarn start
```




## configuration

json configuration for layouts and keymaps are based on [qmk](https://beta.docs.qmk.fm/). keymaps can be changed by switching the corresponding [keycodes](https://beta.docs.qmk.fm/using-qmk/simple-keycodes/keycodes).

_NOTE: Special keys from keyboards with custom firmware (e.g. [layer switching](https://beta.docs.qmk.fm/using-qmk/software-features/feature_layers)) may not trigger keydown events, as these are not [supported](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values) in javascript_

## screenshots

![alt example image](./public/example-1.jpg?raw=true)

![alt example image](./public/example-2.jpg?raw=true)

![alt example image](./public/example-3.jpg?raw=true)
