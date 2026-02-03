Get-ChildItem -Path . -Recurse -Filter "*.tsx" | ForEach-Object {
    $file = $_.FullName
    $content = Get-Content $file -Raw -Encoding UTF8
    
    if ($content -match "90 min") {
        $newContent = $content -replace "90 min", "60 min" -replace "90 minutos", "60 minutos"
        Set-Content -Path $file -Value $newContent -Encoding UTF8 -NoNewline
        Write-Host "Updated: $file"
    }
}
