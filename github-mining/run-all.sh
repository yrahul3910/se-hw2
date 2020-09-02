#!/bin/bash

for file in *.js; do
	sed -i .bak s/$1/$2/g $file
	echo $file
	node $file 
done

rm *.bak
