## Overview
1. *Lack of proper testing with enzyme* due to lack of time. It was caused mostly because of combination of multiple technologies 
interacting with each other: hooks, react-native and enzyme. This combination is fresh to me. Some of the solutions would require investigation and
some of the issues are easy to solve: [link](https://github.com/airbnb/enzyme/issues/2176#issuecomment-507462912). 
Also it would be useful to setup properly storybook for stories + storyshots.
1. UI styling like colors or atoms like Button or Text were not extracted, but should be part of design system.
1. Setup of the application was supposed to be as simple as possible for demo purpose.
1. Technical implementation of specific requirements should be mostly self-explanatory. Scrolling problem was generalized 
enough, that now with ScrollContext it's possible to scroll to component from any sibling/child.
1. App was tested on IOS and Android emulator. Even in that not complex scenario there were significant Platform differences (`.measure` function).
1. React Native environment is completely new to me, so it's possible that some "good practices" are not preserved.
