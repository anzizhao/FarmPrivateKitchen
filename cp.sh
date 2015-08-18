#! /bin/bash

function readDir()
{
    dir=$1
    if [ ! -d "$dir" ]; then
       return ; 
    fi
    files=$(ls $dir)
    for file in ${files}
    do
        echo ${dir}/${file}
    done
}


dir=
if [ -n "$1" ]; then
    dir=$1
fi

if [ -n "$2" ]; then
    width=$2
fi


if [ ! -d "$dir" ]; then
    echo "$dir not a directory"; 
    exit 0;
fi

for filePath in $(readDir $dir)
do
    #set -x
    if [[ ${filePath} =~ "_" ]]; then
        continue;
    fi
    if [  -d ${filePath} ]; then
        continue;
    fi
    cp ${filePath} bak/
done
