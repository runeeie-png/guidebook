@echo off
REM =====================================================================
REM   LAST OPP TIL GITHUB  -  Windows
REM =====================================================================
REM   Dette skriptet sender HELE prosjektet (med alle mapper) til GitHub.
REM   Du trenger IKKE dra filer eller kunne git fra foer.
REM
REM   SLIK BRUKER DU DET:
REM   1. Lag en GitHub-konto paa github.com hvis du ikke har en.
REM   2. Lag et nytt, TOMT repository (ikke huk av for noe).
REM      Kopier nettadressen, f.eks:
REM         https://github.com/dittnavn/villaen-i-alsvik.git
REM   3. Dobbeltklikk denne filen.
REM   4. Lim inn adressen naar du blir bedt om det. Ferdig.
REM =====================================================================

cd /d "%~dp0"

echo.
echo ============================================
echo    Villaen i Alsvik  -  opplasting til GitHub
echo ============================================
echo.

REM --- Sjekk at git er installert ---
where git >nul 2>nul
if errorlevel 1 (
  echo   Git er ikke installert enaa.
  echo   Last det ned gratis her, installer, og kjoer
  echo   denne filen paa nytt etterpaa:
  echo.
  echo      https://git-scm.com/download/win
  echo.
  echo   Trykk en tast for aa avslutte.
  pause >nul
  exit /b 1
)

REM --- Be om repo-adressen ---
echo   Lim inn GitHub-adressen til det tomme repoet ditt.
echo   (Skal slutte paa .git - f.eks.
echo    https://github.com/navn/villaen-i-alsvik.git)
echo.
set /p REPO="  Adresse: "

if "%REPO%"=="" (
  echo.
  echo   Ingen adresse oppgitt. Avslutter.
  pause >nul
  exit /b 1
)

echo.
echo   Sender opp alle filer og mapper ...
echo.

REM --- Gjoer git klar ---
git init -q
git add -A
git -c user.email="opplasting@lokal" -c user.name="Opplasting" commit -q -m "Villaen i Alsvik - prosjektfiler" 2>nul
git branch -M main

REM Fjern gammel kobling hvis skriptet kjoeres paa nytt
git remote remove origin 2>nul
git remote add origin "%REPO%"

REM --- Last opp ---
git push -u origin main --force
if errorlevel 1 (
  echo.
  echo   Noe gikk galt under opplasting.
  echo   Vanligste aarsak: feil adresse, eller du ble
  echo   ikke logget inn paa GitHub. Proev paa nytt, og
  echo   pass paa at adressen er korrekt og slutter paa .git
) else (
  echo.
  echo ============================================
  echo    FERDIG. Alt ligger naa i GitHub.
  echo.
  echo    Gaa til repoet i nettleseren og sjekk at
  echo    du ser mappene 'app' og 'lib'.
  echo.
  echo    Neste steg: koble repoet til Vercel.
  echo    (Se README.md, Del 3.)
  echo ============================================
)

echo.
echo   Trykk en tast for aa lukke.
pause >nul
