# Feature App Sample

## Getting Started

install all dependencies:

```sh
yarn
```

Now run the demo:

Demonstrates:

- how the Module Federation loader can be provided to the `FeatureAppManager` so
  that Feature Apps that are deployed as federated modules can be loaded in the
  client
- how libraries can be shared by the Integrator to be consumed by the Feature
  Apps
- how Feature Apps can share libraries with each other that are not provided by
  the Integrator

```sh
yarn watch:demo featureApp
```
