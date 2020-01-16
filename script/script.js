require (["esri/Map", "esri/views/MapView"],
   function(Map, MapView)
   {
        let map1 = new Map({basemap:"topo"});

      let mapContainer = new MapView({
        container: "mapid",  
        map: map1,
        zoom: 8,
        center: [22.56,51.25]

     });
   })
