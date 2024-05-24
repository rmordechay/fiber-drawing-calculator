ng build -c production --output-path docs
mv docs/browser/* docs
rm -rf docs/browser
git add docs
git commit -m "Deployed"