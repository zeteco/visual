#!/bin/bash
abort() {
    local message=$1
    echo $message
    exit -1
}
[ -z $FTP_PASS ] && abort "FTP_PASS is undefined"
[ -z $FTP_USER ] && abort "FTP_USER is undefined"
[ -z $FTP_SITE ] && abort "FTP_SITE is undefined"

if [ "$TRAVIS_BRANCH" == "master" ]; then
  lftp -u $FTP_USER,$FTP_PASS $FTP_SITE \
   -e 'mirror -c -e -R ./public ~ ; exit'
else
  echo "no deployment on other branches than master."
fi
