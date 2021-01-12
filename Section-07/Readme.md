

## Why we need a web server.

We need a proper (development) web server (it will run locally)
This web server, will serve web app,(html.file) 

double clicking index.html doesn't run the app under realistic circumstances

the final, deployed app will be served via https:// not via file://


### current state
Our current way of testing the app has current issues,
-IDE auto-completion is limited.
-we work in just one file OR we need to handle multiple files with multiple <script src="..."> imports

### wanted state

-saved changes should be auto-detected and page should reload/ update
-IDE should provide better auto-completion and hints
-We should be able to split into multiple files and export/ import via ES Modules.



# Vue CLI

helps us create projects, that are more realistic useful applications.

tools
- Node, because Vue cli needs it under the hood.

```
npm install -g @vue/cli
```