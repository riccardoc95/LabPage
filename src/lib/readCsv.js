import fs from "fs";
import path from "path";
import Papa from "papaparse";

/**
 * Legge un file CSV dalla cartella /data e restituisce un array di oggetti.
 * @param {string} filename - Nome del file CSV (es. "projects.csv" o "people.csv")
 * @returns {Array<Object>}
 */
export function readCsv(filename) {
    const filePath = path.join(process.cwd(), "data", filename);
    const file = fs.readFileSync(filePath, "utf8");

    const { data } = Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
    });

    return data;
}
