# runParallel
1) npm install
2) (check for the proper path to apply adb but mostly like this)cd AppData/Local/Android/sdk/platform-tools 
3) adb reverse tcp:8081 tcp:8081 && adb reverse tcp:8082 tcp:8082
4) then react-native start, react-native run-android
