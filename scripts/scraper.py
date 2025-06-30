import json
from scholarly import scholarly
import csv

gscholar_ids = []

with open("public/data/people.csv", newline="", encoding="utf-8") as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        scholar_id = row["gscholarid"].strip()
        if scholar_id.upper() != "NA" and scholar_id != "":
            gscholar_ids.append(scholar_id)

print("Valid Google Scholar IDs:", gscholar_ids)

# Set to collect paper data
all_papers = []

# Set to avoid duplicates
seen_titles = set()

for user_id in gscholar_ids:
    print(f"Searching for author: {user_id}")
    author = scholarly.search_author_id(user_id)

    try:
        author = scholarly.fill(author)
        publications = author.get("publications", [])

        for pub in publications:
            paper = scholarly.fill(pub)
            title = paper.get("bib", {}).get("title", "")

            if title not in seen_titles:
                authors = paper.get("bib", {}).get("author", "")
                all_papers.append({
                    "title": title,
                    "authors": authors,
                    "year": paper.get("bib", {}).get("pub_year", ""),
                    "venue": paper.get("bib", {}).get("venue", ""),
                    "abstract": paper.get("bib", {}).get("abstract", ""),
                    "cited_by": paper.get("num_citations", 0),
                    "link": paper.get("pub_url", "")
                })
                seen_titles.add(title)

    except StopIteration:
        print(f"No results found for author: {author_name}")

# Save results to JSON
with open("scripts/papers.json", "w", encoding="utf-8") as f:
    json.dump(all_papers, f, indent=2, ensure_ascii=False)

rows = []
for paper in all_papers:
    row = {
        "type": "article",
        "title": paper["title"],
        "time": "",
        "summary": paper["abstract"],
        "date": paper["year"],
        "link": paper.get("link", ""),
        "img": "images/research/blank.png"
    }
    rows.append(row)
with open("public/data/research.csv", "w", newline="", encoding="utf-8") as csvfile:
    fieldnames = ["type", "title", "time", "summary", "date", "link", "img"]
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(rows)


print(f"\nCollected {len(all_papers)} unique papers.")
