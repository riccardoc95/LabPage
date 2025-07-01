const fs = require("fs");
const path = require("path");
const bibtexParse = require("@orcid/bibtex-parse-js");

// Define paths
const inputPath = path.join(__dirname, "../src/data/publications.bib");
const outputPath = path.join(__dirname, "../src/data/publications.json");

// Read BibTeX
const bibStr = fs.readFileSync(inputPath, "utf8");

// Parse BibTeX
const parsed = bibtexParse.toJSON(bibStr);

// Normalize keys to lowercase
const bibEntries = parsed.map(entry => ({
    type: entry.entryType,
    entry: Object.fromEntries(
        Object.entries(entry.entryTags || {}).map(([k, v]) => [k.toLowerCase(), v])
    ),
}));

bibEntries.sort((a, b) => {
    // Convert year strings to numbers, default to 0 if missing or invalid
    const yearA = parseInt(a.entry.year) || 0;
    const yearB = parseInt(b.entry.year) || 0;
    return yearB - yearA; // descending order
});

// Write JSON
fs.writeFileSync(outputPath, JSON.stringify(bibEntries, null, 2), "utf8");

console.log("✅ Converted publications.bib → publications.json");