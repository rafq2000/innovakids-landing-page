$dirs = @(
    "app/mx/cursos-ia-ninos-mexico",
    "app/mx/clases-ia-ninos-cdmx",
    "app/co/cursos-ia-ninos-colombia",
    "app/co/clases-ia-ninos-bogota",
    "app/ar/cursos-ia-chicos-argentina",
    "app/ar/clases-ia-chicos-buenos-aires",
    "app/pe/cursos-ia-ninos-peru",
    "app/pe/clases-ia-ninos-lima",
    "app/cl/cursos-ia-ninos-chile",
    "app/cl/clases-ia-ninos-santiago",
    "app/es/cursos-ia-ninos-espana",
    "app/es/clases-ia-ninos-madrid",
    "app/us/cursos-ia-ninos-latinos-usa",
    "app/us/clases-ia-ninos-miami",
    "app/uy/cursos-ia-ninos-uruguay",
    "app/uy/clases-ia-ninos-montevideo",
    "app/pa/cursos-ia-ninos-panama",
    "app/pa/clases-ia-ninos-panama-city",
    "app/cr/cursos-ia-ninos-costa-rica",
    "app/cr/clases-ia-ninos-san-jose",
    "app/do/cursos-ia-ninos-republica-dominicana",
    "app/do/clases-ia-ninos-santo-domingo",
    "app/hn/cursos-ia-ninos-honduras",
    "app/hn/clases-ia-ninos-tegucigalpa",
    "app/sv/cursos-ia-ninos-el-salvador",
    "app/sv/clases-ia-ninos-san-salvador",
    "app/gt/cursos-ia-ninos-guatemala",
    "app/gt/clases-ia-ninos-ciudad-guatemala",
    "app/py/cursos-ia-ninos-paraguay",
    "app/py/clases-ia-ninos-asuncion",
    "app/ec/cursos-ia-ninos-ecuador",
    "app/ec/clases-ia-ninos-quito",
    "app/bo/cursos-ia-ninos-bolivia",
    "app/bo/clases-ia-ninos-la-paz",
    "app/ve/cursos-ia-ninos-venezuela",
    "app/ve/clases-ia-ninos-caracas",
    "app/ni/cursos-ia-ninos-nicaragua",
    "app/ni/clases-ia-ninos-managua",
    "app/pr/cursos-ia-ninos-puerto-rico",
    "app/pr/clases-ia-ninos-san-juan",
    "app/gq/cursos-ia-ninos-guinea-ecuatorial",
    "app/gq/clases-ia-ninos-malabo"
)

foreach ($d in $dirs) {
    $path = Join-Path "C:\Users\rude_\Downloads\innovakids-landing-page" $d
    if (Test-Path $path) {
        Remove-Item -Recurse -Force $path
        Write-Host "Deleted $path"
    }
    else {
        Write-Host "Not found: $path"
    }
}
