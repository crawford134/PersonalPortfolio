To Deploy 

1. Merge the code onto the main branch 
2. npm run deploy (this can be done without being merged)

To Setup a custom domain name 

1. Go to the github pages section in the domain & add custom domain 
2. Go to GoDaddy & update the domain to be the github custom url 
3. update the package.json file to have the url in it 
4. create a cname file add the url to it
5. ensure `vite.config.ts` sets `base: "/"` when deploying to your custom domain
6. only set `base` to your repository name when hosting under `username.github.io/<repo>`
7. the CNAME file must contain your domain (`kileycarson.ca`)