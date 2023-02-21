install:
	npm ci

lint:
	npx eslint
	
brain-games:
	node bin/brain-games.js	

publish:
	npm publish --dry-run

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js	

brain-gcd:
	node bin/brain-gcd.js		


