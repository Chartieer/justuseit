#Commands

## Namespace

The **namespace**

## New Component

```
mkdir packages/*name* && cd packages/*name*
yarn init

--> new node ./scripts/newcomponent.js
```

### New Dev Dependency

```
yarn add -DW **package name from npm**
```

### Peer Dependencies

```
yarn workspace @--name--/*NAME* add -P react *NAME-DEPENDENCY*
```

###Link Components in Lerna

```
yarn lerna add @*namespace*/existing-component --scope=@*namespace*/new-component
yarn lerna add @hi5/icon --scrope=@hi5/chip
```

- Remember to build with typings (d.ts) files creation before linking Components.

##
