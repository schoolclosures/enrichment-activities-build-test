# enrichment-activities-build
Build folder of Enrichment Activities app for deployment and then embed

**1. enter [yarn build] in enrichment-activities repo**



**2. Make the following changes to file names:**

    - /static/css/main.#######.chunk.css    →    /static/css/main.css

    - /static/js/2.######.chunk.js          →    /static/js/chunk1.js

    - /static/js/main.######.chunk.js       →    /static/js/chunk2.js

    - /static/js/runtime-main.######.js     →    /static/js/runtime-main.js

     
     
**3. Copy to index file**
```
<div id="divRoot"></div>
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<link rel="stylesheet" type="text/css" href="./static/css/main.css">
<script src="./static/js/chunk1.js"></script>
<script src="./static/js/chunk2.js"></script>
<script src="./static/js/runtime-main.js"></script>
```
     
     
     
**4. Pushing to master branch deploys website [https://schoolclosures.github.io/enrichment-activities-build/](https://schoolclosures.github.io/enrichment-activities-build/).**



**5. To embed the web-app, paste:**
```
<div id="divRoot"></div>
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://schoolclosures.github.io/enrichment-activities-build/static/css/main.css">
<script src="https://schoolclosures.github.io/enrichment-activities-build/static/js/chunk1.js"></script>
<script src="https://schoolclosures.github.io/enrichment-activities-build/static/js/chunk2.js"></script>
<script src="https://schoolclosures.github.io/enrichment-activities-build/static/js/runtime-main.js"></script>
```
