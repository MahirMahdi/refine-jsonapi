# refine-jsonapi

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![NPM Version](https://img.shields.io/npm/v/refine-jsonapi.svg)](https://www.npmjs.com/package/refine-jsonapi)
[![NPM Downloads](https://img.shields.io/npm/dt/refine-jsonapi.svg)](https://www.npmjs.com/package/refine-jsonapi)
![GitHub Repo stars](https://img.shields.io/github/stars/MahirMahdi/refine-jsonapi)
![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/MahirMahdi/refine-jsonapi)

![npm peer dependency version (scoped)](https://img.shields.io/npm/dependency-version/refine-jsonapi/peer/%40refinedev%2Fcore)
![npm type definitions](https://img.shields.io/npm/types/refine-jsonapi)

`refine-jsonapi` is a data provider for [refine](https://refine.dev/) that provides an implementation for working with JSON API specifications that conform to a standard API design. It is built on the foundation of the [JSON:API](https://jsonapi.org/) specifications.

## Installation

Install `refine-jsonapi` via npm or yarn:

```bash
npm install refine-jsonapi
# or
yarn add refine-jsonapi
```

## Usage

```tsx
import dataProvider from "refine-jsonapi";

const App = () => {
  return (
    <Refine
      dataProvider={dataProvider("API_URL")}
      /* ... */
    >
      {/* ... */}
    </Refine>
  );
};
```

## Documentation

- For more detailed information and usage, refer to [the refine data provider documentation](https://refine.dev/docs/api-reference/core/providers/data-provider/).
- [Refer to documentation for more info about refine](https://refine.dev/docs/)
- [Step up to refine tutorials.](https://refine.dev/docs/tutorial/introduction/index/)
