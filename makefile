.RECIPEPREFIX = >

hello:
> echo 'Hello world!' > ./src/testfile.txt
> refresh

testing:
> echo "test"

keys:
> # exports .evn keys into the bash environment
> if [ -f .env ]; then export $(cat .env | sed 's/#.*//g' | xargs); fi
