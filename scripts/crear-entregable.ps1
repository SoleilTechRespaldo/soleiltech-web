# Genera el entregable demo portable del sitio: un zip liviano con la
# exportacion estatica + lanzador de doble clic (scripts/demo-launcher).
# Uso:   powershell -File scripts\crear-entregable.ps1 [-SkipBuild]
#        -SkipBuild reutiliza el out/ existente en vez de reconstruir.
param([switch]$SkipBuild)
$ErrorActionPreference = 'Stop'

$projRoot = Split-Path $PSScriptRoot -Parent
Set-Location $projRoot

if (-not $SkipBuild) {
    $env:BUILD_STATIC = 'true'
    npm run build
    if ($LASTEXITCODE -ne 0) { throw 'Fallo el build estatico (BUILD_STATIC=true npm run build)' }
}
if (-not (Test-Path (Join-Path $projRoot 'out\index.html'))) {
    throw 'No existe out/index.html - corre el script sin -SkipBuild'
}

$staging = Join-Path $projRoot 'entregables\SoleilTech-demo'
if (Test-Path $staging) { Remove-Item $staging -Recurse -Force }
New-Item -ItemType Directory -Force $staging | Out-Null

Copy-Item (Join-Path $projRoot 'out') (Join-Path $staging 'sitio') -Recurse
Copy-Item (Join-Path $PSScriptRoot 'demo-launcher\*') $staging

$leeme = Join-Path $staging 'LEEME.txt'
(Get-Content $leeme -Raw) -replace '\{FECHA\}', (Get-Date -Format 'yyyy-MM-dd') |
    Set-Content $leeme -Encoding UTF8

$zip = Join-Path $projRoot ("entregables\SoleilTech-demo-{0}.zip" -f (Get-Date -Format 'yyyy-MM-dd'))
if (Test-Path $zip) { Remove-Item $zip -Force }
Compress-Archive -Path $staging -DestinationPath $zip

$mb = (Get-Item $zip).Length / 1MB
Write-Host ("Entregable listo: {0} ({1:N1} MB)" -f $zip, $mb)
