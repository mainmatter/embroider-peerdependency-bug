# embroider-peerdependency-bug
This repository demonstrates a bug in embroider. 

Project `test-desing-components` has a devDependency to `my-design-addon`.
`my-design-addon` has a dependency to `ember-animated`.

When you run `ember test` in `test-design-components` it succeeds.
when you run `ember try:one embroider-safe` in `test-design-components` you get an error:
```
ERROR in ./components/animated-beacon.js 1:0-149
Module not found: Error: Can't resolve '../../node_modules/.pnpm/ember-animated@1.0.4_ember-source@4.8.4/node_modules/ember-animated/components/animated-beacon.js' in '$TMPDIR/embroider/c16e72/test-design-components/components'
 @ ./assets/test-design-components.js 80:13-56
```

I have found that there is dist folder in `ember-animated` which is exported in `package.json` `"./*": "./dist/*"`.

Does embroider work with exports?

Use `pnpm install` for installing dependencies