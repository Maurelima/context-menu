# react-easy-contextmenu v0.2.2

[React-easy-contextmenu](https://github.com/Maurelima/react-easy-contextmenu) replaces the browser's default context menu.

## Installation

Using npm or yarn:

```sh
$ npm install react-easy-contextmenu
$ yarn add react-easy-contextmenu
```

How to use:

```js
// import react-easy-contextmenu
import { ContextMenu } from 'react-easy-contextmenu';

// Place the ContextMenu inside your react component
const Home: React.FC = () => {
    const menuData = [
        {
            menuDescription: 'First description',
            menuFunction: () => alert("You're a wizard Harry."),
        },
        {
            menuDescription: 'Second description',
            menuFunction: () => alert('Luke, I am your father.'),
            divider: true,
        },
        {
            menuDescription: 'Third description',
            menuFunction: () => alert('Sic Parvis Magna'),
        },
  ];

    return (
        <div>
            <h1>React Easy ContextMenu</h1>
            <ContextMenu menuData={menuData} />
        </div>
    )
}
export default Home;
```
Finaly you're good to go!

## Dev

| [<img src="https://avatars.githubusercontent.com/u/59918400?s=400&u=3554ebcf0f75263637516867945ebd371e68da71&v=4" width="75px;"/>](https://github.com/Maurelima) |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                          [Marco Lima](https://github.com/Maurelima)                                                          |

## License

Projetado com ♥ por [Marco Lima](https://github.com/Maurelima). Licenciado sob a [Licença MIT](licença).