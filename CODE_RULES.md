>
> # PRAVIDLA
> ## Jména
>
>  Pokud je to možné, používej ve jménech celá slova.
>  Zkratky používej pouze tam, kde je jejich použití běžné a zřejmé.
>
>  **typy** - PascalCase
>
>  příklad:
> 
>     type DispatchProps = typeof<mapStateToProps>;
>
>  **interface** - PascalCase -> začíná I jako Interface
>
>  příklad:
> 
>     interface IDispatchProps {};
>
>  **konstanty** - UpperCase
>
>  příklad:
> 
>     const GLOBE_RADIUS = 6378; // [km]
>
>  **enum** - PascalCase / UpperCase
>
>  příklad:
> 
>     enum Direction {          enum DIRECTION {
>       Up = 1,                     UP = 1,
>       Down,                       DOWN,
>       Left,                       LEFT,
>       Right                       RIGHT
>     };                         };
>
>  **funkce** - camelCase
>
>  příklad:
> 
>     function onChangeUserName() { ... };
>     onChangeUserName = () => { ... };
>
>  **privátní proměnné / funkce** - prefix _
>
>  příklad:
> 
>     _userId = 10;
>     _getUserId() { ... };
>
>  **proměnné** - camelCase
>
>  příklad:
> 
>     userId = 10;
>
> ## Soubory
>
>  **soubory** - PascalCase
>
>  React komponenty vždy **.tsx**, TypeScriptové s **.ts** a konfigurace **.json**
>
>  příklad:
> 
>     ConfigComponent.tsx
>     UserSelector.ts
>
> 
>  # Obecná pravidla
>
>  **=== a !==** - místo **==** a **!=**
>
>  **[ ]** - místo **new Array()**
>
>  **{ }** - místo **newObject()**
>
>  maximálně **100 znaků** na řádek
>
>  spojení stringu pře **\`${ }\`** místo **'A' + 'B'**
>
>  ### zbytečné typy
>           špatně                                   dobře
>
>       let width: number = 7.3;                 let width = 7.3;
>
>       public isReady: boolean = false;         public isReady = false;
>
>&nbsp;

