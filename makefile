# making makefile's prefix ">" instead of tab for working in Glitch
.RECIPEPREFIX = >

hello:
> echo 'Hello world!' > ./src/testfile.txt
> refresh

testing:
> echo "test"

congress:
> # get the house members, but save just the member info (just .results.members)
> curl "https://api.propublica.org/congress/v1/117/house/members.json" -H "X-API-Key: $$PROPUBLICA_API_KEY" | jq .results[0].members > ./data/members.json
> # this code turns that file into a CSV!
> cat ./data/members.json | jq -r '(map(keys) | add | unique) as $$cols | map(. as $$row | $$cols | map($$row[.])) as $$rows | $$cols, $$rows[] | @csv' > ./data/members.csv
> # to get glitch to show the files in the UI, use "refresh"
> refresh