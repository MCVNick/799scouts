I ran into a problem when using digitalocean whenever running the build.

npm ERR! Linux 4.4.0-145-generic
npm ERR! argv "/usr/bin/nodejs" "/usr/bin/npm" "run" "build"
npm ERR! node v4.2.6
npm ERR! npm  v3.5.2
npm ERR! code ELIFECYCLE
npm ERR! 799scouts@0.1.0 build: `react-scripts build`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the 799scouts@0.1.0 build script 'react-scripts build'.
npm ERR! Make sure you have the latest version of node.js and npm installed.
npm ERR! If you do, this is most likely a problem with the 799scouts package,
npm ERR! not with npm itself.
npm ERR! Tell the author that this fails on your system:
npm ERR!     react-scripts build
npm ERR! You can get information on how to open an issue for this project with:
npm ERR!     npm bugs 799scouts
npm ERR! Or if that isn't available, you can get their info via:
npm ERR!     npm owner ls 799scouts
npm ERR! There is likely additional logging output above.

npm ERR! Please include the following file with any support request:
npm ERR!     /root/799scouts/npm-debug.log

To solve this I installed the latest version of NVM: curl https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
Then typed this after and installed node this way instead: source ~/.profile
                                                           nvm install 12.2.0
