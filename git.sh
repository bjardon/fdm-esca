echo "# fdm-esca" >> README.md
git init
git add README.md
git commit -m "first commit"
git config --global credential.helper store
git remote add origin https://github.com/bjardon/fdm-esca.git
git push origin master
git add -A
git commit -m "Created project"
git push origin master