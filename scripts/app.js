(function(){

    const im = iframemanager();

    im.run({
        currLang: 'de',
        services : {
            googlemaps : {
                embedUrl: 'https://www.google.com/maps/embed?pb={data-id}',
    
                iframe: {
                    allow : 'picture-in-picture; fullscreen;'
                },
    
                languages : {
                    de : {
                        notice: 'Dieser Inhalt wird von einem Dritten gehostet. Durch die Anzeige der externen Inhalte akzeptieren Sie die <a rel="noreferrer noopener" href="https://cloud.google.com/maps-platform/terms?hl=de" target="_blank">Nutzungsbedingungen</a> von Google Maps.',
                        loadBtn: 'Laden',
                        loadAllBtn: "Bei jedem Besuch laden"
                    }
                }
            }
        }
    });
})();