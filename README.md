This is a minimal reproduction for [@graphql-tools #1795](https://github.com/ardatan/graphql-tools/issues/1795).

1. `npm install`

2. `node .`

3. Open a browser to `http://localhost:4000` and run the following query:
    ```graphql
    {
        prefix2_prefix1_test
    }
    ```
    This will return null.

4. Then try removing one of the `RenameObjectFields` transforms, restart the server, and run the same query. It will now return "hello, world"
