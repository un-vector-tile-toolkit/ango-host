# ango-host
the host part for ango

# Background
![](https://un-vector-tile-toolkit.github.io/signature/logo.png)

This is a part of the [ango](https://github.com/un-vector-tile-toolkit/ango) project. 

We also have a [development note in Japanese language](https://hackmd.io/@hfu/ango-in-writing) and [standard hands-on slides](https://hackmd.io/@hfu/ango-slides).

# Install
```console
$ git clone git@github.com:un-vector-tile-toolkit/ango-host
$ cd ango-host
$ yarn
```

# Build site files
```console
$ rake build
```

# Run
```console
$ rake start
```

# Stop
```console
$ rake stop
```

# Attribution
The sprite is by the Geospatial Information Authority of Japan. 

We included mapbox/mapbox-gl-js as below:

```console
$ git clone git@github.com:mapbox/mapbox-gl-js
$ cd mapbox-gl-js
$ yarn
$ yarn run build-prod-min
$ yarn run build-css
$ cd ../ango-host
$ rake _mapbox
```

