#! /bin/sh

dirty="$(git status --porcelain | grep -v '^?? ')"
if [[ "$dirty" != "" ]]
then
  echo "error: git is dirty"
  echo "$dirty"
  exit 1
fi

npm run build
git add docs
git commit -m build
