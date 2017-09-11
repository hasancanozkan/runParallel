# runParallel
1) npm install
2) (check for the proper path to apply adb but mostly like this)cd AppData/Local/Android/sdk/platform-tools 
3) adb reverse tcp:8081 tcp:8081 && adb reverse tcp:8082 tcp:8082
4) then react-native start, react-native run-android


# What I have done-tried up to now

1) I tried parallel.js library to run --> but that includes code from node API.
2) Instead, I wanted to use hamsters.js. It has lots of issues before running, to solve this i checked an example code and set the .babelrc, RNWorkersPacakage.java, MainApplication.java and MainActivity.java, and deleting some files that's was shown as errors. After I got rid of all issues, I run a sample code and it gave me errors --> Therefore I created an issue in github, <ou can check hamsters.js github issues. Moreover hamsters.js requires web-worker library to run, which also doesn't make sense.
3) Lastly, I was checking web-workers. There are two libraries for RN, one of them abandoned and the other does not work consistantly. --> https://github.com/fabriciovergal/react-native-workers Web-workers run from two ports, port 8081 is to run RN code the other port 8082 is for worker. The issue here(as I understand) is the ports. check the issues in github https://github.com/fabriciovergal/react-native-workers/issues/20  Therefore, it sometimes works, sometimes doesn't. 
