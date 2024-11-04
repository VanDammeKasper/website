(function(){

    const im = iframemanager();

    im.run({
        currLang: 'en',
        services : {
            googlemaps : {
                embedUrl: 'https://www.google.com/maps/embed?pb={data-id}',
    
                iframe: {
                    allow : 'picture-in-picture; fullscreen;'
                },
    
                languages : {
                    en : {
                        notice: 'This content is hosted by a third party. By showing the external content you accept the <a rel="noreferrer noopener" href="https://cloud.google.com/maps-platform/terms" target="_blank">terms and conditions</a> of Google Maps.',
                        loadBtn: 'Load map',
                        loadAllBtn: "Don't ask again"
                    }
                }
            }
        }
    });
})();