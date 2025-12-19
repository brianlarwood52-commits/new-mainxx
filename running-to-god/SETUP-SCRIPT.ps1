# Running to God - Setup Script for Windows
# Run this from inside your empty running-to-god folder

Write-Host "Creating Running to God project structure..." -ForegroundColor Cyan

# Create directories
$directories = @(
    "app/about",
    "app/bible-study", 
    "app/campfire-devotions",
    "app/contact",
    "app/journey/[id]",
    "app/submit-prayer",
    "public",
    "src/components",
    "src/data",
    "src/lib",
    "sanity-schemas"
)

foreach ($dir in $directories) {
    New-Item -ItemType Directory -Force -Path $dir | Out-Null
}

Write-Host "Directories created!" -ForegroundColor Green
Write-Host ""
Write-Host "Now run: npm init -y" -ForegroundColor Yellow
Write-Host "Then run: npm install next@latest react@latest react-dom@latest lucide-react tailwindcss postcss autoprefixer typescript @types/react @types/node" -ForegroundColor Yellow
Write-Host ""
Write-Host "The source files will be downloaded from GitHub once the repo is set up."
