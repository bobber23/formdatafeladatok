-- Adatbázis létrehozása
CREATE DATABASE autok_db;

-- Adatbázis kiválasztása
USE autok_db;

-- Tábla létrehozása
CREATE TABLE autok (
    id INT AUTO_INCREMENT PRIMARY KEY,
    marka_modell VARCHAR(100),
    gyartasi_ev INT,
    alvazszam VARCHAR(50),
    loero INT,
    kilometer_ora_allasa DOUBLE,
    uzemanyag_tipus VARCHAR(50),
    fogyasztas DOUBLE,
    uzemanyag_szint DOUBLE
);