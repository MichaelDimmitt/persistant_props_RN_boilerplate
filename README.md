## React Native View Manager, built out of the garage.
(navigation controller/view manager)
<br>For Mobile: IOS and Android

## Installation 
```bash
yarn install
npm run ios
```
note: 
<pre>
If you have xcode problems:
* ios: Unable to verify Xcode and Simulator installation.
You may need to modify preferences -> locations -> xcode as described in the below article.
https://github.com/react-community/create-react-native-app/issues/74
</pre>

## Simple
simple app that doesnt require redux, global state with actions reducers dispatch and 

## No hassle, 
react native components stored in component history array

## Current features
1) Click back button will pop the component and its state off of the history and load component replacing the content on the screen.
2) Load next view off screen slide that view into the correct location; then rerender to remove the old component behind the scenes.

## Future features:
1) Force press/prolonged press, can allow viewing of all history to enable moving directly
<br>to a particular component with specific state set for the component.
2) Programers define their own component at runtime at user input and the component will still be created.

## Project built with react-native-cli
