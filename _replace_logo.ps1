$files = @('index.html','equipos.html','servicios.html','proyectos.html','nosotros.html','contacto.html')
foreach ($file in $files) {
    $path = "d:\alphamet\$file"
    (Get-Content $path -Raw) -replace 'logo\.svg', 'logo.png' | Set-Content $path -NoNewline
    Write-Host "OK: $file"
}
