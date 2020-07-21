## Code Structure

```bash
├── app
│   ├── configs ## use for config
│   │   ├── joi.js
│   │   └── winston.js
│   ├── controllers ## use for business logic
│   │   └── example.js
│   ├── enums ## define variable and group it
│   │   └── master.js
│   ├── environment ## enviroment file of dev,stg
│   ├── middlewares ## middleware before pass through route
│   │   └── authentication.js
│   ├── models ## model schema and function  for db
│   │   └── example.js
│   ├── routes ## route summary
│   │   ├── example.js
│   │   └── index.js
│   ├── server.js
│   ├── services ## 3rd party software
│   │   └── request.js
│   ├── utils ## utility function
│   │   └── response.js
│   └── validators ## function use to validate
│       └── example.js
├── deployment_script ## groovy jenkins script for run pipeline
│   └── dev.sh
├── Dockerfile
├── newman
│   └── collection.json
├── package.json
├── package-lock.json
├── README.md
└── test


```
