ng build -c production --output-path docs --base-href fiber-drawing-calculator
mv docs/browser/* docs
rm -rf docs/browser
git add docs
git commit -m "Deployed"