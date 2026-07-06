# SoleilTech - servidor local del demo estatico.
# Sirve la carpeta 'sitio' en http://localhost:8765 (o el siguiente puerto libre).
# Solo escucha en localhost: nada queda expuesto a la red.
# -NoBrowser: no abre el navegador (para pruebas automatizadas).
param([switch]$NoBrowser)
$ErrorActionPreference = 'Stop'

$root = Join-Path $PSScriptRoot 'sitio'
if (-not (Test-Path $root)) {
    Write-Host 'ERROR: no se encontro la carpeta "sitio" junto a este script.'
    Write-Host 'Descomprime el zip completo antes de ejecutar.'
    Read-Host 'Presiona Enter para salir'
    exit 1
}
$rootFull = (Resolve-Path $root).Path

$mime = @{
    '.html' = 'text/html; charset=utf-8'
    '.css'  = 'text/css'
    '.js'   = 'application/javascript'
    '.svg'  = 'image/svg+xml'
    '.png'  = 'image/png'
    '.jpg'  = 'image/jpeg'
    '.ico'  = 'image/x-icon'
    '.woff2' = 'font/woff2'
    '.woff' = 'font/woff'
    '.xml'  = 'application/xml'
    '.txt'  = 'text/plain; charset=utf-8'
    '.json' = 'application/json'
    '.webmanifest' = 'application/manifest+json'
}

$port = 8765
$listener = $null
while ($port -lt 8790) {
    try {
        $listener = New-Object System.Net.HttpListener
        $listener.Prefixes.Add("http://localhost:$port/")
        $listener.Start()
        break
    } catch {
        $port++
        $listener = $null
    }
}
if (-not $listener) {
    Write-Host 'ERROR: no se pudo abrir ningun puerto local (8765-8789).'
    Read-Host 'Presiona Enter para salir'
    exit 1
}

Write-Host ''
Write-Host "  Sitio SoleilTech disponible en:  http://localhost:$port"
Write-Host '  Deja esta ventana abierta mientras revisas el sitio.'
Write-Host '  Para terminar, cierra esta ventana.'
Write-Host ''
if (-not $NoBrowser) { Start-Process "http://localhost:$port/" }

while ($listener.IsListening) {
    $ctx = $listener.GetContext()
    try {
        $reqPath = [System.Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath).TrimStart('/')
        if ($reqPath -eq '') { $reqPath = 'index.html' }

        $file = $null
        foreach ($candidate in @($reqPath, "$reqPath.html", (Join-Path $reqPath 'index.html'))) {
            $full = Join-Path $rootFull $candidate
            if (Test-Path $full -PathType Leaf) { $file = $full; break }
        }
        # Nunca servir nada fuera de la carpeta del sitio
        if ($file) {
            $resolved = (Resolve-Path $file).Path
            if (-not $resolved.StartsWith($rootFull)) { $file = $null }
        }
        if (-not $file) {
            $ctx.Response.StatusCode = 404
            $notFound = Join-Path $rootFull '404.html'
            if (Test-Path $notFound) { $file = $notFound }
        }
        if ($file) {
            $ext = [System.IO.Path]::GetExtension($file).ToLower()
            $ct = $mime[$ext]
            if (-not $ct) { $ct = 'application/octet-stream' }
            $bytes = [System.IO.File]::ReadAllBytes($file)
            $ctx.Response.ContentType = $ct
            $ctx.Response.ContentLength64 = $bytes.Length
            $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
        }
    } catch {
        try { $ctx.Response.StatusCode = 500 } catch {}
    } finally {
        try { $ctx.Response.OutputStream.Close() } catch {}
    }
}
