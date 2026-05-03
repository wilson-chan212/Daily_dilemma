$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot

$csPath = Join-Path $PSScriptRoot 'LogoBackground.cs'
Add-Type -TypeDefinition (Get-Content -LiteralPath $csPath -Raw) -ReferencedAssemblies System.Drawing

$src = Join-Path $root 'Logo\App_Logo_1(1).png'
if (-not (Test-Path -LiteralPath $src)) {
  Write-Error "Source logo not found: $src"
}

# Store web copies under `images/` (always included in `cap:prep` / native `public` — `assets/` was missing on iOS).
$imagesDir = Join-Path $root 'images'

$bmp = [System.Drawing.Bitmap]::FromFile($src)
try {
  $work = [LogoBackground]::Ensure32Argb($bmp)
  try {
    [LogoBackground]::FloodFillEdgesTransparent($work)
    [LogoBackground]::ExpandTransparencyIntoLightFringe($work, 36)

    $web = [LogoBackground]::ResizeMax($work, 512)
    try {
      [LogoBackground]::ExpandTransparencyIntoLightFringe($web, 24)
      $webPath = Join-Path $imagesDir 'app-logo.png'
      $web.Save($webPath, [System.Drawing.Imaging.ImageFormat]::Png)
      Write-Host "Wrote $webPath"
    }
    finally { $web.Dispose() }

    $andPath = Join-Path $root 'android\app\src\main\res\drawable\app_logo.png'
    $android = [LogoBackground]::ResizeMax($work, 320)
    try {
      [LogoBackground]::ExpandTransparencyIntoLightFringe($android, 24)
      $android.Save($andPath, [System.Drawing.Imaging.ImageFormat]::Png)
      Write-Host "Wrote $andPath"
    }
    finally { $android.Dispose() }

    $bg = [System.Drawing.Color]::FromArgb(255, 240, 240, 245)
    $splashDir = Join-Path $root 'ios\App\App\Assets.xcassets\Splash.imageset'
    $splash = [LogoBackground]::ComposeSplash($work, 2732, $bg, 720)
    try {
      foreach ($name in @('splash-2732x2732.png', 'splash-2732x2732-1.png', 'splash-2732x2732-2.png')) {
        $p = Join-Path $splashDir $name
        $splash.Save($p, [System.Drawing.Imaging.ImageFormat]::Png)
        Write-Host "Wrote $p"
      }
    }
    finally { $splash.Dispose() }
  }
  finally { $work.Dispose() }
}
finally { $bmp.Dispose() }

Get-Item (Join-Path $imagesDir 'app-logo.png'), $andPath | Select-Object FullName, Length
