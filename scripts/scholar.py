import json
import time
from scholarly import scholarly
from pathlib import Path

# === Load JSON Data ===
with open("src/data/people.json", "r", encoding="utf-8") as f:
    people = json.load(f)

# === Extract Unique Scholar IDs ===
scholar_ids = set()
for person in people:
    sid = person.get("gscholar", "").strip()
    if sid:
        scholar_ids.add(sid)

print(f"Found {len(scholar_ids)} unique Google Scholar IDs.")


def publication_to_bibtex(pub, index):
    bib = pub.get('bib', {})
    title = bib.get('title', '')
    author = bib.get('author', '')
    journal = bib.get('journal', '')

    # Try to get year robustly
    year = (
        bib.get('year')
        or str(pub.get('year', ''))
        or bib.get('pub_year', '')
    )

    abstract = bib.get('abstract', '')
    doi = bib.get('doi', '')
    eprint_url = pub.get('eprint_url', '')
    pub_url = pub.get('pub_url', '')

    # Better BibTeX key, avoid spaces and special chars
    author_part = author.split(',')[0].replace(' ', '').replace('.', '') if author else 'unknown'
    bibkey = f"{author_part}{year}a{index}"

    entry_type = "article" if journal else "misc"

    bibtex = f"@{entry_type}{{{bibkey},\n"
    bibtex += f"  title={{ {title} }},\n"
    if author:
        bibtex += f"  author={{ {author} }},\n"
    if journal:
        bibtex += f"  journal={{ {journal} }},\n"
    if year:
        bibtex += f"  year={{ {year} }},\n"
    if abstract:
        bibtex += f"  abstract={{ {abstract} }},\n"
    if doi:
        bibtex += f"  doi={{ {doi} }},\n"
    if pub_url:
        bibtex += f"  link={{ {pub_url} }},\n"
    elif eprint_url:
        bibtex += f"  link={{ {eprint_url} }},\n"
    bibtex += "}\n"
    return bibtex

# === Collect all BibTeX entries ===
all_bib_entries = []

for idx, sid in enumerate(scholar_ids):
    print(f"\n[{idx+1}/{len(scholar_ids)}] Fetching publications for Scholar ID: {sid}")
    try:
        author = scholarly.search_author_id(sid)
        author = scholarly.fill(author, sections=['publications'])

        publications = author.get('publications', [])
        print(f"  Found {len(publications)} publications.")

        for i, pub in enumerate(publications):
            # Retrieve full publication data to get Bib info
            try:
                filled_pub = scholarly.fill(pub)
                bib_entry = publication_to_bibtex(filled_pub, i)
                all_bib_entries.append(bib_entry)
                print(f"    Added publication: {filled_pub.get('bib', {}).get('title','')}")

                time.sleep(1)  # avoid hammering Google Scholar
            except Exception as e:
                print(f"    [!] Failed to fetch publication details: {e}")
    except Exception as e:
        print(f"[!] Failed to fetch author details: {e}")

    time.sleep(2)  # extra delay between authors

# === Write to bib file ===
output_file = "src/data/publications.bib"
with open(output_file, "w", encoding="utf-8") as f:
    f.write('\n'.join(all_bib_entries))

print(f"\n✅ Saved {len(all_bib_entries)} BibTeX entries to: {output_file}")
